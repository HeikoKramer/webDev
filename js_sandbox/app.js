// SET - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('a string');
set1.add({name: 'John'});
set1.add(true);

// Convert set to array
const setArr = Array.from(set1);
console.log(setArr);
// > Array(4) [ 100, "a string", {…}, true ]