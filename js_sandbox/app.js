// Person constructor
function Person(name) {
  this.name = name;
}

const brad = new Person('Brad');
const john = new Person('John');

console.log(this);

