class IPGeoLocationAdvancedService {
  // 任务队列
  constructor() {
    this.backendStatus = null;
    this.cache = /* @__PURE__ */ new Map();
    this.CACHE_SIZE_LIMIT = 1e4;
    this.CACHE_CLEANUP_THRESHOLD = 8e3;
    this.cacheHits = 0;
    this.cacheMisses = 0;
    this.worker = null;
    this.workerEnabled = false;
    this.pendingRequests = /* @__PURE__ */ new Map();
    this.isWorkerBusy = false;
    this.taskQueue = [];
    this.initializeWorker();
    this.checkBackendStatus();
  }
  async initializeWorker() {
    try {
      this.worker = new Worker(
        new URL(
          /* @vite-ignore */
          "" + new URL("ipWorker-zMIG7yrZ.js", import.meta.url).href,
          import.meta.url
        ),
        { type: "module" }
      );
      this.worker.onmessage = (event) => {
        this.handleWorkerMessage(event.data);
      };
      this.worker.onerror = (error) => {
        console.error("[IPGeoLocationAdvancedService] Worker错误:", error);
        this.workerEnabled = false;
      };
      this.workerEnabled = true;
      console.log("[IPGeoLocationAdvancedService] WebWorker已启用");
    } catch (error) {
      console.warn("[IPGeoLocationAdvancedService] WebWorker初始化失败:", error);
      this.workerEnabled = false;
    }
  }
  handleWorkerMessage(data) {
    const { type, requestId, payload, error } = data;
    if (type === "API_CALL") {
      this.handleWorkerAPICall(payload, requestId);
      return;
    }
    const pending = this.pendingRequests.get(requestId);
    if (!pending) return;
    this.pendingRequests.delete(requestId);
    if (error) {
      pending.reject(new Error(error));
    } else {
      pending.resolve(payload);
    }
    this.isWorkerBusy = false;
    this.processNextTask();
  }
  async handleWorkerAPICall(payload, requestId) {
    try {
      const { method, args } = payload;
      let result;
      switch (method) {
        case "getLocation":
          result = await window.api.ipGeo.getLocation(args[0]);
          break;
        case "batchGetLocations":
          result = await window.api.ipGeo.batchGetLocations(args[0]);
          break;
        default:
          throw new Error(`未支持的API方法: ${method}`);
      }
      this.worker?.postMessage({
        type: "API_RESPONSE",
        payload: result,
        requestId
      });
    } catch (error) {
      this.worker?.postMessage({
        type: "API_RESPONSE",
        error: error.message,
        requestId
      });
    }
  }
  processNextTask() {
    if (this.isWorkerBusy || this.taskQueue.length === 0) {
      return;
    }
    const task = this.taskQueue.shift();
    if (task) {
      this.isWorkerBusy = true;
      this.sendWorkerMessageDirectly(task.type, task.payload).then(task.resolve).catch(task.reject);
    }
  }
  sendWorkerMessageDirectly(type, payload) {
    return new Promise((resolve, reject) => {
      if (!this.worker || !this.workerEnabled) {
        reject(new Error("Worker不可用"));
        return;
      }
      const requestId = `${type}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      this.pendingRequests.set(requestId, { resolve, reject });
      this.worker.postMessage({
        type,
        requestId,
        payload
      });
      const timeoutMs = type === "BATCH_QUERY" ? 24e4 : 6e4;
      setTimeout(() => {
        if (this.pendingRequests.has(requestId)) {
          this.pendingRequests.delete(requestId);
          this.isWorkerBusy = false;
          this.processNextTask();
          reject(new Error(`Worker请求超时: ${type}`));
        }
      }, timeoutMs);
    });
  }
  sendWorkerMessage(type, payload) {
    return new Promise((resolve, reject) => {
      if (!this.worker || !this.workerEnabled) {
        reject(new Error("Worker不可用"));
        return;
      }
      if (this.isWorkerBusy) {
        this.taskQueue.push({ type, payload, resolve, reject });
        return;
      }
      this.isWorkerBusy = true;
      this.sendWorkerMessageDirectly(type, payload).then(resolve).catch(reject);
    });
  }
  async checkBackendStatus() {
    try {
      const status = await window.api.ipGeo.getStatus();
      this.backendStatus = status;
      console.log("[IPGeoLocationAdvancedService] 后端服务状态:", status);
      if (status.initialized) {
        console.log(`[IPGeoLocationAdvancedService] MaxMind数据库已就绪:`);
        console.log(`  - 城市数据库: ${status.cityDbLoaded ? "✓ 已加载" : "✗ 未加载"}`);
        console.log(`  - 国家数据库: ${status.countryDbLoaded ? "✓ 已加载" : "✗ 未加载"}`);
        console.log(`  - ASN数据库: ${status.asnDbLoaded ? "✓ 已加载" : "✗ 未加载"}`);
        console.log(`  - 后端缓存大小: ${status.cacheSize}`);
        console.log(`  - WebWorker状态: ${this.workerEnabled ? "✓ 已启用" : "✗ 禁用"}`);
      } else {
        console.warn("[IPGeoLocationAdvancedService] ⚠️ 后端MaxMind数据库未初始化");
      }
    } catch (error) {
      console.error("[IPGeoLocationAdvancedService] ❌ 无法获取后端状态:", error);
      this.backendStatus = null;
    }
  }
  async getAdvancedLocation(ip) {
    if (!this.isValidIP(ip)) {
      console.warn(`[IPGeoLocationAdvancedService] 无效IP地址: ${ip}`);
      return null;
    }
    if (this.workerEnabled) {
      try {
        const result = await this.sendWorkerMessage("SINGLE_QUERY", { ip });
        console.log(`[IPGeoLocationAdvancedService] Worker查询成功: ${ip} -> ${result.city}, ${result.country}`);
        return result;
      } catch (error) {
        console.warn(`[IPGeoLocationAdvancedService] Worker查询失败，回退到主线程: ${ip}`, error);
      }
    }
    return this.getAdvancedLocationMainThread(ip);
  }
  async getAdvancedLocationMainThread(ip) {
    if (this.cache.has(ip)) {
      this.cacheHits++;
      const cached = this.cache.get(ip);
      console.log(`[IPGeoLocationAdvancedService] 主线程缓存命中: ${ip} -> ${cached.city}, ${cached.country}`);
      return cached;
    }
    this.cacheMisses++;
    try {
      const backendResult = await window.api.ipGeo.getLocation(ip);
      if (!this.validateLocationInfo(backendResult)) {
        console.warn(`[IPGeoLocationAdvancedService] 后端返回无效数据: ${ip}`);
        return this.getDefaultLocation(ip);
      }
      this.cacheLocation(ip, backendResult);
      console.log(`[IPGeoLocationAdvancedService] IP查询成功: ${ip} -> ${backendResult.city}, ${backendResult.country} (${backendResult.latitude}, ${backendResult.longitude})`);
      return backendResult;
    } catch (error) {
      console.error(`[IPGeoLocationAdvancedService] IP查询失败: ${ip}`, error);
      const defaultLocation = this.getDefaultLocation(ip);
      this.cacheLocation(ip, defaultLocation);
      return defaultLocation;
    }
  }
  // 批量查询接口，优先使用WebWorker
  async batchGetAdvancedLocations(ips) {
    const validIPs = ips.filter((ip) => this.isValidIP(ip));
    if (validIPs.length === 0) {
      console.warn("[IPGeoLocationAdvancedService] 批量查询中无有效IP");
      return /* @__PURE__ */ new Map();
    }
    console.log(`[IPGeoLocationAdvancedService] 使用主线程批量处理 ${validIPs.length} 个IP`);
    return this.batchGetAdvancedLocationsMainThread(validIPs);
  }
  async batchGetAdvancedLocationsMainThread(validIPs) {
    const results = /* @__PURE__ */ new Map();
    const uncachedIPs = [];
    for (const ip of validIPs) {
      if (this.cache.has(ip)) {
        this.cacheHits++;
        results.set(ip, this.cache.get(ip));
      } else {
        uncachedIPs.push(ip);
      }
    }
    if (uncachedIPs.length === 0) {
      console.log(`[IPGeoLocationAdvancedService] 主线程批量查询完成: ${validIPs.length} 个IP，全部命中缓存`);
      return results;
    }
    try {
      const backendResults = await window.api.ipGeo.batchGetLocations(uncachedIPs);
      for (const [ip, backendResult] of backendResults) {
        this.cacheMisses++;
        if (this.validateLocationInfo(backendResult)) {
          this.cacheLocation(ip, backendResult);
          results.set(ip, backendResult);
        } else {
          const defaultLocation = this.getDefaultLocation(ip);
          this.cacheLocation(ip, defaultLocation);
          results.set(ip, defaultLocation);
        }
      }
      for (const ip of uncachedIPs) {
        if (!results.has(ip)) {
          const defaultLocation = this.getDefaultLocation(ip);
          this.cacheLocation(ip, defaultLocation);
          results.set(ip, defaultLocation);
        }
      }
      console.log(`[IPGeoLocationAdvancedService] 主线程批量查询完成: ${validIPs.length} 个IP，${uncachedIPs.length} 个新查询，${backendResults.length} 个成功`);
      return results;
    } catch (error) {
      console.error("[IPGeoLocationAdvancedService] 主线程批量查询失败:", error);
      for (const ip of uncachedIPs) {
        if (!results.has(ip)) {
          const defaultLocation = this.getDefaultLocation(ip);
          this.cacheLocation(ip, defaultLocation);
          results.set(ip, defaultLocation);
        }
      }
      return results;
    }
  }
  validateLocationInfo(location) {
    return !!(location && location.ip && typeof location.latitude === "number" && typeof location.longitude === "number" && location.latitude >= -90 && location.latitude <= 90 && location.longitude >= -180 && location.longitude <= 180);
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
  /**
   * 简单哈希函数
   */
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
    if (!ip || typeof ip !== "string" || ip === "unknown" || ip === "0.0.0.0") {
      return false;
    }
    const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (ipv4Regex.test(ip)) {
      const parts = ip.split(".").map(Number);
      return parts.every((part) => part >= 0 && part <= 255);
    }
    const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return ipv6Regex.test(ip);
  }
  isPrivateIP(ip) {
    if (!this.isValidIP(ip)) return true;
    if (!ip.includes(".")) return false;
    const parts = ip.split(".").map(Number);
    if (parts.length !== 4 || parts.some((part) => isNaN(part))) return true;
    return parts[0] === 10 || parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31 || parts[0] === 192 && parts[1] === 168 || parts[0] === 127 || // 回环地址
    parts[0] === 0 || // 无效地址
    parts[0] >= 224;
  }
  cacheLocation(ip, location) {
    if (this.cache.size >= this.CACHE_SIZE_LIMIT) {
      const keysToDelete = Array.from(this.cache.keys()).slice(0, this.cache.size - this.CACHE_CLEANUP_THRESHOLD);
      keysToDelete.forEach((key) => this.cache.delete(key));
      console.log(`[IPGeoLocationAdvancedService] 清理本地缓存，删除 ${keysToDelete.length} 条记录`);
    }
    this.cache.set(ip, location);
  }
  async getServiceStatus() {
    const backendStatus = this.backendStatus;
    const totalRequests = this.cacheHits + this.cacheMisses;
    const hitRate = totalRequests > 0 ? this.cacheHits / totalRequests : 0;
    return {
      frontendInitialized: this.backendStatus?.initialized || false,
      frontendCacheSize: this.cache.size,
      cacheHitRate: Math.round(hitRate * 100) / 100,
      backendStatus
    };
  }
  async reinitialize() {
    console.log("[IPGeoLocationAdvancedService] 重新初始化服务...");
    this.clearCache();
    this.cacheHits = 0;
    this.cacheMisses = 0;
    await window.api.ipGeo.reinitialize();
    await this.checkBackendStatus();
  }
  clearCache() {
    this.cache.clear();
    console.log("[IPGeoLocationAdvancedService] 前端缓存已清空");
  }
  async clearBackendCache() {
    await window.api.ipGeo.clearCache();
    console.log("[IPGeoLocationAdvancedService] 后端缓存已清空");
  }
  getCacheStats() {
    const totalRequests = this.cacheHits + this.cacheMisses;
    return {
      size: this.cache.size,
      limit: this.CACHE_SIZE_LIMIT,
      hitRate: totalRequests > 0 ? Math.round(this.cacheHits / totalRequests * 100) / 100 : 0,
      hits: this.cacheHits,
      misses: this.cacheMisses
    };
  }
  async getWorkerStats() {
    if (!this.workerEnabled) {
      return { enabled: false, error: "WebWorker不可用" };
    }
    try {
      const stats = await this.sendWorkerMessage("CACHE_STATS", {});
      return { enabled: true, ...stats };
    } catch (error) {
      return { enabled: false, error: error.message };
    }
  }
}
const ipGeoLocationAdvancedService = new IPGeoLocationAdvancedService();
export {
  ipGeoLocationAdvancedService as i
};
