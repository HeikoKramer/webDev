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
