const { ipcMain,app, BrowserWindow, Menu } = require("electron");
const path = require("path");
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false, 
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile(path.join(__dirname, "./renderer/index.html"));
  Menu.setApplicationMenu(null);
}



app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on('close-window', (event) => {
  BrowserWindow.getFocusedWindow().close();
});

ipcMain.on('minimize-window', (event) => {
  BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.on('maximize-restore-window', (event) => {
  const window = BrowserWindow.getFocusedWindow();
  if (window.isMaximized()) {
    window.unmaximize();
  } else {
    window.maximize();
  }
});
