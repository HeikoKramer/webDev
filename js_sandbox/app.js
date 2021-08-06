// Create some arrays
const mixed = [22, "Heĺlo", true, undefined, null, { a: 1, b: 1 }, new Date()];
const numbers2 = [22, 67, 24, 77, 14];

const fruits = ["Orange", "Pear", "Banana", "Apple"];

// Sorting arrays
val = fruits.sort();

console.log(val);
// > ["Apple", "Banana", "Orange", "Pear"]

//  Sorting number arrays
const numbers = [42, 56, 33, 23, 44, 36, 5];

val = numbers.sort(function (x, y) {
  return x - y;
});

console.log(val);
// > [5, 23, 33, 36, 42, 44, 56]

val = numbers.sort(function (x, y) {
  return y - x;
});

console.log(val);
// > [5, 23, 33, 36, 42, 44, 56]
