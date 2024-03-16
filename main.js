const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1100,
        height: 800,
        icon: path.join(__dirname, '/public/images/logo.svg'), // Specify the path to your icon file
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // Load your application URL
    mainWindow.loadURL('http://127.0.0.1:8000');
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
