'use strict'

const fs = require('fs');

const entries = fs.readdirSync('.');
console.log(entries);
