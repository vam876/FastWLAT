import { d as defineComponent, l as useThemeStore, m as ref, c as computed, h as onMounted, j as createBlock, w as withCtx, e as createBaseVNode, a as createElementBlock, E as withDirectives, I as vModelSelect, n as normalizeClass, p as unref, g as createTextVNode, t as toDisplayString, f as createCommentVNode, F as Fragment, r as renderList, q as normalizeStyle, o as openBlock } from "./index-FPjz1pj-.js";
import { u as useMemoryStore } from "./memoryStore-DY1yPL7M.js";
import { b as getLogDataCount, c as getLogDataForComputed, g as getLogData } from "./dataSourceUtils-IiewxtUB.js";
import { _ as _sfc_main$1 } from "./ThemeContainer.vue_vue_type_script_setup_true_lang-CmUDCaT3.js";
import "./indexedDBStore-vYrXL9Qh.js";
const _hoisted_1 = { class: "flex items-center justify-between" };
const _hoisted_2 = { class: "flex items-center gap-3" };
const _hoisted_3 = {
  key: 0,
  class: "text-center py-12"
};
const _hoisted_4 = {
  key: 1,
  class: "space-y-6"
};
const _hoisted_5 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" };
const _hoisted_6 = { class: "p-6 bg-white/5 rounded-xl border border-white/10" };
const _hoisted_7 = { class: "text-2xl font-bold text-white" };
const _hoisted_8 = { class: "p-6 bg-white/5 rounded-xl border border-white/10" };
const _hoisted_9 = { class: "text-2xl font-bold text-white" };
const _hoisted_10 = { class: "p-6 bg-white/5 rounded-xl border border-white/10" };
const _hoisted_11 = { class: "text-2xl font-bold text-white" };
const _hoisted_12 = { class: "p-6 bg-white/5 rounded-xl border border-white/10" };
const _hoisted_13 = { class: "text-2xl font-bold text-white" };
const _hoisted_14 = { class: "p-6 bg-white/5 rounded-xl border border-white/10" };
const _hoisted_15 = {
  key: 0,
  class: "text-sm font-bold text-white"
};
const _hoisted_16 = {
  key: 1,
  class: "text-xs text-gray-500 mt-1"
};
const _hoisted_17 = { class: "bg-white/5 rounded-xl border border-white/10" };
const _hoisted_18 = { class: "border-b border-white/10" };
const _hoisted_19 = { class: "flex space-x-8 px-6 py-4 overflow-x-auto" };
const _hoisted_20 = ["onClick"];
const _hoisted_21 = { class: "p-6" };
const _hoisted_22 = {
  key: 0,
  class: "space-y-4"
};
const _hoisted_23 = { class: "flex items-center justify-between mb-4" };
const _hoisted_24 = { class: "flex items-center gap-2 bg-white/10 rounded overflow-hidden" };
const _hoisted_25 = { class: "overflow-x-auto" };
const _hoisted_26 = { class: "w-full" };
const _hoisted_27 = { class: "py-3 px-4 text-white font-mono" };
const _hoisted_28 = { class: "py-3 px-4 text-white" };
const _hoisted_29 = { class: "py-3 px-4 text-gray-300" };
const _hoisted_30 = { class: "py-3 px-4 text-gray-300" };
const _hoisted_31 = { class: "py-3 px-4 text-gray-300 text-sm" };
const _hoisted_32 = { class: "py-3 px-4 text-gray-300 text-sm" };
const _hoisted_33 = {
  key: 0,
  class: "text-center pt-4"
};
const _hoisted_34 = { class: "text-xs text-gray-400 mt-2" };
const _hoisted_35 = {
  key: 1,
  class: "space-y-4"
};
const _hoisted_36 = { class: "flex items-center justify-between mb-4" };
const _hoisted_37 = { class: "flex items-center gap-2 bg-white/10 rounded overflow-hidden" };
const _hoisted_38 = { class: "overflow-x-auto" };
const _hoisted_39 = { class: "w-full" };
const _hoisted_40 = ["title"];
const _hoisted_41 = { class: "py-3 px-4 text-white" };
const _hoisted_42 = { class: "py-3 px-4 text-gray-300" };
const _hoisted_43 = { class: "py-3 px-4 text-gray-300" };
const _hoisted_44 = { class: "py-3 px-4 text-gray-300" };
const _hoisted_45 = {
  key: 0,
  class: "text-center pt-4"
};
const _hoisted_46 = { class: "text-xs text-gray-400 mt-2" };
const _hoisted_47 = {
  key: 2,
  class: "space-y-4"
};
const _hoisted_48 = { class: "overflow-x-auto" };
const _hoisted_49 = { class: "w-full" };
const _hoisted_50 = { class: "py-3 px-4 text-white font-mono" };
const _hoisted_51 = { class: "py-3 px-4 text-white" };
const _hoisted_52 = { class: "py-3 px-4 text-orange-400" };
const _hoisted_53 = {
  key: 3,
  class: "space-y-4"
};
const _hoisted_54 = { class: "flex items-center justify-between mb-4" };
const _hoisted_55 = { class: "flex items-center gap-2 bg-white/10 rounded overflow-hidden" };
const _hoisted_56 = { class: "overflow-x-auto" };
const _hoisted_57 = { class: "w-full" };
const _hoisted_58 = ["title"];
const _hoisted_59 = { class: "py-3 px-4 text-white" };
const _hoisted_60 = { class: "py-3 px-4" };
const _hoisted_61 = {
  key: 0,
  class: "text-center pt-4"
};
const _hoisted_62 = { class: "text-xs text-gray-400 mt-2" };
const _hoisted_63 = {
  key: 4,
  class: "space-y-4"
};
const _hoisted_64 = { class: "flex items-center justify-between mb-4" };
const _hoisted_65 = { class: "flex items-center gap-2 bg-white/10 rounded overflow-hidden" };
const _hoisted_66 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" };
const _hoisted_67 = { class: "flex items-center justify-between mb-2" };
const _hoisted_68 = { class: "text-gray-400 text-sm" };
const _hoisted_69 = { class: "text-white font-semibold" };
const _hoisted_70 = { class: "w-full bg-white/10 rounded-full h-2 mt-2" };
const _hoisted_71 = {
  key: 0,
  class: "text-center pt-4"
};
const _hoisted_72 = { class: "text-xs text-gray-400 mt-2" };
const _hoisted_73 = {
  key: 5,
  class: "space-y-4"
};
const _hoisted_74 = { class: "flex items-center justify-between mb-4" };
const _hoisted_75 = { class: "flex items-center gap-2 bg-white/10 rounded overflow-hidden" };
const _hoisted_76 = { class: "overflow-x-auto" };
const _hoisted_77 = { class: "w-full" };
const _hoisted_78 = ["title"];
const _hoisted_79 = { class: "py-3 px-4 text-white" };
const _hoisted_80 = { class: "py-3 px-4 text-white" };
const _hoisted_81 = { class: "py-3 px-4 text-white" };
const _hoisted_82 = { class: "py-3 px-4" };
const _hoisted_83 = {
  key: 0,
  class: "text-center pt-4"
};
const _hoisted_84 = { class: "text-xs text-gray-400 mt-2" };
const _hoisted_85 = {
  key: 6,
  class: "space-y-4"
};
const _hoisted_86 = { class: "flex items-center justify-between mb-4" };
const _hoisted_87 = { class: "flex items-center gap-2 bg-white/10 rounded overflow-hidden" };
const _hoisted_88 = { class: "overflow-x-auto" };
const _hoisted_89 = { class: "w-full" };
const _hoisted_90 = { class: "py-3 px-4 text-white" };
const _hoisted_91 = { class: "py-3 px-4 text-white" };
const _hoisted_92 = { class: "py-3 px-4 text-white" };
const _hoisted_93 = { class: "py-3 px-4 text-white" };
const _hoisted_94 = { class: "py-3 px-4" };
const _hoisted_95 = {
  key: 0,
  class: "text-center pt-4"
};
const _hoisted_96 = { class: "text-xs text-gray-400 mt-2" };
const _hoisted_97 = {
  key: 7,
  class: "space-y-4"
};
const _hoisted_98 = { class: "flex items-center justify-between mb-4" };
const _hoisted_99 = { class: "flex items-center gap-2 bg-white/10 rounded overflow-hidden" };
const _hoisted_100 = { class: "overflow-x-auto" };
const _hoisted_101 = { class: "w-full" };
const _hoisted_102 = { class: "py-3 px-4 text-white" };
const _hoisted_103 = { class: "py-3 px-4 text-gray-400" };
const _hoisted_104 = { class: "py-3 px-4 text-white" };
const _hoisted_105 = { class: "py-3 px-4 text-white" };
const _hoisted_106 = { class: "py-3 px-4 text-white" };
const _hoisted_107 = { class: "py-3 px-4" };
const _hoisted_108 = {
  key: 0,
  class: "text-center pt-4"
};
const _hoisted_109 = { class: "text-xs text-gray-400 mt-2" };
const _hoisted_110 = {
  key: 8,
  class: "space-y-4"
};
const _hoisted_111 = { class: "flex items-center justify-between mb-4" };
const _hoisted_112 = { class: "flex items-center gap-2 bg-white/10 rounded overflow-hidden" };
const _hoisted_113 = { class: "overflow-x-auto" };
const _hoisted_114 = { class: "w-full" };
const _hoisted_115 = { class: "py-3 px-4 text-white font-mono" };
const _hoisted_116 = { class: "py-3 px-4 text-gray-400" };
const _hoisted_117 = { class: "py-3 px-4 text-white" };
const _hoisted_118 = { class: "py-3 px-4 text-white" };
const _hoisted_119 = { class: "py-3 px-4 text-white" };
const _hoisted_120 = { class: "py-3 px-4" };
const _hoisted_121 = {
  key: 0,
  class: "text-center pt-4"
};
const _hoisted_122 = { class: "text-xs text-gray-400 mt-2" };
const _hoisted_123 = {
  key: 9,
  class: "space-y-6"
};
const _hoisted_124 = { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" };
const _hoisted_125 = { class: "bg-white/5 rounded-lg border border-white/10 p-4" };
const _hoisted_126 = { class: "space-y-2" };
const _hoisted_127 = { class: "flex items-center gap-3" };
const _hoisted_128 = { class: "text-gray-400 text-sm w-6" };
const _hoisted_129 = { class: "text-white font-mono" };
const _hoisted_130 = { class: "text-blue-400 font-semibold" };
const _hoisted_131 = { class: "bg-white/5 rounded-lg border border-white/10 p-4" };
const _hoisted_132 = { class: "space-y-2" };
const _hoisted_133 = { class: "flex items-center gap-3" };
const _hoisted_134 = { class: "text-gray-400 text-sm w-6" };
const _hoisted_135 = ["title"];
const _hoisted_136 = { class: "text-green-400 font-semibold" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AnalysisPage",
  setup(__props) {
    useMemoryStore();
    const themeStore = useThemeStore();
    const loading = ref(true);
    const timeRange = ref("24h");
    const selectedTab = ref("overview");
    const sortConfig = ref({ field: "count", direction: "desc", tab: "overview" });
    const displayLimits = ref({
      ipAnalysis: 20,
      pathAnalysis: 20,
      userAgentAnalysis: 20,
      statusCodeAnalysis: 20,
      sourceAnalysis: 20,
      countryAnalysis: 20,
      cityAnalysis: 20,
      asnAnalysis: 20
    });
    const ipAnalysis = ref([]);
    const pathAnalysis = ref([]);
    const timeSeriesData = ref([]);
    const userAgentAnalysis = ref([]);
    const statusCodeAnalysis = ref([]);
    const sourceAnalysis = ref([]);
    const countryAnalysis = ref([]);
    const cityAnalysis = ref([]);
    const asnAnalysis = ref([]);
    const totalLogs = computed(() => {
      const count = getLogDataCount();
      if (count > 0) return count;
      if (ipAnalysis.value.length > 0) {
        return ipAnalysis.value.reduce((sum, item) => sum + item.count, 0);
      }
      return 0;
    });
    const uniqueIPs = computed(() => {
      const logs = getLogDataForComputed();
      if (logs.length > 0) {
        return new Set(logs.map((log) => log.ip)).size;
      }
      return ipAnalysis.value.length;
    });
    const dateRange = computed(() => {
      const logs = getLogDataForComputed();
      if (logs.length > 0) {
        const dates = logs.map((log) => log.timestamp).sort((a, b) => a.getTime() - b.getTime());
        return {
          start: dates[0],
          end: dates[dates.length - 1]
        };
      }
      if (ipAnalysis.value.length > 0) {
        const allDates = ipAnalysis.value.flatMap((item) => [item.firstSeen, item.lastSeen]);
        allDates.sort((a, b) => a.getTime() - b.getTime());
        return {
          start: allDates[0],
          end: allDates[allDates.length - 1]
        };
      }
      return null;
    });
    const avgResponseSize = computed(() => {
      const logs = getLogDataForComputed();
      if (logs.length > 0) {
        return logs.reduce((sum, log) => sum + log.responseSize, 0) / logs.length;
      }
      if (ipAnalysis.value.length > 0) {
        const totalBytes = ipAnalysis.value.reduce((sum, item) => sum + item.totalBytes, 0);
        const totalRequests = ipAnalysis.value.reduce((sum, item) => sum + item.count, 0);
        return totalRequests > 0 ? totalBytes / totalRequests : 0;
      }
      return 0;
    });
    const errorRate = computed(() => {
      const logs = getLogDataForComputed();
      if (logs.length > 0) {
        const errorCount = logs.filter((log) => log.statusCode >= 400).length;
        return errorCount / logs.length * 100;
      }
      if (statusCodeAnalysis.value.length > 0) {
        const errorCodes = statusCodeAnalysis.value.filter((item) => item.statusCode >= 400);
        const totalErrors = errorCodes.reduce((sum, item) => sum + item.count, 0);
        const totalRequests = statusCodeAnalysis.value.reduce((sum, item) => sum + item.count, 0);
        return totalRequests > 0 ? totalErrors / totalRequests * 100 : 0;
      }
      return 0;
    });
    const sortedIpAnalysis = computed(() => {
      if (selectedTab.value !== "ips" && sortConfig.value.tab !== "ips") return ipAnalysis.value;
      return [...ipAnalysis.value].sort((a, b) => {
        const field = sortConfig.value.field;
        const aVal = a[field];
        const bVal = b[field];
        const result = typeof aVal === "string" ? aVal.localeCompare(bVal) : aVal - bVal;
        return sortConfig.value.direction === "desc" ? -result : result;
      });
    });
    const sortedPathAnalysis = computed(() => {
      if (selectedTab.value !== "paths" && sortConfig.value.tab !== "paths") return pathAnalysis.value;
      return [...pathAnalysis.value].sort((a, b) => {
        const field = sortConfig.value.field;
        const aVal = a[field];
        const bVal = b[field];
        const result = typeof aVal === "string" ? aVal.localeCompare(bVal) : aVal - bVal;
        return sortConfig.value.direction === "desc" ? -result : result;
      });
    });
    const sortedUserAgentAnalysis = computed(() => {
      if (selectedTab.value !== "useragents" && sortConfig.value.tab !== "useragents") return userAgentAnalysis.value;
      return [...userAgentAnalysis.value].sort((a, b) => {
        const field = sortConfig.value.field;
        const aVal = a[field];
        const bVal = b[field];
        const result = typeof aVal === "string" ? aVal.localeCompare(bVal) : aVal - bVal;
        return sortConfig.value.direction === "desc" ? -result : result;
      });
    });
    const sortedStatusCodeAnalysis = computed(() => {
      if (selectedTab.value !== "status" && sortConfig.value.tab !== "status") return statusCodeAnalysis.value;
      return [...statusCodeAnalysis.value].sort((a, b) => {
        const field = sortConfig.value.field;
        const aVal = a[field];
        const bVal = b[field];
        const result = typeof aVal === "string" ? aVal.localeCompare(bVal) : aVal - bVal;
        return sortConfig.value.direction === "desc" ? -result : result;
      });
    });
    const sortedSourceAnalysis = computed(() => {
      if (selectedTab.value !== "source" && sortConfig.value.tab !== "source") return sourceAnalysis.value;
      return [...sourceAnalysis.value].sort((a, b) => {
        const field = sortConfig.value.field;
        const aVal = a[field];
        const bVal = b[field];
        const result = typeof aVal === "string" ? aVal.localeCompare(bVal) : aVal - bVal;
        return sortConfig.value.direction === "desc" ? -result : result;
      });
    });
    const sortedCountryAnalysis = computed(() => {
      if (selectedTab.value !== "country" && sortConfig.value.tab !== "country") return countryAnalysis.value;
      return [...countryAnalysis.value].sort((a, b) => {
        const field = sortConfig.value.field;
        const aVal = a[field];
        const bVal = b[field];
        const result = typeof aVal === "string" ? aVal.localeCompare(bVal) : aVal - bVal;
        return sortConfig.value.direction === "desc" ? -result : result;
      });
    });
    const sortedCityAnalysis = computed(() => {
      if (selectedTab.value !== "city" && sortConfig.value.tab !== "city") return cityAnalysis.value;
      return [...cityAnalysis.value].sort((a, b) => {
        const field = sortConfig.value.field;
        const aVal = a[field];
        const bVal = b[field];
        const result = typeof aVal === "string" ? aVal.localeCompare(bVal) : aVal - bVal;
        return sortConfig.value.direction === "desc" ? -result : result;
      });
    });
    const sortedAsnAnalysis = computed(() => {
      if (selectedTab.value !== "asn" && sortConfig.value.tab !== "asn") return asnAnalysis.value;
      return [...asnAnalysis.value].sort((a, b) => {
        const field = sortConfig.value.field;
        const aVal = a[field];
        const bVal = b[field];
        const result = typeof aVal === "string" ? aVal.localeCompare(bVal) : aVal - bVal;
        return sortConfig.value.direction === "desc" ? -result : result;
      });
    });
    const displayedIpAnalysis = computed(() => sortedIpAnalysis.value.slice(0, displayLimits.value.ipAnalysis));
    const displayedPathAnalysis = computed(() => sortedPathAnalysis.value.slice(0, displayLimits.value.pathAnalysis));
    const displayedUserAgentAnalysis = computed(() => sortedUserAgentAnalysis.value.slice(0, displayLimits.value.userAgentAnalysis));
    const displayedStatusCodeAnalysis = computed(() => sortedStatusCodeAnalysis.value.slice(0, displayLimits.value.statusCodeAnalysis));
    const displayedSourceAnalysis = computed(() => sortedSourceAnalysis.value.slice(0, displayLimits.value.sourceAnalysis));
    const displayedCountryAnalysis = computed(() => sortedCountryAnalysis.value.slice(0, displayLimits.value.countryAnalysis));
    const displayedCityAnalysis = computed(() => sortedCityAnalysis.value.slice(0, displayLimits.value.cityAnalysis));
    const displayedAsnAnalysis = computed(() => sortedAsnAnalysis.value.slice(0, displayLimits.value.asnAnalysis));
    const hasMoreData = computed(() => ({
      ipAnalysis: sortedIpAnalysis.value.length > displayLimits.value.ipAnalysis,
      pathAnalysis: sortedPathAnalysis.value.length > displayLimits.value.pathAnalysis,
      userAgentAnalysis: sortedUserAgentAnalysis.value.length > displayLimits.value.userAgentAnalysis,
      statusCodeAnalysis: sortedStatusCodeAnalysis.value.length > displayLimits.value.statusCodeAnalysis,
      sourceAnalysis: sortedSourceAnalysis.value.length > displayLimits.value.sourceAnalysis,
      countryAnalysis: sortedCountryAnalysis.value.length > displayLimits.value.countryAnalysis,
      cityAnalysis: sortedCityAnalysis.value.length > displayLimits.value.cityAnalysis,
      asnAnalysis: sortedAsnAnalysis.value.length > displayLimits.value.asnAnalysis
    }));
    onMounted(async () => {
      await loadAnalysisData();
    });
    async function loadAnalysisData() {
      loading.value = true;
      try {
        const logs = await getLogData();
        if (logs.length === 0) {
          ipAnalysis.value = [];
          pathAnalysis.value = [];
          timeSeriesData.value = [];
          userAgentAnalysis.value = [];
          statusCodeAnalysis.value = [];
          sourceAnalysis.value = [];
          countryAnalysis.value = [];
          cityAnalysis.value = [];
          asnAnalysis.value = [];
          return;
        }
        analyzeIPs(logs);
        analyzePaths(logs);
        analyzeTimeSeries(logs);
        analyzeUserAgents(logs);
        analyzeStatusCodes(logs);
        analyzeSources(logs);
        analyzeCountries(logs);
        analyzeCities(logs);
        analyzeASNs(logs);
      } catch (error) {
        console.error("Failed to load analysis data:", error);
      } finally {
        loading.value = false;
      }
    }
    function analyzeIPs(logs) {
      const ipMap = /* @__PURE__ */ new Map();
      logs.forEach((log) => {
        const existing = ipMap.get(log.ip) || {
          count: 0,
          paths: /* @__PURE__ */ new Set(),
          totalBytes: 0,
          firstSeen: log.timestamp,
          lastSeen: log.timestamp
        };
        existing.count++;
        existing.paths.add(log.path);
        existing.totalBytes += log.responseSize;
        if (log.timestamp < existing.firstSeen) existing.firstSeen = log.timestamp;
        if (log.timestamp > existing.lastSeen) existing.lastSeen = log.timestamp;
        ipMap.set(log.ip, existing);
      });
      ipAnalysis.value = Array.from(ipMap.entries()).map(([ip, data]) => ({
        ip,
        count: data.count,
        uniquePaths: data.paths.size,
        totalBytes: data.totalBytes,
        firstSeen: data.firstSeen,
        lastSeen: data.lastSeen
      })).sort((a, b) => b.count - a.count).slice(0, 100);
    }
    function analyzePaths(logs) {
      const pathMap = /* @__PURE__ */ new Map();
      logs.forEach((log) => {
        const existing = pathMap.get(log.path) || {
          count: 0,
          ips: /* @__PURE__ */ new Set(),
          totalBytes: 0
        };
        existing.count++;
        existing.ips.add(log.ip);
        existing.totalBytes += log.responseSize;
        pathMap.set(log.path, existing);
      });
      pathAnalysis.value = Array.from(pathMap.entries()).map(([path, data]) => ({
        path,
        count: data.count,
        uniqueIPs: data.ips.size,
        totalBytes: data.totalBytes,
        avgResponseSize: data.totalBytes / data.count
      })).sort((a, b) => b.count - a.count).slice(0, 100);
    }
    function analyzeTimeSeries(logs) {
      const hourMap = /* @__PURE__ */ new Map();
      logs.forEach((log) => {
        if (!log.timestamp || isNaN(log.timestamp.getTime())) {
          console.warn("[AnalysisPage] Invalid timestamp found:", log.timestamp, "for log:", log.id);
          return;
        }
        const hour = log.timestamp.toISOString().slice(0, 13) + ":00";
        const existing = hourMap.get(hour) || { count: 0, errorCount: 0 };
        existing.count++;
        if (log.statusCode >= 400) {
          existing.errorCount++;
        }
        hourMap.set(hour, existing);
      });
      timeSeriesData.value = Array.from(hourMap.entries()).map(([hour, data]) => ({
        hour,
        count: data.count,
        errorCount: data.errorCount,
        errorRate: data.count > 0 ? data.errorCount / data.count * 100 : 0
      })).sort((a, b) => a.hour.localeCompare(b.hour));
    }
    function analyzeUserAgents(logs) {
      const uaMap = /* @__PURE__ */ new Map();
      logs.forEach((log) => {
        const ua = log.userAgent || "Unknown";
        uaMap.set(ua, (uaMap.get(ua) || 0) + 1);
      });
      userAgentAnalysis.value = Array.from(uaMap.entries()).map(([userAgent, count]) => ({
        userAgent,
        count,
        category: categorizeUserAgent(userAgent)
      })).sort((a, b) => b.count - a.count).slice(0, 20);
    }
    function analyzeStatusCodes(logs) {
      const statusMap = /* @__PURE__ */ new Map();
      logs.forEach((log) => {
        statusMap.set(log.statusCode, (statusMap.get(log.statusCode) || 0) + 1);
      });
      const total = logs.length;
      statusCodeAnalysis.value = Array.from(statusMap.entries()).map(([statusCode, count]) => ({
        statusCode,
        count,
        percentage: count / total * 100
      })).sort((a, b) => b.count - a.count);
    }
    function categorizeUserAgent(ua) {
      const lower = ua.toLowerCase();
      if (lower.includes("bot") || lower.includes("crawler") || lower.includes("spider")) {
        return "机器人";
      }
      if (lower.includes("mobile") || lower.includes("android") || lower.includes("iphone")) {
        return "移动设备";
      }
      if (lower.includes("chrome") || lower.includes("firefox") || lower.includes("safari") || lower.includes("edge")) {
        return "浏览器";
      }
      return "其他";
    }
    function formatBytes(bytes) {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    }
    function formatNumber(num) {
      return num.toLocaleString();
    }
    function formatDate(date) {
      return date.toLocaleString();
    }
    function setSortBy(tab, field) {
      if (sortConfig.value.tab === tab && sortConfig.value.field === field) {
        sortConfig.value.direction = sortConfig.value.direction === "desc" ? "asc" : "desc";
      } else {
        sortConfig.value = {
          tab,
          field,
          direction: field === "count" || field === "uniquePaths" || field === "totalBytes" || field === "percentage" ? "desc" : "asc"
        };
      }
    }
    function loadMore(tab) {
      displayLimits.value[tab] += 100;
    }
    function exportData() {
      const data = {
        overview: {
          totalLogs: totalLogs.value,
          uniqueIPs: uniqueIPs.value,
          errorRate: errorRate.value,
          avgResponseSize: avgResponseSize.value,
          dateRange: dateRange.value
        },
        ipAnalysis: ipAnalysis.value,
        pathAnalysis: pathAnalysis.value,
        timeSeriesData: timeSeriesData.value,
        userAgentAnalysis: userAgentAnalysis.value,
        statusCodeAnalysis: statusCodeAnalysis.value,
        sourceAnalysis: sourceAnalysis.value,
        countryAnalysis: countryAnalysis.value,
        cityAnalysis: cityAnalysis.value,
        asnAnalysis: asnAnalysis.value
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `log-analysis-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
    function analyzeSources(logs) {
      const sourceMap = /* @__PURE__ */ new Map();
      logs.forEach((log) => {
        const source = log.referer || "直接访问";
        const existing = sourceMap.get(source) || {
          count: 0,
          ips: /* @__PURE__ */ new Set(),
          totalBytes: 0,
          threatCount: 0
        };
        existing.count++;
        existing.ips.add(log.ip);
        existing.totalBytes += log.responseSize;
        if (log.threatLevel && log.threatLevel !== "normal") {
          existing.threatCount++;
        }
        sourceMap.set(source, existing);
      });
      sourceAnalysis.value = Array.from(sourceMap.entries()).map(([source, data]) => ({
        source: source.length > 50 ? source.substring(0, 50) + "..." : source,
        count: data.count,
        uniqueIPs: data.ips.size,
        totalBytes: data.totalBytes,
        threatLevel: data.threatCount > 0 ? "high" : "normal"
      })).sort((a, b) => b.count - a.count).slice(0, 100);
    }
    function analyzeCountries(logs) {
      const countryMap = /* @__PURE__ */ new Map();
      logs.forEach((log) => {
        const country = log.ip.split(".").slice(0, 2).join(".") + ".x.x";
        const existing = countryMap.get(country) || {
          count: 0,
          ips: /* @__PURE__ */ new Set(),
          totalBytes: 0,
          threatCount: 0
        };
        existing.count++;
        existing.ips.add(log.ip);
        existing.totalBytes += log.responseSize;
        if (log.threatLevel && log.threatLevel !== "normal") {
          existing.threatCount++;
        }
        countryMap.set(country, existing);
      });
      countryAnalysis.value = Array.from(countryMap.entries()).map(([country, data]) => ({
        country,
        count: data.count,
        uniqueIPs: data.ips.size,
        totalBytes: data.totalBytes,
        threatCount: data.threatCount
      })).sort((a, b) => b.count - a.count).slice(0, 100);
    }
    function analyzeCities(logs) {
      const cityMap = /* @__PURE__ */ new Map();
      logs.forEach((log) => {
        const city = log.ip.split(".").slice(0, 3).join(".") + ".x";
        const country = log.ip.split(".").slice(0, 2).join(".") + ".x.x";
        const existing = cityMap.get(city) || {
          country,
          count: 0,
          ips: /* @__PURE__ */ new Set(),
          totalBytes: 0,
          threatCount: 0
        };
        existing.count++;
        existing.ips.add(log.ip);
        existing.totalBytes += log.responseSize;
        if (log.threatLevel && log.threatLevel !== "normal") {
          existing.threatCount++;
        }
        cityMap.set(city, existing);
      });
      cityAnalysis.value = Array.from(cityMap.entries()).map(([city, data]) => ({
        city,
        country: data.country,
        count: data.count,
        uniqueIPs: data.ips.size,
        totalBytes: data.totalBytes,
        threatCount: data.threatCount
      })).sort((a, b) => b.count - a.count).slice(0, 100);
    }
    function analyzeASNs(logs) {
      const asnMap = /* @__PURE__ */ new Map();
      logs.forEach((log) => {
        const asn = "AS" + log.ip.split(".").slice(0, 2).join("");
        const asnName = `ISP-${log.ip.split(".").slice(0, 2).join(".")}`;
        const existing = asnMap.get(asn) || {
          asnName,
          count: 0,
          ips: /* @__PURE__ */ new Set(),
          totalBytes: 0,
          threatCount: 0
        };
        existing.count++;
        existing.ips.add(log.ip);
        existing.totalBytes += log.responseSize;
        if (log.threatLevel && log.threatLevel !== "normal") {
          existing.threatCount++;
        }
        asnMap.set(asn, existing);
      });
      asnAnalysis.value = Array.from(asnMap.entries()).map(([asn, data]) => ({
        asn,
        asnName: data.asnName,
        count: data.count,
        uniqueIPs: data.ips.size,
        totalBytes: data.totalBytes,
        threatCount: data.threatCount
      })).sort((a, b) => b.count - a.count).slice(0, 100);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        type: "page",
        class: "space-y-6"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _cache[36] || (_cache[36] = createBaseVNode("div", null, [
              createBaseVNode("h1", { class: "text-2xl font-bold text-white mb-2" }, "数据分析"),
              createBaseVNode("p", { class: "text-gray-400" }, "深入分析日志数据的各项指标和趋势")
            ], -1)),
            createBaseVNode("div", _hoisted_2, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => timeRange.value = $event),
                class: "px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              }, _cache[33] || (_cache[33] = [
                createBaseVNode("option", { value: "1h" }, "最近1小时", -1),
                createBaseVNode("option", { value: "24h" }, "最近24小时", -1),
                createBaseVNode("option", { value: "7d" }, "最近7天", -1),
                createBaseVNode("option", { value: "30d" }, "最近30天", -1),
                createBaseVNode("option", { value: "all" }, "全部时间", -1)
              ]), 512), [
                [vModelSelect, timeRange.value]
              ]),
              createBaseVNode("button", {
                onClick: loadAnalysisData,
                class: normalizeClass([
                  "px-4 py-2 text-white rounded-lg transition-colors",
                  unref(themeStore).themeClasses.buttonStyle
                ])
              }, _cache[34] || (_cache[34] = [
                createBaseVNode("i", { class: "pi pi-refresh mr-2" }, null, -1),
                createTextVNode(" 刷新分析 ")
              ]), 2),
              createBaseVNode("button", {
                onClick: exportData,
                class: "px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              }, _cache[35] || (_cache[35] = [
                createBaseVNode("i", { class: "pi pi-download mr-2" }, null, -1),
                createTextVNode(" 导出数据 ")
              ]))
            ])
          ]),
          loading.value ? (openBlock(), createElementBlock("div", _hoisted_3, _cache[37] || (_cache[37] = [
            createBaseVNode("i", { class: "pi pi-spin pi-spinner text-3xl text-blue-400 mb-4" }, null, -1),
            createBaseVNode("p", { class: "text-gray-400" }, "正在分析数据...", -1)
          ]))) : (openBlock(), createElementBlock("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                _cache[38] || (_cache[38] = createBaseVNode("div", { class: "flex items-center justify-between mb-2" }, [
                  createBaseVNode("h3", { class: "text-gray-400 text-sm" }, "总日志数"),
                  createBaseVNode("i", { class: "pi pi-file text-blue-400" })
                ], -1)),
                createBaseVNode("p", _hoisted_7, toDisplayString(formatNumber(totalLogs.value)), 1),
                _cache[39] || (_cache[39] = createBaseVNode("p", { class: "text-xs text-gray-500 mt-1" }, "已解析的日志条目", -1))
              ]),
              createBaseVNode("div", _hoisted_8, [
                _cache[40] || (_cache[40] = createBaseVNode("div", { class: "flex items-center justify-between mb-2" }, [
                  createBaseVNode("h3", { class: "text-gray-400 text-sm" }, "独立IP"),
                  createBaseVNode("i", { class: "pi pi-users text-green-400" })
                ], -1)),
                createBaseVNode("p", _hoisted_9, toDisplayString(formatNumber(uniqueIPs.value)), 1),
                _cache[41] || (_cache[41] = createBaseVNode("p", { class: "text-xs text-gray-500 mt-1" }, "唯一访问者数量", -1))
              ]),
              createBaseVNode("div", _hoisted_10, [
                _cache[42] || (_cache[42] = createBaseVNode("div", { class: "flex items-center justify-between mb-2" }, [
                  createBaseVNode("h3", { class: "text-gray-400 text-sm" }, "错误率"),
                  createBaseVNode("i", { class: "pi pi-exclamation-triangle text-orange-400" })
                ], -1)),
                createBaseVNode("p", _hoisted_11, toDisplayString(errorRate.value.toFixed(2)) + "%", 1),
                _cache[43] || (_cache[43] = createBaseVNode("p", { class: "text-xs text-gray-500 mt-1" }, "4xx/5xx状态码比例", -1))
              ]),
              createBaseVNode("div", _hoisted_12, [
                _cache[44] || (_cache[44] = createBaseVNode("div", { class: "flex items-center justify-between mb-2" }, [
                  createBaseVNode("h3", { class: "text-gray-400 text-sm" }, "平均响应大小"),
                  createBaseVNode("i", { class: "pi pi-chart-bar text-purple-400" })
                ], -1)),
                createBaseVNode("p", _hoisted_13, toDisplayString(formatBytes(avgResponseSize.value)), 1),
                _cache[45] || (_cache[45] = createBaseVNode("p", { class: "text-xs text-gray-500 mt-1" }, "每个请求的平均大小", -1))
              ]),
              createBaseVNode("div", _hoisted_14, [
                _cache[46] || (_cache[46] = createBaseVNode("div", { class: "flex items-center justify-between mb-2" }, [
                  createBaseVNode("h3", { class: "text-gray-400 text-sm" }, "时间范围"),
                  createBaseVNode("i", { class: "pi pi-calendar text-indigo-400" })
                ], -1)),
                dateRange.value ? (openBlock(), createElementBlock("p", _hoisted_15, toDisplayString(Math.ceil((dateRange.value.end.getTime() - dateRange.value.start.getTime()) / (1e3 * 60 * 60 * 24))) + " 天 ", 1)) : createCommentVNode("", true),
                dateRange.value ? (openBlock(), createElementBlock("p", _hoisted_16, toDisplayString(formatDate(dateRange.value.start)) + " 至 " + toDisplayString(formatDate(dateRange.value.end)), 1)) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                createBaseVNode("nav", _hoisted_19, [
                  (openBlock(), createElementBlock(Fragment, null, renderList([
                    { id: "overview", label: "概览", icon: "pi-chart-line" },
                    { id: "ips", label: "IP分析", icon: "pi-users" },
                    { id: "paths", label: "路径分析", icon: "pi-sitemap" },
                    { id: "timeline", label: "时间趋势", icon: "pi-clock" },
                    { id: "useragents", label: "用户代理", icon: "pi-desktop" },
                    { id: "status", label: "状态码", icon: "pi-info-circle" },
                    { id: "source", label: "来源统计", icon: "pi-external-link" }
                  ], (tab) => {
                    return createBaseVNode("button", {
                      key: tab.id,
                      onClick: ($event) => selectedTab.value = tab.id,
                      class: normalizeClass([
                        "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap",
                        selectedTab.value === tab.id ? "bg-blue-500 text-white" : "text-gray-400 hover:text-white hover:bg-white/10"
                      ])
                    }, [
                      createBaseVNode("i", {
                        class: normalizeClass(["pi", tab.icon])
                      }, null, 2),
                      createTextVNode(" " + toDisplayString(tab.label), 1)
                    ], 10, _hoisted_20);
                  }), 64))
                ])
              ]),
              createBaseVNode("div", _hoisted_21, [
                selectedTab.value === "ips" ? (openBlock(), createElementBlock("div", _hoisted_22, [
                  createBaseVNode("div", _hoisted_23, [
                    _cache[50] || (_cache[50] = createBaseVNode("h3", { class: "text-lg font-semibold text-white" }, "Top IP 地址分析", -1)),
                    createBaseVNode("div", _hoisted_24, [
                      createBaseVNode("button", {
                        onClick: _cache[1] || (_cache[1] = ($event) => setSortBy("ips", "count")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "ips" && sortConfig.value.field === "count" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按访问次数排序"
                      }, [
                        _cache[47] || (_cache[47] = createTextVNode(" 访问次数 ")),
                        sortConfig.value.tab === "ips" && sortConfig.value.field === "count" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2),
                      createBaseVNode("button", {
                        onClick: _cache[2] || (_cache[2] = ($event) => setSortBy("ips", "uniquePaths")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "ips" && sortConfig.value.field === "uniquePaths" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按独立路径排序"
                      }, [
                        _cache[48] || (_cache[48] = createTextVNode(" 独立路径 ")),
                        sortConfig.value.tab === "ips" && sortConfig.value.field === "uniquePaths" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2),
                      createBaseVNode("button", {
                        onClick: _cache[3] || (_cache[3] = ($event) => setSortBy("ips", "ip")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "ips" && sortConfig.value.field === "ip" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按IP地址排序"
                      }, [
                        _cache[49] || (_cache[49] = createTextVNode(" IP地址 ")),
                        sortConfig.value.tab === "ips" && sortConfig.value.field === "ip" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_25, [
                    createBaseVNode("table", _hoisted_26, [
                      _cache[51] || (_cache[51] = createBaseVNode("thead", null, [
                        createBaseVNode("tr", { class: "border-b border-white/10" }, [
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "IP地址"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "访问次数"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "独立路径"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "总字节数"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "首次访问"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "最后访问")
                        ])
                      ], -1)),
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(displayedIpAnalysis.value, (item) => {
                          return openBlock(), createElementBlock("tr", {
                            key: item.ip,
                            class: "border-b border-white/5 hover:bg-white/5"
                          }, [
                            createBaseVNode("td", _hoisted_27, toDisplayString(item.ip), 1),
                            createBaseVNode("td", _hoisted_28, toDisplayString(formatNumber(item.count)), 1),
                            createBaseVNode("td", _hoisted_29, toDisplayString(item.uniquePaths), 1),
                            createBaseVNode("td", _hoisted_30, toDisplayString(formatBytes(item.totalBytes)), 1),
                            createBaseVNode("td", _hoisted_31, toDisplayString(formatDate(item.firstSeen)), 1),
                            createBaseVNode("td", _hoisted_32, toDisplayString(formatDate(item.lastSeen)), 1)
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  hasMoreData.value.ipAnalysis ? (openBlock(), createElementBlock("div", _hoisted_33, [
                    createBaseVNode("button", {
                      onClick: _cache[4] || (_cache[4] = ($event) => loadMore("ipAnalysis")),
                      class: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 mx-auto"
                    }, [
                      _cache[52] || (_cache[52] = createBaseVNode("i", { class: "pi pi-plus text-sm" }, null, -1)),
                      createTextVNode(" 加载更多 (还有 " + toDisplayString(sortedIpAnalysis.value.length - displayLimits.value.ipAnalysis) + " 项) ", 1)
                    ]),
                    createBaseVNode("div", _hoisted_34, " 已显示 " + toDisplayString(displayLimits.value.ipAnalysis) + " / " + toDisplayString(sortedIpAnalysis.value.length) + " 项结果 ", 1)
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                selectedTab.value === "paths" ? (openBlock(), createElementBlock("div", _hoisted_35, [
                  createBaseVNode("div", _hoisted_36, [
                    _cache[56] || (_cache[56] = createBaseVNode("h3", { class: "text-lg font-semibold text-white" }, "热门访问路径分析", -1)),
                    createBaseVNode("div", _hoisted_37, [
                      createBaseVNode("button", {
                        onClick: _cache[5] || (_cache[5] = ($event) => setSortBy("paths", "count")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "paths" && sortConfig.value.field === "count" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按访问次数排序"
                      }, [
                        _cache[53] || (_cache[53] = createTextVNode(" 访问次数 ")),
                        sortConfig.value.tab === "paths" && sortConfig.value.field === "count" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2),
                      createBaseVNode("button", {
                        onClick: _cache[6] || (_cache[6] = ($event) => setSortBy("paths", "uniqueIPs")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "paths" && sortConfig.value.field === "uniqueIPs" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按独立IP排序"
                      }, [
                        _cache[54] || (_cache[54] = createTextVNode(" 独立IP ")),
                        sortConfig.value.tab === "paths" && sortConfig.value.field === "uniqueIPs" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2),
                      createBaseVNode("button", {
                        onClick: _cache[7] || (_cache[7] = ($event) => setSortBy("paths", "path")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "paths" && sortConfig.value.field === "path" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按路径名称排序"
                      }, [
                        _cache[55] || (_cache[55] = createTextVNode(" 路径名称 ")),
                        sortConfig.value.tab === "paths" && sortConfig.value.field === "path" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_38, [
                    createBaseVNode("table", _hoisted_39, [
                      _cache[57] || (_cache[57] = createBaseVNode("thead", null, [
                        createBaseVNode("tr", { class: "border-b border-white/10" }, [
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "访问路径"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "访问次数"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "独立IP"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "总字节数"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "平均响应大小")
                        ])
                      ], -1)),
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(displayedPathAnalysis.value, (item) => {
                          return openBlock(), createElementBlock("tr", {
                            key: item.path,
                            class: "border-b border-white/5 hover:bg-white/5"
                          }, [
                            createBaseVNode("td", {
                              class: "py-3 px-4 text-white font-mono max-w-xs truncate",
                              title: item.path
                            }, toDisplayString(item.path), 9, _hoisted_40),
                            createBaseVNode("td", _hoisted_41, toDisplayString(formatNumber(item.count)), 1),
                            createBaseVNode("td", _hoisted_42, toDisplayString(item.uniqueIPs), 1),
                            createBaseVNode("td", _hoisted_43, toDisplayString(formatBytes(item.totalBytes)), 1),
                            createBaseVNode("td", _hoisted_44, toDisplayString(formatBytes(item.avgResponseSize)), 1)
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  hasMoreData.value.pathAnalysis ? (openBlock(), createElementBlock("div", _hoisted_45, [
                    createBaseVNode("button", {
                      onClick: _cache[8] || (_cache[8] = ($event) => loadMore("pathAnalysis")),
                      class: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 mx-auto"
                    }, [
                      _cache[58] || (_cache[58] = createBaseVNode("i", { class: "pi pi-plus text-sm" }, null, -1)),
                      createTextVNode(" 加载更多 (还有 " + toDisplayString(sortedPathAnalysis.value.length - displayLimits.value.pathAnalysis) + " 项) ", 1)
                    ]),
                    createBaseVNode("div", _hoisted_46, " 已显示 " + toDisplayString(displayLimits.value.pathAnalysis) + " / " + toDisplayString(sortedPathAnalysis.value.length) + " 项结果 ", 1)
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                selectedTab.value === "timeline" ? (openBlock(), createElementBlock("div", _hoisted_47, [
                  _cache[60] || (_cache[60] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4" }, "访问量时间趋势", -1)),
                  createBaseVNode("div", _hoisted_48, [
                    createBaseVNode("table", _hoisted_49, [
                      _cache[59] || (_cache[59] = createBaseVNode("thead", null, [
                        createBaseVNode("tr", { class: "border-b border-white/10" }, [
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "时间"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "访问次数"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "错误次数"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "错误率")
                        ])
                      ], -1)),
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(timeSeriesData.value, (item) => {
                          return openBlock(), createElementBlock("tr", {
                            key: item.hour,
                            class: "border-b border-white/5 hover:bg-white/5"
                          }, [
                            createBaseVNode("td", _hoisted_50, toDisplayString(item.hour), 1),
                            createBaseVNode("td", _hoisted_51, toDisplayString(formatNumber(item.count)), 1),
                            createBaseVNode("td", _hoisted_52, toDisplayString(item.errorCount), 1),
                            createBaseVNode("td", {
                              class: normalizeClass(["py-3 px-4", item.errorRate > 5 ? "text-red-400" : "text-green-400"])
                            }, toDisplayString(item.errorRate.toFixed(2)) + "% ", 3)
                          ]);
                        }), 128))
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true),
                selectedTab.value === "useragents" ? (openBlock(), createElementBlock("div", _hoisted_53, [
                  createBaseVNode("div", _hoisted_54, [
                    _cache[64] || (_cache[64] = createBaseVNode("h3", { class: "text-lg font-semibold text-white" }, "用户代理分析", -1)),
                    createBaseVNode("div", _hoisted_55, [
                      createBaseVNode("button", {
                        onClick: _cache[9] || (_cache[9] = ($event) => setSortBy("useragents", "count")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "useragents" && sortConfig.value.field === "count" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按访问次数排序"
                      }, [
                        _cache[61] || (_cache[61] = createTextVNode(" 访问次数 ")),
                        sortConfig.value.tab === "useragents" && sortConfig.value.field === "count" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2),
                      createBaseVNode("button", {
                        onClick: _cache[10] || (_cache[10] = ($event) => setSortBy("useragents", "category")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "useragents" && sortConfig.value.field === "category" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按类别排序"
                      }, [
                        _cache[62] || (_cache[62] = createTextVNode(" 类别 ")),
                        sortConfig.value.tab === "useragents" && sortConfig.value.field === "category" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2),
                      createBaseVNode("button", {
                        onClick: _cache[11] || (_cache[11] = ($event) => setSortBy("useragents", "userAgent")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "useragents" && sortConfig.value.field === "userAgent" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按用户代理排序"
                      }, [
                        _cache[63] || (_cache[63] = createTextVNode(" 用户代理 ")),
                        sortConfig.value.tab === "useragents" && sortConfig.value.field === "userAgent" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_56, [
                    createBaseVNode("table", _hoisted_57, [
                      _cache[65] || (_cache[65] = createBaseVNode("thead", null, [
                        createBaseVNode("tr", { class: "border-b border-white/10" }, [
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "用户代理"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "访问次数"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "类别")
                        ])
                      ], -1)),
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(displayedUserAgentAnalysis.value, (item) => {
                          return openBlock(), createElementBlock("tr", {
                            key: item.userAgent,
                            class: "border-b border-white/5 hover:bg-white/5"
                          }, [
                            createBaseVNode("td", {
                              class: "py-3 px-4 text-white max-w-md truncate",
                              title: item.userAgent
                            }, toDisplayString(item.userAgent), 9, _hoisted_58),
                            createBaseVNode("td", _hoisted_59, toDisplayString(formatNumber(item.count)), 1),
                            createBaseVNode("td", _hoisted_60, [
                              createBaseVNode("span", {
                                class: normalizeClass([
                                  "px-2 py-1 rounded text-xs",
                                  item.category === "机器人" ? "bg-red-500/20 text-red-400" : item.category === "移动设备" ? "bg-blue-500/20 text-blue-400" : item.category === "浏览器" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"
                                ])
                              }, toDisplayString(item.category), 3)
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  hasMoreData.value.userAgentAnalysis ? (openBlock(), createElementBlock("div", _hoisted_61, [
                    createBaseVNode("button", {
                      onClick: _cache[12] || (_cache[12] = ($event) => loadMore("userAgentAnalysis")),
                      class: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 mx-auto"
                    }, [
                      _cache[66] || (_cache[66] = createBaseVNode("i", { class: "pi pi-plus text-sm" }, null, -1)),
                      createTextVNode(" 加载更多 (还有 " + toDisplayString(sortedUserAgentAnalysis.value.length - displayLimits.value.userAgentAnalysis) + " 项) ", 1)
                    ]),
                    createBaseVNode("div", _hoisted_62, " 已显示 " + toDisplayString(displayLimits.value.userAgentAnalysis) + " / " + toDisplayString(sortedUserAgentAnalysis.value.length) + " 项结果 ", 1)
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                selectedTab.value === "status" ? (openBlock(), createElementBlock("div", _hoisted_63, [
                  createBaseVNode("div", _hoisted_64, [
                    _cache[70] || (_cache[70] = createBaseVNode("h3", { class: "text-lg font-semibold text-white" }, "HTTP状态码分布", -1)),
                    createBaseVNode("div", _hoisted_65, [
                      createBaseVNode("button", {
                        onClick: _cache[13] || (_cache[13] = ($event) => setSortBy("status", "count")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "status" && sortConfig.value.field === "count" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按次数排序"
                      }, [
                        _cache[67] || (_cache[67] = createTextVNode(" 次数 ")),
                        sortConfig.value.tab === "status" && sortConfig.value.field === "count" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2),
                      createBaseVNode("button", {
                        onClick: _cache[14] || (_cache[14] = ($event) => setSortBy("status", "percentage")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "status" && sortConfig.value.field === "percentage" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按百分比排序"
                      }, [
                        _cache[68] || (_cache[68] = createTextVNode(" 百分比 ")),
                        sortConfig.value.tab === "status" && sortConfig.value.field === "percentage" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2),
                      createBaseVNode("button", {
                        onClick: _cache[15] || (_cache[15] = ($event) => setSortBy("status", "statusCode")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "status" && sortConfig.value.field === "statusCode" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按状态码排序"
                      }, [
                        _cache[69] || (_cache[69] = createTextVNode(" 状态码 ")),
                        sortConfig.value.tab === "status" && sortConfig.value.field === "statusCode" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_66, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(displayedStatusCodeAnalysis.value, (item) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.statusCode,
                        class: "p-4 bg-white/5 rounded-lg border border-white/10"
                      }, [
                        createBaseVNode("div", _hoisted_67, [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              "text-lg font-bold",
                              item.statusCode < 300 ? "text-green-400" : item.statusCode < 400 ? "text-blue-400" : item.statusCode < 500 ? "text-orange-400" : "text-red-400"
                            ])
                          }, toDisplayString(item.statusCode), 3),
                          createBaseVNode("span", _hoisted_68, toDisplayString(item.percentage.toFixed(1)) + "%", 1)
                        ]),
                        createBaseVNode("div", _hoisted_69, toDisplayString(formatNumber(item.count)) + " 次", 1),
                        createBaseVNode("div", _hoisted_70, [
                          createBaseVNode("div", {
                            class: normalizeClass([
                              "h-2 rounded-full",
                              item.statusCode < 300 ? "bg-green-400" : item.statusCode < 400 ? "bg-blue-400" : item.statusCode < 500 ? "bg-orange-400" : "bg-red-400"
                            ]),
                            style: normalizeStyle({ width: item.percentage + "%" })
                          }, null, 6)
                        ])
                      ]);
                    }), 128))
                  ]),
                  hasMoreData.value.statusCodeAnalysis ? (openBlock(), createElementBlock("div", _hoisted_71, [
                    createBaseVNode("button", {
                      onClick: _cache[16] || (_cache[16] = ($event) => loadMore("statusCodeAnalysis")),
                      class: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 mx-auto"
                    }, [
                      _cache[71] || (_cache[71] = createBaseVNode("i", { class: "pi pi-plus text-sm" }, null, -1)),
                      createTextVNode(" 加载更多 (还有 " + toDisplayString(sortedStatusCodeAnalysis.value.length - displayLimits.value.statusCodeAnalysis) + " 项) ", 1)
                    ]),
                    createBaseVNode("div", _hoisted_72, " 已显示 " + toDisplayString(displayLimits.value.statusCodeAnalysis) + " / " + toDisplayString(sortedStatusCodeAnalysis.value.length) + " 项结果 ", 1)
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                selectedTab.value === "source" ? (openBlock(), createElementBlock("div", _hoisted_73, [
                  createBaseVNode("div", _hoisted_74, [
                    _cache[75] || (_cache[75] = createBaseVNode("h3", { class: "text-lg font-semibold text-white" }, "访问来源统计", -1)),
                    createBaseVNode("div", _hoisted_75, [
                      createBaseVNode("button", {
                        onClick: _cache[17] || (_cache[17] = ($event) => setSortBy("source", "count")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "source" && sortConfig.value.field === "count" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按访问次数排序"
                      }, [
                        _cache[72] || (_cache[72] = createTextVNode(" 访问次数 ")),
                        sortConfig.value.tab === "source" && sortConfig.value.field === "count" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2),
                      createBaseVNode("button", {
                        onClick: _cache[18] || (_cache[18] = ($event) => setSortBy("source", "uniqueIPs")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "source" && sortConfig.value.field === "uniqueIPs" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按独立IP排序"
                      }, [
                        _cache[73] || (_cache[73] = createTextVNode(" 独立IP ")),
                        sortConfig.value.tab === "source" && sortConfig.value.field === "uniqueIPs" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2),
                      createBaseVNode("button", {
                        onClick: _cache[19] || (_cache[19] = ($event) => setSortBy("source", "source")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "source" && sortConfig.value.field === "source" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按来源排序"
                      }, [
                        _cache[74] || (_cache[74] = createTextVNode(" 来源 ")),
                        sortConfig.value.tab === "source" && sortConfig.value.field === "source" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_76, [
                    createBaseVNode("table", _hoisted_77, [
                      _cache[76] || (_cache[76] = createBaseVNode("thead", null, [
                        createBaseVNode("tr", { class: "border-b border-white/10" }, [
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "访问来源"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "访问次数"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "独立IP"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "总字节数"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "威胁等级")
                        ])
                      ], -1)),
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(displayedSourceAnalysis.value, (item) => {
                          return openBlock(), createElementBlock("tr", {
                            key: item.source,
                            class: "border-b border-white/5 hover:bg-white/5"
                          }, [
                            createBaseVNode("td", {
                              class: "py-3 px-4 text-white max-w-md truncate",
                              title: item.source
                            }, toDisplayString(item.source), 9, _hoisted_78),
                            createBaseVNode("td", _hoisted_79, toDisplayString(formatNumber(item.count)), 1),
                            createBaseVNode("td", _hoisted_80, toDisplayString(formatNumber(item.uniqueIPs)), 1),
                            createBaseVNode("td", _hoisted_81, toDisplayString(formatBytes(item.totalBytes)), 1),
                            createBaseVNode("td", _hoisted_82, [
                              createBaseVNode("span", {
                                class: normalizeClass([
                                  "px-2 py-1 rounded text-xs",
                                  item.threatLevel === "high" ? "bg-red-500/20 text-red-400" : item.threatLevel === "medium" ? "bg-yellow-500/20 text-yellow-400" : item.threatLevel === "low" ? "bg-blue-500/20 text-blue-400" : "bg-green-500/20 text-green-400"
                                ])
                              }, toDisplayString(item.threatLevel === "high" ? "高危" : item.threatLevel === "medium" ? "中危" : item.threatLevel === "low" ? "低危" : "正常"), 3)
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  hasMoreData.value.sourceAnalysis ? (openBlock(), createElementBlock("div", _hoisted_83, [
                    createBaseVNode("button", {
                      onClick: _cache[20] || (_cache[20] = ($event) => loadMore("sourceAnalysis")),
                      class: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 mx-auto"
                    }, [
                      _cache[77] || (_cache[77] = createBaseVNode("i", { class: "pi pi-plus text-sm" }, null, -1)),
                      createTextVNode(" 加载更多 (还有 " + toDisplayString(sortedSourceAnalysis.value.length - displayLimits.value.sourceAnalysis) + " 项) ", 1)
                    ]),
                    createBaseVNode("div", _hoisted_84, " 已显示 " + toDisplayString(displayLimits.value.sourceAnalysis) + " / " + toDisplayString(sortedSourceAnalysis.value.length) + " 项结果 ", 1)
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                selectedTab.value === "country" ? (openBlock(), createElementBlock("div", _hoisted_85, [
                  createBaseVNode("div", _hoisted_86, [
                    _cache[81] || (_cache[81] = createBaseVNode("h3", { class: "text-lg font-semibold text-white" }, "地区访问分布", -1)),
                    createBaseVNode("div", _hoisted_87, [
                      createBaseVNode("button", {
                        onClick: _cache[21] || (_cache[21] = ($event) => setSortBy("country", "count")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "country" && sortConfig.value.field === "count" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按访问次数排序"
                      }, [
                        _cache[78] || (_cache[78] = createTextVNode(" 访问次数 ")),
                        sortConfig.value.tab === "country" && sortConfig.value.field === "count" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2),
                      createBaseVNode("button", {
                        onClick: _cache[22] || (_cache[22] = ($event) => setSortBy("country", "uniqueIPs")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "country" && sortConfig.value.field === "uniqueIPs" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按独立IP排序"
                      }, [
                        _cache[79] || (_cache[79] = createTextVNode(" 独立IP ")),
                        sortConfig.value.tab === "country" && sortConfig.value.field === "uniqueIPs" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2),
                      createBaseVNode("button", {
                        onClick: _cache[23] || (_cache[23] = ($event) => setSortBy("country", "country")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "country" && sortConfig.value.field === "country" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按国家排序"
                      }, [
                        _cache[80] || (_cache[80] = createTextVNode(" 国家 ")),
                        sortConfig.value.tab === "country" && sortConfig.value.field === "country" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_88, [
                    createBaseVNode("table", _hoisted_89, [
                      _cache[82] || (_cache[82] = createBaseVNode("thead", null, [
                        createBaseVNode("tr", { class: "border-b border-white/10" }, [
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "国家/地区"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "访问次数"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "独立IP"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "总字节数"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "威胁数量")
                        ])
                      ], -1)),
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(displayedCountryAnalysis.value, (item) => {
                          return openBlock(), createElementBlock("tr", {
                            key: item.country,
                            class: "border-b border-white/5 hover:bg-white/5"
                          }, [
                            createBaseVNode("td", _hoisted_90, toDisplayString(item.country), 1),
                            createBaseVNode("td", _hoisted_91, toDisplayString(formatNumber(item.count)), 1),
                            createBaseVNode("td", _hoisted_92, toDisplayString(formatNumber(item.uniqueIPs)), 1),
                            createBaseVNode("td", _hoisted_93, toDisplayString(formatBytes(item.totalBytes)), 1),
                            createBaseVNode("td", _hoisted_94, [
                              createBaseVNode("span", {
                                class: normalizeClass([
                                  "px-2 py-1 rounded text-xs",
                                  item.threatCount > 10 ? "bg-red-500/20 text-red-400" : item.threatCount > 5 ? "bg-yellow-500/20 text-yellow-400" : item.threatCount > 0 ? "bg-blue-500/20 text-blue-400" : "bg-green-500/20 text-green-400"
                                ])
                              }, toDisplayString(item.threatCount), 3)
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  hasMoreData.value.countryAnalysis ? (openBlock(), createElementBlock("div", _hoisted_95, [
                    createBaseVNode("button", {
                      onClick: _cache[24] || (_cache[24] = ($event) => loadMore("countryAnalysis")),
                      class: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 mx-auto"
                    }, [
                      _cache[83] || (_cache[83] = createBaseVNode("i", { class: "pi pi-plus text-sm" }, null, -1)),
                      createTextVNode(" 加载更多 (还有 " + toDisplayString(sortedCountryAnalysis.value.length - displayLimits.value.countryAnalysis) + " 项) ", 1)
                    ]),
                    createBaseVNode("div", _hoisted_96, " 已显示 " + toDisplayString(displayLimits.value.countryAnalysis) + " / " + toDisplayString(sortedCountryAnalysis.value.length) + " 项结果 ", 1)
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                selectedTab.value === "city" ? (openBlock(), createElementBlock("div", _hoisted_97, [
                  createBaseVNode("div", _hoisted_98, [
                    _cache[87] || (_cache[87] = createBaseVNode("h3", { class: "text-lg font-semibold text-white" }, "城市访问分布", -1)),
                    createBaseVNode("div", _hoisted_99, [
                      createBaseVNode("button", {
                        onClick: _cache[25] || (_cache[25] = ($event) => setSortBy("city", "count")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "city" && sortConfig.value.field === "count" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按访问次数排序"
                      }, [
                        _cache[84] || (_cache[84] = createTextVNode(" 访问次数 ")),
                        sortConfig.value.tab === "city" && sortConfig.value.field === "count" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2),
                      createBaseVNode("button", {
                        onClick: _cache[26] || (_cache[26] = ($event) => setSortBy("city", "uniqueIPs")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "city" && sortConfig.value.field === "uniqueIPs" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按独立IP排序"
                      }, [
                        _cache[85] || (_cache[85] = createTextVNode(" 独立IP ")),
                        sortConfig.value.tab === "city" && sortConfig.value.field === "uniqueIPs" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2),
                      createBaseVNode("button", {
                        onClick: _cache[27] || (_cache[27] = ($event) => setSortBy("city", "city")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "city" && sortConfig.value.field === "city" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按城市排序"
                      }, [
                        _cache[86] || (_cache[86] = createTextVNode(" 城市 ")),
                        sortConfig.value.tab === "city" && sortConfig.value.field === "city" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_100, [
                    createBaseVNode("table", _hoisted_101, [
                      _cache[88] || (_cache[88] = createBaseVNode("thead", null, [
                        createBaseVNode("tr", { class: "border-b border-white/10" }, [
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "城市"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "国家/地区"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "访问次数"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "独立IP"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "总字节数"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "威胁数量")
                        ])
                      ], -1)),
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(displayedCityAnalysis.value, (item) => {
                          return openBlock(), createElementBlock("tr", {
                            key: item.city,
                            class: "border-b border-white/5 hover:bg-white/5"
                          }, [
                            createBaseVNode("td", _hoisted_102, toDisplayString(item.city), 1),
                            createBaseVNode("td", _hoisted_103, toDisplayString(item.country), 1),
                            createBaseVNode("td", _hoisted_104, toDisplayString(formatNumber(item.count)), 1),
                            createBaseVNode("td", _hoisted_105, toDisplayString(formatNumber(item.uniqueIPs)), 1),
                            createBaseVNode("td", _hoisted_106, toDisplayString(formatBytes(item.totalBytes)), 1),
                            createBaseVNode("td", _hoisted_107, [
                              createBaseVNode("span", {
                                class: normalizeClass([
                                  "px-2 py-1 rounded text-xs",
                                  item.threatCount > 10 ? "bg-red-500/20 text-red-400" : item.threatCount > 5 ? "bg-yellow-500/20 text-yellow-400" : item.threatCount > 0 ? "bg-blue-500/20 text-blue-400" : "bg-green-500/20 text-green-400"
                                ])
                              }, toDisplayString(item.threatCount), 3)
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  hasMoreData.value.cityAnalysis ? (openBlock(), createElementBlock("div", _hoisted_108, [
                    createBaseVNode("button", {
                      onClick: _cache[28] || (_cache[28] = ($event) => loadMore("cityAnalysis")),
                      class: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 mx-auto"
                    }, [
                      _cache[89] || (_cache[89] = createBaseVNode("i", { class: "pi pi-plus text-sm" }, null, -1)),
                      createTextVNode(" 加载更多 (还有 " + toDisplayString(sortedCityAnalysis.value.length - displayLimits.value.cityAnalysis) + " 项) ", 1)
                    ]),
                    createBaseVNode("div", _hoisted_109, " 已显示 " + toDisplayString(displayLimits.value.cityAnalysis) + " / " + toDisplayString(sortedCityAnalysis.value.length) + " 项结果 ", 1)
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                selectedTab.value === "asn" ? (openBlock(), createElementBlock("div", _hoisted_110, [
                  createBaseVNode("div", _hoisted_111, [
                    _cache[93] || (_cache[93] = createBaseVNode("h3", { class: "text-lg font-semibold text-white" }, "ASN网络统计", -1)),
                    createBaseVNode("div", _hoisted_112, [
                      createBaseVNode("button", {
                        onClick: _cache[29] || (_cache[29] = ($event) => setSortBy("asn", "count")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "asn" && sortConfig.value.field === "count" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按访问次数排序"
                      }, [
                        _cache[90] || (_cache[90] = createTextVNode(" 访问次数 ")),
                        sortConfig.value.tab === "asn" && sortConfig.value.field === "count" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2),
                      createBaseVNode("button", {
                        onClick: _cache[30] || (_cache[30] = ($event) => setSortBy("asn", "uniqueIPs")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "asn" && sortConfig.value.field === "uniqueIPs" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按独立IP排序"
                      }, [
                        _cache[91] || (_cache[91] = createTextVNode(" 独立IP ")),
                        sortConfig.value.tab === "asn" && sortConfig.value.field === "uniqueIPs" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2),
                      createBaseVNode("button", {
                        onClick: _cache[31] || (_cache[31] = ($event) => setSortBy("asn", "asn")),
                        class: normalizeClass([
                          "px-3 py-1 text-xs transition-colors",
                          sortConfig.value.tab === "asn" && sortConfig.value.field === "asn" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
                        ]),
                        title: "按ASN排序"
                      }, [
                        _cache[92] || (_cache[92] = createTextVNode(" ASN ")),
                        sortConfig.value.tab === "asn" && sortConfig.value.field === "asn" ? (openBlock(), createElementBlock("i", {
                          key: 0,
                          class: normalizeClass(["pi text-xs ml-1", sortConfig.value.direction === "desc" ? "pi-arrow-down" : "pi-arrow-up"])
                        }, null, 2)) : createCommentVNode("", true)
                      ], 2)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_113, [
                    createBaseVNode("table", _hoisted_114, [
                      _cache[94] || (_cache[94] = createBaseVNode("thead", null, [
                        createBaseVNode("tr", { class: "border-b border-white/10" }, [
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "ASN编号"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "网络名称"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "访问次数"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "独立IP"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "总字节数"),
                          createBaseVNode("th", { class: "text-left py-3 px-4 text-gray-400 text-sm" }, "威胁数量")
                        ])
                      ], -1)),
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(displayedAsnAnalysis.value, (item) => {
                          return openBlock(), createElementBlock("tr", {
                            key: item.asn,
                            class: "border-b border-white/5 hover:bg-white/5"
                          }, [
                            createBaseVNode("td", _hoisted_115, toDisplayString(item.asn), 1),
                            createBaseVNode("td", _hoisted_116, toDisplayString(item.asnName), 1),
                            createBaseVNode("td", _hoisted_117, toDisplayString(formatNumber(item.count)), 1),
                            createBaseVNode("td", _hoisted_118, toDisplayString(formatNumber(item.uniqueIPs)), 1),
                            createBaseVNode("td", _hoisted_119, toDisplayString(formatBytes(item.totalBytes)), 1),
                            createBaseVNode("td", _hoisted_120, [
                              createBaseVNode("span", {
                                class: normalizeClass([
                                  "px-2 py-1 rounded text-xs",
                                  item.threatCount > 10 ? "bg-red-500/20 text-red-400" : item.threatCount > 5 ? "bg-yellow-500/20 text-yellow-400" : item.threatCount > 0 ? "bg-blue-500/20 text-blue-400" : "bg-green-500/20 text-green-400"
                                ])
                              }, toDisplayString(item.threatCount), 3)
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  hasMoreData.value.asnAnalysis ? (openBlock(), createElementBlock("div", _hoisted_121, [
                    createBaseVNode("button", {
                      onClick: _cache[32] || (_cache[32] = ($event) => loadMore("asnAnalysis")),
                      class: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 mx-auto"
                    }, [
                      _cache[95] || (_cache[95] = createBaseVNode("i", { class: "pi pi-plus text-sm" }, null, -1)),
                      createTextVNode(" 加载更多 (还有 " + toDisplayString(sortedAsnAnalysis.value.length - displayLimits.value.asnAnalysis) + " 项) ", 1)
                    ]),
                    createBaseVNode("div", _hoisted_122, " 已显示 " + toDisplayString(displayLimits.value.asnAnalysis) + " / " + toDisplayString(sortedAsnAnalysis.value.length) + " 项结果 ", 1)
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                selectedTab.value === "overview" ? (openBlock(), createElementBlock("div", _hoisted_123, [
                  createBaseVNode("div", _hoisted_124, [
                    createBaseVNode("div", _hoisted_125, [
                      _cache[96] || (_cache[96] = createBaseVNode("h4", { class: "text-white font-semibold mb-3" }, "Top 10 IP 地址", -1)),
                      createBaseVNode("div", _hoisted_126, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(ipAnalysis.value.slice(0, 10), (item, index) => {
                          return openBlock(), createElementBlock("div", {
                            key: item.ip,
                            class: "flex items-center justify-between py-2 px-3 bg-white/5 rounded"
                          }, [
                            createBaseVNode("div", _hoisted_127, [
                              createBaseVNode("span", _hoisted_128, toDisplayString(index + 1), 1),
                              createBaseVNode("span", _hoisted_129, toDisplayString(item.ip), 1)
                            ]),
                            createBaseVNode("span", _hoisted_130, toDisplayString(formatNumber(item.count)), 1)
                          ]);
                        }), 128))
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_131, [
                      _cache[97] || (_cache[97] = createBaseVNode("h4", { class: "text-white font-semibold mb-3" }, "Top 10 访问路径", -1)),
                      createBaseVNode("div", _hoisted_132, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(pathAnalysis.value.slice(0, 10), (item, index) => {
                          return openBlock(), createElementBlock("div", {
                            key: item.path,
                            class: "flex items-center justify-between py-2 px-3 bg-white/5 rounded"
                          }, [
                            createBaseVNode("div", _hoisted_133, [
                              createBaseVNode("span", _hoisted_134, toDisplayString(index + 1), 1),
                              createBaseVNode("span", {
                                class: "text-white font-mono max-w-xs truncate",
                                title: item.path
                              }, toDisplayString(item.path), 9, _hoisted_135)
                            ]),
                            createBaseVNode("span", _hoisted_136, toDisplayString(formatNumber(item.count)), 1)
                          ]);
                        }), 128))
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ])
            ])
          ]))
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
