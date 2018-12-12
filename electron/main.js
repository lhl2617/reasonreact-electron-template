const {app, BrowserWindow} = require('electron');

let wnd;

const create = function () {
    wnd = new BrowserWindow({width : 800, height : 600});
    wnd.loadFile("index.html");
    wnd.on('closed', () => {
        wnd = null;
    });
};

app.on('ready', create);

app.on('windows-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (wnd === null) {
        create();
    }
});