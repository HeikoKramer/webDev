// SET - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('a string');
set1.add({name: 'John'});
set1.add(true);

console.log(set1);
// > Set(4) [ 100, "a string", {…}, true ]

// Get count
console.log(set1.size);