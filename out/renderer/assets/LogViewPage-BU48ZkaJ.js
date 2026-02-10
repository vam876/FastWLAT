import { m as ref, C as reactive, c as computed, B as watch, A as detectDataMode, d as defineComponent, x as getCurrentDataMode, a as createElementBlock, e as createBaseVNode, f as createCommentVNode, t as toDisplayString, n as normalizeClass, g as createTextVNode, F as Fragment, r as renderList, D as withKeys, E as withDirectives, G as vModelCheckbox, H as vModelText, I as vModelSelect, o as openBlock, q as normalizeStyle, h as onMounted, J as onBeforeUnmount, v as withModifiers, K as nextTick, l as useThemeStore, j as createBlock, w as withCtx, k as createVNode, M as resolveComponent, i as onUnmounted, p as unref } from "./index-FPjz1pj-.js";
import { u as useMemoryStore } from "./memoryStore-DY1yPL7M.js";
import { u as useIndexedDBStore } from "./indexedDBStore-vYrXL9Qh.js";
import { e as exportService } from "./exportService-Dg1pRR2c.js";
import { _ as _sfc_main$9 } from "./ThemeContainer.vue_vue_type_script_setup_true_lang-CmUDCaT3.js";
function matchText(value, term, isRegex) {
  if (!term) return true;
  const target = (value ?? "").toLowerCase();
  if (!isRegex) return target.includes(term.toLowerCase());
  try {
    const re = new RegExp(term, "i");
    return re.test(value ?? "");
  } catch {
    return target.includes(term.toLowerCase());
  }
}
function matchStatus(status, ranges, codes) {
  if (!status) {
    if (ranges && ranges.length > 0) return false;
    if (codes && codes.length > 0) return false;
    return true;
  }
  if (codes && codes.length > 0 && codes.includes(status)) return true;
  if (ranges && ranges.length > 0) {
    const bucket = Math.floor(status / 100) + "xx";
    return ranges.map((r) => String(r)).includes(bucket);
  }
  if ((!ranges || ranges.length === 0) && (!codes || codes.length === 0)) return true;
  return false;
}
function matchSize(size, range) {
  if (!range) return true;
  if (range.min != null && (size == null || size < range.min)) return false;
  if (range.max != null && (size == null || size > range.max)) return false;
  return true;
}
function matchSearch(entry, search) {
  if (!search || !search.term) return true;
  switch (search.field) {
    case "ip":
      return matchText(entry.ip, search.term, search.isRegex);
    case "path":
      return matchText(entry.path, search.term, search.isRegex);
    case "userAgent":
      return matchText(entry.userAgent, search.term, search.isRegex);
    case "referer":
      return matchText(entry.referer, search.term, search.isRegex);
    case "queryString":
      return matchText(entry.queryString, search.term, search.isRegex);
    case "raw":
      return matchText(entry.raw, search.term, search.isRegex);
    case "all":
    default:
      return matchText(entry.raw, search.term, search.isRegex) || matchText(entry.ip, search.term, search.isRegex) || matchText(entry.path, search.term, search.isRegex) || matchText(entry.userAgent, search.term, search.isRegex) || matchText(entry.referer, search.term, search.isRegex) || matchText(entry.queryString, search.term, search.isRegex);
  }
}
function filterEntries(entries, search, filters) {
  return entries.filter((e) => {
    if (filters?.threatLevels && filters.threatLevels.length > 0) {
      if (!e.threatLevel || !filters.threatLevels.includes(e.threatLevel)) return false;
    }
    if (filters?.methods && filters.methods.length > 0) {
      if (!e.method || !filters.methods.includes(e.method)) return false;
    }
    if (filters?.timeRange) {
      const timestamp = e.timestamp instanceof Date ? e.timestamp.getTime() : e.timestamp;
      if (filters.timeRange.startTime != null && timestamp < filters.timeRange.startTime) return false;
      if (filters.timeRange.endTime != null && timestamp > filters.timeRange.endTime) return false;
    }
    if (!matchStatus(e.statusCode, filters?.statusRanges, filters?.statusCodes)) return false;
    if (filters?.excludeStatusCodes && filters.excludeStatusCodes.length > 0) {
      const statusString = e.statusCode?.toString();
      if (statusString && filters.excludeStatusCodes.includes(statusString)) return false;
    }
    if (!matchSize(e.responseSize, filters?.sizeRange)) return false;
    if (filters?.ip && !matchText(e.ip, filters.ip, false)) return false;
    if (filters?.path && !matchText(e.path, filters.path, false)) return false;
    if (filters?.userAgent && !matchText(e.userAgent, filters.userAgent, false)) return false;
    if (filters?.referer && !matchText(e.referer, filters.referer, false)) return false;
    if (filters?.queryString && !matchText(e.queryString, filters.queryString, false)) return false;
    if (filters?.responseTimeRange) {
      const responseSize = e.responseSize || 0;
      if (filters.responseTimeRange.min != null && responseSize < filters.responseTimeRange.min) return false;
      if (filters.responseTimeRange.max != null && responseSize > filters.responseTimeRange.max) return false;
    }
    if (filters?.excludePatterns && filters.excludePatterns.length > 0) {
      const pathToCheck = e.path || "";
      for (const pattern of filters.excludePatterns) {
        if (!pattern) continue;
        try {
          const regex = new RegExp(pattern, "i");
          if (regex.test(pathToCheck)) {
            return false;
          }
        } catch (error) {
          const entryText = [e.ip, e.path, e.userAgent, e.referer, e.queryString].join(" ").toLowerCase();
          if (entryText.includes(pattern.toLowerCase())) {
            return false;
          }
        }
      }
    }
    if (filters?.includeOnlyPatterns && filters.includeOnlyPatterns.length > 0) {
      const entryText = [e.ip, e.path, e.userAgent, e.referer, e.queryString].join(" ").toLowerCase();
      let hasMatch = false;
      for (const pattern of filters.includeOnlyPatterns) {
        if (pattern && entryText.includes(pattern.toLowerCase())) {
          hasMatch = true;
          break;
        }
      }
      if (!hasMatch) return false;
    }
    if (filters?.customFields && filters.customFields.length > 0) {
      for (const customField of filters.customFields) {
        if (!customField.field || !customField.value) continue;
        let fieldValue = "";
        switch (customField.field.toLowerCase()) {
          case "ip":
            fieldValue = e.ip || "";
            break;
          case "path":
            fieldValue = e.path || "";
            break;
          case "useragent":
          case "user-agent":
            fieldValue = e.userAgent || "";
            break;
          case "referer":
            fieldValue = e.referer || "";
            break;
          case "method":
            fieldValue = e.method || "";
            break;
          case "status":
          case "statuscode":
            fieldValue = e.statusCode?.toString() || "";
            break;
          default:
            continue;
        }
        const operator = customField.operator || "contains";
        const targetValue = customField.value.toLowerCase();
        const fieldValueLower = fieldValue.toLowerCase();
        let matches = false;
        switch (operator) {
          case "equals":
            matches = fieldValueLower === targetValue;
            break;
          case "contains":
            matches = fieldValueLower.includes(targetValue);
            break;
          case "startswith":
            matches = fieldValueLower.startsWith(targetValue);
            break;
          case "endswith":
            matches = fieldValueLower.endsWith(targetValue);
            break;
          case "regex":
            try {
              matches = new RegExp(customField.value, "i").test(fieldValue);
            } catch {
              matches = false;
            }
            break;
          default:
            matches = fieldValueLower.includes(targetValue);
        }
        if (!matches) return false;
      }
    }
    if (!matchSearch(e, search)) return false;
    return true;
  });
}
class TreeBuildCache {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
    this.DEFAULT_TTL = 5 * 60 * 1e3;
  }
  // 5分钟
  generateKey(entries) {
    if (entries.length === 0) return "empty";
    const first = entries[0]?.id || "";
    const last = entries[entries.length - 1]?.id || "";
    return `${entries.length}-${first}-${last}`;
  }
  get(entries) {
    const key = this.generateKey(entries);
    const cached = this.cache.get(key);
    if (!cached) return null;
    if (Date.now() - cached.timestamp > cached.ttl) {
      this.cache.delete(key);
      return null;
    }
    return cached.tree;
  }
  set(entries, tree, ttl = this.DEFAULT_TTL) {
    const key = this.generateKey(entries);
    this.cache.set(key, {
      tree: JSON.parse(JSON.stringify(tree)),
      // 深拷贝避免引用问题
      timestamp: Date.now(),
      ttl
    });
    this.cleanup();
  }
  clear() {
    this.cache.clear();
  }
  cleanup() {
    const now = Date.now();
    for (const [key, value] of this.cache.entries()) {
      if (now - value.timestamp > value.ttl) {
        this.cache.delete(key);
      }
    }
  }
  getStats() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }
}
const treeBuildCache = new TreeBuildCache();
function buildPathTree(entries) {
  const cached = treeBuildCache.get(entries);
  if (cached) {
    console.log("[TreeBuild] Using cached tree result");
    return cached;
  }
  console.log(`[TreeBuild] Building tree for ${entries.length} entries`);
  const startTime = performance.now();
  const rootMap = /* @__PURE__ */ new Map();
  const pathToLogs = /* @__PURE__ */ new Map();
  for (const entry of entries) {
    const path = (entry.path || "/").split("?")[0];
    if (!pathToLogs.has(path)) {
      pathToLogs.set(path, []);
    }
    pathToLogs.get(path).push(entry);
  }
  for (const entry of entries) {
    const path = (entry.path || "/").split("?")[0];
    const parts = path === "/" ? [""] : path.split("/").filter(Boolean);
    let currentMap = rootMap;
    let currentPath = "";
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      currentPath = currentPath + "/" + part;
      currentPath = currentPath.replace("//", "/");
      if (!currentMap.has(part)) {
        currentMap.set(part, {
          map: /* @__PURE__ */ new Map(),
          type: i === parts.length - 1 ? getPathType(part) : "directory",
          path: currentPath,
          logs: []
        });
      }
      const node = currentMap.get(part);
      currentMap = node.map;
      if (i === parts.length - 1) {
        node.logs = pathToLogs.get(path) || [];
      }
    }
    if (entry.queryString) {
      const basePath = path;
      const queryKey = `?${entry.queryString}`;
      const fullPath = `${basePath}${queryKey}`;
      let targetMap = rootMap;
      const parts2 = basePath === "/" ? [""] : basePath.split("/").filter(Boolean);
      for (const part of parts2) {
        if (targetMap.has(part)) {
          targetMap = targetMap.get(part).map;
        }
      }
      if (!targetMap.has(queryKey)) {
        targetMap.set(queryKey, {
          map: /* @__PURE__ */ new Map(),
          type: "file",
          path: fullPath,
          logs: []
        });
      }
      targetMap.get(queryKey).logs.push(entry);
    }
  }
  const convert = (nodeMap, parentPath = "") => {
    const directories = [];
    const files = [];
    for (const [key, value] of nodeMap) {
      const nodePath = value.path || (parentPath + "/" + key).replace("//", "/");
      const children = convert(value.map, nodePath);
      const directLogs = value.logs || [];
      let totalCount = directLogs.length;
      if (value.type === "directory") {
        const collectChildrenLogs = (childrenNodes) => {
          let allLogs2 = [];
          childrenNodes.forEach((child) => {
            if (child.logs) {
              allLogs2 = allLogs2.concat(child.logs);
            }
            if (child.children) {
              allLogs2 = allLogs2.concat(collectChildrenLogs(child.children));
            }
          });
          return allLogs2;
        };
        const childrenLogs = collectChildrenLogs(children);
        const allLogs = [...directLogs, ...childrenLogs];
        const uniqueLogs = Array.from(new Map(allLogs.map((log) => [log.id, log])).values());
        totalCount = uniqueLogs.length;
      }
      const node = {
        name: key || "/",
        count: totalCount,
        children: children.length ? children : void 0,
        type: value.type,
        path: nodePath,
        logs: directLogs,
        isExpanded: false
      };
      if (value.type === "directory") {
        directories.push(node);
      } else {
        files.push(node);
      }
    }
    directories.sort((a, b) => (b.count || 0) - (a.count || 0));
    files.sort((a, b) => (b.count || 0) - (a.count || 0));
    return [...directories, ...files];
  };
  const result = convert(rootMap);
  if (result.length === 0 && entries.length > 0) {
    return [{
      name: "/",
      count: entries.length,
      type: "root",
      path: "/",
      logs: entries,
      isExpanded: true
    }];
  }
  const buildTime = performance.now() - startTime;
  console.log(`[TreeBuild] Tree built in ${buildTime.toFixed(2)}ms with ${result.length} root nodes`);
  treeBuildCache.set(entries, result);
  return result;
}
function getPathType(path) {
  if (path.includes(".")) {
    const extensions = [".html", ".htm", ".php", ".asp", ".jsp", ".js", ".css", ".json", ".xml", ".txt", ".pdf", ".jpg", ".png", ".gif", ".svg"];
    if (extensions.some((ext) => path.toLowerCase().endsWith(ext))) {
      return "file";
    }
  }
  const fileNames = ["index", "default", "home", "admin", "login", "api"];
  if (fileNames.some((name) => path.toLowerCase().includes(name))) {
    return "file";
  }
  if (path.includes("?")) {
    return "file";
  }
  return "directory";
}
function clearTreeCache() {
  treeBuildCache.clear();
  console.log("[TreeBuild] Cache cleared");
}
function getTreeCacheStats() {
  return treeBuildCache.getStats();
}
function highlightSearchText(text, searchTerm, isRegex = false) {
  if (!searchTerm.trim()) return text;
  try {
    let highlightRegex;
    if (isRegex) {
      highlightRegex = new RegExp(searchTerm, "gi");
    } else {
      const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      highlightRegex = new RegExp(escapedTerm, "gi");
    }
    return text.replace(highlightRegex, (match) => {
      return `<mark class="bg-yellow-400 text-gray-900 px-1 rounded">${match}</mark>`;
    });
  } catch (error) {
    console.warn("[Search] Invalid regex pattern:", searchTerm, error);
    return text;
  }
}
function useLogView() {
  const store = useMemoryStore();
  const indexedDBStore = useIndexedDBStore();
  const viewMode = ref("list");
  const dataMode = ref("loading");
  const currentPage = ref(1);
  const pageSize2 = ref(1e3);
  const searchTerm = ref("");
  const isRegexSearch = ref(false);
  const searchField = ref("all");
  const filters = reactive({});
  const isSearchMode = computed(() => {
    if (searchTerm.value) return true;
    const f = filters;
    return f.threatLevels && f.threatLevels.length || f.methods && f.methods.length || f.statusRanges && f.statusRanges.length || f.statusCodes && f.statusCodes.length || f.excludeStatusCodes && f.excludeStatusCodes.length || f.sizeRange?.min != null || f.sizeRange?.max != null || !!f.ip || !!f.path || !!f.userAgent || !!f.referer || !!f.queryString || f.timeRange?.startTime != null || f.timeRange?.endTime != null || f.responseTimeRange?.min != null || f.responseTimeRange?.max != null || f.excludePatterns && f.excludePatterns.length > 0 || f.includeOnlyPatterns && f.includeOnlyPatterns.length > 0 || f.customFields && f.customFields.length > 0;
  });
  const allItems = ref([]);
  const visibleItems = ref([]);
  const totalCount = ref(0);
  const treeNodes = ref([]);
  let loadTimer = null;
  let buildTreeTimer = null;
  const isLoading = ref(false);
  const queryCache = /* @__PURE__ */ new Map();
  const CACHE_TTL = 5 * 60 * 1e3;
  const preloadCache = ref([]);
  let preloadTimer = null;
  const searchOptions = computed(() => ({ term: searchTerm.value, isRegex: isRegexSearch.value, field: searchField.value }));
  function generateCacheKey(params) {
    return JSON.stringify({
      mode: dataMode.value,
      searchTerm: searchTerm.value,
      filters,
      page: params.page || currentPage.value,
      pageSize: params.pageSize || pageSize2.value
    });
  }
  function getCachedQuery(key) {
    const cached = queryCache.get(key);
    if (!cached) return null;
    const now = Date.now();
    if (now - cached.timestamp > cached.ttl) {
      queryCache.delete(key);
      return null;
    }
    console.log(`[useLogView] Using cached query result: ${cached.data.length} items`);
    return cached.data;
  }
  function setCachedQuery(key, data, ttl = CACHE_TTL) {
    queryCache.set(key, {
      data: [...data],
      timestamp: Date.now(),
      ttl
    });
    if (queryCache.size > 10) {
      const oldestKey = Array.from(queryCache.keys())[0];
      queryCache.delete(oldestKey);
    }
  }
  function schedulePreload() {
    if (preloadTimer) clearTimeout(preloadTimer);
    preloadTimer = setTimeout(async () => {
      if (dataMode.value === "indexedDB" && !isSearchMode.value) {
        try {
          const preloadKey = generateCacheKey({ page: currentPage.value + 1 });
          if (!getCachedQuery(preloadKey)) {
            console.log(`[useLogView] Preloading page ${currentPage.value + 1}`);
            const { items } = await indexedDBStore.getLogEntries(
              currentPage.value + 1,
              pageSize2.value
            );
            setCachedQuery(preloadKey, items, CACHE_TTL / 2);
          }
        } catch (error) {
          console.warn("[useLogView] Preload failed:", error);
        }
      }
    }, 1e3);
  }
  async function init() {
    dataMode.value = "loading";
    dataMode.value = await detectDataMode();
    await load();
  }
  async function load() {
    const cacheKey = generateCacheKey({});
    const cachedData = getCachedQuery(cacheKey);
    if (cachedData && !isSearchMode.value) {
      console.log(`[useLogView] Using cached data: ${cachedData.length} items`);
      visibleItems.value = cachedData;
      schedulePreload();
      return;
    }
    if (dataMode.value === "indexedDB") {
      if (isSearchMode.value) {
        console.log("[useLogView] IndexedDB search mode - loading full dataset for filtering");
        if (allItems.value.length === 0) {
          console.log("[useLogView] Loading full dataset for filtering");
          try {
            allItems.value = await indexedDBStore.getAllLogEntries();
            console.log(`[useLogView] Loaded ${allItems.value.length} entries for filtering`);
          } catch (error) {
            console.error("[useLogView] Failed to load full dataset:", error);
            allItems.value = [];
          }
        }
        applyFiltersAndPaginate();
      } else {
        console.log("[useLogView] Using IndexedDBStore for optimized pagination");
        const { items, total } = await indexedDBStore.getLogEntries(
          currentPage.value,
          pageSize2.value
        );
        visibleItems.value = items;
        totalCount.value = total;
        console.log(`[useLogView] ⚡ IndexedDBStore loaded page ${currentPage.value}: ${items.length}/${total} entries`);
        if (allItems.value.length === 0) {
          console.log("[useLogView] Loading full dataset for tree/analysis views (IndexedDB mode)");
          try {
            allItems.value = await indexedDBStore.getAllLogEntries();
            console.log(`[useLogView] ✅ Loaded ${allItems.value.length} entries for analysis`);
          } catch (error) {
            console.error("[useLogView] Failed to load full dataset:", error);
            allItems.value = [...visibleItems.value];
          }
        }
        setCachedQuery(cacheKey, visibleItems.value);
        schedulePreload();
      }
    } else {
      if (isSearchMode.value) {
        console.log(`[useLogView] Using client-side filtering with advanced filters:`, filters);
        const allEntries = store.getAllLogEntries();
        const searchOptions2 = searchTerm.value ? {
          term: searchTerm.value,
          isRegex: isRegexSearch.value,
          field: searchField.value
        } : void 0;
        const filteredEntries = filterEntries(allEntries, searchOptions2, filters);
        totalCount.value = filteredEntries.length;
        allItems.value = filteredEntries;
        const start = (currentPage.value - 1) * pageSize2.value;
        const end = start + pageSize2.value;
        visibleItems.value = filteredEntries.slice(start, end);
        setCachedQuery(cacheKey, visibleItems.value);
        console.log(`[useLogView] Showing page ${currentPage.value} (${visibleItems.value.length} items)`);
      } else {
        const { items, total } = store.getLogEntries(currentPage.value, pageSize2.value);
        visibleItems.value = items;
        totalCount.value = total;
        const { items: allItemsData } = store.getLogEntries(1, total);
        allItems.value = allItemsData;
        setCachedQuery(cacheKey, items);
        console.log(`[useLogView] Loaded ${allItemsData.length} total items, ${items.length} visible for current page`);
      }
    }
    buildTree();
  }
  function applyFiltersAndPaginate() {
    console.log("[useLogView] Applying client-side filters:", filters);
    if (filters.timeRange) {
      console.log("[useLogView] Time filter details:", {
        startTime: filters.timeRange.startTime,
        endTime: filters.timeRange.endTime,
        startDate: filters.timeRange.startTime ? new Date(filters.timeRange.startTime).toISOString() : "none",
        endDate: filters.timeRange.endTime ? new Date(filters.timeRange.endTime).toISOString() : "none"
      });
    }
    const filtered = filterEntries(allItems.value, searchOptions.value, filters);
    totalCount.value = filtered.length;
    const start = (currentPage.value - 1) * pageSize2.value;
    visibleItems.value = filtered.slice(start, start + pageSize2.value);
    console.log(`[useLogView] Applied filters: ${filtered.length} results, showing ${visibleItems.value.length} on page ${currentPage.value}`);
    if (filtered.length > 0 && allItems.value.length > 0) {
      const sampleOriginal = allItems.value[0];
      const sampleFiltered = filtered[0];
      console.log("[useLogView] Sample data:", {
        original: { timestamp: sampleOriginal.timestamp, date: sampleOriginal.timestamp.toISOString() },
        filtered: { timestamp: sampleFiltered.timestamp, date: sampleFiltered.timestamp.toISOString() }
      });
    }
  }
  async function buildTree() {
    if (buildTreeTimer) {
      clearTimeout(buildTreeTimer);
    }
    buildTreeTimer = setTimeout(async () => {
      console.log("[useLogView] Building tree...");
      let source;
      if (dataMode.value === "local") {
        const fullResult = store.getLogEntries(1, store.logEntries.length);
        source = fullResult.items;
      } else {
        source = allItems.value;
        console.log(`[useLogView] Using loaded data for tree: ${source.length} items`);
      }
      if (source.length === 0) {
        console.log(`[useLogView] No data for tree build`);
        treeNodes.value = [];
        return;
      }
      let processedSource = source;
      if (source.length > 5e4) {
        console.log(`[useLogView] Large dataset (${source.length} items), applying intelligent sampling`);
        const pathMap = /* @__PURE__ */ new Map();
        source.forEach((entry) => {
          const path = entry.path || "/";
          if (!pathMap.has(path)) {
            pathMap.set(path, []);
          }
          pathMap.get(path).push(entry);
        });
        const sampledEntries = [];
        pathMap.forEach((entries, path) => {
          const sampleSize = Math.min(20, entries.length);
          const step = Math.max(1, Math.floor(entries.length / sampleSize));
          for (let i = 0; i < entries.length; i += step) {
            sampledEntries.push(entries[i]);
            if (sampledEntries.length >= 2e4) break;
          }
        });
        processedSource = sampledEntries;
        console.log(`[useLogView] Sampled from ${source.length} to ${processedSource.length} items for tree`);
      }
      if (viewMode.value === "analysis" && processedSource.length > 1e4) {
        console.log(`[useLogView] Analysis view sampling from ${processedSource.length} items`);
        const sampleRate = Math.ceil(processedSource.length / 1e4);
        processedSource = processedSource.filter((_, index) => index % sampleRate === 0);
        console.log(`[useLogView] Analysis view sampled to ${processedSource.length} items`);
      }
      console.log(`[useLogView] Building tree for ${processedSource.length} items`);
      try {
        await new Promise((resolve) => setTimeout(resolve, 0));
        treeNodes.value = buildPathTree(processedSource);
        console.log(`[useLogView] Tree built successfully with ${treeNodes.value.length} nodes`);
      } catch (error) {
        console.error(`[useLogView] Tree build failed:`, error);
        treeNodes.value = [];
      }
    }, 100);
  }
  function debouncedLoad(delay = 300) {
    console.log("[useLogView] Search/filter changed, debouncing load...");
    if (loadTimer) {
      clearTimeout(loadTimer);
    }
    loadTimer = setTimeout(() => {
      load();
    }, delay);
  }
  watch([searchTerm, isRegexSearch, searchField, () => JSON.stringify(filters)], () => {
    debouncedLoad();
  });
  watch(viewMode, () => {
    console.log("[useLogView] View mode changed");
    buildTree();
  });
  watch(currentPage, () => {
    console.log("[useLogView] Page changed");
    load();
  });
  function clearCache() {
    queryCache.clear();
    preloadCache.value = [];
    clearTreeCache();
    console.log("[useLogView] Cache cleared");
  }
  function getCacheInfo() {
    return {
      size: queryCache.size,
      keys: Array.from(queryCache.keys()),
      totalMemory: Array.from(queryCache.values()).reduce((sum, cache) => sum + cache.data.length, 0),
      treeCache: getTreeCacheStats()
    };
  }
  function cleanup() {
    if (loadTimer) clearTimeout(loadTimer);
    if (buildTreeTimer) clearTimeout(buildTreeTimer);
    if (preloadTimer) clearTimeout(preloadTimer);
    clearCache();
  }
  return {
    viewMode,
    dataMode,
    currentPage,
    pageSize: pageSize2,
    searchTerm,
    isRegexSearch,
    searchField,
    filters,
    isSearchMode,
    isLoading,
    allItems,
    visibleItems,
    totalCount,
    treeNodes,
    // 🔥 IndexedDB加载状态
    isIndexedDBLoading: computed(() => indexedDBStore.importProgress.isImporting),
    indexedDBLoadingProgress: computed(() => indexedDBStore.importProgress.percentage),
    init,
    load,
    buildTree,
    clearCache,
    getCacheInfo,
    cleanup,
    highlightSearchText
  };
}
const _hoisted_1$8 = { class: "space-y-4" };
const _hoisted_2$8 = { class: "flex items-center justify-between p-4 bg-white/5 rounded-lg" };
const _hoisted_3$8 = { class: "flex items-center gap-4" };
const _hoisted_4$8 = { class: "text-white" };
const _hoisted_5$8 = { class: "font-medium" };
const _hoisted_6$8 = { class: "text-gray-400" };
const _hoisted_7$8 = { class: "text-sm" };
const _hoisted_8$8 = { class: "flex items-center gap-2" };
const _hoisted_9$8 = ["disabled"];
const _hoisted_10$7 = ["disabled"];
const _hoisted_11$7 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4" };
const _hoisted_12$7 = { class: "md:col-span-2" };
const _hoisted_13$6 = { class: "flex gap-2" };
const _hoisted_14$6 = ["value"];
const _hoisted_15$6 = ["value"];
const _hoisted_16$6 = ["value", "placeholder"];
const _hoisted_17$5 = ["value"];
const _hoisted_18$5 = ["value"];
const _hoisted_19$5 = ["value"];
const _hoisted_20$5 = ["value"];
const _hoisted_21$4 = ["value"];
const _hoisted_22$4 = { class: "space-y-3" };
const _hoisted_23$4 = { class: "flex items-center gap-2 flex-wrap" };
const _hoisted_24$4 = ["onClick", "title"];
const _hoisted_25$4 = {
  key: 0,
  class: "text-xs bg-white/20 px-1.5 py-0.5 rounded-full"
};
const _hoisted_26$3 = {
  key: 0,
  class: "bg-blue-500/10 border border-blue-500/30 rounded-lg p-4"
};
const _hoisted_27$3 = { class: "flex items-center justify-between mb-3" };
const _hoisted_28$3 = { class: "text-blue-300 font-semibold flex items-center gap-2" };
const _hoisted_29$2 = { class: "flex flex-wrap gap-2" };
const _hoisted_30$2 = { class: "text-sm font-medium" };
const _hoisted_31$2 = ["onClick"];
const _hoisted_32$2 = {
  key: 1,
  class: "p-6 bg-white/5 rounded-xl space-y-6"
};
const _hoisted_33$2 = { class: "flex items-center justify-between" };
const _hoisted_34$2 = { class: "flex items-center gap-3" };
const _hoisted_35$2 = { class: "flex items-center gap-2 text-white cursor-pointer" };
const _hoisted_36$2 = { class: "flex items-center gap-2 text-white cursor-pointer" };
const _hoisted_37$2 = { class: "grid grid-cols-1 md:grid-cols-3 gap-4" };
const _hoisted_38$2 = { class: "md:col-span-2 grid grid-cols-2 gap-2" };
const _hoisted_39$2 = { class: "flex gap-2 flex-wrap" };
const _hoisted_40$2 = ["onClick"];
const _hoisted_41$2 = { class: "grid grid-cols-1 md:grid-cols-2 gap-6" };
const _hoisted_42$2 = { class: "grid grid-cols-2 gap-2" };
const _hoisted_43$2 = { class: "grid grid-cols-2 gap-2" };
const _hoisted_44$2 = { class: "grid grid-cols-1 md:grid-cols-2 gap-6" };
const _hoisted_45$2 = { class: "flex flex-wrap gap-2" };
const _hoisted_46$2 = ["value"];
const _hoisted_47$1 = { class: "flex flex-wrap gap-2" };
const _hoisted_48$1 = ["value"];
const _hoisted_49$1 = { class: "space-y-2" };
const _hoisted_50$1 = ["onUpdate:modelValue"];
const _hoisted_51$1 = ["value"];
const _hoisted_52$1 = ["onUpdate:modelValue"];
const _hoisted_53$1 = ["value"];
const _hoisted_54$1 = ["onUpdate:modelValue"];
const _hoisted_55$1 = ["onClick"];
const _hoisted_56$1 = { class: "grid grid-cols-1 md:grid-cols-2 gap-6" };
const _hoisted_57$1 = { class: "space-y-2" };
const _hoisted_58$1 = ["onUpdate:modelValue"];
const _hoisted_59$1 = ["onClick"];
const _hoisted_60$1 = { class: "space-y-2" };
const _hoisted_61$1 = ["onUpdate:modelValue"];
const _hoisted_62$1 = ["onClick"];
const _hoisted_63$1 = { class: "flex items-center justify-between pt-4 border-t border-white/10" };
const _hoisted_64$1 = { class: "text-sm text-gray-400" };
const _hoisted_65$1 = {
  key: 2,
  class: "fixed inset-0 bg-black/50 flex items-center justify-center z-50"
};
const _hoisted_66$1 = { class: "bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4" };
const _hoisted_67$1 = { class: "flex gap-3" };
const _hoisted_68$1 = ["disabled"];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "LogFilters",
  props: {
    searchTerm: {},
    searchField: {},
    statusCode: {},
    clientIP: {},
    userAgent: {},
    method: {},
    totalLogs: {},
    filteredCount: {}
  },
  emits: ["update:searchTerm", "update:searchField", "update:statusCode", "update:clientIP", "update:userAgent", "update:method", "advanced-filter", "clear-filters", "save-filter", "load-filter", "clear-all"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const showAdvanced = ref(false);
    const showSaveFilter = ref(false);
    const filterName = ref("");
    const currentDataMode = ref(getCurrentDataMode());
    const isStaticFileFilterActive = ref(false);
    const activeQuickFilters = ref(/* @__PURE__ */ new Set());
    const advancedFilters = reactive({
      useRegex: false,
      caseSensitive: false,
      dateRange: null,
      responseTimeRange: null,
      bodyBytesRange: null,
      threatLevel: [],
      logFormat: [],
      customFields: [],
      excludePatterns: [],
      includeOnlyPatterns: [],
      excludeStatusCodes: []
    });
    const savedFilters = ref([
      {
        name: "只看200状态码",
        filters: {
          statusCode: "200",
          description: "只显示成功请求"
        }
      },
      {
        name: "排除30X状态码",
        filters: {
          excludeStatusCodes: ["300", "301", "302", "303", "304", "307", "308"],
          description: "排除重定向请求"
        }
      },
      {
        name: "排除404状态码",
        filters: {
          excludeStatusCodes: ["404"],
          description: "排除页面未找到错误"
        }
      },
      {
        name: "大文件传输",
        filters: {
          bodyBytesRange: { min: 1048576, max: null },
          description: "显示超过1MB的传输"
        }
      },
      {
        name: "慢请求",
        filters: {
          responseTimeRange: { min: 1e3, max: null },
          description: "显示响应时间超过1秒的请求"
        }
      }
    ]);
    const dateRangeStart = computed({
      get: () => {
        if (advancedFilters.dateRange?.start instanceof Date) {
          return formatLocalDateTime(advancedFilters.dateRange.start);
        }
        return advancedFilters.dateRange?.start || "";
      },
      set: (value) => {
        if (!advancedFilters.dateRange) {
          advancedFilters.dateRange = { start: null, end: null };
        }
        advancedFilters.dateRange.start = value ? parseLocalDateTime(value) : null;
      }
    });
    const dateRangeEnd = computed({
      get: () => {
        if (advancedFilters.dateRange?.end instanceof Date) {
          return formatLocalDateTime(advancedFilters.dateRange.end);
        }
        return advancedFilters.dateRange?.end || "";
      },
      set: (value) => {
        if (!advancedFilters.dateRange) {
          advancedFilters.dateRange = { start: null, end: null };
        }
        advancedFilters.dateRange.end = value ? parseLocalDateTime(value) : null;
      }
    });
    const responseTimeMin = computed({
      get: () => advancedFilters.responseTimeRange?.min || null,
      set: (value) => {
        if (!advancedFilters.responseTimeRange) {
          advancedFilters.responseTimeRange = { min: null, max: null };
        }
        advancedFilters.responseTimeRange.min = value;
      }
    });
    const responseTimeMax = computed({
      get: () => advancedFilters.responseTimeRange?.max || null,
      set: (value) => {
        if (!advancedFilters.responseTimeRange) {
          advancedFilters.responseTimeRange = { min: null, max: null };
        }
        advancedFilters.responseTimeRange.max = value;
      }
    });
    const bodyBytesMin = computed({
      get: () => advancedFilters.bodyBytesRange?.min || null,
      set: (value) => {
        if (!advancedFilters.bodyBytesRange) {
          advancedFilters.bodyBytesRange = { min: null, max: null };
        }
        advancedFilters.bodyBytesRange.min = value;
      }
    });
    const bodyBytesMax = computed({
      get: () => advancedFilters.bodyBytesRange?.max || null,
      set: (value) => {
        if (!advancedFilters.bodyBytesRange) {
          advancedFilters.bodyBytesRange = { min: null, max: null };
        }
        advancedFilters.bodyBytesRange.max = value;
      }
    });
    const hasActiveFilters = computed(() => {
      return props.searchTerm || props.statusCode || props.clientIP || props.userAgent || props.method || hasAdvancedFilters.value;
    });
    const hasAdvancedFilters = computed(() => {
      return advancedFilters.useRegex || advancedFilters.caseSensitive || advancedFilters.dateRange || advancedFilters.responseTimeRange || advancedFilters.bodyBytesRange || advancedFilters.threatLevel && advancedFilters.threatLevel.length > 0 || advancedFilters.logFormat && advancedFilters.logFormat.length > 0 || advancedFilters.customFields && advancedFilters.customFields.length > 0 || advancedFilters.excludePatterns && advancedFilters.excludePatterns.length > 0 || advancedFilters.includeOnlyPatterns && advancedFilters.includeOnlyPatterns.length > 0;
    });
    const filterSummary = computed(() => {
      const total = props.totalLogs;
      const filtered = props.filteredCount;
      const percentage = total > 0 ? Math.round(filtered / total * 100) : 0;
      return {
        total,
        filtered,
        hidden: total - filtered,
        percentage
      };
    });
    const httpMethods = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"];
    const threatLevels = [
      { value: "normal", label: "正常日志", color: "text-gray-400" },
      { value: "low", label: "低风险", color: "text-green-400" },
      { value: "medium", label: "中等风险", color: "text-yellow-400" },
      { value: "high", label: "高风险", color: "text-orange-400" },
      { value: "critical", label: "严重威胁", color: "text-red-400" }
    ];
    const logFormats = [
      { value: "apache", label: "Apache" },
      { value: "nginx", label: "Nginx" },
      { value: "iis", label: "IIS" },
      { value: "tomcat", label: "Tomcat" },
      { value: "generic", label: "通用格式" }
    ];
    const operators = [
      { value: "equals", label: "等于" },
      { value: "contains", label: "包含" },
      { value: "starts_with", label: "开始于" },
      { value: "ends_with", label: "结束于" },
      { value: "not_equals", label: "不等于" },
      { value: "not_contains", label: "不包含" },
      { value: "regex", label: "正则匹配" },
      { value: "greater_than", label: "大于" },
      { value: "less_than", label: "小于" }
    ];
    const searchableFields = [
      { value: "all", label: "全部字段" },
      { value: "path", label: "请求路径" },
      { value: "url", label: "URL路径地址" },
      { value: "clientIP", label: "客户端IP" },
      { value: "referer", label: "Referer" },
      { value: "requestURI", label: "请求URI" },
      { value: "queryString", label: "查询参数" },
      { value: "requestMethod", label: "请求方法" },
      { value: "httpVersion", label: "HTTP版本" },
      { value: "serverName", label: "服务器名称" },
      { value: "remoteUser", label: "远程用户" }
    ];
    const staticFileExtensions = [
      // 样式文件
      "css",
      "scss",
      "sass",
      "less",
      "styl",
      // JavaScript文件
      "js",
      "jsx",
      "ts",
      "tsx",
      "mjs",
      "cjs",
      // 图片文件
      "jpg",
      "jpeg",
      "png",
      "gif",
      "bmp",
      "webp",
      "svg",
      "ico",
      "tiff",
      "tga",
      "psd",
      // 字体文件
      "woff",
      "woff2",
      "ttf",
      "otf",
      "eot",
      // 音视频文件
      "mp3",
      "wav",
      "ogg",
      "flac",
      "aac",
      "mp4",
      "avi",
      "mov",
      "wmv",
      "flv",
      "webm",
      "m4v",
      // 文档文件
      "pdf",
      "doc",
      "docx",
      "xls",
      "xlsx",
      "ppt",
      "pptx",
      "txt",
      "rtf",
      // 压缩文件
      "zip",
      "rar",
      "7z",
      "tar",
      "gz",
      "bz2",
      "xz",
      // 其他静态资源
      "xml",
      "json",
      "map",
      "manifest",
      "webmanifest",
      "robots",
      "sitemap",
      // 开发工具相关
      "sourcemap",
      "map"
    ];
    watch(advancedFilters, () => {
      updateStaticFileFilterStatus();
      const converted = { ...advancedFilters };
      if (advancedFilters.dateRange?.start || advancedFilters.dateRange?.end) {
        converted.timeRange = {
          startTime: advancedFilters.dateRange.start ? advancedFilters.dateRange.start.getTime() : void 0,
          endTime: advancedFilters.dateRange.end ? advancedFilters.dateRange.end.getTime() : void 0
        };
      } else {
        converted.timeRange = void 0;
      }
      emit("advanced-filter", converted);
    }, { deep: true });
    function clearAllFilters() {
      emit("update:searchTerm", "");
      emit("update:statusCode", "");
      emit("update:clientIP", "");
      emit("update:userAgent", "");
      emit("update:method", "");
      isStaticFileFilterActive.value = false;
      Object.assign(advancedFilters, {
        useRegex: false,
        caseSensitive: false,
        dateRange: null,
        responseTimeRange: null,
        bodyBytesRange: null,
        threatLevel: [],
        logFormat: [],
        customFields: [],
        excludePatterns: [],
        includeOnlyPatterns: []
      });
      emit("clear-filters");
    }
    function addCustomField() {
      advancedFilters.customFields.push({
        field: "clientIP",
        operator: "contains",
        value: ""
      });
    }
    function removeCustomField(index) {
      advancedFilters.customFields.splice(index, 1);
    }
    function addExcludePattern() {
      advancedFilters.excludePatterns.push("");
    }
    function removeExcludePattern(index) {
      advancedFilters.excludePatterns.splice(index, 1);
    }
    function addIncludePattern() {
      advancedFilters.includeOnlyPatterns.push("");
    }
    function removeIncludePattern(index) {
      advancedFilters.includeOnlyPatterns.splice(index, 1);
    }
    function handleSearch() {
      console.log("[LogFilters] Search triggered with term:", props.searchTerm);
      if (props.searchTerm) {
        console.log("[LogFilters] Executing search for:", props.searchTerm);
      } else {
        console.log("[LogFilters] Clearing search");
      }
    }
    function clearAllConditions() {
      emit("update:searchTerm", "");
      emit("update:searchField", "all");
      emit("update:statusCode", "");
      emit("update:clientIP", "");
      emit("update:userAgent", "");
      emit("update:method", "");
      Object.assign(advancedFilters, {
        useRegex: false,
        caseSensitive: false,
        dateRange: null,
        responseTimeRange: null,
        bodyBytesRange: null,
        threatLevel: [],
        logFormat: [],
        customFields: [],
        excludePatterns: [],
        includeOnlyPatterns: [],
        excludeStatusCodes: []
      });
      activeQuickFilters.value.clear();
      emit("clear-filters");
      console.log("[LogFilters] All conditions cleared");
    }
    watch(() => getCurrentDataMode(), (newMode) => {
      currentDataMode.value = newMode;
    }, { immediate: true });
    function applyAdvancedFilters() {
      console.log("[LogFilters] Applying advanced filters:", advancedFilters);
      emit("advanced-filter", { ...advancedFilters });
    }
    function clearAdvancedFilters() {
      console.log("[LogFilters] Clearing advanced filters");
      Object.assign(advancedFilters, {
        useRegex: false,
        caseSensitive: false,
        dateRange: null,
        responseTimeRange: null,
        bodyBytesRange: null,
        threatLevel: [],
        logFormat: [],
        customFields: [],
        excludePatterns: [],
        includeOnlyPatterns: [],
        excludeStatusCodes: []
      });
      applyAdvancedFilters();
    }
    function getFilterSummary() {
      const activeFilters = [];
      if (advancedFilters.threatLevel && advancedFilters.threatLevel.length > 0) {
        activeFilters.push(`威胁级别: ${advancedFilters.threatLevel.length}个`);
      }
      if (advancedFilters.dateRange) {
        activeFilters.push("时间范围");
      }
      if (advancedFilters.responseTimeRange) {
        activeFilters.push("响应时间");
      }
      if (advancedFilters.bodyBytesRange) {
        activeFilters.push("传输大小");
      }
      if (advancedFilters.customFields && advancedFilters.customFields.length > 0) {
        activeFilters.push(`自定义字段: ${advancedFilters.customFields.length}个`);
      }
      if (advancedFilters.excludePatterns && advancedFilters.excludePatterns.length > 0) {
        activeFilters.push(`排除模式: ${advancedFilters.excludePatterns.length}个`);
      }
      if (advancedFilters.includeOnlyPatterns && advancedFilters.includeOnlyPatterns.length > 0) {
        activeFilters.push(`包含模式: ${advancedFilters.includeOnlyPatterns.length}个`);
      }
      return activeFilters.length > 0 ? `已激活 ${activeFilters.length} 个过滤条件` : "无激活过滤条件";
    }
    function saveCurrentFilter() {
      if (!filterName.value.trim()) return;
      const filterData = {
        searchTerm: props.searchTerm,
        statusCode: props.statusCode,
        clientIP: props.clientIP,
        userAgent: props.userAgent,
        method: props.method,
        advanced: { ...advancedFilters }
      };
      emit("save-filter", filterName.value.trim(), filterData);
      savedFilters.value.push({
        name: filterName.value.trim(),
        filters: filterData
      });
      filterName.value = "";
      showSaveFilter.value = false;
    }
    function loadSavedFilter(filter) {
      console.log("[LogFilters] Loading saved filter:", filter.name, filter.filters);
      const isActive = activeQuickFilters.value.has(filter.name);
      if (isActive) {
        activeQuickFilters.value.delete(filter.name);
        if (filter.filters.statusCode) {
          const otherStatusFilters = Array.from(activeQuickFilters.value).filter((name) => {
            const f = savedFilters.value.find((sf) => sf.name === name);
            return f && f.filters.statusCode && name !== filter.name;
          });
          if (otherStatusFilters.length === 0) {
            emit("update:statusCode", "");
          }
        }
        if (filter.filters.excludeStatusCodes) {
          const currentExcludes = advancedFilters.excludeStatusCodes || [];
          advancedFilters.excludeStatusCodes = currentExcludes.filter(
            (code) => !filter.filters.excludeStatusCodes.includes(code)
          );
        }
        if (filter.filters.bodyBytesRange) {
          advancedFilters.bodyBytesRange = null;
        }
        if (filter.filters.responseTimeRange) {
          advancedFilters.responseTimeRange = null;
        }
      } else {
        activeQuickFilters.value.add(filter.name);
        if (filter.filters.statusCode) {
          emit("update:statusCode", filter.filters.statusCode);
        }
        if (filter.filters.excludeStatusCodes) {
          const currentExcludes = advancedFilters.excludeStatusCodes || [];
          const newExcludes = [.../* @__PURE__ */ new Set([...currentExcludes, ...filter.filters.excludeStatusCodes])];
          advancedFilters.excludeStatusCodes = newExcludes;
          console.log("[LogFilters] Applied excludeStatusCodes:", advancedFilters.excludeStatusCodes);
        }
        if (filter.filters.bodyBytesRange) {
          advancedFilters.bodyBytesRange = filter.filters.bodyBytesRange;
          console.log("[LogFilters] Applied bodyBytesRange:", advancedFilters.bodyBytesRange);
        }
        if (filter.filters.responseTimeRange) {
          advancedFilters.responseTimeRange = filter.filters.responseTimeRange;
          console.log("[LogFilters] Applied responseTimeRange:", advancedFilters.responseTimeRange);
        }
      }
      console.log("[LogFilters] Active quick filters:", Array.from(activeQuickFilters.value));
      applyAdvancedFilters();
    }
    function setQuickDateRange(range) {
      const now = /* @__PURE__ */ new Date();
      const start = /* @__PURE__ */ new Date();
      let end = /* @__PURE__ */ new Date();
      switch (range) {
        case "today":
          start.setHours(0, 0, 0, 0);
          end.setHours(23, 59, 59, 999);
          break;
        case "yesterday":
          end = /* @__PURE__ */ new Date();
          start.setDate(now.getDate() - 1);
          start.setHours(0, 0, 0, 0);
          end.setDate(now.getDate() - 1);
          end.setHours(23, 59, 59, 999);
          break;
        case "last7days":
          start.setDate(now.getDate() - 7);
          start.setHours(0, 0, 0, 0);
          end = now;
          break;
        case "last30days":
          start.setDate(now.getDate() - 30);
          start.setHours(0, 0, 0, 0);
          end = now;
          break;
        case "thisMonth":
          start.setDate(1);
          start.setHours(0, 0, 0, 0);
          end.setHours(23, 59, 59, 999);
          break;
        case "lastHour":
          start.setMinutes(0, 0, 0);
          end.setMinutes(59, 59, 999);
          break;
        case "last6hours":
          start.setHours(now.getHours() - 6);
          start.setMinutes(0, 0, 0);
          end.setMinutes(59, 59, 999);
          break;
        default:
          return;
      }
      advancedFilters.dateRange = {
        start,
        end
      };
      console.log(`[LogFilters] Set date range for ${range}:`, {
        start: formatLocalDateTime(start),
        end: formatLocalDateTime(end)
      });
    }
    function clearDateRange() {
      advancedFilters.dateRange = null;
      console.log("[LogFilters] Cleared date range");
    }
    function formatLocalDateTime(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    }
    function parseLocalDateTime(dateTimeStr) {
      if (!dateTimeStr) return /* @__PURE__ */ new Date();
      const [datePart, timePart] = dateTimeStr.split("T");
      const [year, month, day] = datePart.split("-").map(Number);
      const [hours, minutes] = (timePart || "00:00").split(":").map(Number);
      return new Date(year, month - 1, day, hours, minutes);
    }
    function formatNumber(num) {
      if (num == null || isNaN(num)) return "0";
      return num.toLocaleString();
    }
    function toggleStaticFileFilter() {
      isStaticFileFilterActive.value = !isStaticFileFilterActive.value;
      if (isStaticFileFilterActive.value) {
        const staticFilePattern = generateStaticFileExcludePattern();
        if (!advancedFilters.excludePatterns.includes(staticFilePattern)) {
          advancedFilters.excludePatterns.push(staticFilePattern);
        }
        console.log("[LogFilters] 已激活静态文件过滤，排除模式:", staticFilePattern);
      } else {
        const staticFilePattern = generateStaticFileExcludePattern();
        const index = advancedFilters.excludePatterns.indexOf(staticFilePattern);
        if (index > -1) {
          advancedFilters.excludePatterns.splice(index, 1);
        }
        console.log("[LogFilters] 已取消静态文件过滤");
      }
      applyAdvancedFilters();
    }
    function generateStaticFileExcludePattern() {
      const extensionsPattern = staticFileExtensions.join("|");
      const pattern = `\\.(${extensionsPattern})(\\?.*)?$`;
      console.log("[LogFilters] Generated static file pattern:", pattern);
      return pattern;
    }
    function updateStaticFileFilterStatus() {
      try {
        const staticFilePattern = generateStaticFileExcludePattern();
        isStaticFileFilterActive.value = advancedFilters.excludePatterns?.includes(staticFilePattern) || false;
      } catch (error) {
        console.warn("[LogFilters] Error updating static file filter status:", error);
        isStaticFileFilterActive.value = false;
      }
    }
    function getFilterTooltip(filter) {
      const isActive = activeQuickFilters.value.has(filter.name);
      const status = isActive ? "已激活" : "点击激活";
      return `${filter.filters.description || filter.name} (${status})`;
    }
    function clearAllQuickFilters() {
      console.log("[LogFilters] Clearing all quick filters");
      activeQuickFilters.value.clear();
      emit("update:statusCode", "");
      advancedFilters.excludeStatusCodes = [];
      advancedFilters.bodyBytesRange = null;
      advancedFilters.responseTimeRange = null;
      applyAdvancedFilters();
    }
    function removeQuickFilter(filterName2) {
      console.log("[LogFilters] Removing quick filter:", filterName2);
      const filter = savedFilters.value.find((f) => f.name === filterName2);
      if (filter) {
        loadSavedFilter(filter);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createBaseVNode("div", _hoisted_2$8, [
          createBaseVNode("div", _hoisted_3$8, [
            createBaseVNode("div", _hoisted_4$8, [
              createBaseVNode("span", _hoisted_5$8, toDisplayString(formatNumber(filterSummary.value.filtered)), 1),
              createBaseVNode("span", _hoisted_6$8, "/ " + toDisplayString(formatNumber(filterSummary.value.total)) + " 条日志", 1)
            ]),
            createBaseVNode("div", _hoisted_7$8, [
              createBaseVNode("span", {
                class: normalizeClass([
                  "px-2 py-1 rounded",
                  filterSummary.value.percentage >= 80 ? "bg-green-500/20 text-green-400" : filterSummary.value.percentage >= 50 ? "bg-yellow-500/20 text-yellow-400" : "bg-red-500/20 text-red-400"
                ])
              }, toDisplayString(filterSummary.value.percentage) + "% 显示 ", 3)
            ])
          ]),
          createBaseVNode("div", _hoisted_8$8, [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => showAdvanced.value = !showAdvanced.value),
              class: normalizeClass([
                "px-3 py-1.5 rounded-lg text-sm transition-colors",
                showAdvanced.value ? "bg-blue-500 text-white" : "bg-white/10 text-white hover:bg-white/20"
              ])
            }, _cache[20] || (_cache[20] = [
              createBaseVNode("i", { class: "pi pi-filter mr-1" }, null, -1),
              createTextVNode(" 高级过滤 ")
            ]), 2),
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => showSaveFilter.value = true),
              disabled: !hasActiveFilters.value,
              class: "px-3 py-1.5 bg-green-500 hover:bg-green-600 disabled:bg-gray-500 text-white rounded-lg text-sm transition-colors"
            }, _cache[21] || (_cache[21] = [
              createBaseVNode("i", { class: "pi pi-save mr-1" }, null, -1),
              createTextVNode(" 保存 ")
            ]), 8, _hoisted_9$8),
            createBaseVNode("button", {
              onClick: clearAllFilters,
              disabled: !hasActiveFilters.value,
              class: "px-3 py-1.5 bg-red-500 hover:bg-red-600 disabled:bg-gray-500 text-white rounded-lg text-sm transition-colors"
            }, _cache[22] || (_cache[22] = [
              createBaseVNode("i", { class: "pi pi-refresh mr-1" }, null, -1),
              createTextVNode(" 清空 ")
            ]), 8, _hoisted_10$7)
          ])
        ]),
        createBaseVNode("div", _hoisted_11$7, [
          createBaseVNode("div", _hoisted_12$7, [
            _cache[25] || (_cache[25] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-1" }, "搜索内容", -1)),
            createBaseVNode("div", _hoisted_13$6, [
              createBaseVNode("select", {
                value: _ctx.searchField,
                onChange: _cache[2] || (_cache[2] = ($event) => emit("update:searchField", $event.target.value)),
                class: "px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none min-w-0 w-auto"
              }, [
                (openBlock(), createElementBlock(Fragment, null, renderList(searchableFields, (f) => {
                  return createBaseVNode("option", {
                    key: f.value,
                    value: f.value
                  }, toDisplayString(f.label), 9, _hoisted_15$6);
                }), 64))
              ], 40, _hoisted_14$6),
              createBaseVNode("input", {
                value: _ctx.searchTerm,
                onInput: _cache[3] || (_cache[3] = ($event) => emit("update:searchTerm", $event.target.value)),
                onKeyup: withKeys(handleSearch, ["enter"]),
                type: "text",
                placeholder: `在${searchableFields.find((f) => f.value === _ctx.searchField)?.label || "全部字段"}中搜索...`,
                class: "flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              }, null, 40, _hoisted_16$6),
              createBaseVNode("button", {
                onClick: handleSearch,
                class: "px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-2",
                title: "搜索"
              }, _cache[23] || (_cache[23] = [
                createBaseVNode("i", { class: "pi pi-search text-sm" }, null, -1),
                createBaseVNode("span", { class: "hidden md:inline" }, "搜索", -1)
              ])),
              hasActiveFilters.value ? (openBlock(), createElementBlock("button", {
                key: 0,
                onClick: clearAllConditions,
                class: "px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-2",
                title: "清空所有搜索和过滤条件"
              }, _cache[24] || (_cache[24] = [
                createBaseVNode("i", { class: "pi pi-times text-sm" }, null, -1),
                createBaseVNode("span", { class: "hidden md:inline" }, "清空", -1)
              ]))) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", null, [
            _cache[26] || (_cache[26] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-1" }, "状态码", -1)),
            createBaseVNode("input", {
              value: _ctx.statusCode,
              onInput: _cache[4] || (_cache[4] = ($event) => emit("update:statusCode", $event.target.value)),
              type: "text",
              placeholder: "200, 404, 5xx...",
              class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            }, null, 40, _hoisted_17$5)
          ]),
          createBaseVNode("div", null, [
            _cache[27] || (_cache[27] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-1" }, "客户端 IP", -1)),
            createBaseVNode("input", {
              value: _ctx.clientIP,
              onInput: _cache[5] || (_cache[5] = ($event) => emit("update:clientIP", $event.target.value)),
              type: "text",
              placeholder: "192.168.1.1",
              class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            }, null, 40, _hoisted_18$5)
          ]),
          createBaseVNode("div", null, [
            _cache[29] || (_cache[29] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-1" }, "请求方法", -1)),
            createBaseVNode("select", {
              value: _ctx.method,
              onChange: _cache[6] || (_cache[6] = ($event) => emit("update:method", $event.target.value)),
              class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            }, [
              _cache[28] || (_cache[28] = createBaseVNode("option", { value: "" }, "全部方法", -1)),
              (openBlock(), createElementBlock(Fragment, null, renderList(httpMethods, (m) => {
                return createBaseVNode("option", {
                  key: m,
                  value: m
                }, toDisplayString(m), 9, _hoisted_20$5);
              }), 64))
            ], 40, _hoisted_19$5)
          ]),
          createBaseVNode("div", null, [
            _cache[30] || (_cache[30] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-1" }, "User Agent", -1)),
            createBaseVNode("input", {
              value: _ctx.userAgent,
              onInput: _cache[7] || (_cache[7] = ($event) => emit("update:userAgent", $event.target.value)),
              type: "text",
              placeholder: "浏览器标识...",
              class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            }, null, 40, _hoisted_21$4)
          ])
        ]),
        createBaseVNode("div", _hoisted_22$4, [
          _cache[32] || (_cache[32] = createBaseVNode("div", { class: "flex items-center gap-3" }, [
            createBaseVNode("span", { class: "text-sm text-gray-400 font-medium" }, "快速过滤:"),
            createBaseVNode("div", { class: "text-xs text-gray-500 bg-gray-700/30 px-2 py-1 rounded" }, " 支持多选组合 ")
          ], -1)),
          createBaseVNode("div", _hoisted_23$4, [
            createBaseVNode("button", {
              onClick: toggleStaticFileFilter,
              class: normalizeClass([
                "px-3 py-1 rounded-full text-sm transition-colors flex items-center gap-1",
                isStaticFileFilterActive.value ? "bg-orange-500/30 text-orange-400 hover:bg-orange-500/40" : "bg-gray-500/20 text-gray-400 hover:bg-gray-500/30"
              ]),
              title: "排除CSS、JS、图片、字体等静态文件"
            }, [
              _cache[31] || (_cache[31] = createBaseVNode("i", { class: "pi pi-filter-slash text-xs" }, null, -1)),
              createTextVNode(" " + toDisplayString(isStaticFileFilterActive.value ? "已排除静态文件" : "排除静态文件"), 1)
            ], 2),
            (openBlock(true), createElementBlock(Fragment, null, renderList(savedFilters.value, (filter) => {
              return openBlock(), createElementBlock("button", {
                key: filter.name,
                onClick: ($event) => loadSavedFilter(filter),
                class: normalizeClass([
                  "px-3 py-1 rounded-full text-sm transition-all duration-200 flex items-center gap-1.5 font-medium",
                  activeQuickFilters.value.has(filter.name) ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25 scale-105 border border-blue-400" : "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 hover:scale-105 border border-transparent"
                ]),
                title: getFilterTooltip(filter)
              }, [
                createBaseVNode("div", {
                  class: normalizeClass([
                    "w-2 h-2 rounded-full transition-colors",
                    activeQuickFilters.value.has(filter.name) ? "bg-blue-200" : "bg-blue-400/50"
                  ])
                }, null, 2),
                createTextVNode(" " + toDisplayString(filter.name) + " ", 1),
                activeQuickFilters.value.has(filter.name) ? (openBlock(), createElementBlock("span", _hoisted_25$4, " ✓ ")) : createCommentVNode("", true)
              ], 10, _hoisted_24$4);
            }), 128))
          ])
        ]),
        activeQuickFilters.value.size > 0 ? (openBlock(), createElementBlock("div", _hoisted_26$3, [
          createBaseVNode("div", _hoisted_27$3, [
            createBaseVNode("h4", _hoisted_28$3, [
              _cache[33] || (_cache[33] = createBaseVNode("div", { class: "w-2 h-2 bg-blue-400 rounded-full animate-pulse" }, null, -1)),
              createTextVNode(" 活跃过滤器 (" + toDisplayString(activeQuickFilters.value.size) + ") ", 1)
            ]),
            createBaseVNode("button", {
              onClick: clearAllQuickFilters,
              class: "text-xs text-blue-400 hover:text-blue-300 transition-colors px-2 py-1 bg-blue-500/20 rounded"
            }, " 清空全部 ")
          ]),
          createBaseVNode("div", _hoisted_29$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Array.from(activeQuickFilters.value), (filterName2) => {
              return openBlock(), createElementBlock("div", {
                key: filterName2,
                class: "flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-lg border border-blue-500/30"
              }, [
                _cache[35] || (_cache[35] = createBaseVNode("div", { class: "w-1.5 h-1.5 bg-blue-400 rounded-full" }, null, -1)),
                createBaseVNode("span", _hoisted_30$2, toDisplayString(filterName2), 1),
                createBaseVNode("button", {
                  onClick: ($event) => removeQuickFilter(filterName2),
                  class: "text-blue-400 hover:text-blue-200 transition-colors ml-1",
                  title: "移除此过滤器"
                }, _cache[34] || (_cache[34] = [
                  createBaseVNode("i", { class: "pi pi-times text-xs" }, null, -1)
                ]), 8, _hoisted_31$2)
              ]);
            }), 128))
          ]),
          _cache[36] || (_cache[36] = createBaseVNode("div", { class: "mt-3 text-xs text-blue-300/80" }, [
            createBaseVNode("i", { class: "pi pi-info-circle mr-1" }),
            createTextVNode(" 多个过滤器将同时生效，点击按钮可切换状态 ")
          ], -1))
        ])) : createCommentVNode("", true),
        showAdvanced.value ? (openBlock(), createElementBlock("div", _hoisted_32$2, [
          createBaseVNode("div", _hoisted_33$2, [
            _cache[39] || (_cache[39] = createBaseVNode("h3", { class: "text-lg font-semibold text-white" }, [
              createBaseVNode("i", { class: "pi pi-filter mr-2 text-blue-400" }),
              createTextVNode(" 高级过滤选项 ")
            ], -1)),
            createBaseVNode("div", _hoisted_34$2, [
              createBaseVNode("label", _hoisted_35$2, [
                withDirectives(createBaseVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => advancedFilters.useRegex = $event),
                  class: "rounded border-white/20 bg-white/10 text-blue-500"
                }, null, 512), [
                  [vModelCheckbox, advancedFilters.useRegex]
                ]),
                _cache[37] || (_cache[37] = createTextVNode(" 正则表达式 "))
              ]),
              createBaseVNode("label", _hoisted_36$2, [
                withDirectives(createBaseVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => advancedFilters.caseSensitive = $event),
                  class: "rounded border-white/20 bg-white/10 text-blue-500"
                }, null, 512), [
                  [vModelCheckbox, advancedFilters.caseSensitive]
                ]),
                _cache[38] || (_cache[38] = createTextVNode(" 区分大小写 "))
              ])
            ])
          ]),
          createBaseVNode("div", null, [
            _cache[40] || (_cache[40] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "时间范围", -1)),
            createBaseVNode("div", _hoisted_37$2, [
              createBaseVNode("div", _hoisted_38$2, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => dateRangeStart.value = $event),
                  type: "datetime-local",
                  class: "px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                }, null, 512), [
                  [vModelText, dateRangeStart.value]
                ]),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => dateRangeEnd.value = $event),
                  type: "datetime-local",
                  class: "px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                }, null, 512), [
                  [vModelText, dateRangeEnd.value]
                ])
              ]),
              createBaseVNode("div", _hoisted_39$2, [
                (openBlock(), createElementBlock(Fragment, null, renderList([
                  { key: "today", label: "今天" },
                  { key: "yesterday", label: "昨天" },
                  { key: "last7days", label: "7天" },
                  { key: "last30days", label: "30天" },
                  { key: "thisMonth", label: "本月" },
                  { key: "lastHour", label: "最近1小时" },
                  { key: "last6hours", label: "最近6小时" }
                ], (range) => {
                  return createBaseVNode("button", {
                    key: range.key,
                    onClick: ($event) => setQuickDateRange(range.key),
                    class: "px-2 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs transition-colors whitespace-nowrap"
                  }, toDisplayString(range.label), 9, _hoisted_40$2);
                }), 64)),
                createBaseVNode("button", {
                  onClick: clearDateRange,
                  class: "px-2 py-1 bg-red-600 hover:bg-red-500 text-white rounded text-xs transition-colors",
                  title: "清除时间过滤"
                }, " 清除 ")
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_41$2, [
            createBaseVNode("div", null, [
              _cache[41] || (_cache[41] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "响应时间 (毫秒)", -1)),
              createBaseVNode("div", _hoisted_42$2, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => responseTimeMin.value = $event),
                  type: "number",
                  placeholder: "最小值",
                  class: "px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                }, null, 512), [
                  [vModelText, responseTimeMin.value]
                ]),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => responseTimeMax.value = $event),
                  type: "number",
                  placeholder: "最大值",
                  class: "px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                }, null, 512), [
                  [vModelText, responseTimeMax.value]
                ])
              ])
            ]),
            createBaseVNode("div", null, [
              _cache[42] || (_cache[42] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "传输大小 (字节)", -1)),
              createBaseVNode("div", _hoisted_43$2, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => bodyBytesMin.value = $event),
                  type: "number",
                  placeholder: "最小值",
                  class: "px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                }, null, 512), [
                  [vModelText, bodyBytesMin.value]
                ]),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => bodyBytesMax.value = $event),
                  type: "number",
                  placeholder: "最大值",
                  class: "px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                }, null, 512), [
                  [vModelText, bodyBytesMax.value]
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_44$2, [
            createBaseVNode("div", null, [
              _cache[43] || (_cache[43] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "威胁级别", -1)),
              createBaseVNode("div", _hoisted_45$2, [
                (openBlock(), createElementBlock(Fragment, null, renderList(threatLevels, (level) => {
                  return createBaseVNode("label", {
                    key: level.value,
                    class: "flex items-center gap-2 cursor-pointer"
                  }, [
                    withDirectives(createBaseVNode("input", {
                      type: "checkbox",
                      value: level.value,
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => advancedFilters.threatLevel = $event),
                      class: "rounded border-white/20 bg-white/10"
                    }, null, 8, _hoisted_46$2), [
                      [vModelCheckbox, advancedFilters.threatLevel]
                    ]),
                    createBaseVNode("span", {
                      class: normalizeClass(level.color)
                    }, toDisplayString(level.label), 3)
                  ]);
                }), 64))
              ])
            ]),
            createBaseVNode("div", null, [
              _cache[44] || (_cache[44] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "日志格式", -1)),
              createBaseVNode("div", _hoisted_47$1, [
                (openBlock(), createElementBlock(Fragment, null, renderList(logFormats, (format) => {
                  return createBaseVNode("label", {
                    key: format.value,
                    class: "flex items-center gap-2 text-white cursor-pointer"
                  }, [
                    withDirectives(createBaseVNode("input", {
                      type: "checkbox",
                      value: format.value,
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => advancedFilters.logFormat = $event),
                      class: "rounded border-white/20 bg-white/10"
                    }, null, 8, _hoisted_48$1), [
                      [vModelCheckbox, advancedFilters.logFormat]
                    ]),
                    createBaseVNode("span", null, toDisplayString(format.label), 1)
                  ]);
                }), 64))
              ])
            ])
          ]),
          createBaseVNode("div", null, [
            createBaseVNode("div", { class: "flex items-center justify-between mb-2" }, [
              _cache[46] || (_cache[46] = createBaseVNode("label", { class: "text-sm text-gray-400" }, "自定义字段过滤", -1)),
              createBaseVNode("button", {
                onClick: addCustomField,
                class: "px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs transition-colors"
              }, _cache[45] || (_cache[45] = [
                createBaseVNode("i", { class: "pi pi-plus mr-1" }, null, -1),
                createTextVNode(" 添加条件 ")
              ]))
            ]),
            createBaseVNode("div", _hoisted_49$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(advancedFilters.customFields, (field, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "grid grid-cols-4 gap-2"
                }, [
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": ($event) => field.field = $event,
                    class: "px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  }, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(searchableFields, (f) => {
                      return createBaseVNode("option", {
                        key: f.value,
                        value: f.value
                      }, toDisplayString(f.label), 9, _hoisted_51$1);
                    }), 64))
                  ], 8, _hoisted_50$1), [
                    [vModelSelect, field.field]
                  ]),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": ($event) => field.operator = $event,
                    class: "px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  }, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(operators, (op) => {
                      return createBaseVNode("option", {
                        key: op.value,
                        value: op.value
                      }, toDisplayString(op.label), 9, _hoisted_53$1);
                    }), 64))
                  ], 8, _hoisted_52$1), [
                    [vModelSelect, field.operator]
                  ]),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": ($event) => field.value = $event,
                    type: "text",
                    placeholder: "值",
                    class: "px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  }, null, 8, _hoisted_54$1), [
                    [vModelText, field.value]
                  ]),
                  createBaseVNode("button", {
                    onClick: ($event) => removeCustomField(index),
                    class: "px-2 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
                  }, _cache[47] || (_cache[47] = [
                    createBaseVNode("i", { class: "pi pi-trash" }, null, -1)
                  ]), 8, _hoisted_55$1)
                ]);
              }), 128))
            ])
          ]),
          createBaseVNode("div", _hoisted_56$1, [
            createBaseVNode("div", null, [
              createBaseVNode("div", { class: "flex items-center justify-between mb-2" }, [
                _cache[49] || (_cache[49] = createBaseVNode("label", { class: "text-sm text-gray-400" }, "排除模式", -1)),
                createBaseVNode("button", {
                  onClick: addExcludePattern,
                  class: "px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-xs transition-colors"
                }, _cache[48] || (_cache[48] = [
                  createBaseVNode("i", { class: "pi pi-plus mr-1" }, null, -1),
                  createTextVNode(" 添加 ")
                ]))
              ]),
              createBaseVNode("div", _hoisted_57$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(advancedFilters.excludePatterns, (pattern, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "flex gap-2"
                  }, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": ($event) => advancedFilters.excludePatterns[index] = $event,
                      type: "text",
                      placeholder: "排除的模式...",
                      class: "flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    }, null, 8, _hoisted_58$1), [
                      [vModelText, advancedFilters.excludePatterns[index]]
                    ]),
                    createBaseVNode("button", {
                      onClick: ($event) => removeExcludePattern(index),
                      class: "px-2 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
                    }, _cache[50] || (_cache[50] = [
                      createBaseVNode("i", { class: "pi pi-trash" }, null, -1)
                    ]), 8, _hoisted_59$1)
                  ]);
                }), 128))
              ])
            ]),
            createBaseVNode("div", null, [
              createBaseVNode("div", { class: "flex items-center justify-between mb-2" }, [
                _cache[52] || (_cache[52] = createBaseVNode("label", { class: "text-sm text-gray-400" }, "仅包含模式", -1)),
                createBaseVNode("button", {
                  onClick: addIncludePattern,
                  class: "px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-xs transition-colors"
                }, _cache[51] || (_cache[51] = [
                  createBaseVNode("i", { class: "pi pi-plus mr-1" }, null, -1),
                  createTextVNode(" 添加 ")
                ]))
              ]),
              createBaseVNode("div", _hoisted_60$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(advancedFilters.includeOnlyPatterns, (pattern, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "flex gap-2"
                  }, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": ($event) => advancedFilters.includeOnlyPatterns[index] = $event,
                      type: "text",
                      placeholder: "必须包含的模式...",
                      class: "flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    }, null, 8, _hoisted_61$1), [
                      [vModelText, advancedFilters.includeOnlyPatterns[index]]
                    ]),
                    createBaseVNode("button", {
                      onClick: ($event) => removeIncludePattern(index),
                      class: "px-2 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
                    }, _cache[53] || (_cache[53] = [
                      createBaseVNode("i", { class: "pi pi-trash" }, null, -1)
                    ]), 8, _hoisted_62$1)
                  ]);
                }), 128))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_63$1, [
            createBaseVNode("div", { class: "flex items-center gap-3" }, [
              createBaseVNode("button", {
                onClick: applyAdvancedFilters,
                class: "px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
              }, _cache[54] || (_cache[54] = [
                createBaseVNode("i", { class: "pi pi-check text-sm" }, null, -1),
                createTextVNode(" 应用过滤 ")
              ])),
              createBaseVNode("button", {
                onClick: clearAdvancedFilters,
                class: "px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
              }, _cache[55] || (_cache[55] = [
                createBaseVNode("i", { class: "pi pi-refresh text-sm" }, null, -1),
                createTextVNode(" 重置 ")
              ]))
            ]),
            createBaseVNode("div", _hoisted_64$1, toDisplayString(getFilterSummary()), 1)
          ])
        ])) : createCommentVNode("", true),
        showSaveFilter.value ? (openBlock(), createElementBlock("div", _hoisted_65$1, [
          createBaseVNode("div", _hoisted_66$1, [
            _cache[56] || (_cache[56] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4" }, "保存过滤器", -1)),
            withDirectives(createBaseVNode("input", {
              "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => filterName.value = $event),
              type: "text",
              placeholder: "过滤器名称...",
              class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none mb-4"
            }, null, 512), [
              [vModelText, filterName.value]
            ]),
            createBaseVNode("div", _hoisted_67$1, [
              createBaseVNode("button", {
                onClick: saveCurrentFilter,
                disabled: !filterName.value.trim(),
                class: "flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 text-white rounded-lg transition-colors"
              }, " 保存 ", 8, _hoisted_68$1),
              createBaseVNode("button", {
                onClick: _cache[19] || (_cache[19] = ($event) => {
                  showSaveFilter.value = false;
                  filterName.value = "";
                }),
                class: "flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              }, " 取消 ")
            ])
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$7 = { class: "space-y-4" };
const _hoisted_2$7 = { class: "flex items-center justify-between" };
const _hoisted_3$7 = { class: "text-sm text-gray-400" };
const _hoisted_4$7 = { class: "flex items-center gap-3" };
const _hoisted_5$7 = {
  key: 0,
  class: "p-4 bg-white/5 rounded-lg"
};
const _hoisted_6$7 = { class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3" };
const _hoisted_7$7 = ["checked", "onChange"];
const _hoisted_8$7 = { class: "overflow-x-auto" };
const _hoisted_9$7 = { class: "w-full text-sm bg-white/5 rounded-lg overflow-hidden" };
const _hoisted_10$6 = { class: "bg-white/10" };
const _hoisted_11$6 = ["onClick"];
const _hoisted_12$6 = { key: 1 };
const _hoisted_13$5 = ["innerHTML"];
const _hoisted_14$5 = ["title"];
const _hoisted_15$5 = ["title"];
const _hoisted_16$5 = {
  key: 1,
  class: "text-center py-8 text-gray-400"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "LogTableEnhanced",
  props: {
    items: {}
  },
  setup(__props) {
    const props = __props;
    const defaultColumns = [
      {
        key: "timestamp",
        label: "时间",
        visible: true,
        width: 180,
        sortable: true,
        formatter: (value) => new Date(value).toLocaleString()
      },
      {
        key: "ip",
        label: "IP地址",
        visible: true,
        width: 120,
        sortable: true
      },
      {
        key: "method",
        label: "方法",
        visible: true,
        width: 80,
        sortable: true
      },
      {
        key: "path",
        label: "请求路径",
        visible: true,
        width: 500,
        sortable: true
      },
      {
        key: "statusCode",
        label: "状态码",
        visible: true,
        width: 80,
        sortable: true,
        formatter: (value) => {
          const color = value >= 500 ? "text-red-400" : value >= 400 ? "text-orange-400" : value >= 300 ? "text-yellow-400" : "text-green-400";
          return `<span class="${color}">${value}</span>`;
        }
      },
      {
        key: "responseSize",
        label: "大小",
        visible: true,
        width: 100,
        sortable: true,
        formatter: (value) => {
          if (value === 0) return "-";
          if (value < 1024) return `${value}B`;
          if (value < 1024 * 1024) return `${(value / 1024).toFixed(1)}KB`;
          return `${(value / (1024 * 1024)).toFixed(1)}MB`;
        }
      },
      {
        key: "userAgent",
        label: "User Agent",
        visible: true,
        width: 200,
        sortable: false
      },
      {
        key: "referer",
        label: "Referer",
        visible: false,
        width: 200,
        sortable: false
      },
      {
        key: "threatLevel",
        label: "威胁级别",
        visible: true,
        width: 100,
        sortable: true,
        formatter: (value) => {
          const colors = {
            normal: "text-gray-400",
            low: "text-blue-400",
            medium: "text-yellow-400",
            high: "text-orange-400",
            critical: "text-red-400"
          };
          const labels = {
            normal: "正常",
            low: "低",
            medium: "中",
            high: "高",
            critical: "严重"
          };
          const color = colors[value] || "text-gray-400";
          const label = labels[value] || "未知";
          return `<span class="${color}">${label}</span>`;
        }
      }
    ];
    const columns = ref([...defaultColumns]);
    const showColumnConfig = ref(false);
    const sortField = ref("");
    const sortDirection = ref("asc");
    const visibleColumns = computed(() => columns.value.filter((col) => col.visible));
    const sortedItems = computed(() => {
      if (!sortField.value) return props.items;
      return [...props.items].sort((a, b) => {
        const aVal = a[sortField.value];
        const bVal = b[sortField.value];
        let result = 0;
        if (aVal < bVal) result = -1;
        else if (aVal > bVal) result = 1;
        return sortDirection.value === "desc" ? -result : result;
      });
    });
    function toggleColumn(columnKey) {
      const column = columns.value.find((col) => col.key === columnKey);
      if (column) {
        column.visible = !column.visible;
        saveColumnConfig();
      }
    }
    function handleSort(columnKey) {
      if (sortField.value === columnKey) {
        sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
      } else {
        sortField.value = columnKey;
        sortDirection.value = "asc";
      }
    }
    function resetColumns() {
      columns.value = [...defaultColumns];
      sortField.value = "";
      saveColumnConfig();
    }
    function saveColumnConfig() {
      const config = {
        columns: columns.value.map((col) => ({
          key: col.key,
          visible: col.visible,
          width: col.width
        })),
        sort: {
          field: sortField.value,
          direction: sortDirection.value
        }
      };
      localStorage.setItem("fastwlat.log.table.config", JSON.stringify(config));
    }
    function loadColumnConfig() {
      try {
        const saved = localStorage.getItem("fastwlat.log.table.config");
        if (saved) {
          const config = JSON.parse(saved);
          if (config.columns) {
            config.columns.forEach((savedCol) => {
              const column = columns.value.find((col) => col.key === savedCol.key);
              if (column) {
                column.visible = savedCol.visible;
                if (savedCol.width) column.width = savedCol.width;
              }
            });
          }
          if (config.sort) {
            sortField.value = config.sort.field || "";
            sortDirection.value = config.sort.direction || "asc";
          }
        }
      } catch (error) {
        console.warn("Failed to load column config:", error);
      }
    }
    function getCellValue(item, column) {
      const value = item[column.key];
      return column.formatter ? column.formatter(value, item) : value;
    }
    function getSortIcon(columnKey) {
      if (sortField.value !== columnKey) return "pi-sort";
      return sortDirection.value === "asc" ? "pi-sort-up" : "pi-sort-down";
    }
    loadColumnConfig();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$7, [
          createBaseVNode("div", _hoisted_3$7, " 共 " + toDisplayString(_ctx.items.length) + " 条记录 ", 1),
          createBaseVNode("div", _hoisted_4$7, [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => showColumnConfig.value = !showColumnConfig.value),
              class: "px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center gap-2"
            }, _cache[1] || (_cache[1] = [
              createBaseVNode("i", { class: "pi pi-cog text-sm" }, null, -1),
              createBaseVNode("span", { class: "hidden md:inline" }, "列设置", -1)
            ])),
            createBaseVNode("button", {
              onClick: resetColumns,
              class: "px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center gap-2"
            }, _cache[2] || (_cache[2] = [
              createBaseVNode("i", { class: "pi pi-refresh text-sm" }, null, -1),
              createBaseVNode("span", { class: "hidden md:inline" }, "重置", -1)
            ]))
          ])
        ]),
        showColumnConfig.value ? (openBlock(), createElementBlock("div", _hoisted_5$7, [
          _cache[3] || (_cache[3] = createBaseVNode("h4", { class: "text-white font-medium mb-3" }, "列显示设置", -1)),
          createBaseVNode("div", _hoisted_6$7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(columns.value, (column) => {
              return openBlock(), createElementBlock("label", {
                key: column.key,
                class: "flex items-center gap-2 text-sm text-white cursor-pointer hover:bg-white/10 p-2 rounded"
              }, [
                createBaseVNode("input", {
                  type: "checkbox",
                  checked: column.visible,
                  onChange: ($event) => toggleColumn(column.key),
                  class: "rounded border-white/20 bg-white/10"
                }, null, 40, _hoisted_7$7),
                createBaseVNode("span", null, toDisplayString(column.label), 1)
              ]);
            }), 128))
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_8$7, [
          createBaseVNode("table", _hoisted_9$7, [
            createBaseVNode("thead", _hoisted_10$6, [
              createBaseVNode("tr", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(visibleColumns.value, (column) => {
                  return openBlock(), createElementBlock("th", {
                    key: column.key,
                    style: normalizeStyle({ width: column.width ? `${column.width}px` : "auto" }),
                    class: "px-4 py-3 text-left text-white font-medium"
                  }, [
                    column.sortable ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      onClick: ($event) => handleSort(column.key),
                      class: "flex items-center gap-2 cursor-pointer hover:text-blue-400 transition-colors"
                    }, [
                      createBaseVNode("span", null, toDisplayString(column.label), 1),
                      createBaseVNode("i", {
                        class: normalizeClass(["pi", getSortIcon(column.key), "text-xs"])
                      }, null, 2)
                    ], 8, _hoisted_11$6)) : (openBlock(), createElementBlock("span", _hoisted_12$6, toDisplayString(column.label), 1))
                  ], 4);
                }), 128))
              ])
            ]),
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(sortedItems.value, (item) => {
                return openBlock(), createElementBlock("tr", {
                  key: item.id,
                  class: "border-t border-white/10 hover:bg-white/5 transition-colors"
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(visibleColumns.value, (column) => {
                    return openBlock(), createElementBlock("td", {
                      key: column.key,
                      class: "px-4 py-3 text-gray-300",
                      style: normalizeStyle({ maxWidth: column.width ? `${column.width}px` : "none" })
                    }, [
                      column.formatter && ["statusCode", "threatLevel"].includes(column.key) ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        innerHTML: getCellValue(item, column),
                        class: "truncate"
                      }, null, 8, _hoisted_13$5)) : column.key === "path" ? (openBlock(), createElementBlock("div", {
                        key: 1,
                        class: "break-all text-xs leading-relaxed max-h-16 overflow-y-auto",
                        title: getCellValue(item, column)
                      }, toDisplayString(getCellValue(item, column)), 9, _hoisted_14$5)) : (openBlock(), createElementBlock("div", {
                        key: 2,
                        class: "truncate",
                        title: getCellValue(item, column)
                      }, toDisplayString(getCellValue(item, column)), 9, _hoisted_15$5))
                    ], 4);
                  }), 128))
                ]);
              }), 128))
            ])
          ])
        ]),
        _ctx.items.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_16$5, _cache[4] || (_cache[4] = [
          createBaseVNode("i", { class: "pi pi-inbox text-4xl mb-2" }, null, -1),
          createBaseVNode("div", null, "暂无日志数据", -1)
        ]))) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$6 = {
  key: 0,
  class: "fixed inset-0 bg-black/50 flex items-center justify-center z-50"
};
const _hoisted_2$6 = { class: "bg-gray-900 rounded-lg shadow-2xl w-[90vw] h-[90vh] max-w-7xl border border-gray-700" };
const _hoisted_3$6 = { class: "flex items-center justify-between p-6 border-b border-gray-700" };
const _hoisted_4$6 = { class: "p-6 h-[calc(100%-80px)] overflow-y-auto" };
const _hoisted_5$6 = { class: "flex flex-wrap gap-2 mb-6" };
const _hoisted_6$6 = ["onClick"];
const _hoisted_7$6 = { class: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6" };
const _hoisted_8$6 = { class: "flex items-center justify-between" };
const _hoisted_9$6 = { class: "text-sm text-gray-400" };
const _hoisted_10$5 = { class: "text-2xl font-bold text-white" };
const _hoisted_11$5 = {
  key: 0,
  class: "mb-6 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg"
};
const _hoisted_12$5 = { class: "flex items-center gap-3" };
const _hoisted_13$4 = { class: "text-gray-300 text-sm mt-1" };
const _hoisted_14$4 = {
  key: 1,
  class: "mb-6 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg"
};
const _hoisted_15$4 = { class: "flex items-center gap-2 text-blue-400 text-sm" };
const _hoisted_16$4 = { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" };
const _hoisted_17$4 = { class: "bg-gray-800 rounded-lg p-4 border border-gray-700" };
const _hoisted_18$4 = { class: "text-lg font-semibold text-white mb-4 flex items-center gap-2" };
const _hoisted_19$4 = {
  key: 0,
  class: "space-y-3"
};
const _hoisted_20$4 = {
  key: 0,
  class: "text-center py-8 text-gray-400"
};
const _hoisted_21$3 = { key: 1 };
const _hoisted_22$3 = ["onClick"];
const _hoisted_23$3 = { class: "flex items-center gap-3" };
const _hoisted_24$3 = { class: "text-white font-medium" };
const _hoisted_25$3 = { class: "text-gray-400 text-sm" };
const _hoisted_26$2 = { class: "text-right" };
const _hoisted_27$2 = { class: "text-white font-bold" };
const _hoisted_28$2 = { class: "text-xs text-gray-400" };
const _hoisted_29$1 = {
  key: 1,
  class: "space-y-3"
};
const _hoisted_30$1 = { class: "w-12 text-gray-400 text-sm" };
const _hoisted_31$1 = { class: "flex-1 bg-gray-700 rounded-full h-3 relative" };
const _hoisted_32$1 = { class: "w-16 text-white text-sm text-right" };
const _hoisted_33$1 = {
  key: 2,
  class: "space-y-3"
};
const _hoisted_34$1 = ["onClick"];
const _hoisted_35$1 = { class: "flex items-center gap-3" };
const _hoisted_36$1 = { class: "text-white font-mono" };
const _hoisted_37$1 = {
  key: 0,
  class: "text-gray-400 text-sm"
};
const _hoisted_38$1 = { class: "text-right" };
const _hoisted_39$1 = { class: "text-white font-bold" };
const _hoisted_40$1 = { class: "text-xs text-gray-400" };
const _hoisted_41$1 = {
  key: 3,
  class: "space-y-3"
};
const _hoisted_42$1 = ["onClick"];
const _hoisted_43$1 = { class: "flex items-center gap-3 flex-1 min-w-0" };
const _hoisted_44$1 = ["title"];
const _hoisted_45$1 = { class: "text-right" };
const _hoisted_46$1 = { class: "text-white font-bold" };
const _hoisted_47 = { class: "text-xs text-gray-400" };
const _hoisted_48 = {
  key: 4,
  class: "space-y-3"
};
const _hoisted_49 = ["onClick"];
const _hoisted_50 = { class: "flex items-center gap-3" };
const _hoisted_51 = { class: "text-white font-medium" };
const _hoisted_52 = { class: "text-right" };
const _hoisted_53 = { class: "text-white font-bold" };
const _hoisted_54 = { class: "text-xs text-gray-400" };
const _hoisted_55 = { class: "bg-gray-800 rounded-lg p-4 border border-gray-700" };
const _hoisted_56 = { class: "space-y-4" };
const _hoisted_57 = { class: "bg-gray-900 rounded p-3" };
const _hoisted_58 = { class: "space-y-2" };
const _hoisted_59 = { class: "text-white text-sm" };
const _hoisted_60 = { class: "bg-gray-900 rounded p-3" };
const _hoisted_61 = { class: "space-y-1 text-sm" };
const _hoisted_62 = { class: "flex justify-between" };
const _hoisted_63 = { class: "text-white" };
const _hoisted_64 = { class: "flex justify-between" };
const _hoisted_65 = { class: "text-white" };
const _hoisted_66 = { class: "bg-gray-900 rounded p-3" };
const _hoisted_67 = { class: "space-y-1 text-sm" };
const _hoisted_68 = { class: "flex justify-between" };
const _hoisted_69 = { class: "text-white" };
const _hoisted_70 = { class: "flex justify-between" };
const _hoisted_71 = { class: "text-white" };
const _hoisted_72 = { class: "flex justify-between" };
const _hoisted_73 = { class: "text-white" };
const _hoisted_74 = { class: "flex items-center justify-between mt-6 pt-4 border-t border-gray-700" };
const _hoisted_75 = { class: "text-sm text-gray-400" };
const _hoisted_76 = { class: "flex items-center justify-between p-4 border-b border-gray-700" };
const _hoisted_77 = { class: "text-lg font-bold text-white flex items-center gap-2" };
const _hoisted_78 = { class: "p-4 h-[calc(100%-80px)] overflow-y-auto" };
const _hoisted_79 = {
  key: 0,
  class: "flex items-center justify-center h-full"
};
const _hoisted_80 = {
  key: 1,
  class: "space-y-3"
};
const _hoisted_81 = {
  key: 0,
  class: "mb-4"
};
const _hoisted_82 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6" };
const _hoisted_83 = { class: "flex items-center gap-2" };
const _hoisted_84 = { class: "text-white text-sm" };
const _hoisted_85 = { class: "text-xs text-gray-400 mt-1" };
const _hoisted_86 = { class: "space-y-2" };
const _hoisted_87 = { class: "grid grid-cols-1 lg:grid-cols-2 gap-4" };
const _hoisted_88 = { class: "space-y-2" };
const _hoisted_89 = { class: "flex items-center gap-2" };
const _hoisted_90 = { class: "text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded" };
const _hoisted_91 = { class: "text-xs text-gray-400" };
const _hoisted_92 = ["title"];
const _hoisted_93 = { class: "text-gray-400 text-sm font-mono" };
const _hoisted_94 = { class: "space-y-2" };
const _hoisted_95 = { class: "text-right" };
const _hoisted_96 = { class: "text-white" };
const _hoisted_97 = {
  key: 0,
  class: "mt-2"
};
const _hoisted_98 = { class: "flex flex-wrap gap-1" };
const _hoisted_99 = ["title"];
const _hoisted_100 = {
  key: 1,
  class: "text-center py-12 text-gray-400"
};
const MAX_ANALYSIS_ENTRIES = 2e4;
const MAX_DISPLAY_ENTRIES = 2e4;
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AdvancedAnalysisModal",
  props: {
    visible: { type: Boolean },
    logEntries: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const isComponentMounted = ref(true);
    ref(false);
    const activeTab = ref("status");
    const detailsModalVisible = ref(false);
    const detailsTitle = ref("");
    const detailsData = ref([]);
    const detailsType = ref("");
    const loadingDetails = ref(false);
    const isDataTooLarge = computed(() => {
      if (!isComponentMounted.value) return false;
      return props.logEntries.length > MAX_ANALYSIS_ENTRIES;
    });
    const displayEntries = computed(() => {
      if (!isComponentMounted.value || !props.logEntries) return [];
      try {
        if (props.logEntries.length > MAX_DISPLAY_ENTRIES) {
          return props.logEntries.slice(0, MAX_DISPLAY_ENTRIES);
        }
        return props.logEntries;
      } catch (error) {
        console.warn("Error processing display entries:", error);
        return [];
      }
    });
    const analysisTabs = [
      { key: "status", name: "状态码分析", icon: "pi-chart-pie" },
      { key: "timeline", name: "时间线分析", icon: "pi-clock" },
      { key: "ip", name: "IP分析", icon: "pi-globe" },
      { key: "path", name: "路径分析", icon: "pi-sitemap" },
      { key: "threat", name: "威胁分析", icon: "pi-shield" }
    ];
    const overviewStats = computed(() => [
      {
        title: "总请求数",
        value: props.logEntries.length.toLocaleString(),
        icon: "pi-chart-bar",
        iconColor: "text-blue-400",
        change: "+12.5%",
        changeColor: "text-green-400"
      },
      {
        title: "唯一IP",
        value: new Set(props.logEntries.map((log) => log.ip)).size.toLocaleString(),
        icon: "pi-users",
        iconColor: "text-green-400",
        change: "+5.2%",
        changeColor: "text-green-400"
      },
      {
        title: "错误率",
        value: `${(props.logEntries.filter((log) => log.statusCode >= 400).length / props.logEntries.length * 100).toFixed(1)}%`,
        icon: "pi-exclamation-triangle",
        iconColor: "text-yellow-400",
        change: "-2.1%",
        changeColor: "text-green-400"
      },
      {
        title: "高威胁",
        value: props.logEntries.filter((log) => log.threatLevel === "high" || log.threatLevel === "critical").length.toLocaleString(),
        icon: "pi-shield",
        iconColor: "text-red-400",
        change: "+0.3%",
        changeColor: "text-red-400"
      }
    ]);
    const statusCodeAnalysis = computed(() => {
      if (isDataTooLarge.value) return [];
      const statusMap = /* @__PURE__ */ new Map();
      displayEntries.value.forEach((log) => {
        statusMap.set(log.statusCode, (statusMap.get(log.statusCode) || 0) + 1);
      });
      return Array.from(statusMap.entries()).map(([code, count]) => ({
        code,
        count,
        percentage: count / displayEntries.value.length * 100
      })).sort((a, b) => b.count - a.count).slice(0, 10);
    });
    const timelineAnalysis = computed(() => {
      if (isDataTooLarge.value) return Array.from({ length: 24 }, (_, hour) => ({ hour, count: 0 }));
      const hourMap = /* @__PURE__ */ new Map();
      displayEntries.value.forEach((log) => {
        const date = log.timestamp instanceof Date ? log.timestamp : new Date(log.timestamp);
        const hour = date.getHours();
        hourMap.set(hour, (hourMap.get(hour) || 0) + 1);
      });
      const result = Array.from({ length: 24 }, (_, hour) => ({
        hour,
        count: hourMap.get(hour) || 0
      }));
      return result;
    });
    const maxHourlyCount = computed(() => {
      return Math.max(...timelineAnalysis.value.map((item) => item.count));
    });
    const ipAnalysis = computed(() => {
      if (isDataTooLarge.value) return [];
      const ipMap = /* @__PURE__ */ new Map();
      displayEntries.value.forEach((log) => {
        const existing = ipMap.get(log.ip) || { count: 0, threatLevel: "low" };
        ipMap.set(log.ip, {
          count: existing.count + 1,
          threatLevel: log.threatLevel === "critical" || log.threatLevel === "high" ? log.threatLevel : existing.threatLevel
        });
      });
      return Array.from(ipMap.entries()).map(([ip, data]) => ({
        ip,
        count: data.count,
        threatLevel: data.threatLevel,
        percentage: data.count / displayEntries.value.length * 100,
        location: getIPLocation(ip)
      })).sort((a, b) => b.count - a.count).slice(0, 20);
    });
    const pathAnalysis = computed(() => {
      if (isDataTooLarge.value) return [];
      const pathMap = /* @__PURE__ */ new Map();
      displayEntries.value.forEach((log) => {
        const path = log.path.split("?")[0];
        pathMap.set(path, (pathMap.get(path) || 0) + 1);
      });
      return Array.from(pathMap.entries()).map(([path, count]) => ({
        path,
        count,
        percentage: count / displayEntries.value.length * 100
      })).sort((a, b) => b.count - a.count).slice(0, 20);
    });
    const threatAnalysis = computed(() => {
      if (isDataTooLarge.value) return [];
      const threatMap = /* @__PURE__ */ new Map();
      displayEntries.value.forEach((log) => {
        threatMap.set(log.threatLevel, (threatMap.get(log.threatLevel) || 0) + 1);
      });
      return Array.from(threatMap.entries()).map(([level, count]) => ({
        level,
        count,
        percentage: count / displayEntries.value.length * 100
      })).sort((a, b) => b.count - a.count);
    });
    const methodAnalysis = computed(() => {
      if (isDataTooLarge.value) return [];
      const methodMap = /* @__PURE__ */ new Map();
      displayEntries.value.forEach((log) => {
        methodMap.set(log.method, (methodMap.get(log.method) || 0) + 1);
      });
      return Array.from(methodMap.entries()).map(([method, count]) => ({ method, count })).sort((a, b) => b.count - a.count);
    });
    const avgResponseSize = computed(() => {
      if (displayEntries.value.length === 0) return 0;
      return displayEntries.value.reduce((sum, log) => sum + log.responseSize, 0) / displayEntries.value.length;
    });
    const totalResponseSize = computed(() => {
      return displayEntries.value.reduce((sum, log) => sum + log.responseSize, 0);
    });
    const timeRange = computed(() => {
      if (displayEntries.value.length === 0) {
        return { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date(), duration: 0 };
      }
      const timestamps = displayEntries.value.map(
        (log) => log.timestamp instanceof Date ? log.timestamp.getTime() : log.timestamp
      );
      const start = new Date(Math.min(...timestamps));
      const end = new Date(Math.max(...timestamps));
      const duration = end.getTime() - start.getTime();
      return { start, end, duration };
    });
    function getCurrentTabIcon() {
      const tab = analysisTabs.find((t) => t.key === activeTab.value);
      return tab ? tab.icon : "pi-chart-bar";
    }
    function getCurrentTabName() {
      const tab = analysisTabs.find((t) => t.key === activeTab.value);
      return tab ? tab.name : "分析";
    }
    function getStatusColor(statusCode) {
      if (statusCode >= 200 && statusCode < 300) return "bg-green-500";
      if (statusCode >= 300 && statusCode < 400) return "bg-blue-500";
      if (statusCode >= 400 && statusCode < 500) return "bg-yellow-500";
      if (statusCode >= 500) return "bg-red-500";
      return "bg-gray-500";
    }
    function getStatusText(statusCode) {
      if (statusCode >= 200 && statusCode < 300) return "成功";
      if (statusCode >= 300 && statusCode < 400) return "重定向";
      if (statusCode >= 400 && statusCode < 500) return "客户端错误";
      if (statusCode >= 500) return "服务器错误";
      return "未知";
    }
    function getThreatIcon(level) {
      switch (level) {
        case "critical":
          return "pi-exclamation-triangle";
        case "high":
          return "pi-exclamation-circle";
        case "medium":
          return "pi-info-circle";
        case "low":
          return "pi-check-circle";
        default:
          return "pi-circle";
      }
    }
    function getThreatColor(level) {
      switch (level) {
        case "critical":
          return "text-red-500";
        case "high":
          return "text-orange-500";
        case "medium":
          return "text-yellow-500";
        case "low":
          return "text-green-500";
        default:
          return "text-gray-500";
      }
    }
    function getThreatText(level) {
      switch (level) {
        case "critical":
          return "严重威胁";
        case "high":
          return "高威胁";
        case "medium":
          return "中等威胁";
        case "low":
          return "低威胁";
        default:
          return "未知威胁";
      }
    }
    function getMethodColor(method) {
      switch (method.toUpperCase()) {
        case "GET":
          return "text-green-400";
        case "POST":
          return "text-blue-400";
        case "PUT":
          return "text-yellow-400";
        case "DELETE":
          return "text-red-400";
        case "PATCH":
          return "text-purple-400";
        default:
          return "text-gray-400";
      }
    }
    function getIPLocation(ip) {
      if (ip.startsWith("192.168.") || ip.startsWith("10.") || ip.startsWith("172.")) {
        return "内网";
      }
      return "外网";
    }
    function formatBytes(bytes) {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    }
    function formatDateTime(date) {
      return date.toLocaleString();
    }
    function formatDuration(ms) {
      const seconds = Math.floor(ms / 1e3);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      if (days > 0) return `${days}天 ${hours % 24}小时`;
      if (hours > 0) return `${hours}小时 ${minutes % 60}分钟`;
      if (minutes > 0) return `${minutes}分钟 ${seconds % 60}秒`;
      return `${seconds}秒`;
    }
    function exportAnalysis() {
      console.log("导出分析数据");
    }
    function refreshAnalysis() {
      console.log("刷新分析数据");
    }
    onMounted(() => {
      isComponentMounted.value = true;
    });
    onBeforeUnmount(() => {
      isComponentMounted.value = false;
      if (detailsData.value.length > 1e3) {
        detailsData.value = [];
      }
    });
    async function loadStatusDetails(statusCode) {
      if (!isComponentMounted.value) return;
      loadingDetails.value = true;
      detailsType.value = "status";
      detailsTitle.value = `状态码 ${statusCode} 详情`;
      try {
        const filteredLogs = (props.logEntries || []).filter((log) => log.statusCode === statusCode);
        const limitedLogs = filteredLogs.slice(0, 500);
        await nextTick();
        if (!isComponentMounted.value) return;
        detailsData.value = limitedLogs.map((log) => ({
          ...log,
          displayTime: formatDateTime(log.timestamp instanceof Date ? log.timestamp : new Date(log.timestamp)),
          displaySize: formatBytes(log.responseSize)
        }));
        detailsModalVisible.value = true;
      } catch (error) {
        console.error("Error loading status details:", error);
      } finally {
        loadingDetails.value = false;
      }
    }
    async function loadIPDetails(ip) {
      if (!isComponentMounted.value) return;
      loadingDetails.value = true;
      detailsType.value = "ip";
      detailsTitle.value = `IP ${ip} 详情`;
      try {
        const filteredLogs = (props.logEntries || []).filter((log) => log.ip === ip);
        const limitedLogs = filteredLogs.slice(0, 500);
        await nextTick();
        if (!isComponentMounted.value) return;
        detailsData.value = limitedLogs.map((log) => ({
          ...log,
          displayTime: formatDateTime(log.timestamp instanceof Date ? log.timestamp : new Date(log.timestamp)),
          displaySize: formatBytes(log.responseSize)
        }));
        detailsModalVisible.value = true;
      } catch (error) {
        console.error("Error loading IP details:", error);
      } finally {
        loadingDetails.value = false;
      }
    }
    async function loadPathDetails(path) {
      loadingDetails.value = true;
      detailsType.value = "path";
      detailsTitle.value = `路径 ${path} 详情`;
      const filteredLogs = props.logEntries.filter((log) => {
        const logPath = log.path.split("?")[0];
        return logPath === path;
      });
      detailsData.value = filteredLogs.map((log) => ({
        ...log,
        displayTime: formatDateTime(log.timestamp instanceof Date ? log.timestamp : new Date(log.timestamp)),
        displaySize: formatBytes(log.responseSize)
      }));
      loadingDetails.value = false;
      detailsModalVisible.value = true;
    }
    async function loadThreatDetails(threatLevel) {
      loadingDetails.value = true;
      detailsType.value = "threat";
      detailsTitle.value = `${getThreatText(threatLevel)} 详情`;
      const filteredLogs = props.logEntries.filter((log) => log.threatLevel === threatLevel);
      detailsData.value = filteredLogs.map((log) => ({
        ...log,
        displayTime: formatDateTime(log.timestamp instanceof Date ? log.timestamp : new Date(log.timestamp)),
        displaySize: formatBytes(log.responseSize),
        matchedRules: generateMatchedRules(log)
        // 生成命中的规则
      }));
      loadingDetails.value = false;
      detailsModalVisible.value = true;
    }
    function generateMatchedRules(log) {
      const rules = [];
      if (log.statusCode >= 500) {
        rules.push("服务器错误检测");
      }
      if (log.statusCode === 404) {
        rules.push("路径扫描检测");
      }
      if (log.path.includes("admin") || log.path.includes("login")) {
        rules.push("敏感路径访问");
      }
      if (log.userAgent.includes("bot") || log.userAgent.includes("crawler")) {
        rules.push("自动化工具检测");
      }
      if (log.method === "POST" && log.statusCode >= 400) {
        rules.push("异常POST请求");
      }
      if (log.responseSize === 0) {
        rules.push("空响应检测");
      }
      return rules.length > 0 ? rules : ["常规流量检测"];
    }
    function closeDetailsModal() {
      detailsModalVisible.value = false;
      detailsData.value = [];
      detailsTitle.value = "";
      detailsType.value = "";
    }
    function getUniqueRules() {
      const allRules = /* @__PURE__ */ new Set();
      detailsData.value.forEach((log) => {
        if (log.matchedRules) {
          log.matchedRules.forEach((rule) => allRules.add(rule));
        }
      });
      return Array.from(allRules);
    }
    function getRuleCount(rule) {
      return detailsData.value.filter(
        (log) => log.matchedRules && log.matchedRules.includes(rule)
      ).length;
    }
    function getStatusBadgeClass(statusCode) {
      if (statusCode >= 200 && statusCode < 300) {
        return "bg-green-500/20 text-green-400";
      } else if (statusCode >= 300 && statusCode < 400) {
        return "bg-blue-500/20 text-blue-400";
      } else if (statusCode >= 400 && statusCode < 500) {
        return "bg-yellow-500/20 text-yellow-400";
      } else if (statusCode >= 500) {
        return "bg-red-500/20 text-red-400";
      } else {
        return "bg-gray-500/20 text-gray-400";
      }
    }
    return (_ctx, _cache) => {
      return _ctx.visible ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$6, [
          createBaseVNode("div", _hoisted_3$6, [
            _cache[3] || (_cache[3] = createBaseVNode("h2", { class: "text-xl font-bold text-white flex items-center gap-2" }, [
              createBaseVNode("i", { class: "pi pi-chart-line text-green-400" }),
              createTextVNode(" 高级分析视图 ")
            ], -1)),
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
              class: "text-gray-400 hover:text-white transition-colors"
            }, _cache[2] || (_cache[2] = [
              createBaseVNode("i", { class: "pi pi-times text-lg" }, null, -1)
            ]))
          ]),
          createBaseVNode("div", _hoisted_4$6, [
            createBaseVNode("div", _hoisted_5$6, [
              (openBlock(), createElementBlock(Fragment, null, renderList(analysisTabs, (tab) => {
                return createBaseVNode("button", {
                  key: tab.key,
                  onClick: ($event) => activeTab.value = tab.key,
                  class: normalizeClass([
                    "px-4 py-2 rounded-lg flex items-center gap-2 transition-colors",
                    activeTab.value === tab.key ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  ])
                }, [
                  createBaseVNode("i", {
                    class: normalizeClass(tab.icon)
                  }, null, 2),
                  createBaseVNode("span", null, toDisplayString(tab.name), 1)
                ], 10, _hoisted_6$6);
              }), 64))
            ]),
            createBaseVNode("div", _hoisted_7$6, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(overviewStats.value, (stat) => {
                return openBlock(), createElementBlock("div", {
                  key: stat.title,
                  class: "bg-gray-800 rounded-lg p-4 border border-gray-700"
                }, [
                  createBaseVNode("div", _hoisted_8$6, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_9$6, toDisplayString(stat.title), 1),
                      createBaseVNode("div", _hoisted_10$5, toDisplayString(stat.value), 1),
                      stat.change ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: normalizeClass(["text-xs", stat.changeColor])
                      }, toDisplayString(stat.change), 3)) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("i", {
                      class: normalizeClass(["text-2xl", stat.icon, stat.iconColor])
                    }, null, 2)
                  ])
                ]);
              }), 128))
            ]),
            isDataTooLarge.value ? (openBlock(), createElementBlock("div", _hoisted_11$5, [
              createBaseVNode("div", _hoisted_12$5, [
                _cache[6] || (_cache[6] = createBaseVNode("i", { class: "pi pi-exclamation-triangle text-yellow-400 text-xl" }, null, -1)),
                createBaseVNode("div", null, [
                  _cache[4] || (_cache[4] = createBaseVNode("h4", { class: "text-yellow-400 font-medium" }, "数据量过大提示", -1)),
                  createBaseVNode("p", _hoisted_13$4, " 当前日志数量（" + toDisplayString(props.logEntries.length.toLocaleString()) + " 条）超过分析限制（" + toDisplayString(MAX_ANALYSIS_ENTRIES.toLocaleString()) + " 条）。 为了保证性能，建议您： ", 1),
                  _cache[5] || (_cache[5] = createBaseVNode("ul", { class: "text-gray-300 text-sm mt-2 space-y-1" }, [
                    createBaseVNode("li", null, "• 使用过滤器缩小数据范围"),
                    createBaseVNode("li", null, "• 选择特定时间段进行分析"),
                    createBaseVNode("li", null, "• 导出数据后使用专业工具分析")
                  ], -1))
                ])
              ])
            ])) : createCommentVNode("", true),
            props.logEntries.length > MAX_DISPLAY_ENTRIES && !isDataTooLarge.value ? (openBlock(), createElementBlock("div", _hoisted_14$4, [
              createBaseVNode("div", _hoisted_15$4, [
                _cache[7] || (_cache[7] = createBaseVNode("i", { class: "pi pi-info-circle" }, null, -1)),
                createBaseVNode("span", null, "为了优化性能，当前仅分析前 " + toDisplayString(MAX_DISPLAY_ENTRIES.toLocaleString()) + " 条数据（共 " + toDisplayString(props.logEntries.length.toLocaleString()) + " 条）", 1)
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_16$4, [
              createBaseVNode("div", _hoisted_17$4, [
                createBaseVNode("h3", _hoisted_18$4, [
                  createBaseVNode("i", {
                    class: normalizeClass(getCurrentTabIcon())
                  }, null, 2),
                  createTextVNode(" " + toDisplayString(getCurrentTabName()), 1)
                ]),
                activeTab.value === "status" ? (openBlock(), createElementBlock("div", _hoisted_19$4, [
                  isDataTooLarge.value ? (openBlock(), createElementBlock("div", _hoisted_20$4, _cache[8] || (_cache[8] = [
                    createBaseVNode("i", { class: "pi pi-chart-pie text-4xl mb-3" }, null, -1),
                    createBaseVNode("div", { class: "text-lg" }, "数据量过大", -1),
                    createBaseVNode("div", { class: "text-sm" }, "请减少数据量后重试", -1)
                  ]))) : (openBlock(), createElementBlock("div", _hoisted_21$3, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(statusCodeAnalysis.value, (status) => {
                      return openBlock(), createElementBlock("div", {
                        key: status.code,
                        class: "flex items-center justify-between p-3 bg-gray-900 rounded hover:bg-gray-800 transition-colors cursor-pointer",
                        onClick: ($event) => loadStatusDetails(status.code)
                      }, [
                        createBaseVNode("div", _hoisted_23$3, [
                          createBaseVNode("span", {
                            class: normalizeClass(["w-4 h-4 rounded-full", getStatusColor(status.code)])
                          }, null, 2),
                          createBaseVNode("span", _hoisted_24$3, toDisplayString(status.code), 1),
                          createBaseVNode("span", _hoisted_25$3, toDisplayString(getStatusText(status.code)), 1)
                        ]),
                        createBaseVNode("div", _hoisted_26$2, [
                          createBaseVNode("div", _hoisted_27$2, toDisplayString(status.count), 1),
                          createBaseVNode("div", _hoisted_28$2, toDisplayString(status.percentage.toFixed(1)) + "%", 1),
                          _cache[9] || (_cache[9] = createBaseVNode("i", { class: "pi pi-chevron-right text-gray-400 text-xs ml-2" }, null, -1))
                        ])
                      ], 8, _hoisted_22$3);
                    }), 128))
                  ]))
                ])) : createCommentVNode("", true),
                activeTab.value === "timeline" ? (openBlock(), createElementBlock("div", _hoisted_29$1, [
                  _cache[10] || (_cache[10] = createBaseVNode("div", { class: "text-sm text-gray-400 mb-3" }, "按小时请求分布", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(timelineAnalysis.value, (hour) => {
                    return openBlock(), createElementBlock("div", {
                      key: hour.hour,
                      class: "flex items-center gap-3"
                    }, [
                      createBaseVNode("div", _hoisted_30$1, toDisplayString(hour.hour) + ":00", 1),
                      createBaseVNode("div", _hoisted_31$1, [
                        createBaseVNode("div", {
                          class: "bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full",
                          style: normalizeStyle({ width: `${hour.count / maxHourlyCount.value * 100}%` })
                        }, null, 4)
                      ]),
                      createBaseVNode("div", _hoisted_32$1, toDisplayString(hour.count), 1)
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true),
                activeTab.value === "ip" ? (openBlock(), createElementBlock("div", _hoisted_33$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(ipAnalysis.value, (ip) => {
                    return openBlock(), createElementBlock("div", {
                      key: ip.ip,
                      class: "flex items-center justify-between p-3 bg-gray-900 rounded hover:bg-gray-800 transition-colors cursor-pointer",
                      onClick: ($event) => loadIPDetails(ip.ip)
                    }, [
                      createBaseVNode("div", _hoisted_35$1, [
                        createBaseVNode("i", {
                          class: normalizeClass(["pi", getThreatIcon(ip.threatLevel), getThreatColor(ip.threatLevel)])
                        }, null, 2),
                        createBaseVNode("span", _hoisted_36$1, toDisplayString(ip.ip), 1),
                        ip.location ? (openBlock(), createElementBlock("span", _hoisted_37$1, toDisplayString(ip.location), 1)) : createCommentVNode("", true)
                      ]),
                      createBaseVNode("div", _hoisted_38$1, [
                        createBaseVNode("div", _hoisted_39$1, toDisplayString(ip.count), 1),
                        createBaseVNode("div", _hoisted_40$1, toDisplayString(ip.percentage.toFixed(1)) + "%", 1),
                        _cache[11] || (_cache[11] = createBaseVNode("i", { class: "pi pi-chevron-right text-gray-400 text-xs ml-2" }, null, -1))
                      ])
                    ], 8, _hoisted_34$1);
                  }), 128))
                ])) : createCommentVNode("", true),
                activeTab.value === "path" ? (openBlock(), createElementBlock("div", _hoisted_41$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(pathAnalysis.value, (path) => {
                    return openBlock(), createElementBlock("div", {
                      key: path.path,
                      class: "flex items-center justify-between p-3 bg-gray-900 rounded hover:bg-gray-800 transition-colors cursor-pointer",
                      onClick: ($event) => loadPathDetails(path.path)
                    }, [
                      createBaseVNode("div", _hoisted_43$1, [
                        _cache[12] || (_cache[12] = createBaseVNode("i", { class: "pi pi-folder text-blue-400" }, null, -1)),
                        createBaseVNode("span", {
                          class: "text-white truncate",
                          title: path.path
                        }, toDisplayString(path.path), 9, _hoisted_44$1)
                      ]),
                      createBaseVNode("div", _hoisted_45$1, [
                        createBaseVNode("div", _hoisted_46$1, toDisplayString(path.count), 1),
                        createBaseVNode("div", _hoisted_47, toDisplayString(path.percentage.toFixed(1)) + "%", 1),
                        _cache[13] || (_cache[13] = createBaseVNode("i", { class: "pi pi-chevron-right text-gray-400 text-xs ml-2" }, null, -1))
                      ])
                    ], 8, _hoisted_42$1);
                  }), 128))
                ])) : createCommentVNode("", true),
                activeTab.value === "threat" ? (openBlock(), createElementBlock("div", _hoisted_48, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(threatAnalysis.value, (threat) => {
                    return openBlock(), createElementBlock("div", {
                      key: threat.level,
                      class: "flex items-center justify-between p-3 bg-gray-900 rounded hover:bg-gray-800 transition-colors cursor-pointer",
                      onClick: ($event) => loadThreatDetails(threat.level)
                    }, [
                      createBaseVNode("div", _hoisted_50, [
                        createBaseVNode("i", {
                          class: normalizeClass(["pi", getThreatIcon(threat.level), getThreatColor(threat.level)])
                        }, null, 2),
                        createBaseVNode("span", _hoisted_51, toDisplayString(getThreatText(threat.level)), 1)
                      ]),
                      createBaseVNode("div", _hoisted_52, [
                        createBaseVNode("div", _hoisted_53, toDisplayString(threat.count), 1),
                        createBaseVNode("div", _hoisted_54, toDisplayString(threat.percentage.toFixed(1)) + "%", 1),
                        _cache[14] || (_cache[14] = createBaseVNode("i", { class: "pi pi-chevron-right text-gray-400 text-xs ml-2" }, null, -1))
                      ])
                    ], 8, _hoisted_49);
                  }), 128))
                ])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_55, [
                _cache[23] || (_cache[23] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4 flex items-center gap-2" }, [
                  createBaseVNode("i", { class: "pi pi-info-circle text-blue-400" }),
                  createTextVNode(" 详细信息 ")
                ], -1)),
                createBaseVNode("div", _hoisted_56, [
                  createBaseVNode("div", _hoisted_57, [
                    _cache[15] || (_cache[15] = createBaseVNode("div", { class: "text-sm text-gray-400 mb-2" }, "请求方法分布", -1)),
                    createBaseVNode("div", _hoisted_58, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(methodAnalysis.value, (method) => {
                        return openBlock(), createElementBlock("div", {
                          key: method.method,
                          class: "flex items-center justify-between"
                        }, [
                          createBaseVNode("span", {
                            class: normalizeClass(["text-sm font-medium", getMethodColor(method.method)])
                          }, toDisplayString(method.method), 3),
                          createBaseVNode("span", _hoisted_59, toDisplayString(method.count), 1)
                        ]);
                      }), 128))
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_60, [
                    _cache[18] || (_cache[18] = createBaseVNode("div", { class: "text-sm text-gray-400 mb-2" }, "响应大小统计", -1)),
                    createBaseVNode("div", _hoisted_61, [
                      createBaseVNode("div", _hoisted_62, [
                        _cache[16] || (_cache[16] = createBaseVNode("span", { class: "text-gray-400" }, "平均大小:", -1)),
                        createBaseVNode("span", _hoisted_63, toDisplayString(formatBytes(avgResponseSize.value)), 1)
                      ]),
                      createBaseVNode("div", _hoisted_64, [
                        _cache[17] || (_cache[17] = createBaseVNode("span", { class: "text-gray-400" }, "总传输:", -1)),
                        createBaseVNode("span", _hoisted_65, toDisplayString(formatBytes(totalResponseSize.value)), 1)
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_66, [
                    _cache[22] || (_cache[22] = createBaseVNode("div", { class: "text-sm text-gray-400 mb-2" }, "时间范围", -1)),
                    createBaseVNode("div", _hoisted_67, [
                      createBaseVNode("div", _hoisted_68, [
                        _cache[19] || (_cache[19] = createBaseVNode("span", { class: "text-gray-400" }, "开始时间:", -1)),
                        createBaseVNode("span", _hoisted_69, toDisplayString(formatDateTime(timeRange.value.start)), 1)
                      ]),
                      createBaseVNode("div", _hoisted_70, [
                        _cache[20] || (_cache[20] = createBaseVNode("span", { class: "text-gray-400" }, "结束时间:", -1)),
                        createBaseVNode("span", _hoisted_71, toDisplayString(formatDateTime(timeRange.value.end)), 1)
                      ]),
                      createBaseVNode("div", _hoisted_72, [
                        _cache[21] || (_cache[21] = createBaseVNode("span", { class: "text-gray-400" }, "持续时间:", -1)),
                        createBaseVNode("span", _hoisted_73, toDisplayString(formatDuration(timeRange.value.duration)), 1)
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_74, [
              createBaseVNode("div", _hoisted_75, " 共分析了 " + toDisplayString(_ctx.logEntries.length) + " 条日志记录 ", 1),
              createBaseVNode("div", { class: "flex gap-2" }, [
                createBaseVNode("button", {
                  onClick: exportAnalysis,
                  class: "px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors flex items-center gap-2"
                }, _cache[24] || (_cache[24] = [
                  createBaseVNode("i", { class: "pi pi-download" }, null, -1),
                  createTextVNode(" 导出分析 ")
                ])),
                createBaseVNode("button", {
                  onClick: refreshAnalysis,
                  class: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors flex items-center gap-2"
                }, _cache[25] || (_cache[25] = [
                  createBaseVNode("i", { class: "pi pi-refresh" }, null, -1),
                  createTextVNode(" 刷新 ")
                ]))
              ])
            ])
          ])
        ]),
        detailsModalVisible.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
          onClick: closeDetailsModal
        }, [
          createBaseVNode("div", {
            class: "bg-gray-900 rounded-lg shadow-2xl w-[80vw] h-[80vh] border border-gray-700",
            onClick: _cache[1] || (_cache[1] = withModifiers(() => {
            }, ["stop"]))
          }, [
            createBaseVNode("div", _hoisted_76, [
              createBaseVNode("h3", _hoisted_77, [
                _cache[26] || (_cache[26] = createBaseVNode("i", { class: "pi pi-list text-blue-400" }, null, -1)),
                createTextVNode(" " + toDisplayString(detailsTitle.value), 1)
              ]),
              createBaseVNode("button", {
                onClick: closeDetailsModal,
                class: "text-gray-400 hover:text-white transition-colors"
              }, _cache[27] || (_cache[27] = [
                createBaseVNode("i", { class: "pi pi-times text-lg" }, null, -1)
              ]))
            ]),
            createBaseVNode("div", _hoisted_78, [
              loadingDetails.value ? (openBlock(), createElementBlock("div", _hoisted_79, _cache[28] || (_cache[28] = [
                createBaseVNode("div", { class: "text-center" }, [
                  createBaseVNode("i", { class: "pi pi-spin pi-spinner text-2xl text-blue-400 mb-2" }),
                  createBaseVNode("div", { class: "text-gray-400" }, "加载中...")
                ], -1)
              ]))) : (openBlock(), createElementBlock("div", _hoisted_80, [
                detailsType.value === "threat" ? (openBlock(), createElementBlock("div", _hoisted_81, [
                  _cache[30] || (_cache[30] = createBaseVNode("h4", { class: "text-white font-medium mb-3 flex items-center gap-2" }, [
                    createBaseVNode("i", { class: "pi pi-shield text-red-400" }),
                    createTextVNode(" 威胁规则命中情况 ")
                  ], -1)),
                  createBaseVNode("div", _hoisted_82, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(getUniqueRules(), (rule) => {
                      return openBlock(), createElementBlock("div", {
                        key: rule,
                        class: "p-3 bg-gray-800 rounded border border-red-500/20"
                      }, [
                        createBaseVNode("div", _hoisted_83, [
                          _cache[29] || (_cache[29] = createBaseVNode("i", { class: "pi pi-exclamation-triangle text-red-400" }, null, -1)),
                          createBaseVNode("span", _hoisted_84, toDisplayString(rule), 1)
                        ]),
                        createBaseVNode("div", _hoisted_85, " 命中 " + toDisplayString(getRuleCount(rule)) + " 次 ", 1)
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_86, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(detailsData.value, (log, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: log.id || index,
                      class: "p-4 bg-gray-800 rounded border border-gray-700 hover:border-gray-600 transition-colors"
                    }, [
                      createBaseVNode("div", _hoisted_87, [
                        createBaseVNode("div", _hoisted_88, [
                          createBaseVNode("div", _hoisted_89, [
                            createBaseVNode("span", _hoisted_90, toDisplayString(log.method), 1),
                            createBaseVNode("span", {
                              class: normalizeClass(["text-xs px-2 py-1 rounded", getStatusBadgeClass(log.statusCode)])
                            }, toDisplayString(log.statusCode), 3),
                            createBaseVNode("span", _hoisted_91, toDisplayString(log.displayTime), 1)
                          ]),
                          createBaseVNode("div", {
                            class: "text-white font-medium truncate",
                            title: log.path
                          }, toDisplayString(log.path), 9, _hoisted_92),
                          createBaseVNode("div", _hoisted_93, toDisplayString(log.ip), 1)
                        ]),
                        createBaseVNode("div", _hoisted_94, [
                          createBaseVNode("div", _hoisted_95, [
                            _cache[31] || (_cache[31] = createBaseVNode("span", { class: "text-gray-400 text-sm" }, "响应大小: ", -1)),
                            createBaseVNode("span", _hoisted_96, toDisplayString(log.displaySize), 1)
                          ]),
                          detailsType.value === "threat" && log.matchedRules ? (openBlock(), createElementBlock("div", _hoisted_97, [
                            _cache[32] || (_cache[32] = createBaseVNode("div", { class: "text-xs text-gray-400 mb-1" }, "命中规则:", -1)),
                            createBaseVNode("div", _hoisted_98, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(log.matchedRules, (rule) => {
                                return openBlock(), createElementBlock("span", {
                                  key: rule,
                                  class: "text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded border border-red-500/30"
                                }, toDisplayString(rule), 1);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true),
                          createBaseVNode("div", {
                            class: "text-xs text-gray-500 truncate",
                            title: log.userAgent
                          }, " UA: " + toDisplayString(log.userAgent), 9, _hoisted_99)
                        ])
                      ])
                    ]);
                  }), 128))
                ]),
                detailsData.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_100, _cache[33] || (_cache[33] = [
                  createBaseVNode("i", { class: "pi pi-info-circle text-4xl mb-4" }, null, -1),
                  createBaseVNode("div", { class: "text-lg" }, "暂无相关数据", -1)
                ]))) : createCommentVNode("", true)
              ]))
            ])
          ])
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$5 = { class: "flex items-center justify-between mb-4" };
const _hoisted_2$5 = { class: "flex items-center gap-4" };
const _hoisted_3$5 = { class: "text-sm text-gray-400" };
const _hoisted_4$5 = { class: "flex items-center gap-2 flex-wrap" };
const _hoisted_5$5 = { class: "flex items-center gap-1 bg-white/10 rounded overflow-hidden" };
const _hoisted_6$5 = ["disabled"];
const _hoisted_7$5 = {
  key: 0,
  class: "text-center py-12"
};
const _hoisted_8$5 = { class: "inline-flex flex-col items-center gap-4" };
const _hoisted_9$5 = { class: "text-sm text-gray-400" };
const _hoisted_10$4 = { class: "w-64 bg-gray-700 rounded-full h-2" };
const _hoisted_11$4 = {
  key: 1,
  class: "space-y-3 max-h-[500px] overflow-y-auto"
};
const _hoisted_12$4 = ["onClick"];
const _hoisted_13$3 = { class: "flex items-center justify-between" };
const _hoisted_14$3 = { class: "flex items-center gap-3 flex-1 min-w-0" };
const _hoisted_15$3 = { class: "flex-1 min-w-0" };
const _hoisted_16$3 = ["title"];
const _hoisted_17$3 = { class: "text-xs text-gray-400" };
const _hoisted_18$3 = { class: "flex items-center gap-2 mt-1" };
const _hoisted_19$3 = { class: "text-right" };
const _hoisted_20$3 = { class: "text-lg font-bold text-blue-400" };
const _hoisted_21$2 = { class: "text-xs text-gray-400" };
const _hoisted_22$2 = { class: "ml-4 flex gap-1" };
const _hoisted_23$2 = ["onClick"];
const _hoisted_24$2 = ["onClick"];
const _hoisted_25$2 = { class: "mt-3 w-full bg-gray-700 rounded-full h-2 relative" };
const _hoisted_26$1 = {
  key: 0,
  class: "text-center pt-4"
};
const _hoisted_27$1 = { class: "text-xs text-gray-400 mt-2" };
const _hoisted_28$1 = {
  key: 2,
  class: "text-center py-12 text-gray-400"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AnalysisView",
  props: {
    items: {}
  },
  emits: ["view-details"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useThemeStore();
    const analysisMode = ref("path");
    const analysisResults = ref([]);
    const isBuilding = ref(false);
    const currentStep = ref("");
    const progress = ref(0);
    const displayLimit = ref(20);
    const sortBy = ref("count");
    const sortDirection = ref("desc");
    const advancedAnalysisVisible = ref(false);
    const selectedAnalysisItem = ref(null);
    const analysisLogEntries = ref([]);
    const totalItems = computed(() => props.items.length);
    const maxCount = computed(
      () => analysisResults.value.length > 0 ? Math.max(...analysisResults.value.map((item) => item.count)) : 0
    );
    const sortedResults = computed(() => {
      const sorted = [...analysisResults.value].sort((a, b) => {
        let aVal;
        let bVal;
        switch (sortBy.value) {
          case "count":
            aVal = a.count;
            bVal = b.count;
            break;
          case "percentage":
            aVal = a.percentage;
            bVal = b.percentage;
            break;
          case "name":
            aVal = a.displayName || a.name;
            bVal = b.displayName || b.name;
            break;
          default:
            aVal = a.count;
            bVal = b.count;
        }
        if (typeof aVal === "string" && typeof bVal === "string") {
          return sortDirection.value === "desc" ? bVal.localeCompare(aVal) : aVal.localeCompare(bVal);
        } else {
          return sortDirection.value === "desc" ? bVal - aVal : aVal - bVal;
        }
      });
      return sorted;
    });
    const displayResults = computed(
      () => sortedResults.value.slice(0, displayLimit.value)
    );
    const hasMoreResults = computed(
      () => sortedResults.value.length > displayLimit.value
    );
    async function buildAnalysis() {
      if (props.items.length === 0) {
        analysisResults.value = [];
        return;
      }
      isBuilding.value = true;
      progress.value = 0;
      try {
        switch (analysisMode.value) {
          case "path":
            await buildPathAnalysis();
            break;
          case "ip":
            await buildIPAnalysis();
            break;
          case "status":
            await buildStatusAnalysis();
            break;
          case "method":
            await buildMethodAnalysis();
            break;
          case "referer":
            await buildRefererAnalysis();
            break;
          case "userAgent":
            await buildUserAgentAnalysis();
            break;
        }
        analysisResults.value.sort((a, b) => b.count - a.count);
      } catch (error) {
        console.error("[AnalysisView] Error building analysis:", error);
        analysisResults.value = [];
      } finally {
        isBuilding.value = false;
        progress.value = 100;
      }
    }
    async function buildPathAnalysis() {
      currentStep.value = "正在分析请求路径...";
      progress.value = 20;
      const pathMap = /* @__PURE__ */ new Map();
      props.items.forEach((log, index) => {
        const simplePath = log.path.split("?")[0];
        pathMap.set(simplePath, (pathMap.get(simplePath) || 0) + 1);
        if (index % 1e3 === 0) {
          progress.value = 20 + index / props.items.length * 60;
        }
      });
      currentStep.value = "正在生成分析结果...";
      progress.value = 90;
      await new Promise((resolve) => setTimeout(resolve, 100));
      analysisResults.value = Array.from(pathMap.entries()).map(([path, count]) => ({
        name: path,
        displayName: path === "/" ? "根路径" : path,
        count,
        percentage: count / totalItems.value * 100
      }));
    }
    async function buildIPAnalysis() {
      currentStep.value = "正在分析客户端IP...";
      progress.value = 20;
      const ipMap = /* @__PURE__ */ new Map();
      props.items.forEach((log, index) => {
        ipMap.set(log.ip, (ipMap.get(log.ip) || 0) + 1);
        if (index % 1e3 === 0) {
          progress.value = 20 + index / props.items.length * 60;
        }
      });
      currentStep.value = "正在生成分析结果...";
      progress.value = 90;
      await new Promise((resolve) => setTimeout(resolve, 100));
      analysisResults.value = Array.from(ipMap.entries()).map(([ip, count]) => ({
        name: ip,
        count,
        percentage: count / totalItems.value * 100
      }));
    }
    async function buildStatusAnalysis() {
      currentStep.value = "正在分析HTTP状态码...";
      progress.value = 20;
      const statusMap = /* @__PURE__ */ new Map();
      props.items.forEach((log, index) => {
        statusMap.set(log.statusCode, (statusMap.get(log.statusCode) || 0) + 1);
        if (index % 1e3 === 0) {
          progress.value = 20 + index / props.items.length * 60;
        }
      });
      currentStep.value = "正在生成分析结果...";
      progress.value = 90;
      await new Promise((resolve) => setTimeout(resolve, 100));
      analysisResults.value = Array.from(statusMap.entries()).map(([status, count]) => ({
        name: status.toString(),
        displayName: `${status} - ${getStatusText(status)}`,
        count,
        percentage: count / totalItems.value * 100
      }));
    }
    async function buildMethodAnalysis() {
      currentStep.value = "正在分析HTTP请求方法...";
      progress.value = 20;
      const methodMap = /* @__PURE__ */ new Map();
      props.items.forEach((log, index) => {
        methodMap.set(log.method, (methodMap.get(log.method) || 0) + 1);
        if (index % 1e3 === 0) {
          progress.value = 20 + index / props.items.length * 60;
        }
      });
      currentStep.value = "正在生成分析结果...";
      progress.value = 90;
      await new Promise((resolve) => setTimeout(resolve, 100));
      analysisResults.value = Array.from(methodMap.entries()).map(([method, count]) => ({
        name: method,
        count,
        percentage: count / totalItems.value * 100
      }));
    }
    async function buildRefererAnalysis() {
      currentStep.value = "正在分析来源网站...";
      progress.value = 20;
      const refererMap = /* @__PURE__ */ new Map();
      props.items.forEach((log, index) => {
        const referer = log.referer || "(direct)";
        let displayReferer = referer;
        if (referer !== "(direct)" && referer !== "-") {
          try {
            const url = new URL(referer);
            displayReferer = url.hostname || referer;
          } catch {
            displayReferer = referer;
          }
        }
        refererMap.set(displayReferer, (refererMap.get(displayReferer) || 0) + 1);
        if (index % 1e3 === 0) {
          progress.value = 20 + index / props.items.length * 60;
        }
      });
      currentStep.value = "正在生成分析结果...";
      progress.value = 90;
      await new Promise((resolve) => setTimeout(resolve, 100));
      analysisResults.value = Array.from(refererMap.entries()).map(([referer, count]) => ({
        name: referer,
        displayName: referer === "(direct)" ? "直接访问" : referer,
        count,
        percentage: count / totalItems.value * 100
      }));
    }
    async function buildUserAgentAnalysis() {
      currentStep.value = "正在分析用户代理...";
      progress.value = 20;
      const uaMap = /* @__PURE__ */ new Map();
      props.items.forEach((log, index) => {
        let userAgent = log.userAgent || "Unknown";
        let displayUA = userAgent;
        if (userAgent !== "Unknown") {
          if (userAgent.includes("Chrome")) {
            const match = userAgent.match(/Chrome\/([0-9.]+)/);
            displayUA = match ? `Chrome ${match[1].split(".")[0]}` : "Chrome";
          } else if (userAgent.includes("Firefox")) {
            const match = userAgent.match(/Firefox\/([0-9.]+)/);
            displayUA = match ? `Firefox ${match[1].split(".")[0]}` : "Firefox";
          } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
            displayUA = "Safari";
          } else if (userAgent.includes("Edge")) {
            displayUA = "Edge";
          } else if (userAgent.includes("bot") || userAgent.includes("Bot") || userAgent.includes("Spider")) {
            displayUA = "Bot/Crawler";
          } else if (userAgent.length > 50) {
            displayUA = userAgent.substring(0, 47) + "...";
          }
        }
        uaMap.set(displayUA, (uaMap.get(displayUA) || 0) + 1);
        if (index % 1e3 === 0) {
          progress.value = 20 + index / props.items.length * 60;
        }
      });
      currentStep.value = "正在生成分析结果...";
      progress.value = 90;
      await new Promise((resolve) => setTimeout(resolve, 100));
      analysisResults.value = Array.from(uaMap.entries()).map(([ua, count]) => ({
        name: ua,
        count,
        percentage: count / totalItems.value * 100
      }));
    }
    function getItemIcon(item) {
      switch (analysisMode.value) {
        case "path":
          return "pi-link text-blue-400";
        case "ip":
          return "pi-globe text-green-400";
        case "status":
          return "pi-info-circle text-orange-400";
        case "method":
          return "pi-arrow-right text-purple-400";
        case "referer":
          return "pi-external-link text-cyan-400";
        case "userAgent":
          return "pi-desktop text-indigo-400";
        default:
          return "pi-circle-fill text-gray-400";
      }
    }
    function getItemDescription(item) {
      const percentage = (item.count / totalItems.value * 100).toFixed(1);
      return `占比 ${percentage}% | ${formatNumber(item.count)} 次访问`;
    }
    function getItemTrend(item) {
      const percentage = item.percentage;
      if (percentage > 20) return "🔥 热门";
      if (percentage > 10) return "📈 活跃";
      if (percentage > 5) return "📊 常见";
      if (percentage < 1) return "📉 少见";
      return "";
    }
    function getTrendColor(item) {
      const percentage = item.percentage;
      if (percentage > 20) return "bg-red-500/20 text-red-400 border border-red-500/30";
      if (percentage > 10) return "bg-orange-500/20 text-orange-400 border border-orange-500/30";
      if (percentage > 5) return "bg-green-500/20 text-green-400 border border-green-500/30";
      return "bg-gray-500/20 text-gray-400 border border-gray-500/30";
    }
    function getItemRisk(item) {
      if (analysisMode.value === "status") {
        const code = parseInt(item.name);
        if (code >= 500) return "⚠️ 高风险";
        if (code >= 400) return "⚡ 中风险";
        if (code >= 300) return "ℹ️ 正常";
        if (code >= 200) return "✅ 正常";
      }
      if (analysisMode.value === "ip" && item.percentage > 15) {
        return "🚨 异常访问";
      }
      return "";
    }
    function getRiskColor(item) {
      const risk = getItemRisk(item);
      if (risk.includes("高风险") || risk.includes("异常")) return "bg-red-500/20 text-red-400 border border-red-500/30";
      if (risk.includes("中风险")) return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
      if (risk.includes("正常")) return "bg-green-500/20 text-green-400 border border-green-500/30";
      return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
    }
    function getStatusText(status) {
      if (status < 200) return "信息响应";
      if (status < 300) return "成功响应";
      if (status < 400) return "重定向";
      if (status < 500) return "客户端错误";
      return "服务器错误";
    }
    function formatNumber(num) {
      if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
      if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
      return num.toString();
    }
    function showMore() {
      displayLimit.value += 100;
    }
    function setSortBy(field) {
      if (sortBy.value === field) {
        sortDirection.value = sortDirection.value === "desc" ? "asc" : "desc";
      } else {
        sortBy.value = field;
        sortDirection.value = field === "name" ? "asc" : "desc";
      }
    }
    function resetDisplayLimit() {
      displayLimit.value = 20;
    }
    function viewDetails(item) {
      selectedAnalysisItem.value = item;
      analysisLogEntries.value = getFilteredLogEntries(item);
      advancedAnalysisVisible.value = true;
    }
    function showAdvancedAnalysis(item) {
      selectedAnalysisItem.value = item;
      analysisLogEntries.value = getFilteredLogEntries(item);
      advancedAnalysisVisible.value = true;
    }
    function closeAdvancedAnalysis() {
      advancedAnalysisVisible.value = false;
      selectedAnalysisItem.value = null;
      analysisLogEntries.value = [];
    }
    function getFilteredLogEntries(item) {
      switch (analysisMode.value) {
        case "path":
          return props.items.filter((log) => {
            const simplePath = log.path.split("?")[0];
            return simplePath === item.name;
          });
        case "ip":
          return props.items.filter((log) => log.ip === item.name);
        case "status":
          return props.items.filter((log) => log.statusCode.toString() === item.name);
        case "method":
          return props.items.filter((log) => log.method === item.name);
        case "referer":
          return props.items.filter((log) => {
            const referer = log.referer || "(direct)";
            let displayReferer = referer;
            if (referer !== "(direct)" && referer !== "-") {
              try {
                const url = new URL(referer);
                displayReferer = url.hostname || referer;
              } catch {
                displayReferer = referer;
              }
            }
            return displayReferer === item.name || item.name === "直接访问" && displayReferer === "(direct)";
          });
        case "userAgent":
          return props.items.filter((log) => {
            let userAgent = log.userAgent || "Unknown";
            let displayUA = userAgent;
            if (userAgent !== "Unknown") {
              if (userAgent.includes("Chrome")) {
                const match = userAgent.match(/Chrome\/([0-9.]+)/);
                displayUA = match ? `Chrome ${match[1].split(".")[0]}` : "Chrome";
              } else if (userAgent.includes("Firefox")) {
                const match = userAgent.match(/Firefox\/([0-9.]+)/);
                displayUA = match ? `Firefox ${match[1].split(".")[0]}` : "Firefox";
              } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
                displayUA = "Safari";
              } else if (userAgent.includes("Edge")) {
                displayUA = "Edge";
              } else if (userAgent.includes("bot") || userAgent.includes("Bot") || userAgent.includes("Spider")) {
                displayUA = "Bot/Crawler";
              } else if (userAgent.length > 50) {
                displayUA = userAgent.substring(0, 47) + "...";
              }
            }
            return displayUA === item.name;
          });
        default:
          return [];
      }
    }
    function showGlobalAnalysis() {
      selectedAnalysisItem.value = {
        name: "全局分析",
        displayName: "全局综合分析",
        count: props.items.length,
        percentage: 100
      };
      analysisLogEntries.value = [...props.items];
      advancedAnalysisVisible.value = true;
    }
    watch(() => props.items, () => {
      if (props.items.length > 0) {
        buildAnalysis();
      }
    }, { immediate: false });
    watch(analysisMode, () => {
      resetDisplayLimit();
      buildAnalysis();
    });
    onMounted(() => {
      if (props.items.length > 0) {
        buildAnalysis();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$9, { type: "card" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$5, [
            createBaseVNode("div", _hoisted_2$5, [
              _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "text-lg font-semibold text-white flex items-center gap-2" }, [
                createBaseVNode("i", { class: "pi pi-chart-bar text-green-400" }),
                createTextVNode(" 分析视图 ")
              ], -1)),
              createBaseVNode("div", _hoisted_3$5, " 📊 " + toDisplayString(totalItems.value) + " 条日志 ", 1)
            ]),
            createBaseVNode("div", _hoisted_4$5, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => analysisMode.value = $event),
                onChange: buildAnalysis,
                class: "px-3 py-1 bg-white/10 border border-white/20 rounded text-white text-sm focus:border-blue-500 focus:outline-none"
              }, _cache[5] || (_cache[5] = [
                createBaseVNode("option", { value: "path" }, "路径分析", -1),
                createBaseVNode("option", { value: "ip" }, "IP分析", -1),
                createBaseVNode("option", { value: "status" }, "状态码分析", -1),
                createBaseVNode("option", { value: "method" }, "请求方法分析", -1),
                createBaseVNode("option", { value: "referer" }, "来源分析", -1),
                createBaseVNode("option", { value: "userAgent" }, "UserAgent分析", -1)
              ]), 544), [
                [vModelSelect, analysisMode.value]
              ]),
              createBaseVNode("div", _hoisted_5$5, [
                createBaseVNode("button", {
                  onClick: _cache[1] || (_cache[1] = ($event) => setSortBy("count")),
                  class: normalizeClass([
                    "px-2 py-1 text-xs transition-colors",
                    sortBy.value === "count" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                  ]),
                  title: "按数量排序"
                }, [
                  _cache[6] || (_cache[6] = createTextVNode(" 数量 ")),
                  sortBy.value === "count" ? (openBlock(), createElementBlock("i", {
                    key: 0,
                    class: normalizeClass(["pi text-xs ml-1", sortDirection.value === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                  }, null, 2)) : createCommentVNode("", true)
                ], 2),
                createBaseVNode("button", {
                  onClick: _cache[2] || (_cache[2] = ($event) => setSortBy("percentage")),
                  class: normalizeClass([
                    "px-2 py-1 text-xs transition-colors",
                    sortBy.value === "percentage" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                  ]),
                  title: "按百分比排序"
                }, [
                  _cache[7] || (_cache[7] = createTextVNode(" 百分比 ")),
                  sortBy.value === "percentage" ? (openBlock(), createElementBlock("i", {
                    key: 0,
                    class: normalizeClass(["pi text-xs ml-1", sortDirection.value === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                  }, null, 2)) : createCommentVNode("", true)
                ], 2),
                createBaseVNode("button", {
                  onClick: _cache[3] || (_cache[3] = ($event) => setSortBy("name")),
                  class: normalizeClass([
                    "px-2 py-1 text-xs transition-colors",
                    sortBy.value === "name" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                  ]),
                  title: "按名称排序"
                }, [
                  _cache[8] || (_cache[8] = createTextVNode(" 名称 ")),
                  sortBy.value === "name" ? (openBlock(), createElementBlock("i", {
                    key: 0,
                    class: normalizeClass(["pi text-xs ml-1", sortDirection.value === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                  }, null, 2)) : createCommentVNode("", true)
                ], 2)
              ]),
              createBaseVNode("button", {
                onClick: showGlobalAnalysis,
                class: "px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm transition-colors flex items-center gap-1",
                title: "全局综合分析"
              }, _cache[9] || (_cache[9] = [
                createBaseVNode("i", { class: "pi pi-chart-line text-xs" }, null, -1),
                createBaseVNode("span", { class: "hidden md:inline" }, "全局分析", -1)
              ])),
              createBaseVNode("button", {
                onClick: buildAnalysis,
                disabled: isBuilding.value,
                class: "px-3 py-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white rounded text-sm transition-colors flex items-center gap-1"
              }, [
                createBaseVNode("i", {
                  class: normalizeClass(["pi text-xs", isBuilding.value ? "pi-spin pi-spinner" : "pi-refresh"])
                }, null, 2),
                createTextVNode(" " + toDisplayString(isBuilding.value ? "分析中..." : "刷新"), 1)
              ], 8, _hoisted_6$5)
            ])
          ]),
          isBuilding.value ? (openBlock(), createElementBlock("div", _hoisted_7$5, [
            createBaseVNode("div", _hoisted_8$5, [
              _cache[10] || (_cache[10] = createBaseVNode("div", { class: "relative" }, [
                createBaseVNode("div", { class: "w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" }),
                createBaseVNode("i", { class: "pi pi-chart-bar absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500" })
              ], -1)),
              _cache[11] || (_cache[11] = createBaseVNode("div", { class: "text-lg text-blue-400 font-medium" }, "正在分析数据...", -1)),
              createBaseVNode("div", _hoisted_9$5, toDisplayString(currentStep.value), 1),
              createBaseVNode("div", _hoisted_10$4, [
                createBaseVNode("div", {
                  class: "bg-blue-500 h-2 rounded-full transition-all duration-300",
                  style: normalizeStyle({ width: `${progress.value}%` })
                }, null, 4)
              ])
            ])
          ])) : analysisResults.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_11$4, [
            _cache[16] || (_cache[16] = createBaseVNode("div", { class: "text-center py-2 mb-4" }, [
              createBaseVNode("div", { class: "text-xs text-gray-400 bg-gray-800/50 px-3 py-2 rounded-lg inline-block" }, ' 💡 点击任意项目可查看详细分析，点击"分析"或"详情"按钮获取更多信息 ')
            ], -1)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(displayResults.value, (item, index) => {
              return openBlock(), createElementBlock("div", {
                key: `${analysisMode.value}-${index}`,
                class: "group p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer",
                onClick: ($event) => viewDetails(item)
              }, [
                createBaseVNode("div", _hoisted_13$3, [
                  createBaseVNode("div", _hoisted_14$3, [
                    createBaseVNode("i", {
                      class: normalizeClass(["pi text-lg", getItemIcon(item)])
                    }, null, 2),
                    createBaseVNode("div", _hoisted_15$3, [
                      createBaseVNode("div", {
                        class: "font-medium text-white truncate",
                        title: item.name
                      }, toDisplayString(item.displayName || item.name), 9, _hoisted_16$3),
                      createBaseVNode("div", _hoisted_17$3, toDisplayString(getItemDescription(item)), 1),
                      createBaseVNode("div", _hoisted_18$3, [
                        getItemTrend(item) ? (openBlock(), createElementBlock("span", {
                          key: 0,
                          class: normalizeClass(["text-xs px-1.5 py-0.5 rounded", getTrendColor(item)])
                        }, toDisplayString(getItemTrend(item)), 3)) : createCommentVNode("", true),
                        getItemRisk(item) ? (openBlock(), createElementBlock("span", {
                          key: 1,
                          class: normalizeClass(["text-xs px-1.5 py-0.5 rounded", getRiskColor(item)])
                        }, toDisplayString(getItemRisk(item)), 3)) : createCommentVNode("", true)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_19$3, [
                      createBaseVNode("div", _hoisted_20$3, toDisplayString(formatNumber(item.count)), 1),
                      createBaseVNode("div", _hoisted_21$2, toDisplayString((item.count / totalItems.value * 100).toFixed(1)) + "% ", 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_22$2, [
                    createBaseVNode("button", {
                      onClick: withModifiers(($event) => showAdvancedAnalysis(item), ["stop"]),
                      class: "px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-xs transition-colors flex items-center gap-1",
                      title: "查看高级分析"
                    }, _cache[12] || (_cache[12] = [
                      createBaseVNode("i", { class: "pi pi-chart-line" }, null, -1),
                      createBaseVNode("span", { class: "hidden sm:inline" }, "分析", -1)
                    ]), 8, _hoisted_23$2),
                    createBaseVNode("button", {
                      onClick: withModifiers(($event) => viewDetails(item), ["stop"]),
                      class: "px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-xs transition-colors flex items-center gap-1"
                    }, _cache[13] || (_cache[13] = [
                      createBaseVNode("i", { class: "pi pi-eye" }, null, -1),
                      createBaseVNode("span", { class: "hidden sm:inline" }, "详情", -1)
                    ]), 8, _hoisted_24$2)
                  ])
                ]),
                createBaseVNode("div", _hoisted_25$2, [
                  createBaseVNode("div", {
                    class: "bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500",
                    style: normalizeStyle({ width: `${item.count / maxCount.value * 100}%` })
                  }, null, 4),
                  _cache[14] || (_cache[14] = createBaseVNode("div", { class: "absolute -top-8 right-0 opacity-0 group-hover:opacity-100 transition-opacity" }, [
                    createBaseVNode("span", { class: "text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded" }, " 点击查看详情 ")
                  ], -1))
                ])
              ], 8, _hoisted_12$4);
            }), 128)),
            hasMoreResults.value ? (openBlock(), createElementBlock("div", _hoisted_26$1, [
              createBaseVNode("button", {
                onClick: showMore,
                class: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 mx-auto"
              }, [
                _cache[15] || (_cache[15] = createBaseVNode("i", { class: "pi pi-plus text-sm" }, null, -1)),
                createTextVNode(" 加载更多 (还有 " + toDisplayString(sortedResults.value.length - displayLimit.value) + " 项) ", 1)
              ]),
              createBaseVNode("div", _hoisted_27$1, " 已显示 " + toDisplayString(displayLimit.value) + " / " + toDisplayString(sortedResults.value.length) + " 项结果 ", 1)
            ])) : createCommentVNode("", true)
          ])) : (openBlock(), createElementBlock("div", _hoisted_28$1, _cache[17] || (_cache[17] = [
            createBaseVNode("i", { class: "pi pi-chart-bar text-4xl mb-4" }, null, -1),
            createBaseVNode("div", { class: "text-lg" }, "暂无分析数据", -1),
            createBaseVNode("div", { class: "text-sm" }, "请先导入日志数据", -1)
          ]))),
          createVNode(_sfc_main$6, {
            visible: advancedAnalysisVisible.value,
            "log-entries": analysisLogEntries.value,
            onClose: closeAdvancedAnalysis
          }, null, 8, ["visible", "log-entries"])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$4 = {
  key: 0,
  class: "absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 to-transparent"
};
const _hoisted_2$4 = { class: "flex items-center gap-2 flex-1 min-w-0" };
const _hoisted_3$4 = ["disabled"];
const _hoisted_4$4 = {
  key: 1,
  class: "w-5"
};
const _hoisted_5$4 = ["title"];
const _hoisted_6$4 = {
  key: 2,
  class: "flex items-center gap-1 mx-2"
};
const _hoisted_7$4 = ["title"];
const _hoisted_8$4 = { class: "text-xs opacity-75" };
const _hoisted_9$4 = {
  key: 0,
  class: "text-xs opacity-50"
};
const _hoisted_10$3 = { class: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" };
const _hoisted_11$3 = {
  key: 1,
  class: "mt-1"
};
const _hoisted_12$3 = { class: "bg-yellow-500/10 border border-yellow-500/20 rounded px-2 py-1" };
const _hoisted_13$2 = { class: "flex items-center justify-between mb-3" };
const _hoisted_14$2 = { class: "text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded" };
const _hoisted_15$2 = { class: "grid grid-cols-4 gap-2 mb-3 p-2 bg-white/5 rounded text-xs" };
const _hoisted_16$2 = { class: "font-bold text-purple-400" };
const _hoisted_17$2 = { class: "text-gray-400" };
const _hoisted_18$2 = { class: "grid grid-cols-5 gap-2 mb-3 p-2 bg-white/5 rounded text-xs" };
const _hoisted_19$2 = { class: "text-gray-400" };
const _hoisted_20$2 = { class: "text-xs text-gray-400 border-t border-white/10 pt-2" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SimpleTreeNode",
  props: {
    node: {},
    level: {},
    maxChildrenDisplay: { default: 1e3 }
  },
  emits: ["toggle", "view-details", "filter-only", "show-analysis"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const showDetails = ref(false);
    const isLoading = ref(false);
    const safeChildren = computed(() => {
      return props.node.children || [];
    });
    const displayedChildrenCount = ref(50);
    const childrenPerPage = ref(50);
    const visibleChildren = computed(() => {
      if (!props.node.expanded || !safeChildren.value.length) return [];
      const maxDisplay = Math.min(displayedChildrenCount.value, safeChildren.value.length, props.maxChildrenDisplay);
      return safeChildren.value.slice(0, maxDisplay);
    });
    const hasMoreChildren = computed(() => {
      return displayedChildrenCount.value < safeChildren.value.length && displayedChildrenCount.value < props.maxChildrenDisplay;
    });
    const hasHiddenChildren = computed(() => {
      return safeChildren.value.length > props.maxChildrenDisplay && displayedChildrenCount.value >= props.maxChildrenDisplay;
    });
    function loadMoreChildren() {
      const increment = Math.min(childrenPerPage.value, safeChildren.value.length - displayedChildrenCount.value);
      displayedChildrenCount.value += increment;
      console.log(`[SimpleTreeNode] Loading more children for ${props.node.name}: ${displayedChildrenCount.value}/${safeChildren.value.length}`);
    }
    watch(() => props.node.expanded, (newExpanded) => {
      if (newExpanded) {
        displayedChildrenCount.value = Math.min(50, safeChildren.value.length);
      }
    });
    const shouldRenderChildren = computed(() => {
      return props.node.expanded && safeChildren.value.length > 0;
    });
    function getNodeIcon() {
      switch (props.node.type) {
        case "directory":
          return props.node.expanded ? "pi-folder-open" : "pi-folder";
        case "file":
          return "pi-file";
        case "parameter":
          return "pi-cog";
        default:
          return "pi-circle";
      }
    }
    function getNodeColor() {
      switch (props.node.type) {
        case "directory":
          return "text-blue-400";
        case "file":
          return "text-green-400";
        case "parameter":
          return "text-orange-400";
        default:
          return "text-gray-400";
      }
    }
    function formatCount(count) {
      if (count >= 1e6) return `${(count / 1e6).toFixed(1)}M`;
      if (count >= 1e3) return `${(count / 1e3).toFixed(1)}K`;
      return count.toString();
    }
    async function handleToggle() {
      if (safeChildren.value.length > 500) {
        isLoading.value = true;
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      emit("toggle", props.node);
      isLoading.value = false;
    }
    function handleViewDetails() {
      emit("view-details", props.node);
    }
    function handleShowAnalysis() {
      emit("show-analysis", props.node);
    }
    function getUniqueMethods() {
      const methods = new Set(props.node.logEntries.map((log) => log.method));
      return Array.from(methods).sort();
    }
    function getMethodCount(method) {
      return props.node.logEntries.filter((log) => log.method === method).length;
    }
    function getUniqueStatusCodes() {
      const codes = new Set(props.node.logEntries.map((log) => log.statusCode));
      return Array.from(codes).sort((a, b) => a - b);
    }
    function getStatusCount(statusCode) {
      return props.node.logEntries.filter((log) => log.statusCode === statusCode).length;
    }
    function getStatusColor(statusCode) {
      if (statusCode < 300) return "text-green-400";
      if (statusCode < 400) return "text-yellow-400";
      if (statusCode < 500) return "text-orange-400";
      return "text-red-400";
    }
    function getLatestRequest() {
      const timestamps = props.node.logEntries.map(
        (log) => log.timestamp instanceof Date ? log.timestamp : new Date(log.timestamp)
      );
      return new Date(Math.max(...timestamps.map((t) => t.getTime())));
    }
    function formatTime(date) {
      return date.toLocaleString();
    }
    function getAllStatusCodes() {
      const statusMap = /* @__PURE__ */ new Map();
      function collectStatusCodes(node) {
        const stack = [node];
        while (stack.length > 0) {
          const currentNode = stack.pop();
          if (currentNode.logEntries && currentNode.logEntries.length > 0) {
            currentNode.logEntries.forEach((entry) => {
              const count = statusMap.get(entry.statusCode) || 0;
              statusMap.set(entry.statusCode, count + 1);
            });
          }
          if (currentNode.type === "directory" && currentNode.children) {
            const children = currentNode.children || [];
            children.forEach((child) => {
              if (child) {
                stack.push(child);
              }
            });
          }
        }
      }
      collectStatusCodes(props.node);
      return Array.from(statusMap.entries()).map(([code, count]) => ({ code, count })).sort((a, b) => a.code - b.code).slice(0, 5);
    }
    function getStatusCodeStyle(statusCode) {
      if (statusCode >= 200 && statusCode < 300) {
        return "bg-green-500/20 text-green-400 border border-green-500/30";
      } else if (statusCode >= 300 && statusCode < 400) {
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
      } else if (statusCode >= 400 && statusCode < 500) {
        return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
      } else if (statusCode >= 500) {
        return "bg-red-500/20 text-red-400 border border-red-500/30";
      } else {
        return "bg-gray-500/20 text-gray-400 border border-gray-500/30";
      }
    }
    function getStatusDotColor(statusCode) {
      if (statusCode >= 200 && statusCode < 300) {
        return "bg-green-400";
      } else if (statusCode >= 300 && statusCode < 400) {
        return "bg-blue-400";
      } else if (statusCode >= 400 && statusCode < 500) {
        return "bg-yellow-400";
      } else if (statusCode >= 500) {
        return "bg-red-400";
      } else {
        return "bg-gray-400";
      }
    }
    return (_ctx, _cache) => {
      const _component_SimpleTreeNode = resolveComponent("SimpleTreeNode", true);
      return openBlock(), createElementBlock("div", {
        class: "relative",
        style: normalizeStyle({
          marginLeft: `${_ctx.level * 32}px`,
          borderLeft: _ctx.level > 0 ? "2px solid rgba(156, 163, 175, 0.3)" : "none"
        })
      }, [
        _ctx.level > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$4)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(["flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors group relative", { "bg-white/5": _ctx.node.expanded }])
        }, [
          createBaseVNode("div", _hoisted_2$4, [
            safeChildren.value.length > 0 ? (openBlock(), createElementBlock("button", {
              key: 0,
              onClick: handleToggle,
              class: "flex-shrink-0 w-5 h-5 flex items-center justify-center rounded hover:bg-white/10 transition-colors",
              disabled: isLoading.value
            }, [
              createBaseVNode("i", {
                class: normalizeClass([
                  "pi text-xs transition-transform duration-200",
                  _ctx.node.expanded ? "pi-chevron-down" : "pi-chevron-right"
                ])
              }, null, 2)
            ], 8, _hoisted_3$4)) : (openBlock(), createElementBlock("div", _hoisted_4$4)),
            createBaseVNode("i", {
              class: normalizeClass([
                "pi text-sm flex-shrink-0",
                getNodeIcon(),
                getNodeColor()
              ])
            }, null, 2),
            createBaseVNode("span", {
              class: normalizeClass([
                "font-medium min-w-0",
                _ctx.node.type === "directory" ? "text-blue-300" : "text-green-300",
                _ctx.node.type === "parameter" ? "truncate" : ""
              ]),
              title: _ctx.node.path
            }, [
              _ctx.node.type === "parameter" && _ctx.node.name.length > 60 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(_ctx.node.name.substring(0, 60)) + "... ", 1)
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(_ctx.node.name), 1)
              ], 64))
            ], 10, _hoisted_5$4),
            getAllStatusCodes().length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6$4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(getAllStatusCodes(), (statusGroup) => {
                return openBlock(), createElementBlock("div", {
                  key: statusGroup.code,
                  class: normalizeClass([
                    "px-1.5 py-0.5 rounded text-xs font-medium flex items-center gap-1",
                    getStatusCodeStyle(statusGroup.code)
                  ]),
                  title: `状态码 ${statusGroup.code}: ${statusGroup.count} 次 ${_ctx.node.type === "directory" ? "(包含子目录)" : ""}`
                }, [
                  createBaseVNode("span", {
                    class: normalizeClass(["w-1.5 h-1.5 rounded-full", getStatusDotColor(statusGroup.code)])
                  }, null, 2),
                  createBaseVNode("span", null, toDisplayString(statusGroup.code), 1),
                  createBaseVNode("span", _hoisted_8$4, toDisplayString(statusGroup.count), 1),
                  _ctx.node.type === "directory" ? (openBlock(), createElementBlock("span", _hoisted_9$4, "*")) : createCommentVNode("", true)
                ], 10, _hoisted_7$4);
              }), 128))
            ])) : createCommentVNode("", true),
            _ctx.node.requestCount > 0 ? (openBlock(), createElementBlock("span", {
              key: 3,
              class: normalizeClass([
                "px-2 py-1 rounded text-xs font-medium flex-shrink-0",
                _ctx.node.type === "file" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"
              ])
            }, toDisplayString(formatCount(_ctx.node.requestCount)) + " 次 ", 3)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_10$3, [
            _ctx.node.requestCount > 0 ? (openBlock(), createElementBlock("button", {
              key: 0,
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.$emit("filter-only", _ctx.node), ["stop"])),
              class: "px-2 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-xs transition-colors flex items-center gap-1",
              title: "仅显示此节点的数据"
            }, _cache[5] || (_cache[5] = [
              createBaseVNode("i", { class: "pi pi-filter text-xs" }, null, -1),
              createBaseVNode("span", { class: "hidden lg:inline" }, "仅显示", -1)
            ]))) : createCommentVNode("", true),
            (_ctx.node.type === "file" || _ctx.node.type === "parameter") && _ctx.node.logEntries.length > 5 ? (openBlock(), createElementBlock("button", {
              key: 1,
              onClick: withModifiers(handleShowAnalysis, ["stop"]),
              class: "px-2 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-xs transition-colors flex items-center gap-1",
              title: "查看高级分析"
            }, _cache[6] || (_cache[6] = [
              createBaseVNode("i", { class: "pi pi-chart-line text-xs" }, null, -1),
              createBaseVNode("span", { class: "hidden lg:inline" }, "分析", -1)
            ]))) : createCommentVNode("", true),
            (_ctx.node.type === "file" || _ctx.node.type === "parameter") && _ctx.node.logEntries.length > 0 ? (openBlock(), createElementBlock("button", {
              key: 2,
              onClick: withModifiers(handleViewDetails, ["stop"]),
              class: "px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs transition-colors flex items-center gap-1",
              title: "查看详细信息"
            }, _cache[7] || (_cache[7] = [
              createBaseVNode("i", { class: "pi pi-info-circle text-xs" }, null, -1),
              createBaseVNode("span", { class: "hidden sm:inline" }, "详情", -1)
            ]))) : createCommentVNode("", true)
          ])
        ], 2),
        shouldRenderChildren.value ? (openBlock(), createElementBlock("div", _hoisted_11$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(visibleChildren.value, (child) => {
            return openBlock(), createBlock(_component_SimpleTreeNode, {
              key: child.id,
              node: child,
              level: _ctx.level + 1,
              "max-children-display": _ctx.maxChildrenDisplay,
              onToggle: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("toggle", $event)),
              onViewDetails: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("view-details", $event)),
              onFilterOnly: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("filter-only", $event)),
              onShowAnalysis: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("show-analysis", $event))
            }, null, 8, ["node", "level", "max-children-display"]);
          }), 128)),
          hasMoreChildren.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "text-xs text-gray-400 text-center py-2",
            style: normalizeStyle({ marginLeft: `${(_ctx.level + 1) * 32}px` })
          }, [
            createBaseVNode("button", {
              onClick: loadMoreChildren,
              class: "px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded transition-colors text-white font-medium"
            }, " 加载更多 (显示 " + toDisplayString(displayedChildrenCount.value) + " / 共 " + toDisplayString(safeChildren.value.length) + " 项) ", 1)
          ], 4)) : createCommentVNode("", true),
          hasHiddenChildren.value ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "text-xs text-yellow-400 text-center py-2",
            style: normalizeStyle({ marginLeft: `${(_ctx.level + 1) * 32}px` })
          }, [
            createBaseVNode("div", _hoisted_12$3, " ⚡ 为了性能，隐藏了 " + toDisplayString(safeChildren.value.length - props.maxChildrenDisplay) + " 个子项 ", 1)
          ], 4)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        showDetails.value && _ctx.node.type === "file" && _ctx.node.logEntries.length > 0 ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: "mt-2 p-3 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded border border-blue-500/30",
          style: normalizeStyle({ marginLeft: `${(_ctx.level + 1) * 32}px` })
        }, [
          createBaseVNode("div", _hoisted_13$2, [
            _cache[8] || (_cache[8] = createBaseVNode("div", { class: "text-sm text-blue-300 font-medium flex items-center gap-2" }, [
              createBaseVNode("i", { class: "pi pi-list" }),
              createTextVNode(" 文件请求详情 ")
            ], -1)),
            createBaseVNode("div", _hoisted_14$2, " 共 " + toDisplayString(_ctx.node.logEntries.length) + " 条记录 ", 1)
          ]),
          createBaseVNode("div", _hoisted_15$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(getUniqueMethods(), (method) => {
              return openBlock(), createElementBlock("div", {
                key: method,
                class: "text-center"
              }, [
                createBaseVNode("div", _hoisted_16$2, toDisplayString(getMethodCount(method)), 1),
                createBaseVNode("div", _hoisted_17$2, toDisplayString(method), 1)
              ]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_18$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(getUniqueStatusCodes(), (status) => {
              return openBlock(), createElementBlock("div", {
                key: status,
                class: "text-center"
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(["font-bold", getStatusColor(status)])
                }, toDisplayString(getStatusCount(status)), 3),
                createBaseVNode("div", _hoisted_19$2, toDisplayString(status), 1)
              ]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_20$2, " 最近请求：" + toDisplayString(formatTime(getLatestRequest())), 1)
        ], 4)) : createCommentVNode("", true)
      ], 4);
    };
  }
});
const _hoisted_1$3 = { class: "bg-gray-900 rounded-lg shadow-2xl w-full max-w-6xl h-[80vh] flex flex-col" };
const _hoisted_2$3 = { class: "flex items-center justify-between p-6 border-b border-gray-700" };
const _hoisted_3$3 = { class: "flex items-center gap-3" };
const _hoisted_4$3 = { class: "text-xl font-bold text-white" };
const _hoisted_5$3 = { class: "text-sm text-gray-400" };
const _hoisted_6$3 = {
  key: 0,
  class: "p-4 border-b border-gray-700"
};
const _hoisted_7$3 = { class: "grid grid-cols-2 md:grid-cols-4 gap-4" };
const _hoisted_8$3 = { class: "bg-white/5 rounded-lg p-3" };
const _hoisted_9$3 = { class: "flex flex-wrap gap-1" };
const _hoisted_10$2 = { class: "bg-white/5 rounded-lg p-3" };
const _hoisted_11$2 = { class: "flex flex-wrap gap-1" };
const _hoisted_12$2 = { class: "bg-white/5 rounded-lg p-3" };
const _hoisted_13$1 = { class: "text-sm text-white" };
const _hoisted_14$1 = { class: "bg-white/5 rounded-lg p-3" };
const _hoisted_15$1 = { class: "text-xs text-white" };
const _hoisted_16$1 = { class: "p-4 border-b border-gray-700" };
const _hoisted_17$1 = { class: "flex items-center gap-4" };
const _hoisted_18$1 = { class: "flex-1 relative" };
const _hoisted_19$1 = ["value"];
const _hoisted_20$1 = ["value"];
const _hoisted_21$1 = { class: "flex-1 overflow-hidden" };
const _hoisted_22$1 = { class: "h-full overflow-y-auto p-4" };
const _hoisted_23$1 = {
  key: 0,
  class: "text-center py-8 text-gray-400"
};
const _hoisted_24$1 = {
  key: 1,
  class: "space-y-2"
};
const _hoisted_25$1 = { class: "flex items-center justify-between mb-2" };
const _hoisted_26 = { class: "flex items-center gap-3" };
const _hoisted_27 = { class: "text-xs text-gray-400 font-mono" };
const _hoisted_28 = { class: "text-xs text-gray-300 font-mono" };
const _hoisted_29 = { class: "px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-medium" };
const _hoisted_30 = { class: "text-xs text-gray-400" };
const _hoisted_31 = { class: "mb-2" };
const _hoisted_32 = { class: "text-sm text-cyan-300 font-mono break-all leading-relaxed" };
const _hoisted_33 = { class: "grid grid-cols-2 gap-4 text-xs text-gray-400" };
const _hoisted_34 = { key: 0 };
const _hoisted_35 = { key: 1 };
const _hoisted_36 = ["title"];
const _hoisted_37 = { key: 2 };
const _hoisted_38 = ["title"];
const _hoisted_39 = { key: 3 };
const _hoisted_40 = {
  key: 0,
  class: "flex items-center justify-center gap-4 py-4"
};
const _hoisted_41 = ["disabled"];
const _hoisted_42 = { class: "text-sm text-gray-400" };
const _hoisted_43 = ["disabled"];
const _hoisted_44 = { class: "p-4 border-t border-gray-700 flex items-center justify-between" };
const _hoisted_45 = { class: "text-sm text-gray-400" };
const _hoisted_46 = { class: "flex items-center gap-2" };
const pageSize = 50;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LogDetailModal",
  props: {
    visible: { type: Boolean },
    node: {}
  },
  emits: ["close"],
  setup(__props) {
    const props = __props;
    const searchTerm = ref("");
    const filterMethod = ref("");
    const filterStatus = ref("");
    const currentPage = ref(1);
    const filteredLogs = computed(() => {
      if (!props.node?.logEntries) return [];
      return props.node.logEntries.filter((log) => {
        const matchesSearch = !searchTerm.value || log.path.toLowerCase().includes(searchTerm.value.toLowerCase()) || log.ip.includes(searchTerm.value) || log.userAgent.toLowerCase().includes(searchTerm.value.toLowerCase());
        const matchesMethod = !filterMethod.value || log.method === filterMethod.value;
        const matchesStatus = !filterStatus.value || log.statusCode.toString() === filterStatus.value;
        return matchesSearch && matchesMethod && matchesStatus;
      });
    });
    const totalPages = computed(() => Math.ceil(filteredLogs.value.length / pageSize));
    const startIndex = computed(() => (currentPage.value - 1) * pageSize);
    const visibleLogs = computed(() => {
      return filteredLogs.value.slice(startIndex.value, startIndex.value + pageSize);
    });
    function getUniqueMethods() {
      if (!props.node?.logEntries) return [];
      const methods = new Set(props.node.logEntries.map((log) => log.method));
      return Array.from(methods).sort();
    }
    function getMethodCount(method) {
      if (!props.node?.logEntries) return 0;
      return props.node.logEntries.filter((log) => log.method === method).length;
    }
    function getUniqueStatusCodes() {
      if (!props.node?.logEntries) return [];
      const codes = new Set(props.node.logEntries.map((log) => log.statusCode));
      return Array.from(codes).sort((a, b) => a - b);
    }
    function getStatusCount(statusCode) {
      if (!props.node?.logEntries) return 0;
      return props.node.logEntries.filter((log) => log.statusCode === statusCode).length;
    }
    function getUniqueIPs() {
      if (!props.node?.logEntries) return [];
      const ips = new Set(props.node.logEntries.map((log) => log.ip));
      return Array.from(ips);
    }
    function getNodeIcon() {
      switch (props.node?.type) {
        case "directory":
          return "pi-folder text-blue-400";
        case "file":
          return "pi-file text-green-400";
        case "parameter":
          return "pi-cog text-orange-400";
        default:
          return "pi-circle text-gray-400";
      }
    }
    function getNodeTypeText() {
      switch (props.node?.type) {
        case "directory":
          return "目录";
        case "file":
          return "文件";
        case "parameter":
          return "参数组合";
        default:
          return "节点";
      }
    }
    function getStatusBgColor(statusCode) {
      if (statusCode < 300) return "bg-green-500/20 text-green-400";
      if (statusCode < 400) return "bg-yellow-500/20 text-yellow-400";
      if (statusCode < 500) return "bg-orange-500/20 text-orange-400";
      return "bg-red-500/20 text-red-400";
    }
    function getThreatLevelColor(level) {
      switch (level) {
        case "normal":
          return "text-gray-400";
        case "low":
          return "text-green-400";
        case "medium":
          return "text-yellow-400";
        case "high":
          return "text-orange-400";
        case "critical":
          return "text-red-400";
        default:
          return "text-gray-400";
      }
    }
    function getThreatLevelText(level) {
      switch (level) {
        case "normal":
          return "正常";
        case "low":
          return "低";
        case "medium":
          return "中";
        case "high":
          return "高";
        case "critical":
          return "严重";
        default:
          return level || "未知";
      }
    }
    function formatCount(count) {
      if (count >= 1e6) return `${(count / 1e6).toFixed(1)}M`;
      if (count >= 1e3) return `${(count / 1e3).toFixed(1)}K`;
      return count.toString();
    }
    function formatTime(timestamp) {
      const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
      return date.toLocaleString();
    }
    function formatBytes(bytes) {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    }
    function formatTimeRange() {
      if (!props.node?.logEntries || props.node.logEntries.length === 0) return "-";
      const entries = props.node.logEntries.length > 1e4 ? props.node.logEntries.slice(0, 1e4) : props.node.logEntries;
      if (entries.length === 0) return "-";
      try {
        let minTime = Infinity;
        let maxTime = -Infinity;
        for (const log of entries) {
          const timestamp = log.timestamp instanceof Date ? log.timestamp.getTime() : log.timestamp;
          if (timestamp < minTime) minTime = timestamp;
          if (timestamp > maxTime) maxTime = timestamp;
        }
        if (minTime === Infinity || maxTime === -Infinity) return "-";
        const earliest = new Date(minTime);
        const latest = new Date(maxTime);
        if (earliest.toDateString() === latest.toDateString()) {
          return `${earliest.toLocaleDateString()} ${earliest.toLocaleTimeString().split(":").slice(0, 2).join(":")} - ${latest.toLocaleTimeString().split(":").slice(0, 2).join(":")}`;
        }
        return `${earliest.toLocaleDateString()} - ${latest.toLocaleDateString()}`;
      } catch (error) {
        console.warn("Error formatting time range:", error);
        return "-";
      }
    }
    function exportLogs() {
      if (!props.node?.logEntries) return;
      const csvContent = [
        ["时间", "方法", "路径", "状态码", "IP", "响应大小", "User-Agent"].join(","),
        ...filteredLogs.value.map((log) => [
          formatTime(log.timestamp),
          log.method,
          `"${log.path}"`,
          log.statusCode,
          log.ip,
          log.responseSize || 0,
          `"${log.userAgent || ""}"`
        ].join(","))
      ].join("\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", `${props.node.name}-logs.csv`);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    watch(() => props.visible, (newVisible) => {
      if (newVisible) {
        currentPage.value = 1;
        searchTerm.value = "";
        filterMethod.value = "";
        filterStatus.value = "";
      }
    });
    watch([searchTerm, filterMethod, filterStatus], () => {
      currentPage.value = 1;
    });
    return (_ctx, _cache) => {
      return _ctx.visible ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
        onClick: _cache[7] || (_cache[7] = withModifiers(($event) => _ctx.$emit("close"), ["self"]))
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("div", _hoisted_2$3, [
            createBaseVNode("div", _hoisted_3$3, [
              createBaseVNode("i", {
                class: normalizeClass(["pi text-lg", getNodeIcon()])
              }, null, 2),
              createBaseVNode("div", null, [
                createBaseVNode("h2", _hoisted_4$3, toDisplayString(_ctx.node?.name || "详细日志"), 1),
                createBaseVNode("p", _hoisted_5$3, toDisplayString(getNodeTypeText()) + " · " + toDisplayString(_ctx.node?.path || "") + " · " + toDisplayString(formatCount(_ctx.node?.logEntries?.length || 0)) + " 条记录 ", 1)
              ])
            ]),
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
              class: "p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-400 hover:text-white"
            }, _cache[8] || (_cache[8] = [
              createBaseVNode("i", { class: "pi pi-times text-lg" }, null, -1)
            ]))
          ]),
          _ctx.node?.logEntries ? (openBlock(), createElementBlock("div", _hoisted_6$3, [
            createBaseVNode("div", _hoisted_7$3, [
              createBaseVNode("div", _hoisted_8$3, [
                _cache[9] || (_cache[9] = createBaseVNode("div", { class: "text-xs text-gray-400 mb-1" }, "请求方法", -1)),
                createBaseVNode("div", _hoisted_9$3, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(getUniqueMethods(), (method) => {
                    return openBlock(), createElementBlock("span", {
                      key: method,
                      class: "px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                    }, toDisplayString(method) + " (" + toDisplayString(getMethodCount(method)) + ") ", 1);
                  }), 128))
                ])
              ]),
              createBaseVNode("div", _hoisted_10$2, [
                _cache[10] || (_cache[10] = createBaseVNode("div", { class: "text-xs text-gray-400 mb-1" }, "状态码", -1)),
                createBaseVNode("div", _hoisted_11$2, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(getUniqueStatusCodes(), (status) => {
                    return openBlock(), createElementBlock("span", {
                      key: status,
                      class: normalizeClass(["px-2 py-1 rounded text-xs", getStatusBgColor(status)])
                    }, toDisplayString(status) + " (" + toDisplayString(getStatusCount(status)) + ") ", 3);
                  }), 128))
                ])
              ]),
              createBaseVNode("div", _hoisted_12$2, [
                _cache[11] || (_cache[11] = createBaseVNode("div", { class: "text-xs text-gray-400 mb-1" }, "来源IP", -1)),
                createBaseVNode("div", _hoisted_13$1, toDisplayString(getUniqueIPs().length) + " 个唯一IP", 1)
              ]),
              createBaseVNode("div", _hoisted_14$1, [
                _cache[12] || (_cache[12] = createBaseVNode("div", { class: "text-xs text-gray-400 mb-1" }, "时间范围", -1)),
                createBaseVNode("div", _hoisted_15$1, toDisplayString(formatTimeRange()), 1)
              ])
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_16$1, [
            createBaseVNode("div", _hoisted_17$1, [
              createBaseVNode("div", _hoisted_18$1, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchTerm.value = $event),
                  type: "text",
                  placeholder: "搜索日志内容...",
                  class: "w-full px-3 py-2 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                }, null, 512), [
                  [vModelText, searchTerm.value]
                ]),
                _cache[13] || (_cache[13] = createBaseVNode("i", { class: "pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" }, null, -1))
              ]),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filterMethod.value = $event),
                class: "px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              }, [
                _cache[14] || (_cache[14] = createBaseVNode("option", { value: "" }, "所有方法", -1)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(getUniqueMethods(), (method) => {
                  return openBlock(), createElementBlock("option", {
                    key: method,
                    value: method
                  }, toDisplayString(method), 9, _hoisted_19$1);
                }), 128))
              ], 512), [
                [vModelSelect, filterMethod.value]
              ]),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => filterStatus.value = $event),
                class: "px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              }, [
                _cache[15] || (_cache[15] = createBaseVNode("option", { value: "" }, "所有状态", -1)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(getUniqueStatusCodes(), (status) => {
                  return openBlock(), createElementBlock("option", {
                    key: status,
                    value: status.toString()
                  }, toDisplayString(status), 9, _hoisted_20$1);
                }), 128))
              ], 512), [
                [vModelSelect, filterStatus.value]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_21$1, [
            createBaseVNode("div", _hoisted_22$1, [
              filteredLogs.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_23$1, _cache[16] || (_cache[16] = [
                createBaseVNode("i", { class: "pi pi-inbox text-4xl mb-2" }, null, -1),
                createBaseVNode("div", null, "没有找到匹配的日志记录", -1)
              ]))) : (openBlock(), createElementBlock("div", _hoisted_24$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(visibleLogs.value, (log, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: log.id,
                    class: "bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors"
                  }, [
                    createBaseVNode("div", _hoisted_25$1, [
                      createBaseVNode("div", _hoisted_26, [
                        createBaseVNode("span", _hoisted_27, " #" + toDisplayString(startIndex.value + index + 1), 1),
                        createBaseVNode("span", _hoisted_28, toDisplayString(formatTime(log.timestamp)), 1),
                        createBaseVNode("span", {
                          class: normalizeClass(["px-2 py-1 rounded text-xs font-bold", getStatusBgColor(log.statusCode)])
                        }, toDisplayString(log.statusCode), 3),
                        createBaseVNode("span", _hoisted_29, toDisplayString(log.method), 1)
                      ]),
                      createBaseVNode("div", _hoisted_30, toDisplayString(log.ip), 1)
                    ]),
                    createBaseVNode("div", _hoisted_31, [
                      createBaseVNode("div", _hoisted_32, toDisplayString(log.path), 1)
                    ]),
                    createBaseVNode("div", _hoisted_33, [
                      log.responseSize ? (openBlock(), createElementBlock("div", _hoisted_34, [
                        _cache[17] || (_cache[17] = createBaseVNode("span", { class: "text-gray-500" }, "响应大小:", -1)),
                        createTextVNode(" " + toDisplayString(formatBytes(log.responseSize)), 1)
                      ])) : createCommentVNode("", true),
                      log.userAgent && log.userAgent !== "unknown" ? (openBlock(), createElementBlock("div", _hoisted_35, [
                        _cache[18] || (_cache[18] = createBaseVNode("span", { class: "text-gray-500" }, "User-Agent:", -1)),
                        createBaseVNode("span", {
                          class: "truncate block",
                          title: log.userAgent
                        }, toDisplayString(log.userAgent), 9, _hoisted_36)
                      ])) : createCommentVNode("", true),
                      log.referer && log.referer !== "-" ? (openBlock(), createElementBlock("div", _hoisted_37, [
                        _cache[19] || (_cache[19] = createBaseVNode("span", { class: "text-gray-500" }, "Referer:", -1)),
                        createBaseVNode("span", {
                          class: "truncate block",
                          title: log.referer
                        }, toDisplayString(log.referer), 9, _hoisted_38)
                      ])) : createCommentVNode("", true),
                      log.threatLevel && log.threatLevel !== "low" ? (openBlock(), createElementBlock("div", _hoisted_39, [
                        _cache[20] || (_cache[20] = createBaseVNode("span", { class: "text-gray-500" }, "威胁等级:", -1)),
                        createBaseVNode("span", {
                          class: normalizeClass(getThreatLevelColor(log.threatLevel))
                        }, toDisplayString(getThreatLevelText(log.threatLevel)), 3)
                      ])) : createCommentVNode("", true)
                    ])
                  ]);
                }), 128)),
                totalPages.value > 1 ? (openBlock(), createElementBlock("div", _hoisted_40, [
                  createBaseVNode("button", {
                    onClick: _cache[4] || (_cache[4] = ($event) => currentPage.value--),
                    disabled: currentPage.value <= 1,
                    class: "px-3 py-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 text-white rounded transition-colors"
                  }, " 上一页 ", 8, _hoisted_41),
                  createBaseVNode("span", _hoisted_42, " 第 " + toDisplayString(currentPage.value) + " 页，共 " + toDisplayString(totalPages.value) + " 页 (" + toDisplayString(filteredLogs.value.length) + " 条记录) ", 1),
                  createBaseVNode("button", {
                    onClick: _cache[5] || (_cache[5] = ($event) => currentPage.value++),
                    disabled: currentPage.value >= totalPages.value,
                    class: "px-3 py-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 text-white rounded transition-colors"
                  }, " 下一页 ", 8, _hoisted_43)
                ])) : createCommentVNode("", true)
              ]))
            ])
          ]),
          createBaseVNode("div", _hoisted_44, [
            createBaseVNode("div", _hoisted_45, " 显示 " + toDisplayString(visibleLogs.value.length) + " / " + toDisplayString(filteredLogs.value.length) + " 条记录 ", 1),
            createBaseVNode("div", _hoisted_46, [
              createBaseVNode("button", {
                onClick: exportLogs,
                class: "px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors flex items-center gap-2"
              }, _cache[21] || (_cache[21] = [
                createBaseVNode("i", { class: "pi pi-download" }, null, -1),
                createTextVNode(" 导出日志 ")
              ])),
              createBaseVNode("button", {
                onClick: _cache[6] || (_cache[6] = ($event) => _ctx.$emit("close")),
                class: "px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors"
              }, " 关闭 ")
            ])
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$2 = { class: "flex items-center justify-between mb-4" };
const _hoisted_2$2 = { class: "flex items-center gap-4" };
const _hoisted_3$2 = { class: "text-sm text-gray-400" };
const _hoisted_4$2 = {
  key: 0,
  class: "text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded"
};
const _hoisted_5$2 = {
  key: 1,
  class: "text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded"
};
const _hoisted_6$2 = { class: "flex items-center gap-2" };
const _hoisted_7$2 = { class: "mb-4" };
const _hoisted_8$2 = { class: "relative" };
const _hoisted_9$2 = {
  key: 0,
  class: "text-center py-8"
};
const _hoisted_10$1 = {
  key: 1,
  class: "space-y-1 max-h-[600px] overflow-y-auto"
};
const _hoisted_11$1 = {
  key: 2,
  class: "text-center py-8 text-gray-400"
};
const _hoisted_12$1 = { class: "text-lg" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HierarchicalTreeView",
  props: {
    items: {},
    maxChildrenDisplay: { default: 1e3 }
  },
  setup(__props) {
    const props = __props;
    useThemeStore();
    const treeNodes = ref([]);
    const filteredNodes = ref([]);
    const searchTerm = ref("");
    const expandAll = ref(false);
    const isBuilding = ref(false);
    const filterOnlyNode = ref(null);
    const isFilterOnly = ref(false);
    const modalVisible = ref(false);
    const selectedNode = ref(null);
    const analysisModalVisible = ref(false);
    const analysisNode = ref(null);
    const totalItems = computed(() => props.items.length);
    function buildSimpleTree(logs) {
      const pathMap = /* @__PURE__ */ new Map();
      const rootNode = {
        id: "root",
        name: "/",
        path: "/",
        type: "directory",
        level: 0,
        expanded: false,
        requestCount: 0,
        children: [],
        logEntries: []
      };
      pathMap.set("/", rootNode);
      logs.forEach((log) => {
        const { segments, isApiEndpoint, hasParameters } = parsePathIntelligently(log.path);
        let currentPath = "";
        let currentNode = rootNode;
        segments.forEach((segment, index) => {
          currentPath += "/" + segment;
          if (!pathMap.has(currentPath)) {
            const isLastSegment = index === segments.length - 1;
            const nodeType = determineNodeType(segment, index, segments, isLastSegment, isApiEndpoint, hasParameters);
            const newNode = {
              id: currentPath,
              name: segment,
              path: currentPath,
              type: nodeType,
              level: index + 1,
              expanded: false,
              requestCount: 0,
              children: [],
              logEntries: []
            };
            pathMap.set(currentPath, newNode);
            currentNode.children.push(newNode);
          }
          currentNode = pathMap.get(currentPath);
        });
        if (hasParameters) {
          const parameterNode = createParameterNode(log, currentNode);
          if (parameterNode) {
            const existingParamNode = currentNode.children.find(
              (child) => child.type === "parameter" && child.name === parameterNode.name
            );
            if (existingParamNode) {
              existingParamNode.logEntries.push(log);
              existingParamNode.requestCount++;
            } else {
              currentNode.children.push(parameterNode);
            }
          }
        }
        currentNode.logEntries.push(log);
        currentNode.requestCount++;
        updateParentCounts(pathMap, segments);
      });
      smartSortTree(rootNode);
      return [rootNode];
    }
    function parsePathIntelligently(path) {
      const [basePath, queryString] = path.split("?");
      const segments = basePath.split("/").filter((s) => s.length > 0);
      const isApiEndpoint = segments.some(
        (segment) => ["api", "Api", "API"].includes(segment) || segment.match(/^[A-Z]{2,}_/) || // 匹配如 DC_、JS_ 等前缀
        segment.includes("_") || segment.match(/\.[a-z]+$/)
        // 匹配文件扩展名
      );
      const hasParameters = !!queryString && queryString.trim().length > 0;
      return { segments, isApiEndpoint, hasParameters };
    }
    function determineNodeType(segment, index, segments, isLastSegment, isApiEndpoint, hasParameters) {
      if (isLastSegment) {
        if (isApiEndpoint) return "file";
        if (segment.includes(".")) return "file";
        if (hasParameters) return "file";
        if (segment.match(/^[A-Z]{2,}_/)) return "file";
        if (segment.match(/login|auth|save|get|set|list|info/i)) return "file";
      }
      if (!isLastSegment) {
        if (["api", "v1", "v2", "admin", "user", "public", "static"].includes(segment.toLowerCase())) {
          return "directory";
        }
      }
      return isLastSegment ? "file" : "directory";
    }
    function createParameterNode(log, parentNode) {
      const [, queryString] = log.path.split("?");
      if (!queryString) return null;
      const params = {};
      const paramPairs = queryString.split("&");
      paramPairs.forEach((pair) => {
        const [key, value] = pair.split("=");
        if (key) {
          try {
            params[key] = decodeURIComponent(value || "");
          } catch {
            params[key] = value || "";
          }
        }
      });
      const paramKeys = Object.keys(params);
      const shortSummary = paramKeys.slice(0, 3).map((key) => {
        const value = params[key];
        const shortValue = value.length > 20 ? value.substring(0, 20) + "..." : value;
        return `${key}=${shortValue}`;
      }).join("&");
      const suffix = paramKeys.length > 3 ? `... +${paramKeys.length - 3}个参数` : "";
      const displayName = `?${shortSummary}${suffix}`;
      return {
        id: `${parentNode.id}-params-${Date.now()}-${Math.random()}`,
        name: displayName,
        path: log.path,
        type: "parameter",
        // 扩展类型
        level: parentNode.level + 1,
        expanded: false,
        requestCount: 1,
        children: [],
        logEntries: [log]
      };
    }
    function updateParentCounts(pathMap, segments, log) {
      let parentPath = "";
      segments.forEach((segment, index) => {
        parentPath += "/" + segment;
        const node = pathMap.get(parentPath);
        if (node && index < segments.length - 1) {
          node.requestCount++;
        }
      });
      const rootNode = pathMap.get("/");
      if (rootNode) {
        rootNode.requestCount++;
      }
    }
    function smartSortTree(node) {
      node.children.forEach((child) => smartSortTree(child));
      node.children.sort((a, b) => {
        const typeOrder = { directory: 0, file: 1, parameter: 2 };
        const aType = a.type === "parameter" ? "parameter" : a.type;
        const bType = b.type === "parameter" ? "parameter" : b.type;
        const typeComparison = typeOrder[aType] - typeOrder[bType];
        if (typeComparison !== 0) {
          return typeComparison;
        }
        if (a.requestCount !== b.requestCount) {
          return b.requestCount - a.requestCount;
        }
        return a.name.localeCompare(b.name);
      });
    }
    async function buildTree() {
      if (props.items.length === 0) {
        treeNodes.value = [];
        filteredNodes.value = [];
        return;
      }
      isBuilding.value = true;
      try {
        await new Promise((resolve) => setTimeout(resolve, 100));
        console.log(`[SimpleTreeView] Building tree for ${props.items.length} logs`);
        treeNodes.value = buildSimpleTree(props.items);
        filteredNodes.value = [...treeNodes.value];
        console.log(`[SimpleTreeView] Tree built with ${treeNodes.value[0]?.children.length || 0} root paths`);
      } catch (error) {
        console.error("[SimpleTreeView] Error building tree:", error);
        treeNodes.value = [];
        filteredNodes.value = [];
      } finally {
        isBuilding.value = false;
      }
    }
    function toggleNode(node) {
      node.expanded = !node.expanded;
    }
    function toggleExpandAll() {
      function applyExpansion(nodes, expanded) {
        nodes.forEach((node) => {
          node.expanded = expanded;
          if (node.children.length > 0) {
            applyExpansion(node.children, expanded);
          }
        });
      }
      applyExpansion(treeNodes.value, expandAll.value);
      filteredNodes.value = [...treeNodes.value];
    }
    function filterNodes() {
      if (!searchTerm.value.trim()) {
        filteredNodes.value = [...treeNodes.value];
        return;
      }
      const term = searchTerm.value.toLowerCase();
      function filterNode(node) {
        const matchesSearch = node.name.toLowerCase().includes(term) || node.path.toLowerCase().includes(term);
        const filteredChildren = node.children.map((child) => filterNode(child)).filter((child) => child !== null);
        if (matchesSearch || filteredChildren.length > 0) {
          return {
            ...node,
            children: filteredChildren,
            expanded: searchTerm.value.trim() ? true : node.expanded
          };
        }
        return null;
      }
      filteredNodes.value = treeNodes.value.map((node) => filterNode(node)).filter((node) => node !== null);
    }
    function showDetailModal(node) {
      selectedNode.value = node;
      modalVisible.value = true;
    }
    function closeDetailModal() {
      modalVisible.value = false;
      selectedNode.value = null;
    }
    function showAnalysisModal(node) {
      analysisNode.value = node;
      analysisModalVisible.value = true;
    }
    function closeAnalysisModal() {
      analysisModalVisible.value = false;
      analysisNode.value = null;
    }
    function handleFilterOnly(node) {
      filterOnlyNode.value = node;
      isFilterOnly.value = true;
      const filteredTree = createFilterOnlyTree(treeNodes.value, node);
      filteredNodes.value = filteredTree;
    }
    function clearFilter() {
      filterOnlyNode.value = null;
      isFilterOnly.value = false;
      searchTerm.value = "";
      filteredNodes.value = [...treeNodes.value];
    }
    function createFilterOnlyTree(nodes, targetNode) {
      function findNodePath(nodes2, targetId, currentPath = []) {
        for (const node of nodes2) {
          const newPath = [...currentPath, node];
          if (node.id === targetId) {
            return newPath;
          }
          if (node.children && node.children.length > 0) {
            const foundPath = findNodePath(node.children, targetId, newPath);
            if (foundPath) {
              return foundPath;
            }
          }
        }
        return null;
      }
      const nodePath = findNodePath(nodes, targetNode.id);
      if (!nodePath) return [];
      const result = [];
      let currentLevel = result;
      nodePath.forEach((node, index) => {
        const isTargetNode = node.id === targetNode.id;
        const clonedNode = {
          ...node,
          children: isTargetNode ? [...node.children] : [],
          expanded: true
          // 展开路径上的所有节点
        };
        currentLevel.push(clonedNode);
        if (!isTargetNode) {
          currentLevel = clonedNode.children;
        }
      });
      return result;
    }
    watch(() => props.items, () => {
      buildTree();
    }, { immediate: false });
    onMounted(() => {
      buildTree();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$9, { type: "card" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("div", _hoisted_2$2, [
              _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "text-lg font-semibold text-white flex items-center gap-2" }, [
                createBaseVNode("i", { class: "pi pi-sitemap text-blue-400" }),
                createTextVNode(" 层级树状视图 ")
              ], -1)),
              createBaseVNode("div", _hoisted_3$2, " 📁 " + toDisplayString(totalItems.value) + " 条日志 | " + toDisplayString(treeNodes.value.length) + " 个路径 ", 1),
              isFilterOnly.value ? (openBlock(), createElementBlock("div", _hoisted_4$2, " 🔍 仅显示: " + toDisplayString(filterOnlyNode.value?.name), 1)) : (openBlock(), createElementBlock("div", _hoisted_5$2, " ✨ 智能层级分析 "))
            ]),
            createBaseVNode("div", _hoisted_6$2, [
              isFilterOnly.value ? (openBlock(), createElementBlock("button", {
                key: 0,
                onClick: clearFilter,
                class: "px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm transition-colors"
              }, _cache[3] || (_cache[3] = [
                createBaseVNode("i", { class: "pi pi-times mr-1" }, null, -1),
                createTextVNode(" 清除过滤 ")
              ]))) : createCommentVNode("", true),
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => {
                  expandAll.value = !expandAll.value;
                  toggleExpandAll();
                }),
                class: "px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
              }, toDisplayString(expandAll.value ? "全部收起" : "全部展开"), 1),
              createBaseVNode("button", {
                onClick: buildTree,
                class: "px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-sm transition-colors"
              }, _cache[4] || (_cache[4] = [
                createBaseVNode("i", { class: "pi pi-refresh mr-1" }, null, -1),
                createTextVNode(" 刷新 ")
              ]))
            ])
          ]),
          createBaseVNode("div", _hoisted_7$2, [
            createBaseVNode("div", _hoisted_8$2, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchTerm.value = $event),
                onInput: filterNodes,
                type: "text",
                placeholder: "搜索路径...",
                class: "w-full px-3 py-2 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              }, null, 544), [
                [vModelText, searchTerm.value]
              ]),
              _cache[5] || (_cache[5] = createBaseVNode("i", { class: "pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" }, null, -1))
            ])
          ]),
          isBuilding.value ? (openBlock(), createElementBlock("div", _hoisted_9$2, _cache[6] || (_cache[6] = [
            createBaseVNode("div", { class: "inline-flex items-center gap-3 text-blue-400" }, [
              createBaseVNode("i", { class: "pi pi-spin pi-spinner text-lg" }),
              createBaseVNode("span", { class: "text-sm" }, "正在构建智能目录树...")
            ], -1)
          ]))) : filteredNodes.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(filteredNodes.value, (node) => {
              return openBlock(), createBlock(_sfc_main$4, {
                key: node.id,
                node,
                level: 0,
                "max-children-display": _ctx.maxChildrenDisplay,
                onToggle: toggleNode,
                onViewDetails: showDetailModal,
                onFilterOnly: handleFilterOnly,
                onShowAnalysis: showAnalysisModal
              }, null, 8, ["node", "max-children-display"]);
            }), 128))
          ])) : (openBlock(), createElementBlock("div", _hoisted_11$1, [
            _cache[7] || (_cache[7] = createBaseVNode("i", { class: "pi pi-folder-open text-4xl mb-2" }, null, -1)),
            createBaseVNode("div", _hoisted_12$1, toDisplayString(searchTerm.value ? "未找到匹配的路径" : "暂无数据"), 1)
          ])),
          createVNode(_sfc_main$3, {
            visible: modalVisible.value,
            node: selectedNode.value,
            onClose: closeDetailModal
          }, null, 8, ["visible", "node"]),
          createVNode(_sfc_main$6, {
            visible: analysisModalVisible.value,
            "log-entries": analysisNode.value?.logEntries || [],
            onClose: closeAnalysisModal
          }, null, 8, ["visible", "log-entries"])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$1 = { class: "space-y-2" };
const _hoisted_2$1 = { class: "bg-gray-700 rounded p-2" };
const _hoisted_3$1 = { class: "grid grid-cols-2 gap-2 text-xs" };
const _hoisted_4$1 = { class: "bg-gray-700 rounded p-2" };
const _hoisted_5$1 = { class: "text-xs space-y-1" };
const _hoisted_6$1 = { class: "bg-gray-700 rounded p-2" };
const _hoisted_7$1 = { class: "text-xs space-y-1" };
const _hoisted_8$1 = { class: "bg-gray-700 rounded p-2" };
const _hoisted_9$1 = { class: "text-xs space-y-1" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PerformanceMonitor",
  props: {
    cacheInfo: { default: () => ({ size: 0, keys: [], totalMemory: 0 }) },
    visibleCount: { default: 0 },
    totalCount: { default: 0 },
    treeNodeCount: { default: 0 },
    dataMode: { default: "loading" }
  },
  emits: ["clearCache"],
  setup(__props, { emit: __emit }) {
    const themeStore = useThemeStore();
    const emit = __emit;
    const showMonitor = ref(false);
    const queryTimes = ref([]);
    const cacheHits = ref(0);
    const totalQueries = ref(0);
    const memoryUsage = ref(0);
    const fps = ref(0);
    let fpsCounter = 0;
    let fpsInterval = null;
    const averageQueryTime = computed(() => {
      if (queryTimes.value.length === 0) return 0;
      const sum = queryTimes.value.reduce((a, b) => a + b, 0);
      return Math.round(sum / queryTimes.value.length);
    });
    const cacheHitRate = computed(() => {
      if (totalQueries.value === 0) return 0;
      return Math.round(cacheHits.value / totalQueries.value * 100);
    });
    function toggleMonitor() {
      showMonitor.value = !showMonitor.value;
    }
    function clearCache() {
      emit("clearCache");
      queryTimes.value = [];
      cacheHits.value = 0;
      totalQueries.value = 0;
    }
    function formatNumber(num) {
      if (num > 1e6) return `${(num / 1e6).toFixed(1)}M`;
      if (num > 1e3) return `${(num / 1e3).toFixed(1)}K`;
      return num.toString();
    }
    function updateMemoryUsage() {
      if (performance.memory) {
        memoryUsage.value = Math.round(performance.memory.usedJSHeapSize / 1024 / 1024);
      }
    }
    function updateFPS() {
      fpsCounter++;
    }
    onMounted(() => {
      const animate = () => {
        updateFPS();
        requestAnimationFrame(animate);
      };
      animate();
      fpsInterval = setInterval(() => {
        fps.value = fpsCounter;
        fpsCounter = 0;
        updateMemoryUsage();
      }, 1e3);
      window.addEventListener("query-performance", (e) => {
        const { time, cached } = e.detail;
        queryTimes.value.push(time);
        if (queryTimes.value.length > 50) {
          queryTimes.value = queryTimes.value.slice(-50);
        }
        totalQueries.value++;
        if (cached) cacheHits.value++;
      });
    });
    onUnmounted(() => {
      if (fpsInterval) {
        clearInterval(fpsInterval);
      }
    });
    return (_ctx, _cache) => {
      return showMonitor.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["fixed bottom-4 right-4 rounded-lg p-4 text-xs text-white max-w-sm shadow-lg z-50", unref(themeStore).themeClasses.cardBackground])
      }, [
        createBaseVNode("div", { class: "flex items-center justify-between mb-2" }, [
          _cache[1] || (_cache[1] = createBaseVNode("h3", { class: "font-semibold text-sm" }, "性能监控", -1)),
          createBaseVNode("button", {
            onClick: toggleMonitor,
            class: "text-gray-400 hover:text-white"
          }, _cache[0] || (_cache[0] = [
            createBaseVNode("i", { class: "pi pi-times" }, null, -1)
          ]))
        ]),
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "font-medium mb-1" }, "缓存状态", -1)),
            createBaseVNode("div", _hoisted_3$1, [
              createBaseVNode("div", null, "条目: " + toDisplayString(_ctx.cacheInfo.size), 1),
              createBaseVNode("div", null, "内存: " + toDisplayString(formatNumber(_ctx.cacheInfo.totalMemory)), 1)
            ]),
            createBaseVNode("button", {
              onClick: clearCache,
              class: "mt-1 px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-xs"
            }, " 清空缓存 ")
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            _cache[3] || (_cache[3] = createBaseVNode("div", { class: "font-medium mb-1" }, "查询性能", -1)),
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("div", null, "平均响应: " + toDisplayString(averageQueryTime.value) + "ms", 1),
              createBaseVNode("div", null, "缓存命中率: " + toDisplayString(cacheHitRate.value) + "%", 1),
              createBaseVNode("div", null, "总查询数: " + toDisplayString(totalQueries.value), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_6$1, [
            _cache[4] || (_cache[4] = createBaseVNode("div", { class: "font-medium mb-1" }, "数据统计", -1)),
            createBaseVNode("div", _hoisted_7$1, [
              createBaseVNode("div", null, "可见项: " + toDisplayString(_ctx.visibleCount), 1),
              createBaseVNode("div", null, "总数: " + toDisplayString(_ctx.totalCount), 1),
              createBaseVNode("div", null, "树节点: " + toDisplayString(_ctx.treeNodeCount), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_8$1, [
            _cache[5] || (_cache[5] = createBaseVNode("div", { class: "font-medium mb-1" }, "系统信息", -1)),
            createBaseVNode("div", _hoisted_9$1, [
              createBaseVNode("div", null, "模式: " + toDisplayString(_ctx.dataMode), 1),
              createBaseVNode("div", null, "内存使用: " + toDisplayString(memoryUsage.value) + "MB", 1),
              createBaseVNode("div", null, "FPS: " + toDisplayString(fps.value), 1)
            ])
          ])
        ])
      ], 2)) : (openBlock(), createElementBlock("button", {
        key: 1,
        onClick: toggleMonitor,
        class: "fixed bottom-4 right-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg p-2 text-white shadow-lg z-50",
        title: "显示性能监控"
      }, _cache[6] || (_cache[6] = [
        createBaseVNode("i", { class: "pi pi-chart-line" }, null, -1)
      ])));
    };
  }
});
const _hoisted_1 = { class: "flex items-center justify-between" };
const _hoisted_2 = { class: "flex items-center gap-2" };
const _hoisted_3 = { class: "flex items-center gap-2" };
const _hoisted_4 = { class: "bg-white/10 rounded-lg p-1 flex items-center gap-1" };
const _hoisted_5 = {
  key: 1,
  class: "flex items-center justify-center py-8"
};
const _hoisted_6 = {
  key: 2,
  class: "space-y-2"
};
const _hoisted_7 = { class: "flex items-center justify-between text-sm" };
const _hoisted_8 = { class: "flex items-center gap-2" };
const _hoisted_9 = ["disabled"];
const _hoisted_10 = {
  key: 0,
  class: "text-center py-8 text-gray-400"
};
const _hoisted_11 = { key: 3 };
const _hoisted_12 = {
  key: 0,
  class: "text-center py-16"
};
const _hoisted_13 = { class: "inline-flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30" };
const _hoisted_14 = { class: "text-left" };
const _hoisted_15 = { class: "mt-3 bg-white/10 rounded-full h-2 w-64 overflow-hidden" };
const _hoisted_16 = { key: 4 };
const _hoisted_17 = {
  key: 0,
  class: "text-center py-16"
};
const _hoisted_18 = { class: "inline-flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30" };
const _hoisted_19 = { class: "text-left" };
const _hoisted_20 = { class: "mt-3 bg-white/10 rounded-full h-2 w-64 overflow-hidden" };
const _hoisted_21 = {
  key: 5,
  class: "fixed top-20 right-6 z-50 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-lg shadow-2xl max-w-md animate-pulse"
};
const _hoisted_22 = { class: "flex items-center gap-4" };
const _hoisted_23 = { class: "flex-1" };
const _hoisted_24 = { class: "mt-2 bg-white/20 rounded-full h-2 overflow-hidden" };
const _hoisted_25 = { class: "text-sm mt-1 text-white/80" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LogViewPage",
  setup(__props) {
    const lv = useLogView();
    const themeStore = useThemeStore();
    const filteredCount = computed(() => {
      if (lv.isSearchMode.value) {
        return lv.visibleItems.value.length;
      }
      return lv.totalCount.value;
    });
    const cacheInfo = computed(() => lv.getCacheInfo());
    const treeNodeCount = computed(() => lv.treeNodes.value.length);
    const currentStatusCode = computed(() => lv.filters.statusCodes?.join(",") || "");
    const currentClientIP = computed(() => lv.filters.ip || "");
    const currentUserAgent = computed(() => lv.filters.userAgent || "");
    const currentMethod = computed(() => lv.filters.methods?.join(",") || "");
    function handleClearFilters() {
      Object.keys(lv.filters).forEach((key) => {
        lv.filters[key] = void 0;
      });
      lv.searchTerm.value = "";
      lv.currentPage.value = 1;
    }
    function handleClearCache() {
      lv.clearCache();
    }
    function handleSaveFilter(name, filterData) {
      const savedFilters = JSON.parse(localStorage.getItem("fastwlat.saved.filters") || "[]");
      savedFilters.push({ name, filters: filterData, createdAt: (/* @__PURE__ */ new Date()).toISOString() });
      localStorage.setItem("fastwlat.saved.filters", JSON.stringify(savedFilters));
    }
    function handleLoadFilter(filterData) {
      if (filterData.searchTerm) lv.searchTerm.value = filterData.searchTerm;
      if (filterData.advanced) {
        Object.assign(lv.filters, filterData.advanced);
      }
      lv.currentPage.value = 1;
    }
    function updateStatusCode(value) {
      if (value) {
        lv.filters.statusCodes = value.split(",").map((s) => parseInt(s.trim())).filter((n) => !isNaN(n));
      } else {
        lv.filters.statusCodes = void 0;
      }
    }
    function updateClientIP(value) {
      if (value) {
        lv.filters.ip = value;
      } else {
        lv.filters.ip = void 0;
      }
    }
    function updateUserAgent(value) {
      if (value) {
        lv.filters.userAgent = value;
      } else {
        lv.filters.userAgent = void 0;
      }
    }
    function updateMethod(value) {
      if (value) {
        lv.filters.methods = value.split(",").map((s) => s.trim()).filter((s) => s);
      } else {
        lv.filters.methods = void 0;
      }
    }
    function handleViewDetails(path, filters) {
      console.log("[LogViewPage] View details for path:", path, "filters:", filters);
      lv.viewMode.value = "list";
      lv.searchTerm.value = "";
      lv.filters.path = path;
      if (filters.statusCodes && filters.statusCodes.length > 0) {
        lv.filters.statusCodes = [parseInt(filters.statusCodes[0])];
      }
      if (filters.methods && filters.methods.length > 0) {
        lv.filters.methods = [filters.methods[0]];
      }
      lv.load();
    }
    function handleAdvancedFilter(advancedFilters) {
      console.log("[LogViewPage] Handling advanced filters:", advancedFilters);
      const beforeFiltersCount = lv.totalCount.value;
      console.log("[LogViewPage] Current items before filtering:", beforeFiltersCount);
      Object.keys(lv.filters).forEach((key) => {
        if (!["statusCodes", "methods", "ip", "path", "userAgent", "referer", "queryString"].includes(key)) {
          lv.filters[key] = void 0;
        }
      });
      if (advancedFilters.dateRange && advancedFilters.dateRange.start && advancedFilters.dateRange.end) {
        lv.filters.timeRange = {
          startTime: advancedFilters.dateRange.start instanceof Date ? advancedFilters.dateRange.start.getTime() : advancedFilters.dateRange.start,
          endTime: advancedFilters.dateRange.end instanceof Date ? advancedFilters.dateRange.end.getTime() : advancedFilters.dateRange.end
        };
        console.log("[LogViewPage] Applied time range filter:", lv.filters.timeRange);
        console.log("[LogViewPage] Time range dates:", {
          start: new Date(lv.filters.timeRange.startTime),
          end: new Date(lv.filters.timeRange.endTime)
        });
      } else {
        lv.filters.timeRange = void 0;
      }
      if (advancedFilters.responseTimeRange) {
        lv.filters.responseTimeRange = advancedFilters.responseTimeRange;
        console.log("[LogViewPage] Applied response time range filter:", lv.filters.responseTimeRange);
      } else {
        lv.filters.responseTimeRange = void 0;
      }
      if (advancedFilters.bodyBytesRange) {
        lv.filters.sizeRange = advancedFilters.bodyBytesRange;
        console.log("[LogViewPage] Applied size range filter:", lv.filters.sizeRange);
      } else {
        lv.filters.sizeRange = void 0;
      }
      if (advancedFilters.threatLevel && advancedFilters.threatLevel.length > 0) {
        lv.filters.threatLevels = advancedFilters.threatLevel;
        console.log("[LogViewPage] Applied threat levels filter:", lv.filters.threatLevels);
      } else {
        lv.filters.threatLevels = void 0;
      }
      if (advancedFilters.customFields && advancedFilters.customFields.length > 0) {
        lv.filters.customFields = advancedFilters.customFields;
        console.log("[LogViewPage] Applied custom fields filter:", lv.filters.customFields);
      } else {
        lv.filters.customFields = void 0;
      }
      if (advancedFilters.excludePatterns && advancedFilters.excludePatterns.length > 0) {
        lv.filters.excludePatterns = advancedFilters.excludePatterns;
        console.log("[LogViewPage] Applied exclude patterns filter:", lv.filters.excludePatterns);
      } else {
        lv.filters.excludePatterns = void 0;
      }
      if (advancedFilters.includeOnlyPatterns && advancedFilters.includeOnlyPatterns.length > 0) {
        lv.filters.includeOnlyPatterns = advancedFilters.includeOnlyPatterns;
        console.log("[LogViewPage] Applied include patterns filter:", lv.filters.includeOnlyPatterns);
      } else {
        lv.filters.includeOnlyPatterns = void 0;
      }
      if (advancedFilters.excludeStatusCodes && advancedFilters.excludeStatusCodes.length > 0) {
        lv.filters.excludeStatusCodes = advancedFilters.excludeStatusCodes;
        console.log("[LogViewPage] Applied exclude status codes filter:", lv.filters.excludeStatusCodes);
      } else {
        lv.filters.excludeStatusCodes = void 0;
      }
      if (advancedFilters.useRegex !== void 0) {
        lv.isRegexSearch.value = advancedFilters.useRegex;
        console.log("[LogViewPage] Set regex search:", lv.isRegexSearch.value);
      }
      console.log("[LogViewPage] Final filters:", JSON.stringify(lv.filters, null, 2));
      console.log("[LogViewPage] Is search mode active:", lv.isSearchMode.value);
      lv.load();
      setTimeout(() => {
        console.log("[LogViewPage] After filtering - total items:", lv.totalCount.value);
        console.log("[LogViewPage] After filtering - visible items:", lv.visibleItems.value.length);
      }, 100);
    }
    async function exportCurrentView() {
      try {
        const dataToExport = lv.allItems?.value || lv.visibleItems.value;
        if (dataToExport.length === 0) {
          alert("没有可导出的数据");
          return;
        }
        const viewModeText = lv.viewMode.value === "list" ? "列表" : lv.viewMode.value === "tree" ? "树状" : "分析";
        const filename = `日志数据_${viewModeText}视图_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}`;
        await exportService.exportToCSV(dataToExport, filename);
        console.log(`[LogViewPage] Exported ${dataToExport.length} records`);
      } catch (error) {
        console.error("[LogViewPage] Export failed:", error);
        alert("导出失败，请重试");
      }
    }
    onMounted(() => {
      lv.init();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$9, {
          type: "page",
          class: "space-y-3"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              _cache[14] || (_cache[14] = createBaseVNode("div", { class: "text-xl font-semibold text-white" }, "日志浏览", -1)),
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("button", {
                    onClick: exportCurrentView,
                    class: normalizeClass([
                      "text-sm flex items-center gap-2",
                      unref(themeStore).themeClasses.buttonStyle,
                      "px-3 py-2 text-white rounded-lg transition-colors"
                    ]),
                    title: "导出当前视图数据"
                  }, _cache[10] || (_cache[10] = [
                    createBaseVNode("i", { class: "pi pi-download text-sm" }, null, -1),
                    createBaseVNode("span", null, "导出", -1)
                  ]), 2)
                ]),
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("button", {
                    class: normalizeClass([
                      "flex items-center gap-1 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200",
                      unref(lv).viewMode.value === "list" ? "bg-blue-500 text-white shadow-lg" : "text-gray-300 hover:text-white hover:bg-white/10"
                    ]),
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(lv).viewMode.value = "list")
                  }, _cache[11] || (_cache[11] = [
                    createBaseVNode("i", { class: "pi pi-list text-sm" }, null, -1),
                    createBaseVNode("span", null, "列表", -1)
                  ]), 2),
                  createBaseVNode("button", {
                    class: normalizeClass([
                      "flex items-center gap-1 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200",
                      unref(lv).viewMode.value === "tree" ? "bg-blue-500 text-white shadow-lg" : "text-gray-300 hover:text-white hover:bg-white/10"
                    ]),
                    onClick: _cache[1] || (_cache[1] = ($event) => unref(lv).viewMode.value = "tree")
                  }, _cache[12] || (_cache[12] = [
                    createBaseVNode("i", { class: "pi pi-sitemap text-sm" }, null, -1),
                    createBaseVNode("span", null, "树状", -1)
                  ]), 2),
                  createBaseVNode("button", {
                    class: normalizeClass([
                      "flex items-center gap-1 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200",
                      unref(lv).viewMode.value === "analysis" ? "bg-blue-500 text-white shadow-lg" : "text-gray-300 hover:text-white hover:bg-white/10"
                    ]),
                    onClick: _cache[2] || (_cache[2] = ($event) => unref(lv).viewMode.value = "analysis")
                  }, _cache[13] || (_cache[13] = [
                    createBaseVNode("i", { class: "pi pi-chart-line text-sm" }, null, -1),
                    createBaseVNode("span", null, "分析", -1)
                  ]), 2)
                ])
              ])
            ]),
            unref(lv).totalCount.value >= 0 ? (openBlock(), createBlock(_sfc_main$8, {
              key: 0,
              "search-term": unref(lv).searchTerm.value,
              "is-regex-search": unref(lv).isRegexSearch.value,
              "search-field": unref(lv).searchField.value,
              "status-code": currentStatusCode.value,
              "client-i-p": currentClientIP.value,
              "user-agent": currentUserAgent.value,
              method: currentMethod.value,
              "total-logs": unref(lv).totalCount.value,
              "filtered-count": filteredCount.value,
              filters: unref(lv).filters,
              "onUpdate:searchTerm": _cache[3] || (_cache[3] = (v) => unref(lv).searchTerm.value = v),
              "onUpdate:isRegexSearch": _cache[4] || (_cache[4] = (v) => unref(lv).isRegexSearch.value = v),
              "onUpdate:searchField": _cache[5] || (_cache[5] = (v) => unref(lv).searchField.value = v),
              "onUpdate:filters": _cache[6] || (_cache[6] = (v) => Object.assign(unref(lv).filters, v)),
              onAdvancedFilter: handleAdvancedFilter,
              onClearFilters: handleClearFilters,
              onSaveFilter: handleSaveFilter,
              onLoadFilter: handleLoadFilter,
              "onUpdate:statusCode": updateStatusCode,
              "onUpdate:clientIP": updateClientIP,
              "onUpdate:userAgent": updateUserAgent,
              "onUpdate:method": updateMethod
            }, null, 8, ["search-term", "is-regex-search", "search-field", "status-code", "client-i-p", "user-agent", "method", "total-logs", "filtered-count", "filters"])) : createCommentVNode("", true),
            unref(lv).isLoading && unref(lv).isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_5, _cache[15] || (_cache[15] = [
              createBaseVNode("div", { class: "flex items-center gap-3 text-blue-400" }, [
                createBaseVNode("div", { class: "animate-spin w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full" }),
                createBaseVNode("span", null, "数据加载中，请稍候...")
              ], -1)
            ]))) : createCommentVNode("", true),
            unref(lv).viewMode.value === "list" ? (openBlock(), createElementBlock("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", null, "共 " + toDisplayString(unref(lv).totalCount.value) + " 条", 1),
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("button", {
                    disabled: unref(lv).currentPage.value <= 1,
                    class: "px-2 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors",
                    onClick: _cache[7] || (_cache[7] = ($event) => unref(lv).currentPage.value = Math.max(1, unref(lv).currentPage.value - 1))
                  }, " 上一页 ", 8, _hoisted_9),
                  createBaseVNode("span", null, "第 " + toDisplayString(unref(lv).currentPage.value) + " 页", 1),
                  createBaseVNode("button", {
                    class: "px-2 py-1 border rounded hover:bg-white/10 transition-colors",
                    onClick: _cache[8] || (_cache[8] = ($event) => unref(lv).currentPage.value = unref(lv).currentPage.value + 1)
                  }, " 下一页 "),
                  withDirectives(createBaseVNode("select", {
                    class: "border px-2 py-1 rounded bg-white/10 text-white",
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(lv).pageSize.value = $event)
                  }, _cache[16] || (_cache[16] = [
                    createBaseVNode("option", { value: 50 }, "50条/页", -1),
                    createBaseVNode("option", { value: 100 }, "100条/页", -1),
                    createBaseVNode("option", { value: 500 }, "500条/页", -1),
                    createBaseVNode("option", { value: 1e3 }, "1000条/页", -1),
                    createBaseVNode("option", { value: 5e3 }, "5000条/页", -1),
                    createBaseVNode("option", { value: 1e4 }, "全量显示", -1)
                  ]), 512), [
                    [
                      vModelSelect,
                      unref(lv).pageSize.value,
                      void 0,
                      { number: true }
                    ]
                  ])
                ])
              ]),
              unref(lv).visibleItems.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_10, _cache[17] || (_cache[17] = [
                createBaseVNode("i", { class: "pi pi-inbox text-4xl mb-2" }, null, -1),
                createBaseVNode("div", { class: "text-lg" }, "暂无数据", -1),
                createBaseVNode("div", { class: "text-sm" }, "请调整过滤条件或导入日志文件", -1)
              ]))) : (openBlock(), createBlock(_sfc_main$7, {
                key: 1,
                items: unref(lv).visibleItems.value
              }, null, 8, ["items"]))
            ])) : unref(lv).viewMode.value === "tree" ? (openBlock(), createElementBlock("div", _hoisted_11, [
              unref(lv).isIndexedDBLoading?.value && unref(lv).dataMode?.value === "indexedDB" ? (openBlock(), createElementBlock("div", _hoisted_12, [
                createBaseVNode("div", _hoisted_13, [
                  _cache[20] || (_cache[20] = createBaseVNode("i", { class: "pi pi-spin pi-spinner text-4xl text-blue-400" }, null, -1)),
                  createBaseVNode("div", _hoisted_14, [
                    _cache[18] || (_cache[18] = createBaseVNode("div", { class: "text-xl font-semibold text-white" }, "正在加载数据...", -1)),
                    _cache[19] || (_cache[19] = createBaseVNode("div", { class: "text-sm text-gray-300 mt-1" }, "IndexedDB模式 - 树状视图", -1)),
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("div", {
                        class: "bg-blue-400 h-full transition-all duration-300",
                        style: normalizeStyle({ width: `${unref(lv).indexedDBLoadingProgress?.value || 0}%` })
                      }, null, 4)
                    ])
                  ])
                ])
              ])) : (openBlock(), createBlock(_sfc_main$2, {
                key: 1,
                items: unref(lv).allItems?.value || unref(lv).visibleItems.value,
                "max-children-display": 1e3
              }, null, 8, ["items"]))
            ])) : unref(lv).viewMode.value === "analysis" ? (openBlock(), createElementBlock("div", _hoisted_16, [
              unref(lv).isIndexedDBLoading?.value && unref(lv).dataMode?.value === "indexedDB" ? (openBlock(), createElementBlock("div", _hoisted_17, [
                createBaseVNode("div", _hoisted_18, [
                  _cache[23] || (_cache[23] = createBaseVNode("i", { class: "pi pi-spin pi-spinner text-4xl text-blue-400" }, null, -1)),
                  createBaseVNode("div", _hoisted_19, [
                    _cache[21] || (_cache[21] = createBaseVNode("div", { class: "text-xl font-semibold text-white" }, "正在加载数据...", -1)),
                    _cache[22] || (_cache[22] = createBaseVNode("div", { class: "text-sm text-gray-300 mt-1" }, "IndexedDB模式 - 分析视图", -1)),
                    createBaseVNode("div", _hoisted_20, [
                      createBaseVNode("div", {
                        class: "bg-blue-400 h-full transition-all duration-300",
                        style: normalizeStyle({ width: `${unref(lv).indexedDBLoadingProgress?.value || 0}%` })
                      }, null, 4)
                    ])
                  ])
                ])
              ])) : (openBlock(), createBlock(_sfc_main$5, {
                key: 1,
                items: unref(lv).allItems?.value || unref(lv).visibleItems.value,
                onViewDetails: handleViewDetails
              }, null, 8, ["items"]))
            ])) : createCommentVNode("", true),
            unref(lv).isIndexedDBLoading?.value && unref(lv).dataMode?.value === "indexedDB" ? (openBlock(), createElementBlock("div", _hoisted_21, [
              createBaseVNode("div", _hoisted_22, [
                _cache[25] || (_cache[25] = createBaseVNode("i", { class: "pi pi-spin pi-spinner text-2xl" }, null, -1)),
                createBaseVNode("div", _hoisted_23, [
                  _cache[24] || (_cache[24] = createBaseVNode("div", { class: "font-semibold text-lg" }, "加载中...", -1)),
                  createBaseVNode("div", _hoisted_24, [
                    createBaseVNode("div", {
                      class: "bg-white h-full transition-all duration-300",
                      style: normalizeStyle({ width: `${unref(lv).indexedDBLoadingProgress?.value || 0}%` })
                    }, null, 4)
                  ]),
                  createBaseVNode("div", _hoisted_25, toDisplayString(unref(lv).indexedDBLoadingProgress?.value || 0) + "%", 1)
                ])
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_sfc_main$1, {
          "cache-info": cacheInfo.value,
          "visible-count": unref(lv).visibleItems.value.length,
          "total-count": unref(lv).totalCount.value,
          "tree-node-count": treeNodeCount.value,
          "data-mode": unref(lv).dataMode.value,
          onClearCache: handleClearCache
        }, null, 8, ["cache-info", "visible-count", "total-count", "tree-node-count", "data-mode"])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
