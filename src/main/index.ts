import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { ipGeoLocationService } from './ipGeoLocationService'

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 1000,
    minWidth: 1400,
    minHeight: 900,
    show: false,
    autoHideMenuBar: true,
    title: 'FastWLAT - Web Log Analysis Tool v1.1.0',
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMain.on('ping', () => console.log('pong'))

  ipcMain.handle('ip-geo:getLocation', async (_e, ip: string) => {
    return ipGeoLocationService.getIPLocation(ip)
  })
  
  ipcMain.handle('ip-geo:batchGetLocations', async (_e, ips: string[]) => {
    const results = await ipGeoLocationService.batchGetIPLocations(ips)
    return Array.from(results.entries())
  })
  
  ipcMain.handle('ip-geo:getStatus', async () => {
    return ipGeoLocationService.getServiceStatus()
  })
  
  ipcMain.handle('ip-geo:clearCache', async () => {
    return ipGeoLocationService.clearCache()
  })
  
  ipcMain.handle('ip-geo:reinitialize', async () => {
    return ipGeoLocationService.reinitialize()
  })

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
