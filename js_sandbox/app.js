// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1);
// > Symbol()

console.log(sym2);
// > Symbol("sym2")

console.log(typeof sym1);