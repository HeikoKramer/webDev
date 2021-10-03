# JavaScript Patterns

*This document is an extension to my [JavaScript Notes 2](https://github.com/HeikoKramer/webDev/blob/main/javascript_notes_2.md). <br>
I'm writing these notes while taking Brad Traversy's [Modern JavaScript From The Beginning](https://subscription.packtpub.com/video/web-development/9781789539509/p1) course on packthub.com* 

## Table of contents
* [What are patterns?](#what-are-patterns)
* [The module pattern](#the-module-pattern)
* [Revealing module pattern](#revealing-module-pattern)
* [The singleton pattern](#the-singleton-pattern)
* [Factory pattern](#factory-pattern)
* [The observer pattern](#the-observer-pattern)
* [The mediator pattern](#the-mediator-pattern)
* [The state pattern](#the-state-pattern)

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

## Revealing module pattern
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

## The singleton pattern
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

## Factory pattern
The **factory pattern** is a way to create an **interface for creating objects**. <br>
**Factory methods** are often used in applications to **manage, maintain and manipulate collections of objects**. <br>
In the example below we have a **factory** for members. <br>
We pass in a name and a membership type and get back a member, with the appropriate membership and its costs associated. <br>

```js
function MemberFactory() {
  this.createMember = function(name, type) {
    let member;

    if(type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
  }
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
}

const StandardMembership = function(name) {
  this.name = name;
  this.cost = '$15';
}

const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Hans', 'super'));
members.push(factory.createMember('Günther', 'standard'));
members.push(factory.createMember('Barbara', 'standard'));
members.push(factory.createMember('Horst', 'simple'));
members.push(factory.createMember('Egon', 'simple'));
members.push(factory.createMember('Gabi', 'super'));

members.forEach(function(member) {
  member.define();
});
```

![factory-pattern](/images/factory-pattern.png)

## The observer pattern
**The observer pattern** allows us to **subscribe** and **unsubscribe** to certain events or certain functionality. <br>
It gives us a really nice **subscription model**. <br>
It can be used to notify the DOM of certain elements to be updated. <br>
<br>
In the first example we are using **prototypes** to **subscribe** and **unsubscribe** to certain click events. <br>

```js
function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function(fn) {
    // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of the observers.
    this.observers = this.observers.filter(function(item) {
      if(item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

const click = new EventObserver();

//  Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// Click Handler
const getCurMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}
```

![observer-pattern](/images/observer-pattern.gif)

Here the exact same functioniality, but using an **ES6 class** instead of a prototype. <br>

```js
class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of the observers.
    this.observers = this.observers.filter(function(item) {
      if(item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

const click = new EventObserver();

//  Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// Click Handler
const getCurMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}
```

## The mediator pattern
The **mediator pattern** is an other **behavioral pattern** like the observer. <br>
The **mediator** is meant to be an interface for communicating with **colleagues**. <br>
**Colleagues** are **mediated objects**. <br>
<br>
The example below shows a demo chat app, where the **chatroom** functions as the **mediator**. <br>
Users can **register** for a room and than send messages to other individual users or everyone in the room. <br>

```js
const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if(to) {
        //  Single user message
        to.receive(message, from);
      } else {
        // Mass message
        for(key in users) {
          if(users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  }
}

const hans     = new User('Hans');
const ute      = new User('Ute');
const katrin   = new User('Katrin');

const chatroom = new Chatroom();

chatroom.register(hans);
chatroom.register(ute);
chatroom.register(katrin);

hans.send('Hello Ute', ute);
katrin.send('Gude Ute!', ute);
ute.send('Na ihr Frösche, was geht ab!?');
```

[mediator-pattern](/images/mediator-pattern.png)

## The state pattern
The **state pattern** is an other **behavioral pattern**. <br>
We have a **state** that we can change throughout our scripts if we want to do **certain things on certain states**. <br>
<br>
See how we're changing the content of our page depending on the **state** in our example below: <br>

```js
const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;
  }
};

// Home State
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  `;
};

// About State
const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>This is the about page</p>
  `;
};

// Contact State
const contactState = function(page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Vars
const home    = document.getElementById('home'),
      about   = document.getElementById('about'),
      contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
  page.change(new homeState);

  e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
  page.change(new aboutState);

  e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
  page.change(new contactState);

  e.preventDefault();
});
```

![state](/images/state.gif)

