const {app, BrowserWindow } = require('electron');

let win;

const startApp = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('./app/renderer/index.html')

    win.webContents.openDevTools();
}

app.whenReady()
    .then(startApp);

app.on('window-all-closed', () => {
    app.quit()
});

app.on('activate', () => {
    if(BrowserWindow.getActiveWindow().length===0){
        startApp()
    }
})