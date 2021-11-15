'use strict';

const processArray = function (items, fn) {
  const result = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    result.push(fn(item));
  }

  return result;
};

const numbers = [ 1, 2, 3, 4, 5 ];

const squares = processArray(numbers, n => n ** 2);
console.log('squares:', squares);

const numsPlusOne = processArray(numbers, n => n + 1);
console.log('numsPlusOne:', numsPlusOne);