'use strict';

const numbers = [ 1, 2, 3, 4, 5 ];

const squares = numbers.map(n => n ** 2);
console.log('squares:', squares);

const numsPlusOne = numbers.map(n => n + 1);
console.log('numsPlusOne:', numsPlusOne);

const words = [ 'the', 'quick', 'brown', 'fox' ];
const wordObjects = words.map(w => ({ word: w, length: w.length}));
console.log('wordObjects:', wordObjects);

const wordLengths = words.map(w => w.length);
console.log('wordLengths:', wordLengths);

