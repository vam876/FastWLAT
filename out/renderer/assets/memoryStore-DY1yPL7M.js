import { a3 as defineStore } from "./index-FPjz1pj-.js";
const useMemoryStore = defineStore("memoryStore", {
  state: () => ({
    logEntries: [],
    // 性能优化：缓存和索引
    _filteredCache: /* @__PURE__ */ new Map(),
    _paginationCache: /* @__PURE__ */ new Map(),
    _lastFilterParams: null,
    _ipIndex: /* @__PURE__ */ new Map(),
    // IP 地址索引
    _methodIndex: /* @__PURE__ */ new Map(),
    // HTTP 方法索引
    _statusIndex: /* @__PURE__ */ new Map(),
    // 状态码索引
    _indexBuilt: false,
    // 进度状态
    importProgress: {
      processed: 0,
      total: 0,
      percentage: 0,
      isImporting: false
    }
  }),
  actions: {
    async addLogEntries(entries) {
      const totalEntries = entries.length;
      console.log(`[MemoryStore] Adding ${totalEntries} entries...`);
      this.importProgress = {
        processed: 0,
        total: totalEntries,
        percentage: 0,
        isImporting: true
      };
      try {
        if (totalEntries <= 5e3) {
          try {
            this.logEntries.push(...entries);
            this.importProgress = {
              processed: totalEntries,
              total: totalEntries,
              percentage: 100,
              isImporting: false
            };
            console.log(`[MemoryStore] Direct add completed, total: ${this.logEntries.length}`);
            return;
          } catch (error) {
            console.warn(`[MemoryStore] Direct add failed, falling back to batch processing:`, error);
          }
        }
        const batchSize = 200;
        console.log(`[MemoryStore] Processing ${totalEntries} entries in batches of ${batchSize}`);
        for (let i = 0; i < totalEntries; i += batchSize) {
          const endIndex = Math.min(i + batchSize, totalEntries);
          const batch = entries.slice(i, endIndex);
          for (const entry of batch) {
            this.logEntries.push(entry);
          }
          const progress = Math.round(endIndex / totalEntries * 100);
          this.importProgress = {
            processed: endIndex,
            total: totalEntries,
            percentage: progress,
            isImporting: true
          };
          if (endIndex < totalEntries) {
            await new Promise((resolve) => setTimeout(resolve, 0));
            if (i / batchSize % 10 === 0) {
              console.log(`[MemoryStore] Processed ${endIndex}/${totalEntries} entries (${progress}%)`);
            }
          }
        }
        this.importProgress = {
          processed: totalEntries,
          total: totalEntries,
          percentage: 100,
          isImporting: false
        };
        console.log(`[MemoryStore] Batch processing completed, total: ${this.logEntries.length}`);
      } catch (error) {
        console.error(`[MemoryStore] Failed to add entries:`, error);
        console.log(`[MemoryStore] Using emergency fallback method...`);
        for (let i = 0; i < totalEntries; i += 100) {
          const endIndex = Math.min(i + 100, totalEntries);
          for (let j = i; j < endIndex; j++) {
            this.logEntries.push(entries[j]);
          }
          const progress = Math.round(endIndex / totalEntries * 100);
          this.importProgress = {
            processed: endIndex,
            total: totalEntries,
            percentage: progress,
            isImporting: true
          };
          if (endIndex < totalEntries) {
            await new Promise((resolve) => setTimeout(resolve, 5));
            if (i % 1e3 === 0) {
              console.log(`[MemoryStore] Emergency fallback: ${endIndex}/${totalEntries} (${progress}%)`);
            }
          }
        }
        this.importProgress = {
          processed: totalEntries,
          total: totalEntries,
          percentage: 100,
          isImporting: false
        };
        console.log(`[MemoryStore] Emergency fallback completed, total: ${this.logEntries.length}`);
      }
      this._indexBuilt = false;
      this._clearCaches();
      setTimeout(() => {
        this.performMemoryCleanup();
      }, 100);
    },
    // 性能优化：构建索引
    _buildIndexes() {
      if (this._indexBuilt || this.logEntries.length === 0) return;
      console.log(`[MemoryStore] Building indexes for ${this.logEntries.length} entries...`);
      const startTime = performance.now();
      this._ipIndex.clear();
      this._methodIndex.clear();
      this._statusIndex.clear();
      this.logEntries.forEach((entry, index) => {
        if (entry.ip) {
          if (!this._ipIndex.has(entry.ip)) {
            this._ipIndex.set(entry.ip, []);
          }
          this._ipIndex.get(entry.ip).push(index);
        }
        if (entry.method) {
          if (!this._methodIndex.has(entry.method)) {
            this._methodIndex.set(entry.method, []);
          }
          this._methodIndex.get(entry.method).push(index);
        }
        const statusGroup = Math.floor(entry.statusCode / 100) + "xx";
        if (!this._statusIndex.has(statusGroup)) {
          this._statusIndex.set(statusGroup, []);
        }
        this._statusIndex.get(statusGroup).push(index);
      });
      this._indexBuilt = true;
      const duration = performance.now() - startTime;
      console.log(`[MemoryStore] Indexes built in ${duration.toFixed(2)}ms`);
    },
    // 清空所有缓存
    _clearCaches() {
      this._filteredCache.clear();
      this._paginationCache.clear();
      this._lastFilterParams = null;
    },
    // 生成缓存键
    _generateCacheKey(params) {
      return JSON.stringify(params);
    },
    getLogEntries(page, pageSize) {
      this._buildIndexes();
      const cacheKey = this._generateCacheKey({ page, pageSize, type: "pagination" });
      if (this._paginationCache.has(cacheKey)) {
        const cached = this._paginationCache.get(cacheKey);
        console.log(`[MemoryStore] Cache hit for pagination: page ${page}, size ${pageSize}`);
        return cached;
      }
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      const items = this.logEntries.slice(start, end);
      const result = {
        items,
        total: this.logEntries.length
      };
      if (this._paginationCache.size < 20) {
        this._paginationCache.set(cacheKey, result);
      } else {
        const firstKey = this._paginationCache.keys().next().value;
        if (firstKey) {
          this._paginationCache.delete(firstKey);
        }
        this._paginationCache.set(cacheKey, result);
      }
      return result;
    },
    // 新增：高性能过滤方法
    getFilteredLogEntries(filters) {
      this._buildIndexes();
      const cacheKey = this._generateCacheKey(filters);
      if (this._filteredCache.has(cacheKey)) {
        const cached = this._filteredCache.get(cacheKey);
        console.log(`[MemoryStore] Cache hit for filtered query`);
        const start2 = (filters.page - 1) * filters.pageSize;
        const end2 = start2 + filters.pageSize;
        return {
          items: cached.slice(start2, end2),
          total: cached.length
        };
      }
      console.log(`[MemoryStore] Performing filtered query...`);
      const startTime = performance.now();
      let candidateIndexes = null;
      if (filters.method && typeof filters.method === "string") {
        const methodIndexes = this._methodIndex.get(filters.method) || [];
        candidateIndexes = new Set(methodIndexes);
      }
      let filteredResults = [];
      if (candidateIndexes) {
        for (const index of candidateIndexes) {
          const entry = this.logEntries[index];
          if (this._matchesAllFilters(entry, filters)) {
            filteredResults.push(entry);
          }
        }
      } else {
        filteredResults = this.logEntries.filter((entry) => this._matchesAllFilters(entry, filters));
      }
      this._filteredCache.set(cacheKey, filteredResults);
      const duration = performance.now() - startTime;
      console.log(`[MemoryStore] Filtered query completed in ${duration.toFixed(2)}ms, found ${filteredResults.length} results`);
      const start = (filters.page - 1) * filters.pageSize;
      const end = start + filters.pageSize;
      return {
        items: filteredResults.slice(start, end),
        total: filteredResults.length
      };
    },
    // 综合过滤匹配方法
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
    getAllLogEntries() {
      return [...this.logEntries];
    },
    clearAllData() {
      console.log("[MemoryStore] Clearing all data and releasing memory...");
      this.logEntries = [];
      this._clearCaches();
      this._indexBuilt = false;
      this.importProgress = {
        processed: 0,
        total: 0,
        percentage: 0,
        isImporting: false
      };
      if (typeof window !== "undefined" && window.gc) {
        try {
          window.gc();
          console.log("[MemoryStore] Manual garbage collection triggered");
        } catch (e) {
        }
      }
    },
    // 内存优化：定期清理缓存
    performMemoryCleanup() {
      const cacheLimit = 10;
      if (this._paginationCache.size > cacheLimit) {
        const keysToDelete = Array.from(this._paginationCache.keys()).slice(0, this._paginationCache.size - cacheLimit);
        keysToDelete.forEach((key) => this._paginationCache.delete(key));
        console.log(`[MemoryStore] Cleaned ${keysToDelete.length} pagination cache entries`);
      }
      if (this._filteredCache.size > cacheLimit) {
        const keysToDelete = Array.from(this._filteredCache.keys()).slice(0, this._filteredCache.size - cacheLimit);
        keysToDelete.forEach((key) => this._filteredCache.delete(key));
        console.log(`[MemoryStore] Cleaned ${keysToDelete.length} filtered cache entries`);
      }
    },
    // 获取内存使用情况
    getMemoryStats() {
      const logEntriesSize = this.logEntries.length;
      const cacheCount = this._paginationCache.size + this._filteredCache.size;
      const indexSize = this._ipIndex.size + this._methodIndex.size + this._statusIndex.size;
      return {
        logEntries: logEntriesSize,
        cacheEntries: cacheCount,
        indexEntries: indexSize,
        indexBuilt: this._indexBuilt
      };
    }
  }
});
export {
  useMemoryStore as u
};
