const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true
  });

  win.loadURL("https://rbc-easy.vercel.app/");
}

app.whenReady().then(createWindow);
