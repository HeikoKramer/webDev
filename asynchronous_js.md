# Asynchronous JavaScript, Ajax & Fetch API

*This document is an extension to my [JavaScript Notes 2](https://github.com/HeikoKramer/webDev/blob/main/javascript_notes_2.md). <br>
I'm writing these notes while taking Brad Traversy's [Modern JavaScript From The Beginning](https://subscription.packtpub.com/video/web-development/9781789539509/p1) course on packthub.com* 

## Table of contents
* [What is asynchronous programming?](#what-is-asynchronous-programming)
* [Ajax & XHR intro](#ajax--xhr-intro)
  + [What is **Ajax**?](#what-is-ajax)
  + [XMLHttpRequest (XHR Object)](#xmlhttprequest-xhr-object)
  + [Libraries & other methods](#libraries--other-methods)
* [XHR object methods & working with text](#xhr-object-methods--working-with-text)
* [Working with Ajax & JSON](#working-with-ajax--json)
  + [JSON](#json)
  + [JSON array](#json-array)
* [Data from an external API](#data-from-an-external-api)
* [REST APIs & HTTP Requests](#rest-apis--http-requests)
  + [What is an API?](#what-is-an-api)
  + [What is REST?](#what-is-rest)
  + [HTTP Requests](#http-requests)
  + [API Endpoints](#api-endpoints)
* [Callback Functions](#callback-functions)
* [ES6 Promises](#es6-promises)
* [The Fetch API](#the-fetch-api)
* [Arrow functions](#arrow-functions)
  + [Return object literal](#return-object-literal)
  + [Parameters](#parameters)
  + [Arrow functions as callbacks](#arrow-functions-as-callbacks)
* [Async & Await](#async--await)
  + [Async](#async)
  + [Await](#await)

## What is asynchronous programming?
To understand the need for **asynchronous** programming, it is essential to take a look at **synchronous** programming first. <br>
**Synchronous** programming means that you can run into **blocking code** – a bottleneck, like the response of a called server, which delays the execution of further code within your application. <br>
**Asynchronous** programming provides methods, like passing in a **call back function**, to overcome such bottlenecks and keep our code execution going. <br>
As an outcome of this, **asynchronous** code will execute faster. <br>
Most asynchronous code will be part of an **API** or **library**: <br>
* XMLHttpRequest & Fetch
* jQuery Ajax, Axios, other HTTP libraries
* Node.js fs (filesystem) module

There are a few ways to work with asynchronous code: <br>
* Callbacks
* Promises
* Async/Await

## Ajax & XHR intro
### What is **Ajax**?
* Asynchronous JavaScript & XML
* Set of web technologies
* Send & Receive data asynchronously
* Does not interfere with current page
* JSON has replaced XML for the most part

Ajax **makes async requests in the background**. <br>
There is **no page reload required** to **fetch data**. <br>

![ajax](/images/ajax.png)

### XMLHttpRequest (XHR Object)
* API in the form of an object
* Provided by the browsers JS environment
* Methods transfer data between client / server
* Can be used with other protocols than HTTP
* Can work with data other than XML (JSON, plain text)

### Libraries & other methods
* Fetch API
* Axios
* Superagent
* jQuery
* Node HTTP

The **Fetch API** is part of core JavaScript and therewith part of your browser. <br>
Then there are **external libraries** to do requests, like **Axios**, **Superagent**, **jQuery** or **Node HTTP** if you're on Node.js. <br>
jQuery is a full DOM manipulation library, so just using it for Ajax doesn't make much sense. <br>

## XHR object methods & working with text
To use **XHR** create first a **XMLHttp request**: `const xhr = new XMLHttpRequest()` <br>
We are initiating XHR like any other object. It hat properties and methods associated with it. <br>
One of those methods is `open(type of request: string, url/filename: string, async: boolean)`. <br>
In the example below, we are … <br>
* we have an event listener on click of our button
* which calls the `loadData()` function  
* where we create a new instance of the **xhr object**
* we call the `open()` function, passing in …
  * the **type of request** – *GET* (read the file)
  * the source / file what we are **reading in** – *data.txt*
  * the **boolean** determine if **async** – *true*
* `onload` contains the **response**
  * here we check for the **status**  
    * if its *200* (which means *Ok*), we display the loaded text in the console
    * else we display *bad request* in the console
* `send()` has to be included to actual **send** and make everything work

```js
document.getElementById('button').addEventListener('click', loadData);

function  loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'data.txt', true);

  xhr.onload = function() {
    console.log(this.status);
    if(this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("bad request");
    }
  }

  // Send
  xhr.send();
}

  // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
```

*data.txt* has been loaded successfully (HTTP Status **200**) and is displayed in the console: <br>

![http200](/images/http200.gif)

If we try to load *datas.txt*, we get a **404** status code and our *bad request* console message, as that file doesn't exist. <br>

![http404](/images/http404.gif)

`onload` is a rather new feature, before you had to validate the `readyState` value number **4**, as shown below: <br>

```js
// readyState Version
xhr.onreadystatechange = function() {
  console.log(this.status);
  if(this.status === 200 && this.readyState === 4) {
    console.log(this.responseText);
  }
}

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
```

With `onload` it is not required any longer to make checks for the `readyState`. <br>
`onload` is only called when `readyState` **4** is reached – by default. <br>

```js
function  loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'datas.txt', true);

  console.log('READYSTATE', xhr.readyState);
  // > READYSTATE 1

  xhr.onload = function() {
    console.log(this.status);
    if(this.status === 200) {
      console.log(this.responseText);
      console.log('READYSTATE', xhr.readyState);
      // > READYSTATE 4
    } else {
      console.log("bad request");
      console.log('READYSTATE', xhr.readyState);
      // > READYSTATE 4
    }
  }
```

You can execute something at `readyState` **3** with `onprogress`. <br>
This is often used to indicate a loading progress to the user. <br>

```js
// Optional – used for spinners / loaders
xhr.onprogress = function() {
  console.log('READYSTATE', xhr.readyState);
  // > READYSTATE 3
}
```

**Errors** can be handled with `onerror` – this will catch the error and you can execute code when it appears. <br>

```js
  xhr.onerror = function(){
    console.log('Request Error');
  }
```

Here the full example, how to load text from a file and inject its content into the browser window. <br>

```js
document.getElementById('button').addEventListener('click', loadData);

function  loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data.txt', true);

  xhr.onload = function() {
    if(this.status === 200) {
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.send();
}
```

![onload](/images/onload.gif)

## Working with Ajax & JSON
### JSON
**JSON** = **J**ava**S**cript **O**bject **N**otation
In JSON, all **keys** have to be wrapped in **double quotes** (`"id": 12345`). <br>
All **strings** have to be wrapped in **double quotes** either (`"firstName": "Heiko"`). <br>

Here is an example how to output a list with multiple attributes of customer to the browser window. <br>
That has customer has been called from the *customer.json* file: <br>

```json
{
  "id": 1,
  "name": "John Doe",
  "company": "123 Designs",
  "phone": "444-555-6666"
}
```

We have to `JSON.parse` the file, before we can access the attributes and inject it as HTML: <br>

```js
document.getElementById('button1'),addEventListener('click', loadCustomer);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if(this.status == 200) {
      const customer = JSON.parse(this.responseText);
      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}
```

![json-parse](/images/json-parse.gif)

### JSON array
An **JSON array** is wrapped **square brakets** `[]`, the individual array elements are wrapped in **curly brackets** `{}`. <br>
The array elements are separated with a comma. <br>
Here our *customers.json* file, that contains three individual customers: <br>

```js
[
  {
    "id": 1,
    "name": "John Doe",
    "company": "123 Designs",
    "phone": "444-555-6666"
  },
  {
    "id": 2,
    "name": "Steve McCoy",
    "company": "ABC Corp",
    "phone": "555-444-7777"
  },
  {
    "id": 3,
    "name": "Kim Lee",
    "company": "Tea-Kwon-Donuts Inc",
    "phone": "333-555-4444"
  }
]
```

In the example below, we load an **array** of **multiple customers** from *customers.json*. <br>
Then we loop through that list of objects, assign the object's attributes to HTML list elements and **append** each customer to the output. <br>

```js
document.getElementById('button2'),addEventListener('click', loadCustomers);

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  let output = '';

  xhr.onload = function(){
    if(this.status == 200) {
      const customers = JSON.parse(this.responseText);

      customers.forEach(function(customer){
      output += `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>
      `;
      });

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}
```

## Data from an external API
In the example below we query a specific number of Chuck Norris jokes via an appropriate API. <br>
We inject those jokes into the DOM and display them in the browser window: <br>

```js
document.querySelector('.get-jokes').addEventListener('click', getJokes);
 
function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      let output = '';

      if(response.type === 'success') {
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}
```

![chuck-norris](/images/chuck-norris.gif)

## REST APIs & HTTP Requests
### What is an API?
* **A**pplication **P**rogramming **I**nterface
* Contract provided by one piece of software to another
* Structured request and response

### What is REST?
* **Re**presentational **S**tate **T**ransfer
* Architecture style for designing networked applications
* Relies on a stateless, client-server protocol, **almost always HTTP**
* Treats server objects as resources that can be created or destroyed
* Can be used by virtually any programming language
* All APIs have their own rules and structures

### HTTP Requests
* `GET` – Retrieve data from a specific resource
* `POST` – Submit data to be processed to a specified resource
* `PUT` – Update a specified resource
* `DELETE` – Delete a specified resource

* `HEAD` – Same as get but does not return body
* `OPTIONS` – Returns the supported HTTP methods
* `PATCH` – Update partial resources

### API Endpoints
Here some examples how an **API endpoint** could look like. <br>
Note that the URLs look the same, but the type of request specifies the action you're undertaking with your call. <br>

**GET**        https://someurl.com/api/users       //Get all users <br>
**GET**        https://someurl.com/api/users/1     //Get single user <br>
**POST**       https://someurl.com/api/users       //Add user <br>
**PUT**        https://someurl.com/api/users/1     //Update user <br>
**DELETE**     https://someurl.com/api/users/1     //Delete user <br>

## Callback Functions
A **callback** is simply a function that is passed in as a **parameter** to an other function and than it's **run inside that function's body**. <br>
So whenever we call a function within a `forEach` for example .. that's actually a **callback**. <br>
That particular function is not asynchronous, it stops everything from happening until it's done. <br>

Two examples, here the synchronous way: <br>

```js
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function createPost(post) {
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'});

getPosts();
```

Asynchronously with a **callback function**, now the third post appears as well: <br>

```js
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
```

## ES6 Promises
**Promises** are part of the **ES6** standard and an alternative way to **callbacks** to handle asynchronous operations. <br>
While they are handling asynchronous operations, they can **promise** to do something **when the operation is finished**. <br>
We handle a **promise response** with a `.then()` – inside there define what happens when the promise is complete. <br>
<br>
In the example below, we add a promise to the `createPost` function. <br>
If its successful we'll call the `getPosts` function, else we will throw an error. <br>

```js
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);

      const error = false;

      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong!');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(err) {
  console.log(err);
});
```

## The Fetch API
`fetch()` returns **promises** – to use a response from a promise, you have to use `.then()`. <br>
<br>
In the example below, we … <br>
* **fetch** data from a text file with `fetch('test.txt')`
* get the **response** with `.then(function(res)`
  * (here could be an **if** to react on the **status code**)
* with `return res.text();` we **return** the content of our text file
* `.then(function(data)` catches that data 
* `console.log(data)` writes it to the console
* with `document.getElementById('output').innerHTML = data` we are putting it on to the screen
* if an error is thrown, we can **catch** it with `.catch(function(err)`

```js
document.getElementById('button1').addEventListener('click', getText);

// Get local text file data
function getText() {
  fetch('test.txt')
    .then(function(res){
      console.log(res);
      return res.text();
    })
    .then(function(data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    });
}
```

To load a **local JSON file** works the same way … <br>
* we fetch the data with `fetch('posts.json')`
* we return the data with `return res.json()`
* `.then(function(data)` lets us process the data further
* the data is an **array** of **objects** so we have to **loop** through it
  * therefore we use `data.forEach(function(post)`
* we **append** an list element with the post title to the output variable:
  * `output += <li>${post.title}</li>` (li wrapped in **backticks**) 
* then we inject it to our html output div:
  * `document.getElementById('output').innerHTML = output` (wrapped in **backticks**)
* errors are again chtched with `.catch(function(err)`

```js
// Get local JSON data
function getJson() {
  fetch('posts.json')
    .then(function(res){
      console.log(res);
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(post){
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}
```

Getting data from an **external API** works basically the same. <br>
Of course you'll have to exchange the link to your local file with your target API endpoint. <br>
In the example below, we are requesting a bunch of users from the GitHub API and injecting it into our page. <br>

```js
// Get external JSON data from API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(res){
      console.log(res);
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(user){
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}
```

## Arrow functions
**Arrow functions** give us a lot of benefit in terms of saving lines of code. <br>
<br>
Here's an example how to make a function **more compect**. <br> 
*Example 1:* Classic function **with function key-word**. <br> 

```js
const sayHello = function() {
  console.log('Hello');
}

sayHello();
```

*Example 2:* Arrow function **without function key-word**. `() =>` replaces `function()`. <br> 

```js
const sayHello = () => {
  console.log('Hello');
}

sayHello();
```

*Example 3:* Arrow function **without curly brackets**.  <br>
As our function contained only one action, we can even leave out the `{ curly brackets }` and initiate the whole function with `() =>`. <br>

```js
const sayHello = () => console.log('Hello');

sayHello();
```

Also very simple if you want to **return something**. <br>

```js
const sayHello = () => 'Hello';

console.log(sayHello());
```

One line arrow function above, compared to multi line classic function below. <br>

```js
const sayHello = function() {
  return 'Hello';
}

console.log(sayHello());
```

### Return object literal
You can run into trouble, when returning an object literal. <br>
If you try this for example: <br>

```js
const sayHello = () => { msg: 'Hello' };

console.log(sayHello());
// > undefined
```

You'll receive **undefined** as the curly brackets will be seen as the **function body**. <br>
To fix this, just wrap your object in parentheses and you'll receive the object correctly. <br>

```js
const sayHello = () => ({ msg: 'Hello' });

console.log(sayHello());
// > Object { msg: "Hello" }
```

### Parameters
If your function needs only **one parameter**, you can do it like this, without parentheses: <br>

```js
const sayHello = name => console.log(`Hello ${name}`);

sayHello('Heiko');
// > Hello Heiko
```

**Multiple parameters** have to be **wrapped in parantheses**: <br>

```js
const sayHelloFull = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

sayHelloFull('Heiko', 'Krämer');
// > Hello Heiko Krämer
```

### Arrow functions as callbacks
Below we are placing a function in the *nameLengths* variable, to return the lengths of all names in the *users* variable. <br>
`map()` is used to run the specified function on all the positions of the array. <br>

```js
const users = ['Nathan', 'John', 'William'];

const nameLengths = users.map(function(name) {
  return name.length;
});

console.log(nameLengths);
// > Array(3) [ 6, 4, 7 ]
```

Shorter **arrow** version: <br>

```js
const users = ['Nathan', 'John', 'William'];

const nameLengths = users.map((name) => {
  return name.length;
});

console.log(nameLengths);
// > Array(3) [ 6, 4, 7 ]
```

Shortest version, **arrow without curly brackets**: <br>

```js
const users = ['Nathan', 'John', 'William'];

const nameLengths = users.map(name => name.length);

console.log(nameLengths);
// > Array(3) [ 6, 4, 7 ]
```

The shortest version is only a one-liner and actual cleaner than the other versions. <br>

## Async & Await
### Async
If you put `async` in front of a function, it will not longer only return its values, it will return a **promise**.  <br>
As the function is returning a promise, we can use `.then()` to process the **response**. <br>

```js
async function myFunc() {
  return 'Hello';
}

myFunc()
  .then(res => console.log(res));
  //  > Hello
```

### Await
With `await` you can **wait until a promise is resolved**. <br>
The example below will return *Hello* after one second, as we used `const res = await promise` to wait for promise. <br>

```js
async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });

  // Wait until promise is resolved
  const res = await promise; 
  return res;
}

myFunc()
  .then(res => console.log(res));
  //  > Hello
```

Here the same example with a basic error handling. <br>
If error is true, we throw an error, otherwise we return *Hello* after a second. <br>

```js
async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });

  const error = true;

  if(!error){
    const res = await promise; 
    return res;
  } else {
    await Promise.reject(new Error('Something went wrong'));
  }
}

myFunc()
  .then(res => console.log(res))
  .catch(err => console.log(err));
  // Error: Something went wrong
```

Here an other example, this time using `fetch`. <br>

```js
async function getUsers() {
  // await response of the fetch call
  const response = await fetch
  ('https://jsonplaceholder.typicode.com/users');

  // only proceed once its resolved
  const data = await response.json();

  // only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));
```
