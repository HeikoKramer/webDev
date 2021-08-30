const personPrototypes = {
  greeting: function(){
    return `Hello ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName){
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName  = 'Miller';
mary.age       = 30;

mary.getsMarried('Thompson');
console.log(mary.greeting());
// > Hello Mary Thompson

const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName:  {value: 'Traversy'},
  age:       {value: 36}
});

console.log(brad.greeting());
// > Hello Brad Traversy