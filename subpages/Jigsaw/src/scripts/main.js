const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

app.on("ready", function(){
  mainWindow = new BrowserWindow({
    icon: "../../assets/icons/code_cube.ico",
    titleBarStyle: 'hidden',
    minWidth: 640,
    minHeight: 480,
		webPreferences: {
			webgl: true,
			webSecurity: true,
			nodeIntegration: true,
			contextIsolation: false,
			enableRemoteModule: true
		}
  });
  mainWindow.openDevTools();
  mainWindow.loadFile('src/pages/main.html')
})