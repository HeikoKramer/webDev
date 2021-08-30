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

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Gold Premium Plus');

console.log(john.greetings());
// > Hello there John Doe

console.log(Customer.getMembershipCost());
// > 500