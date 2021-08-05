// Create some arrays
const numbers2 = new Array(22, 67, 24, 77, 14);
const fruits = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Heĺlo", true, undefined, null, { a: 1, b: 1 }, new Date()];

const numbers = [42, 56, 33, 23, 44, 36, 5];

//  splice out certain valuey
numbers.splice(1, 1);
console.log(numbers);
// > [42, 33, 23, 44, 36, 5]

//  splice out valuey chain
numbers.splice(1, 3);
console.log(numbers);
// > [42, 36, 5]
