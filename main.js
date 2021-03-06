const electron = require('electron');
const url = require('url');
const path = require('path');
const {app, BrowserWindow} = electron;

let mainWindow;

// Listening for app
app.on('ready', function(){
    // Delete default menu
    electron.app.on('browser-window-created',function(e,window) {
        window.setMenu(null);
    });
    // New window
    mainWindow = new BrowserWindow();
    // Put html in window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol:'file:',
        slashes: true
    }));
});

// Close app when exited
app.on('window-all-closed', () => {
    app.quit()
})