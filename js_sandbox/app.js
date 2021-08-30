class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName  = lastName;
  }

  greetings() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName); 

    this.phone      = phone;
    this.membership = membership;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Gold Premium Plus');

console.log(john.greetings());