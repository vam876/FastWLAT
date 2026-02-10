import { d as defineComponent, u as useAppStore, m as ref, T as ThreatLevel, c as computed, h as onMounted, a as createElementBlock, e as createBaseVNode, g as createTextVNode, F as Fragment, r as renderList, n as normalizeClass, t as toDisplayString, E as withDirectives, H as vModelText, f as createCommentVNode, G as vModelCheckbox, R as vModelRadio, q as normalizeStyle, p as unref, o as openBlock, _ as _export_sfc } from "./index-FPjz1pj-.js";
import { u as useMemoryStore } from "./memoryStore-DY1yPL7M.js";
import { g as getLogData } from "./dataSourceUtils-IiewxtUB.js";
import { e as exportService } from "./exportService-Dg1pRR2c.js";
import "./indexedDBStore-vYrXL9Qh.js";
const _hoisted_1 = { class: "reports-page min-h-screen bg-gray-900 text-gray-100" };
const _hoisted_2 = { class: "container mx-auto px-6 py-8" };
const _hoisted_3 = { class: "grid grid-cols-1 xl:grid-cols-3 gap-8" };
const _hoisted_4 = { class: "xl:col-span-2 space-y-6" };
const _hoisted_5 = { class: "bg-gray-800 rounded-xl p-6 border border-gray-700" };
const _hoisted_6 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "flex items-start space-x-3" };
const _hoisted_9 = { class: "text-2xl" };
const _hoisted_10 = { class: "flex-1 min-w-0" };
const _hoisted_11 = { class: "font-medium text-gray-100 mb-1" };
const _hoisted_12 = { class: "text-sm text-gray-400 leading-relaxed" };
const _hoisted_13 = { class: "mt-2" };
const _hoisted_14 = { class: "text-xs text-gray-500" };
const _hoisted_15 = { class: "bg-gray-800 rounded-xl p-6 border border-gray-700" };
const _hoisted_16 = { class: "space-y-4" };
const _hoisted_17 = { class: "flex flex-wrap gap-2 mb-3" };
const _hoisted_18 = ["onClick"];
const _hoisted_19 = {
  key: 0,
  class: "grid grid-cols-2 gap-4"
};
const _hoisted_20 = { class: "flex flex-wrap gap-2" };
const _hoisted_21 = ["value"];
const _hoisted_22 = { class: "grid grid-cols-2 md:grid-cols-4 gap-3" };
const _hoisted_23 = ["onUpdate:modelValue", "value"];
const _hoisted_24 = { class: "flex-1 min-w-0" };
const _hoisted_25 = { class: "flex items-center space-x-1" };
const _hoisted_26 = { class: "text-sm font-medium" };
const _hoisted_27 = { class: "text-xs text-gray-400 mt-1" };
const _hoisted_28 = { class: "bg-gray-800 rounded-xl p-6 border border-gray-700" };
const _hoisted_29 = { class: "grid grid-cols-1 md:grid-cols-2 gap-3" };
const _hoisted_30 = ["checked", "onChange"];
const _hoisted_31 = { class: "flex-1 min-w-0" };
const _hoisted_32 = { class: "text-sm font-medium text-gray-100" };
const _hoisted_33 = { class: "text-xs text-gray-400 mt-1 leading-relaxed" };
const _hoisted_34 = { class: "bg-gray-800 rounded-xl p-6 border border-gray-700" };
const _hoisted_35 = { class: "flex items-center justify-between" };
const _hoisted_36 = { class: "text-sm text-gray-400" };
const _hoisted_37 = ["disabled"];
const _hoisted_38 = {
  key: 0,
  class: "animate-spin"
};
const _hoisted_39 = { key: 1 };
const _hoisted_40 = {
  key: 0,
  class: "mt-4"
};
const _hoisted_41 = { class: "flex items-center justify-between text-sm text-gray-400 mb-2" };
const _hoisted_42 = { class: "w-full bg-gray-700 rounded-full h-2" };
const _hoisted_43 = { class: "space-y-6" };
const _hoisted_44 = { class: "bg-gray-800 rounded-xl p-6 border border-gray-700" };
const _hoisted_45 = {
  key: 0,
  class: "text-center py-8"
};
const _hoisted_46 = {
  key: 1,
  class: "space-y-3"
};
const _hoisted_47 = { class: "flex items-start justify-between" };
const _hoisted_48 = { class: "flex-1 min-w-0" };
const _hoisted_49 = { class: "font-medium text-gray-100 truncate" };
const _hoisted_50 = { class: "text-sm text-gray-400 mt-1" };
const _hoisted_51 = { class: "flex items-center space-x-4 mt-2 text-xs text-gray-500" };
const _hoisted_52 = { class: "text-xs text-gray-500 mt-1" };
const _hoisted_53 = ["onClick"];
const _hoisted_54 = { class: "bg-gray-800 rounded-xl p-6 border border-gray-700" };
const _hoisted_55 = { class: "space-y-3" };
const _hoisted_56 = { class: "flex justify-between items-center" };
const _hoisted_57 = { class: "font-medium text-gray-100" };
const _hoisted_58 = { class: "flex justify-between items-center" };
const _hoisted_59 = { class: "font-medium text-gray-100" };
const _hoisted_60 = { class: "flex justify-between items-center" };
const _hoisted_61 = { class: "font-medium text-orange-400" };
const _hoisted_62 = { class: "flex justify-between items-center" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ReportsPage",
  setup(__props) {
    const appStore = useAppStore();
    useMemoryStore();
    const templates = ref([
      {
        id: "security-overview",
        name: "安全概览报告",
        description: "全面的安全状况分析，包含威胁统计和趋势分析",
        sections: ["executive-summary", "threat-analysis", "statistics", "recommendations"],
        icon: "🛡️"
      },
      {
        id: "threat-analysis",
        name: "威胁分析报告",
        description: "详细的威胁检测结果和攻击模式分析",
        sections: ["threat-details", "attack-vectors", "ip-analysis", "timeline"],
        icon: "⚠️"
      },
      {
        id: "compliance-audit",
        name: "合规审计报告",
        description: "符合安全标准的审计报告，适用于合规检查",
        sections: ["compliance-check", "policy-violations", "recommendations", "appendix"],
        icon: "📋"
      },
      {
        id: "incident-response",
        name: "事件响应报告",
        description: "安全事件的详细分析和处理建议",
        sections: ["incident-summary", "impact-analysis", "response-actions", "lessons-learned"],
        icon: "🚨"
      },
      {
        id: "performance-analysis",
        name: "性能分析报告",
        description: "系统性能和访问模式分析",
        sections: ["performance-metrics", "access-patterns", "resource-usage", "optimization"],
        icon: "📊"
      }
    ]);
    const availableSections = ref([
      { id: "executive-summary", name: "执行摘要", description: "报告的核心发现和建议" },
      { id: "threat-analysis", name: "威胁分析", description: "检测到的威胁详细分析" },
      { id: "statistics", name: "统计数据", description: "日志数据的统计分析" },
      { id: "charts", name: "图表分析", description: "可视化图表和趋势" },
      { id: "ip-analysis", name: "IP 分析", description: "访问者和攻击者 IP 分析" },
      { id: "timeline", name: "时间线", description: "事件时间线分析" },
      { id: "recommendations", name: "建议", description: "安全改进建议" },
      { id: "appendix", name: "附录", description: "详细数据和技术信息" },
      { id: "threat-details", name: "威胁详情", description: "威胁的详细信息" },
      { id: "attack-vectors", name: "攻击向量", description: "攻击方式分析" },
      { id: "compliance-check", name: "合规检查", description: "合规性检查结果" },
      { id: "policy-violations", name: "策略违规", description: "策略违规事件" },
      { id: "incident-summary", name: "事件摘要", description: "事件的基本信息" },
      { id: "impact-analysis", name: "影响分析", description: "事件对系统的影响" },
      { id: "response-actions", name: "响应措施", description: "采取的响应措施" },
      { id: "lessons-learned", name: "经验教训", description: "从事件中学到的经验" },
      { id: "performance-metrics", name: "性能指标", description: "系统性能数据" },
      { id: "access-patterns", name: "访问模式", description: "用户访问模式分析" },
      { id: "resource-usage", name: "资源使用", description: "系统资源使用情况" },
      { id: "optimization", name: "优化建议", description: "性能优化建议" }
    ]);
    const reportConfig = ref({
      template: "security-overview",
      title: "安全分析报告",
      description: "",
      dateRange: null,
      includeSections: [],
      format: "html",
      charts: true,
      threatLevel: [ThreatLevel.HIGH, ThreatLevel.CRITICAL]
    });
    const isGenerating = ref(false);
    const generationProgress = ref(0);
    const generatedReports = ref([]);
    const logData = ref([]);
    const selectedTemplate = computed(() => {
      return templates.value.find((t) => t.id === reportConfig.value.template);
    });
    const availableFormats = computed(() => [
      { value: "html", label: "HTML 网页", icon: "🌐", description: "适合在线查看和分享" },
      { value: "pdf", label: "PDF 文档", icon: "📄", description: "适合打印和存档" },
      { value: "json", label: "JSON 数据", icon: "💾", description: "适合程序处理" },
      { value: "csv", label: "CSV 表格", icon: "📊", description: "适合 Excel 分析" }
    ]);
    const threatLevelOptions = computed(() => [
      { value: ThreatLevel.LOW, label: "低威胁", color: "text-green-400" },
      { value: ThreatLevel.MEDIUM, label: "中威胁", color: "text-yellow-400" },
      { value: ThreatLevel.HIGH, label: "高威胁", color: "text-orange-400" },
      { value: ThreatLevel.CRITICAL, label: "严重威胁", color: "text-red-400" }
    ]);
    onMounted(async () => {
      await loadLogData();
      loadReportHistory();
      initializeDefaultConfig();
    });
    async function loadLogData() {
      try {
        logData.value = await getLogData();
      } catch (error) {
        console.error("Failed to load log data:", error);
      }
    }
    function loadReportHistory() {
      const saved = localStorage.getItem("fastWLAT_reportHistory");
      if (saved) {
        try {
          generatedReports.value = JSON.parse(saved);
        } catch (error) {
          console.error("Failed to load report history:", error);
        }
      }
    }
    function saveReportHistory() {
      try {
        localStorage.setItem("fastWLAT_reportHistory", JSON.stringify(generatedReports.value));
      } catch (error) {
        console.error("Failed to save report history:", error);
      }
    }
    function initializeDefaultConfig() {
      if (selectedTemplate.value) {
        reportConfig.value.includeSections = [...selectedTemplate.value.sections];
        reportConfig.value.description = selectedTemplate.value.description;
      }
    }
    function selectTemplate(templateId) {
      reportConfig.value.template = templateId;
      initializeDefaultConfig();
    }
    function toggleSection(sectionId) {
      const index = reportConfig.value.includeSections.indexOf(sectionId);
      if (index > -1) {
        reportConfig.value.includeSections.splice(index, 1);
      } else {
        reportConfig.value.includeSections.push(sectionId);
      }
    }
    function setQuickDateRange(range) {
      const now = /* @__PURE__ */ new Date();
      const start = /* @__PURE__ */ new Date();
      switch (range) {
        case "today":
          start.setHours(0, 0, 0, 0);
          break;
        case "yesterday":
          start.setDate(now.getDate() - 1);
          start.setHours(0, 0, 0, 0);
          now.setDate(now.getDate() - 1);
          now.setHours(23, 59, 59, 999);
          break;
        case "last7days":
          start.setDate(now.getDate() - 7);
          break;
        case "last30days":
          start.setDate(now.getDate() - 30);
          break;
        case "thisMonth":
          start.setDate(1);
          start.setHours(0, 0, 0, 0);
          break;
        default:
          reportConfig.value.dateRange = null;
          return;
      }
      reportConfig.value.dateRange = {
        start: start.toISOString().slice(0, 16),
        end: now.toISOString().slice(0, 16)
      };
    }
    async function generateReport() {
      if (!reportConfig.value.title.trim()) {
        alert("请输入报告标题");
        return;
      }
      if (reportConfig.value.includeSections.length === 0) {
        alert("请至少选择一个报告章节");
        return;
      }
      try {
        isGenerating.value = true;
        generationProgress.value = 0;
        const progressInterval = setInterval(() => {
          generationProgress.value += Math.random() * 15;
          if (generationProgress.value >= 95) {
            clearInterval(progressInterval);
          }
        }, 200);
        const filteredData = filterLogData(logData.value);
        const reportData = await generateReportData(filteredData);
        const exportResult = await exportService.exportReport(
          reportData,
          reportConfig.value.format,
          reportConfig.value.title
        );
        const reportRecord = {
          id: Date.now().toString(),
          title: reportConfig.value.title,
          template: selectedTemplate.value?.name || "未知模板",
          format: reportConfig.value.format,
          sections: reportConfig.value.includeSections.length,
          generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
          dataCount: filteredData.length,
          filePath: exportResult.filePath
        };
        generatedReports.value.unshift(reportRecord);
        saveReportHistory();
        clearInterval(progressInterval);
        generationProgress.value = 100;
        setTimeout(() => {
          alert(`报告生成成功！
文件已保存到：${exportResult.filePath}`);
          isGenerating.value = false;
          generationProgress.value = 0;
        }, 500);
      } catch (error) {
        console.error("报告生成失败:", error);
        alert("报告生成失败，请稍后重试");
        isGenerating.value = false;
        generationProgress.value = 0;
      }
    }
    function filterLogData(data) {
      let filtered = [...data];
      if (reportConfig.value.dateRange) {
        const startTime = new Date(reportConfig.value.dateRange.start).getTime();
        const endTime = new Date(reportConfig.value.dateRange.end).getTime();
        filtered = filtered.filter((entry) => {
          const entryTime = entry.timestamp.getTime();
          return entryTime >= startTime && entryTime <= endTime;
        });
      }
      if (reportConfig.value.threatLevel.length > 0) {
        filtered = filtered.filter(
          (entry) => reportConfig.value.threatLevel.includes(entry.threatLevel)
        );
      }
      return filtered;
    }
    async function generateReportData(data) {
      const reportData = {
        metadata: {
          title: reportConfig.value.title,
          description: reportConfig.value.description,
          template: selectedTemplate.value?.name,
          generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
          dataRange: reportConfig.value.dateRange,
          totalEntries: data.length,
          includedSections: reportConfig.value.includeSections
        },
        sections: {}
      };
      for (const sectionId of reportConfig.value.includeSections) {
        reportData.sections[sectionId] = await generateSectionData(sectionId, data);
      }
      return reportData;
    }
    async function generateSectionData(sectionId, data) {
      switch (sectionId) {
        case "executive-summary":
          return generateExecutiveSummary(data);
        case "threat-analysis":
          return generateThreatAnalysis(data);
        case "statistics":
          return generateStatistics(data);
        case "ip-analysis":
          return generateIPAnalysis(data);
        case "timeline":
          return generateTimeline(data);
        case "recommendations":
          return generateRecommendations(data);
        default:
          return {
            title: availableSections.value.find((s) => s.id === sectionId)?.name || sectionId,
            content: "此章节内容正在开发中..."
          };
      }
    }
    function generateExecutiveSummary(data) {
      const threatStats = data.reduce((acc, entry) => {
        acc[entry.threatLevel] = (acc[entry.threatLevel] || 0) + 1;
        return acc;
      }, {});
      const totalThreats = Object.values(threatStats).reduce((a, b) => a + b, 0);
      return {
        title: "执行摘要",
        summary: {
          totalRequests: data.length,
          threatDetections: totalThreats,
          timeRange: reportConfig.value.dateRange,
          criticalFindings: threatStats[ThreatLevel.CRITICAL] || 0,
          keyMetrics: {
            averageResponseSize: Math.round(data.reduce((sum, entry) => sum + (entry.responseSize || 0), 0) / data.length),
            uniqueIPs: new Set(data.map((entry) => entry.ip)).size,
            errorRate: Math.round(data.filter((entry) => entry.statusCode >= 400).length / data.length * 100)
          }
        }
      };
    }
    function generateThreatAnalysis(data) {
      const threats = data.filter((entry) => entry.threats && entry.threats.length > 0);
      const threatTypes = threats.reduce((acc, entry) => {
        entry.threats?.forEach((threat) => {
          acc[threat] = (acc[threat] || 0) + 1;
        });
        return acc;
      }, {});
      return {
        title: "威胁分析",
        totalThreats: threats.length,
        threatTypes,
        topThreats: Object.entries(threatTypes).sort(([, a], [, b]) => b - a).slice(0, 10),
        severityDistribution: data.reduce((acc, entry) => {
          acc[entry.threatLevel] = (acc[entry.threatLevel] || 0) + 1;
          return acc;
        }, {})
      };
    }
    function generateStatistics(data) {
      const statusCodes = data.reduce((acc, entry) => {
        acc[entry.statusCode] = (acc[entry.statusCode] || 0) + 1;
        return acc;
      }, {});
      const methods = data.reduce((acc, entry) => {
        acc[entry.method] = (acc[entry.method] || 0) + 1;
        return acc;
      }, {});
      return {
        title: "统计数据",
        statusCodeDistribution: statusCodes,
        methodDistribution: methods,
        hourlyDistribution: generateHourlyDistribution(data),
        topPaths: generateTopPaths(data, 20),
        topUserAgents: generateTopUserAgents(data, 10)
      };
    }
    function generateIPAnalysis(data) {
      const ipStats = data.reduce((acc, entry) => {
        if (!acc[entry.ip]) {
          acc[entry.ip] = {
            requests: 0,
            threats: 0,
            uniquePaths: /* @__PURE__ */ new Set(),
            lastSeen: entry.timestamp
          };
        }
        acc[entry.ip].requests++;
        if (entry.threats && entry.threats.length > 0) {
          acc[entry.ip].threats++;
        }
        acc[entry.ip].uniquePaths.add(entry.path);
        if (entry.timestamp > acc[entry.ip].lastSeen) {
          acc[entry.ip].lastSeen = entry.timestamp;
        }
        return acc;
      }, {});
      Object.values(ipStats).forEach((stat) => {
        stat.uniquePaths = stat.uniquePaths.size;
      });
      return {
        title: "IP 分析",
        totalUniqueIPs: Object.keys(ipStats).length,
        topIPs: Object.entries(ipStats).sort(([, a], [, b]) => b.requests - a.requests).slice(0, 20),
        threatIPs: Object.entries(ipStats).filter(([, stat]) => stat.threats > 0).sort(([, a], [, b]) => b.threats - a.threats).slice(0, 10)
      };
    }
    function generateTimeline(data) {
      const sortedData = [...data].sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
      return {
        title: "时间线分析",
        timeRange: {
          start: sortedData[0]?.timestamp,
          end: sortedData[sortedData.length - 1]?.timestamp
        },
        hourlyActivity: generateHourlyDistribution(data),
        significantEvents: data.filter((entry) => entry.threatLevel === ThreatLevel.CRITICAL || entry.threatLevel === ThreatLevel.HIGH).slice(0, 50).map((entry) => ({
          timestamp: entry.timestamp,
          type: entry.threatLevel,
          description: `${entry.method} ${entry.path} - ${entry.threats?.join(", ") || "未知威胁"}`,
          ip: entry.ip
        }))
      };
    }
    function generateRecommendations(data) {
      const recommendations = [];
      const errorRate = data.filter((entry) => entry.statusCode >= 400).length / data.length * 100;
      if (errorRate > 10) {
        recommendations.push({
          type: "高错误率",
          severity: "high",
          description: `检测到 ${errorRate.toFixed(1)}% 的错误率，建议检查应用程序和服务器配置`
        });
      }
      const threatCount = data.filter((entry) => entry.threats && entry.threats.length > 0).length;
      if (threatCount > 0) {
        recommendations.push({
          type: "安全威胁",
          severity: "critical",
          description: `检测到 ${threatCount} 个安全威胁，建议立即审查和加强安全措施`
        });
      }
      return {
        title: "改进建议",
        recommendations,
        nextSteps: [
          "定期监控和分析日志数据",
          "建立安全事件响应流程",
          "实施自动化威胁检测",
          "加强访问控制和身份验证"
        ]
      };
    }
    function generateHourlyDistribution(data) {
      const hourlyStats = new Array(24).fill(0);
      data.forEach((entry) => {
        const hour = entry.timestamp.getHours();
        hourlyStats[hour]++;
      });
      return hourlyStats;
    }
    function generateTopPaths(data, limit) {
      const pathStats = data.reduce((acc, entry) => {
        acc[entry.path] = (acc[entry.path] || 0) + 1;
        return acc;
      }, {});
      return Object.entries(pathStats).sort(([, a], [, b]) => b - a).slice(0, limit);
    }
    function generateTopUserAgents(data, limit) {
      const uaStats = data.reduce((acc, entry) => {
        const ua = entry.userAgent || "Unknown";
        acc[ua] = (acc[ua] || 0) + 1;
        return acc;
      }, {});
      return Object.entries(uaStats).sort(([, a], [, b]) => b - a).slice(0, limit);
    }
    function deleteReport(reportId) {
      const index = generatedReports.value.findIndex((r) => r.id === reportId);
      if (index > -1) {
        generatedReports.value.splice(index, 1);
        saveReportHistory();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[24] || (_cache[24] = createBaseVNode("div", { class: "mb-8" }, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-100 mb-2" }, "报告生成(开发中)"),
            createBaseVNode("p", { class: "text-gray-400" }, "生成详细的日志分析报告，支持多种格式导出")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                _cache[5] || (_cache[5] = createBaseVNode("h2", { class: "text-xl font-semibold mb-4 flex items-center" }, [
                  createBaseVNode("span", { class: "mr-2" }, "📋"),
                  createTextVNode(" 选择报告模板 ")
                ], -1)),
                createBaseVNode("div", _hoisted_6, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(templates.value, (template) => {
                    return openBlock(), createElementBlock("div", {
                      key: template.id,
                      class: normalizeClass([
                        "p-4 rounded-lg border-2 cursor-pointer transition-all duration-200",
                        reportConfig.value.template === template.id ? "border-blue-500 bg-blue-500/10" : "border-gray-600 hover:border-gray-500 hover:bg-gray-700/50"
                      ]),
                      onClick: ($event) => selectTemplate(template.id)
                    }, [
                      createBaseVNode("div", _hoisted_8, [
                        createBaseVNode("span", _hoisted_9, toDisplayString(template.icon), 1),
                        createBaseVNode("div", _hoisted_10, [
                          createBaseVNode("h3", _hoisted_11, toDisplayString(template.name), 1),
                          createBaseVNode("p", _hoisted_12, toDisplayString(template.description), 1),
                          createBaseVNode("div", _hoisted_13, [
                            createBaseVNode("span", _hoisted_14, toDisplayString(template.sections.length) + " 个章节", 1)
                          ])
                        ])
                      ])
                    ], 10, _hoisted_7);
                  }), 128))
                ])
              ]),
              createBaseVNode("div", _hoisted_15, [
                _cache[13] || (_cache[13] = createBaseVNode("h2", { class: "text-xl font-semibold mb-4 flex items-center" }, [
                  createBaseVNode("span", { class: "mr-2" }, "⚙️"),
                  createTextVNode(" 报告配置 ")
                ], -1)),
                createBaseVNode("div", _hoisted_16, [
                  createBaseVNode("div", null, [
                    _cache[6] || (_cache[6] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-300 mb-2" }, "报告标题", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => reportConfig.value.title = $event),
                      type: "text",
                      class: "w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                      placeholder: "输入报告标题..."
                    }, null, 512), [
                      [vModelText, reportConfig.value.title]
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    _cache[7] || (_cache[7] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-300 mb-2" }, "报告描述", -1)),
                    withDirectives(createBaseVNode("textarea", {
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => reportConfig.value.description = $event),
                      class: "w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                      rows: "3",
                      placeholder: "输入报告描述..."
                    }, null, 512), [
                      [vModelText, reportConfig.value.description]
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    _cache[10] || (_cache[10] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-300 mb-2" }, "时间范围", -1)),
                    createBaseVNode("div", _hoisted_17, [
                      (openBlock(), createElementBlock(Fragment, null, renderList([
                        { value: "all", label: "全部数据" },
                        { value: "today", label: "今天" },
                        { value: "yesterday", label: "昨天" },
                        { value: "last7days", label: "最近7天" },
                        { value: "last30days", label: "最近30天" },
                        { value: "thisMonth", label: "本月" }
                      ], (range) => {
                        return createBaseVNode("button", {
                          key: range.value,
                          class: normalizeClass([
                            "px-3 py-1 text-sm rounded-md transition-colors",
                            !reportConfig.value.dateRange && range.value === "all" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                          ]),
                          onClick: ($event) => setQuickDateRange(range.value)
                        }, toDisplayString(range.label), 11, _hoisted_18);
                      }), 64))
                    ]),
                    reportConfig.value.dateRange ? (openBlock(), createElementBlock("div", _hoisted_19, [
                      createBaseVNode("div", null, [
                        _cache[8] || (_cache[8] = createBaseVNode("label", { class: "block text-xs text-gray-400 mb-1" }, "开始时间", -1)),
                        withDirectives(createBaseVNode("input", {
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => reportConfig.value.dateRange.start = $event),
                          type: "datetime-local",
                          class: "w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 text-sm"
                        }, null, 512), [
                          [vModelText, reportConfig.value.dateRange.start]
                        ])
                      ]),
                      createBaseVNode("div", null, [
                        _cache[9] || (_cache[9] = createBaseVNode("label", { class: "block text-xs text-gray-400 mb-1" }, "结束时间", -1)),
                        withDirectives(createBaseVNode("input", {
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => reportConfig.value.dateRange.end = $event),
                          type: "datetime-local",
                          class: "w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 text-sm"
                        }, null, 512), [
                          [vModelText, reportConfig.value.dateRange.end]
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", null, [
                    _cache[11] || (_cache[11] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-300 mb-2" }, "包含威胁等级", -1)),
                    createBaseVNode("div", _hoisted_20, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(threatLevelOptions.value, (option) => {
                        return openBlock(), createElementBlock("label", {
                          key: option.value,
                          class: "flex items-center space-x-2 cursor-pointer"
                        }, [
                          withDirectives(createBaseVNode("input", {
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => reportConfig.value.threatLevel = $event),
                            value: option.value,
                            type: "checkbox",
                            class: "rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                          }, null, 8, _hoisted_21), [
                            [vModelCheckbox, reportConfig.value.threatLevel]
                          ]),
                          createBaseVNode("span", {
                            class: normalizeClass(["text-sm", option.color])
                          }, toDisplayString(option.label), 3)
                        ]);
                      }), 128))
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    _cache[12] || (_cache[12] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-300 mb-2" }, "导出格式", -1)),
                    createBaseVNode("div", _hoisted_22, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(availableFormats.value, (format) => {
                        return openBlock(), createElementBlock("label", {
                          key: format.value,
                          class: normalizeClass([
                            "flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-all",
                            reportConfig.value.format === format.value ? "border-blue-500 bg-blue-500/10" : "border-gray-600 hover:border-gray-500"
                          ])
                        }, [
                          withDirectives(createBaseVNode("input", {
                            "onUpdate:modelValue": ($event) => reportConfig.value.format = $event,
                            value: format.value,
                            type: "radio",
                            class: "text-blue-600 focus:ring-blue-500"
                          }, null, 8, _hoisted_23), [
                            [vModelRadio, reportConfig.value.format]
                          ]),
                          createBaseVNode("div", _hoisted_24, [
                            createBaseVNode("div", _hoisted_25, [
                              createBaseVNode("span", null, toDisplayString(format.icon), 1),
                              createBaseVNode("span", _hoisted_26, toDisplayString(format.label), 1)
                            ]),
                            createBaseVNode("p", _hoisted_27, toDisplayString(format.description), 1)
                          ])
                        ], 2);
                      }), 128))
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_28, [
                _cache[14] || (_cache[14] = createBaseVNode("h2", { class: "text-xl font-semibold mb-4 flex items-center" }, [
                  createBaseVNode("span", { class: "mr-2" }, "📑"),
                  createTextVNode(" 选择报告章节 ")
                ], -1)),
                createBaseVNode("div", _hoisted_29, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(availableSections.value, (section) => {
                    return openBlock(), createElementBlock("label", {
                      key: section.id,
                      class: normalizeClass([
                        "flex items-start space-x-3 p-3 rounded-lg border cursor-pointer transition-all",
                        reportConfig.value.includeSections.includes(section.id) ? "border-blue-500 bg-blue-500/10" : "border-gray-600 hover:border-gray-500"
                      ])
                    }, [
                      createBaseVNode("input", {
                        checked: reportConfig.value.includeSections.includes(section.id),
                        type: "checkbox",
                        class: "mt-1 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500",
                        onChange: ($event) => toggleSection(section.id)
                      }, null, 40, _hoisted_30),
                      createBaseVNode("div", _hoisted_31, [
                        createBaseVNode("h3", _hoisted_32, toDisplayString(section.name), 1),
                        createBaseVNode("p", _hoisted_33, toDisplayString(section.description), 1)
                      ])
                    ], 2);
                  }), 128))
                ])
              ]),
              createBaseVNode("div", _hoisted_34, [
                createBaseVNode("div", _hoisted_35, [
                  createBaseVNode("div", null, [
                    _cache[15] || (_cache[15] = createBaseVNode("h3", { class: "text-lg font-medium text-gray-100 mb-1" }, "生成报告", -1)),
                    createBaseVNode("p", _hoisted_36, " 将基于 " + toDisplayString(logData.value.length) + " 条日志记录生成报告 ", 1)
                  ]),
                  createBaseVNode("button", {
                    disabled: isGenerating.value,
                    class: normalizeClass([
                      "px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2",
                      isGenerating.value ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
                    ]),
                    onClick: generateReport
                  }, [
                    isGenerating.value ? (openBlock(), createElementBlock("span", _hoisted_38, "⏳")) : (openBlock(), createElementBlock("span", _hoisted_39, "🚀")),
                    createBaseVNode("span", null, toDisplayString(isGenerating.value ? "生成中..." : "生成报告"), 1)
                  ], 10, _hoisted_37)
                ]),
                isGenerating.value ? (openBlock(), createElementBlock("div", _hoisted_40, [
                  createBaseVNode("div", _hoisted_41, [
                    _cache[16] || (_cache[16] = createBaseVNode("span", null, "生成进度", -1)),
                    createBaseVNode("span", null, toDisplayString(Math.round(generationProgress.value)) + "%", 1)
                  ]),
                  createBaseVNode("div", _hoisted_42, [
                    createBaseVNode("div", {
                      class: "bg-blue-600 h-2 rounded-full transition-all duration-300",
                      style: normalizeStyle({ width: `${generationProgress.value}%` })
                    }, null, 4)
                  ])
                ])) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_43, [
              createBaseVNode("div", _hoisted_44, [
                _cache[18] || (_cache[18] = createBaseVNode("h2", { class: "text-xl font-semibold mb-4 flex items-center" }, [
                  createBaseVNode("span", { class: "mr-2" }, "📚"),
                  createTextVNode(" 报告历史 ")
                ], -1)),
                generatedReports.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_45, _cache[17] || (_cache[17] = [
                  createBaseVNode("div", { class: "text-4xl mb-4" }, "📄", -1),
                  createBaseVNode("p", { class: "text-gray-400" }, "暂无生成的报告", -1)
                ]))) : (openBlock(), createElementBlock("div", _hoisted_46, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(generatedReports.value.slice(0, 10), (report) => {
                    return openBlock(), createElementBlock("div", {
                      key: report.id,
                      class: "bg-gray-700 rounded-lg p-4 border border-gray-600"
                    }, [
                      createBaseVNode("div", _hoisted_47, [
                        createBaseVNode("div", _hoisted_48, [
                          createBaseVNode("h3", _hoisted_49, toDisplayString(report.title), 1),
                          createBaseVNode("p", _hoisted_50, toDisplayString(report.template), 1),
                          createBaseVNode("div", _hoisted_51, [
                            createBaseVNode("span", null, toDisplayString(report.sections) + " 个章节", 1),
                            createBaseVNode("span", null, toDisplayString(report.format.toUpperCase()), 1),
                            createBaseVNode("span", null, toDisplayString(report.dataCount) + " 条记录", 1)
                          ]),
                          createBaseVNode("p", _hoisted_52, toDisplayString(new Date(report.generatedAt).toLocaleString("zh-CN")), 1)
                        ]),
                        createBaseVNode("button", {
                          class: "text-red-400 hover:text-red-300 ml-2",
                          onClick: ($event) => deleteReport(report.id)
                        }, " 🗑️ ", 8, _hoisted_53)
                      ])
                    ]);
                  }), 128))
                ]))
              ]),
              createBaseVNode("div", _hoisted_54, [
                _cache[23] || (_cache[23] = createBaseVNode("h2", { class: "text-xl font-semibold mb-4 flex items-center" }, [
                  createBaseVNode("span", { class: "mr-2" }, "📊"),
                  createTextVNode(" 数据概览 ")
                ], -1)),
                createBaseVNode("div", _hoisted_55, [
                  createBaseVNode("div", _hoisted_56, [
                    _cache[19] || (_cache[19] = createBaseVNode("span", { class: "text-gray-400" }, "总日志条数", -1)),
                    createBaseVNode("span", _hoisted_57, toDisplayString(logData.value.length.toLocaleString()), 1)
                  ]),
                  createBaseVNode("div", _hoisted_58, [
                    _cache[20] || (_cache[20] = createBaseVNode("span", { class: "text-gray-400" }, "唯一 IP 数", -1)),
                    createBaseVNode("span", _hoisted_59, toDisplayString(new Set(logData.value.map((entry) => entry.ip)).size.toLocaleString()), 1)
                  ]),
                  createBaseVNode("div", _hoisted_60, [
                    _cache[21] || (_cache[21] = createBaseVNode("span", { class: "text-gray-400" }, "威胁检测数", -1)),
                    createBaseVNode("span", _hoisted_61, toDisplayString(logData.value.filter((entry) => entry.threats && entry.threats.length > 0).length), 1)
                  ]),
                  createBaseVNode("div", _hoisted_62, [
                    _cache[22] || (_cache[22] = createBaseVNode("span", { class: "text-gray-400" }, "数据模式", -1)),
                    createBaseVNode("span", {
                      class: normalizeClass([
                        "font-medium",
                        unref(appStore).dataMode === "indexedDB" ? "text-green-400" : "text-blue-400"
                      ])
                    }, toDisplayString(unref(appStore).dataMode === "indexedDB" ? "IndexedDB" : "本地内存"), 3)
                  ])
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
const ReportsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-43083e90"]]);
export {
  ReportsPage as default
};
