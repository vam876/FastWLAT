import { d as defineComponent, u as useAppStore, l as useThemeStore, m as ref, C as reactive, c as computed, T as ThreatLevel, h as onMounted, B as watch, N as rulesRepo, O as __vitePreload, P as threatDetectionEngine, K as nextTick, a as createElementBlock, e as createBaseVNode, g as createTextVNode, f as createCommentVNode, t as toDisplayString, F as Fragment, r as renderList, n as normalizeClass, v as withModifiers, p as unref, E as withDirectives, Q as vShow, H as vModelText, G as vModelCheckbox, q as normalizeStyle, o as openBlock, _ as _export_sfc } from "./index-FPjz1pj-.js";
import { g as getLogData } from "./dataSourceUtils-IiewxtUB.js";
import "./memoryStore-DY1yPL7M.js";
import "./indexedDBStore-vYrXL9Qh.js";
const THREAT_CATEGORIES = [
  {
    value: "web",
    label: "Web 攻击",
    icon: "pi-globe",
    color: "text-blue-400",
    description: "Web应用安全检测",
    aliases: []
  },
  {
    value: "sql_injection",
    label: "SQL 注入",
    icon: "pi-database",
    color: "text-red-400",
    description: "SQL注入攻击检测",
    aliases: ["sql"]
  },
  {
    value: "xss",
    label: "XSS 攻击",
    icon: "pi-code",
    color: "text-orange-400",
    description: "跨站脚本攻击检测",
    aliases: []
  },
  {
    value: "auth",
    label: "认证安全",
    icon: "pi-shield",
    color: "text-green-400",
    description: "认证和授权相关安全",
    aliases: []
  },
  {
    value: "path_traversal",
    label: "路径遍历",
    icon: "pi-folder",
    color: "text-purple-400",
    description: "目录遍历攻击检测",
    aliases: ["path", "traversal"]
  },
  {
    value: "bot",
    label: "机器人检测",
    icon: "pi-android",
    color: "text-yellow-400",
    description: "自动化访问和爬虫检测",
    aliases: []
  },
  {
    value: "scanner",
    label: "扫描检测",
    icon: "pi-search",
    color: "text-cyan-400",
    description: "扫描工具和自动化检测",
    aliases: ["reconnaissance"]
  },
  {
    value: "sensitive_file",
    label: "敏感文件",
    icon: "pi-file",
    color: "text-pink-400",
    description: "敏感文件访问检测",
    aliases: ["sensitive_files", "disclosure"]
  },
  {
    value: "ddos",
    label: "DDoS 防护",
    icon: "pi-exclamation-triangle",
    color: "text-red-500",
    description: "分布式拒绝服务攻击防护",
    aliases: ["dos"]
  },
  {
    value: "injection",
    label: "注入攻击",
    icon: "pi-arrow-right",
    color: "text-red-600",
    description: "各类注入攻击检测",
    aliases: []
  },
  {
    value: "command_injection",
    label: "命令注入",
    icon: "pi-terminal",
    color: "text-red-500",
    description: "系统命令注入攻击检测",
    aliases: ["cmd_injection"]
  },
  {
    value: "webshell",
    label: "Web Shell",
    icon: "pi-window-maximize",
    color: "text-red-700",
    description: "Web Shell检测和防护",
    aliases: ["shell"]
  },
  {
    value: "custom",
    label: "自定义规则",
    icon: "pi-cog",
    color: "text-gray-400",
    description: "用户自定义检测规则",
    aliases: []
  }
];
const aliasMap = /* @__PURE__ */ new Map();
THREAT_CATEGORIES.forEach((category) => {
  aliasMap.set(category.value, category.value);
  category.aliases?.forEach((alias) => {
    aliasMap.set(alias, category.value);
  });
});
function getCategoryConfig(categoryValue) {
  const normalizedValue = aliasMap.get(categoryValue) || categoryValue;
  return THREAT_CATEGORIES.find((cat) => cat.value === normalizedValue) || {
    value: categoryValue,
    label: categoryValue,
    icon: "pi-question",
    color: "text-gray-400",
    description: `${categoryValue}类攻击检测`
  };
}
function normalizeCategoryValue(categoryValue) {
  return aliasMap.get(categoryValue) || categoryValue;
}
const threatLevelIcons = {
  "critical": {
    icon: "pi-exclamation-triangle",
    color: "text-red-500",
    bgColor: "bg-red-500/20",
    borderColor: "border-red-500/30"
  },
  "high": {
    icon: "pi-exclamation-circle",
    color: "text-orange-500",
    bgColor: "bg-orange-500/20",
    borderColor: "border-orange-500/30"
  },
  "medium": {
    icon: "pi-info-circle",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/20",
    borderColor: "border-yellow-500/30"
  },
  "low": {
    icon: "pi-check-circle",
    color: "text-green-500",
    bgColor: "bg-green-500/20",
    borderColor: "border-green-500/30"
  }
};
const categoryIcons = {
  "sql_injection": { icon: "pi-database", color: "text-red-400" },
  "sql": { icon: "pi-database", color: "text-red-400" },
  "xss": { icon: "pi-code", color: "text-orange-400" },
  "auth": { icon: "pi-shield", color: "text-green-400" },
  "path_traversal": { icon: "pi-folder-open", color: "text-yellow-400" },
  "path": { icon: "pi-folder", color: "text-purple-400" },
  "scanner": { icon: "pi-search", color: "text-purple-400" },
  "reconnaissance": { icon: "pi-search", color: "text-purple-400" },
  "bot": { icon: "pi-android", color: "text-yellow-400" },
  "ddos": { icon: "pi-exclamation-triangle", color: "text-red-500" },
  "dos": { icon: "pi-exclamation-triangle", color: "text-red-500" },
  "disclosure": { icon: "pi-eye", color: "text-blue-400" },
  "sensitive_files": { icon: "pi-file", color: "text-orange-500" },
  "custom": { icon: "pi-cog", color: "text-gray-400" },
  "injection": { icon: "pi-code", color: "text-red-400" },
  "traversal": { icon: "pi-folder-open", color: "text-yellow-400" },
  "web": { icon: "pi-globe", color: "text-blue-400" }
};
function getThreatLevelIcon(level) {
  return threatLevelIcons[level.toLowerCase()] || {
    icon: "pi-question",
    color: "text-gray-400"
  };
}
function getCategoryIcon(category) {
  return categoryIcons[category.toLowerCase()] || {
    icon: "pi-shield",
    color: "text-gray-400"
  };
}
function getStatusCodeColorClass(statusCode) {
  if (statusCode >= 200 && statusCode < 300) {
    return "bg-green-500/20 text-green-400 border-green-500/30";
  } else if (statusCode >= 300 && statusCode < 400) {
    return "bg-blue-500/20 text-blue-400 border-blue-500/30";
  } else if (statusCode >= 400 && statusCode < 500) {
    return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
  } else if (statusCode >= 500) {
    return "bg-red-500/20 text-red-400 border-red-500/30";
  }
  return "bg-gray-500/20 text-gray-400 border-gray-500/30";
}
function getMethodColorClass(method) {
  const methodUpper = method.toUpperCase();
  switch (methodUpper) {
    case "GET":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "POST":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "PUT":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "DELETE":
      return "bg-red-500/20 text-red-400 border-red-500/30";
    case "PATCH":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
}
function getThreatLevelBadgeClass(level) {
  const config = getThreatLevelIcon(level);
  return `${config.bgColor} ${config.borderColor} ${config.color}`;
}
const _hoisted_1 = { class: "p-4 border-b border-gray-700" };
const _hoisted_2 = { class: "text-sm text-gray-400" };
const _hoisted_3 = {
  key: 0,
  class: "text-xs text-yellow-400 mt-1"
};
const _hoisted_4 = { class: "p-4 border-b border-gray-700" };
const _hoisted_5 = { class: "grid grid-cols-2 gap-2" };
const _hoisted_6 = { class: "bg-red-500/20 border border-red-500/30 rounded p-2 text-center" };
const _hoisted_7 = { class: "text-red-400 font-bold text-lg" };
const _hoisted_8 = { class: "bg-orange-500/20 border border-orange-500/30 rounded p-2 text-center" };
const _hoisted_9 = { class: "text-orange-400 font-bold text-lg" };
const _hoisted_10 = { class: "bg-yellow-500/20 border border-yellow-500/30 rounded p-2 text-center" };
const _hoisted_11 = { class: "text-yellow-400 font-bold text-lg" };
const _hoisted_12 = { class: "bg-green-500/20 border border-green-500/30 rounded p-2 text-center" };
const _hoisted_13 = { class: "text-green-400 font-bold text-lg" };
const _hoisted_14 = { class: "flex-1 overflow-y-auto" };
const _hoisted_15 = { class: "p-4" };
const _hoisted_16 = { class: "space-y-2" };
const _hoisted_17 = ["onClick"];
const _hoisted_18 = { class: "flex items-center gap-2" };
const _hoisted_19 = { class: "text-white font-medium" };
const _hoisted_20 = { class: "flex items-center gap-2" };
const _hoisted_21 = { class: "text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded" };
const _hoisted_22 = {
  key: 0,
  class: "border-t border-gray-600"
};
const _hoisted_23 = ["onClick"];
const _hoisted_24 = { class: "flex items-center justify-between mb-2" };
const _hoisted_25 = { class: "flex items-center gap-2" };
const _hoisted_26 = { class: "text-white font-medium text-sm" };
const _hoisted_27 = { class: "flex items-center gap-2" };
const _hoisted_28 = ["onClick"];
const _hoisted_29 = {
  key: 0,
  class: "pi pi-check text-white text-xs"
};
const _hoisted_30 = { class: "text-xs text-gray-400" };
const _hoisted_31 = { class: "p-4 border-t border-gray-700 space-y-2" };
const _hoisted_32 = ["disabled"];
const _hoisted_33 = { class: "flex-1 flex flex-col" };
const _hoisted_34 = { class: "p-6 border-b border-gray-700" };
const _hoisted_35 = { class: "flex items-center justify-between" };
const _hoisted_36 = { class: "text-gray-400" };
const _hoisted_37 = { class: "flex bg-gray-700 rounded-lg" };
const _hoisted_38 = { class: "flex-1 overflow-hidden" };
const _hoisted_39 = {
  key: 0,
  class: "mx-6 mt-4 space-y-3"
};
const _hoisted_40 = { class: "p-3 bg-gray-800/50 border border-gray-600/50 rounded-lg" };
const _hoisted_41 = { class: "flex items-center justify-between mb-3" };
const _hoisted_42 = { class: "space-y-4" };
const _hoisted_43 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" };
const _hoisted_44 = {
  key: 0,
  class: "p-2 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-300"
};
const _hoisted_45 = { class: "space-y-1" };
const _hoisted_46 = { key: 0 };
const _hoisted_47 = { key: 1 };
const _hoisted_48 = { key: 2 };
const _hoisted_49 = { key: 3 };
const _hoisted_50 = { key: 4 };
const _hoisted_51 = { key: 5 };
const _hoisted_52 = { class: "mt-2 text-xs text-gray-400" };
const _hoisted_53 = { class: "flex items-center justify-between pt-2 border-t border-gray-600" };
const _hoisted_54 = { class: "text-xs text-gray-400" };
const _hoisted_55 = {
  key: 0,
  class: "mt-1 text-yellow-300"
};
const _hoisted_56 = {
  key: 1,
  class: "mx-6 mt-4 space-y-3"
};
const _hoisted_57 = {
  key: 0,
  class: "p-3 bg-green-900/20 border border-green-500/30 rounded-lg"
};
const _hoisted_58 = { class: "flex items-center gap-2 text-green-400 text-sm" };
const _hoisted_59 = { class: "mt-2 text-xs text-green-300" };
const _hoisted_60 = {
  key: 0,
  class: "ml-2 text-yellow-300"
};
const _hoisted_61 = {
  key: 1,
  class: "p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg"
};
const _hoisted_62 = { class: "flex items-center justify-between" };
const _hoisted_63 = { class: "flex items-center gap-2 text-blue-400 text-sm" };
const _hoisted_64 = { key: 0 };
const _hoisted_65 = { key: 1 };
const _hoisted_66 = { class: "flex items-center gap-3" };
const _hoisted_67 = { class: "flex items-center gap-2 text-blue-400 text-sm cursor-pointer" };
const _hoisted_68 = { class: "mt-2 text-xs text-blue-300" };
const _hoisted_69 = { key: 0 };
const _hoisted_70 = { key: 1 };
const _hoisted_71 = {
  key: 0,
  class: "flex items-center justify-center h-64"
};
const _hoisted_72 = {
  key: 1,
  class: "p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
};
const _hoisted_73 = { class: "flex items-center gap-2 text-red-400" };
const _hoisted_74 = {
  key: 2,
  class: "text-center py-12"
};
const _hoisted_75 = {
  key: 3,
  class: "space-y-3"
};
const _hoisted_76 = { class: "flex items-start justify-between" };
const _hoisted_77 = { class: "flex-1" };
const _hoisted_78 = { class: "flex items-center gap-2 mb-2" };
const _hoisted_79 = { class: "text-xs text-gray-400" };
const _hoisted_80 = {
  key: 0,
  class: /* @__PURE__ */ normalizeClass([
    "px-2 py-1 rounded text-xs font-medium border",
    "bg-purple-500/20 text-purple-400 border-purple-500/30"
  ])
};
const _hoisted_81 = { class: "text-white font-medium mb-2" };
const _hoisted_82 = { class: "flex items-start gap-2" };
const _hoisted_83 = { class: "flex-1 min-w-0" };
const _hoisted_84 = {
  key: 0,
  class: "space-y-2"
};
const _hoisted_85 = {
  key: 0,
  class: "flex items-center gap-2"
};
const _hoisted_86 = { class: "truncate text-white" };
const _hoisted_87 = ["onClick"];
const _hoisted_88 = {
  key: 1,
  class: "space-y-2"
};
const _hoisted_89 = { class: "break-all text-white" };
const _hoisted_90 = ["onClick"];
const _hoisted_91 = {
  key: 1,
  class: "break-all text-white"
};
const _hoisted_92 = { class: "text-sm text-gray-400 space-y-1" };
const _hoisted_93 = {
  key: 0,
  class: "space-y-1"
};
const _hoisted_94 = {
  key: 0,
  class: "flex items-center gap-2"
};
const _hoisted_95 = { class: "truncate" };
const _hoisted_96 = ["onClick"];
const _hoisted_97 = {
  key: 1,
  class: "space-y-1"
};
const _hoisted_98 = { class: "break-all" };
const _hoisted_99 = ["onClick"];
const _hoisted_100 = {
  key: 1,
  class: "break-all"
};
const _hoisted_101 = { class: "mt-3" };
const _hoisted_102 = { class: "flex items-center justify-between mb-2" };
const _hoisted_103 = ["onClick"];
const _hoisted_104 = { class: "space-y-2" };
const _hoisted_105 = { class: "flex items-center justify-between mb-1" };
const _hoisted_106 = { class: "text-xs text-gray-500" };
const _hoisted_107 = { class: "text-xs text-gray-300 bg-gray-800/50 px-2 py-1 rounded font-mono" };
const _hoisted_108 = {
  key: 0,
  class: "mt-2"
};
const _hoisted_109 = { class: "text-xs bg-gray-800/50 px-2 py-1 rounded max-w-full overflow-hidden" };
const _hoisted_110 = ["innerHTML"];
const _hoisted_111 = { class: "flex-shrink-0" };
const _hoisted_112 = {
  key: 0,
  class: "text-center mt-6"
};
const _hoisted_113 = ["disabled"];
const _hoisted_114 = {
  key: 0,
  class: "pi pi-spin pi-spinner"
};
const _hoisted_115 = {
  key: 1,
  class: "pi pi-plus"
};
const _hoisted_116 = {
  key: 1,
  class: "text-center mt-6"
};
const _hoisted_117 = { class: "text-gray-400 text-sm" };
const _hoisted_118 = {
  key: 3,
  class: "h-full overflow-y-auto p-6"
};
const _hoisted_119 = { class: "grid grid-cols-1 xl:grid-cols-4 gap-6 mb-8" };
const _hoisted_120 = { class: "xl:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6" };
const _hoisted_121 = { class: "bg-gray-800 border border-gray-700 rounded-lg p-4" };
const _hoisted_122 = { class: "flex items-center justify-between" };
const _hoisted_123 = { class: "text-white text-2xl font-bold" };
const _hoisted_124 = { class: "bg-gray-800 border border-gray-700 rounded-lg p-4" };
const _hoisted_125 = { class: "flex items-center justify-between" };
const _hoisted_126 = { class: "text-white text-2xl font-bold" };
const _hoisted_127 = { class: "bg-gray-800 border border-gray-700 rounded-lg p-4" };
const _hoisted_128 = { class: "flex items-center justify-between" };
const _hoisted_129 = { class: "text-white text-2xl font-bold" };
const _hoisted_130 = { class: "bg-gray-800 border border-gray-700 rounded-lg p-4" };
const _hoisted_131 = { class: "flex items-center justify-between" };
const _hoisted_132 = { class: "text-white text-2xl font-bold" };
const _hoisted_133 = { class: "xl:col-span-4 bg-gray-800 border border-gray-700 rounded-lg p-4 mb-6" };
const _hoisted_134 = { class: "flex items-center gap-4" };
const _hoisted_135 = { class: "text-white text-lg font-medium" };
const _hoisted_136 = { class: "bg-gray-800 border border-gray-700 rounded-lg p-6" };
const _hoisted_137 = { class: "space-y-3" };
const _hoisted_138 = { class: "flex items-center justify-between" };
const _hoisted_139 = { class: "flex items-center gap-3" };
const _hoisted_140 = { class: "text-white" };
const _hoisted_141 = { class: "text-right" };
const _hoisted_142 = { class: "text-gray-400 font-medium" };
const _hoisted_143 = { class: "text-xs text-gray-500" };
const _hoisted_144 = { class: "mt-2 bg-gray-600 rounded-full h-2" };
const _hoisted_145 = { class: "bg-gray-800 border border-gray-700 rounded-lg p-6" };
const _hoisted_146 = { class: "space-y-4" };
const _hoisted_147 = { class: "flex items-center justify-between mb-2" };
const _hoisted_148 = { class: "text-white text-sm" };
const _hoisted_149 = { class: "text-gray-400 font-medium" };
const _hoisted_150 = { class: "bg-gray-600 rounded-full h-3" };
const _hoisted_151 = { class: "bg-gray-800 border border-gray-700 rounded-lg p-6" };
const _hoisted_152 = { class: "space-y-3" };
const _hoisted_153 = { class: "bg-red-500/20 border border-red-500/30 rounded p-3" };
const _hoisted_154 = { class: "flex items-center justify-between" };
const _hoisted_155 = { class: "text-red-400 font-bold text-xl" };
const _hoisted_156 = { class: "bg-green-500/20 border border-green-500/30 rounded p-3" };
const _hoisted_157 = { class: "flex items-center justify-between" };
const _hoisted_158 = { class: "text-green-400 font-bold text-xl" };
const _hoisted_159 = { class: "bg-orange-500/20 border border-orange-500/30 rounded p-3" };
const _hoisted_160 = { class: "flex items-center justify-between" };
const _hoisted_161 = { class: "text-orange-400 font-bold text-xl" };
const _hoisted_162 = { class: "bg-gray-800 border border-gray-700 rounded-lg p-6 xl:col-span-3" };
const _hoisted_163 = { class: "flex items-end justify-between h-40 gap-1 mb-4" };
const _hoisted_164 = { class: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity z-10" };
const _hoisted_165 = { class: "bg-gray-900 text-white text-xs px-3 py-2 rounded shadow-lg border border-gray-600" };
const _hoisted_166 = { class: "font-medium" };
const _hoisted_167 = { class: "text-blue-400" };
const _hoisted_168 = { class: "text-xs text-gray-500 text-center mt-1" };
const _hoisted_169 = { class: "bg-gray-800 border border-gray-700 rounded-lg p-6 xl:col-span-2" };
const _hoisted_170 = { class: "space-y-3" };
const _hoisted_171 = { class: "flex items-center gap-3" };
const _hoisted_172 = { class: "text-white font-mono text-sm" };
const _hoisted_173 = { class: "text-right" };
const _hoisted_174 = { class: "text-red-400 font-bold" };
const _hoisted_175 = { class: "text-xs text-gray-400" };
const _hoisted_176 = { class: "bg-gray-800 border border-gray-700 rounded-lg p-6" };
const _hoisted_177 = { class: "space-y-3" };
const _hoisted_178 = { class: "flex items-center gap-3" };
const _hoisted_179 = { class: "text-gray-400 font-medium" };
const MAX_ANALYSIS_LOGS = 2e4;
const FULL_ANALYSIS_THRESHOLD = 5e4;
const LOAD_BATCH_SIZE = 200;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThreatAnalysisPage",
  setup(__props) {
    useAppStore();
    const themeStore = useThemeStore();
    const loading = ref(false);
    const error = ref(null);
    const activeTab = ref("rules");
    const selectedCategory = ref(null);
    const selectedRule = ref(null);
    const filteredLogs = ref([]);
    const allLogs = ref([]);
    const isLargeDataset = ref(false);
    const samplingRate = ref(1);
    const useFullAnalysis = ref(false);
    const showFilterConfig = ref(false);
    const filterRules = reactive({
      statusCodes: "",
      // 状态码过滤 (如: 200,301,500)
      excludeStatusCodes: "",
      // 排除状态码 (如: 404)
      excludeIPs: "",
      // 排除IP (如: 192.168.1.1,10.0.0.1)
      includeOnlyIPs: "",
      // 仅包含IP
      pathPattern: "",
      // 路径模式
      excludePathPattern: ""
      // 排除路径模式
    });
    const highlightedLogId = ref(null);
    const expandedLogs = ref(/* @__PURE__ */ new Set());
    const threatenedLogs = ref([]);
    const unthreatenedCount = ref(0);
    const totalThreatenedCount = ref(0);
    const threatLevelCounts = ref({
      critical: 0,
      high: 0,
      medium: 0,
      low: 0
    });
    const displayedLogs = ref([]);
    const loadedCount = ref(0);
    const isLoadingMore = ref(false);
    const threatRules = ref([]);
    const threatCategories = computed(() => {
      const categories = /* @__PURE__ */ new Map();
      threatRules.value.forEach((rule) => {
        const normalizedCategoryId = normalizeCategoryValue(rule.category);
        const categoryConfig = getCategoryConfig(normalizedCategoryId);
        if (!categories.has(normalizedCategoryId)) {
          categories.set(normalizedCategoryId, {
            id: normalizedCategoryId,
            name: categoryConfig.label,
            description: categoryConfig.description || `${categoryConfig.label}类攻击检测`,
            icon: categoryConfig.icon,
            color: categoryConfig.color,
            rules: [],
            totalCount: 0
          });
        }
        const category = categories.get(normalizedCategoryId);
        category.rules.push(rule);
        category.totalCount += rule.count;
      });
      return Array.from(categories.values()).filter((cat) => cat.rules.length > 0);
    });
    const threatStats = computed(() => {
      const stats = {
        total: totalThreatenedCount.value,
        // 使用实际威胁总数
        critical: threatLevelCounts.value.critical,
        // 使用实际统计
        high: threatLevelCounts.value.high,
        medium: threatLevelCounts.value.medium,
        low: threatLevelCounts.value.low,
        unthreatened: unthreatenedCount.value,
        categories: /* @__PURE__ */ new Map()
      };
      threatRules.value.forEach((rule) => {
        if (rule.count > 0) {
          const categoryCount = stats.categories.get(rule.category) || 0;
          stats.categories.set(rule.category, categoryCount + rule.count);
        }
      });
      return stats;
    });
    const threatLevelData = computed(() => [
      { name: "严重", value: threatStats.value.critical, color: "#dc2626" },
      { name: "高危", value: threatStats.value.high, color: "#ea580c" },
      { name: "中危", value: threatStats.value.medium, color: "#d97706" },
      { name: "低危", value: threatStats.value.low, color: "#65a30d" }
    ]);
    const categoryData = computed(
      () => Array.from(threatStats.value.categories.entries()).map(([category, count]) => {
        const cat = threatCategories.value.find((c) => c.id === category);
        return {
          name: cat?.name || category,
          value: count,
          color: cat?.color || "#6b7280"
        };
      })
    );
    const timelineData = computed(() => {
      const hours = Array.from({ length: 24 }, (_, i) => ({
        hour: i,
        count: 0
      }));
      threatenedLogs.value.forEach((log) => {
        const hour = new Date(log.timestamp).getHours();
        hours[hour].count++;
      });
      return hours;
    });
    const topThreatIPs = computed(() => {
      const ipMap = /* @__PURE__ */ new Map();
      threatenedLogs.value.forEach((log) => {
        const existing = ipMap.get(log.ip) || { count: 0, threatLevel: ThreatLevel.LOW };
        ipMap.set(log.ip, {
          count: existing.count + 1,
          threatLevel: getThreatLevelPriority(log.threatLevel || ThreatLevel.LOW) > getThreatLevelPriority(existing.threatLevel) ? log.threatLevel || ThreatLevel.LOW : existing.threatLevel,
          location: getIPLocation(log.ip)
        });
      });
      return Array.from(ipMap.entries()).map(([ip, data]) => ({ ip, ...data })).sort((a, b) => b.count - a.count).slice(0, 10);
    });
    const threatMethodsData = computed(() => {
      const methodMap = /* @__PURE__ */ new Map();
      threatenedLogs.value.forEach((log) => {
        methodMap.set(log.method, (methodMap.get(log.method) || 0) + 1);
      });
      return Array.from(methodMap.entries()).map(([method, count]) => ({ method, count })).sort((a, b) => b.count - a.count).slice(0, 8);
    });
    const hasActiveFilters = computed(() => {
      return !!(filterRules.statusCodes || filterRules.excludeStatusCodes || filterRules.excludeIPs || filterRules.includeOnlyIPs || filterRules.pathPattern || filterRules.excludePathPattern);
    });
    const filterPreviewCount = computed(() => {
      if (!hasActiveFilters.value || allLogs.value.length === 0) {
        return allLogs.value.length;
      }
      const sampleSize = Math.min(1e3, allLogs.value.length);
      const sampleLogs = allLogs.value.slice(0, sampleSize);
      const filteredSample = sampleLogs.filter((log) => {
        if (filterRules.statusCodes) {
          const includeCodes = filterRules.statusCodes.split(",").map((code) => parseInt(code.trim())).filter((code) => !isNaN(code));
          if (includeCodes.length > 0 && !includeCodes.includes(log.statusCode)) {
            return false;
          }
        }
        if (filterRules.excludeStatusCodes) {
          const excludeCodes = filterRules.excludeStatusCodes.split(",").map((code) => parseInt(code.trim())).filter((code) => !isNaN(code));
          if (excludeCodes.length > 0 && excludeCodes.includes(log.statusCode)) {
            return false;
          }
        }
        if (filterRules.includeOnlyIPs) {
          const includeIPs = filterRules.includeOnlyIPs.split(",").map((ip) => ip.trim()).filter((ip) => ip);
          if (includeIPs.length > 0) {
            const logIP = log.ip?.trim() || "";
            const isIncluded = includeIPs.some((filterIP) => {
              if (filterIP.includes("/")) {
                return logIP.startsWith(filterIP.split("/")[0]);
              }
              return logIP === filterIP || logIP.startsWith(filterIP + ".");
            });
            if (!isIncluded) {
              return false;
            }
          }
        }
        if (filterRules.excludeIPs) {
          const excludeIPs = filterRules.excludeIPs.split(",").map((ip) => ip.trim()).filter((ip) => ip);
          if (excludeIPs.length > 0) {
            const logIP = log.ip?.trim() || "";
            const isExcluded = excludeIPs.some((filterIP) => {
              if (filterIP.includes("/")) {
                return logIP.startsWith(filterIP.split("/")[0]);
              }
              return logIP === filterIP || logIP.startsWith(filterIP + ".");
            });
            if (isExcluded) {
              return false;
            }
          }
        }
        if (filterRules.pathPattern) {
          const patterns = filterRules.pathPattern.split(",").map((pattern) => pattern.trim()).filter((pattern) => pattern);
          if (patterns.length > 0) {
            const logPath = log.path?.trim() || "";
            const hasMatch = patterns.some((pattern) => {
              if (pattern.startsWith("/") && pattern.endsWith("/")) {
                try {
                  const regex = new RegExp(pattern.slice(1, -1), "i");
                  return regex.test(logPath);
                } catch {
                  return logPath.includes(pattern);
                }
              }
              return logPath.includes(pattern);
            });
            if (!hasMatch) return false;
          }
        }
        if (filterRules.excludePathPattern) {
          const patterns = filterRules.excludePathPattern.split(",").map((pattern) => pattern.trim()).filter((pattern) => pattern);
          if (patterns.length > 0) {
            const logPath = log.path?.trim() || "";
            const hasMatch = patterns.some((pattern) => {
              if (pattern.startsWith("/") && pattern.endsWith("/")) {
                try {
                  const regex = new RegExp(pattern.slice(1, -1), "i");
                  return regex.test(logPath);
                } catch {
                  return logPath.includes(pattern);
                }
              }
              return logPath.includes(pattern);
            });
            if (hasMatch) return false;
          }
        }
        return true;
      });
      const ratio = filteredSample.length / sampleSize;
      return Math.round(allLogs.value.length * ratio);
    });
    onMounted(async () => {
      await loadRulesFromDatabase();
      await loadData();
    });
    watch(selectedRule, (ruleId) => {
      if (ruleId) {
        const rule = threatRules.value.find((r) => r.id === ruleId);
        if (rule) {
          filteredLogs.value = rule.matchedLogs;
        }
      } else {
        filteredLogs.value = threatenedLogs.value;
      }
      resetDisplayedLogs();
    });
    watch(selectedCategory, (categoryId) => {
      if (categoryId) {
        const category = threatCategories.value.find((c) => c.id === categoryId);
        if (category) {
          const allMatchedLogs = category.rules.flatMap((rule) => rule.matchedLogs);
          const uniqueLogs = Array.from(new Map(allMatchedLogs.map((log) => [log.id || log.raw, log])).values());
          filteredLogs.value = uniqueLogs;
        }
      } else {
        filteredLogs.value = threatenedLogs.value;
      }
      selectedRule.value = null;
      resetDisplayedLogs();
    });
    function resetDisplayedLogs() {
      loadedCount.value = 0;
      displayedLogs.value = [];
      loadMoreLogs();
    }
    function loadMoreLogs() {
      if (isLoadingMore.value || loadedCount.value >= filteredLogs.value.length) {
        return;
      }
      isLoadingMore.value = true;
      setTimeout(() => {
        const nextBatch = filteredLogs.value.slice(
          loadedCount.value,
          loadedCount.value + LOAD_BATCH_SIZE
        );
        displayedLogs.value.push(...nextBatch);
        loadedCount.value += nextBatch.length;
        isLoadingMore.value = false;
      }, 100);
    }
    function checkLoadMore(event) {
      const target = event.target;
      const scrollTop = target.scrollTop;
      const scrollHeight = target.scrollHeight;
      const clientHeight = target.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight * 0.8) {
        loadMoreLogs();
      }
    }
    async function loadRulesFromDatabase() {
      try {
        const dbRules = await rulesRepo.getAllRules();
        threatRules.value = dbRules.map((dbRule) => {
          const iconConfig = getCategoryIcon(dbRule.category);
          return {
            id: dbRule.id,
            name: dbRule.name,
            description: dbRule.description || "",
            pattern: new RegExp(dbRule.pattern, "i"),
            level: dbRule.severity,
            category: dbRule.category,
            enabled: dbRule.enabled,
            count: 0,
            matchedLogs: [],
            icon: iconConfig.icon,
            color: iconConfig.color,
            priority: dbRule.priority,
            action: dbRule.action
          };
        });
        console.log(`Loaded ${threatRules.value.length} rules from database`);
      } catch (err) {
        console.error("Failed to load rules from database:", err);
        error.value = err.message || "加载规则失败";
      }
    }
    async function loadData() {
      console.log("[ThreatAnalysis] Starting data load...");
      loading.value = true;
      error.value = null;
      try {
        const logs = await getLogData();
        allLogs.value = logs;
        console.log(`[ThreatAnalysis] Loaded ${logs.length} log entries`);
        const totalLogs = allLogs.value.length;
        console.log(`[ThreatAnalysis] Total logs: ${totalLogs}`);
        if (totalLogs === 0) {
          console.warn("[ThreatAnalysis] No logs found");
          logStats.value = {
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
          };
          return;
        }
        isLargeDataset.value = totalLogs > FULL_ANALYSIS_THRESHOLD;
        if (isLargeDataset.value && !useFullAnalysis.value) {
          const targetSize = MAX_ANALYSIS_LOGS;
          samplingRate.value = Math.ceil(totalLogs / targetSize);
          console.log(`[ThreatAnalysis] Large dataset detected (${totalLogs} entries), using sampling rate: 1/${samplingRate.value}`);
          const sampledLogs = [];
          for (let i = 0; i < totalLogs; i += samplingRate.value) {
            sampledLogs.push(allLogs.value[i]);
          }
          filteredLogs.value = sampledLogs;
          console.log(`[ThreatAnalysis] Sampled to ${sampledLogs.length} entries`);
        } else {
          filteredLogs.value = allLogs.value;
          samplingRate.value = 1;
          console.log(`[ThreatAnalysis] Using full dataset: ${totalLogs} entries`);
        }
        if (hasActiveFilters.value) {
          if (selectedCategory.value) {
            const categoryLogs = getLogsByCategory(selectedCategory.value);
            filteredLogs.value = applyLogFilters(categoryLogs);
            console.log(`[ThreatAnalysis] Applied category + filters, reduced to ${filteredLogs.value.length} entries`);
          } else {
            filteredLogs.value = applyLogFilters(filteredLogs.value);
            console.log(`[ThreatAnalysis] Applied filters, reduced to ${filteredLogs.value.length} entries`);
          }
        }
        await calculateLogStats(filteredLogs.value);
        await loadRulesFromDatabase();
        const needsRulesApplication = checkIfRulesApplicationNeeded();
        if (needsRulesApplication) {
          console.log("[ThreatAnalysis] Applying threat rules to logs (rules changed or missing detection)");
          await applyThreatRules();
        } else {
          console.log("[ThreatAnalysis] Using existing threat detection results from import");
          updateRuleStatistics();
        }
      } catch (err) {
        console.error("[ThreatAnalysis] Failed to load data:", err);
        error.value = `数据加载失败: ${err instanceof Error ? err.message : String(err)}`;
      } finally {
        loading.value = false;
      }
    }
    async function calculateLogStats(logs) {
      console.log(`[ThreatAnalysis] Calculating stats for ${logs.length} entries`);
      if (logs.length === 0) {
        logStats.value = {
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
        };
        return;
      }
      const isLargeDataset2 = logs.length > 1e4;
      if (isLargeDataset2) {
        console.log(`[ThreatAnalysis] Processing large dataset with ${logs.length} entries, this may take a moment...`);
      }
      try {
        if (logs.length > 5e3) {
          console.log(`[ThreatAnalysis] Large dataset detected, using Web Worker for stats calculation`);
          const { statsManager } = await __vitePreload(async () => {
            const { statsManager: statsManager2 } = await import("./statsManager-Da3eftYy.js");
            return { statsManager: statsManager2 };
          }, true ? [] : void 0, import.meta.url);
          if (logs.length > 5e4) {
            console.log(`[ThreatAnalysis] Very large dataset (${logs.length} entries), using chunked processing for optimal performance`);
          }
          const result = await statsManager.calculateStats(logs);
          logStats.value = result;
        } else {
          await calculateStatsSync(logs);
        }
        console.log(`[ThreatAnalysis] Stats calculated successfully:`, {
          totalLogs: logStats.value.totalLogs,
          uniqueIPs: logStats.value.uniqueIPs,
          uniquePaths: logStats.value.uniquePaths,
          timeRange: logStats.value.timeRange,
          processingTime: `${logs.length > 1e4 ? "High-performance" : "Standard"} mode`
        });
      } catch (error2) {
        console.error(`[ThreatAnalysis] Failed to calculate stats:`, error2);
        if (error2.message?.includes("timeout")) {
          console.warn(`[ThreatAnalysis] Calculation timeout for ${logs.length} entries, falling back to synchronous processing`);
        }
        try {
          await calculateStatsSync(logs);
          console.log(`[ThreatAnalysis] Fallback calculation completed successfully`);
        } catch (fallbackError) {
          console.error(`[ThreatAnalysis] Fallback calculation also failed:`, fallbackError);
          logStats.value = {
            totalLogs: logs.length,
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
        }
      }
    }
    async function calculateStatsSync(logs) {
      const ipSet = /* @__PURE__ */ new Set();
      const pathSet = /* @__PURE__ */ new Set();
      const ipCounts = /* @__PURE__ */ new Map();
      const pathCounts = /* @__PURE__ */ new Map();
      const statusCounts = /* @__PURE__ */ new Map();
      const methodCounts = /* @__PURE__ */ new Map();
      const hourCounts = /* @__PURE__ */ new Map();
      const threatCounts = /* @__PURE__ */ new Map();
      let totalResponseSize = 0;
      let responseSizeCount = 0;
      let minTimestamp = null;
      let maxTimestamp = null;
      const batchSize = 1e3;
      for (let i = 0; i < logs.length; i += batchSize) {
        const batch = logs.slice(i, i + batchSize);
        batch.forEach((log) => {
          if (log.ip) {
            ipSet.add(log.ip);
            ipCounts.set(log.ip, (ipCounts.get(log.ip) || 0) + 1);
          }
          if (log.path) {
            pathSet.add(log.path);
            pathCounts.set(log.path, (pathCounts.get(log.path) || 0) + 1);
          }
          if (log.statusCode) {
            const code = log.statusCode.toString();
            statusCounts.set(code, (statusCounts.get(code) || 0) + 1);
          }
          if (log.method) {
            methodCounts.set(log.method, (methodCounts.get(log.method) || 0) + 1);
          }
          if (log.timestamp) {
            const timestamp = log.timestamp.getTime();
            if (minTimestamp === null || timestamp < minTimestamp) {
              minTimestamp = timestamp;
            }
            if (maxTimestamp === null || timestamp > maxTimestamp) {
              maxTimestamp = timestamp;
            }
            const hour = log.timestamp.getHours();
            hourCounts.set(hour, (hourCounts.get(hour) || 0) + 1);
          }
          if (log.responseSize != null && log.responseSize > 0) {
            totalResponseSize += log.responseSize;
            responseSizeCount++;
          }
          if (log.threatLevel) {
            threatCounts.set(log.threatLevel, (threatCounts.get(log.threatLevel) || 0) + 1);
          }
        });
        if (i % 5e3 === 0 && i > 0) {
          await new Promise((resolve) => setTimeout(resolve, 0));
        }
      }
      const averageResponseSize = responseSizeCount > 0 ? Math.round(totalResponseSize / responseSizeCount) : 0;
      const timeRange = minTimestamp !== null && maxTimestamp !== null ? {
        start: new Date(minTimestamp),
        end: new Date(maxTimestamp)
      } : { start: null, end: null };
      const topIPs = Array.from(ipCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([ip, count]) => ({ name: ip, count }));
      const topPaths = Array.from(pathCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([path, count]) => ({ name: path, count }));
      logStats.value = {
        totalLogs: logs.length,
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
      };
    }
    const logStats = ref({
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
    });
    function formatBytes(bytes) {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    }
    function formatTimeRange() {
      if (!logStats.value.timeRange.start || !logStats.value.timeRange.end) {
        return "暂无数据";
      }
      const start = logStats.value.timeRange.start.toLocaleString("zh-CN");
      const end = logStats.value.timeRange.end.toLocaleString("zh-CN");
      return `${start} - ${end}`;
    }
    function getThreatLevelPriority(level) {
      switch (level) {
        case "critical":
          return 4;
        case "high":
          return 3;
        case "medium":
          return 2;
        case "low":
          return 1;
        case "normal":
          return 0;
        default:
          return 0;
      }
    }
    function selectCategory(categoryId) {
      selectedCategory.value = selectedCategory.value === categoryId ? null : categoryId;
    }
    function selectRule(ruleId) {
      selectedRule.value = selectedRule.value === ruleId ? null : ruleId;
    }
    async function toggleRule(ruleId) {
      const rule = threatRules.value.find((r) => r.id === ruleId);
      if (rule) {
        try {
          await rulesRepo.updateRule(ruleId, { enabled: !rule.enabled });
          rule.enabled = !rule.enabled;
          await loadData();
        } catch (err) {
          console.error("Failed to toggle rule:", err);
          error.value = err.message || "切换规则状态失败";
        }
      }
    }
    function formatDateTime(timestamp) {
      return new Date(timestamp).toLocaleString();
    }
    function getRandomColor(index) {
      const colors = [
        "#3b82f6",
        "#ef4444",
        "#10b981",
        "#f59e0b",
        "#8b5cf6",
        "#06b6d4",
        "#84cc16",
        "#f97316",
        "#ec4899",
        "#6366f1",
        "#14b8a6",
        "#eab308"
      ];
      return colors[index % colors.length];
    }
    function getThreatBorderClass(level) {
      switch (level) {
        case "critical":
          return "border-red-500";
        case "high":
          return "border-orange-500";
        case "medium":
          return "border-yellow-500";
        case "low":
          return "border-green-500";
        default:
          return "border-gray-500";
      }
    }
    function getThreatBadgeClass(level) {
      switch (level) {
        case "critical":
          return "bg-red-500/20 text-red-400 border-red-500/30";
        case "high":
          return "bg-orange-500/20 text-orange-400 border-orange-500/30";
        case "medium":
          return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
        case "low":
          return "bg-green-500/20 text-green-400 border-green-500/30";
        default:
          return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      }
    }
    function getIPLocation(ip) {
      if (ip.startsWith("192.168.") || ip.startsWith("10.") || ip.startsWith("172.")) {
        return "内网";
      }
      const locations = ["北京", "上海", "广州", "深圳", "杭州", "美国", "日本", "韩国", "新加坡", "德国"];
      const hash = ip.split(".").reduce((sum, part) => sum + parseInt(part), 0);
      return locations[hash % locations.length];
    }
    function highlightMatches(log) {
      const logId = log.id || displayedLogs.value.indexOf(log).toString();
      highlightedLogId.value = highlightedLogId.value === logId ? null : logId;
    }
    function toggleLogExpansion(logId) {
      if (expandedLogs.value.has(logId)) {
        expandedLogs.value.delete(logId);
      } else {
        expandedLogs.value.add(logId);
      }
    }
    function getHighlightedContent(log, rule) {
      const searchText = `${log.path} ${log.userAgent} ${log.method} ${log.raw || ""}`;
      try {
        if (rule.pattern instanceof RegExp) {
          return searchText.replace(rule.pattern, '<mark class="bg-yellow-300 text-gray-900 px-1 rounded">$&</mark>');
        } else {
          const pattern = new RegExp(escapeRegExp(rule.pattern), "gi");
          return searchText.replace(pattern, '<mark class="bg-yellow-300 text-gray-900 px-1 rounded">$&</mark>');
        }
      } catch (error2) {
        console.warn("Error highlighting matches:", error2);
        return searchText;
      }
    }
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    async function applyFilterRules() {
      console.log("[ThreatAnalysis] Applying filter rules...");
      console.log("Filter rules:", filterRules);
      console.log("Has active filters:", hasActiveFilters.value);
      console.log("Selected category:", selectedCategory.value);
      console.log("All logs count before filter:", allLogs.value.length);
      if (selectedCategory.value) {
        const category = threatCategories.value.find((c) => c.id === selectedCategory.value);
        if (category) {
          let categoryLogs = [];
          category.rules.forEach((rule) => {
            if (rule.matchedLogs) {
              categoryLogs = categoryLogs.concat(rule.matchedLogs);
            }
          });
          const uniqueLogs = categoryLogs.filter(
            (log, index, self) => index === self.findIndex((l) => l.id === log.id)
          );
          filteredLogs.value = applyLogFilters(uniqueLogs);
          console.log("Category filter applied:", uniqueLogs.length, "logs");
        }
      } else {
        await loadData();
      }
      console.log("[ThreatAnalysis] Filter applied. Results: " + filteredLogs.value.length + " logs");
      console.log("Filtered logs sample:", filteredLogs.value.slice(0, 3));
      resetDisplayedLogs();
    }
    function clearFilterRules() {
      Object.assign(filterRules, {
        statusCodes: "",
        excludeStatusCodes: "",
        excludeIPs: "",
        includeOnlyIPs: "",
        pathPattern: "",
        excludePathPattern: ""
      });
    }
    function applyLogFilters(logs) {
      console.log("[ThreatAnalysis] Applying log filters to", logs.length, "logs");
      console.log("[ThreatAnalysis] Active filter rules:", filterRules);
      const filteredLogs2 = logs.filter((log) => {
        if (filterRules.statusCodes) {
          const includeCodes = filterRules.statusCodes.split(",").map((code) => parseInt(code.trim())).filter((code) => !isNaN(code));
          if (includeCodes.length > 0 && !includeCodes.includes(log.statusCode)) {
            return false;
          }
        }
        if (filterRules.excludeStatusCodes) {
          const excludeCodes = filterRules.excludeStatusCodes.split(",").map((code) => parseInt(code.trim())).filter((code) => !isNaN(code));
          if (excludeCodes.length > 0 && excludeCodes.includes(log.statusCode)) {
            return false;
          }
        }
        if (filterRules.includeOnlyIPs) {
          const includeIPs = filterRules.includeOnlyIPs.split(",").map((ip) => ip.trim()).filter((ip) => ip);
          if (includeIPs.length > 0) {
            const logIP = log.ip?.trim() || "";
            const isIncluded = includeIPs.some((filterIP) => {
              if (filterIP.includes("/")) {
                return logIP.startsWith(filterIP.split("/")[0]);
              }
              return logIP === filterIP || logIP.startsWith(filterIP + ".");
            });
            if (!isIncluded) {
              return false;
            }
          }
        }
        if (filterRules.excludeIPs) {
          const excludeIPs = filterRules.excludeIPs.split(",").map((ip) => ip.trim()).filter((ip) => ip);
          if (excludeIPs.length > 0) {
            const logIP = log.ip?.trim() || "";
            const isExcluded = excludeIPs.some((filterIP) => {
              if (filterIP.includes("/")) {
                return logIP.startsWith(filterIP.split("/")[0]);
              }
              return logIP === filterIP || logIP.startsWith(filterIP + ".");
            });
            if (isExcluded) {
              return false;
            }
          }
        }
        if (filterRules.pathPattern) {
          const patterns = filterRules.pathPattern.split(",").map((pattern) => pattern.trim()).filter((pattern) => pattern);
          if (patterns.length > 0) {
            const logPath = log.path?.trim() || "";
            const hasMatch = patterns.some((pattern) => {
              if (pattern.startsWith("/") && pattern.endsWith("/")) {
                try {
                  const regex = new RegExp(pattern.slice(1, -1), "i");
                  return regex.test(logPath);
                } catch {
                  return logPath.includes(pattern);
                }
              }
              return logPath.includes(pattern);
            });
            if (!hasMatch) return false;
          }
        }
        if (filterRules.excludePathPattern) {
          const patterns = filterRules.excludePathPattern.split(",").map((pattern) => pattern.trim()).filter((pattern) => pattern);
          if (patterns.length > 0) {
            const logPath = log.path?.trim() || "";
            const hasMatch = patterns.some((pattern) => {
              if (pattern.startsWith("/") && pattern.endsWith("/")) {
                try {
                  const regex = new RegExp(pattern.slice(1, -1), "i");
                  return regex.test(logPath);
                } catch {
                  return logPath.includes(pattern);
                }
              }
              return logPath.includes(pattern);
            });
            if (hasMatch) return false;
          }
        }
        return true;
      });
      console.log("[ThreatAnalysis] Filter result:", filteredLogs2.length, "logs after filtering");
      return filteredLogs2;
    }
    async function applyThreatRules() {
      const logsToAnalyze = useFullAnalysis.value ? allLogs.value : filteredLogs.value;
      if (!logsToAnalyze || logsToAnalyze.length === 0) {
        console.log("[ThreatAnalysis] No logs to analyze");
        return;
      }
      console.log(`[ThreatAnalysis] Applying threat rules to ${logsToAnalyze.length} logs (${useFullAnalysis.value ? "full" : "sampled"} analysis)...`);
      await threatDetectionEngine.refreshRules();
      threatRules.value.forEach((rule) => {
        rule.count = 0;
        rule.matchedLogs = [];
      });
      let processedCount = 0;
      const batchSize = 1e3;
      for (let i = 0; i < logsToAnalyze.length; i += batchSize) {
        const batch = logsToAnalyze.slice(i, i + batchSize);
        batch.forEach((log) => {
          const logContext = {
            raw: log.raw,
            uri: log.path,
            method: log.method,
            statusCode: log.statusCode,
            userAgent: log.userAgent,
            ip: log.ip,
            referer: log.referer
          };
          const detectionResult = threatDetectionEngine.detectThreats(logContext);
          log.threatLevel = detectionResult.threatLevel;
          log.threats = detectionResult.threats;
          log.matchedRules = detectionResult.matchedRules.map((rule) => rule.id);
          detectionResult.matchedRules.forEach((matchedRule) => {
            const rule = threatRules.value.find((r) => r.id === matchedRule.id);
            if (rule) {
              rule.count++;
              rule.matchedLogs.push(log);
            }
          });
        });
        processedCount += batch.length;
        if (processedCount % (batchSize * 5) === 0) {
          await nextTick();
        }
      }
      console.log(`[ThreatAnalysis] Applied threat rules to ${processedCount} logs`);
      if (!useFullAnalysis.value && samplingRate.value > 1) {
        threatRules.value.forEach((rule) => {
          const estimatedCount = Math.round(rule.count * samplingRate.value);
          console.log(`[ThreatAnalysis] Rule "${rule.name}": ${rule.count} sampled matches, estimated ${estimatedCount} total matches`);
          rule.count = estimatedCount;
        });
      }
      updateThreatStats();
    }
    function updateThreatStats() {
      threatLevelCounts.value = {
        critical: 0,
        high: 0,
        medium: 0,
        low: 0
      };
      let localThreatenedCount = 0;
      let localUnthreatenedCount = 0;
      const logsToCount = allLogs.value;
      console.log(`[ThreatAnalysis] Calculating threat stats from ${logsToCount.length} total logs`);
      logsToCount.forEach((log) => {
        if (log.threatLevel && log.threatLevel !== "normal") {
          localThreatenedCount++;
          switch (log.threatLevel) {
            case "critical":
              threatLevelCounts.value.critical++;
              break;
            case "high":
              threatLevelCounts.value.high++;
              break;
            case "medium":
              threatLevelCounts.value.medium++;
              break;
            case "low":
              threatLevelCounts.value.low++;
              break;
          }
        } else {
          localUnthreatenedCount++;
        }
      });
      totalThreatenedCount.value = localThreatenedCount;
      unthreatenedCount.value = localUnthreatenedCount;
      threatenedLogs.value = allLogs.value.filter(
        (log) => log.threatLevel && log.threatLevel !== "normal"
      );
      console.log(`[ThreatAnalysis] Threat stats:`, {
        total: localThreatenedCount,
        critical: threatLevelCounts.value.critical,
        high: threatLevelCounts.value.high,
        medium: threatLevelCounts.value.medium,
        low: threatLevelCounts.value.low,
        normal: localUnthreatenedCount,
        displayCount: threatenedLogs.value.length
      });
    }
    function checkIfRulesApplicationNeeded() {
      if (!allLogs.value || allLogs.value.length === 0) {
        return false;
      }
      const logsWithoutDetection = allLogs.value.filter(
        (log) => !log.threatLevel || log.threats === void 0
      );
      if (logsWithoutDetection.length > 0) {
        console.log(`[ThreatAnalysis] Found ${logsWithoutDetection.length} logs without threat detection`);
        return true;
      }
      const logsWithThreats = allLogs.value.filter(
        (log) => log.threatLevel && log.threatLevel !== ThreatLevel.NORMAL
      );
      if (logsWithThreats.length > 0) {
        console.log(`[ThreatAnalysis] Found ${logsWithThreats.length} logs with existing threat detection from import, will use existing data`);
        return false;
      }
      const engineRules = threatDetectionEngine.getRules();
      const currentActiveRules = threatRules.value.filter((r) => r.enabled);
      if (engineRules.length !== currentActiveRules.length) {
        console.log("[ThreatAnalysis] Rule count mismatch, reapplying rules");
        return true;
      }
      return false;
    }
    function updateRuleStatistics() {
      console.log(`[ThreatAnalysis] Updating rule statistics using existing threat detection results`);
      threatRules.value.forEach((rule) => {
        rule.count = 0;
        rule.matchedLogs = [];
      });
      const logsToAnalyze = allLogs.value;
      logsToAnalyze.forEach((log) => {
        if (log.threats && log.threats.length > 0) {
          log.threats.forEach((threatName) => {
            const matchingRules = threatRules.value.filter((rule) => {
              const ruleName = rule.name.toLowerCase();
              const ruleCategory = rule.category.toLowerCase();
              const threatLower = threatName.toLowerCase();
              return threatLower.includes(ruleName) || threatLower.includes(ruleCategory) || ruleName.includes(threatLower) || ruleCategory.includes(threatLower);
            });
            matchingRules.forEach((rule) => {
              rule.count++;
              if (!rule.matchedLogs.find((l) => l.id === log.id)) {
                rule.matchedLogs.push(log);
              }
            });
          });
        }
      });
      console.log(`[ThreatAnalysis] Rule statistics updated from ${logsToAnalyze.length} logs`);
      threatRules.value.forEach((rule) => {
        if (rule.count > 0) {
          console.log(`  - ${rule.name}: ${rule.count} matches`);
        }
      });
      updateThreatStats();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["h-full flex", unref(themeStore).themeClasses.background])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["w-80 flex flex-col border-r", [unref(themeStore).themeClasses.cardBackground, unref(themeStore).themeClasses.borderStyle]])
        }, [
          createBaseVNode("div", _hoisted_1, [
            _cache[13] || (_cache[13] = createBaseVNode("h2", { class: "text-lg font-semibold text-white mb-2 flex items-center gap-2" }, [
              createBaseVNode("i", { class: "pi pi-shield text-red-400" }),
              createTextVNode(" 威胁规则引擎 ")
            ], -1)),
            createBaseVNode("div", _hoisted_2, [
              createTextVNode(" 共检测到 " + toDisplayString(threatStats.value.total) + " 个威胁，" + toDisplayString(threatStats.value.unthreatened) + " 条正常日志 ", 1),
              isLargeDataset.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
                _cache[12] || (_cache[12] = createBaseVNode("i", { class: "pi pi-info-circle mr-1" }, null, -1)),
                createTextVNode(" 大数据量模式：已采样分析 (" + toDisplayString(Math.round(allLogs.value.length / samplingRate.value)) + " / " + toDisplayString(allLogs.value.length.toLocaleString()) + " 条) ", 1)
              ])) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, toDisplayString(threatStats.value.critical), 1),
                _cache[14] || (_cache[14] = createBaseVNode("div", { class: "text-xs text-gray-400" }, "严重", -1))
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, toDisplayString(threatStats.value.high), 1),
                _cache[15] || (_cache[15] = createBaseVNode("div", { class: "text-xs text-gray-400" }, "高危", -1))
              ]),
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, toDisplayString(threatStats.value.medium), 1),
                _cache[16] || (_cache[16] = createBaseVNode("div", { class: "text-xs text-gray-400" }, "中危", -1))
              ]),
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("div", _hoisted_13, toDisplayString(threatStats.value.low), 1),
                _cache[17] || (_cache[17] = createBaseVNode("div", { class: "text-xs text-gray-400" }, "低危", -1))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_14, [
            createBaseVNode("div", _hoisted_15, [
              _cache[18] || (_cache[18] = createBaseVNode("h3", { class: "text-sm font-medium text-gray-300 mb-3" }, "威胁分类", -1)),
              createBaseVNode("div", _hoisted_16, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(threatCategories.value, (category) => {
                  return openBlock(), createElementBlock("div", {
                    key: category.id,
                    class: "border border-gray-600 rounded-lg overflow-hidden"
                  }, [
                    createBaseVNode("div", {
                      onClick: ($event) => selectCategory(category.id),
                      class: normalizeClass([
                        "p-3 cursor-pointer transition-colors flex items-center justify-between",
                        selectedCategory.value === category.id ? "bg-blue-600/30 border-blue-500/50" : "bg-gray-700/50 hover:bg-gray-700"
                      ])
                    }, [
                      createBaseVNode("div", _hoisted_18, [
                        createBaseVNode("i", {
                          class: normalizeClass(["pi", category.icon, category.color])
                        }, null, 2),
                        createBaseVNode("span", _hoisted_19, toDisplayString(category.name), 1)
                      ]),
                      createBaseVNode("div", _hoisted_20, [
                        createBaseVNode("span", _hoisted_21, toDisplayString(category.totalCount), 1),
                        createBaseVNode("i", {
                          class: normalizeClass([
                            "pi text-xs transition-transform",
                            selectedCategory.value === category.id ? "pi-chevron-down" : "pi-chevron-right"
                          ])
                        }, null, 2)
                      ])
                    ], 10, _hoisted_17),
                    selectedCategory.value === category.id ? (openBlock(), createElementBlock("div", _hoisted_22, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(category.rules, (rule) => {
                        return openBlock(), createElementBlock("div", {
                          key: rule.id,
                          onClick: ($event) => selectRule(rule.id),
                          class: normalizeClass([
                            "p-3 cursor-pointer transition-colors border-l-4",
                            selectedRule.value === rule.id ? "bg-blue-600/20 border-blue-500" : "bg-gray-800/50 hover:bg-gray-700/50 border-transparent"
                          ])
                        }, [
                          createBaseVNode("div", _hoisted_24, [
                            createBaseVNode("div", _hoisted_25, [
                              createBaseVNode("i", {
                                class: normalizeClass(["pi", rule.icon, rule.color])
                              }, null, 2),
                              createBaseVNode("span", _hoisted_26, toDisplayString(rule.name), 1)
                            ]),
                            createBaseVNode("div", _hoisted_27, [
                              createBaseVNode("button", {
                                onClick: withModifiers(($event) => toggleRule(rule.id), ["stop"]),
                                class: normalizeClass([
                                  "w-4 h-4 rounded border",
                                  rule.enabled ? "bg-green-500 border-green-500" : "bg-gray-600 border-gray-500"
                                ])
                              }, [
                                rule.enabled ? (openBlock(), createElementBlock("i", _hoisted_29)) : createCommentVNode("", true)
                              ], 10, _hoisted_28),
                              createBaseVNode("span", {
                                class: normalizeClass([
                                  "text-xs px-2 py-1 rounded border",
                                  unref(getThreatLevelBadgeClass)(rule.level)
                                ])
                              }, toDisplayString(rule.count), 3)
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_30, toDisplayString(rule.description), 1)
                        ], 10, _hoisted_23);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ]);
                }), 128))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_31, [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push("/rules")),
              class: "w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors flex items-center justify-center gap-2"
            }, _cache[19] || (_cache[19] = [
              createBaseVNode("i", { class: "pi pi-cog" }, null, -1),
              createTextVNode(" 管理规则 ")
            ])),
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => loadRulesFromDatabase().then(() => loadData())),
              disabled: loading.value,
              class: "w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white rounded transition-colors flex items-center justify-center gap-2"
            }, [
              createBaseVNode("i", {
                class: normalizeClass(loading.value ? "pi pi-spin pi-spinner" : "pi pi-refresh")
              }, null, 2),
              createTextVNode(" " + toDisplayString(loading.value ? "分析中..." : "重新分析"), 1)
            ], 8, _hoisted_32)
          ])
        ], 2),
        createBaseVNode("div", _hoisted_33, [
          createBaseVNode("div", _hoisted_34, [
            createBaseVNode("div", _hoisted_35, [
              createBaseVNode("div", null, [
                _cache[21] || (_cache[21] = createBaseVNode("h1", { class: "text-2xl font-bold text-white mb-2" }, "威胁分析详情", -1)),
                createBaseVNode("p", _hoisted_36, [
                  selectedRule.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(" 规则：" + toDisplayString(threatRules.value.find((r) => r.id === selectedRule.value)?.name), 1)
                  ], 64)) : selectedCategory.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(" 分类：" + toDisplayString(threatCategories.value.find((c) => c.id === selectedCategory.value)?.name), 1)
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                    createTextVNode(" 显示所有威胁日志 ")
                  ], 64)),
                  createTextVNode(" （" + toDisplayString(filteredLogs.value.length) + " 条记录 ", 1),
                  isLargeDataset.value ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                    createTextVNode(" / 共 " + toDisplayString(allLogs.value.length.toLocaleString()) + " 条 ", 1)
                  ], 64)) : createCommentVNode("", true),
                  _cache[20] || (_cache[20] = createTextVNode(" ） "))
                ])
              ]),
              createBaseVNode("div", _hoisted_37, [
                createBaseVNode("button", {
                  onClick: _cache[2] || (_cache[2] = ($event) => activeTab.value = "rules"),
                  class: normalizeClass([
                    "px-4 py-2 rounded-lg transition-colors",
                    activeTab.value === "rules" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
                  ])
                }, _cache[22] || (_cache[22] = [
                  createBaseVNode("i", { class: "pi pi-list mr-2" }, null, -1),
                  createTextVNode(" 日志列表 ")
                ]), 2),
                createBaseVNode("button", {
                  onClick: _cache[3] || (_cache[3] = ($event) => activeTab.value = "charts"),
                  class: normalizeClass([
                    "px-4 py-2 rounded-lg transition-colors",
                    activeTab.value === "charts" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
                  ])
                }, _cache[23] || (_cache[23] = [
                  createBaseVNode("i", { class: "pi pi-chart-bar mr-2" }, null, -1),
                  createTextVNode(" 图表分析 ")
                ]), 2)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_38, [
            allLogs.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_39, [
              createBaseVNode("div", _hoisted_40, [
                createBaseVNode("div", _hoisted_41, [
                  _cache[24] || (_cache[24] = createBaseVNode("h3", { class: "text-sm font-medium text-white flex items-center gap-2" }, [
                    createBaseVNode("i", { class: "pi pi-filter text-yellow-400" }),
                    createTextVNode(" 分析过滤配置 ")
                  ], -1)),
                  createBaseVNode("button", {
                    onClick: _cache[4] || (_cache[4] = ($event) => showFilterConfig.value = !showFilterConfig.value),
                    class: "px-3 py-1 text-xs bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded hover:bg-yellow-500/30 transition-colors"
                  }, [
                    createBaseVNode("i", {
                      class: normalizeClass(["pi", showFilterConfig.value ? "pi-chevron-up" : "pi-chevron-down"])
                    }, null, 2),
                    createTextVNode(" " + toDisplayString(showFilterConfig.value ? "收起" : "展开"), 1)
                  ])
                ]),
                withDirectives(createBaseVNode("div", _hoisted_42, [
                  createBaseVNode("div", _hoisted_43, [
                    createBaseVNode("div", null, [
                      _cache[25] || (_cache[25] = createBaseVNode("label", { class: "block text-xs text-gray-400 mb-1" }, "包含状态码（逗号分隔）", -1)),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => filterRules.statusCodes = $event),
                        type: "text",
                        placeholder: "如: 200,301,500",
                        class: "w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                      }, null, 512), [
                        [vModelText, filterRules.statusCodes]
                      ])
                    ]),
                    createBaseVNode("div", null, [
                      _cache[26] || (_cache[26] = createBaseVNode("label", { class: "block text-xs text-gray-400 mb-1" }, "排除状态码（逗号分隔）", -1)),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => filterRules.excludeStatusCodes = $event),
                        type: "text",
                        placeholder: "如: 404,403",
                        class: "w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                      }, null, 512), [
                        [vModelText, filterRules.excludeStatusCodes]
                      ])
                    ]),
                    createBaseVNode("div", null, [
                      _cache[27] || (_cache[27] = createBaseVNode("label", { class: "block text-xs text-gray-400 mb-1" }, "仅包含IP（逗号分隔）", -1)),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => filterRules.includeOnlyIPs = $event),
                        type: "text",
                        placeholder: "如: 192.168.1.1,10.0.0.1,192.168",
                        class: "w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                      }, null, 512), [
                        [vModelText, filterRules.includeOnlyIPs]
                      ]),
                      _cache[28] || (_cache[28] = createBaseVNode("p", { class: "text-xs text-gray-500 mt-1" }, "支持完整IP、IP前缀匹配（如192.168匹配所有192.168.x.x）", -1))
                    ]),
                    createBaseVNode("div", null, [
                      _cache[29] || (_cache[29] = createBaseVNode("label", { class: "block text-xs text-gray-400 mb-1" }, "排除IP（逗号分隔）", -1)),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => filterRules.excludeIPs = $event),
                        type: "text",
                        placeholder: "如: 192.168.1.100,127.0.0.1,192.168",
                        class: "w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                      }, null, 512), [
                        [vModelText, filterRules.excludeIPs]
                      ]),
                      _cache[30] || (_cache[30] = createBaseVNode("p", { class: "text-xs text-gray-500 mt-1" }, "支持完整IP、IP前缀匹配", -1))
                    ]),
                    createBaseVNode("div", null, [
                      _cache[31] || (_cache[31] = createBaseVNode("label", { class: "block text-xs text-gray-400 mb-1" }, "路径包含模式", -1)),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => filterRules.pathPattern = $event),
                        type: "text",
                        placeholder: "如: /api/, /admin, /\\\\.php$/",
                        class: "w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                      }, null, 512), [
                        [vModelText, filterRules.pathPattern]
                      ]),
                      _cache[32] || (_cache[32] = createBaseVNode("p", { class: "text-xs text-gray-500 mt-1" }, "支持字符串包含匹配，或用/正则/格式进行正则匹配", -1))
                    ]),
                    createBaseVNode("div", null, [
                      _cache[33] || (_cache[33] = createBaseVNode("label", { class: "block text-xs text-gray-400 mb-1" }, "路径排除模式", -1)),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => filterRules.excludePathPattern = $event),
                        type: "text",
                        placeholder: "如: /static/, /assets, /\\\\.(js|css)$/",
                        class: "w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                      }, null, 512), [
                        [vModelText, filterRules.excludePathPattern]
                      ]),
                      _cache[34] || (_cache[34] = createBaseVNode("p", { class: "text-xs text-gray-500 mt-1" }, "支持字符串包含匹配，或用/正则/格式进行正则匹配", -1))
                    ])
                  ]),
                  hasActiveFilters.value ? (openBlock(), createElementBlock("div", _hoisted_44, [
                    _cache[35] || (_cache[35] = createBaseVNode("div", { class: "font-medium mb-1" }, "当前活跃过滤条件：", -1)),
                    createBaseVNode("div", _hoisted_45, [
                      filterRules.statusCodes ? (openBlock(), createElementBlock("div", _hoisted_46, "状态码包含: " + toDisplayString(filterRules.statusCodes), 1)) : createCommentVNode("", true),
                      filterRules.excludeStatusCodes ? (openBlock(), createElementBlock("div", _hoisted_47, "状态码排除: " + toDisplayString(filterRules.excludeStatusCodes), 1)) : createCommentVNode("", true),
                      filterRules.includeOnlyIPs ? (openBlock(), createElementBlock("div", _hoisted_48, "IP包含: " + toDisplayString(filterRules.includeOnlyIPs), 1)) : createCommentVNode("", true),
                      filterRules.excludeIPs ? (openBlock(), createElementBlock("div", _hoisted_49, "IP排除: " + toDisplayString(filterRules.excludeIPs), 1)) : createCommentVNode("", true),
                      filterRules.pathPattern ? (openBlock(), createElementBlock("div", _hoisted_50, "路径包含: " + toDisplayString(filterRules.pathPattern), 1)) : createCommentVNode("", true),
                      filterRules.excludePathPattern ? (openBlock(), createElementBlock("div", _hoisted_51, "路径排除: " + toDisplayString(filterRules.excludePathPattern), 1)) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("div", _hoisted_52, " 过滤后日志数量: " + toDisplayString(filteredLogs.value.length) + " / " + toDisplayString(allLogs.value.length), 1)
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_53, [
                    createBaseVNode("div", _hoisted_54, [
                      _cache[36] || (_cache[36] = createBaseVNode("div", null, "配置过滤规则后重新分析以获得精确结果", -1)),
                      hasActiveFilters.value ? (openBlock(), createElementBlock("div", _hoisted_55, " 预计过滤后约 " + toDisplayString(filterPreviewCount.value.toLocaleString()) + " 条日志 (当前 " + toDisplayString(allLogs.value.length.toLocaleString()) + " 条) ", 1)) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("div", { class: "flex gap-2" }, [
                      createBaseVNode("button", {
                        onClick: clearFilterRules,
                        class: "px-3 py-1 text-xs bg-gray-500/20 text-gray-400 border border-gray-500/30 rounded hover:bg-gray-500/30 transition-colors"
                      }, " 清除 "),
                      createBaseVNode("button", {
                        onClick: applyFilterRules,
                        class: "px-3 py-1 text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded hover:bg-blue-500/30 transition-colors"
                      }, _cache[37] || (_cache[37] = [
                        createBaseVNode("i", { class: "pi pi-refresh mr-1" }, null, -1),
                        createTextVNode(" 应用并重新分析 ")
                      ]))
                    ])
                  ])
                ], 512), [
                  [vShow, showFilterConfig.value]
                ])
              ])
            ])) : createCommentVNode("", true),
            allLogs.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_56, [
              allLogs.value.length <= FULL_ANALYSIS_THRESHOLD ? (openBlock(), createElementBlock("div", _hoisted_57, [
                createBaseVNode("div", _hoisted_58, [
                  _cache[38] || (_cache[38] = createBaseVNode("i", { class: "pi pi-check-circle" }, null, -1)),
                  createBaseVNode("span", null, " 全量分析模式：正在分析" + toDisplayString(hasActiveFilters.value ? "过滤后的" : "所有") + " " + toDisplayString(allLogs.value.length.toLocaleString()) + " 条日志 ", 1)
                ]),
                createBaseVNode("div", _hoisted_59, [
                  _cache[39] || (_cache[39] = createTextVNode(" 数据量在5万条以下，自动使用全量分析获得最精确的结果 ")),
                  hasActiveFilters.value ? (openBlock(), createElementBlock("span", _hoisted_60, " (已应用过滤规则) ")) : createCommentVNode("", true)
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_61, [
                createBaseVNode("div", _hoisted_62, [
                  createBaseVNode("div", _hoisted_63, [
                    _cache[40] || (_cache[40] = createBaseVNode("i", { class: "pi pi-info-circle" }, null, -1)),
                    useFullAnalysis.value ? (openBlock(), createElementBlock("span", _hoisted_64, " 强制全量分析：正在分析" + toDisplayString(hasActiveFilters.value ? "过滤后的" : "所有") + " " + toDisplayString(allLogs.value.length.toLocaleString()) + " 条日志 ", 1)) : (openBlock(), createElementBlock("span", _hoisted_65, " 采样分析模式：已采样分析 (" + toDisplayString(Math.round(allLogs.value.length / samplingRate.value)) + " / " + toDisplayString(allLogs.value.length.toLocaleString()) + " 条)" + toDisplayString(hasActiveFilters.value ? " [过滤后]" : ""), 1))
                  ]),
                  createBaseVNode("div", _hoisted_66, [
                    createBaseVNode("label", _hoisted_67, [
                      withDirectives(createBaseVNode("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => useFullAnalysis.value = $event),
                        onChange: loadData,
                        class: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      }, null, 544), [
                        [vModelCheckbox, useFullAnalysis.value]
                      ]),
                      _cache[41] || (_cache[41] = createBaseVNode("span", null, "强制全量分析", -1))
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_68, [
                  useFullAnalysis.value ? (openBlock(), createElementBlock("span", _hoisted_69, " ⚠️ 全量分析大数据集可能影响性能，建议使用过滤功能 ")) : (openBlock(), createElementBlock("span", _hoisted_70, " 当前采样率为 1/" + toDisplayString(samplingRate.value) + '，可勾选"强制全量分析"获得完整结果 ', 1))
                ])
              ]))
            ])) : createCommentVNode("", true),
            activeTab.value === "rules" ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: "h-full overflow-y-auto p-6",
              onScroll: checkLoadMore
            }, [
              loading.value ? (openBlock(), createElementBlock("div", _hoisted_71, _cache[42] || (_cache[42] = [
                createBaseVNode("div", { class: "text-center" }, [
                  createBaseVNode("i", { class: "pi pi-spin pi-spinner text-3xl text-blue-400 mb-4" }),
                  createBaseVNode("div", { class: "text-gray-400" }, "正在分析威胁...")
                ], -1)
              ]))) : error.value ? (openBlock(), createElementBlock("div", _hoisted_72, [
                createBaseVNode("div", _hoisted_73, [
                  _cache[43] || (_cache[43] = createBaseVNode("i", { class: "pi pi-exclamation-triangle" }, null, -1)),
                  createBaseVNode("span", null, toDisplayString(error.value), 1)
                ])
              ])) : filteredLogs.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_74, _cache[44] || (_cache[44] = [
                createBaseVNode("i", { class: "pi pi-shield text-4xl text-gray-400 mb-4" }, null, -1),
                createBaseVNode("div", { class: "text-xl text-gray-400 mb-2" }, "暂无威胁日志", -1),
                createBaseVNode("div", { class: "text-sm text-gray-500" }, "当前筛选条件下没有发现威胁", -1)
              ]))) : (openBlock(), createElementBlock("div", _hoisted_75, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(displayedLogs.value, (log, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: log.id || index,
                    class: "bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors"
                  }, [
                    createBaseVNode("div", _hoisted_76, [
                      createBaseVNode("div", _hoisted_77, [
                        createBaseVNode("div", _hoisted_78, [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              "px-2 py-1 rounded text-xs font-medium border",
                              unref(getMethodColorClass)(log.method)
                            ])
                          }, toDisplayString(log.method), 3),
                          createBaseVNode("span", {
                            class: normalizeClass([
                              "px-2 py-1 rounded text-xs font-medium border",
                              unref(getStatusCodeColorClass)(log.statusCode)
                            ])
                          }, toDisplayString(log.statusCode), 3),
                          createBaseVNode("span", _hoisted_79, toDisplayString(formatDateTime(log.timestamp)), 1),
                          log.responseSize ? (openBlock(), createElementBlock("span", _hoisted_80, toDisplayString(formatBytes(log.responseSize)), 1)) : createCommentVNode("", true)
                        ]),
                        createBaseVNode("div", _hoisted_81, [
                          createBaseVNode("div", _hoisted_82, [
                            createBaseVNode("div", _hoisted_83, [
                              log.path && log.path.length > 100 ? (openBlock(), createElementBlock("div", _hoisted_84, [
                                !expandedLogs.value.has(log.id || index.toString()) ? (openBlock(), createElementBlock("div", _hoisted_85, [
                                  createBaseVNode("div", _hoisted_86, toDisplayString(log.path.substring(0, 100)) + "...", 1),
                                  createBaseVNode("button", {
                                    onClick: ($event) => toggleLogExpansion(log.id || index.toString()),
                                    class: "flex-shrink-0 px-2 py-1 text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded hover:bg-blue-500/30 transition-colors",
                                    title: "展开完整路径"
                                  }, _cache[45] || (_cache[45] = [
                                    createBaseVNode("i", { class: "pi pi-chevron-down mr-1" }, null, -1),
                                    createTextVNode(" 展开 ")
                                  ]), 8, _hoisted_87)
                                ])) : (openBlock(), createElementBlock("div", _hoisted_88, [
                                  createBaseVNode("div", _hoisted_89, toDisplayString(log.path), 1),
                                  createBaseVNode("button", {
                                    onClick: ($event) => toggleLogExpansion(log.id || index.toString()),
                                    class: "px-2 py-1 text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded hover:bg-blue-500/30 transition-colors",
                                    title: "折叠路径"
                                  }, _cache[46] || (_cache[46] = [
                                    createBaseVNode("i", { class: "pi pi-chevron-up mr-1" }, null, -1),
                                    createTextVNode(" 折叠 ")
                                  ]), 8, _hoisted_90)
                                ]))
                              ])) : (openBlock(), createElementBlock("div", _hoisted_91, toDisplayString(log.path), 1))
                            ])
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_92, [
                          createBaseVNode("div", null, "IP: " + toDisplayString(log.ip), 1),
                          log.userAgent && log.userAgent.length > 150 ? (openBlock(), createElementBlock("div", _hoisted_93, [
                            !expandedLogs.value.has((log.id || index.toString()) + "_ua") ? (openBlock(), createElementBlock("div", _hoisted_94, [
                              createBaseVNode("div", _hoisted_95, "UA: " + toDisplayString(log.userAgent.substring(0, 150)) + "...", 1),
                              createBaseVNode("button", {
                                onClick: ($event) => toggleLogExpansion((log.id || index.toString()) + "_ua"),
                                class: "flex-shrink-0 px-1 py-0.5 text-xs bg-gray-500/20 text-gray-400 border border-gray-500/30 rounded hover:bg-gray-500/30 transition-colors",
                                title: "展开完整 User Agent"
                              }, _cache[47] || (_cache[47] = [
                                createBaseVNode("i", { class: "pi pi-chevron-down" }, null, -1)
                              ]), 8, _hoisted_96)
                            ])) : (openBlock(), createElementBlock("div", _hoisted_97, [
                              createBaseVNode("div", _hoisted_98, "UA: " + toDisplayString(log.userAgent), 1),
                              createBaseVNode("button", {
                                onClick: ($event) => toggleLogExpansion((log.id || index.toString()) + "_ua"),
                                class: "px-1 py-0.5 text-xs bg-gray-500/20 text-gray-400 border border-gray-500/30 rounded hover:bg-gray-500/30 transition-colors",
                                title: "折叠 User Agent"
                              }, _cache[48] || (_cache[48] = [
                                createBaseVNode("i", { class: "pi pi-chevron-up" }, null, -1)
                              ]), 8, _hoisted_99)
                            ]))
                          ])) : (openBlock(), createElementBlock("div", _hoisted_100, "UA: " + toDisplayString(log.userAgent), 1))
                        ]),
                        createBaseVNode("div", _hoisted_101, [
                          createBaseVNode("div", _hoisted_102, [
                            _cache[50] || (_cache[50] = createBaseVNode("div", { class: "text-xs text-gray-400" }, "命中规则:", -1)),
                            createBaseVNode("button", {
                              onClick: ($event) => highlightMatches(log),
                              class: "flex items-center gap-1 px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded hover:bg-yellow-500/30 transition-colors",
                              title: "使用正则重新匹配并高亮显示"
                            }, _cache[49] || (_cache[49] = [
                              createBaseVNode("i", { class: "pi pi-search" }, null, -1),
                              createBaseVNode("span", null, "正则匹配", -1)
                            ]), 8, _hoisted_103)
                          ]),
                          createBaseVNode("div", _hoisted_104, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(threatRules.value.filter((r) => r.matchedLogs.includes(log)), (rule) => {
                              return openBlock(), createElementBlock("div", {
                                key: rule.id,
                                class: "bg-gray-700/50 rounded p-2 border border-gray-600/50"
                              }, [
                                createBaseVNode("div", _hoisted_105, [
                                  createBaseVNode("span", {
                                    class: normalizeClass([
                                      "text-xs px-2 py-1 rounded border",
                                      unref(getThreatLevelBadgeClass)(rule.level)
                                    ])
                                  }, [
                                    createBaseVNode("i", {
                                      class: normalizeClass(["pi", unref(getThreatLevelIcon)(rule.level).icon, "mr-1"])
                                    }, null, 2),
                                    createTextVNode(" " + toDisplayString(rule.name), 1)
                                  ], 2),
                                  createBaseVNode("span", _hoisted_106, toDisplayString(rule.category), 1)
                                ]),
                                createBaseVNode("div", _hoisted_107, [
                                  _cache[51] || (_cache[51] = createBaseVNode("span", { class: "text-gray-500" }, "正则:", -1)),
                                  createTextVNode(" " + toDisplayString(rule.pattern), 1)
                                ]),
                                highlightedLogId.value === (log.id || index) ? (openBlock(), createElementBlock("div", _hoisted_108, [
                                  _cache[52] || (_cache[52] = createBaseVNode("div", { class: "text-xs text-green-400 mb-1" }, "匹配结果:", -1)),
                                  createBaseVNode("div", _hoisted_109, [
                                    createBaseVNode("div", {
                                      class: "max-h-32 overflow-y-auto break-all whitespace-pre-wrap font-mono",
                                      innerHTML: getHighlightedContent(log, rule)
                                    }, null, 8, _hoisted_110)
                                  ])
                                ])) : createCommentVNode("", true)
                              ]);
                            }), 128))
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_111, [
                        log.threatLevel ? (openBlock(), createElementBlock("span", {
                          key: 0,
                          class: normalizeClass([
                            "px-3 py-1 rounded-full text-sm font-medium border",
                            unref(getThreatLevelBadgeClass)(log.threatLevel)
                          ])
                        }, [
                          createBaseVNode("i", {
                            class: normalizeClass(["pi", unref(getThreatLevelIcon)(log.threatLevel).icon, "mr-1"])
                          }, null, 2),
                          createTextVNode(" " + toDisplayString(log.threatLevel), 1)
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ])
                  ]);
                }), 128)),
                displayedLogs.value.length < filteredLogs.value.length ? (openBlock(), createElementBlock("div", _hoisted_112, [
                  createBaseVNode("button", {
                    onClick: loadMoreLogs,
                    disabled: isLoadingMore.value,
                    class: "px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white rounded-lg transition-colors flex items-center justify-center gap-2 mx-auto"
                  }, [
                    isLoadingMore.value ? (openBlock(), createElementBlock("i", _hoisted_114)) : (openBlock(), createElementBlock("i", _hoisted_115)),
                    createTextVNode(" " + toDisplayString(isLoadingMore.value ? "加载中..." : `加载更多 (还有 ${filteredLogs.value.length - displayedLogs.value.length} 条)`), 1)
                  ], 8, _hoisted_113)
                ])) : displayedLogs.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_116, [
                  createBaseVNode("div", _hoisted_117, [
                    _cache[53] || (_cache[53] = createBaseVNode("i", { class: "pi pi-check-circle mr-1" }, null, -1)),
                    createTextVNode(" 已加载全部 " + toDisplayString(displayedLogs.value.length) + " 条威胁日志 ", 1)
                  ])
                ])) : createCommentVNode("", true)
              ]))
            ], 32)) : activeTab.value === "charts" ? (openBlock(), createElementBlock("div", _hoisted_118, [
              createBaseVNode("div", _hoisted_119, [
                createBaseVNode("div", _hoisted_120, [
                  createBaseVNode("div", _hoisted_121, [
                    createBaseVNode("div", _hoisted_122, [
                      createBaseVNode("div", null, [
                        _cache[54] || (_cache[54] = createBaseVNode("p", { class: "text-gray-400 text-sm" }, "日志总数", -1)),
                        createBaseVNode("p", _hoisted_123, toDisplayString(logStats.value.totalLogs.toLocaleString()), 1)
                      ]),
                      _cache[55] || (_cache[55] = createBaseVNode("div", { class: "w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center" }, [
                        createBaseVNode("i", { class: "pi pi-file text-blue-400 text-xl" })
                      ], -1))
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_124, [
                    createBaseVNode("div", _hoisted_125, [
                      createBaseVNode("div", null, [
                        _cache[56] || (_cache[56] = createBaseVNode("p", { class: "text-gray-400 text-sm" }, "唯一IP", -1)),
                        createBaseVNode("p", _hoisted_126, toDisplayString(logStats.value.uniqueIPs.toLocaleString()), 1)
                      ]),
                      _cache[57] || (_cache[57] = createBaseVNode("div", { class: "w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center" }, [
                        createBaseVNode("i", { class: "pi pi-globe text-green-400 text-xl" })
                      ], -1))
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_127, [
                    createBaseVNode("div", _hoisted_128, [
                      createBaseVNode("div", null, [
                        _cache[58] || (_cache[58] = createBaseVNode("p", { class: "text-gray-400 text-sm" }, "唯一路径", -1)),
                        createBaseVNode("p", _hoisted_129, toDisplayString(logStats.value.uniquePaths.toLocaleString()), 1)
                      ]),
                      _cache[59] || (_cache[59] = createBaseVNode("div", { class: "w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center" }, [
                        createBaseVNode("i", { class: "pi pi-sitemap text-purple-400 text-xl" })
                      ], -1))
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_130, [
                    createBaseVNode("div", _hoisted_131, [
                      createBaseVNode("div", null, [
                        _cache[60] || (_cache[60] = createBaseVNode("p", { class: "text-gray-400 text-sm" }, "平均响应大小", -1)),
                        createBaseVNode("p", _hoisted_132, toDisplayString(formatBytes(logStats.value.averageResponseSize)), 1)
                      ]),
                      _cache[61] || (_cache[61] = createBaseVNode("div", { class: "w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center" }, [
                        createBaseVNode("i", { class: "pi pi-chart-line text-orange-400 text-xl" })
                      ], -1))
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_133, [
                  createBaseVNode("div", _hoisted_134, [
                    _cache[63] || (_cache[63] = createBaseVNode("div", { class: "w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center" }, [
                      createBaseVNode("i", { class: "pi pi-calendar text-indigo-400 text-xl" })
                    ], -1)),
                    createBaseVNode("div", null, [
                      _cache[62] || (_cache[62] = createBaseVNode("p", { class: "text-gray-400 text-sm" }, "数据时间范围", -1)),
                      createBaseVNode("p", _hoisted_135, toDisplayString(formatTimeRange()), 1)
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_136, [
                  _cache[64] || (_cache[64] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4 flex items-center gap-2" }, [
                    createBaseVNode("i", { class: "pi pi-chart-pie text-red-400" }),
                    createTextVNode(" 威胁等级分布 ")
                  ], -1)),
                  createBaseVNode("div", _hoisted_137, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(threatLevelData.value, (item) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.name,
                        class: "group cursor-pointer hover:bg-gray-700/50 rounded p-2 transition-colors"
                      }, [
                        createBaseVNode("div", _hoisted_138, [
                          createBaseVNode("div", _hoisted_139, [
                            createBaseVNode("div", {
                              class: "w-4 h-4 rounded",
                              style: normalizeStyle({ backgroundColor: item.color })
                            }, null, 4),
                            createBaseVNode("span", _hoisted_140, toDisplayString(item.name), 1)
                          ]),
                          createBaseVNode("div", _hoisted_141, [
                            createBaseVNode("span", _hoisted_142, toDisplayString(item.value), 1),
                            createBaseVNode("div", _hoisted_143, toDisplayString((item.value / threatStats.value.total * 100).toFixed(1)) + "%", 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_144, [
                          createBaseVNode("div", {
                            class: "h-2 rounded-full transition-all duration-300",
                            style: normalizeStyle({
                              backgroundColor: item.color,
                              width: `${item.value / threatStats.value.total * 100}%`
                            })
                          }, null, 4)
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                createBaseVNode("div", _hoisted_145, [
                  _cache[65] || (_cache[65] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4 flex items-center gap-2" }, [
                    createBaseVNode("i", { class: "pi pi-chart-bar text-blue-400" }),
                    createTextVNode(" 威胁分类统计 ")
                  ], -1)),
                  createBaseVNode("div", _hoisted_146, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(categoryData.value, (item, index) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.name,
                        class: "group cursor-pointer hover:bg-gray-700/50 rounded p-2 transition-colors"
                      }, [
                        createBaseVNode("div", _hoisted_147, [
                          createBaseVNode("span", _hoisted_148, toDisplayString(item.name), 1),
                          createBaseVNode("span", _hoisted_149, toDisplayString(item.value), 1)
                        ]),
                        createBaseVNode("div", _hoisted_150, [
                          createBaseVNode("div", {
                            class: "h-3 rounded-full transition-all duration-500 delay-100",
                            style: normalizeStyle({
                              backgroundColor: getRandomColor(index),
                              width: `${item.value / Math.max(...categoryData.value.map((c) => c.value)) * 100}%`
                            })
                          }, null, 4)
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                createBaseVNode("div", _hoisted_151, [
                  _cache[69] || (_cache[69] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4 flex items-center gap-2" }, [
                    createBaseVNode("i", { class: "pi pi-trending-up text-yellow-400" }),
                    createTextVNode(" 实时威胁趋势 ")
                  ], -1)),
                  createBaseVNode("div", _hoisted_152, [
                    createBaseVNode("div", _hoisted_153, [
                      createBaseVNode("div", _hoisted_154, [
                        _cache[66] || (_cache[66] = createBaseVNode("span", { class: "text-red-400" }, "总威胁数", -1)),
                        createBaseVNode("span", _hoisted_155, toDisplayString(threatStats.value.total), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_156, [
                      createBaseVNode("div", _hoisted_157, [
                        _cache[67] || (_cache[67] = createBaseVNode("span", { class: "text-green-400" }, "正常日志", -1)),
                        createBaseVNode("span", _hoisted_158, toDisplayString(threatStats.value.unthreatened), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_159, [
                      createBaseVNode("div", _hoisted_160, [
                        _cache[68] || (_cache[68] = createBaseVNode("span", { class: "text-orange-400" }, "威胁率", -1)),
                        createBaseVNode("span", _hoisted_161, toDisplayString((threatStats.value.total / (threatStats.value.total + threatStats.value.unthreatened) * 100).toFixed(1)) + "% ", 1)
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_162, [
                  _cache[70] || (_cache[70] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4 flex items-center gap-2" }, [
                    createBaseVNode("i", { class: "pi pi-clock text-green-400" }),
                    createTextVNode(" 24小时威胁活动时间线 ")
                  ], -1)),
                  createBaseVNode("div", _hoisted_163, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(timelineData.value, (hour) => {
                      return openBlock(), createElementBlock("div", {
                        key: hour.hour,
                        class: "flex-1 relative group cursor-pointer"
                      }, [
                        createBaseVNode("div", {
                          class: "bg-gradient-to-t from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 transition-all duration-300 rounded-t",
                          style: normalizeStyle({
                            height: hour.count > 0 ? `${Math.max(8, hour.count / Math.max(...timelineData.value.map((h) => h.count)) * 100)}%` : "4px"
                          })
                        }, null, 4),
                        createBaseVNode("div", _hoisted_164, [
                          createBaseVNode("div", _hoisted_165, [
                            createBaseVNode("div", _hoisted_166, toDisplayString(hour.hour) + ":00 - " + toDisplayString(hour.hour + 1) + ":00", 1),
                            createBaseVNode("div", _hoisted_167, toDisplayString(hour.count) + " 个威胁", 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_168, toDisplayString(hour.hour), 1)
                      ]);
                    }), 128))
                  ]),
                  _cache[71] || (_cache[71] = createBaseVNode("div", { class: "flex justify-between text-xs text-gray-400 border-t border-gray-600 pt-2" }, [
                    createBaseVNode("span", null, "凌晨"),
                    createBaseVNode("span", null, "上午"),
                    createBaseVNode("span", null, "下午"),
                    createBaseVNode("span", null, "晚上")
                  ], -1))
                ]),
                createBaseVNode("div", _hoisted_169, [
                  _cache[72] || (_cache[72] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4 flex items-center gap-2" }, [
                    createBaseVNode("i", { class: "pi pi-globe text-purple-400" }),
                    createTextVNode(" 高危IP地址分析 ")
                  ], -1)),
                  createBaseVNode("div", _hoisted_170, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(topThreatIPs.value, (ip, index) => {
                      return openBlock(), createElementBlock("div", {
                        key: ip.ip,
                        class: normalizeClass(["flex items-center justify-between p-3 bg-gray-700/50 rounded border-l-4", getThreatBorderClass(ip.threatLevel)])
                      }, [
                        createBaseVNode("div", _hoisted_171, [
                          createBaseVNode("div", _hoisted_172, toDisplayString(ip.ip), 1),
                          createBaseVNode("span", {
                            class: normalizeClass(["px-2 py-1 text-xs rounded", getThreatBadgeClass(ip.threatLevel)])
                          }, toDisplayString(ip.threatLevel), 3)
                        ]),
                        createBaseVNode("div", _hoisted_173, [
                          createBaseVNode("div", _hoisted_174, toDisplayString(ip.count) + " 次威胁", 1),
                          createBaseVNode("div", _hoisted_175, toDisplayString(ip.location || "未知位置"), 1)
                        ])
                      ], 2);
                    }), 128))
                  ])
                ]),
                createBaseVNode("div", _hoisted_176, [
                  _cache[73] || (_cache[73] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4 flex items-center gap-2" }, [
                    createBaseVNode("i", { class: "pi pi-cog text-cyan-400" }),
                    createTextVNode(" 攻击方法分析 ")
                  ], -1)),
                  createBaseVNode("div", _hoisted_177, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(threatMethodsData.value, (method) => {
                      return openBlock(), createElementBlock("div", {
                        key: method.method,
                        class: "flex items-center justify-between"
                      }, [
                        createBaseVNode("div", _hoisted_178, [
                          createBaseVNode("span", {
                            class: normalizeClass(["px-2 py-1 text-xs rounded border", unref(getMethodColorClass)(method.method)])
                          }, toDisplayString(method.method), 3)
                        ]),
                        createBaseVNode("span", _hoisted_179, toDisplayString(method.count), 1)
                      ]);
                    }), 128))
                  ])
                ])
              ])
            ])) : createCommentVNode("", true)
          ])
        ])
      ], 2);
    };
  }
});
const ThreatAnalysisPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fb44e771"]]);
export {
  ThreatAnalysisPage as default
};
