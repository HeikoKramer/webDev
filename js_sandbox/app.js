// SET - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('a string');
set1.add({name: 'John'});
set1.add(true);

console.log(set1);
// > Set(4) [ 100, "a string", {…}, true ]

set1.add(100); // <-- already exists in out set

set1.add(200);
set1.add(300);
set1.add(400);

console.log(set1);
// > [ 100, "a string", {…}, true, 200, 300, 400 ]

const set2 = new Set([1, true, 'string']);
console.log(set2);