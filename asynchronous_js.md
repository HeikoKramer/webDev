# Asynchronous JavaScript, Ajax & Fetch API

*This document is an extension to my [JavaScript Notes 2](https://github.com/HeikoKramer/webDev/blob/main/javascript_notes_2.md). <br>
I'm writing these notes while taking Brad Traversy's [Modern JavaScript From The Beginning](https://subscription.packtpub.com/video/web-development/9781789539509/p1) course on packthub.com* 

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
All **strings** have to be wrapped in **double quotes** either (`"firstName": "Heiko"`) <br>

Here is an example how to output a list with multiple attributes of customer to the browser window, that has been called from a JSON file: <br>

```json
{
  "id": 1,
  "name": "John Doe",
  "company": "123 Designs",
  "phone": "444-555-6666"
}
```

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
