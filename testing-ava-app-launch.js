import test from 'ava';
import {Application} from 'spectron';
var electron= require('electron-prebuilt');
var Promise = require('es6-promise').Promise;

test('foo', t => {
    t.pass();
});

test('bar', async t => {
    const bar = new Promise((resolve, reject) => { 
       
        var app = new Application({ 
           path: electron, args:['/Users/taboca/Desktop/all/05_clientes/2016/pti/latinoware-dev/electron/40_testing_app']});
        app.start();
 
        resolve('bar');
	
    });

    t.is(await bar, 'bar');
});


