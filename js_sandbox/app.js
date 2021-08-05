// Create some arrays
const numbers2 = new Array(22, 67, 24, 77, 14);
const fruits = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Heĺlo", true, undefined, null, { a: 1, b: 1 }, new Date()];

const numbers = [999, 42, 56, 33, 23, 44, 36, 5, 777];

//  take from end of an array
numbers.pop();
console.log(numbers);
// > [999, 42, 56, 33, 23, 44, 36, 5, 777]

//  take from front of an array
numbers.shift();
console.log(numbers);
// > [42, 56, 33, 23, 44, 36, 5]
