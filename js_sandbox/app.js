// MAPS = key-value pairs – can use ANY type as a key or value


const map1 = new Map();

// Set Keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key 
console.log(map1.get(key1), map1.get(key2), map1.get(key3));
// > Value of key1 Value of key2 Value of key3

// Count values
console.log(map1.size);
// > 3

