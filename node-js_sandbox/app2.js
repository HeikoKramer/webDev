'use strict';

process.on('uncaughtException', err => {
  console.log(`EXCEPTION: ${err.message}`);
});

throw new Error('Something went wrong.');

