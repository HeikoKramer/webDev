'use strict';

const NetworkConnection = require('./NetworkConnection');

const networkConnection = new NetworkConnection({ host: 'www.heikokraemer.de', port: 443 });

networkConnection.on('online', () => {
  console.log('Online :)');
});

networkConnection.on('offline', () => {
  console.log('Offline :(');
});