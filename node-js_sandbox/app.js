'use strict'

const fs = require('fs');

fs.readdir('.', (err, entries) => {
  console.log(entries);
});

fs.readFile('package.json', 'utf8', (err, packageJson) => {
  if (err) {
    return console.log(err.message);
  }
  const configuration = JSON.parse(packageJson);
  console.log(configuration.version);
});