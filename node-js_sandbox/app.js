'use strict'

const fs = require('fs'),
      path = require('path');

const packageJson = require('./package');

const filename = path.join(__dirname, 'version.txt');

fs.writeFile(filename, packageJson.version, 'utf8', err => {
  if (err) {
    return console.log(err.message);
  }
  console.log(`${path.basename(filename)} successful created!`);
});