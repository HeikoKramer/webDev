# Object Oriented JavaScript

*This document is an extension to my [JavaScript Notes 2](https://github.com/HeikoKramer/webDev/blob/main/javascript_notes_2.md). <br>
I'm writing these notes while taking Brad Traversy's [Modern JavaScript From The Beginning](https://subscription.packtpub.com/video/web-development/9781789539509/p1) course on packthub.com* 

## Constructors & the "this" keyword
An **object literal** like the one below is fine when you want to create only a single object. <br>

```js
const brad = {
  name: 'Brad',
  age: 30
}

console.log(brad);
console.log(brad.age);
```

But if you want to create **multiple objects of the same type** or get into things like **inheritance**, you want to create a **constructor**. <br>
Constructors should start with a **capital letter**. <br>
So this few lines of code are a **Person constructor**, with a **property of name**: <br> 

```js
// Person constructor
function Person() {
  this.name = 'Brad'
}

const brad = new Person();
const john = new Person();

console.log(brad);
// Person {name: "Brad"}

console.log(john);
// Person {name: "Brad"}
```

We can create as many **persons** as we like now, but as we hard-coded the **name property**, they'll all called *Brad*. <br>
<br>
To change that, let's exchange the hard-coded name value with an **argument of name**. <br>
Now we can pass over a string to our constructor and it places it as the **name value** for our **person**: <br>

```js
// Person constructor
function Person(name) {
  this.name = name;
}

const brad = new Person('Brad');
const john = new Person('John');

console.log(brad);
// Person {name: "Brad"}

console.log(john);
// Person {name: "John"}
```

The **this** keyword is very important. <br>
In our example, it **referes to the current instance** of the object, it pertains to the **function scope**. <br>
So when we `console.log(this)` within the **function scope**, we get a log entry **for each person** we initiating. <br>  

```js
// Person constructor
function Person(name) {
  this.name = name;
  console.log(this);
}

const brad = new Person('Brad');
// Person {name: "Brad"}

const john = new Person('John');
// Person {name: "John"}
```

If we `console.log(this)` **outside** the function scope, we'll get the window object. <br>

```js
// Person constructor
function Person(name) {
  this.name = name;
}

const brad = new Person('Brad');
const john = new Person('John');

console.log(this);
```

![console-log_this](/images/console-log_this.png)

You can specify additional **properties and arguments** in your constructor: <br>

```js
// Person constructor
function Person(name, age) {
  this.name = name;
  this.age  = age;
}

const brad = new Person('Brad', 36);
const john = new Person('John', 22);

console.log(john.age);
// > 22
```

### Adding a method
A function in an object constructor becomes a **method** of that object. <br>
See our example below, where we calculate the age of the person with the **calculateAge** function. <br>
You can now call that function for any person, simply by referencing it via dot notation: <br>

```js
// Person constructor
function Person(name, dob) {
  this.name            = name;
  this.birthday        = new Date(dob);
  this.calculateAge    = function(){
    const diff    = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const brad = new Person('Brad', '1981-9-10');

console.log(brad.calculateAge());
// > 39
```

## Built in constructors
There are multiple **core objects** in JavaScript, which have **built in constructors**. <br>
Most of them are not advisable to use. Primitives like **numbers** or **booleans** can actually be created as objects, but that can be confusing and come with problems later in the code, like issues when comparing with the **strict equality operator (===)**. <br>
### String
Here an example for the **string** primitive. <br>
A string can just be **assigned** to a variable, as you'd usually do it. <br>
But it can as well be **constructed** as shown below. <br>
**NOTE:** Our second **string** is of type **object** and therefore different to our primitive string. <br>

```js
// String
const name1 = 'Jeff';
const name2 = new String('Jonas');

console.log(name1);
console.log(typeof(name1));

console.log(name2);
console.log(typeof(name2));
```

![constructed-string](/images/constructed-string.png)

Now that the second string is an **object**, you can assign properties to it: <br>

```js
// String
const name1 = 'Jeff';
name1.foo   = 'bar';

const name2 = new String('Jonas');
name2.foo   = 'bar';

console.log(name1);
console.log(typeof(name1));

console.log(name2);
console.log(typeof(name2));
```

The property **foo** has been added to the **string object** name2, but had no effect on the **primitive string** name1: <br>

![string-object](/images/string-object.png)


So let's have a look at when we run into problems. <br>
In the example below we check `if(name1 === 'Jeff')` and `if(name2 === 'Jeff')`. <br>
Both have the **value** of *Jeff*, but the evaluation is only **true** for name1. <br>
name2 is of the type **object**, not string, and the triple **===** sign checks both, **value & type**. <br>
The double **==** checks only for the value, so `if(name2 == 'Jeff')` would evaluate **true**. <br>

```js
// String
const name1 = 'Jeff';
const name2 = new String('Jeff');

if(name1 === 'Jeff'){
  console.log('name1 is equal to "Jeff"');
} else {
  console.log('name1 is NOT equal to "Jeff"');
}
// > name1 is equal to "Jeff"

if(name2 === 'Jeff'){
  console.log('name2 is equal to "Jeff"');
} else {
  console.log('name2 is NOT equal to "Jeff"');
}
// > name2 is NOT equal to "Jeff"
```

### Number
The **number** can also be **declared as a primitive** or **constructed as an object**. <br>

```js
// Number
const num1 = 5;
const num2 = new Number(5);

console.log(num1);
// > 5
console.log(typeof(num1));
// > number

console.log(num2);
// > Number { 5 }
console.log(typeof(num2));
// > object
```

### Boolean
Same situation for the **boolean**, **declaration as primitive** or **construction as an object**, both is possible. <br> 

```js
// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1);
// > true
console.log(typeof(bool1));
// boolean

console.log(bool2);
// > Boolean { true }
console.log(typeof(bool2));
//  > object
```

### Function
You can even **construct a function**. <br>
The **last set of arguments** will be the **function body**. <br>
See in our example below the same function, 1 x declared and 1 x constructed. <br>
**NOTE:** The **constructed** function is not of type **object** as the constructed primitives were, it is of type **anonymous function**. <br>

```js
// Function
const getSum1 = function(x, y){
  return x + y;
}
const getSum2 = new Function('x', 'y', 'return x + y');

console.log(getSum1(1,1));
// > 2
console.log(getSum1);
// > function getSum1(x, y)

console.log(getSum2(2,1));
// > 3
console.log(getSum2);
// > function anonymous(x, y)
```

### Object
You can **construct an object** but there is no difference between the declared and constructed result. <br>
Both versions will be of **type Object**: <br>

```js
// Object
const john1 = {name: "John"};
const john2 = new Object({name: "John"});

console.log(john1);
// > Object { name: "John" }
console.log(john2);
// > Object { name: "John" }
```

### Array
The same with arrays, they can be **declared or cinstructed**, without any differences of their results. <br>

```js
// Array
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr1);
// > Array(4) [ 1, 2, 3, 4 ]
console.log(typeof(arr1));
// object

console.log(arr2);
// > Array(4) [ 1, 2, 3, 4 ]
console.log(typeof(arr2));
//  > object
```

### Regular Expressions
If you construct a **regular expression** you have to do proper **escaping** in order to get your expression right. <br>

```js
// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+')

console.log(re1);
// > /\w+/
console.log(re2);
// > /\w+/
```

## Prototypes
Each **object** in JavaScript has a **prototype**. <br>
A **prototype** is an **object** itself. <br>
All objects inherit their properties and methods from their prototype. <br> 
When you're dealing with object literals, then you're inheriting from an object called object.prototype. <br>
<br>
Let's have a look on the **person contructor** that we have used in an example before. <br>
We have put the `calculateAge` **function** there. That function is identical for every person, it's a formula. <br>
Such general, for all records identical, properties, should be part of the **Person.prototype**. <br>
So let's comment let's comment out the original `calculateAge` and put it into the **prototype**: <br>

```js
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
```

 Let's add another method to the `Person.prototype`, here we are using a function to return the full name: <br>

```js
// Get full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}

const mary = new Person('Mary', 'Meyer', '1998-4-23');
const john = new Person('John', 'Smith', '1990-8-12');

console.log(mary.getFullName());
// > Mary Meyer
console.log(john.getFullName());
// > John Smith
```

We can also **manipulate data** with an object's **prototype method**. <br>
The example shows a new method `getsMarried` where we set a new last name. <br>
*john* `getsMaried` to *mary*, we pass over her queried `lastName` as an **argument** and this overwrites `john.lastName`. <br>

```js
// Gets married
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}

const mary = new Person('Mary', 'Meyer', '1998-4-23');
const john = new Person('John', 'Smith', '1990-8-12');

john.getsMarried(mary.lastName);

console.log(mary.getFullName());
// > Mary Meyer
console.log(john.getFullName());
// > John Meyer
```

We can check if a property belongs to the **object** or to the **prototype**: <br>

```js
console.log('firstName: '    + mary.hasOwnProperty('firstName'));
console.log('lastName: '     + mary.hasOwnProperty('lastName'));
console.log('birthday: '     + mary.hasOwnProperty('birthday'));
console.log('calculateAge: ' + mary.hasOwnProperty('calculateAge'));
console.log('getFullName: '  + mary.hasOwnProperty('getFullName'));
console.log('getsMarried: '  + mary.hasOwnProperty('getsMarried'));
```

The methods we have written in the **prototype** return **false** when we check it with `hasOwnProperty` on the **person** record. <br>
It is a property of the prototype. <br> 

![object-or-prototype](/images/object-or-prototype.png)

## Prototypal inheritance
If we want to create a **customer** object, which is from its type close to the **person** object, we can **inherit** `Person.property`. <br>
<br>
Below we are **constructing** the new object *customer*. <br>
The first two arguments are identical, a customer has a `firstName` and `lastName`, like a person. <br>
So we can construct our customer with `Person.call(this, firstName, lastName)`, to use the properties we need from there. <br>
**NOTE:** The `this` key-word must be the first **argument** when calling an other constructor. <br>

```js
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

const customer1 = new Customer('John', 'Smith', '555-555-5555', 'Gold');

console.log(customer1);
// > Object { firstName: "John", lastName: "Smith", phone: "555-555-5555", membership: "Gold" }

console.log(customer1.greeting());
// > Uncaught TypeError: customer1.greeting is not a function
```

But `console.log(customer1.greeting())` throws us an error – the prototype method has not been inherited with `Person.call()`. <br>
We have to set `Customer.prototype` to **equal** `Object.create(Person.prototype)` to inherit the Person's prototype: <br>

```js
// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone      = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

const customer1 = new Customer('John', 'Smith', '555-555-5555', 'Gold');

console.log(customer1.greeting());
// > Hello John Smith!
```

Now we can call the Person's method `greetings()` also on a Customer. <br>
With such an inherited prototype will show as a prototype of the inherited object. <br>
Add the following to your code if you want the **Customer's prototype** to return a **constructor of type Customer**: <br>

```js
// Make Customer.prototype return Customer()
Customer.prototype.constructor = Customer;
```

We can overwrite inherited methods to be different from the original method. <br>

## Object.create()
We can store **prototypes** in a variable and create an **object** with `Object.create()` passing over those prototypes as an **argument**. <br>
Below we are creating an **object** by passing over the prior created *personPrototypes*. <br>
The **properties** of the object are than defined with **dot notatione**. <br>
Both methods `getsMarried()` and `greeting()` from the passed *personPrototypes* are working on the *mary* object: <br>

```js
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
```

There is an other syntax we can use to create an **object with properties**. <br>
Here we're also passing over our *personPrototypes* in `Object.create()`, but this time we define our **properties** directly: <br>

```js
const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName:  {value: 'Traversy'},
  age:       {value: 36}
});

console.log(brad.greeting());
// > Hello Brad Traversy
```
