'use strict';

const fs   = require('fs'),
      path = require('path');

const fileName = path.join(__dirname, 'foobar.txt');

console.log('### 1');
fs.readFile(fileName, 'utf8', (err, content) => {
  console.log(content);
});
console.log('### 2');