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

// ({ a,b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500});

// console.log(a,b);
// // > 100 200
// console.log(rest);
// > Object { c: 300, d: 400, e: 500 }

// Array Destructuring

const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;

console.log(person1, person2, person3);
// > John Beth Mike 

console.log(person1);