// SET - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('a string');
set1.add({name: 'John'});
set1.add(true);

// Check for values
console.log(set1.has(100));
// > true
console.log(set1.has(50 + 50)); // <-- expression that equals 100
// > true
console.log(set1.has(200));
// > false

console.log(set1.has({name: 'John'}));