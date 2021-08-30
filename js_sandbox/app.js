class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName  = lastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person('Mary', 'Miller');

// console.log(mary.addNumbers(1,2));
// > Uncaught TypeError: mary.addNumbers is not a function

console.log(Person.addNumbers(1,2));