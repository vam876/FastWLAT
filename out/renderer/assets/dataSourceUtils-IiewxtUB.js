import { u as useMemoryStore } from "./memoryStore-DY1yPL7M.js";
import { u as useIndexedDBStore } from "./indexedDBStore-vYrXL9Qh.js";
import { a2 as isIndexedDBMode, x as getCurrentDataMode } from "./index-FPjz1pj-.js";
async function getLogData() {
  const memoryStore = useMemoryStore();
  const indexedDBStore = useIndexedDBStore();
  let logs = [];
  if (isIndexedDBMode()) {
    console.log("[DataSourceUtils] Reading from IndexedDB");
    try {
      logs = await indexedDBStore.getAllLogEntries();
      console.log("[DataSourceUtils] IndexedDB returned:", logs.length, "entries");
    } catch (error) {
      console.warn("[DataSourceUtils] IndexedDB query failed, falling back to memory:", error);
      logs = memoryStore.logEntries || [];
    }
  } else {
    console.log("[DataSourceUtils] Reading from memory store");
    logs = memoryStore.logEntries || [];
  }
  console.log("[DataSourceUtils] Final logs count:", logs.length);
  console.log("[DataSourceUtils] Using data mode:", isIndexedDBMode() ? "IndexedDB" : "Memory");
  return logs;
}
function getCurrentDataModeLabel() {
  const currentMode = getCurrentDataMode();
  return currentMode === "indexedDB" ? "IndexedDB 持久化模式" : currentMode === "local" ? "内存模式（临时）" : "检测中...";
}
function getLogDataCount() {
  const memoryStore = useMemoryStore();
  if (isIndexedDBMode()) {
    return 0;
  } else {
    return memoryStore.logEntries?.length || 0;
  }
}
function getLogDataForComputed() {
  const memoryStore = useMemoryStore();
  if (isIndexedDBMode()) {
    return [];
  } else {
    return memoryStore.logEntries || [];
  }
}
export {
  getCurrentDataModeLabel as a,
  getLogDataCount as b,
  getLogDataForComputed as c,
  getLogData as g
};
