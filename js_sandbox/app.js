class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName  = lastName;
    this.birthday  = new Date(dob);
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = new Person('Mary', 'Miller', '1980-11-13');

console.log(mary);
// > Object { firstName: "Mary", lastName: "Miller" }
console.log(mary.greeting());
// > Hello Mary Miller

console.log(mary.birthday);
// > Date Thu Nov 13 1980 01:00:00 GMT+0100 (Central European Standard Time)
console.log(mary.calculateAge());
// > 40

mary.getsMarried('Bush');
console.log(mary.greeting());