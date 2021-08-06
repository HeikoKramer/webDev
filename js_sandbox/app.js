const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 30,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL",
  },
  getBirthYear: function () {
    return 1987;
  },
};

let val;
val = person;

// Get specific value
val = person.firstName;
console.log(val);
val = person.age;
console.log(val);
val = person.hobbies[1];
console.log(val);
val = person.address;
console.log(val);
val = person.address.city;
console.log(val);
val = person.getBirthYear();
console.log(val);
