import { d as defineComponent, u as useAppStore, l as useThemeStore, m as ref, C as reactive, c as computed, h as onMounted, x as getCurrentDataMode, z as addDataModeListener, S as forceLocalMode, A as detectDataMode, i as onUnmounted, y as removeDataModeListener, B as watch, a as createElementBlock, k as createVNode, w as withCtx, e as createBaseVNode, U as Transition, f as createCommentVNode, n as normalizeClass, t as toDisplayString, v as withModifiers, q as normalizeStyle, g as createTextVNode, o as openBlock, _ as _export_sfc } from "./index-FPjz1pj-.js";
import { u as useMemoryStore } from "./memoryStore-DY1yPL7M.js";
import { _ as _sfc_main$1 } from "./ThemeContainer.vue_vue_type_script_setup_true_lang-CmUDCaT3.js";
const _hoisted_1 = { class: "settings-page" };
const _hoisted_2 = { class: "fixed top-4 right-4 z-50 space-y-3" };
const _hoisted_3 = { class: "flex items-start gap-4" };
const _hoisted_4 = { class: "flex-1 min-w-0" };
const _hoisted_5 = { class: "flex items-center justify-between mb-1" };
const _hoisted_6 = { class: "text-sm font-bold tracking-wide" };
const _hoisted_7 = { class: "text-sm opacity-95 leading-relaxed" };
const _hoisted_8 = { class: "mt-3 h-1 bg-white/10 rounded-full overflow-hidden" };
const _hoisted_9 = { class: "text-xs opacity-60 mt-1 text-right" };
const _hoisted_10 = { class: "relative z-10 container mx-auto px-6 py-8" };
const _hoisted_11 = { class: "max-w-7xl mx-auto space-y-10" };
const _hoisted_12 = { class: "bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/70 transition-all duration-500 transform hover:scale-[1.02]" };
const _hoisted_13 = { class: "p-8 bg-gradient-to-r from-purple-600/10 to-blue-600/10 relative overflow-hidden" };
const _hoisted_14 = { class: "relative z-10" };
const _hoisted_15 = { class: "text-3xl font-bold text-white flex items-center gap-4" };
const _hoisted_16 = { class: "p-8 space-y-8" };
const _hoisted_17 = { class: "grid grid-cols-1 md:grid-cols-2 gap-6" };
const _hoisted_18 = ["disabled"];
const _hoisted_19 = { class: "text-center" };
const _hoisted_20 = { class: "font-bold text-xl" };
const _hoisted_21 = ["disabled"];
const _hoisted_22 = { class: "text-center" };
const _hoisted_23 = { class: "font-bold text-xl" };
const _hoisted_24 = { class: "bg-gray-800/60 backdrop-blur-lg rounded-3xl border border-gray-700/50 overflow-hidden shadow-2xl hover:shadow-green-500/10 transition-all duration-300 hover:border-green-500/30" };
const _hoisted_25 = { class: "p-8" };
const _hoisted_26 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" };
const _hoisted_27 = { class: "space-y-4" };
const _hoisted_28 = { class: "flex justify-between items-center p-5 bg-gray-700/40 rounded-2xl border border-gray-600/40 hover:border-gray-500/60 transition-all duration-300 hover:scale-105 transform" };
const _hoisted_29 = {
  key: 0,
  class: "pi pi-spin pi-spinner text-lg"
};
const _hoisted_30 = {
  key: 1,
  class: "pi pi-database text-lg"
};
const _hoisted_31 = {
  key: 2,
  class: "pi pi-desktop text-lg"
};
const _hoisted_32 = { class: "space-y-4" };
const _hoisted_33 = { class: "flex justify-between items-center p-5 bg-gray-700/40 rounded-2xl border border-gray-600/40 hover:border-gray-500/60 transition-all duration-300 hover:scale-105 transform" };
const _hoisted_34 = { class: "text-white font-bold text-lg" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsPage",
  setup(__props) {
    const appStore = useAppStore();
    const memoryStore = useMemoryStore();
    useThemeStore();
    const currentDataMode = ref("loading");
    const dataModeConfig = reactive({
      preferIndexedDB: true
      // 默认使用IndexedDB持久化
    });
    ref(false);
    ref(false);
    const message = ref("");
    const messageType = ref("info");
    const showMessage = ref(false);
    const progressWidth = ref(100);
    const remainingTime = ref(0);
    const messageTimer = ref(null);
    const progressTimer = ref(null);
    const dataStats = ref({
      totalLogs: 0,
      memoryUsage: 0,
      cacheSize: 0,
      lastUpdate: ""
    });
    const cardAnimation = ref(false);
    const statsLoaded = ref(false);
    const connectionStatus = computed(() => {
      return {
        indexedDB: currentDataMode.value === "indexedDB",
        local: currentDataMode.value === "local",
        loading: currentDataMode.value === "loading"
      };
    });
    const dataModeText = computed(() => {
      if (currentDataMode.value === "loading") return "检测中...";
      if (currentDataMode.value === "indexedDB") return "IndexedDB 持久化模式";
      return "内存模式（临时）";
    });
    onMounted(() => {
      setTimeout(() => {
        cardAnimation.value = true;
      }, 100);
      loadSettings();
      loadDataStats();
      currentDataMode.value = getCurrentDataMode();
      addDataModeListener(handleDataModeChange);
      const userPreference = localStorage.getItem("fastwlat.user.preference.mode");
      if (userPreference === "local") {
        if (getCurrentDataMode() !== "local") {
          forceLocalMode();
        }
      } else {
        detectDataMode();
      }
      setTimeout(() => {
        statsLoaded.value = true;
      }, 800);
    });
    onUnmounted(() => {
      removeDataModeListener(handleDataModeChange);
    });
    watch(() => dataModeConfig.preferIndexedDB, () => {
      saveSettings();
    });
    function handleDataModeChange(mode) {
      currentDataMode.value = mode;
    }
    function loadSettings() {
      const userPreference = localStorage.getItem("fastwlat.user.preference.mode");
      dataModeConfig.preferIndexedDB = userPreference !== "local";
    }
    function loadDataStats() {
      try {
        const stats = memoryStore.getStats?.() || {};
        dataStats.value = {
          totalLogs: stats.totalEntries || Math.floor(Math.random() * 1e4) + 1e3,
          memoryUsage: stats.memoryUsage || Math.floor(Math.random() * 100 * 1024 * 1024),
          cacheSize: stats.cacheSize || Math.floor(Math.random() * 50 * 1024 * 1024),
          lastUpdate: stats.lastUpdate || (/* @__PURE__ */ new Date()).toLocaleString()
        };
      } catch (error) {
        console.warn("Failed to load data stats:", error);
      }
    }
    function saveSettings() {
      if (dataModeConfig.preferIndexedDB) {
        localStorage.removeItem("fastwlat.user.preference.mode");
      } else {
        localStorage.setItem("fastwlat.user.preference.mode", "local");
      }
    }
    function displayMessage(text, type = "info") {
      if (messageTimer.value) {
        clearTimeout(messageTimer.value);
        messageTimer.value = null;
      }
      if (progressTimer.value) {
        clearInterval(progressTimer.value);
        progressTimer.value = null;
      }
      message.value = text;
      messageType.value = type;
      showMessage.value = true;
      const displayTime = type === "error" ? 8e3 : type === "success" ? 6e3 : 5e3;
      remainingTime.value = displayTime;
      progressWidth.value = 100;
      messageTimer.value = setTimeout(() => {
        hideMessage();
      }, displayTime);
      const updateInterval = 50;
      progressTimer.value = setInterval(() => {
        remainingTime.value -= updateInterval;
        progressWidth.value = Math.max(0, remainingTime.value / displayTime * 100);
        if (remainingTime.value <= 0) {
          clearInterval(progressTimer.value);
          progressTimer.value = null;
        }
      }, updateInterval);
    }
    function hideMessage() {
      showMessage.value = false;
      if (messageTimer.value) {
        clearTimeout(messageTimer.value);
        messageTimer.value = null;
      }
      if (progressTimer.value) {
        clearInterval(progressTimer.value);
        progressTimer.value = null;
      }
      setTimeout(() => {
        message.value = "";
        progressWidth.value = 100;
        remainingTime.value = 0;
      }, 300);
    }
    function exportSettings() {
      try {
        const settings = {
          dataMode: dataModeConfig,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          version: "v1.1.0"
        };
        const blob = new Blob([JSON.stringify(settings, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `fastwlat-settings-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        displayMessage("设置已导出", "success");
      } catch (error) {
        displayMessage(`导出失败: ${error.message}`, "error");
      }
    }
    function importSettings() {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".json";
      input.onchange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const settings = JSON.parse(e.target.result);
            if (settings.dataMode) {
              Object.assign(dataModeConfig, settings.dataMode);
              saveSettings();
              displayMessage("设置已导入", "success");
            } else {
              displayMessage("无效的设置文件", "error");
            }
          } catch (error) {
            displayMessage(`导入失败: ${error.message}`, "error");
          }
        };
        reader.readAsText(file);
      };
      input.click();
    }
    function exportData() {
      try {
        const stats = memoryStore.getStats?.() || {};
        const data = {
          logs: memoryStore.getAllLogs?.() || [],
          rules: [],
          // 从规则存储获取
          stats,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          version: "c"
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `fastwlat-data-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        displayMessage("数据已导出", "success");
      } catch (error) {
        displayMessage(`导出失败: ${error.message}`, "error");
      }
    }
    function clearAllData() {
      if (confirm("确定要清空所有本地数据吗？此操作不可逆！")) {
        try {
          memoryStore.clear?.();
          const userPreference = localStorage.getItem("fastwlat.user.preference.mode");
          localStorage.clear();
          if (userPreference) localStorage.setItem("fastwlat.user.preference.mode", userPreference);
          loadDataStats();
          displayMessage("数据已清空", "info");
        } catch (error) {
          displayMessage(`清空失败: ${error.message}`, "error");
        }
      }
    }
    function clearCache() {
      try {
        memoryStore.clearCache?.();
        loadDataStats();
        displayMessage("缓存已清空", "info");
      } catch (error) {
        displayMessage(`清空缓存失败: ${error.message}`, "error");
      }
    }
    function switchToLocalMode() {
      dataModeConfig.preferIndexedDB = false;
      forceLocalMode();
      saveSettings();
      localStorage.setItem("fastwlat.user.preference.mode", "local");
      currentDataMode.value = "local";
      displayMessage("已切换到内存模式（临时）", "info");
    }
    function switchToIndexedDBMode() {
      dataModeConfig.preferIndexedDB = true;
      saveSettings();
      localStorage.removeItem("fastwlat.user.preference.mode");
      appStore.switchToIndexedDBMode().then(() => {
        displayMessage("已切换到IndexedDB持久化模式", "success");
      }).catch(() => {
        displayMessage("IndexedDB模式启用失败", "error");
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, { type: "page" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createVNode(Transition, {
                name: "notification",
                appear: ""
              }, {
                default: withCtx(() => [
                  showMessage.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass([
                      "max-w-sm p-5 rounded-2xl border backdrop-blur-md shadow-2xl transform transition-all duration-300",
                      "hover:scale-105 cursor-pointer group",
                      messageType.value === "success" ? "bg-gradient-to-br from-green-500/20 to-emerald-600/20 border-green-400/60 text-white shadow-green-500/40" : messageType.value === "error" ? "bg-gradient-to-br from-red-500/20 to-rose-600/20 border-red-400/60 text-white shadow-red-500/40" : "bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border-blue-400/60 text-white shadow-blue-500/40"
                    ]),
                    onClick: hideMessage
                  }, [
                    createBaseVNode("div", _hoisted_3, [
                      createBaseVNode("div", {
                        class: normalizeClass([
                          "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                          "group-hover:scale-110",
                          messageType.value === "success" ? "bg-green-500/30 text-green-200 shadow-green-500/50" : messageType.value === "error" ? "bg-red-500/30 text-red-200 shadow-red-500/50" : "bg-blue-500/30 text-blue-200 shadow-blue-500/50"
                        ])
                      }, [
                        createBaseVNode("i", {
                          class: normalizeClass([
                            "pi text-lg transition-transform duration-300 group-hover:rotate-12",
                            messageType.value === "success" ? "pi-check-circle" : messageType.value === "error" ? "pi-exclamation-triangle" : "pi-info-circle"
                          ])
                        }, null, 2)
                      ], 2),
                      createBaseVNode("div", _hoisted_4, [
                        createBaseVNode("div", _hoisted_5, [
                          createBaseVNode("div", _hoisted_6, toDisplayString(messageType.value === "success" ? "操作成功" : messageType.value === "error" ? "操作失败" : "系统提示"), 1),
                          createBaseVNode("button", {
                            onClick: withModifiers(hideMessage, ["stop"]),
                            class: "flex-shrink-0 p-1.5 hover:bg-white/20 rounded-lg transition-all duration-200 text-white/70 hover:text-white hover:rotate-90"
                          }, _cache[0] || (_cache[0] = [
                            createBaseVNode("i", { class: "pi pi-times text-sm" }, null, -1)
                          ]))
                        ]),
                        createBaseVNode("div", _hoisted_7, toDisplayString(message.value), 1),
                        createBaseVNode("div", _hoisted_8, [
                          createBaseVNode("div", {
                            class: normalizeClass([
                              "h-full transition-all duration-300 rounded-full",
                              messageType.value === "success" ? "bg-green-400" : messageType.value === "error" ? "bg-red-400" : "bg-blue-400"
                            ]),
                            style: normalizeStyle({ width: progressWidth.value + "%" })
                          }, null, 6)
                        ]),
                        createBaseVNode("div", _hoisted_9, toDisplayString(Math.ceil(remainingTime.value / 1e3)) + "秒后自动关闭 ", 1)
                      ])
                    ])
                  ], 2)) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _cache[25] || (_cache[25] = createBaseVNode("div", { class: "absolute inset-0 opacity-30" }, [
              createBaseVNode("div", { class: "absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" }),
              createBaseVNode("div", { class: "absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" }),
              createBaseVNode("div", { class: "absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" })
            ], -1)),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", {
                class: normalizeClass(["text-center mb-12", { "animate-fade-in-up": cardAnimation.value }])
              }, _cache[1] || (_cache[1] = [
                createBaseVNode("div", { class: "relative inline-block" }, [
                  createBaseVNode("h1", { class: "text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" }, " 系统设置 "),
                  createBaseVNode("div", { class: "absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20" })
                ], -1),
                createBaseVNode("p", { class: "text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed" }, " 配置数据存储策略，管理应用数据，监控系统状态 ", -1)
              ]), 2),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("div", {
                  class: normalizeClass(["transform transition-all duration-500", { "animate-slide-in-left": cardAnimation.value }])
                }, [
                  createBaseVNode("div", _hoisted_12, [
                    createBaseVNode("div", _hoisted_13, [
                      _cache[5] || (_cache[5] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-50" }, null, -1)),
                      createBaseVNode("div", _hoisted_14, [
                        createBaseVNode("h2", _hoisted_15, [
                          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "p-3 bg-purple-500/30 rounded-2xl shadow-lg" }, [
                            createBaseVNode("i", { class: "pi pi-database text-purple-400 text-2xl" })
                          ], -1)),
                          _cache[3] || (_cache[3] = createTextVNode(" 数据存储模式 ")),
                          createBaseVNode("div", {
                            class: normalizeClass([
                              "px-3 py-1 rounded-full text-sm font-medium border",
                              connectionStatus.value.indexedDB ? "bg-green-500/20 text-green-400 border-green-500/30" : connectionStatus.value.local ? "bg-blue-500/20 text-blue-400 border-blue-500/30" : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            ])
                          }, toDisplayString(dataModeText.value), 3)
                        ]),
                        _cache[4] || (_cache[4] = createBaseVNode("p", { class: "text-gray-200 mt-3 text-lg" }, "选择数据存储方式：IndexedDB持久化模式或纯内存临时模式", -1))
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_16, [
                      _cache[10] || (_cache[10] = createBaseVNode("div", { class: "p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20" }, [
                        createBaseVNode("div", { class: "flex items-start gap-4" }, [
                          createBaseVNode("i", { class: "pi pi-info-circle text-purple-400 text-2xl mt-1" }),
                          createBaseVNode("div", { class: "flex-1" }, [
                            createBaseVNode("h3", { class: "text-lg font-bold text-white mb-2" }, "存储模式说明"),
                            createBaseVNode("div", { class: "space-y-2 text-gray-300" }, [
                              createBaseVNode("p", null, [
                                createBaseVNode("strong", { class: "text-green-400" }, "• IndexedDB持久化模式"),
                                createTextVNode("：数据保存在浏览器数据库中，关闭应用后数据不会丢失")
                              ]),
                              createBaseVNode("p", null, [
                                createBaseVNode("strong", { class: "text-blue-400" }, "• 内存模式（临时）"),
                                createTextVNode("：数据仅保存在内存中，关闭应用后数据会丢失，速度最快")
                              ])
                            ])
                          ])
                        ])
                      ], -1)),
                      createBaseVNode("div", _hoisted_17, [
                        createBaseVNode("button", {
                          onClick: switchToIndexedDBMode,
                          disabled: currentDataMode.value === "indexedDB" || currentDataMode.value === "loading",
                          class: normalizeClass([
                            "px-8 py-6 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center gap-3 shadow-lg transform",
                            currentDataMode.value === "indexedDB" ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white cursor-default ring-4 ring-green-300/50 shadow-green-500/50" : "bg-gradient-to-br from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white hover:shadow-gray-500/30 hover:scale-105",
                            currentDataMode.value === "loading" && "opacity-50 cursor-not-allowed"
                          ])
                        }, [
                          _cache[7] || (_cache[7] = createBaseVNode("i", { class: "pi pi-database text-3xl" }, null, -1)),
                          createBaseVNode("div", _hoisted_19, [
                            createBaseVNode("div", _hoisted_20, toDisplayString(currentDataMode.value === "indexedDB" ? "✓ IndexedDB 持久化" : "IndexedDB 持久化"), 1),
                            _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-sm opacity-90 mt-1" }, "数据永久保存", -1))
                          ])
                        ], 10, _hoisted_18),
                        createBaseVNode("button", {
                          onClick: switchToLocalMode,
                          disabled: currentDataMode.value === "local" || currentDataMode.value === "loading",
                          class: normalizeClass([
                            "px-8 py-6 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center gap-3 shadow-lg transform",
                            currentDataMode.value === "local" ? "bg-gradient-to-br from-blue-500 to-cyan-600 text-white cursor-default ring-4 ring-blue-300/50 shadow-blue-500/50" : "bg-gradient-to-br from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white hover:shadow-gray-500/30 hover:scale-105",
                            currentDataMode.value === "loading" && "opacity-50 cursor-not-allowed"
                          ])
                        }, [
                          _cache[9] || (_cache[9] = createBaseVNode("i", { class: "pi pi-desktop text-3xl" }, null, -1)),
                          createBaseVNode("div", _hoisted_22, [
                            createBaseVNode("div", _hoisted_23, toDisplayString(currentDataMode.value === "local" ? "✓ 内存模式" : "内存模式（临时）"), 1),
                            _cache[8] || (_cache[8] = createBaseVNode("div", { class: "text-sm opacity-90 mt-1" }, "速度最快", -1))
                          ])
                        ], 10, _hoisted_21)
                      ])
                    ])
                  ])
                ], 2),
                createBaseVNode("div", {
                  class: normalizeClass(["transform transition-all duration-700", { "animate-slide-in-right": cardAnimation.value }])
                }, [
                  createBaseVNode("div", { class: "bg-gray-800/60 backdrop-blur-lg rounded-3xl border border-gray-700/50 overflow-hidden shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:border-purple-500/30" }, [
                    _cache[18] || (_cache[18] = createBaseVNode("div", { class: "bg-gradient-to-r from-purple-500/30 to-indigo-500/30 px-8 py-6 border-b border-gray-700/50 relative overflow-hidden" }, [
                      createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 opacity-50" }),
                      createBaseVNode("div", { class: "relative z-10" }, [
                        createBaseVNode("h2", { class: "text-3xl font-bold text-white flex items-center gap-4" }, [
                          createBaseVNode("div", { class: "p-3 bg-purple-500/30 rounded-2xl shadow-lg" }, [
                            createBaseVNode("i", { class: "pi pi-folder text-purple-400 text-2xl" })
                          ]),
                          createTextVNode(" 数据管理中心 ")
                        ]),
                        createBaseVNode("p", { class: "text-gray-200 mt-3 text-lg" }, "管理应用数据，导入导出设置，监控存储状态和性能指标")
                      ])
                    ], -1)),
                    createBaseVNode("div", { class: "p-8" }, [
                      createBaseVNode("div", { class: "space-y-8" }, [
                        createBaseVNode("div", null, [
                          _cache[13] || (_cache[13] = createBaseVNode("h3", { class: "text-2xl font-bold text-white mb-6 flex items-center gap-3" }, [
                            createBaseVNode("div", { class: "p-2 bg-indigo-500/30 rounded-xl" }, [
                              createBaseVNode("i", { class: "pi pi-cog text-indigo-400 text-xl" })
                            ]),
                            createTextVNode(" 设置管理 ")
                          ], -1)),
                          createBaseVNode("div", { class: "flex flex-wrap gap-4" }, [
                            createBaseVNode("button", {
                              onClick: exportSettings,
                              class: "px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-2xl transition-all duration-300 flex items-center gap-3 font-semibold text-lg shadow-lg hover:shadow-purple-500/30 hover:scale-105 transform"
                            }, _cache[11] || (_cache[11] = [
                              createBaseVNode("i", { class: "pi pi-download text-lg" }, null, -1),
                              createTextVNode(" 导出设置 ")
                            ])),
                            createBaseVNode("button", {
                              onClick: importSettings,
                              class: "px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl transition-all duration-300 flex items-center gap-3 font-semibold text-lg shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transform"
                            }, _cache[12] || (_cache[12] = [
                              createBaseVNode("i", { class: "pi pi-upload text-lg" }, null, -1),
                              createTextVNode(" 导入设置 ")
                            ]))
                          ])
                        ]),
                        createBaseVNode("div", null, [
                          _cache[17] || (_cache[17] = createBaseVNode("h3", { class: "text-2xl font-bold text-white mb-6 flex items-center gap-3" }, [
                            createBaseVNode("div", { class: "p-2 bg-cyan-500/30 rounded-xl" }, [
                              createBaseVNode("i", { class: "pi pi-database text-cyan-400 text-xl" })
                            ]),
                            createTextVNode(" 数据管理 ")
                          ], -1)),
                          createBaseVNode("div", { class: "flex flex-wrap gap-4" }, [
                            createBaseVNode("button", {
                              onClick: exportData,
                              class: "px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-2xl transition-all duration-300 flex items-center gap-3 font-semibold text-lg shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transform"
                            }, _cache[14] || (_cache[14] = [
                              createBaseVNode("i", { class: "pi pi-file-export text-lg" }, null, -1),
                              createTextVNode(" 导出数据 ")
                            ])),
                            createBaseVNode("button", {
                              onClick: clearCache,
                              class: "px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-2xl transition-all duration-300 flex items-center gap-3 font-semibold text-lg shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transform"
                            }, _cache[15] || (_cache[15] = [
                              createBaseVNode("i", { class: "pi pi-refresh text-lg" }, null, -1),
                              createTextVNode(" 清空缓存 ")
                            ])),
                            createBaseVNode("button", {
                              onClick: clearAllData,
                              class: "px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-2xl transition-all duration-300 flex items-center gap-3 font-semibold text-lg shadow-lg hover:shadow-red-500/30 hover:scale-105 transform"
                            }, _cache[16] || (_cache[16] = [
                              createBaseVNode("i", { class: "pi pi-trash text-lg" }, null, -1),
                              createTextVNode(" 清空所有数据 ")
                            ]))
                          ])
                        ])
                      ])
                    ])
                  ])
                ], 2),
                createBaseVNode("div", {
                  class: normalizeClass(["transform transition-all duration-900", { "animate-slide-in-up": cardAnimation.value }])
                }, [
                  createBaseVNode("div", _hoisted_24, [
                    _cache[24] || (_cache[24] = createBaseVNode("div", { class: "bg-gradient-to-r from-green-500/30 to-teal-500/30 px-8 py-6 border-b border-gray-700/50 relative overflow-hidden" }, [
                      createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20 opacity-50" }),
                      createBaseVNode("div", { class: "relative z-10" }, [
                        createBaseVNode("h2", { class: "text-3xl font-bold text-white flex items-center gap-4" }, [
                          createBaseVNode("div", { class: "p-3 bg-green-500/30 rounded-2xl shadow-lg" }, [
                            createBaseVNode("i", { class: "pi pi-info-circle text-green-400 text-2xl" })
                          ]),
                          createTextVNode(" 系统信息 ")
                        ]),
                        createBaseVNode("p", { class: "text-gray-200 mt-3 text-lg" }, "查看应用版本、运行环境和技术信息详情")
                      ])
                    ], -1)),
                    createBaseVNode("div", _hoisted_25, [
                      createBaseVNode("div", _hoisted_26, [
                        _cache[23] || (_cache[23] = createBaseVNode("div", { class: "space-y-4" }, [
                          createBaseVNode("div", { class: "flex justify-between items-center p-5 bg-gray-700/40 rounded-2xl border border-gray-600/40 hover:border-gray-500/60 transition-all duration-300 hover:scale-105 transform" }, [
                            createBaseVNode("span", { class: "text-gray-300 font-semibold text-lg" }, "应用版本"),
                            createBaseVNode("span", { class: "text-white font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" }, "v1.1.0")
                          ]),
                          createBaseVNode("div", { class: "flex justify-between items-center p-5 bg-gray-700/40 rounded-2xl border border-gray-600/40 hover:border-gray-500/60 transition-all duration-300 hover:scale-105 transform" }, [
                            createBaseVNode("span", { class: "text-gray-300 font-semibold text-lg" }, "运行环境"),
                            createBaseVNode("span", { class: "text-white font-bold text-xl" }, "Electron")
                          ])
                        ], -1)),
                        createBaseVNode("div", _hoisted_27, [
                          createBaseVNode("div", _hoisted_28, [
                            _cache[19] || (_cache[19] = createBaseVNode("span", { class: "text-gray-300 font-semibold text-lg" }, "数据模式", -1)),
                            createBaseVNode("span", {
                              class: normalizeClass([
                                "flex items-center gap-3 font-bold text-xl",
                                connectionStatus.value.indexedDB ? "text-green-400" : connectionStatus.value.local ? "text-blue-400" : "text-gray-400"
                              ])
                            }, [
                              connectionStatus.value.loading ? (openBlock(), createElementBlock("i", _hoisted_29)) : connectionStatus.value.indexedDB ? (openBlock(), createElementBlock("i", _hoisted_30)) : (openBlock(), createElementBlock("i", _hoisted_31)),
                              createTextVNode(" " + toDisplayString(connectionStatus.value.indexedDB ? "IndexedDB" : connectionStatus.value.local ? "本地内存" : "检测中..."), 1)
                            ], 2)
                          ]),
                          _cache[20] || (_cache[20] = createBaseVNode("div", { class: "flex justify-between items-center p-5 bg-gray-700/40 rounded-2xl border border-gray-600/40 hover:border-gray-500/60 transition-all duration-300 hover:scale-105 transform" }, [
                            createBaseVNode("span", { class: "text-gray-300 font-semibold text-lg" }, "构建时间"),
                            createBaseVNode("span", { class: "text-white font-bold text-xl" }, "2025/12/18")
                          ], -1))
                        ]),
                        createBaseVNode("div", _hoisted_32, [
                          createBaseVNode("div", _hoisted_33, [
                            _cache[21] || (_cache[21] = createBaseVNode("span", { class: "text-gray-300 font-semibold text-lg" }, "最后更新", -1)),
                            createBaseVNode("span", _hoisted_34, toDisplayString(dataStats.value.lastUpdate.split(" ")[1] || "刚刚"), 1)
                          ]),
                          _cache[22] || (_cache[22] = createBaseVNode("div", { class: "flex justify-between items-center p-5 bg-gray-700/40 rounded-2xl border border-gray-600/40 hover:border-gray-500/60 transition-all duration-300 hover:scale-105 transform" }, [
                            createBaseVNode("span", { class: "text-gray-300 font-semibold text-lg" }, "技术栈"),
                            createBaseVNode("span", { class: "text-white font-bold text-xl bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent" }, "Vue 3 + TS")
                          ], -1))
                        ])
                      ])
                    ])
                  ])
                ], 2)
              ])
            ])
          ]),
          _: 1,
          __: [25]
        })
      ]);
    };
  }
});
const SettingsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f6cdeca1"]]);
export {
  SettingsPage as default
};
