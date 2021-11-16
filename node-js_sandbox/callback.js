'use strict';

const add = function (left, right, callback) {
  const sum = left + right;

  callback(sum);
};

console.log('### 1');
add(23, 42, sum => {
  console.log(sum);
  // > 65
});
console.log('### 2');
