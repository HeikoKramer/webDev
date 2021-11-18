'use strict';

const NetworkConnection = require('./NetworkConnection');

const networkConnection = new NetworkConnection({ host: 'www.heikokraemer.de', port: 443 });

const onOnline = function () {
  console.log('Online :)');
};

const onOffline = function () {
  console.log('Offline :(');
};

networkConnection.on('online', onOnline);
networkConnection.on('offline', onOffline);

setTimeout(() => {
  networkConnection.removeListener('online', onOnline);
  networkConnection.removeListener('offline', onOffline);
}, 30 * 1000);