// PRIMITIVE
console.log("– P R I M I T I V E –");
// String
const name = "John Doe";
console.log("datatype of name: " + typeof name);
// Number
const age = 45;
const quotedAge = "45"; // <-- quotes around numbers convert them into strings
console.log("datatype of age: " + typeof age);
console.log("datatype of quotedAge: " + typeof quotedAge);
// Boolean
const hasKids = true;
console.log("datatype of hasKids: " + typeof hasKids);
// Null
const car = null;
console.log("datatype of car: " + typeof car);
// Undefined
let test;
console.log("datatype of test: " + typeof test);
// Symbol
const sym = Symbol();
console.log("datatype of sym: " + typeof sym);

// REFERENCE TYPES
console.log("– R E F E R E N C E –");
// Array
const hobbies = ["movies", "music"];
console.log("datatype of hobbies: " + typeof hobbies);
// Object literal
const address = {
  city: "Boston",
  state: "MA",
};
console.log("datatype of address: " + typeof address);
// Date
const today = new Date();
console.log("datatype of today: " + typeof today);
