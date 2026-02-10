(function() {
  "use strict";
  class IPGeoWorker {
    constructor() {
      this.cache = /* @__PURE__ */ new Map();
      this.CACHE_SIZE_LIMIT = 5e4;
      this.CACHE_CLEANUP_THRESHOLD = 45e3;
      this.cacheHits = 0;
      this.cacheMisses = 0;
      this.processing = false;
      console.log("[IPGeoWorker] WebWorker初始化完成");
    }
    async handleMessage(event) {
      const { type, payload, id } = event.data;
      try {
        switch (type) {
          case "BATCH_QUERY":
            await this.handleBatchQuery(payload.ips, id);
            break;
          case "SINGLE_QUERY":
            await this.handleSingleQuery(payload.ip, id);
            break;
          case "CACHE_STATS":
            this.sendCacheStats(id);
            break;
          default:
            this.sendError(`未知消息类型: ${type}`, id);
        }
      } catch (error) {
        this.sendError(`处理消息失败: ${error.message}`, id);
      }
    }
    async handleBatchQuery(ips, messageId) {
      if (this.processing) {
        this.sendError("Worker正在处理其他任务", messageId);
        return;
      }
      this.processing = true;
      const startTime = Date.now();
      console.log(`[IPGeoWorker] 开始批量查询 ${ips.length} 个IP`);
      try {
        const results = /* @__PURE__ */ new Map();
        const uncachedIPs = [];
        for (const ip of ips) {
          if (this.cache.has(ip)) {
            this.cacheHits++;
            results.set(ip, this.cache.get(ip));
          } else {
            uncachedIPs.push(ip);
          }
        }
        console.log(`[IPGeoWorker] 缓存命中: ${results.size}, 需要查询: ${uncachedIPs.length}`);
        if (uncachedIPs.length > 0) {
          await this.batchQueryUncached(uncachedIPs, results);
        }
        const duration = Date.now() - startTime;
        console.log(`[IPGeoWorker] 批量查询完成: ${ips.length}个IP, 用时${duration}ms`);
        this.sendResponse("BATCH_RESULT", {
          results: Array.from(results.entries()),
          stats: {
            total: ips.length,
            cached: results.size - uncachedIPs.length,
            queried: uncachedIPs.length,
            duration
          }
        }, messageId);
      } finally {
        this.processing = false;
      }
    }
    async batchQueryUncached(ips, results) {
      const BATCH_SIZE = 50;
      const batches = [];
      for (let i = 0; i < ips.length; i += BATCH_SIZE) {
        batches.push(ips.slice(i, i + BATCH_SIZE));
      }
      console.log(`[IPGeoWorker] 分${batches.length}批处理，每批${BATCH_SIZE}个IP`);
      const promises = batches.map(async (batch, index) => {
        try {
          const batchResults = await this.callMainProcess("batchGetLocations", batch);
          for (const [ip, location] of batchResults) {
            this.cacheMisses++;
            this.cacheLocation(ip, location);
            results.set(ip, location);
          }
          console.log(`[IPGeoWorker] 批次${index + 1}完成: ${batchResults.length}个结果`);
        } catch (error) {
          console.error(`[IPGeoWorker] 批次${index + 1}失败:`, error);
          for (const ip of batch) {
            if (!results.has(ip)) {
              const defaultLocation = this.getDefaultLocation(ip);
              this.cacheLocation(ip, defaultLocation);
              results.set(ip, defaultLocation);
            }
          }
        }
      });
      await Promise.all(promises);
    }
    async handleSingleQuery(ip, messageId) {
      try {
        if (this.cache.has(ip)) {
          this.cacheHits++;
          this.sendResponse("SINGLE_RESULT", this.cache.get(ip), messageId);
          return;
        }
        this.cacheMisses++;
        const location = await this.callMainProcess("getLocation", ip);
        this.cacheLocation(ip, location);
        this.sendResponse("SINGLE_RESULT", location, messageId);
      } catch (error) {
        console.error(`[IPGeoWorker] 单个IP查询失败 ${ip}:`, error);
        const defaultLocation = this.getDefaultLocation(ip);
        this.cacheLocation(ip, defaultLocation);
        this.sendResponse("SINGLE_RESULT", defaultLocation, messageId);
      }
    }
    async callMainProcess(method, ...args) {
      return new Promise((resolve, reject) => {
        const requestId = Date.now().toString() + Math.random().toString(36);
        self.postMessage({
          type: "API_CALL",
          payload: { method, args },
          id: requestId
        });
        const handleResponse = (event) => {
          if (event.data.type === "API_RESPONSE" && event.data.id === requestId) {
            self.removeEventListener("message", handleResponse);
            if (event.data.error) {
              reject(new Error(event.data.error));
            } else {
              resolve(event.data.payload);
            }
          }
        };
        self.addEventListener("message", handleResponse);
      });
    }
    cacheLocation(ip, location) {
      if (this.cache.size >= this.CACHE_SIZE_LIMIT) {
        const keysToDelete = Array.from(this.cache.keys()).slice(0, this.cache.size - this.CACHE_CLEANUP_THRESHOLD);
        keysToDelete.forEach((key) => this.cache.delete(key));
        console.log(`[IPGeoWorker] 清理缓存，删除 ${keysToDelete.length} 条记录`);
      }
      this.cache.set(ip, location);
    }
    getDefaultLocation(ip) {
      const ipHash = this.simpleHash(ip);
      const latOffset = (ipHash % 1e3 / 1e3 - 0.5) * 0.5;
      const lngOffset = ((ipHash >> 10) % 1e3 / 1e3 - 0.5) * 0.5;
      return {
        ip,
        country: "未知地区",
        countryCode: "UNKNOWN",
        city: "未知城市",
        latitude: 39.9042 + latOffset,
        longitude: 116.4074 + lngOffset,
        isValid: this.isValidIP(ip),
        isPrivate: this.isPrivateIP(ip)
      };
    }
    simpleHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
      }
      return Math.abs(hash);
    }
    isValidIP(ip) {
      if (!ip || typeof ip !== "string") return false;
      const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
      return ipv4Regex.test(ip) && ip.split(".").every((part) => {
        const num = parseInt(part);
        return num >= 0 && num <= 255;
      });
    }
    isPrivateIP(ip) {
      if (!this.isValidIP(ip)) return true;
      const parts = ip.split(".").map(Number);
      return parts[0] === 10 || parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31 || parts[0] === 192 && parts[1] === 168 || parts[0] === 127 || parts[0] === 0 || parts[0] >= 224;
    }
    sendResponse(type, payload, id) {
      self.postMessage({
        type,
        payload,
        id
      });
    }
    sendError(error, id) {
      self.postMessage({
        type: "ERROR",
        payload: { error },
        id
      });
    }
    sendCacheStats(id) {
      const totalRequests = this.cacheHits + this.cacheMisses;
      this.sendResponse("CACHE_STATS", {
        size: this.cache.size,
        limit: this.CACHE_SIZE_LIMIT,
        hitRate: totalRequests > 0 ? this.cacheHits / totalRequests : 0,
        hits: this.cacheHits,
        misses: this.cacheMisses,
        processing: this.processing
      }, id);
    }
  }
  const worker = new IPGeoWorker();
  self.addEventListener("message", (event) => {
    worker.handleMessage(event);
  });
})();
