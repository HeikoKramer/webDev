// Destructuring Assignment

let a, b;

// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

console.log(a);
// > 100
console.log(b);
// > 200

console.log(rest);