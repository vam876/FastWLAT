import { a3 as defineStore, a4 as Dexie } from "./index-FPjz1pj-.js";
class LogDatabase extends Dexie {
  constructor() {
    super("FastWLATDB");
    this.version(1).stores({
      // 定义索引：id为主键，其他为索引字段
      logs: "id, timestamp, ip, method, statusCode, path"
    });
  }
}
const db = new LogDatabase();
const useIndexedDBStore = defineStore("indexedDBStore", {
  state: () => ({
    // 进度状态
    importProgress: {
      processed: 0,
      total: 0,
      percentage: 0,
      isImporting: false
    },
    // 缓存
    _statsCache: null,
    _statsCacheTime: 0
  }),
  actions: {
    async addLogEntries(entries) {
      const totalEntries = entries.length;
      console.log(`[IndexedDBStore] Adding ${totalEntries} entries...`);
      this.importProgress = {
        processed: 0,
        total: totalEntries,
        percentage: 0,
        isImporting: true
      };
      try {
        const batchSize = 5e3;
        for (let i = 0; i < totalEntries; i += batchSize) {
          const endIndex = Math.min(i + batchSize, totalEntries);
          const batch = entries.slice(i, endIndex);
          await db.logs.bulkAdd(batch);
          const progress = Math.round(endIndex / totalEntries * 100);
          this.importProgress = {
            processed: endIndex,
            total: totalEntries,
            percentage: progress,
            isImporting: true
          };
          console.log(`[IndexedDBStore] Progress: ${endIndex}/${totalEntries} (${progress}%)`);
          if (endIndex < totalEntries) {
            await new Promise((resolve) => setTimeout(resolve, 0));
          }
        }
        this.importProgress = {
          processed: totalEntries,
          total: totalEntries,
          percentage: 100,
          isImporting: false
        };
        console.log(`[IndexedDBStore] Successfully added ${totalEntries} entries`);
      } catch (error) {
        console.error(`[IndexedDBStore] Failed to add entries:`, error);
        this.importProgress.isImporting = false;
        throw error;
      }
    },
    async getLogEntries(page, pageSize) {
      const offset = (page - 1) * pageSize;
      const items = await db.logs.orderBy("timestamp").reverse().offset(offset).limit(pageSize).toArray();
      const total = await db.logs.count();
      return { items, total };
    },
    async getFilteredLogEntries(filters) {
      console.log(`[IndexedDBStore] Filtering with:`, filters);
      const startTime = performance.now();
      let query = db.logs.toCollection();
      if (filters.ip) {
        query = db.logs.where("ip").equals(filters.ip);
        console.log(`[IndexedDBStore] Using IP index for: ${filters.ip}`);
      } else if (filters.method) {
        query = db.logs.where("method").equals(filters.method);
        console.log(`[IndexedDBStore] Using method index for: ${filters.method}`);
      } else if (filters.statusCode && !filters.statusCode.includes(",") && !filters.statusCode.includes("xx")) {
        const statusNum = Number(filters.statusCode);
        if (!isNaN(statusNum)) {
          query = db.logs.where("statusCode").equals(statusNum);
          console.log(`[IndexedDBStore] Using statusCode index for: ${statusNum}`);
        }
      } else if (filters.path) {
        query = db.logs.where("path").equals(filters.path);
        console.log(`[IndexedDBStore] Using path index for: ${filters.path}`);
      }
      const filteredResults = await query.filter((entry) => this._matchesAllFilters(entry, filters)).toArray();
      const duration = performance.now() - startTime;
      console.log(`[IndexedDBStore] Filtered query completed in ${duration.toFixed(2)}ms, found ${filteredResults.length} results`);
      const start = (filters.page - 1) * filters.pageSize;
      const end = start + filters.pageSize;
      return {
        items: filteredResults.slice(start, end),
        total: filteredResults.length
      };
    },
    _matchesAllFilters(entry, filters) {
      if (filters.threatLevel && entry.threatLevel !== filters.threatLevel) {
        return false;
      }
      if (filters.method && entry.method !== filters.method) {
        return false;
      }
      if (filters.ip && !entry.ip.includes(filters.ip)) {
        return false;
      }
      if (filters.statusCode) {
        const statusStr = entry.statusCode.toString();
        const filterCodes = filters.statusCode.split(",").map((c) => c.trim());
        const matches = filterCodes.some((code) => {
          if (code.endsWith("xx")) {
            const prefix = code.slice(0, -2);
            return statusStr.startsWith(prefix);
          } else {
            return statusStr === code;
          }
        });
        if (!matches) return false;
      }
      if (filters.userAgent && !entry.userAgent.toLowerCase().includes(filters.userAgent.toLowerCase())) {
        return false;
      }
      if (filters.path && !entry.path.includes(filters.path)) {
        return false;
      }
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        const searchable = [
          entry.ip,
          entry.method,
          entry.path,
          entry.userAgent,
          entry.referer || "",
          entry.raw || ""
        ].join(" ").toLowerCase();
        if (!searchable.includes(searchLower)) {
          return false;
        }
      }
      if (filters.timeRange) {
        const timestamp = entry.timestamp.getTime();
        if (filters.timeRange.startTime != null && timestamp < filters.timeRange.startTime) return false;
        if (filters.timeRange.endTime != null && timestamp > filters.timeRange.endTime) return false;
      }
      return true;
    },
    async getAllLogEntries() {
      return await db.logs.toArray();
    },
    async clearAllData() {
      console.log("[IndexedDBStore] Clearing all data...");
      await db.logs.clear();
      this.importProgress = {
        processed: 0,
        total: 0,
        percentage: 0,
        isImporting: false
      };
      this._statsCache = null;
      this._statsCacheTime = 0;
    },
    async getStats() {
      const now = Date.now();
      if (this._statsCache && now - this._statsCacheTime < 6e4) {
        return this._statsCache;
      }
      const allLogs = await db.logs.toArray();
      const stats = {
        totalEntries: allLogs.length,
        statusCodes: {},
        methods: {},
        topUrls: {},
        topReferers: {},
        topUserAgents: {}
      };
      allLogs.forEach((log) => {
        const status = String(log.statusCode);
        stats.statusCodes[status] = (stats.statusCodes[status] || 0) + 1;
        if (log.method) {
          stats.methods[log.method] = (stats.methods[log.method] || 0) + 1;
        }
        if (log.path) {
          stats.topUrls[log.path] = (stats.topUrls[log.path] || 0) + 1;
        }
        if (log.referer) {
          stats.topReferers[log.referer] = (stats.topReferers[log.referer] || 0) + 1;
        }
        if (log.userAgent) {
          stats.topUserAgents[log.userAgent] = (stats.topUserAgents[log.userAgent] || 0) + 1;
        }
      });
      this._statsCache = stats;
      this._statsCacheTime = now;
      return stats;
    },
    getMemoryStats() {
      return {
        logEntries: 0,
        // IndexedDB无法同步获取
        cacheEntries: 0,
        indexEntries: 0,
        indexBuilt: true
      };
    }
  }
});
export {
  useIndexedDBStore as u
};
