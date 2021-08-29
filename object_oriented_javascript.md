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
