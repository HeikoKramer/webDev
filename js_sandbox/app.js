// Create some arrays
const fruits = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Heĺlo", true, undefined, null, { a: 1, b: 1 }, new Date()];

const numbers = [42, 56, 33, 23, 44, 36, 5];
const numbers2 = [22, 67, 24, 77, 14];

// Concatenate arrays
val = numbers.concat(numbers2);

console.log(val);
// > [5, 36, 44, 23, 33, 56, 42]
