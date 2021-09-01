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

