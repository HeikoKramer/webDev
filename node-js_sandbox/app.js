'use strict'

const fs = require('fs'),
      path = require('path');

fs.readdir(__dirname, (err, entries) => {
  console.log(entries);
});

fs.readFile(path.join(__dirname, 'package.json'), 'utf8', (err, packageJson) => {
  if (err) {
    return console.log(err.message);
  }
  const configuration = JSON.parse(packageJson);
  console.log(configuration.version);
});
