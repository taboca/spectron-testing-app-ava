const {app, BrowserWindow} = require('electron');

let win;

app.on('ready', () => {

  win = new BrowserWindow({
      height: 480,
      width: 640,
  });

  win.loadURL('file://' + __dirname + '/browser.html');

});



