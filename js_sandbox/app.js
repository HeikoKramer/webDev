// const sayHello = function() {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// }

// const sayHello = () => console.log('Hello');

// const sayHello = () => 'Hello';

// const sayHello = function() {
//   return 'Hello';
// }

// const sayHello = () => ({ msg: 'Hello' });

// const sayHello = name => console.log(`Hello ${name}`);

// sayHello('Heiko');
// > Hello Heiko

// const sayHelloFull = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHelloFull('Heiko', 'Krämer');
// > Hello Heiko Krämer

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// const nameLengths = users.map((name) => {
//   return name.length;
// });

const nameLengths = users.map(name => name.length);

console.log(nameLengths);
