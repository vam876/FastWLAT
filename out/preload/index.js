"use strict";
const electron = require("electron");
const preload = require("@electron-toolkit/preload");
const api = {
  ipGeo: {
    getLocation: (ip) => electron.ipcRenderer.invoke("ip-geo:getLocation", ip),
    batchGetLocations: (ips) => electron.ipcRenderer.invoke("ip-geo:batchGetLocations", ips),
    getStatus: () => electron.ipcRenderer.invoke("ip-geo:getStatus"),
    clearCache: () => electron.ipcRenderer.invoke("ip-geo:clearCache"),
    reinitialize: () => electron.ipcRenderer.invoke("ip-geo:reinitialize")
  }
};
if (process.contextIsolated) {
  try {
    electron.contextBridge.exposeInMainWorld("electron", preload.electronAPI);
    electron.contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = preload.electronAPI;
  window.api = api;
}
