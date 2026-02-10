import { d as defineComponent, l as useThemeStore, m as ref, C as reactive, T as ThreatLevel, c as computed, h as onMounted, N as rulesRepo, j as createBlock, w as withCtx, e as createBaseVNode, a as createElementBlock, f as createCommentVNode, n as normalizeClass, g as createTextVNode, t as toDisplayString, p as unref, E as withDirectives, H as vModelText, I as vModelSelect, r as renderList, F as Fragment, G as vModelCheckbox, v as withModifiers, o as openBlock } from "./index-FPjz1pj-.js";
import { _ as _sfc_main$1 } from "./ThemeContainer.vue_vue_type_script_setup_true_lang-CmUDCaT3.js";
const _hoisted_1 = { class: "flex items-center justify-between" };
const _hoisted_2 = { class: "flex items-center gap-3" };
const _hoisted_3 = {
  key: 0,
  class: "p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
};
const _hoisted_4 = { class: "flex items-center gap-2" };
const _hoisted_5 = {
  key: 1,
  class: "p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400"
};
const _hoisted_6 = {
  key: 2,
  class: "p-6 bg-purple-500/10 border border-purple-500/20 rounded-xl"
};
const _hoisted_7 = { class: "space-y-4" };
const _hoisted_8 = { class: "flex gap-3" };
const _hoisted_9 = { class: "flex items-center gap-2 mb-2" };
const _hoisted_10 = { class: "font-medium" };
const _hoisted_11 = { class: "text-sm" };
const _hoisted_12 = {
  key: 0,
  class: "mt-2 text-xs opacity-75"
};
const _hoisted_13 = { class: "grid grid-cols-1 lg:grid-cols-4 gap-4" };
const _hoisted_14 = ["value"];
const _hoisted_15 = { class: "space-y-2" };
const _hoisted_16 = { class: "flex items-center gap-2 text-white cursor-pointer" };
const _hoisted_17 = {
  key: 3,
  class: "flex items-center justify-between p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg"
};
const _hoisted_18 = { class: "text-blue-400" };
const _hoisted_19 = { class: "flex items-center gap-3" };
const _hoisted_20 = ["disabled"];
const _hoisted_21 = { class: "space-y-4" };
const _hoisted_22 = { class: "flex items-center gap-2" };
const _hoisted_23 = ["checked"];
const _hoisted_24 = { class: "text-gray-400 text-sm" };
const _hoisted_25 = {
  key: 0,
  class: "text-center py-12"
};
const _hoisted_26 = {
  key: 1,
  class: "text-center py-12"
};
const _hoisted_27 = {
  key: 2,
  class: "space-y-4"
};
const _hoisted_28 = { class: "flex items-start gap-4" };
const _hoisted_29 = ["checked", "onChange"];
const _hoisted_30 = { class: "flex-1 min-w-0" };
const _hoisted_31 = { class: "flex items-center gap-3 mb-2" };
const _hoisted_32 = { class: "text-lg font-semibold text-white" };
const _hoisted_33 = { class: "px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs" };
const _hoisted_34 = { class: "text-gray-300 mb-3" };
const _hoisted_35 = { class: "bg-gray-800 p-3 rounded-lg mb-3" };
const _hoisted_36 = { class: "text-green-400 text-sm" };
const _hoisted_37 = { class: "flex items-center gap-4 text-sm" };
const _hoisted_38 = { class: "text-gray-400" };
const _hoisted_39 = { class: "text-gray-400" };
const _hoisted_40 = { class: "text-white" };
const _hoisted_41 = {
  key: 0,
  class: "text-gray-400"
};
const _hoisted_42 = { class: "text-green-400" };
const _hoisted_43 = {
  key: 1,
  class: "flex items-center gap-1"
};
const _hoisted_44 = { class: "flex items-center gap-2" };
const _hoisted_45 = { class: "flex items-center gap-2" };
const _hoisted_46 = ["checked", "onChange"];
const _hoisted_47 = ["onClick"];
const _hoisted_48 = ["onClick"];
const _hoisted_49 = {
  key: 4,
  class: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
};
const _hoisted_50 = { class: "p-6" };
const _hoisted_51 = { class: "flex items-center justify-between mb-6" };
const _hoisted_52 = { class: "text-xl font-bold text-white" };
const _hoisted_53 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" };
const _hoisted_54 = ["value"];
const _hoisted_55 = { class: "grid grid-cols-1 md:grid-cols-3 gap-4" };
const _hoisted_56 = { class: "flex flex-wrap gap-2 mb-2" };
const _hoisted_57 = ["onClick"];
const _hoisted_58 = { class: "flex flex-wrap gap-2" };
const _hoisted_59 = ["onClick"];
const _hoisted_60 = { class: "border-t border-white/10 pt-4" };
const _hoisted_61 = { class: "flex flex-wrap gap-2" };
const _hoisted_62 = ["value"];
const _hoisted_63 = { class: "text-sm" };
const _hoisted_64 = ["value"];
const _hoisted_65 = ["value"];
const _hoisted_66 = ["value"];
const _hoisted_67 = { class: "flex items-center gap-3" };
const _hoisted_68 = { class: "flex items-center gap-1 text-white cursor-pointer" };
const _hoisted_69 = ["checked"];
const _hoisted_70 = {
  key: 0,
  class: "flex items-center gap-2"
};
const _hoisted_71 = { class: "flex items-center gap-2" };
const _hoisted_72 = { class: "flex items-center gap-3 pt-4 border-t border-white/10" };
const _hoisted_73 = ["disabled"];
const _hoisted_74 = {
  key: 0,
  class: "pi pi-spin pi-spinner mr-2"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RulesPage",
  setup(__props) {
    const themeStore = useThemeStore();
    const loading = ref(true);
    const error = ref(null);
    const saving = ref(false);
    const rules = ref([]);
    const selectedRules = ref(/* @__PURE__ */ new Set());
    const searchQuery = ref("");
    const selectedCategory = ref("all");
    const selectedSeverity = ref("all");
    const showActiveOnly = ref(false);
    const showForm = ref(false);
    const editingRule = ref(null);
    const testMode = ref(false);
    const form = reactive({
      name: "",
      pattern: "",
      description: "",
      severity: ThreatLevel.MEDIUM,
      category: "web",
      priority: 50,
      enabled: true,
      contributor: "",
      // 规则贡献用户
      tags: [],
      conditions: {
        methods: [],
        statusCodes: [],
        ipWhitelist: [],
        ipBlacklist: [],
        timeRange: null
      }
    });
    const testInput = ref("");
    const testResult = ref(null);
    const bulkAction = ref(null);
    const fileInputRef = ref();
    const importing = ref(false);
    const showAdvancedConditions = ref(false);
    const httpMethods = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"];
    const categories = [
      { value: "web", label: "Web 攻击", icon: "pi-globe", color: "text-blue-400" },
      { value: "sql", label: "SQL 注入", icon: "pi-database", color: "text-red-400" },
      { value: "xss", label: "XSS 攻击", icon: "pi-code", color: "text-orange-400" },
      { value: "auth", label: "认证安全", icon: "pi-shield", color: "text-green-400" },
      { value: "path", label: "路径遍历", icon: "pi-folder", color: "text-purple-400" },
      { value: "bot", label: "机器人检测", icon: "pi-android", color: "text-yellow-400" },
      { value: "ddos", label: "DDoS 防护", icon: "pi-exclamation-triangle", color: "text-red-500" },
      { value: "custom", label: "自定义规则", icon: "pi-cog", color: "text-gray-400" }
    ];
    const availableTags = [
      "OWASP Top 10",
      "High Risk",
      "Performance Impact",
      "False Positive Risk",
      "Manual Review",
      "Auto Block",
      "Log Only",
      "Critical Infrastructure"
    ];
    const filteredRules = computed(() => {
      let filtered = rules.value;
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(
          (rule) => rule.name.toLowerCase().includes(query) || rule.description.toLowerCase().includes(query) || rule.pattern.toLowerCase().includes(query)
        );
      }
      if (selectedCategory.value !== "all") {
        filtered = filtered.filter((rule) => rule.category === selectedCategory.value);
      }
      if (selectedSeverity.value !== "all") {
        filtered = filtered.filter((rule) => rule.severity === selectedSeverity.value);
      }
      if (showActiveOnly.value) {
        filtered = filtered.filter((rule) => rule.enabled);
      }
      return filtered.sort((a, b) => b.priority - a.priority);
    });
    const selectedCount = computed(() => selectedRules.value.size);
    const categoryStats = computed(() => {
      const stats = {};
      categories.forEach((cat) => {
        stats[cat.value] = rules.value.filter((rule) => rule.category === cat.value).length;
      });
      return stats;
    });
    onMounted(async () => {
      await loadRules();
    });
    async function loadRules() {
      loading.value = true;
      error.value = null;
      try {
        rules.value = await rulesRepo.getAllRules();
      } catch (err) {
        console.error("Failed to load rules:", err);
        error.value = err.message || "加载规则失败";
      } finally {
        loading.value = false;
      }
    }
    async function resetRules() {
      if (!confirm("确定要重置为默认规则吗？这将删除所有自定义规则。")) {
        return;
      }
      loading.value = true;
      try {
        await rulesRepo.resetToDefaults();
        await loadRules();
        console.log("Rules reset successfully");
      } catch (err) {
        console.error("Failed to reset rules:", err);
        error.value = err.message || "重置规则失败";
      } finally {
        loading.value = false;
      }
    }
    function openCreateForm() {
      editingRule.value = null;
      resetForm();
      showForm.value = true;
    }
    function openEditForm(rule) {
      editingRule.value = rule;
      populateForm(rule);
      showForm.value = true;
    }
    function resetForm() {
      Object.assign(form, {
        name: "",
        pattern: "",
        description: "",
        severity: ThreatLevel.MEDIUM,
        category: "web",
        priority: 50,
        enabled: true,
        contributor: "",
        tags: [],
        conditions: {
          methods: [],
          statusCodes: [200],
          // 默认只在200状态码时告警
          ipWhitelist: [],
          ipBlacklist: [],
          timeRange: null
        }
      });
    }
    function populateForm(rule) {
      form.contributor = rule.contributor || "";
      Object.assign(form, {
        name: rule.name,
        pattern: rule.pattern,
        description: rule.description,
        severity: rule.severity,
        category: rule.category || "web",
        priority: rule.priority || 50,
        enabled: rule.enabled,
        tags: rule.tags || [],
        conditions: rule.conditions ? {
          methods: [...rule.conditions.methods || []],
          statusCodes: [...rule.conditions.statusCodes || [200]],
          // 默认200状态码
          ipWhitelist: [...rule.conditions.ipWhitelist || []],
          ipBlacklist: [...rule.conditions.ipBlacklist || []],
          timeRange: rule.conditions.timeRange ? { ...rule.conditions.timeRange } : null
        } : {
          methods: [],
          statusCodes: [200],
          // 默认200状态码
          ipWhitelist: [],
          ipBlacklist: [],
          timeRange: null
        }
      });
    }
    async function saveRule() {
      if (!form.name.trim() || !form.pattern.trim()) {
        error.value = "规则名称和模式不能为空";
        return;
      }
      saving.value = true;
      error.value = null;
      try {
        const ruleData = {
          name: form.name.trim(),
          pattern: form.pattern.trim(),
          description: form.description.trim(),
          severity: form.severity,
          category: form.category,
          priority: form.priority,
          enabled: form.enabled,
          action: "log",
          contributor: form.contributor.trim() || void 0,
          tags: [...form.tags],
          conditions: {
            methods: [...form.conditions.methods || []],
            statusCodes: [...form.conditions.statusCodes || []],
            ipWhitelist: [...form.conditions.ipWhitelist || []],
            ipBlacklist: [...form.conditions.ipBlacklist || []],
            timeRange: form.conditions.timeRange ? { ...form.conditions.timeRange } : null
          }
        };
        if (editingRule.value) {
          await rulesRepo.updateRule(editingRule.value.id, ruleData);
        } else {
          await rulesRepo.createRule(ruleData);
        }
        await loadRules();
        showForm.value = false;
        resetForm();
      } catch (err) {
        console.error("Failed to save rule:", err);
        error.value = err.message || "保存规则失败";
      } finally {
        saving.value = false;
      }
    }
    async function deleteRule(rule) {
      if (!confirm(`确定要删除规则 "${rule.name}" 吗？`)) return;
      try {
        await rulesRepo.deleteRule(rule.id);
        await loadRules();
      } catch (err) {
        console.error("Failed to delete rule:", err);
        error.value = err.message || "删除规则失败";
      }
    }
    async function toggleRule(rule) {
      try {
        await rulesRepo.updateRule(rule.id, { enabled: !rule.enabled });
        await loadRules();
      } catch (err) {
        console.error("Failed to toggle rule:", err);
        error.value = err.message || "切换规则状态失败";
      }
    }
    function selectRule(ruleId, selected) {
      if (selected) {
        selectedRules.value.add(ruleId);
      } else {
        selectedRules.value.delete(ruleId);
      }
    }
    function selectAllRules(selected) {
      if (selected) {
        filteredRules.value.forEach((rule) => selectedRules.value.add(rule.id));
      } else {
        selectedRules.value.clear();
      }
    }
    async function executeBulkAction() {
      if (!bulkAction.value || selectedRules.value.size === 0) return;
      const selectedIds = Array.from(selectedRules.value);
      try {
        switch (bulkAction.value) {
          case "enable":
            for (const id of selectedIds) {
              await rulesRepo.updateRule(id, { enabled: true });
            }
            break;
          case "disable":
            for (const id of selectedIds) {
              await rulesRepo.updateRule(id, { enabled: false });
            }
            break;
          case "delete":
            if (confirm(`确定要删除选中的 ${selectedIds.length} 条规则吗？`)) {
              for (const id of selectedIds) {
                await rulesRepo.deleteRule(id);
              }
            }
            break;
          case "export":
            await exportSelectedRules(selectedIds);
            break;
        }
        await loadRules();
        selectedRules.value.clear();
        bulkAction.value = null;
      } catch (err) {
        console.error("Bulk action failed:", err);
        error.value = err.message || "批量操作失败";
      }
    }
    async function exportSelectedRules(ruleIds) {
      try {
        const rulesToExport = rules.value.filter((rule) => ruleIds.includes(rule.id));
        if (rulesToExport.length === 0) {
          alert("请选择要导出的规则");
          return;
        }
        const exportData = {
          exportDate: (/* @__PURE__ */ new Date()).toISOString(),
          exportType: "selected_rules",
          totalRules: rulesToExport.length,
          rules: rulesToExport.map((rule) => ({
            ...rule,
            // 移除内部ID，避免导入时冲突
            id: void 0,
            createdAt: void 0,
            updatedAt: void 0,
            matchCount: void 0,
            lastMatchedAt: void 0
          }))
        };
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `threat-rules-selected-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        alert(`成功导出 ${rulesToExport.length} 条规则`);
      } catch (error2) {
        console.error("导出失败:", error2);
        alert("导出失败: " + (error2 instanceof Error ? error2.message : String(error2)));
      }
    }
    async function exportAllRules() {
      try {
        if (rules.value.length === 0) {
          alert("当前没有规则可以导出");
          return;
        }
        const exportData = {
          exportDate: (/* @__PURE__ */ new Date()).toISOString(),
          exportType: "all_rules",
          totalRules: rules.value.length,
          version: "1.0",
          description: "FastWLAT 威胁检测规则导出文件",
          rules: rules.value.map((rule) => ({
            ...rule,
            // 移除内部ID，避免导入时冲突
            id: void 0,
            createdAt: void 0,
            updatedAt: void 0,
            matchCount: void 0,
            lastMatchedAt: void 0
          }))
        };
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `threat-rules-all-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        alert(`成功导出所有 ${rules.value.length} 条规则`);
      } catch (error2) {
        console.error("导出失败:", error2);
        alert("导出失败: " + (error2 instanceof Error ? error2.message : String(error2)));
      }
    }
    function openImportDialog() {
      fileInputRef.value?.click();
    }
    async function importRules(event) {
      const input = event.target;
      const file = input.files?.[0];
      if (!file) return;
      if (!file.name.endsWith(".json")) {
        alert("请选择JSON格式的文件");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("文件大小不能超过5MB");
        return;
      }
      importing.value = true;
      error.value = null;
      try {
        const text = await file.text();
        const importData = JSON.parse(text);
        if (!importData.rules || !Array.isArray(importData.rules)) {
          throw new Error("无效的规则文件格式：缺少rules数组");
        }
        if (importData.rules.length === 0) {
          throw new Error("规则文件为空");
        }
        const confirmed = confirm(`准备导入 ${importData.rules.length} 条规则

文件信息：
- 导出时间：${importData.exportDate || "未知"}
- 导出类型：${importData.exportType || "未知"}
- 规则数量：${importData.rules.length}

是否继续导入？`);
        if (!confirmed) {
          importing.value = false;
          return;
        }
        let importCount = 0;
        let skipCount = 0;
        let errorCount = 0;
        const errors = [];
        for (const ruleData of importData.rules) {
          try {
            if (!ruleData.name || !ruleData.pattern) {
              console.warn("跳过无效规则:", ruleData);
              skipCount++;
              continue;
            }
            try {
              new RegExp(ruleData.pattern);
            } catch (regexError) {
              console.warn("跳过无效正则表达式:", ruleData.pattern);
              errors.push(`规则"${ruleData.name}"的正则表达式无效: ${ruleData.pattern}`);
              skipCount++;
              continue;
            }
            const existingRule = rules.value.find((r) => r.name === ruleData.name);
            if (existingRule) {
              console.warn("跳过重复规则:", ruleData.name);
              skipCount++;
              continue;
            }
            const newRule = {
              name: ruleData.name,
              pattern: ruleData.pattern,
              description: ruleData.description || "",
              severity: ruleData.severity || ThreatLevel.MEDIUM,
              category: ruleData.category || "custom",
              priority: ruleData.priority || 50,
              enabled: ruleData.enabled !== false,
              action: "log",
              tags: [...ruleData.tags || []],
              conditions: {
                methods: [...ruleData.conditions?.methods || []],
                statusCodes: [...ruleData.conditions?.statusCodes || []],
                ipWhitelist: [...ruleData.conditions?.ipWhitelist || []],
                ipBlacklist: [...ruleData.conditions?.ipBlacklist || []],
                excludePaths: [...ruleData.conditions?.excludePaths || []],
                includePaths: [...ruleData.conditions?.includePaths || []],
                timeRange: ruleData.conditions?.timeRange ? { ...ruleData.conditions.timeRange } : null
              }
            };
            await rulesRepo.createRule(newRule);
            importCount++;
          } catch (err) {
            console.error("导入规则失败:", ruleData, err);
            errorCount++;
            errors.push(`规则"${ruleData.name || "未知"}"导入失败: ${err instanceof Error ? err.message : String(err)}`);
          }
        }
        await loadRules();
        let resultMessage = `导入完成！

`;
        resultMessage += `✅ 成功导入: ${importCount} 条规则
`;
        if (skipCount > 0) resultMessage += `⚠️ 跳过: ${skipCount} 条规则
`;
        if (errorCount > 0) resultMessage += `❌ 失败: ${errorCount} 条规则
`;
        if (errors.length > 0) {
          resultMessage += `
错误详情:
${errors.slice(0, 5).join("\n")}`;
          if (errors.length > 5) {
            resultMessage += `
... 还有 ${errors.length - 5} 个错误`;
          }
        }
        alert(resultMessage);
      } catch (err) {
        console.error("导入失败:", err);
        error.value = err.message || "导入规则失败";
        alert("导入失败: " + err.message);
      } finally {
        importing.value = false;
        if (input) {
          input.value = "";
        }
      }
    }
    function testRule() {
      if (!testInput.value.trim()) {
        testResult.value = { matched: false, details: "请输入测试数据" };
        return;
      }
      const testData = testInput.value.trim();
      for (const rule of rules.value.filter((r) => r.enabled)) {
        try {
          const regex = new RegExp(rule.pattern, "i");
          if (regex.test(testData)) {
            testResult.value = {
              matched: true,
              rule,
              details: `匹配规则: ${rule.name} (${rule.severity})`
            };
            return;
          }
        } catch (err) {
          console.warn(`Invalid regex pattern in rule ${rule.name}:`, err);
        }
      }
      testResult.value = { matched: false, details: "未匹配任何规则" };
    }
    function addTag(tag) {
      if (!form.tags.includes(tag)) {
        form.tags.push(tag);
      }
    }
    function removeTag(tag) {
      const index = form.tags.indexOf(tag);
      if (index > -1) {
        form.tags.splice(index, 1);
      }
    }
    function getCategoryInfo(category) {
      return categories.find((cat) => cat.value === category) || categories[0];
    }
    function updateStatusCodes(event) {
      const value = event.target.value;
      if (!form.conditions) {
        form.conditions = { methods: [], statusCodes: [], ipWhitelist: [], ipBlacklist: [], timeRange: null };
      }
      form.conditions.statusCodes = value.split(",").map((code) => parseInt(code.trim(), 10)).filter((code) => !isNaN(code));
    }
    function updateIpList(event, type) {
      const value = event.target.value;
      if (!form.conditions) {
        form.conditions = { methods: [], statusCodes: [], ipWhitelist: [], ipBlacklist: [], timeRange: null };
      }
      form.conditions[type] = value.split("\n").map((ip) => ip.trim()).filter((ip) => ip.length > 0);
    }
    function toggleTimeRange(event) {
      if (event.target.checked) {
        form.conditions.timeRange = { start: "00:00", end: "23:59" };
      } else {
        form.conditions.timeRange = null;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        type: "page",
        class: "space-y-6"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _cache[33] || (_cache[33] = createBaseVNode("div", null, [
              createBaseVNode("h1", { class: "text-2xl font-bold text-white mb-2" }, "威胁检测规则"),
              createBaseVNode("p", { class: "text-gray-400" }, "管理和配置安全威胁检测规则")
            ], -1)),
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => testMode.value = !testMode.value),
                class: normalizeClass([
                  "px-4 py-2 rounded-lg transition-colors",
                  testMode.value ? "bg-purple-500 text-white" : "bg-white/10 text-white hover:bg-white/20"
                ])
              }, [
                _cache[28] || (_cache[28] = createBaseVNode("i", { class: "pi pi-search mr-2" }, null, -1)),
                createTextVNode(" " + toDisplayString(testMode.value ? "退出测试" : "规则测试"), 1)
              ], 2),
              createBaseVNode("div", { class: "flex items-center gap-2" }, [
                createBaseVNode("button", {
                  onClick: exportAllRules,
                  class: "px-4 py-2 text-white rounded-lg transition-colors bg-green-500/20 hover:bg-green-500/30 border border-green-500/50",
                  title: "导出所有规则为JSON文件"
                }, _cache[29] || (_cache[29] = [
                  createBaseVNode("i", { class: "pi pi-download mr-2" }, null, -1),
                  createTextVNode(" 导出全部 ")
                ])),
                createBaseVNode("button", {
                  onClick: openImportDialog,
                  class: "px-4 py-2 text-white rounded-lg transition-colors bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50",
                  title: "从JSON文件导入规则"
                }, _cache[30] || (_cache[30] = [
                  createBaseVNode("i", { class: "pi pi-upload mr-2" }, null, -1),
                  createTextVNode(" 导入规则 ")
                ]))
              ]),
              createBaseVNode("button", {
                onClick: openCreateForm,
                class: normalizeClass([
                  "px-4 py-2 text-white rounded-lg transition-colors",
                  unref(themeStore).themeClasses.buttonStyle
                ])
              }, _cache[31] || (_cache[31] = [
                createBaseVNode("i", { class: "pi pi-plus mr-2" }, null, -1),
                createTextVNode(" 新建规则 ")
              ]), 2),
              createBaseVNode("button", {
                onClick: resetRules,
                class: "px-4 py-2 text-white rounded-lg transition-colors bg-red-500/20 hover:bg-red-500/30 border border-red-500/50"
              }, _cache[32] || (_cache[32] = [
                createBaseVNode("i", { class: "pi pi-refresh mr-2" }, null, -1),
                createTextVNode(" 重置规则 ")
              ]))
            ])
          ]),
          error.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              _cache[35] || (_cache[35] = createBaseVNode("i", { class: "pi pi-exclamation-triangle" }, null, -1)),
              createBaseVNode("span", null, toDisplayString(error.value), 1),
              createBaseVNode("button", {
                onClick: _cache[1] || (_cache[1] = ($event) => error.value = null),
                class: "ml-auto text-red-400 hover:text-white"
              }, _cache[34] || (_cache[34] = [
                createBaseVNode("i", { class: "pi pi-times" }, null, -1)
              ]))
            ])
          ])) : createCommentVNode("", true),
          importing.value ? (openBlock(), createElementBlock("div", _hoisted_5, _cache[36] || (_cache[36] = [
            createBaseVNode("div", { class: "flex items-center gap-2" }, [
              createBaseVNode("i", { class: "pi pi-spin pi-spinner" }),
              createBaseVNode("span", null, "正在导入规则，请稍候...")
            ], -1)
          ]))) : createCommentVNode("", true),
          testMode.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
            _cache[40] || (_cache[40] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4" }, [
              createBaseVNode("i", { class: "pi pi-search mr-2 text-purple-400" }),
              createTextVNode(" 规则测试 ")
            ], -1)),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", null, [
                _cache[37] || (_cache[37] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "测试输入（URL或日志内容）", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => testInput.value = $event),
                  placeholder: "输入要测试的URL或日志内容...",
                  rows: "3",
                  class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 resize-none focus:border-purple-500 focus:outline-none"
                }, null, 512), [
                  [vModelText, testInput.value]
                ])
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("button", {
                  onClick: testRule,
                  class: "px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
                }, _cache[38] || (_cache[38] = [
                  createBaseVNode("i", { class: "pi pi-play mr-2" }, null, -1),
                  createTextVNode(" 测试规则 ")
                ])),
                createBaseVNode("button", {
                  onClick: _cache[3] || (_cache[3] = ($event) => {
                    testInput.value = "";
                    testResult.value = null;
                  }),
                  class: "px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                }, _cache[39] || (_cache[39] = [
                  createBaseVNode("i", { class: "pi pi-refresh mr-2" }, null, -1),
                  createTextVNode(" 清空 ")
                ]))
              ]),
              testResult.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass([
                  "p-4 rounded-lg border",
                  testResult.value.matched ? "bg-red-500/10 border-red-500/20 text-red-400" : "bg-green-500/10 border-green-500/20 text-green-400"
                ])
              }, [
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("i", {
                    class: normalizeClass(testResult.value.matched ? "pi pi-exclamation-triangle" : "pi pi-check-circle")
                  }, null, 2),
                  createBaseVNode("span", _hoisted_10, toDisplayString(testResult.value.matched ? "检测到威胁" : "未检测到威胁"), 1)
                ]),
                createBaseVNode("div", _hoisted_11, toDisplayString(testResult.value.details), 1),
                testResult.value.rule ? (openBlock(), createElementBlock("div", _hoisted_12, " 规则: " + toDisplayString(testResult.value.rule.name) + " | 分类: " + toDisplayString(getCategoryInfo(testResult.value.rule.category).label), 1)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("div", null, [
              _cache[41] || (_cache[41] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "搜索规则", -1)),
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => searchQuery.value = $event),
                type: "text",
                placeholder: "搜索规则名称、描述或模式...",
                class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              }, null, 512), [
                [vModelText, searchQuery.value]
              ])
            ]),
            createBaseVNode("div", null, [
              _cache[43] || (_cache[43] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "分类", -1)),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => selectedCategory.value = $event),
                class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              }, [
                _cache[42] || (_cache[42] = createBaseVNode("option", { value: "all" }, "全部分类", -1)),
                (openBlock(), createElementBlock(Fragment, null, renderList(categories, (cat) => {
                  return createBaseVNode("option", {
                    key: cat.value,
                    value: cat.value
                  }, toDisplayString(cat.label) + " (" + toDisplayString(categoryStats.value[cat.value] || 0) + ") ", 9, _hoisted_14);
                }), 64))
              ], 512), [
                [vModelSelect, selectedCategory.value]
              ])
            ]),
            createBaseVNode("div", null, [
              _cache[45] || (_cache[45] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "严重程度", -1)),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => selectedSeverity.value = $event),
                class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              }, _cache[44] || (_cache[44] = [
                createBaseVNode("option", { value: "all" }, "全部等级", -1),
                createBaseVNode("option", { value: "critical" }, "严重", -1),
                createBaseVNode("option", { value: "high" }, "高", -1),
                createBaseVNode("option", { value: "medium" }, "中等", -1),
                createBaseVNode("option", { value: "low" }, "低", -1)
              ]), 512), [
                [vModelSelect, selectedSeverity.value]
              ])
            ]),
            createBaseVNode("div", _hoisted_15, [
              _cache[47] || (_cache[47] = createBaseVNode("label", { class: "block text-sm text-gray-400" }, "状态过滤", -1)),
              createBaseVNode("label", _hoisted_16, [
                withDirectives(createBaseVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => showActiveOnly.value = $event),
                  class: "rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-500 focus:ring-2"
                }, null, 512), [
                  [vModelCheckbox, showActiveOnly.value]
                ]),
                _cache[46] || (_cache[46] = createTextVNode(" 仅显示启用的规则 "))
              ])
            ])
          ]),
          selectedCount.value > 0 ? (openBlock(), createElementBlock("div", _hoisted_17, [
            createBaseVNode("div", _hoisted_18, " 已选择 " + toDisplayString(selectedCount.value) + " 条规则 ", 1),
            createBaseVNode("div", _hoisted_19, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => bulkAction.value = $event),
                class: "px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              }, _cache[48] || (_cache[48] = [
                createBaseVNode("option", { value: "" }, "选择批量操作", -1),
                createBaseVNode("option", { value: "enable" }, "启用", -1),
                createBaseVNode("option", { value: "disable" }, "禁用", -1),
                createBaseVNode("option", { value: "export" }, "导出", -1),
                createBaseVNode("option", { value: "delete" }, "删除", -1)
              ]), 512), [
                [vModelSelect, bulkAction.value]
              ]),
              createBaseVNode("button", {
                onClick: executeBulkAction,
                disabled: !bulkAction.value,
                class: "px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 text-white rounded-lg transition-colors"
              }, " 执行 ", 8, _hoisted_20)
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_21, [
            createBaseVNode("div", {
              class: normalizeClass(["flex items-center gap-3 p-4 rounded-lg", unref(themeStore).themeClasses.cardBackground])
            }, [
              createBaseVNode("label", _hoisted_22, [
                createBaseVNode("input", {
                  type: "checkbox",
                  checked: selectedCount.value === filteredRules.value.length && filteredRules.value.length > 0,
                  onChange: _cache[9] || (_cache[9] = ($event) => selectAllRules($event.target.checked)),
                  class: "rounded border-white/20 bg-white/10 text-blue-500"
                }, null, 40, _hoisted_23),
                _cache[49] || (_cache[49] = createBaseVNode("span", { class: "text-white text-sm" }, "全选", -1))
              ]),
              createBaseVNode("span", _hoisted_24, " 共 " + toDisplayString(filteredRules.value.length) + " 条规则 ", 1)
            ], 2),
            loading.value ? (openBlock(), createElementBlock("div", _hoisted_25, _cache[50] || (_cache[50] = [
              createBaseVNode("i", { class: "pi pi-spin pi-spinner text-3xl text-blue-400 mb-4" }, null, -1),
              createBaseVNode("p", { class: "text-gray-400" }, "正在加载规则...", -1)
            ]))) : filteredRules.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_26, _cache[51] || (_cache[51] = [
              createBaseVNode("i", { class: "pi pi-info-circle text-3xl text-gray-400 mb-4" }, null, -1),
              createBaseVNode("p", { class: "text-gray-400" }, "暂无规则数据", -1)
            ]))) : (openBlock(), createElementBlock("div", _hoisted_27, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(filteredRules.value, (rule) => {
                return openBlock(), createElementBlock("div", {
                  key: rule.id,
                  class: normalizeClass(["p-6 rounded-xl hover:bg-white/10 transition-colors", unref(themeStore).themeClasses.cardBackground])
                }, [
                  createBaseVNode("div", _hoisted_28, [
                    createBaseVNode("input", {
                      type: "checkbox",
                      checked: selectedRules.value.has(rule.id),
                      onChange: ($event) => selectRule(rule.id, $event.target.checked),
                      class: "rounded border-white/20 bg-white/10 text-blue-500 mt-1"
                    }, null, 40, _hoisted_29),
                    createBaseVNode("div", _hoisted_30, [
                      createBaseVNode("div", _hoisted_31, [
                        createBaseVNode("h3", _hoisted_32, toDisplayString(rule.name), 1),
                        createBaseVNode("i", {
                          class: normalizeClass([
                            "pi",
                            getCategoryInfo(rule.category).icon,
                            getCategoryInfo(rule.category).color
                          ])
                        }, null, 2),
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "px-2 py-1 rounded text-xs",
                            rule.severity === "critical" ? "bg-red-500/20 text-red-400" : rule.severity === "high" ? "bg-orange-500/20 text-orange-400" : rule.severity === "medium" ? "bg-yellow-500/20 text-yellow-400" : "bg-green-500/20 text-green-400"
                          ])
                        }, toDisplayString(rule.severity), 3),
                        createBaseVNode("span", _hoisted_33, " 优先级: " + toDisplayString(rule.priority || 50), 1)
                      ]),
                      createBaseVNode("p", _hoisted_34, toDisplayString(rule.description), 1),
                      createBaseVNode("div", _hoisted_35, [
                        createBaseVNode("code", _hoisted_36, toDisplayString(rule.pattern), 1)
                      ]),
                      createBaseVNode("div", _hoisted_37, [
                        createBaseVNode("div", _hoisted_38, [
                          _cache[52] || (_cache[52] = createTextVNode(" 分类: ")),
                          createBaseVNode("span", {
                            class: normalizeClass(getCategoryInfo(rule.category).color)
                          }, toDisplayString(getCategoryInfo(rule.category).label), 3)
                        ]),
                        createBaseVNode("div", _hoisted_39, [
                          _cache[53] || (_cache[53] = createTextVNode(" 优先级: ")),
                          createBaseVNode("span", _hoisted_40, toDisplayString(rule.priority), 1)
                        ]),
                        rule.contributor ? (openBlock(), createElementBlock("div", _hoisted_41, [
                          _cache[54] || (_cache[54] = createTextVNode(" 贡献者: ")),
                          createBaseVNode("span", _hoisted_42, toDisplayString(rule.contributor), 1)
                        ])) : createCommentVNode("", true),
                        rule.tags && rule.tags.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_43, [
                          _cache[55] || (_cache[55] = createBaseVNode("span", { class: "text-gray-400" }, "标签:", -1)),
                          (openBlock(true), createElementBlock(Fragment, null, renderList(rule.tags, (tag) => {
                            return openBlock(), createElementBlock("span", {
                              key: tag,
                              class: "px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs"
                            }, toDisplayString(tag), 1);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_44, [
                      createBaseVNode("label", _hoisted_45, [
                        createBaseVNode("input", {
                          type: "checkbox",
                          checked: rule.enabled,
                          onChange: ($event) => toggleRule(rule),
                          class: "rounded border-white/20 bg-white/10 text-green-500"
                        }, null, 40, _hoisted_46),
                        _cache[56] || (_cache[56] = createBaseVNode("span", { class: "text-white text-sm" }, "启用", -1))
                      ]),
                      createBaseVNode("button", {
                        onClick: ($event) => openEditForm(rule),
                        class: "p-2 text-blue-400 hover:text-white hover:bg-blue-500/20 rounded transition-colors",
                        title: "编辑规则"
                      }, _cache[57] || (_cache[57] = [
                        createBaseVNode("i", { class: "pi pi-pencil" }, null, -1)
                      ]), 8, _hoisted_47),
                      createBaseVNode("button", {
                        onClick: ($event) => deleteRule(rule),
                        class: "p-2 text-red-400 hover:text-white hover:bg-red-500/20 rounded transition-colors",
                        title: "删除规则"
                      }, _cache[58] || (_cache[58] = [
                        createBaseVNode("i", { class: "pi pi-trash" }, null, -1)
                      ]), 8, _hoisted_48)
                    ])
                  ])
                ], 2);
              }), 128))
            ]))
          ]),
          showForm.value ? (openBlock(), createElementBlock("div", _hoisted_49, [
            createBaseVNode("div", {
              class: normalizeClass(["rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto", unref(themeStore).themeClasses.cardBackground])
            }, [
              createBaseVNode("div", _hoisted_50, [
                createBaseVNode("div", _hoisted_51, [
                  createBaseVNode("h2", _hoisted_52, toDisplayString(editingRule.value ? "编辑规则" : "新建规则"), 1),
                  createBaseVNode("button", {
                    onClick: _cache[10] || (_cache[10] = ($event) => showForm.value = false),
                    class: "text-gray-400 hover:text-white"
                  }, _cache[59] || (_cache[59] = [
                    createBaseVNode("i", { class: "pi pi-times text-xl" }, null, -1)
                  ]))
                ]),
                createBaseVNode("form", {
                  onSubmit: withModifiers(saveRule, ["prevent"]),
                  class: "space-y-6"
                }, [
                  createBaseVNode("div", _hoisted_53, [
                    createBaseVNode("div", null, [
                      _cache[60] || (_cache[60] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "规则名称 *", -1)),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => form.name = $event),
                        type: "text",
                        required: "",
                        class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      }, null, 512), [
                        [vModelText, form.name]
                      ])
                    ]),
                    createBaseVNode("div", null, [
                      _cache[61] || (_cache[61] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "分类", -1)),
                      withDirectives(createBaseVNode("select", {
                        "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => form.category = $event),
                        class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      }, [
                        (openBlock(), createElementBlock(Fragment, null, renderList(categories, (cat) => {
                          return createBaseVNode("option", {
                            key: cat.value,
                            value: cat.value
                          }, toDisplayString(cat.label), 9, _hoisted_54);
                        }), 64))
                      ], 512), [
                        [vModelSelect, form.category]
                      ])
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    _cache[62] || (_cache[62] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "检测模式 (正则表达式) *", -1)),
                    withDirectives(createBaseVNode("textarea", {
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => form.pattern = $event),
                      required: "",
                      rows: "3",
                      placeholder: "输入正则表达式模式...",
                      class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 resize-none focus:border-blue-500 focus:outline-none"
                    }, null, 512), [
                      [vModelText, form.pattern]
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    _cache[63] || (_cache[63] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "描述", -1)),
                    withDirectives(createBaseVNode("textarea", {
                      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => form.description = $event),
                      rows: "2",
                      placeholder: "描述此规则的用途和检测内容...",
                      class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 resize-none focus:border-blue-500 focus:outline-none"
                    }, null, 512), [
                      [vModelText, form.description]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_55, [
                    createBaseVNode("div", null, [
                      _cache[65] || (_cache[65] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "严重程度", -1)),
                      withDirectives(createBaseVNode("select", {
                        "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => form.severity = $event),
                        class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      }, _cache[64] || (_cache[64] = [
                        createBaseVNode("option", { value: "low" }, "低", -1),
                        createBaseVNode("option", { value: "medium" }, "中等", -1),
                        createBaseVNode("option", { value: "high" }, "高", -1),
                        createBaseVNode("option", { value: "critical" }, "严重", -1)
                      ]), 512), [
                        [vModelSelect, form.severity]
                      ])
                    ]),
                    createBaseVNode("div", null, [
                      _cache[66] || (_cache[66] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "优先级 (1-100)", -1)),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => form.priority = $event),
                        type: "number",
                        min: "1",
                        max: "100",
                        class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      }, null, 512), [
                        [
                          vModelText,
                          form.priority,
                          void 0,
                          { number: true }
                        ]
                      ])
                    ]),
                    createBaseVNode("div", null, [
                      _cache[67] || (_cache[67] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "贡献用户", -1)),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => form.contributor = $event),
                        type: "text",
                        placeholder: "输入贡献者名称...",
                        class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                      }, null, 512), [
                        [vModelText, form.contributor]
                      ])
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    _cache[69] || (_cache[69] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "标签", -1)),
                    createBaseVNode("div", _hoisted_56, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(form.tags, (tag) => {
                        return openBlock(), createElementBlock("span", {
                          key: tag,
                          class: "px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm flex items-center gap-1"
                        }, [
                          createTextVNode(toDisplayString(tag) + " ", 1),
                          createBaseVNode("button", {
                            onClick: ($event) => removeTag(tag),
                            class: "text-blue-400 hover:text-white"
                          }, _cache[68] || (_cache[68] = [
                            createBaseVNode("i", { class: "pi pi-times text-xs" }, null, -1)
                          ]), 8, _hoisted_57)
                        ]);
                      }), 128))
                    ]),
                    createBaseVNode("div", _hoisted_58, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(availableTags.filter((t) => !form.tags.includes(t)), (tag) => {
                        return openBlock(), createElementBlock("button", {
                          key: tag,
                          onClick: ($event) => addTag(tag),
                          type: "button",
                          class: "px-3 py-1 bg-gray-600 hover:bg-gray-500 text-white rounded-full text-sm transition-colors"
                        }, " + " + toDisplayString(tag), 9, _hoisted_59);
                      }), 128))
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_60, [
                    createBaseVNode("button", {
                      type: "button",
                      onClick: _cache[18] || (_cache[18] = ($event) => showAdvancedConditions.value = !showAdvancedConditions.value),
                      class: "flex items-center gap-2 text-blue-400 hover:text-white transition-colors"
                    }, [
                      createBaseVNode("i", {
                        class: normalizeClass(showAdvancedConditions.value ? "pi pi-chevron-down" : "pi pi-chevron-right")
                      }, null, 2),
                      _cache[70] || (_cache[70] = createTextVNode(" 高级条件配置 (正则 + 状态码 + IP等) "))
                    ]),
                    showAdvancedConditions.value ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: normalizeClass(["mt-4 space-y-4 p-4 rounded-lg", unref(themeStore).themeClasses.cardBackground])
                    }, [
                      createBaseVNode("div", null, [
                        _cache[71] || (_cache[71] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "HTTP方法限制 (留空表示所有方法)", -1)),
                        createBaseVNode("div", _hoisted_61, [
                          (openBlock(), createElementBlock(Fragment, null, renderList(httpMethods, (method) => {
                            return createBaseVNode("label", {
                              key: method,
                              class: "flex items-center gap-1 text-white cursor-pointer"
                            }, [
                              withDirectives(createBaseVNode("input", {
                                type: "checkbox",
                                value: method,
                                "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => form.conditions.methods = $event),
                                class: "rounded border-white/20 bg-white/10 text-blue-500"
                              }, null, 8, _hoisted_62), [
                                [vModelCheckbox, form.conditions.methods]
                              ]),
                              createBaseVNode("span", _hoisted_63, toDisplayString(method), 1)
                            ]);
                          }), 64))
                        ])
                      ]),
                      createBaseVNode("div", null, [
                        _cache[72] || (_cache[72] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, [
                          createTextVNode(" 状态码限制 "),
                          createBaseVNode("span", { class: "text-xs text-blue-400" }, "(只有这些状态码才会触发告警，默认: 200)")
                        ], -1)),
                        createBaseVNode("input", {
                          type: "text",
                          value: (form.conditions?.statusCodes || []).join(","),
                          onInput: _cache[20] || (_cache[20] = ($event) => updateStatusCodes($event)),
                          placeholder: "200,404,403,500 (推荐只使用200以减少误报)",
                          class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                        }, null, 40, _hoisted_64),
                        _cache[73] || (_cache[73] = createBaseVNode("div", { class: "mt-1 text-xs text-gray-500" }, " 💡 提示: SQL注入等攻击通常在状态码200时最危险，建议只监控200状态码 ", -1))
                      ]),
                      createBaseVNode("div", null, [
                        _cache[74] || (_cache[74] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "IP白名单 (这些IP不会触发此规则)", -1)),
                        createBaseVNode("textarea", {
                          value: (form.conditions?.ipWhitelist || []).join("\n"),
                          onInput: _cache[21] || (_cache[21] = ($event) => updateIpList($event, "ipWhitelist")),
                          placeholder: "每行一个IP地址\n192.168.1.1\n10.0.0.1",
                          rows: "3",
                          class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 resize-none focus:border-blue-500 focus:outline-none"
                        }, null, 40, _hoisted_65)
                      ]),
                      createBaseVNode("div", null, [
                        _cache[75] || (_cache[75] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "IP黑名单 (这些IP直接触发此规则)", -1)),
                        createBaseVNode("textarea", {
                          value: (form.conditions?.ipBlacklist || []).join("\n"),
                          onInput: _cache[22] || (_cache[22] = ($event) => updateIpList($event, "ipBlacklist")),
                          placeholder: "每行一个IP地址\n192.168.1.100\n172.16.0.1",
                          rows: "3",
                          class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 resize-none focus:border-blue-500 focus:outline-none"
                        }, null, 40, _hoisted_66)
                      ]),
                      createBaseVNode("div", null, [
                        _cache[78] || (_cache[78] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "时间范围限制 (仅在此时间段内触发)", -1)),
                        createBaseVNode("div", _hoisted_67, [
                          createBaseVNode("label", _hoisted_68, [
                            createBaseVNode("input", {
                              type: "checkbox",
                              checked: form.conditions.timeRange !== null,
                              onChange: _cache[23] || (_cache[23] = ($event) => toggleTimeRange($event)),
                              class: "rounded border-white/20 bg-white/10 text-blue-500"
                            }, null, 40, _hoisted_69),
                            _cache[76] || (_cache[76] = createBaseVNode("span", { class: "text-sm" }, "启用时间限制", -1))
                          ]),
                          form.conditions.timeRange ? (openBlock(), createElementBlock("div", _hoisted_70, [
                            withDirectives(createBaseVNode("input", {
                              type: "time",
                              "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => form.conditions.timeRange.start = $event),
                              class: "px-2 py-1 bg-white/10 border border-white/20 rounded text-white focus:border-blue-500 focus:outline-none"
                            }, null, 512), [
                              [vModelText, form.conditions.timeRange.start]
                            ]),
                            _cache[77] || (_cache[77] = createBaseVNode("span", { class: "text-gray-400" }, "到", -1)),
                            withDirectives(createBaseVNode("input", {
                              type: "time",
                              "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => form.conditions.timeRange.end = $event),
                              class: "px-2 py-1 bg-white/10 border border-white/20 rounded text-white focus:border-blue-500 focus:outline-none"
                            }, null, 512), [
                              [vModelText, form.conditions.timeRange.end]
                            ])
                          ])) : createCommentVNode("", true)
                        ]),
                        _cache[79] || (_cache[79] = createBaseVNode("p", { class: "text-xs text-gray-500 mt-1" }, "例如: 22:00 到 06:00 (夜间时段)", -1))
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_71, [
                    withDirectives(createBaseVNode("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => form.enabled = $event),
                      class: "rounded border-white/20 bg-white/10 text-green-500"
                    }, null, 512), [
                      [vModelCheckbox, form.enabled]
                    ]),
                    _cache[80] || (_cache[80] = createBaseVNode("label", { class: "text-white" }, "启用此规则", -1))
                  ]),
                  createBaseVNode("div", _hoisted_72, [
                    createBaseVNode("button", {
                      type: "submit",
                      disabled: saving.value,
                      class: "px-6 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 text-white rounded-lg transition-colors"
                    }, [
                      saving.value ? (openBlock(), createElementBlock("i", _hoisted_74)) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(saving.value ? "保存中..." : editingRule.value ? "更新规则" : "创建规则"), 1)
                    ], 8, _hoisted_73),
                    createBaseVNode("button", {
                      type: "button",
                      onClick: _cache[27] || (_cache[27] = ($event) => showForm.value = false),
                      class: "px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                    }, " 取消 ")
                  ])
                ], 32)
              ])
            ], 2)
          ])) : createCommentVNode("", true),
          createBaseVNode("input", {
            ref_key: "fileInputRef",
            ref: fileInputRef,
            type: "file",
            accept: ".json",
            onChange: importRules,
            style: { "display": "none" }
          }, null, 544)
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
