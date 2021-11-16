'use strict';

const fs   = require('fs'),
      path = require('path');

const fileName = path.join(__dirname, 'foobar.txt');

try {
  fs.readFile(fileName, 'utf8', (err, content) => {
    console.log('content:', content);
  });
} catch (ex) {
  console.log('### ERROR:', ex.message);
}
