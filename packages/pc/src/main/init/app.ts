import path from 'node:path'
import { app as electronApp, shell, BrowserWindow, ipcMain } from 'electron'
import icon from '../../../resources/icon.png?asset'

const isEnvDevelopment = process.env.NODE_ENV === 'development',
  isEnvProduction = process.env.NODE_ENV === 'production'

interface IAntiAppOptions {
  width: number
  height: number
}

const defaultAppOptions = {
  width: 1180,
  height: 680
}

class AntiApp {
  options: IAntiAppOptions
  mainWindow?: BrowserWindow
  constructor(options?: IAntiAppOptions) {
    this.options = Object.assign({}, defaultAppOptions, options)
    console.log(this.options)
  }
  createWindow(): void {
    const mainWindow = (this.mainWindow = new BrowserWindow({
      titleBarStyle: 'hidden',
      width: this.options.width,
      height: this.options.height,
      show: false,
      frame: false,
      icon: process.platform === 'linux' ? icon : undefined,
      webPreferences: {
        preload: path.join(__dirname, '../preload/index.js'),
        sandbox: false
      }
    }))
    mainWindow.on('ready-to-show', () => mainWindow.show())
    mainWindow.webContents.openDevTools()
    mainWindow.webContents.setWindowOpenHandler((details) => {
      shell.openExternal(details.url)
      return { action: 'deny' }
    })
    if (isEnvDevelopment && process.env['ELECTRON_RENDERER_URL']) {
      mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
    } else {
      mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'))
    }
  }

  initIpcMainEvent(): void {
    ipcMain.on('ping', () => {
      console.log('pong')
    })
  }

  async init(): Promise<void> {
    await electronApp.whenReady()
    this.initIpcMainEvent()
    this.createWindow()
    electronApp.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        this.createWindow()
      }
    })
    electronApp.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        electronApp.quit()
      }
    })
  }
}

export default AntiApp
