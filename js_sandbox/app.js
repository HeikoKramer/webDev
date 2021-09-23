// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol();
const key3 = Symbol();
const key4 = Symbol();

const myObj = {};

myObj[KEY1] = 'Prop1'; // <-- Symbol
myObj[KEY2] = 'Prop2'; // <-- Symbol
myObj.key3  = 'Prop3'; // <-- no symbol, only a simple property
myObj.key4  = 'Prop4'; // <-- no symbol, only a simple property

// // Symbols
// console.log(myObj[KEY1]);
// // > Prop1
// console.log(myObj[KEY2]);
// // > Prop2

// // Cant address a symbol with dot notation
// console.log(myObj.KEY1);
// // > undefined

// // Properties
// console.log(myObj.key3);
// // > Prop3
// console.log(myObj.key4);
// // > Prop4

// Symbols are not enumerable in for...in
// for(let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`);
// }

console.log(JSON.stringify({key: 'prop'}));              // <-- property
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'})); // <-- symbol
