var electron= require('electron-prebuilt');
var spectron = require('spectron');
var Promise = require('es6-promise').Promise;

var app = new spectron.Application({ 
   path: electron, args:['/Users/taboca/Desktop/all/05_clientes/2016/pti/latinoware-dev/electron/40_testing_app']});

app.start();
 

