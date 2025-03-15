import { app, WebContents, RenderProcessGoneDetails, systemPreferences } from 'electron'
import Constants from './utils/Constants'
import { createErrorWindow, createMainWindow } from './MainRunner'

let mainWindow
let errorWindow

app.on('ready', async () => {
  if (Constants.IS_DEV_ENV) {
    import('./index.dev')
  }

  // Disable special menus on macOS by uncommenting the following, if necessary
  /*
  if (Constants.IS_MAC) {
    systemPreferences.setUserDefault('NSDisabledDictationMenuItem', 'boolean', true)
    systemPreferences.setUserDefault('NSDisabledCharacterPaletteMenuItem', 'boolean', true)
  }
  */

  // allow autoplay
  app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required')
  app.commandLine.appendSwitch('disable-features', 'AudioServiceOutOfProcess')

  // allow background audio playback
  app.commandLine.appendSwitch('allow-background-audio-playback')

  mainWindow = await createMainWindow()
})

app.on('activate', async () => {
  if (!mainWindow) {
    mainWindow = await createMainWindow()
  }
})

app.on('window-all-closed', () => {
  mainWindow = null
  errorWindow = null

  if (!Constants.IS_MAC) {
    app.quit()
  }
})

app.on(
  'render-process-gone',
  (event: Event, webContents: WebContents, details: RenderProcessGoneDetails) => {
    errorWindow = createErrorWindow(errorWindow, mainWindow, details)
  }
)

process.on('uncaughtException', () => {
  errorWindow = createErrorWindow(errorWindow, mainWindow)
})
