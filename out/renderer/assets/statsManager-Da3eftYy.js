class StatsManager {
  constructor() {
    this.worker = null;
    this.taskCounter = 0;
    this.CHUNK_SIZE = 1e4;
  }
  // 每块处理1万条记录
  // 序列化日志条目 - 确保所有字段都是可序列化的
  serializeLogEntry(log) {
    try {
      return {
        id: log.id || `entry-${Date.now()}-${Math.random()}`,
        timestamp: log.timestamp ? log.timestamp.toISOString() : null,
        ip: this.safeString(log.ip),
        method: this.safeString(log.method),
        path: this.safeString(log.path),
        statusCode: this.safeNumber(log.statusCode),
        responseSize: this.safeNumber(log.responseSize),
        userAgent: this.safeString(log.userAgent),
        referer: this.safeString(log.referer),
        threatLevel: this.safeString(log.threatLevel),
        threats: this.safeArray(log.threats),
        raw: this.safeString(log.raw) || ""
      };
    } catch (error) {
      console.warn("[StatsManager] Failed to serialize log entry:", error);
      return {
        id: `fallback-${Date.now()}-${Math.random()}`,
        timestamp: null,
        ip: null,
        method: null,
        path: null,
        statusCode: null,
        responseSize: null,
        userAgent: null,
        referer: null,
        threatLevel: null,
        threats: [],
        raw: String(log.raw || "")
      };
    }
  }
  // 安全的字符串转换
  safeString(value) {
    if (value === null || value === void 0) return null;
    if (typeof value === "string") return value;
    if (typeof value === "number" || typeof value === "boolean") return String(value);
    try {
      return String(value);
    } catch {
      return null;
    }
  }
  // 安全的数字转换
  safeNumber(value) {
    if (value === null || value === void 0) return null;
    if (typeof value === "number" && !isNaN(value)) return value;
    if (typeof value === "string") {
      const parsed = parseFloat(value);
      return isNaN(parsed) ? null : parsed;
    }
    return null;
  }
  // 安全的数组转换
  safeArray(value) {
    if (!value) return [];
    if (Array.isArray(value)) {
      return value.map((item) => this.safeString(item)).filter((item) => item !== null);
    }
    return [];
  }
  // 序列化日志数组
  serializeLogs(logs) {
    return logs.map((log) => this.serializeLogEntry(log));
  }
  async createWorker() {
    if (this.worker) {
      return this.worker;
    }
    const workerCode = `
      ${await this.getWorkerCode()}
    `;
    const blob = new Blob([workerCode], { type: "application/javascript" });
    const workerUrl = URL.createObjectURL(blob);
    this.worker = new Worker(workerUrl);
    URL.revokeObjectURL(workerUrl);
    return this.worker;
  }
  async getWorkerCode() {
    return `
      // 统计结果接口和 Worker 代码
      self.onmessage = async function(e) {
        const { id, logs } = e.data
        
        try {
          const result = await calculateStats(logs)
          self.postMessage({
            id,
            success: true,
            result
          })
        } catch (error) {
          self.postMessage({
            id,
            success: false,
            error: error.message || String(error)
          })
        }
      }

             async function calculateStats(serializedLogs) {
         if (serializedLogs.length === 0) {
           return {
             totalLogs: 0,
             uniqueIPs: 0,
             uniquePaths: 0,
             averageResponseSize: 0,
             totalResponseSize: 0,
             timeRange: { start: null, end: null },
             topIPs: [],
             topPaths: [],
             statusCodeDistribution: {},
             methodDistribution: {},
             hourlyDistribution: {},
             threatDistribution: {}
           }
         }
         
         // 使用 Map 进行高效统计
         const ipSet = new Set()
         const pathSet = new Set()
         const ipCounts = new Map()
         const pathCounts = new Map()
         const statusCounts = new Map()
         const methodCounts = new Map()
         const hourCounts = new Map()
         const threatCounts = new Map()
         
         let totalResponseSize = 0
         let responseSizeCount = 0
         let minTimestamp = null
         let maxTimestamp = null
         
         // 分批处理，避免内存压力
         const batchSize = 1000
         for (let i = 0; i < serializedLogs.length; i += batchSize) {
           const batch = serializedLogs.slice(i, i + batchSize)
           
           for (const log of batch) {
             // IP 统计
             if (log.ip) {
               ipSet.add(log.ip)
               ipCounts.set(log.ip, (ipCounts.get(log.ip) || 0) + 1)
             }
             
             // 路径统计
             if (log.path) {
               pathSet.add(log.path)
               pathCounts.set(log.path, (pathCounts.get(log.path) || 0) + 1)
             }
             
             // 状态码统计
             if (log.statusCode) {
               const code = log.statusCode.toString()
               statusCounts.set(code, (statusCounts.get(code) || 0) + 1)
             }
             
             // 方法统计
             if (log.method) {
               methodCounts.set(log.method, (methodCounts.get(log.method) || 0) + 1)
             }
             
             // 时间统计 - 反序列化时间戳并避免使用扩展运算符
             if (log.timestamp) {
               try {
                 const timestamp = new Date(log.timestamp).getTime()
                 if (!isNaN(timestamp)) {
                   if (minTimestamp === null || timestamp < minTimestamp) {
                     minTimestamp = timestamp
                   }
                   if (maxTimestamp === null || timestamp > maxTimestamp) {
                     maxTimestamp = timestamp
                   }
                   
                   const hour = new Date(timestamp).getHours()
                   hourCounts.set(hour, (hourCounts.get(hour) || 0) + 1)
                 }
               } catch (error) {
                 // 忽略无效的时间戳
                 console.warn('Invalid timestamp:', log.timestamp)
               }
             }
             
             // 响应大小统计
             if (log.responseSize != null && log.responseSize > 0) {
               totalResponseSize += log.responseSize
               responseSizeCount++
             }
             
             // 威胁等级统计
             if (log.threatLevel) {
               threatCounts.set(log.threatLevel, (threatCounts.get(log.threatLevel) || 0) + 1)
             }
           }
           
           // 每处理 5000 条记录让出控制权
           if (i % 5000 === 0 && i > 0) {
             await new Promise(resolve => setTimeout(resolve, 0))
           }
         }
         
         // 计算平均响应大小
         const averageResponseSize = responseSizeCount > 0 ? Math.round(totalResponseSize / responseSizeCount) : 0
         
         // 时间范围
         const timeRange = minTimestamp !== null && maxTimestamp !== null ? {
           start: new Date(minTimestamp),
           end: new Date(maxTimestamp)
         } : { start: null, end: null }
         
         // 转换为排序数组 - TOP 10
         const topIPs = Array.from(ipCounts.entries())
           .sort((a, b) => b[1] - a[1])
           .slice(0, 10)
           .map(([ip, count]) => ({ name: ip, count }))
           
         const topPaths = Array.from(pathCounts.entries())
           .sort((a, b) => b[1] - a[1])
           .slice(0, 10)
           .map(([path, count]) => ({ name: path, count }))
         
         return {
           totalLogs: serializedLogs.length,
           uniqueIPs: ipSet.size,
           uniquePaths: pathSet.size,
           averageResponseSize,
           totalResponseSize,
           timeRange,
           topIPs,
           topPaths,
           statusCodeDistribution: Object.fromEntries(statusCounts),
           methodDistribution: Object.fromEntries(methodCounts),
           hourlyDistribution: Object.fromEntries(hourCounts),
           threatDistribution: Object.fromEntries(threatCounts)
         }
       }
    `;
  }
  async calculateStats(logs) {
    console.log(`[StatsManager] Starting calculation for ${logs.length} logs`);
    if (logs.length > this.CHUNK_SIZE) {
      return this.calculateStatsInChunks(logs);
    } else {
      return this.calculateStatsSingleChunk(logs);
    }
  }
  async calculateStatsSingleChunk(logs) {
    const worker = await this.createWorker();
    const taskId = `stats-task-${++this.taskCounter}`;
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error("统计计算超时"));
      }, 6e4);
      const messageHandler = (e) => {
        if (e.data.id === taskId) {
          clearTimeout(timeout);
          worker.removeEventListener("message", messageHandler);
          worker.removeEventListener("error", errorHandler);
          if (e.data.success && e.data.result) {
            resolve(e.data.result);
          } else {
            reject(new Error(e.data.error || "统计计算失败"));
          }
        }
      };
      const errorHandler = (error) => {
        clearTimeout(timeout);
        worker.removeEventListener("message", messageHandler);
        worker.removeEventListener("error", errorHandler);
        reject(new Error(`Worker 错误: ${error.message}`));
      };
      worker.addEventListener("message", messageHandler);
      worker.addEventListener("error", errorHandler);
      const serializedLogs = this.serializeLogs(logs);
      const message = {
        id: taskId,
        logs: serializedLogs
      };
      worker.postMessage(message);
    });
  }
  async calculateStatsInChunks(logs) {
    console.log(`[StatsManager] Processing ${logs.length} logs in chunks of ${this.CHUNK_SIZE}`);
    const chunks = [];
    for (let i = 0; i < logs.length; i += this.CHUNK_SIZE) {
      chunks.push(logs.slice(i, i + this.CHUNK_SIZE));
    }
    console.log(`[StatsManager] Created ${chunks.length} chunks`);
    const chunkPromises = chunks.map(
      (chunk, index) => this.calculateStatsSingleChunk(chunk)
    );
    const chunkResults = await Promise.all(chunkPromises);
    return this.mergeStatsResults(chunkResults, logs.length);
  }
  mergeStatsResults(results, totalLogs) {
    if (results.length === 0) {
      throw new Error("No results to merge");
    }
    if (results.length === 1) {
      return results[0];
    }
    console.log(`[StatsManager] Merging ${results.length} chunk results`);
    const merged = {
      totalLogs,
      uniqueIPs: 0,
      uniquePaths: 0,
      averageResponseSize: 0,
      totalResponseSize: 0,
      timeRange: { start: null, end: null },
      topIPs: [],
      topPaths: [],
      statusCodeDistribution: {},
      methodDistribution: {},
      hourlyDistribution: {},
      threatDistribution: {}
    };
    const allIPs = /* @__PURE__ */ new Set();
    const allPaths = /* @__PURE__ */ new Set();
    const ipCounts = /* @__PURE__ */ new Map();
    const pathCounts = /* @__PURE__ */ new Map();
    const statusCounts = /* @__PURE__ */ new Map();
    const methodCounts = /* @__PURE__ */ new Map();
    const hourCounts = /* @__PURE__ */ new Map();
    const threatCounts = /* @__PURE__ */ new Map();
    let totalResponseSize = 0;
    let minTimestamp = null;
    let maxTimestamp = null;
    for (const result of results) {
      result.topIPs.forEach((item) => {
        allIPs.add(item.name);
        ipCounts.set(item.name, (ipCounts.get(item.name) || 0) + item.count);
      });
      result.topPaths.forEach((item) => {
        allPaths.add(item.name);
        pathCounts.set(item.name, (pathCounts.get(item.name) || 0) + item.count);
      });
      Object.entries(result.statusCodeDistribution).forEach(([code, count]) => {
        statusCounts.set(code, (statusCounts.get(code) || 0) + count);
      });
      Object.entries(result.methodDistribution).forEach(([method, count]) => {
        methodCounts.set(method, (methodCounts.get(method) || 0) + count);
      });
      Object.entries(result.hourlyDistribution).forEach(([hour, count]) => {
        const hourNum = parseInt(hour);
        hourCounts.set(hourNum, (hourCounts.get(hourNum) || 0) + count);
      });
      Object.entries(result.threatDistribution).forEach(([threat, count]) => {
        threatCounts.set(threat, (threatCounts.get(threat) || 0) + count);
      });
      totalResponseSize += result.totalResponseSize;
      if (result.timeRange.start) {
        if (!minTimestamp || result.timeRange.start < minTimestamp) {
          minTimestamp = result.timeRange.start;
        }
      }
      if (result.timeRange.end) {
        if (!maxTimestamp || result.timeRange.end > maxTimestamp) {
          maxTimestamp = result.timeRange.end;
        }
      }
    }
    merged.uniqueIPs = allIPs.size;
    merged.uniquePaths = allPaths.size;
    merged.totalResponseSize = totalResponseSize;
    merged.averageResponseSize = totalLogs > 0 ? Math.round(totalResponseSize / totalLogs) : 0;
    merged.timeRange = { start: minTimestamp, end: maxTimestamp };
    merged.topIPs = Array.from(ipCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([name, count]) => ({ name, count }));
    merged.topPaths = Array.from(pathCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([name, count]) => ({ name, count }));
    merged.statusCodeDistribution = Object.fromEntries(statusCounts);
    merged.methodDistribution = Object.fromEntries(methodCounts);
    merged.hourlyDistribution = Object.fromEntries(hourCounts);
    merged.threatDistribution = Object.fromEntries(threatCounts);
    console.log(`[StatsManager] Merge completed: ${merged.uniqueIPs} unique IPs, ${merged.uniquePaths} unique paths`);
    return merged;
  }
  destroy() {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
  }
}
const statsManager = new StatsManager();
export {
  StatsManager,
  statsManager
};
