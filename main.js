import { app, BrowserWindow } from 'electron';
import path from 'path';

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1100,
        height: 800, // Specify the path to your icon file
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // Load your application URL
    mainWindow.loadURL('http://gbs-mini-mart.com/');
    // mainWindow.loadURL('http://localhost/public'); 
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    if (mainWindow === null) createWindow();
});
