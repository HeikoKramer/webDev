// Number
const num1 = 5;
const num2 = new Number(5);

console.log(num1);
console.log(typeof(num1));

console.log(num2);
console.log(typeof(num2));

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1);
// > true
console.log(typeof(bool1));
// boolean

console.log(bool2);
// > Boolean { true }
console.log(typeof(bool2));
//  > object

// Function
const getSum1 = function(x, y){
  return x + y;
}
const getSum2 = new Function('x', 'y', 'return x + y');

console.log(getSum1(1,1));
// > 2
console.log(getSum1);
// > function getSum1(x, y)

console.log(getSum2(2,1));
// > 3
console.log(getSum2);
// > function getSum2(x, y)

// Object
const john1 = {name: "John"};
const john2 = new Object({name: "John"});

console.log(john1);
// > Object { name: "John" }
console.log(john2);
// > Object { name: "John" }

// Array
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr1);
// > Array(4) [ 1, 2, 3, 4 ]
console.log(typeof(arr1));
// object

console.log(arr2);
// > Array(4) [ 1, 2, 3, 4 ]
console.log(typeof(arr2));
//  > object

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+')

console.log(re1);
// > /\w+/

console.log(re2);
// > /\w+/