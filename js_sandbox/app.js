// SET - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('a string');
set1.add({name: 'John'});
set1.add(true);

// Iterating through sets

// For..of
for(let item of set1) {
  console.log(item);
}

// ForEach Loop
set1.forEach((value) => {
  console.log(value);
})