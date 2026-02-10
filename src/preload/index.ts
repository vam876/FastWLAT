import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const api = {
  ipGeo: {
    getLocation: (ip: string) => ipcRenderer.invoke('ip-geo:getLocation', ip),
    batchGetLocations: (ips: string[]) => ipcRenderer.invoke('ip-geo:batchGetLocations', ips),
    getStatus: () => ipcRenderer.invoke('ip-geo:getStatus'),
    clearCache: () => ipcRenderer.invoke('ip-geo:clearCache'),
    reinitialize: () => ipcRenderer.invoke('ip-geo:reinitialize')
  }
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
