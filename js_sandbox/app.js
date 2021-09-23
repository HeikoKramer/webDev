// Destructuring Assignment

// let a, b;

// // Rest pattern
// [a, b, ...rest] = [100, 200, 300, 400, 500];

// console.log(a);
// // > 100
// console.log(b);
// // > 200
// console.log(rest);
// // > Array(3) [ 300, 400, 500 ]

({ a,b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500});

console.log(a,b);
// > 100 200
console.log(rest);