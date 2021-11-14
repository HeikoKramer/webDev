'use strict'

const fs = require('fs'),
      path = require('path');

console.log('Current file:', path.basename(__filename, '.js'));


// fs.readdir(__dirname, (err, entries) => {
//   console.log(entries);
//   // > [ 'app.js', 'archive', 'package.json' ]
// });

// fs.readFile(path.join(__dirname, 'package.json'), 'utf8', (err, packageJson) => {
//   if (err) {
//     return console.log(err.message);
//   }
//   const configuration = JSON.parse(packageJson);
//   console.log(configuration.version);
//   // > 0.0.0
// });