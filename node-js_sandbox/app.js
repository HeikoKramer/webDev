'use strict';

const square = function (number) {
  return number ** 2;
};

const addOne = function (number) {
  return number + 1;
};

const processArray = function (items, fn) {
  const result = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    result.push(fn(item));
  }

  return result;
};

const numbers = [ 1, 2, 3, 4, 5 ];
console.log('numbers:', numbers);

const squares = processArray(numbers, square);
console.log('squares:', squares);

const numsPlusOne = processArray(numbers, addOne);
console.log('numsPlusOne:', numsPlusOne);