# JavaScript Patterns

*This document is an extension to my [JavaScript Notes 2](https://github.com/HeikoKramer/webDev/blob/main/javascript_notes_2.md). <br>
I'm writing these notes while taking Brad Traversy's [Modern JavaScript From The Beginning](https://subscription.packtpub.com/video/web-development/9781789539509/p1) course on packthub.com* 

## What are patterns?
**Patterns** are re-usable solutions to re-occurring problems, they are **programming templates**, a specific way to write code. <br>
The scope of patterns vary significantly, the *factory* and *prototype* patterns are used for object creation, the *module* pattern and its variations are used for overall structure, then you have software design patterns like *MVC* – the *Module View Controller* pattern and these apply to whole applications or to just little blocks of code. <br>
<br>
Patterns we will have a look on are: <br>
* Module
* Revealing Module Pattern
* Singleton
* Factory
* Observer
* Mediator
* State

## The module pattern
A module pattern works with an [IIFE – Immediately Invoked Function Expression](https://developer.mozilla.org/en-US/docs/Glossary/IIFE). <br>
Blueprint for the module pattern: <br>

```js
// Basic structure

(function() {
  // Declare private vars and functions

  return {
    // Declare public var and functions
  }
})();
```

**Two bracket pairs** are the base of our **module**. <br>

```js
const UICtrl = ()();
```

The first contains the **IIFE**. Wen can't access anything from within the function what is not **returned** by it. <br>
So we have also to return our desired functions, to make them **public functions** which than can be accessed. <br>
So in the *UIContrl* module below, we have the function *changeText*, which we make available via the **returened function** *callChangeText*. <br>

```js
// STANDARD MODULE PATTERN
const UICtrl = (function() {
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    } 
  }
})();
```

![returned-function](/images/returned-function.gif)

If we try to call the **inner function** *changeText()*, we get an error, that function is not accessible for us: <br>

![inner-function](/images/inner-function.gif)

### Revealing module pattern
The **revealing module pattern** is very similar to the standard module pattern. <br>
The main difference is that instead of returning public functions, we will basically **map an object literal** to those **private functions** that you want to **reveal**. <br>
Below we have two **private functions** in our module, which we **map to an object**. <br>
We **return that object** and can so access those functions via **dot notation**. <br>

```js
// Revealing Module Pattern
const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});
// >  Item Added

console.log(ItemCtrl.get(1));
// Object { id: 1, name: "John" }
```

### The singleton pattern
The **singleton pattern** is a manifestation of the module pattern. <br>
A **singleton object** is an **immediate, anonymous function** – it can only return **one instance of an object at a time**. <br>
Repeated calls to the constructor will just return the same instance and like the module pattern it maintains a private reference, which nothing from the outside can access. <br>
See in the example below, that we can **never have more than one instance** even if we try, it's going to **give us back the same instance**. <br>

```js
const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name:'Heiko'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
console.log(instanceA);
// > Object { name: "Heiko" }
const instanceB = Singleton.getInstance();
console.log(instanceB);
// > Object { name: "Heiko" }

console.log(instanceA === instanceB);
// > true
```

