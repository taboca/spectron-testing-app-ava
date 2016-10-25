import test from 'ava';
import {Application} from 'spectron';
var electron= require('electron-prebuilt');
var Promise = require('es6-promise').Promise;

test.beforeEach(async t => {

  t.context.app = new Application({ 
           path: electron, args:['/Users/taboca/Desktop/all/05_clientes/2016/pti/latinoware-dev/electron/50_testing_electron_ava']});

  await t.context.app.start();
});

test.afterEach.always(async t => {
  await t.context.app.stop();
});

test(async t => {
  const app = t.context.app;
  await app.client.waitUntilWindowLoaded();

  const win = app.browserWindow;
  console.log('win c: ' , app.client.getWindowCount());
  t.is(await app.client.getWindowCount(), 1);
  t.false(await win.isMinimized());
  t.false(await win.isDevToolsOpened());
  t.true(await win.isVisible());
  t.true(await win.isFocused());

  const {width, height} = await win.getBounds();
  t.true(width > 0);
  t.true(height > 0);
});


