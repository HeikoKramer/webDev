// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName  = lastName;  
}

// Greeting
Person.prototype.greeting = function(){
  return ` Hello ${this.firstName} ${this.lastName}!`;
}

const person1 = new Person('Mary', 'Meyer');

console.log(person1.greeting());
// > Hello Mary Meyer!


// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone      = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make Customer.prototype return Customer()
Customer.prototype.constructor = Customer;

const customer1 = new Customer('John', 'Smith', '555-555-5555', 'Gold');

console.log(customer1);

console.log(customer1.greeting());
// > Hello John Smith!