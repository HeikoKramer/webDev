// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1);
// > Symbol()

console.log(sym2);
// > Symbol("sym2")

console.log(typeof sym1);
// > symbol 

console.log(Symbol() === Symbol());
// > false
console.log(Symbol('42') === Symbol('42'));
// > false