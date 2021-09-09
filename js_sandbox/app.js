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

const sayHello = name => console.log(`Hello ${name}`);

sayHello('Heiko');

const sayHelloFull = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

sayHelloFull('Heiko', 'Krämer');
