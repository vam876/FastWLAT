import { d as defineComponent, c as computed, a as createElementBlock, n as normalizeClass, b as createStaticVNode, e as createBaseVNode, f as createCommentVNode, t as toDisplayString, o as openBlock, _ as _export_sfc, F as Fragment, r as renderList, g as createTextVNode, u as useAppStore, h as onMounted, i as onUnmounted, j as createBlock, k as createVNode, w as withCtx, T as ThreatLevel, l as useThemeStore, m as ref, p as unref, q as normalizeStyle, s as useRouter } from "./index-FPjz1pj-.js";
import { u as useMemoryStore } from "./memoryStore-DY1yPL7M.js";
import { _ as _sfc_main$4 } from "./ThemeContainer.vue_vue_type_script_setup_true_lang-CmUDCaT3.js";
import { g as getLogData, a as getCurrentDataModeLabel } from "./dataSourceUtils-IiewxtUB.js";
import { i as ipGeoLocationAdvancedService } from "./ipGeoLocationAdvanced-GdEHxI3I.js";
import "./indexedDBStore-vYrXL9Qh.js";
const _hoisted_1$3 = {
  key: 0,
  class: "animate-pulse"
};
const _hoisted_2$3 = { key: 1 };
const _hoisted_3$3 = { class: "flex items-center justify-between mb-3" };
const _hoisted_4$3 = { class: "text-sm font-medium text-gray-300" };
const _hoisted_5$3 = { class: "mb-2" };
const _hoisted_6$3 = { class: "text-2xl font-bold text-white" };
const _hoisted_7$3 = {
  key: 0,
  class: "flex items-center text-xs"
};
const _hoisted_8$2 = {
  key: 1,
  class: "mt-2 text-xs text-gray-400"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MetricCard",
  props: {
    title: {},
    value: {},
    change: {},
    trend: { default: "stable" },
    icon: {},
    color: {},
    description: {},
    loading: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const displayValue = computed(() => {
      if (typeof props.value === "number") {
        return formatNumber(props.value);
      }
      return props.value;
    });
    const iconBgClass = computed(() => {
      const classes = {
        blue: "bg-blue-500/20",
        green: "bg-green-500/20",
        purple: "bg-purple-500/20",
        red: "bg-red-500/20",
        yellow: "bg-yellow-500/20",
        cyan: "bg-cyan-500/20"
      };
      return classes[props.color];
    });
    const iconColorClass = computed(() => {
      const classes = {
        blue: "text-blue-400",
        green: "text-green-400",
        purple: "text-purple-400",
        red: "text-red-400",
        yellow: "text-yellow-400",
        cyan: "text-cyan-400"
      };
      return classes[props.color];
    });
    const trendIcon = computed(() => {
      const icons = {
        up: "pi pi-arrow-up",
        down: "pi pi-arrow-down",
        stable: "pi pi-minus"
      };
      return icons[props.trend];
    });
    const trendColorClass = computed(() => {
      const classes = {
        up: "text-green-400",
        down: "text-red-400",
        stable: "text-gray-400"
      };
      return classes[props.trend];
    });
    function formatNumber(num) {
      if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + "M";
      } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + "K";
      }
      return num.toLocaleString();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["metric-card bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300", [
          `metric-card--${_ctx.color}`,
          { "metric-card--loading": _ctx.loading }
        ]])
      }, [
        _ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_1$3, _cache[0] || (_cache[0] = [
          createStaticVNode('<div class="flex items-center justify-between mb-3" data-v-ec8d540e><div class="h-4 bg-white/20 rounded w-1/2" data-v-ec8d540e></div><div class="h-8 w-8 bg-white/20 rounded" data-v-ec8d540e></div></div><div class="h-8 bg-white/20 rounded w-3/4 mb-2" data-v-ec8d540e></div><div class="h-4 bg-white/20 rounded w-1/3" data-v-ec8d540e></div>', 3)
        ]))) : (openBlock(), createElementBlock("div", _hoisted_2$3, [
          createBaseVNode("div", _hoisted_3$3, [
            createBaseVNode("h3", _hoisted_4$3, toDisplayString(_ctx.title), 1),
            createBaseVNode("div", {
              class: normalizeClass(["w-8 h-8 rounded-lg flex items-center justify-center", iconBgClass.value])
            }, [
              createBaseVNode("i", {
                class: normalizeClass([_ctx.icon, iconColorClass.value, "text-sm"])
              }, null, 2)
            ], 2)
          ]),
          createBaseVNode("div", _hoisted_5$3, [
            createBaseVNode("span", _hoisted_6$3, toDisplayString(displayValue.value), 1)
          ]),
          _ctx.change ? (openBlock(), createElementBlock("div", _hoisted_7$3, [
            createBaseVNode("i", {
              class: normalizeClass([
                trendIcon.value,
                trendColorClass.value,
                "mr-1"
              ])
            }, null, 2),
            createBaseVNode("span", {
              class: normalizeClass(trendColorClass.value)
            }, toDisplayString(_ctx.change), 3),
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "text-gray-400 ml-1" }, "相比上期", -1))
          ])) : createCommentVNode("", true),
          _ctx.description ? (openBlock(), createElementBlock("div", _hoisted_8$2, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true)
        ]))
      ], 2);
    };
  }
});
const MetricCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ec8d540e"]]);
const _hoisted_1$2 = { class: "empty-state-card bg-white/5 backdrop-blur-sm rounded-xl p-12 border border-white/10 text-center" };
const _hoisted_2$2 = { class: "w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center" };
const _hoisted_3$2 = { class: "text-xl font-semibold text-white mb-3" };
const _hoisted_4$2 = { class: "text-gray-400 mb-8 max-w-md mx-auto leading-relaxed" };
const _hoisted_5$2 = {
  key: 0,
  class: "flex flex-col sm:flex-row gap-3 justify-center"
};
const _hoisted_6$2 = ["onClick"];
const _hoisted_7$2 = {
  key: 1,
  class: "mt-6 text-sm text-gray-500"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "EmptyStateCard",
  props: {
    title: {},
    description: {},
    icon: {},
    actions: {},
    helpText: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("i", {
            class: normalizeClass([_ctx.icon, "text-3xl text-gray-400"])
          }, null, 2)
        ]),
        createBaseVNode("h3", _hoisted_3$2, toDisplayString(_ctx.title), 1),
        createBaseVNode("p", _hoisted_4$2, toDisplayString(_ctx.description), 1),
        _ctx.actions && _ctx.actions.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.actions, (action) => {
            return openBlock(), createElementBlock("button", {
              key: action.label,
              onClick: action.action,
              class: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            }, [
              action.icon ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: normalizeClass([action.icon, "text-sm"])
              }, null, 2)) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(action.label), 1)
            ], 8, _hoisted_6$2);
          }), 128))
        ])) : createCommentVNode("", true),
        _ctx.helpText ? (openBlock(), createElementBlock("div", _hoisted_7$2, toDisplayString(_ctx.helpText), 1)) : createCommentVNode("", true)
      ]);
    };
  }
});
const EmptyStateCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1e7d5a8b"]]);
const _hoisted_1$1 = { class: "dashboard-overview" };
const _hoisted_2$1 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" };
const _hoisted_3$1 = {
  key: 0,
  class: "grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6"
};
const _hoisted_4$1 = { class: "grid grid-cols-1 gap-1" };
const _hoisted_5$1 = { class: "flex items-center" };
const _hoisted_6$1 = { class: "text-gray-300 capitalize" };
const _hoisted_7$1 = { class: "text-white font-medium" };
const _hoisted_8$1 = { class: "space-y-1" };
const _hoisted_9$1 = { class: "text-gray-300 truncate" };
const _hoisted_10$1 = { class: "text-white font-medium ml-2" };
const _hoisted_11$1 = { class: "space-y-1" };
const _hoisted_12$1 = { class: "text-gray-300 truncate" };
const _hoisted_13$1 = { class: "text-white font-medium ml-2" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DashboardOverview",
  props: {
    data: {},
    loading: { type: Boolean, default: false },
    hasData: { type: Boolean, default: false }
  },
  emits: ["navigate-to-import", "refresh-data"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useAppStore();
    const keyMetrics = computed(() => [
      {
        key: "total-logs",
        title: "总日志数",
        value: formatNumber(props.data.totalLogs),
        icon: "pi-file",
        color: "blue"
      },
      {
        key: "unique-ips",
        title: "独立访客",
        value: formatNumber(props.data.uniqueIPs),
        icon: "pi-users",
        color: "green"
      },
      {
        key: "bandwidth",
        title: "总流量",
        value: formatBytes(props.data.totalBandwidth),
        icon: "pi-chart-line",
        color: "purple"
      },
      {
        key: "threat-rate",
        title: "威胁检出率",
        value: `${props.data.threatRate}%`,
        icon: "pi-shield",
        color: props.data.threatRate > 5 ? "red" : "green"
      }
    ]);
    function formatNumber(num) {
      if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + "M";
      } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + "K";
      }
      return num.toString();
    }
    function formatBytes(bytes) {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB", "TB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    }
    function getThreatLevelColor(level) {
      const colors = {
        critical: "bg-red-500",
        high: "bg-orange-500",
        medium: "bg-yellow-500",
        low: "bg-blue-500",
        normal: "bg-green-500"
      };
      return colors[level] || "bg-gray-500";
    }
    function getThreatLevelLabel(level) {
      const labels = {
        critical: "严重",
        high: "高危",
        medium: "中危",
        low: "低危",
        normal: "正常"
      };
      return labels[level] || level;
    }
    function getTopCountries(limit = 5) {
      const countries = props.data.locationStats.countries;
      const entries = Object.entries(countries).sort(([, a], [, b]) => b - a).slice(0, limit);
      return Object.fromEntries(entries);
    }
    function getTopCities(limit = 5) {
      const cities = props.data.locationStats.cities;
      const entries = Object.entries(cities).sort(([, a], [, b]) => b - a).slice(0, limit);
      return Object.fromEntries(entries);
    }
    onMounted(() => {
    });
    onUnmounted(() => {
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(keyMetrics.value, (metric) => {
            return openBlock(), createBlock(MetricCard, {
              key: metric.key,
              title: metric.title,
              value: metric.value,
              icon: metric.icon,
              color: metric.color,
              loading: _ctx.loading
            }, null, 8, ["title", "value", "icon", "color", "loading"]);
          }), 128))
        ]),
        _ctx.hasData ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
          createVNode(_sfc_main$4, {
            type: "card",
            class: "p-3"
          }, {
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "text-sm font-semibold text-white mb-2 flex items-center" }, [
                createBaseVNode("i", { class: "pi pi-shield mr-2 text-red-400" }),
                createTextVNode(" 威胁等级分布 ")
              ], -1)),
              createBaseVNode("div", _hoisted_4$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data.threatDistribution, (count, level) => {
                  return openBlock(), createElementBlock("div", {
                    key: level,
                    class: "flex items-center justify-between py-1 px-2 bg-white/5 rounded text-xs"
                  }, [
                    createBaseVNode("div", _hoisted_5$1, [
                      createBaseVNode("div", {
                        class: normalizeClass([
                          "w-2 h-2 rounded-full mr-2",
                          getThreatLevelColor(level)
                        ])
                      }, null, 2),
                      createBaseVNode("span", _hoisted_6$1, toDisplayString(getThreatLevelLabel(level)), 1)
                    ]),
                    createBaseVNode("span", _hoisted_7$1, toDisplayString(count), 1)
                  ]);
                }), 128))
              ])
            ]),
            _: 1,
            __: [0]
          }),
          createVNode(_sfc_main$4, {
            type: "card",
            class: "p-3"
          }, {
            default: withCtx(() => [
              _cache[1] || (_cache[1] = createBaseVNode("h3", { class: "text-sm font-semibold text-white mb-2 flex items-center" }, [
                createBaseVNode("i", { class: "pi pi-flag mr-2 text-blue-400" }),
                createTextVNode(" 地区分布 TOP 5 ")
              ], -1)),
              createBaseVNode("div", _hoisted_8$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(getTopCountries(5), (count, country) => {
                  return openBlock(), createElementBlock("div", {
                    key: `country-${country}`,
                    class: "flex items-center justify-between py-1 px-2 bg-white/5 rounded text-xs"
                  }, [
                    createBaseVNode("span", _hoisted_9$1, toDisplayString(country), 1),
                    createBaseVNode("span", _hoisted_10$1, toDisplayString(count), 1)
                  ]);
                }), 128))
              ])
            ]),
            _: 1,
            __: [1]
          }),
          createVNode(_sfc_main$4, {
            type: "card",
            class: "p-3"
          }, {
            default: withCtx(() => [
              _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "text-sm font-semibold text-white mb-2 flex items-center" }, [
                createBaseVNode("i", { class: "pi pi-building mr-2 text-green-400" }),
                createTextVNode(" 城市分布 TOP 5 ")
              ], -1)),
              createBaseVNode("div", _hoisted_11$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(getTopCities(5), (count, city) => {
                  return openBlock(), createElementBlock("div", {
                    key: `city-${city}`,
                    class: "flex items-center justify-between py-1 px-2 bg-white/5 rounded text-xs"
                  }, [
                    createBaseVNode("span", _hoisted_12$1, toDisplayString(city), 1),
                    createBaseVNode("span", _hoisted_13$1, toDisplayString(count), 1)
                  ]);
                }), 128))
              ])
            ]),
            _: 1,
            __: [2]
          })
        ])) : createCommentVNode("", true),
        !_ctx.hasData && !_ctx.loading ? (openBlock(), createBlock(EmptyStateCard, {
          key: 1,
          title: "暂无数据",
          description: "请先导入日志数据以查看仪表盘统计信息",
          icon: "pi-chart-bar",
          actions: [
            { label: "导入数据", action: () => _ctx.$emit("navigate-to-import"), icon: "pi-upload" }
          ]
        }, null, 8, ["actions"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const DashboardOverview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fe21590f"]]);
class DashboardDataService {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
    this.CACHE_DURATION = 5 * 60 * 1e3;
    this.isProcessing = false;
  }
  static getInstance() {
    if (!DashboardDataService.instance) {
      DashboardDataService.instance = new DashboardDataService();
    }
    return DashboardDataService.instance;
  }
  /**
   * 获取仪表盘数据（带缓存）
   */
  async getDashboardData(forceRefresh = false) {
    const cacheKey = "dashboard_data";
    const now = Date.now();
    console.log(`[DashboardDataService] getDashboardData called, forceRefresh: ${forceRefresh}`);
    if (!forceRefresh && this.cache.has(cacheKey)) {
      const cached = this.cache.get(cacheKey);
      console.log(`[DashboardDataService] 找到缓存数据，totalLogs: ${cached.data.totalLogs}，年龄: ${now - cached.timestamp}ms`);
      if (now - cached.timestamp < this.CACHE_DURATION) {
        if (cached.data.totalLogs > 0) {
          console.log("[DashboardDataService] 使用有效缓存数据");
          return cached.data;
        } else {
          console.log("[DashboardDataService] 缓存数据为空，强制刷新");
          this.cache.delete(cacheKey);
        }
      } else {
        console.log("[DashboardDataService] 缓存已过期，删除缓存");
        this.cache.delete(cacheKey);
      }
    } else {
      console.log(`[DashboardDataService] 无缓存数据，缓存大小: ${this.cache.size}`);
    }
    if (this.isProcessing) {
      console.log("[DashboardDataService] 正在处理中，等待完成...");
      return this.waitForProcessing(cacheKey);
    }
    this.isProcessing = true;
    console.log("[DashboardDataService] 开始处理日志数据...");
    try {
      const startTime = Date.now();
      const logs = await getLogData();
      const dashboardData = await this.processLogData(logs);
      dashboardData.cacheInfo.totalProcessingTime = Date.now() - startTime;
      dashboardData.cacheInfo.lastUpdated = /* @__PURE__ */ new Date();
      this.cache.set(cacheKey, { data: dashboardData, timestamp: now });
      console.log(`[DashboardDataService] 数据处理完成，耗时 ${dashboardData.cacheInfo.totalProcessingTime}ms`);
      return dashboardData;
    } finally {
      this.isProcessing = false;
    }
  }
  /**
   * 等待处理完成
   */
  async waitForProcessing(cacheKey) {
    const maxWait = 3e4;
    const startWait = Date.now();
    while (this.isProcessing && Date.now() - startWait < maxWait) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey).data;
    }
    throw new Error("数据处理超时");
  }
  /**
   * 处理日志数据，提取仪表盘所需的统计信息
   */
  async processLogData(logs) {
    console.log(`[DashboardDataService] 处理 ${logs.length} 条日志数据`);
    if (logs.length === 0) {
      return this.getEmptyDashboardData();
    }
    const isLargeDataset = logs.length > 1e5;
    const processedLogs = isLargeDataset ? this.sampleLogs(logs, 5e4) : logs;
    if (isLargeDataset) {
      console.log(`[DashboardDataService] 大数据集检测，从 ${logs.length} 条采样到 ${processedLogs.length} 条`);
    }
    const [
      basicStats,
      topIPs,
      topPages,
      statusCodeStats,
      userAgents,
      threatDistribution,
      locationStatsResult,
      timeDistribution,
      recentActivities
    ] = await Promise.all([
      this.calculateBasicStats(processedLogs),
      this.calculateTopIPs(processedLogs),
      this.calculateTopPages(processedLogs),
      this.calculateStatusCodeStats(processedLogs),
      this.calculateUserAgents(processedLogs),
      this.calculateThreatDistribution(processedLogs),
      this.calculateLocationStats(processedLogs),
      this.calculateTimeDistribution(processedLogs),
      this.extractRecentActivities(processedLogs)
    ]);
    return {
      ...basicStats,
      topIPs,
      topPages,
      statusCodeStats,
      userAgents,
      threatDistribution,
      threatsByCategory: {},
      // 临时添加空对象
      ...locationStatsResult,
      ...timeDistribution,
      recentActivities,
      cacheInfo: {
        lastUpdated: /* @__PURE__ */ new Date(),
        dataSource: "memory",
        // 将根据实际数据源设置
        totalProcessingTime: 0
        // 将在外部设置
      }
    };
  }
  /**
   * 计算基础统计信息
   */
  async calculateBasicStats(logs) {
    const uniqueIPs = new Set(logs.map((log) => log.ip)).size;
    const totalBandwidth = logs.reduce((sum, log) => sum + (log.responseSize || 0), 0);
    const responseTimes = logs.filter((log) => log.timeTaken && log.timeTaken > 0);
    const avgResponseTime = responseTimes.length > 0 ? Math.round(responseTimes.reduce((sum, log) => sum + log.timeTaken, 0) / responseTimes.length) : 0;
    const errorCount = logs.filter((log) => log.statusCode >= 400).length;
    const errorRate = logs.length > 0 ? Math.round(errorCount / logs.length * 100) : 0;
    const threatCount = logs.filter(
      (log) => log.threatLevel && log.threatLevel !== "normal" && log.threatLevel !== "low"
    ).length;
    const threatRate = logs.length > 0 ? Math.round(threatCount / logs.length * 100) : 0;
    const timestamps = logs.map((log) => log.timestamp).filter(Boolean).sort();
    const timeRange = {
      start: timestamps.length > 0 ? timestamps[0] : /* @__PURE__ */ new Date(),
      end: timestamps.length > 0 ? timestamps[timestamps.length - 1] : /* @__PURE__ */ new Date(),
      duration: this.calculateDuration(timestamps[0], timestamps[timestamps.length - 1])
    };
    return {
      totalLogs: logs.length,
      uniqueIPs,
      totalBandwidth,
      avgResponseTime,
      errorRate,
      threatRate,
      timeRange
    };
  }
  /**
   * 计算TOP IP统计（集成地理位置信息）
   */
  async calculateTopIPs(logs) {
    const ipStats = /* @__PURE__ */ new Map();
    logs.forEach((log) => {
      const ip = log.ip;
      if (!this.isValidIP(ip)) return;
      const existing = ipStats.get(ip) || {
        requests: 0,
        bandwidth: 0,
        lastSeen: /* @__PURE__ */ new Date(0),
        threatLevel: ThreatLevel.NORMAL,
        statusCodes: []
      };
      existing.requests++;
      existing.bandwidth += log.responseSize || 0;
      existing.lastSeen = log.timestamp > existing.lastSeen ? log.timestamp : existing.lastSeen;
      if (this.compareThreatLevel(log.threatLevel || ThreatLevel.NORMAL, existing.threatLevel) > 0) {
        existing.threatLevel = log.threatLevel || ThreatLevel.NORMAL;
      }
      existing.statusCodes.push(log.statusCode);
      ipStats.set(ip, existing);
    });
    const topIPs = Array.from(ipStats.entries()).sort(([, a], [, b]) => b.requests - a.requests).slice(0, 10);
    const ips = topIPs.map(([ip]) => ip);
    const locations = await ipGeoLocationAdvancedService.batchGetAdvancedLocations(ips);
    return topIPs.map(([ip, stats]) => {
      const location = locations.get(ip);
      return {
        ip,
        requests: stats.requests,
        location: this.formatLocation(location),
        country: location?.country,
        countryCode: location?.countryCode,
        city: location?.city,
        region: location?.region,
        threatLevel: stats.threatLevel,
        bandwidth: stats.bandwidth,
        lastSeen: stats.lastSeen
      };
    });
  }
  /**
   * 计算TOP页面统计
   */
  async calculateTopPages(logs) {
    const pageStats = /* @__PURE__ */ new Map();
    logs.forEach((log) => {
      const path = log.path || "/";
      const existing = pageStats.get(path) || {
        requests: 0,
        totalResponseTime: 0,
        responseTimeCount: 0,
        statusCodes: {},
        methods: {},
        errors: 0,
        bandwidth: 0
      };
      existing.requests++;
      existing.bandwidth += log.responseSize || 0;
      if (log.timeTaken && log.timeTaken > 0) {
        existing.totalResponseTime += log.timeTaken;
        existing.responseTimeCount++;
      }
      existing.statusCodes[log.statusCode] = (existing.statusCodes[log.statusCode] || 0) + 1;
      existing.methods[log.method] = (existing.methods[log.method] || 0) + 1;
      if (log.statusCode >= 400) {
        existing.errors++;
      }
      pageStats.set(path, existing);
    });
    return Array.from(pageStats.entries()).sort(([, a], [, b]) => b.requests - a.requests).slice(0, 10).map(([path, stats]) => ({
      path,
      requests: stats.requests,
      avgResponseTime: stats.responseTimeCount > 0 ? Math.round(stats.totalResponseTime / stats.responseTimeCount) : 0,
      totalResponseTime: stats.totalResponseTime,
      statusCodes: stats.statusCodes,
      methods: stats.methods,
      errors: stats.errors,
      bandwidth: stats.bandwidth
    }));
  }
  /**
   * 计算状态码统计
   */
  async calculateStatusCodeStats(logs) {
    const statusStats = /* @__PURE__ */ new Map();
    logs.forEach((log) => {
      const status = log.statusCode.toString();
      const existing = statusStats.get(status) || {
        count: 0,
        paths: /* @__PURE__ */ new Set(),
        ips: /* @__PURE__ */ new Set(),
        methods: /* @__PURE__ */ new Set()
      };
      existing.count++;
      existing.paths.add(log.path || "/");
      existing.ips.add(log.ip);
      existing.methods.add(log.method);
      statusStats.set(status, existing);
    });
    const totalLogs = logs.length;
    return Array.from(statusStats.entries()).sort(([, a], [, b]) => b.count - a.count).slice(0, 10).map(([status, stats]) => ({
      status,
      count: stats.count,
      percentage: totalLogs > 0 ? Math.round(stats.count / totalLogs * 100) : 0,
      paths: Array.from(stats.paths).slice(0, 5),
      ips: Array.from(stats.ips).slice(0, 5),
      methods: Array.from(stats.methods)
    }));
  }
  /**
   * 计算用户代理统计
   */
  async calculateUserAgents(logs) {
    const agentStats = /* @__PURE__ */ new Map();
    logs.forEach((log) => {
      const agent = log.userAgent || "Unknown";
      const existing = agentStats.get(agent) || {
        count: 0,
        ips: /* @__PURE__ */ new Set(),
        threatLevel: ThreatLevel.NORMAL
      };
      existing.count++;
      existing.ips.add(log.ip);
      if (this.compareThreatLevel(log.threatLevel || ThreatLevel.NORMAL, existing.threatLevel) > 0) {
        existing.threatLevel = log.threatLevel || ThreatLevel.NORMAL;
      }
      agentStats.set(agent, existing);
    });
    return Array.from(agentStats.entries()).sort(([, a], [, b]) => b.count - a.count).slice(0, 10).map(([agent, stats]) => ({
      agent,
      shortAgent: this.shortenUserAgent(agent),
      count: stats.count,
      type: this.classifyUserAgent(agent),
      ips: Array.from(stats.ips),
      threatLevel: stats.threatLevel
    }));
  }
  /**
   * 计算威胁分布
   */
  async calculateThreatDistribution(logs) {
    const distribution = {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
      normal: 0
    };
    logs.forEach((log) => {
      const level = log.threatLevel || "normal";
      if (level in distribution) {
        distribution[level]++;
      }
    });
    return distribution;
  }
  /**
   * 计算地理位置统计
   */
  async calculateLocationStats(logs) {
    const validIPs = logs.map((log) => log.ip).filter((ip) => this.isValidIP(ip));
    const uniqueIPs = Array.from(new Set(validIPs));
    const locations = await ipGeoLocationAdvancedService.batchGetAdvancedLocations(uniqueIPs);
    const countries = {};
    const cities = {};
    const regions = {};
    const ipCounts = /* @__PURE__ */ new Map();
    logs.forEach((log) => {
      ipCounts.set(log.ip, (ipCounts.get(log.ip) || 0) + 1);
    });
    uniqueIPs.forEach((ip) => {
      const location = locations.get(ip);
      const count = ipCounts.get(ip) || 0;
      if (location) {
        if (location.country) {
          countries[location.country] = (countries[location.country] || 0) + count;
        }
        if (location.city) {
          cities[location.city] = (cities[location.city] || 0) + count;
        }
        if (location.region) {
          regions[location.region] = (regions[location.region] || 0) + count;
        }
      } else {
        countries["未知"] = (countries["未知"] || 0) + count;
        cities["未知"] = (cities["未知"] || 0) + count;
        regions["未知"] = (regions["未知"] || 0) + count;
      }
    });
    return {
      locationStats: { countries, cities, regions }
    };
  }
  /**
   * 计算时间分布
   */
  async calculateTimeDistribution(logs) {
    const hourlyDistribution = {};
    const dailyDistribution = {};
    for (let i = 0; i < 24; i++) {
      hourlyDistribution[i] = 0;
    }
    logs.forEach((log) => {
      const date = log.timestamp;
      const hour = date.getHours();
      const day = date.toISOString().split("T")[0];
      hourlyDistribution[hour]++;
      dailyDistribution[day] = (dailyDistribution[day] || 0) + 1;
    });
    return { hourlyDistribution, dailyDistribution };
  }
  /**
   * 提取最近活动
   */
  async extractRecentActivities(logs) {
    const recentLogs = logs.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()).slice(0, 50);
    const activities = [];
    const validLogs = recentLogs.filter((log) => this.isValidIP(log.ip));
    const uniqueIPs = Array.from(new Set(validLogs.map((log) => log.ip)));
    const locations = await ipGeoLocationAdvancedService.batchGetAdvancedLocations(uniqueIPs);
    for (const log of recentLogs) {
      const activity = {
        timestamp: log.timestamp,
        type: this.getActivityType(log),
        ip: log.ip,
        message: this.generateActivityMessage(log),
        severity: this.mapThreatLevelToSeverity(log.threatLevel || ThreatLevel.NORMAL),
        path: log.path,
        method: log.method,
        statusCode: log.statusCode,
        userAgent: log.userAgent
      };
      if (this.isValidIP(log.ip)) {
        const location = locations.get(log.ip);
        if (location) {
          activity.location = this.formatLocation(location);
        }
      }
      activities.push(activity);
    }
    return activities;
  }
  /**
   * 辅助方法
   */
  getEmptyDashboardData() {
    return {
      totalLogs: 0,
      uniqueIPs: 0,
      totalBandwidth: 0,
      avgResponseTime: 0,
      errorRate: 0,
      threatRate: 0,
      timeRange: {
        start: /* @__PURE__ */ new Date(),
        end: /* @__PURE__ */ new Date(),
        duration: "0分钟"
      },
      topIPs: [],
      topPages: [],
      statusCodeStats: [],
      userAgents: [],
      threatDistribution: { critical: 0, high: 0, medium: 0, low: 0, normal: 0 },
      threatsByCategory: {},
      locationStats: { countries: {}, cities: {}, regions: {} },
      hourlyDistribution: {},
      dailyDistribution: {},
      recentActivities: [],
      cacheInfo: {
        lastUpdated: /* @__PURE__ */ new Date(),
        dataSource: "memory",
        totalProcessingTime: 0
      }
    };
  }
  formatLocation(location) {
    if (!location) return "未知";
    const parts = [];
    if (location.city) parts.push(location.city);
    if (location.region && location.region !== location.city) parts.push(location.region);
    if (location.country) parts.push(location.country);
    return parts.length > 0 ? parts.join(", ") : "未知";
  }
  compareThreatLevel(level1, level2) {
    const levels = { normal: 0, low: 1, medium: 2, high: 3, critical: 4 };
    return (levels[level1] || 0) - (levels[level2] || 0);
  }
  shortenUserAgent(agent) {
    if (agent.length <= 50) return agent;
    const browserMatch = agent.match(/(Chrome|Firefox|Safari|Edge|Opera|Internet Explorer)\/?([\d.]+)?/i);
    if (browserMatch) {
      return `${browserMatch[1]}${browserMatch[2] ? ` ${browserMatch[2]}` : ""}`;
    }
    return agent.substring(0, 50) + "...";
  }
  classifyUserAgent(agent) {
    agent.toLowerCase();
    if (/(bot|crawler|spider|scraper)/i.test(agent)) return "bot";
    if (/(scanner|sqlmap|nmap|nikto|dirb|gobuster)/i.test(agent)) return "scanner";
    if (/(chrome|firefox|safari|edge|opera)/i.test(agent)) return "browser";
    return "unknown";
  }
  getActivityType(log) {
    if (log.threatLevel && log.threatLevel !== "normal" && log.threatLevel !== "low") {
      return "threat";
    }
    if (log.statusCode >= 400) {
      return "error";
    }
    return "access";
  }
  generateActivityMessage(log) {
    const method = log.method || "GET";
    const path = log.path || "/";
    const status = log.statusCode;
    if (log.threatLevel && log.threatLevel !== "normal") {
      return `检测到${log.threatLevel}级威胁：${method} ${path}`;
    }
    if (status >= 500) {
      return `服务器错误：${method} ${path} (${status})`;
    }
    if (status >= 400) {
      return `客户端错误：${method} ${path} (${status})`;
    }
    return `${method} ${path} (${status})`;
  }
  mapThreatLevelToSeverity(threatLevel) {
    const mapping = {
      normal: "low",
      low: "low",
      medium: "medium",
      high: "high",
      critical: "critical"
    };
    return mapping[threatLevel] || "low";
  }
  calculateDuration(start, end) {
    if (!start || !end) return "0分钟";
    const diffMs = end.getTime() - start.getTime();
    const diffHours = Math.floor(diffMs / (1e3 * 60 * 60));
    const diffMinutes = Math.floor(diffMs % (1e3 * 60 * 60) / (1e3 * 60));
    if (diffHours > 0) {
      return `${diffHours}小时${diffMinutes}分钟`;
    }
    return `${diffMinutes}分钟`;
  }
  isValidIP(ip) {
    if (!ip || ip === "unknown" || ip === "cs-username" || ip === "-" || ip === "") {
      return false;
    }
    const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
    const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return ipv4Regex.test(ip) || ipv6Regex.test(ip);
  }
  /**
   * 采样日志数据以提高性能
   */
  sampleLogs(logs, targetSize) {
    if (logs.length <= targetSize) {
      return logs;
    }
    const step = Math.ceil(logs.length / targetSize);
    const sampled = [];
    for (let i = 0; i < logs.length; i += step) {
      sampled.push(logs[i]);
      if (sampled.length >= targetSize) break;
    }
    return sampled;
  }
  /**
   * 清除缓存
   */
  clearCache() {
    this.cache.clear();
    console.log("[DashboardDataService] 缓存已清除");
  }
  /**
   * 获取缓存状态
   */
  getCacheInfo() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }
}
const dashboardDataService = DashboardDataService.getInstance();
const _hoisted_1 = { class: "mb-8" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = { class: "text-gray-400" };
const _hoisted_4 = {
  key: 0,
  class: "ml-4"
};
const _hoisted_5 = { class: "flex gap-3" };
const _hoisted_6 = ["disabled"];
const _hoisted_7 = {
  key: 0,
  class: "p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 mb-6"
};
const _hoisted_8 = { class: "flex items-center" };
const _hoisted_9 = {
  key: 1,
  class: "grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8"
};
const _hoisted_10 = { class: "space-y-3 max-h-96 overflow-y-auto" };
const _hoisted_11 = { class: "flex items-center" };
const _hoisted_12 = { class: "w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3" };
const _hoisted_13 = { class: "text-green-400 font-medium text-sm" };
const _hoisted_14 = { class: "text-white font-medium" };
const _hoisted_15 = { class: "text-gray-400 text-sm" };
const _hoisted_16 = {
  key: 0,
  class: "flex items-center mt-1"
};
const _hoisted_17 = { class: "text-xs text-orange-400" };
const _hoisted_18 = { class: "text-right" };
const _hoisted_19 = { class: "text-white font-semibold" };
const _hoisted_20 = { class: "text-gray-400 text-sm" };
const _hoisted_21 = { class: "space-y-3 max-h-96 overflow-y-auto" };
const _hoisted_22 = { class: "flex items-center flex-1" };
const _hoisted_23 = { class: "w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3" };
const _hoisted_24 = { class: "text-purple-400 font-medium text-sm" };
const _hoisted_25 = { class: "flex-1 min-w-0" };
const _hoisted_26 = { class: "text-white font-medium truncate" };
const _hoisted_27 = { class: "text-gray-400 text-sm" };
const _hoisted_28 = {
  key: 0,
  class: "ml-2 text-red-400"
};
const _hoisted_29 = { class: "text-white font-semibold ml-4" };
const _hoisted_30 = { class: "space-y-3" };
const _hoisted_31 = { class: "flex items-center" };
const _hoisted_32 = { class: "text-white font-medium text-sm" };
const _hoisted_33 = { class: "text-white" };
const _hoisted_34 = { class: "text-gray-400 text-sm" };
const _hoisted_35 = { class: "w-24 bg-gray-700 rounded-full h-2" };
const _hoisted_36 = { class: "space-y-3 max-h-96 overflow-y-auto" };
const _hoisted_37 = { class: "flex items-center flex-1" };
const _hoisted_38 = { class: "flex-1 min-w-0" };
const _hoisted_39 = { class: "text-white font-medium truncate" };
const _hoisted_40 = { class: "text-gray-400 text-sm" };
const _hoisted_41 = {
  key: 0,
  class: "ml-2"
};
const _hoisted_42 = { class: "text-white font-semibold ml-4" };
const _hoisted_43 = {
  key: 2,
  class: "mt-8"
};
const _hoisted_44 = { class: "space-y-2 max-h-96 overflow-y-auto" };
const _hoisted_45 = { class: "flex-1 min-w-0" };
const _hoisted_46 = { class: "text-white text-sm" };
const _hoisted_47 = { class: "text-gray-400 text-xs" };
const _hoisted_48 = {
  key: 0,
  class: "ml-1"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DashboardPage",
  setup(__props) {
    useAppStore();
    useMemoryStore();
    const router = useRouter();
    const themeStore = useThemeStore();
    const loading = ref(true);
    const error = ref(null);
    const dashboardData = ref(null);
    const currentDataMode = computed(() => {
      return getCurrentDataModeLabel();
    });
    const hasData = computed(() => {
      return dashboardData.value && dashboardData.value.totalLogs > 0;
    });
    const overviewData = computed(() => {
      if (!dashboardData.value) {
        return {
          totalLogs: 0,
          uniqueIPs: 0,
          totalBandwidth: 0,
          avgResponseTime: 0,
          errorRate: 0,
          threatRate: 0,
          threatDistribution: { critical: 0, high: 0, medium: 0, low: 0, normal: 0 },
          locationStats: { countries: {}, cities: {}, regions: {} }
        };
      }
      return {
        totalLogs: dashboardData.value.totalLogs,
        uniqueIPs: dashboardData.value.uniqueIPs,
        totalBandwidth: dashboardData.value.totalBandwidth,
        avgResponseTime: dashboardData.value.avgResponseTime,
        errorRate: dashboardData.value.errorRate,
        threatRate: dashboardData.value.threatRate,
        threatDistribution: dashboardData.value.threatDistribution,
        locationStats: dashboardData.value.locationStats
      };
    });
    onMounted(async () => {
      console.log("[DashboardPage] 页面加载，开始获取数据");
      await loadData(true);
    });
    onUnmounted(() => {
    });
    async function loadData(forceRefresh = false) {
      loading.value = true;
      error.value = null;
      try {
        console.log(`[DashboardPage] 开始加载数据，forceRefresh: ${forceRefresh}`);
        dashboardData.value = await dashboardDataService.getDashboardData(forceRefresh);
        console.log(`[DashboardPage] 数据加载完成，totalLogs: ${dashboardData.value?.totalLogs || 0}`);
      } catch (err) {
        console.error("[DashboardPage] Failed to load dashboard data:", err);
        error.value = err instanceof Error ? err.message : "数据加载失败";
        dashboardData.value = null;
      } finally {
        loading.value = false;
      }
    }
    async function refreshData() {
      if (loading.value) {
        console.log("[DashboardPage] 已在加载中，忽略刷新请求");
        return;
      }
      console.log("[DashboardPage] 手动刷新数据");
      await loadData(true);
    }
    function navigateToImport() {
      router.push("/import");
    }
    function formatNumber(num) {
      if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + "M";
      } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + "K";
      }
      return num.toLocaleString();
    }
    function formatBytes(bytes) {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB", "TB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    }
    function formatTime(date) {
      return date.toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
    function getTimeAgo(date) {
      const now = Date.now();
      const diff = now - date.getTime();
      if (diff < 6e4) return "刚刚";
      if (diff < 36e5) return `${Math.floor(diff / 6e4)}分钟前`;
      if (diff < 864e5) return `${Math.floor(diff / 36e5)}小时前`;
      return `${Math.floor(diff / 864e5)}天前`;
    }
    function getThreatLevelColor(level) {
      const colors = {
        critical: "bg-red-500",
        high: "bg-orange-500",
        medium: "bg-yellow-500",
        low: "bg-blue-500",
        normal: "bg-green-500"
      };
      return colors[level] || "bg-gray-500";
    }
    function getThreatLevelBgColor(level) {
      const colors = {
        critical: "bg-red-500/20 text-red-400",
        high: "bg-orange-500/20 text-orange-400",
        medium: "bg-yellow-500/20 text-yellow-400",
        low: "bg-blue-500/20 text-blue-400",
        normal: "bg-green-500/20 text-green-400"
      };
      return colors[level] || "bg-gray-500/20 text-gray-400";
    }
    function getThreatLevelLabel(level) {
      const labels = {
        critical: "严重",
        high: "高危",
        medium: "中危",
        low: "低危",
        normal: "正常"
      };
      return labels[level] || level;
    }
    function getAgentTypeLabel(type) {
      const labels = {
        browser: "浏览器",
        bot: "机器人",
        scanner: "扫描器",
        unknown: "未知"
      };
      return labels[type] || type;
    }
    function getActivityIcon(type) {
      const icons = {
        access: "pi-eye",
        threat: "pi-shield",
        error: "pi-exclamation-triangle",
        system: "pi-cog"
      };
      return icons[type] || "pi-circle";
    }
    function getStatusCodeColor(statusCode) {
      if (statusCode >= 500) return "bg-red-500";
      if (statusCode >= 400) return "bg-orange-500";
      if (statusCode >= 300) return "bg-yellow-500";
      if (statusCode >= 200) return "bg-green-500";
      return "bg-gray-500";
    }
    function getStatusCodeBarColor(statusCode) {
      if (statusCode >= 500) return "bg-gradient-to-r from-red-500 to-red-600";
      if (statusCode >= 400) return "bg-gradient-to-r from-orange-500 to-orange-600";
      if (statusCode >= 300) return "bg-gradient-to-r from-yellow-500 to-yellow-600";
      if (statusCode >= 200) return "bg-gradient-to-r from-green-500 to-green-600";
      return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
    function getActivityColor(type, severity) {
      if (type === "threat") {
        const threatColors = {
          critical: "text-red-400",
          high: "text-orange-400",
          medium: "text-yellow-400",
          low: "text-blue-400"
        };
        return threatColors[severity] || "text-red-400";
      }
      const typeColors = {
        access: "text-green-400",
        error: "text-red-400",
        system: "text-blue-400"
      };
      return typeColors[type] || "text-gray-400";
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$4, {
        type: "page",
        class: "dashboard-page"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", null, [
                _cache[0] || (_cache[0] = createBaseVNode("h1", { class: "text-3xl font-bold text-white mb-2" }, [
                  createBaseVNode("i", { class: "pi pi-chart-bar mr-3 text-blue-400" }),
                  createTextVNode(" 仪表盘 ")
                ], -1)),
                createBaseVNode("p", _hoisted_3, [
                  createTextVNode(" 数据模式：" + toDisplayString(currentDataMode.value) + " ", 1),
                  dashboardData.value ? (openBlock(), createElementBlock("span", _hoisted_4, " 最后更新：" + toDisplayString(formatTime(dashboardData.value.cacheInfo.lastUpdated)), 1)) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("button", {
                  onClick: refreshData,
                  disabled: loading.value,
                  class: normalizeClass([
                    "disabled:bg-gray-600 flex items-center gap-2",
                    unref(themeStore).themeClasses.buttonStyle,
                    "px-4 py-2 text-white rounded-lg font-medium transition-colors duration-200"
                  ])
                }, [
                  createBaseVNode("i", {
                    class: normalizeClass(["pi pi-refresh", { "animate-spin": loading.value }])
                  }, null, 2),
                  createTextVNode(" " + toDisplayString(loading.value ? "加载中..." : "刷新数据"), 1)
                ], 10, _hoisted_6)
              ])
            ])
          ]),
          error.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              _cache[1] || (_cache[1] = createBaseVNode("i", { class: "pi pi-exclamation-triangle mr-2" }, null, -1)),
              createBaseVNode("span", null, toDisplayString(error.value), 1)
            ])
          ])) : createCommentVNode("", true),
          createVNode(DashboardOverview, {
            data: overviewData.value,
            loading: loading.value,
            "has-data": hasData.value,
            onNavigateToImport: navigateToImport,
            onRefreshData: refreshData
          }, null, 8, ["data", "loading", "has-data"]),
          hasData.value && dashboardData.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
            createVNode(_sfc_main$4, { type: "card" }, {
              default: withCtx(() => [
                _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4" }, [
                  createBaseVNode("i", { class: "pi pi-users mr-2 text-green-400" }),
                  createTextVNode(" TOP IP地址 ")
                ], -1)),
                createBaseVNode("div", _hoisted_10, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(dashboardData.value.topIPs, (ip, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: ip.ip,
                      class: "flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    }, [
                      createBaseVNode("div", _hoisted_11, [
                        createBaseVNode("div", _hoisted_12, [
                          createBaseVNode("span", _hoisted_13, toDisplayString(index + 1), 1)
                        ]),
                        createBaseVNode("div", null, [
                          createBaseVNode("div", _hoisted_14, toDisplayString(ip.ip), 1),
                          createBaseVNode("div", _hoisted_15, toDisplayString(ip.location), 1),
                          ip.threatLevel && ip.threatLevel !== "normal" ? (openBlock(), createElementBlock("div", _hoisted_16, [
                            createBaseVNode("div", {
                              class: normalizeClass([
                                "w-2 h-2 rounded-full mr-2",
                                getThreatLevelColor(ip.threatLevel)
                              ])
                            }, null, 2),
                            createBaseVNode("span", _hoisted_17, toDisplayString(getThreatLevelLabel(ip.threatLevel)), 1)
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_18, [
                        createBaseVNode("div", _hoisted_19, toDisplayString(formatNumber(ip.requests)), 1),
                        createBaseVNode("div", _hoisted_20, toDisplayString(formatBytes(ip.bandwidth)), 1)
                      ])
                    ]);
                  }), 128))
                ])
              ]),
              _: 1,
              __: [2]
            }),
            createVNode(_sfc_main$4, { type: "card" }, {
              default: withCtx(() => [
                _cache[3] || (_cache[3] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4" }, [
                  createBaseVNode("i", { class: "pi pi-file mr-2 text-purple-400" }),
                  createTextVNode(" 热门页面 ")
                ], -1)),
                createBaseVNode("div", _hoisted_21, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(dashboardData.value.topPages, (page, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: page.path,
                      class: "flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    }, [
                      createBaseVNode("div", _hoisted_22, [
                        createBaseVNode("div", _hoisted_23, [
                          createBaseVNode("span", _hoisted_24, toDisplayString(index + 1), 1)
                        ]),
                        createBaseVNode("div", _hoisted_25, [
                          createBaseVNode("div", _hoisted_26, toDisplayString(page.path), 1),
                          createBaseVNode("div", _hoisted_27, [
                            createTextVNode(" 平均响应时间: " + toDisplayString(page.avgResponseTime) + "ms ", 1),
                            page.errors > 0 ? (openBlock(), createElementBlock("span", _hoisted_28, " 错误: " + toDisplayString(page.errors), 1)) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_29, toDisplayString(formatNumber(page.requests)), 1)
                    ]);
                  }), 128))
                ])
              ]),
              _: 1,
              __: [3]
            }),
            createVNode(_sfc_main$4, { type: "card" }, {
              default: withCtx(() => [
                _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4" }, [
                  createBaseVNode("i", { class: "pi pi-chart-bar mr-2 text-blue-400" }),
                  createTextVNode(" 状态码分布 ")
                ], -1)),
                createBaseVNode("div", _hoisted_30, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(dashboardData.value.statusCodeStats, (statusStat) => {
                    return openBlock(), createElementBlock("div", {
                      key: statusStat.status,
                      class: "flex items-center justify-between"
                    }, [
                      createBaseVNode("div", _hoisted_31, [
                        createBaseVNode("div", {
                          class: normalizeClass([
                            "w-12 h-6 rounded flex items-center justify-center mr-3",
                            getStatusCodeColor(parseInt(statusStat.status))
                          ])
                        }, [
                          createBaseVNode("span", _hoisted_32, toDisplayString(statusStat.status), 1)
                        ], 2),
                        createBaseVNode("div", null, [
                          createBaseVNode("div", _hoisted_33, toDisplayString(formatNumber(statusStat.count)) + " 次", 1),
                          createBaseVNode("div", _hoisted_34, toDisplayString(statusStat.percentage) + "%", 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_35, [
                        createBaseVNode("div", {
                          class: normalizeClass(["h-2 rounded-full", getStatusCodeBarColor(parseInt(statusStat.status))]),
                          style: normalizeStyle({ width: statusStat.percentage + "%" })
                        }, null, 6)
                      ])
                    ]);
                  }), 128))
                ])
              ]),
              _: 1,
              __: [4]
            }),
            createVNode(_sfc_main$4, { type: "card" }, {
              default: withCtx(() => [
                _cache[5] || (_cache[5] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4" }, [
                  createBaseVNode("i", { class: "pi pi-desktop mr-2 text-cyan-400" }),
                  createTextVNode(" 用户代理 ")
                ], -1)),
                createBaseVNode("div", _hoisted_36, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(dashboardData.value.userAgents, (agent) => {
                    return openBlock(), createElementBlock("div", {
                      key: agent.agent,
                      class: "flex items-center justify-between p-3 bg-white/5 rounded-lg"
                    }, [
                      createBaseVNode("div", _hoisted_37, [
                        createBaseVNode("i", {
                          class: normalizeClass([
                            "mr-3 text-lg",
                            agent.type === "browser" ? "pi pi-globe text-blue-400" : agent.type === "bot" ? "pi pi-android text-green-400" : agent.type === "scanner" ? "pi pi-search text-red-400" : "pi pi-question text-gray-400"
                          ])
                        }, null, 2),
                        createBaseVNode("div", _hoisted_38, [
                          createBaseVNode("div", _hoisted_39, toDisplayString(agent.shortAgent), 1),
                          createBaseVNode("div", _hoisted_40, [
                            createTextVNode(toDisplayString(getAgentTypeLabel(agent.type)) + " ", 1),
                            agent.threatLevel && agent.threatLevel !== "normal" ? (openBlock(), createElementBlock("span", _hoisted_41, [
                              createBaseVNode("span", {
                                class: normalizeClass([
                                  "px-2 py-0.5 rounded text-xs",
                                  getThreatLevelBgColor(agent.threatLevel)
                                ])
                              }, toDisplayString(getThreatLevelLabel(agent.threatLevel)), 3)
                            ])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_42, toDisplayString(formatNumber(agent.count)), 1)
                    ]);
                  }), 128))
                ])
              ]),
              _: 1,
              __: [5]
            })
          ])) : createCommentVNode("", true),
          hasData.value && dashboardData.value ? (openBlock(), createElementBlock("div", _hoisted_43, [
            createVNode(_sfc_main$4, { type: "card" }, {
              default: withCtx(() => [
                _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4" }, [
                  createBaseVNode("i", { class: "pi pi-clock mr-2 text-yellow-400" }),
                  createTextVNode(" 最近活动 ")
                ], -1)),
                createBaseVNode("div", _hoisted_44, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(dashboardData.value.recentActivities.slice(0, 20), (activity) => {
                    return openBlock(), createElementBlock("div", {
                      key: `${activity.timestamp}-${activity.ip}`,
                      class: "flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    }, [
                      createBaseVNode("i", {
                        class: normalizeClass([
                          "pi mt-0.5 text-sm",
                          getActivityIcon(activity.type),
                          getActivityColor(activity.type, activity.severity)
                        ])
                      }, null, 2),
                      createBaseVNode("div", _hoisted_45, [
                        createBaseVNode("div", _hoisted_46, toDisplayString(activity.message), 1),
                        createBaseVNode("div", _hoisted_47, [
                          createTextVNode(toDisplayString(activity.ip) + " ", 1),
                          activity.location ? (openBlock(), createElementBlock("span", _hoisted_48, "• " + toDisplayString(activity.location), 1)) : createCommentVNode("", true),
                          createTextVNode(" • " + toDisplayString(getTimeAgo(activity.timestamp)), 1)
                        ])
                      ])
                    ]);
                  }), 128))
                ])
              ]),
              _: 1,
              __: [6]
            })
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const DashboardPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d20db149"]]);
export {
  DashboardPage as default
};
