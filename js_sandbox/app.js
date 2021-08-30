// Object.prototype
// Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName    = firstName;
  this.lastName     = lastName;  
  this.birthday     = new Date(dob);
  // this.calculateAge = function(){
  //   const diff    = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Calculate age
Person.prototype.calculateAge = function(){
  const diff    = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const mary = new Person('Mary', 'Meyer', '1998-4-23');
const john = new Person('John', 'Smith', '1990-8-12');

console.log(mary.calculateAge());
// > 23
console.log(john.calculateAge());
// > 31