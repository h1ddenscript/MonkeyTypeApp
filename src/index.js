const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const config = require('./config')

const monkeyType = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    title: 'monkeytype',
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: config.get('theme').bgcolor,
      symbolColor: config.get('theme').caretcolor,
    },
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'src/preload.js'),
      devTools: config.get('appconfig').devtools,
    }
  });

  mainWindow.loadURL('https://monkeytype.com/')
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
};



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', monkeyType);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    monkeyType();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
