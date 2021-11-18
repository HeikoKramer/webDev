'use strict';

process.on('SIGINT', () => {
  console.log(' Good bye ٩(^‿^)۶');
  process.exit(1);
});

setInterval(() => {
  console.log('Hello World!');
}, 2 * 1000);