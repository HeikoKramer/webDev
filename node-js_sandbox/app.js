'use strict'

const fs = require('fs');

fs.readdir('.', (err, entries) => {
  console.log(entries);
});

fs.readFile('package.json', 'utf8', (err, packageJson) => {
  console.log(packageJson);
});