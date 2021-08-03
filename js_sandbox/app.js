const num1 = 100;
const num2 = 50;
let val;

// // Simple math with numbers
// val = num1 + num2;
// console.log(val);

// val = num1 * num2;
// console.log(val);

// val = num1 - num2;
// console.log(val);

// val = num1 / num2;
// console.log(val);

// val = num1 % num2;

//  Math Object
// val = Math.PI;

// downer = Math.floor(2.4);
// upper = Math.floor(2.5);

// console.log(downer);
// console.log(upper);

arr = [3, 45, 2, -23, 653, 11];

min = Math.min(3, 45, 2, -23, 653, 11);
max = Math.max(3, 45, 2, -23, 653, 11);
val = Math.min(...arr);

console.log("min: " + min);
console.log("max: " + max);
console.log("array min: " + val);
