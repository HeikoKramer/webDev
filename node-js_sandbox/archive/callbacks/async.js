'use strict';

const fs   = require('fs'),
      path = require('path');

const fileName = path.join(__dirname, 'foobar.txt');


  fs.readFile(fileName, 'utf8', (err, content) => {
    if (err) {
      return console.log(err.message);
    }
    console.log('content:', content);
  });
