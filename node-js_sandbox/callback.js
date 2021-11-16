'use strict';

const add = function (left, right, callback) {
  const sum = left + right;

  setTimeout(() => {
    callback(null, sum); // <- give back null as error parameter
  }, 1 * 1000);
};


add(23, 42, (err, sum) => {
  if (err) {
    return console.log(err);
  }
  console.log(sum);
  // > 65
});

