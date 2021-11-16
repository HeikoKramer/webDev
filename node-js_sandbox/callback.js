'use strict';

const add = function (left, right, callback) {
  const sum = left + right;

  callback(sum);
};

add(23, 42, sum => {
  console.log(sum);
  // > 65
});
