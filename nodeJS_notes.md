# Node.js

This document contains my notes on **Node.js** – which are taken while following the [Node.js Tutorial](https://youtu.be/g3Tt8ZozKWU) series (German) from the *native web GmbH* on YouTube. <br>

## [Install Node.js](https://youtu.be/g3Tt8ZozKWU)
### What is Node.js?
Node.js a JavaScript runtime for the server, build on Chrome's V8 JS-engine. <br>
It uses an event driven, non-blocking I/O model. <br>
**npm** – the **Node Package Manager** – is the largest ecosystem of open source libraries in the world. <br>
### [Versioning](https://youtu.be/g3Tt8ZozKWU?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=421)
The Node.js release-cycle looks as following: <br>
* new major-release every six months
  * **even** numbers (4.0, 6.0) are released in **April**
  * **odd** numbers (5.0, 7.0) are released in **October**

The current **even** version turns into the **LTS** version (long term support), when the next **odd** version is released. <br>
LTS versions are actively supported for 18 months and receive security updates for additional 12 months after that. <br>
<br>
**NOTE:** It is recommended (especially in an enterprise context), to use a valid LTS version. <br>
### [Installing Node.js](https://youtu.be/g3Tt8ZozKWU?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=670)
The regular installer for the **current** or **LTS** version can be downloaded from [nodejs.org](https://nodejs.org) for all major systems. <br>
<br>
To download and to install a version directly from the site has some disadvantages: <br>
* only one version can be installed
* the downloaded version replaces the prior installed version
* you have to use a backup or lower version installer if you want to roll-back
* older projects might rely on former versions and require conversion
### [nvm – node version manager](https://youtu.be/g3Tt8ZozKWU?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=757)
The **node version manager** (**nvm**) allows to install multiple versions of Node.js on a system. <br>
nvm is a **bash-script**, which runs on **unix systems**. <br>
To install nvm, copy & paste the following script in your terminal window: <br>

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

You need to source your **.bashrc** after the installation. If you don't know how to do that, just close and re-open the terminal window. <br>

Now you have a whole set of commands at hand, to install different versions of node: <br>

```sh
nvm install 8.0.0    // Install a specific version number (8)
nvm install node     // Install the latest available version
nvm install --lts    // Install the latest LTS version
```

`nvm use` instead of `nvm install` sets the node version used by the system, but behaves basically identical: <br>

```sh
nvm use 8.0.0    // Sets version number 8.0.0 to be used
nvm use node     // Sets the latest available version to be used
nvm use --lts    // Sets the latest LTS version to be used
```

To **show all installed versions** use the command `nvm ls`. <br>
The arrow indicates which version is currently set to be used `->      v17.0.1`. <br>
The `nvm ls` command shows further information – so for example the aliases for the lts versions: <br> 

```sh
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.7 (-> N/A)
lts/fermium -> v14.18.1 (-> N/A)
lts/gallium -> v16.13.0
```

To use the command `nvm use fermium` over `lts v14.18.1` (in a script) has an advantage: <br>
That way you'll use the updated version – if a security update for *fermium* has meanwhile been implement. <br>
<br>
The running node version can as well be inspected using the standard node command `node --version` or the short form `node -v`. <br>

## [Running Node.js](https://youtu.be/g3Tt8ZozKWU?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=1251)
There are two ways of running Node.js – **interactive in the terminal** or by **loading a JavaScript file into node**. <br>
### Node.js interactive mode
The Node.js interactive mode is an easy way to test JavaScript code. <br>
You can start node's **interactive mode** by simply typing `node` into the console. <br>
Node will then start and show you a prompt `> ` where you can type or paste JS code. <br>
`> 42/12` will output `3.5`. But you can also more complex scenarios, storing functions and calling them later: <br>

```js
> add = function(val1, val2) { return val1 + val2; };
[Function: add]
> add(15,25)
40
```

Everything you did, all the variables, functions, etc. you've stored in node's interactive mode will be vanished when you leave node. <br>
For that reason node forces you to confirm you intention to leave the program by pressing <kbd>CTRL</kbd> <kbd>c</kbd> twice before it closes.
### Run JavaScript file in Node.Js
To run a pre-scripted JavaScript file in node is as simple as typing `node fileName.js`. <br>
The file name does not even require the **.js** extension. As long as it contains valid JS code, it will execute. <br>
The most common filename for an initial JavaScript code file is **app.js**. <br>

## [Asynchronous vs parallel](https://youtu.be/APwRg37ShSY)
### Callbacks
External code runs **single threaded** in Node.js. <br>
**Callbacks** are used to **wait** for a certain event, or to act in a certain time frame or interval. <br>
Examples for **callback methods** are `setTimeout` or `setInterval`. <br>
<br>
The following example shows the `setTimeout` method, which calls – after two seconds – a function that contains a console log: <br>

```js
setTimeout(function () {
  console.log("Ei gude!");
}, 2 * 1000);
```

The same example, but using the `setInterval`, will repeat the console log and display our message repetitive every two seconds. <br>
We can interrupt that process by pressing <kbd>CTRL</kbd> <kbd>c</kbd>. <br>

```js
setTimeout(function () {
  console.log("Ei gude!");
}, 2 * 1000);
```

`setTimeout` doesn't block our threat, other actions can be performed parallel. <br>
This can be demonstrated with the example below – although the **"Ei "** string is logged to the console after the timeout, it appears straight after running the program in the log .. two seconds later, the **"gude!"** appears. <br>
If the timeout would block the code, we would see a two second delay at the start and an execution in reverse order. <br>

```js
setTimeout(function () {
  console.log("gude!");
}, 2 * 1000);

console.log("Ei ");
```

### [Synchronous code blocking the program](https://youtu.be/APwRg37ShSY)
We still can **block** our program. If we run for example this loop, which does nothing, but that quite often, then our one second timer is delayed and the **"Ei gude!""** string appears much later than after one second (at least at my CPU's speed). <br>

```js
setTimeout(function () {
  console.log("Ei gude!");
}, 1 * 1000);

for (let i = 0; i < 10000000000; i++) {
  // ...
}
```

This is something we should keep in mind: <br>
**Everything what can not be executed instantaneously should be set up asynchronously.** <br>
**Note.js favors asynchronous code.** <br>

## [The Node.js HTTP module](https://youtu.be/APwRg37ShSY)
Node.js includes a module to support the **HTTP protocol**. The module allows it to write either HTTP **clients** or **server**. <br>
### require()
Every module has to be **loaded** into the application, in order to use it. <br>
We can use the `require()` function to load modules into our program. <br>
The `require()` function takes in the module's path & name as parameters. <br>
Require provides us a **return value** for the module, which has to be **stored in a variable**. <br>

```js
const http = require('http');
```

### createServer()
To **create a server in Node.js** is fairly easy, therefor we use the `createServer()` method. <br>
The method takes in a **callback function** with a **request** and a **response** parameter. <br>
We can send data to the client by using `write()`. <br>
<br>
**NOTE:** A response can include multiple parts, so it is important to `end()` it. <br>
Without ending the response node will keep waiting for further parts of the response. <br>
<br>
In order to be able to receive requests, we have to **open a port on our host**. <br>
We do that with the `listen()` method. Port **3000** is a often used port for node servers. <br>
The listen method can take in a callback function to provide feedback, for the successful start of the server. <br>
<br>
So at this point we have a functional, but very basic web-server: <br>

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hallo HTTP!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
```

The server provides feedback when started: <br>

![node-server](/images/node-server.gif)

And our response is displayed when we access *localhost:3000* and therewith trigger our request: <br>

![node-server](/images/node-server.png)

### [writeHead()](https://youtu.be/APwRg37ShSY?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=1157)
Our output text *Hello HTTP!* from the example above was only plain text, as visible in the last image. <br>
We have not specified any output parameters – that is done in the **HTTP header**. <br>
To set the appropriate parameters in the header, we can use `writeHead()`. <br>
`writeHead()` takes in two parameters, the **HTTP status code** and **an header object**, which contains the [HTTP properties](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) that we would like to set. <br>
<br>
Now that we have set a header with a specified **content-type** of **text/html**, we get an HTML page back as response: <br>

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html'
  });
  res.write('Hallo HTTP!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
```

![node-server_html](/images/node-server_html.png)

We can get the **request method** and the **request url** and could so theoretically build whole websites containing multiple pages. <br>

```js
res.write('Hallo HTTP!');
console.log(req.method);
console.log(req.url);
res.end();
```

![node-server_test-html](/images/node-server_test-html.png) <br>

We have entered the page *test.html* on the local host and get the appropriate feedback in the console: <br>

![node-server_method_url](/images/node-server_method_url.png)

### HTTPS module
Node.js contains also the **HTTPS module**, which implements the **HTTPS protocol**. <br>
Except from the **secure** protocol, everything works exactly the same as with the HTTP module. <br>

## [Modules](https://youtu.be/APwRg37ShSY?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=1362)
Node.js has been build very lean on its core functionality by purpose. <br>
It is therefore easily extendible via external modules. <br>
### Integrated modules
There are a few **essential modules** integrated in node, like the **http** and **https** modules we have covered above. <br>
Further node core modules are for example: <br>
* fs
  * provides functionality to access and interact with the **file system**
* net
  * this module provides an asynchronous **network wrapper**
* os
  * provides functions that can be use to retrieve information from the underlying **operating system**
* path
  * provides functionality to access and interact with the **file system**
* url
  * the URL module **splits up a web address into readable parts**

The full list of **integrated modules** can be viewed in the [Node.js API reference](https://nodejs.org/docs/latest-v15.x/api/). <br>
### External modules
All functionalities not included in the integrated modules are created and maintained by the Node.js community. <br>

## [TCP / IP](https://youtu.be/APwRg37ShSY?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=1556)
The Node.js **net module** has similarities with the http/https modules, but directly supports the **TCP/IP** protocols. <br>
A server created with net also requires a callback function, but here we only require a **socket** instead of the request and response parameters from the http example. <br>

```js
const net = require('net');

const server = net.createServer(socket => {
  socket.write('Hallo TCP/IP!');
  socket.end();
});

server.listen(3000);
```

We have created a basic **tcp/ip server** in a file called *tcpip.js*, to run the server we simply type `node tcpip.js`. <br>
We can now access our server from an other terminal window, either via **telnet** or via **netcat**: <br>

![node-server_tcpip](/images/node-server_tcpip.png)

## npm modules in Node.js
### [How to structure code in Node.js](https://youtu.be/3iFumk3g9S4)
Node.js code should be structured after the "separation of concerns" – a concept to separate code responsibilities and concerns whenever possible. <br>
In our http example, we saw a server, which is implemented generic – every Node.js serves is implemented after such a schema. <br>
Then we have our individual logic, the "Hallo HTTP!" and those console logs. <br>
Not much, but still individual code, which could be **outsourced** from the main JS-file. <br>

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {          // <- individual code
    'content-type': 'text/html' // <- individual code
  });                           // <- individual code
  res.write('Hallo HTTP!');     // <- individual code
  console.log(req.method);      // <- individual code
  console.log(req.url);         // <- individual code
  res.end();                    // <- individual code
});

server.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
```

Such an **outsourcing** or a **separation** of code happens while you store those parts of the code in separate files. <br>

### Loading a separate code file
Let's take our http server example and re-build it modular. <br>
Therefor we create two files – *app.js* and *handle.js* <br>
<br>
**app.js**

```js
const http   = require('http');
const handle = require('./handle');

const server = http.createServer(handle);

server.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
```

**handle.js**

```js
const handle = function (req, res) {
  res.writeHead(200, {
    'content-type': 'text/html'
  });
  res.write('Hallo HTTP!');
  console.log(req.method);
  console.log(req.url);
  res.end();
};

module.exports = handle;
```

Now we have modularized our code. <br>
*app.js* contains the initialization of our server – we start the server with `node app.js`. <br>
The complete request and response logic has been outsourced into the *handle.js* file. <br>
**NOTE:** The **handle function** from *handle.js* has to be **exported** in order to make it globally available. <br>
Without the export (`module.exports = handle`) the function would remain private in its own scope and couldn't be used in the *app.js* file. <br>
Instead of exporting the function subsequent, we could initiate it as an exported function like this: <br> 

```js
module.exports = function (req, res) {
  res.writeHead(200, {
    'content-type': 'text/html'
  });
  res.write('Hallo HTTP!');
  console.log(req.method);
  console.log(req.url);
  res.end();
};
```

We load the external functionality into our main file the same way as we did with the integrated **http module**. <br>
`const handle = require('./handle')` <br>
* we assign it to a variable
* we use `require()`
* but this time we have to specify the path (**./** as the file is in the same directory)

**NOTE:** The file extension **.js is NOT required**. Some Node.js versions even have trouble loading the file when you add the **.js**, so it is recommended to exclude the extension when importing a file with the require function. <br>

### [3rd-party modules](https://youtu.be/3iFumk3g9S4?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=1020)
There are many 3rd-party libraries available for Node.js, which are build and maintained by the community. <br>
The installation of such 3rd modules happens via **npm** – the **Node.js Package Manager** <br>

#### [npm package installation](https://youtu.be/3iFumk3g9S4?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=1190)
To install a package via **npm** (we are using the package *express* in our example), <br>
* change into your project's directory
* enter the command `node install express` into your terminal

The package is now installed, a folder **node_modules** has been added to our project, as well as two files *package.json* and *package-lock.json*. <br>
**npm** has as well installed all the dependencies required to run *express* in the **node_modules** folder. <br> 

#### [Loading 3rd-party modules](https://youtu.be/3iFumk3g9S4?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=1248)
Again we use `require()` to load our installed module into the main JavaScript file. <br>
Instead of providing the full path to the module's file, we can simply use the package name: <br>

```js
const http    = require('http');

const express = require('express');

const app = express();

app.get('/', (req,res) => {
  res.send('Hallo Node.js!');
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
```

Again we are using our http example, now we have replaced the prior *handler.js* with *express* – which is a commonly used library for building web applications. <br>
*express* now handles all the stuff like writing the http head and response codes for us. <br> 
If we start our server with `node app.js` now and enter port 3000 on the localhost, we get our message displayed as html: <br>

![node-server_express](/images/node-server_express.png)

This time we have specified the main directory in the `app.get('/', (req,res)` function. <br>
If we try to access any other path, we receive an error, as they are not handled by our function: <br>  

![get-error](/images/get-error.png)

#### [node_modules](https://youtu.be/3iFumk3g9S4?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=1456)
Remember, the **node_modules** folder appeared after we've installed the *express* package. <br>
**node_modules** stores all 3rd-party modules which are installed via **npm**. <br>
The name of that folder is fix and **should not be changed**. <br>
Every Node.js project has **its own node_modules folder**, you can't install a package like *express* system-wide. <br>
The idea behind that is: If every application contains its own dependencies, there are no problems with versioning conflicts. <br>
Every Node.js project should be **self-contained** and include everything required to run the appropriate application. <br>
<br>
The Node.js require function loads modules in a certain order: <br>
* integrated modules
* npm modules
* local .js files

If there would be any naming conflict – an npm installed or locally created "http" module for example – node would load the integrated http module. <br>
So be aware that if you name your own modules like integrated or installed modules, they will not load. <br>
<br>
It is best-practice to **exclude** the node_modules folder from your version control. <br>

#### [package.json](https://youtu.be/3iFumk3g9S4?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=1705)
The package.json contains the project's **dependencies metadata**. <br>
Every Node.js project should have such a package.json file, containing its **name** and its **version**. <br>
For our little *hello world* app, it would look like this: <br>

```json
{
  "name": "hello-world",
  "version": "0.0.0"
}
```

The **version number** always has three digits, to distinguish a **major version**, a **minor version**, or a **bug-fix**. <br>
An other entry in the package.json is the **dependencies object** – there are all the dependencies of our project documented. <br>
When we executed `npm install express` a package.json was automatically created, containing the express dependency: <br>

```json
{
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

So our complete package.json should look like this: <br>

```json
{
  "name": "hello-world",
  "version": "0.0.0",
  "dependencies": {
    "express": "4.17.1"
  }
}
```

Now that we have a package.json which contains our dependencies .. we can delete the node_modules folder without worries. <br>
Everyone could also clone our project form GitHub, where we excluded the node_modules with the .gitignore file. <br>
All what has to be done now to **restore the dependencies** is to run `npm install` in the project folder, with the package.json. <br>
**npm** checks the file for dependencies and restores everything for us, all required modules are installed in their specified versions. <br>
<br>
In the case of our example 51 modules have been installed –> 51 modules although we have only added *express*?
Right – the express module also comes with a package.json, which includes a whole bunch of dependencies. <br>
Those modules also might have their own dependencies .. npm took care about that for us and **installed the complete dependency tree**. <br>
<br>
The command `npm init` can be used to create a package.json file for a new project. <br>
`npm init` guides you through some questions and places your input in the appropriate sections of package.json. <br>
<br>
We don't have to add the dependency entries manually when we install a new package, we can use the `--save` option. <br>
`npm install express --save` adds the dependency for *express* in its current version to our existing package.json. <br>

#### [pin a version](https://youtu.be/3iFumk3g9S4?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=2160)
When we're using `npm install express --save` to add the dependency to our existing package.json or when we created a new package.json, by using only `npm install express` in a project folder without an existing package.json file, we get a **version number** entry, starting with a **caret symbol**: <br> 

```json
{
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

This is actually a bit critical, as it means that **you are excepting minor version changes**. <br>
So if you have your code on GitHub, clone the repo and run `npm install` you could get a later version as 4.17.1. <br>
npm would accept all changes not corresponding with a **major release**, so <br>
* 4.17.3
* 4.17.8
* 4.19.6

… all those versions would be accepted, versions starting from 5.0.0 would be rejected and the last 4. version would be taken. <br>
That could be a **breaking issue**, resulting in a situation, where the application runs well on one machine, but not on an other. <br>
<br>
So if you want to avoid that kind of issues, it is recommended to get rid of the **caret (^)** and use an exact version. <br>
The appropriate command to write a fix version for the *express* module into the package.json is: <br>

```sh
npm install express --save-exact
```

There are short versions for either the **--save** or the **--save-exact** options: <br>

```sh
npm install express -S   # short for --save
npm install express -E   # short for --save-exact
```

Or even shorter (i can be used as an alias for install): <br>

```sh
npm i express -S   # short for --save
npm i express -E   # short for --save-exact
```

To see all the available options for the installation process, use `npm install -h`. <br>

### [central registry](https://youtu.be/3iFumk3g9S4?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=2494)
All modules **installed via npm** come from the **cetral registry** that can be browsed under [npmjs.com](https://www.npmjs.com/). <br>
A central registry is accompanied with two consequences: <br>
* single point of failure
  * if it's down, it's down
* one global name space for all the modules
  * if the name *mymodule* is taken, you can't name your module the same

Solutions: <br>
* registry can be mirrored or cached locally
* scoped packages
  * pre-fix for your module *@heiko/mymodule*

### [publish a module](https://youtu.be/3iFumk3g9S4?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=2663)
To upload your own module into the library is rather easy. <br>
You can create an account / log into your account with the command `npm login`. <br>
Then you just need a valid package.json, including at least … <br>
* a name
* a version
* the dependencies (if there are some)

… and then you can upload you module by executing the command `npm publish` in your project's directory. <br>
npm then bundles all or files to a tarball and uploads it – it's globally available for `npm install` only a few seconds later. <br>
Of course there are advanced options, like publishing it private, etc. but publishing in general is as simple as that. <br>
<br>
Some notable things: <br>
* publishing a new module works only if the name is available 
* you can not overwrite an existing version of a published module
* npm has an **unpublish-policy**
  * `npm unpublish` removes a module from the registry 
    * **modules older than 24h can not be removed**

## [Express](https://youtu.be/UT0RC40yzbg?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=88)
Express is a Node.js module (we've used it in the examples above) and the de-facto standard for building web APIs in node. <br>
The Express documentation can be found under [expressjs.com](http://expressjs.com/en/4x/api.html). <br>
### [Features](https://youtu.be/UT0RC40yzbg?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=140)
* routes
  * to forward requests to the appropriate controller functions
* URL-parameters
  *  to capture values at specific positions in the URL
* query string parsing 
* middleware
  * access to the request and response objects
  * access to the next function in the application request-response life cycle

## [Express practice](https://youtu.be/UT0RC40yzbg?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=304)
Now we're using express to handle http requests – as we did with the callback in the previous examples. <br>
Of course we have to import express with `require('express')`, in order to use the module. <br>
There is already a first difference to the **http module**: <br>
* the **http** module returns **an object**
* the **express** module returns **a function**  
  * we can now **call the express function**
    * and get back an **express app** 

### express app
The **express app** is also a function, which corresponds to the **callback function** we have used before: <br>

```js
(req, res) => {}
```

So instead of placing the callback in our `http.createServer()`, we can now use our **express app** at this point: <br>

```js
'use strict';

const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
});
```

The **express app** is a **drop-in-replacement** for the **http-handler**. <br>
<br>
When we now start our server `node app.js` and request information from the specified localhost port `curl -i http://localhost:3000`, we receive the **express app** default response: <br>

![express-default-response](/images/express-default-response.png)

### [Routes](https://youtu.be/UT0RC40yzbg?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=494)
The **express application object** has appropriate functions for all http methods: <br>
* GET
* POST
* PUT
* DELETE

When we define a **route** with express, we can specify to which http call that route reacts and how. <br>
We have to specify the **route** as the 1st and the **handler** as the 2nd parameter. <br>

```js
app.get('/', (req, res) => {
  // ...
});
```

For not-defined routes, express gives back the http status code **404 by default**. <br>

### [sending data](https://youtu.be/UT0RC40yzbg?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=597)
Express has the very handy function `res.send`, which can be used to send data as <br>
* HTML strings
* JSON objects
* JSON arrays

Let's have a look at this example: <br>

```js
'use strict';

const http = require('http');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
});
```

`res.send` has set the header with the status code and content type for us and also ended the connection automatically: <br>

![express-res-send](/images/express-res-send.png)

This one-liner `res.send('Hello World')` replaced the following equivalent of code we had to write without express: <br>

```js
res.writeHead(200, {
    'content-type': 'text/html'
  });
  res.write('Hello World');
  res.end();
```

Now let's add a *person* **object** and send that: <br>

```js
'use strict';

const http = require('http');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const person = {
    firstName: 'Jane',
    lastName: 'Doe'
  };

  res.send(person);
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
});
```

Now we get a **JSON object** back: <br>

![express-res-send_json_1](/images/express-res-send_json_1.png)

Express has automatically stringified our JS-object into JSON and adjusted the content-type ind the HTTP head for us: <br>

![express-res-send_json_2](/images/express-res-send_json_2.png)

The same magic happens very smoothly, when we hand over an **array of objects** to `res.send`: <br>

```js
'use strict';

const http = require('http');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const people = [
    {
      firstName: 'Jane',
      lastName: 'Doe'
    },
    {
      firstName: 'Jonnyodor',
      lastName: 'Doewstoevski'
    }
  ];

  res.send(people);
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
});
```

Our array has been properly parsed and is available at localhost:3000: <br>

![express-res-send_json_array](/images/express-res-send_json_array.png)

### [setting the http status code](https://youtu.be/UT0RC40yzbg?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=789)
The former way to **set the http status** was also with `res.send(500)`, but using this feature is deprecated for future use. <br> 
The new method for this is `res.status(500)` – this would only set the status without sending a message. <br>
If we want only to send the status, we still have to end the call, so `res.status(500).end()`. <br>
To send also a message, we can use `res.status(500).send('Internal Server Error')`, `send()` ends the call automatically. <br>
We can chain functions together, so we could for example give a 404 status back, together with a fancy 404 status page: <br>

```js
app.get('/', (req, res) => {
  res.status(404).send(
    // fancy 404 page here
  );
});
```

### [URL parameters](https://youtu.be/UT0RC40yzbg?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=916)
We can use **URL parameters** for repetitive structures, like for example blog-posts. <br>
A blog might have an URL structure like */blog/2021/11/6* or in words */blog/year/month/day*. <br>
`app.get('/blog/year/month/day')` would resolve the actual path – to build this dynamic, we need to work with variables. <br>
URL variables are specified with a **colon (:)**, so our string has to look like this: */blog/:year/:month/:day*. <br>
Not only can we specify a **dynamic route** like this, we can now access the **route parameters** in our code. <br>
To do that, we use `req.params` + the `.name` of the parameter we'd like to access. <br>
So `req.params.year` for the **year** from our */blog/:year/:month/:day*. <br>
See here an example, where we give back an object reflecting the user's URL entry: <br>

```js
'use strict';

const http = require('http');

const express = require('express');

const app = express();

app.get('/blog/:year/:month/:day', (req, res) => {
  res.send({
    year: req.params.year,
    month: req.params.month,
    day: req.params.day
  });
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
});
```

As you can see, we have entered a blog-post from the 8th of December 1977 – wow, that is what I call an early adopter!

![express_url-parameters](/images/express_url-parameters.png)

If we enter try to access anything not matching our */blog/:year/:month/:day* structure, we just get the default error back as we have not specified anything for */foo* or any other route yet: <br>

![express_default-error](/images/express_default-error.png)

**NOTE:** URL parameters are always given back as **strings**. <br>
So if you require a **numeric value**, to for example query an id in a database, those values might look identically, but they are not **equal (===)**. <br>

**TIP:** An easy way to **convert a string into a number** is to **subtract zero from it**. <br>
If you want to **convert a number into a string** you can simply **add an empty string to it**: <br>

```js
let val1 = '1';

console.log(typeof(val1));
// > string

val1 = val1 -0;

console.log(typeof(val1));
// > number

val1 = val1 + '';
console.log(typeof(val1));
// > string
```

#### [optional URL parameters](https://youtu.be/UT0RC40yzbg?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=1275)
We can make parameters **optional** by adding a **questionmark (?)** to the end of a variable in out url definition. <br>
So if we adjust our prior example as following, we can provide a day in the url, but we don't have to: <br>

```js
app.get('/blog/:year/:month/:day?', (req, res) => {
  res.send({
    year: req.params.year,
    month: req.params.month,
    day: req.params.day
  });
});
```

Year and month remain mandatory: <br>

![express_url-optional-parameter](/images/express_url-optional-parameter.gif)

We set a fallback – to take always the 1st day of the month if not specified further, we can add `|| '1'` to our object: <br>

```js
app.get('/blog/:year/:month/:day?', (req, res) => {
  res.send({
    year: req.params.year,
    month: req.params.month,
    day: req.params.day || '01'
  });
});
```

![express_url-optional-parameter_fallback](/images/express_url-optional-parameter_fallback.gif)

### [Query string](https://youtu.be/UT0RC40yzbg?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=1413)
We can provide choices for our end-users, with the help of the **query string**. <br>
Let's say we want to offer two output formats – JSON, as before plus additionally HTML. <br>
Our url remains */blog/:year/:month/:day?*, but we can use `req.query` to specify further values for conditional code executione. <br>
In the example below we have added the condition `(req.query.format === 'html')`. <br>
So when the user adds `?format=html` we output our date as a html heading instead of a json object. <br> 
*format* is no reserved key-word in this case .. we could have named it anything. <br>
We need to use `return` in our *if* to break out of the execution. Otherwise we would have to add an *else* condition. <br>

```js
app.get('/blog/:year/:month/:day?', (req, res) => {
  if (req.query.format === 'html') {
    return res.send(`<h1 style="color:red">${req.params.day || '01'}.${req.params.month}.${req.params.year}</h1>`);
  }
  res.send({
    year: req.params.year,
    month: req.params.month,
    day: req.params.day || '01'
  });
});
```

When we add `?format=html` in the browser, `req.query.format` gets set and equals **html**.<br>
So our condition is true and the html heading is returned instead of the json object: <br>

![express_querystring](/images/express_querystring.gif)

#### nested queries
`req.query` also supports **nested parameters** – so we could further specify our format options for multiple things … <br>
So we can for example extend our **format** parameter and offer a **data** and a **date** format to choose from. <br>
Se below, that we give two different output option when html is chosen with `format[data]=html`. <br>
The user has also the option to chose the date format of the UK, by adding `format[date]=uk`. <br>

```js
app.get('/blog/:year/:month/:day?', (req, res) => {
  if (req.query.format.data === 'html') {
    if (req.query.format.date === 'uk') {
      return res.send(`<h1 style="color:blue">${req.params.day || '01'}/${req.params.month}/${req.params.year}</h1>`);
    } else {
      return res.send(`<h1 style="color:red">${req.params.day || '01'}.${req.params.month}.${req.params.year}</h1>`);
    }
  }
  res.send({
    year: req.params.year,
    month: req.params.month,
    day: req.params.day || '01'
  });
});
```

The **question mark (?)** which initiates the user's **query** has only to be added once. <br>
Multiple **query conditions** get added to the URL with the **ampersand (&)** symbol. <br>
See, we already added `?format[data]=html` and than `&format[date]=uk` to change the date format: <br>

![express_querystring-nested](/images/express_querystring-nested.gif)

### further request information
There are a few others **request properties** which are worth mentioning: <br>

* req.ip
  * ip address of requesting client
* req.protocol
  * http, https, …
* req.secure
  * is the connection encrypted 
* req.method
  * GET, PUT, DELETE, …
* req.hostname
  * hostname of the server
* req.path
  * requested path

Lets have a look at this in action: <br>

```js
app.get('/', (req, res) => {
  res.send(`
    <p><b>req.ip:</b> ${req.ip}</p>
    <p><b>req.protocol:</b> ${req.protocol}</p>
    <p><b>req.secure:</b> ${req.secure}</p>
    <p><b>req.method:</b> ${req.method}</p>
    <p><b>req.hostname:</b> ${req.hostname}</p>
    <p><b>req.path:</b> ${req.path}</p>`
  );
});
```

![request-properties](/images/request-properties.png)

## [Middleware](https://youtu.be/UT0RC40yzbg?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=1806)
Middleware handles **cross-cutting-concerns**, such as <br>
* authentication
* authorization
* logging

Those concerns are not an active part of the requested logic, but might affect it .. <br>
One concern is for example to identify the permissions of the requesting user, to gain or restrict access to returned data. <br>
Further concerns are the validation of tokens, cookie readout, etc. <br>

Express integrates middleware with `app.use`. <br>
A middleware is basically just a **function** which is not only called for a single route, but for **all routes**. <br>
Middleware does something, like the call or the verification of permissions and calls than the next function. <br>
Here would be made the decision, if the request is passed on to the actual handler for the request, or if the user gets some sort of "insufficient privileges" response instead. A middleware takes also in a **request** and **response** parameter, but also has a **next** parameter, which specifies the **naxt function in the chain**. This could be the handler for the http route, but also could be the next middleware function … <br>
<br>
Here our grown application, now supplemented by a middleware function to log the *method* and the *path* of the request: <br>

```js
'use strict';

const http = require('http');

const express = require('express');

const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Request Handler
app.get('/blog/:year/:month/:day?', (req, res) => {
  if (req.query.format.data === 'html') {
    if (req.query.format.date === 'uk') {
      return res.send(`<h1 style="color:blue">${req.params.day || '01'}/${req.params.month}/${req.params.year}</h1>`);
    } else {
      return res.send(`<h1 style="color:red">${req.params.day || '01'}.${req.params.month}.${req.params.year}</h1>`);
    }
  }
  res.send({
    year: req.params.year,
    month: req.params.month,
    day: req.params.day || '01'
  });
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
});
```

The order is import here, if would place the middleware after the handler, it would **not be executed** as the handler **ends the call** with `res.()`. <br> 
The middleware though contains `next()` which keeps the execution running. <br>
<br>
Our middleware logs the specified attributes in the console – no mater which route is requested: <br>

![middleware-logging](/images/middleware-logging.png)

### [configure middleware](https://youtu.be/UT0RC40yzbg?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=2198)
Our middleware should be **outsourced**, maintained as **modular components**, instead of writing the same code in multiple files. <br>
<br>
So let's move our middleware log function int the separate file *loger.js*. <br>
There we transform it into a regular function and export it: <br>

```js
'use strict';

const logger = function (req, res, next) {
  console.log(`${req.method} ${req.path}`);
  next();
};

module.exports = logger;
```

In the *app.js* file we have to **import** it `const logger = require('./logger')`. <br>
And can now **use** it `app.use(logger)`. <br>
Our middleware works exactly as before at this point, method and path get logged in the console per request. <br>

### [Setup function](https://youtu.be/UT0RC40yzbg?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=2265)
This `app.use(logger)` corresponds to `app.use((req, res, next) => {});` the logger.js function with its specified parameters.<br>
So we can't just hand over any new parameters, which are not defined in the function. <br>
What we can do though is to use a so called **setup function**. <br>
That setup function lives in our main file *app.js* takes in options and returns the actual middleware function. <br>
That means, that we have to call the **setup function** with `app.use()` to hand over our additional parameters. <br>
<br>
*logger.js* has to be adjusted appropriate, in order to take in the new parameters. <br>
Now we can react on the options, make them required, throw an error if they're missing … <br>
As those parameters are part of the **sourrounding** function, of our actual middleware, we can no access them in the inner function as well. <br>


```js
'use strict';

const logger = function (options) {
  if (!options) {
    throw new Error('Options are missing.');
  }
  if (!options.level) {
    throw new Error('Level is missing.');
  }

  return function (req, res, next) {
    console.log(`(${options.level}) ${req.method} ${req.path}`);
    next();
  };
};

module.exports = logger;
```

In our *app.js* we can now call the **logger function** with additional parameters: <br>

```js
app.use(logger({ 
  level: 'info' 
}));
```

Voilà, our *info* string made it into the console: <br>

![setup-function](/images/setup-function.png)

## [static middleware](https://youtu.be/UT0RC40yzbg?list=PL6QrD7_cU23kaZ05MvixcoJ5vctRD1qgC&t=2569)
Express has a built-in middleware to deliver static files like <br>
* HTML, CSS or JavaScript files
* assets like pictures and videos

We have to hand over the directory of the files and we can specify the rout on which the middleware is active. <br>
**NOTE:** There is in integrated node module – **path** – to take care about server side routes. <br>
For the demo of the static middleware we have created a new folder *client* with an *index.html* in it. <br>
We could now define our internal route like this `express.static('./client')` but could had to adjust everything than if the path change or our application would be running on a system with a different file system (Windows for example, using backslashes). <br>
To save us some trouble, we can use the **path** module, which joins our path together on demand: <br>

```js
const clientDirectory = path.join(__dirname, 'client');
```

The **__dirname** returns the path of the folder where the current JavaScript file resides. <br>
For the client folder, we simply write **its name** and path takes care about everything in between for us. <br>
We now can use the variable with the path function `express.static(clientDirectory)`. <br>
Here the complete code: <br>

```js
'use strict';

const http = require('http'),
      path = require('path')

const express = require('express');

const logger = require('./logger');

const clientDirectory = path.join(__dirname, 'client');

const app = express();

app.use(logger({ 
  level: 'info' 
}));

app.use('/', express.static(clientDirectory));

// Request Handler
app.get('/blog/:year/:month/:day?', (req, res) => {
  if (req.query.format.data === 'html') {
    if (req.query.format.date === 'uk') {
      return res.send(`<h1 style="color:blue">${req.params.day || '01'}/${req.params.month}/${req.params.year}</h1>`);
    } else {
      return res.send(`<h1 style="color:red">${req.params.day || '01'}.${req.params.month}.${req.params.year}</h1>`);
    }
  }
  res.send({
    year: req.params.year,
    month: req.params.month,
    day: req.params.day || '01'
  });
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
});
```

The *index.html* in the *client* folder just contains a little greeting: <br>

```html
<body>
  <h1>Hallo Node.js</h1>
</body>
```

Now when we enter the root directory of our local host, we get delivered that *index.html*: <br>

![static-middleware](/images/static-middleware.png)

The **static middleware** is the only integrated middleware included in Express. <br>

### body-parser middleware
The [**body-parser** middleware](https://www.npmjs.com/package/body-parser) is usually used to write the backend for single page applications. <br>
It takes for example care of extracting and parsing data out of a POST request. <br>
The external module provides the following parsers: <br>

* [JSON body parser](https://www.npmjs.com/package/body-parser#bodyparserjsonoptions)
* [Raw body parser](https://www.npmjs.com/package/body-parser#bodyparserrawoptions)
* [Text body parser](https://www.npmjs.com/package/body-parser#bodyparsertextoptions)
* [URL-encoded form body parser](https://www.npmjs.com/package/body-parser#bodyparserurlencodedoptions)

In the example below we set up a **post route** */users* on our server to send back a greeting to the user and log it in the console: <br>

```js
'use strict';

// integrated modules
const http = require('http'),
      path = require('path');

// modules installed from npm 
const express    = require('express'),
      bodyParser = require('express');

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'client')));

app.get('/articles', (req, res) => {
  res.send([
    { id: 1, title: 'foo' }
  ]);
});

app.post('/users', (req, res) => {
  res.send(`Hello ${req.body.user}`);
  console.log(`user received: ${req.body.user} `);
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
```

Now we're using **curl** to post a **JSON Object** to our */users* path: <br>

```sh
curl -X POST -d '{"user":"jane.doe"}' -H "Content-Type: application/json" http://localhost:3000/users
```

In the terminal from which we have sent the post, we receive the greeting: <br>

![body-parser_curl](/images/body-parser_curl.png)

And in the console, where our server is running, we receive the log: <br>

![body-parser_log](/images/body-parser_log.png)

As we run `app.use(bodyParser.json())`, we can parse any **JSON structure**. <br>
Let's add some attributes to our user object: <br>

```sh
curl -X POST -d '{"user": {"firstName": "Max", "lastName": "Mustermann"}}' -H "Content-Type: application/json" http://localhost:3000/users
```

And update our */users* post route: <br>

```js
app.post('/users', (req, res) => {
  res.send(`Hello ${req.body.user.firstName}`);
  console.log(`user received: ${req.body.user.firstName} ${req.body.user.lastName}`);
});
```

Outcome: *user received: Max Mustermann* in the one, *Hello Max* in the other console. <br>
<br>
**NOTE:** The body-parser is for **security reasons** restricted to a max data volume of **100KB** data volume. <br>
If we need to adjust that size, we can do so with the **limit parameter** in the **options object**: <br>

```js
app.use(bodyParser.json({
  limit: '250kb'
}));
```

Also set as a default is the **strict parsing** of **objects** and **arrays**. Other data types like single strings are not parsed. <br>
This can also be changed in the **options object**: <br>

```js
app.use(bodyParser.json({
  strict: false
}));
```

## [Cookies](https://youtu.be/daeIH0mtOO0?t=1538)
### write cookies 
To **write cookies** in Node.js, **no middleware** is required. <br>
That part is taken care of by the **integrated function** `cookie()`. <br>
So if we add the following route to our server, the cookie is written when */hello* is requested. <br>

```js
app.get('/hello', (req,res) => {
  res.cookie('user', 'jane.doe').send('Hallo Welt!');
});
```

We can check this via an other terminal window, with the **curl** command: <br>

```sh
curl -i http://localhost:3000/hello
```

Our cookie got written with the value we've specified. <br>

![node-cookie](/images/node-cookie.png)

#### cookie options
There are more what we can do with the `cookie()` function, we can give it an **options object** and specify cookie properties: <br>
* maxAge
  * set lifespan of the cookie
* secure
  * restrict cookie to https connections only
  * important to when https is used to prevent an attack vector!
* httpOnly
  * client side cookie access restricted when http
* signed
  * allows to sign the cookie
  * only parameter which doesn't come out of the box 
  * requires cookie-parser middleware!

```js
app.get('/hello', (req,res) => {
  res.cookie('user', 'jane.doe', {
    maxAge: 14 * 60 * 60 * 1000,
    secure: true,
    httpOnly: true,
    signed: true // cookie-parser
  }).send('Hallo Welt!');
});
```

#### delete cookies
The `clearCookie()` function is used to delete a cookie: <br>

```js
res.clearCookie('user');
```

### [read cookies](https://youtu.be/daeIH0mtOO0?t=1847)
To **read cookies**, we require the **coockie-parser middleware**. <br>
This is the same middleware that we require, if we want to **sign a cookie** with a password (optional). <br>
<br>
If we want to sign a cookie, we can give it the **secret** option and can access it with other middlewares via `req.secret`. <br>

```js
app.use(cookieParser('secret'));

// req.secret
```

The actual read process is rather simple. cookie-parser has two objects, one for regular and one for signed cookies: <br>

```js
const user = req.cookies.user;
const user = req.signedCookies.user;
```

### [Sessions](https://youtu.be/daeIH0mtOO0?t=1955)
The **[express session](https://www.npmjs.com/package/express-session)** middleware required till version 1.5.0, the *cookie-parser* middleware to work, but can now access session data independent from it. <br>

```js
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 14 * 60 * 60 * 1000 }
}));

app.get('/hello', (req,res) => {
    req.session.user = 'jane.doe';
    console.log(req.session.user);
    // > jane.doe 
  });
```

Per default are sessions stored in RAM, but here a list with compatible [session stores](https://www.npmjs.com/package/express-session#compatible-session-stores). <br>

## [CORS](https://youtu.be/daeIH0mtOO0?t=2201)
**CORS** stands for [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) – an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. 
The [cors middleware](https://www.npmjs.com/package/cors) for Express is a comfortable way to manage CORS in Node.js. <br>
To use cors we have of course to install it and than call the **cors function** `app.use(cors());`, which implements the middleware. <br>
<br>
We can as well provide that function with a **configuration object** to restrict the access from a specific website for example or which status code should be used. <br>

```js
app.use(cors({
  origin: 'https://www.heikokraemer.de',
  optionSuccessStatus: 200
}));
```

## [lusca](https://youtu.be/daeIH0mtOO0?t=2447)
[**lusca**](https://www.npmjs.com/package/lusca) is a web application security middleware which is helps to protect your project from <br>
* [csrf](https://en.wikipedia.org/wiki/Cross-site_request_forgery)
  * cross-site request forgery
* [xss](https://en.wikipedia.org/wiki/Cross-site_scripting)
  * cross-site scripting

and other malicious techniques and provides an easy way to enable <br>
* [HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
  * HTTP Strict Transport Security
  * a way to pin a site to https requests only

lusca requires **express-session**, **cookie-session**, their express 3.x alternatives, or other **session object management** in order function. <br>

## [cache handling](https://youtu.be/daeIH0mtOO0?t=2543)
If you want to prevent **client-side caching**, there is the middleware [**nocache**](https://www.npmjs.com/package/nocache) to support you. <br>
It's very simple to use, the two lines below are the whole thing, nocache then sets the headers to disable caching. <br>

```js
const nocache = require("nocache");
// ...
app.use(nocache());
```

## Access files with Node.js
## [The require() function](https://youtu.be/fW0HVwqX4TM?t=67)
### Access JavaScript files with require()
The **require function** can't not only load modules, but also **JavaScript files**. <br>
<br>
*app.js:*

```js
'use strict';

const showMessage = require('./showMessage');

showMessage('Hi there :)');
```

*showMessage.js:*

```js
'use strict';

const showMessage = function (text) {
  console.log(text);
};

module.exports = showMessage;
```

We import the file *showMessage.js:* and have therewith access to the `showMessage()` function in our *app.js* file. <br>

### [Access JSON files with require()](https://youtu.be/fW0HVwqX4TM?t=157)
`require()` can also access **JSON files**. <br>
<br>
*data.json:*

```json
{
  "text": "Hi there :)"
}
```

*app.js:*

```js
'use strict';

const data = require('./data'),
      showMessage = require('./showMessage');

showMessage(data.text);
```

This version of *app.js* gives us the same result as the prior version, just that we now got the text value from *data.json*. <br>
Common use cases for **JSON file access** in Node.js are <br>
* **config files**
* **package.json**

To load the package.json is useful to write values like the name and the version to log-files, or to analyse dependencies. <br>
<br>
*package.json:*

```js
{
    "name": "require-demo-app",
    "version": "0.1.0"
}
```

*app.js:*

```js
'use strict';

const data        = require('./data'),
      packageJson = require('./package'),
      showMessage = require('./showMessage');

showMessage(`${packageJson.name} ${packageJson.version}`);

showMessage(data.text);
```

Now we can not only output the message value, but also the app's name and version as specified in the *package.json*. <br>

![require-demo](/images/require-demo.png)

### [require() characteristics](https://youtu.be/fW0HVwqX4TM?t=400)
* require() is synchronous
* require() caches

The require() function is an exception to the other functions in Node.js – which are performed asynchronous by default. <br>
Require is executed synchronous and loads all dependencies **at the start of the program**. <br>
At least that is what's expected – you should **avoid to use require somwhere in the middle** of the execution, as it could pause the program flow when loading things. <br>
**RULE:** All **requires** always **at the top** of your application! <br> 
<br>
`require()` caches its results in the **RAM** and can so faster access them if they are required again. <br>
To demonstrate this behaviour, here an example: <br>
*cachDemo.js:*

```js
'use strict';

const foo = {
  bar: 23
};

console.log('cachDemo.js loaded');

module.exports = foo;
```

We specify <br>
* to load the *cachDemo.js* twice into the *app.js* file
* to output both variables in the console
* to compare both variables

*app.js:*

```js
'use strict';

const data1 = require('./cachDemo'),
      data2 = require('./cachDemo');

console.log(data1);
console.log(data2);

console.log(data1 === data2);
```

In fact *cachDemo.js* got loaded only once, both variables are equal to each other as they refer to the same place in memory. <br>

![require-caching](/images/require-caching.png)

## [The fs module](https://youtu.be/fW0HVwqX4TM?t=950)
**fs** stands for **file system**. This integrated module grants access to **files** and **directories**. <br>
The [Node.js API Documentation](https://nodejs.org/api/fs.html) describes a whole bunch of **fs fucntions**, like <br>
* access
* appendFile
* chmod
* close
* mkdir
* rmdir 

and a lot more. It's definitely an advantage to be familiar with UNIX commands at this point. <br>
A lot of those fs function names are corresponding to their UNIX command equivalent. <br>

### read directories and files
Most essential for getting started with the **fs module** are the functions to read **directories** and **files**: <br>

* **read directories:**
  * fs.readdir
  * fs.readdirSync
* **read files:**
  * fs.readFile
  * fs.readdFileSync

There are two versions of those functions – with / without the **Sync** suffix. <br>
The **Sync** versions `fs.readdirSync` and `fs.readdFileSync` are processed synchronous. <br>
Those function give back a **direct return value**. So they are used to load files **at the beginning** of a program. <br>  
Those other functions are **asynchronous** and work with **callbacks**. They're used to access files without interrupting a running program. <br> 
<br>
Let's have a look at the differences of the two `fs.readdir` versions, first `fs.readdirSync`: <br>

```js
'use strict'

const fs = require('fs');

const entries = fs.readdirSync('.');
console.log(entries);
// > [ 'app.js', 'archive' ]
```

For the **synchronous** version we can just specify the directory to read and get back and array with all things in it. <br>
<br>
For the **asynchronous** version we have to set the callback functions, with an parameter for **errors** and one for the **entiries**. <br>

```js
'use strict'

const fs = require('fs');

fs.readdir('.', (err, entries) => {
  console.log(entries);
  // > [ 'app.js', 'archive' ]
});
```

The result is the same, but this time our request  to read the folder was processed asynchronously. <br>
<br>
Lets now have a look ar `readFile`. <br>
**NOTE:** The "F" in `readFile` is **upper case**, while the "d" in `readdir` is **lower case**. 
I've added a *package.json* to the directory and try to access it: <br>

```js
'use strict'

const fs = require('fs');

fs.readdir('.', (err, entries) => {
  console.log(entries);
  // > [ 'app.js', 'archive', 'package.json' ]
});

fs.readFile('package.json', (err, packageJson) => {
  console.log(packageJson);
  // > <Buffer 7b 0a 20 20 22 6e 61 6d 65 22 3a 20 22 66 73 2d 64 65 6d 6f 22 2c 0a 20 20 22 76 65 72 73 69 6f 6e 22 3a 20 22 30 2e 30 2e 30 22 0a 7d>
});
```

The outcome is a bit unexpected. While `readdir` still gets us a valid array, `readFile` gives us a bunch of numbers. <br>
This is actually correct. We received our result in **binary code**, as we have not specified the proper **encoding** for the file. <br>
The `readFile` function takes in an other **parameter for the encoding**. <br>
If we adjust our code and add encoding for *utf8* the result is much more readable: <br>

```js
fs.readFile('package.json', 'utf8', (err, packageJson) => {
  console.log(packageJson);
  // > {
  // >   "name": "fs-demo",
  // >   "version": "0.0.0"
  // > }
});
```

**NOTE:** Our output is **not** a JSON object, just a string, that looks like one. <br>
To actually get a JSON object at this point, we would have to parse it firs: <br>

```js
fs.readFile('package.json', 'utf8', (err, packageJson) => {
  const configuration = JSON.parse(packageJson);

  console.log(configuration.version);
  // > 0.0.0
});
```

After the parsing we have an appropriate object and can request values from it via dot notation. <br>
**Info:** `require()` does the parsing automatically for us when loading a JSON file. <br>
<br>
`readFile` has more option parameters, so we can provide it with an **parameter object** to specify multiple options. <br>
This is how that would look: `fs.readFile('package.json', { encoding: 'utf8', ... }, (err, packageJson)`. <br>

### [changing directories](https://youtu.be/fW0HVwqX4TM?t=1579)
This is what our little program looks like now: <br>

```js
'use strict'

const fs = require('fs');

fs.readdir('.', (err, entries) => {
  console.log(entries);
});

fs.readFile('package.json', 'utf8', (err, packageJson) => {
  const configuration = JSON.parse(packageJson);

  console.log(configuration.version);
});
```

It works perfectly – **when executed while we are in the directory where it is located!** <br>
But when we change our location `cd ..` go one directory back and then execute the program from there … <br>
`node node-js_sandbox/app.js` – we will get an other result. <br>
* the content of our working directory (`pwd`) is shown
* we get an *undefined* for the package.json
* our try to `JSON.parse()` throws an error

Our program user `'.'` on the directory from where we were executing, not from where the *app.js* was located. <br>
When we add an output of the error message into the `readFile()` function … <br>

```js
  if (err) {
    return console.log(err.message);
  }
```

… we get this a bit clearer displayed in the console: `// > ENOENT: no such file or directory, open 'package.json'`. <br>
ENOENT = Error no file system entry <br>

### [The path module](https://youtu.be/fW0HVwqX4TM?t=1700)
We have covered the [path module](#static-middleware) before, now is a good time to recall that. <br>
You can use **path** to determine, if you're on a windows or unix system: <br>

```js
'use strict'

const fs = require('fs'),
      path = require('path');

function myPath() {
  if (path.sep === '/') {
    console.log('you are on the right path');
  }
  else {
    console.log('you are on the wrong path');
  }}

myPath();
// > you are on the right path
```

Now we could puzzle an OS independent path with something like this: `const filename = directory + path.sep + 'package.json'`. <br>
But lets instead use `const filename = path.join(directory, 'package.json')` and save us some trouble. <br>
<br>
Back to our little program. If we want it to show us the content of the directory where the *app.js* file is located and output a value from the *package.json*, which is located within the same folder … we can user the **__dirname** variable in combination with `path.join()`. <br>

```js
'use strict'

const fs = require('fs'),
      path = require('path');

fs.readdir(__dirname, (err, entries) => {
  console.log(entries);
  // > [ 'app.js', 'archive', 'package.json' ]
});

fs.readFile(path.join(__dirname, 'package.json'), 'utf8', (err, packageJson) => {
  if (err) {
    return console.log(err.message);
  }
  const configuration = JSON.parse(packageJson);
  console.log(configuration.version);
  // > 0.0.0
});
```

No matter from where we are running that *app.js* now, we will get the same result. <br> 

### path variables
Beside `__dirname` there is an other variable we can use `__filename`. <br>
Additionally there is the function `process.cwd()` – let's see, what these three things are doing. <br>
<br>
My *app.js* file is in the directory *node-js_sandbox*. <br>
The full path to the file is */home/heiko/repos/github/webDev/node-js_sandbox/app.js*. <br>
I have updated the *app.js* as following: <br>

```js
'use strict'

const fs = require('fs'),
      path = require('path');

console.log(process.cwd());
console.log(__dirname);
console.log(__filename);
```

If I run the *app.js* from my *home* directory, I get the following result: <br>

![path-variables](/images/path-variables.png)

* `console.log(process.cwd())`
  * gave us the directory **from where we were executing**
* `console.log(__dirname)`
  * gave us the directory **where app.js is located**
* `console.log(__filename)`
  * gave us the directory **where app.js is located** + **its file name**

### [deconstructing paths](https://youtu.be/fW0HVwqX4TM?t=2345)
#### path.basename()
As we have learned earlier,  `__filename` provides us with the complete path of the executed file. <br>
If we would like to have **only the file name** without the path, we could try our luck with some crazy string parsing … <br>
… or we could just use the `path.basename()` function to do that for us: <br>

```js
'use strict'

const fs = require('fs'),
      path = require('path');

console.log('Current file: ', path.basename(__filename));
// > Current file: app.js
```

`path.basename()` has separated the filename from the path for us – and it can do even more. <br>
If we want to exclude the extension *.js*, we can just pass that over as a second parameter: <br>

```js
console.log('Current file:', path.basename(__filename, '.js'));
// > Current file: app
```

#### path.dirname()
`path.dirname()` does basically the same as the `__dirname` variable. <br>
If we provide it with the `__filename`, we get the path to it as a result. <br>

```js
console.log('Current directory:', path.dirname(__filename));
// > Current directory: /home/heiko/repos/github/webDev/node-js_sandbox
```

If you provide `path.dirname()` with a directory name, it will cut off the last directory. <br>
So if we want only the stand-alone name of our `__dirname`, we could do something like this: <br>

```js
console.log('Current directory name:', __dirname.replace((path.dirname(__dirname) + path.sep), ''));
// > Current directory name: node-js_sandbox
```

#### path.extname()
To get only the file extension of a file, for example the one behind `__filename`, we can use the `path.extname()` function: <br>

```js
console.log('Current file extension:', path.extname(__filename));
// > Current file extension: .js
```

## [Writing files with Node.js](https://youtu.be/fW0HVwqX4TM?t=2508)
As we can read files with Node.js, we can ass well **write** files. <br>
The equivalent `fs` methods for this are: <br>
* fs.writeFile()
* fs.writeFileSync()

`fs.writeFiles()` requires a few parameters: `fs.writeFile(file, data[, options], callback)`. <br>
Let's see this in action and go through the code: <br>

```js
'use strict'

const fs = require('fs'),
      path = require('path');

const packageJson = require('./package');

const filename = path.join(__dirname, 'version.txt');

fs.writeFile(filename, packageJson.version, 'utf8', err => {
  if (err) {
    return console.log(err.message);
  }
  console.log(`${path.basename(filename)} successful created!`);
});
```

Here we are writing the version from our *package.json* in the new created file *version.txt*. <br>
To do so, we process the following steps: <br>

* get the *package.json* with `require()`
* set the *filename* with `path.join()` and `__dirname`
  * (we want to have that file in the current directory)
* create the file with `writeFile()`, providing
  * the name (including the whole path to it)
  * the file's content (extracted version value)
  * encoding option
  * callback for error handling
    * if an error occurs, we print it out in the console
    * if no error -> we print out a success message

The result is a new text file with our version number in it and the success message in the console. <br>
If we run the *app.js* again, we overwrite the current *version.txt*. <br>
A changed version in the *package.json* would be reflected in the new file. <br>
<br>
The third parameter position, where we have specified the encoding **utf8** is for the **options**. <br>
As there are multiple options available, we could as well replace that with the **option object**: `{ encoding: 'utf8' }` <br>

### Writing temporary files
**NOTE:** Node.js writing processes are not atomic operations. <br>
**All or nothing** does not apply here, if the operation breaks during execution while overwriting a file, that file will not be restored, you end up with some half-complete data garbage. <br>
A work-around would here be to write a temporary file first. <br>
If the temp-file creation was successful, you can use `fs.rename()` to replace the former file with the new version. <br>
`fs.rename()` is an atomic operation and will restore the initial state of the former file if something crashes. <br>
To store a temporary file, we can use the **os module**, specifically the method `os.tmpdir()`. <br>
<br>
`fs.rename()` is comparable to the Unix `mv` command. <br>
**NOTE:** The current and the target path must be on the **same device**, even on the **same partition**. <br>
An other notable fact is that the `fs` module is lacking an equivalent to the Unix `cp` command to copy files. <br>

### [fs-extra](https://youtu.be/fW0HVwqX4TM?t=3103)
There is an **npm module** – [**fs-extra**](https://www.npmjs.com/package/fs-extra), which can be used as an **drop-in replacement** for `fs` to keep its basic functionalities but also to extend its scope. <br>
The module is easy to install via `npm install fs-extra` and provides extended functionalities like: <br>

* copy
* move
  * this one works **cross-device**
* ensureDir
  * create specified directory + its non existing directories

**Drop in replacement** means, that we can just replace our existing code and require `fs-extra` **instead** of `fs`: <br>

```js
'use strict'

const fs   = require('fs-extra'),
      path = require('path');

const packageJson = require('./package');

const filename = path.join(__dirname, 'version.txt');

fs.writeFile(filename, packageJson.version, 'utf8', err => {
  if (err) {
    return console.log(err.message);
  }
  console.log(`${path.basename(filename)} successful created!`);
});
```

And it is still working as it did before. <br>

## [Understand callbacks in Node.js](https://youtu.be/PAr063Qzeg8)
### Functions 
Functions in JavaScript <br>
* structure code
* define name spaces
* encapsulate date

Functions are the **only structuring element** of JavaScript. <br>
Key-words like *class* or *extends* are syntactic sugar. <br>

JS allows nested functions. <br>
Nested functions enable recursion. <br>
Nesting of definitions enables local helper functions.<br>

### [Higher order functions](https://youtu.be/PAr063Qzeg8?t=376)
* functions are 1st class data types
  * function as parameter
  * function as return value

An example for a higher order function is the `processArray` function below. <br>
It takes in an array and an other function as a parameter. <br>
The logic applied to that array's values depend on the function that we hand over. <br> 

```js
'use strict';

const square = function (number) {
  return number ** 2;
};

const addOne = function (number) {
  return number + 1;
};

const processArray = function (items, fn) {
  const result = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    result.push(fn(item));
  }

  return result;
};

const numbers = [ 1, 2, 3, 4, 5 ];

const squares = processArray(numbers, square);
console.log('squares:', squares);
// > squares: [ 1, 4, 9, 16, 25 ]

const numsPlusOne = processArray(numbers, addOne);
console.log('numsPlusOne:', numsPlusOne);
// > numsPlusOne: [ 2, 3, 4, 5, 6 ]
```

With **ES6 arrow functions** we can even get rid of those `square` and `addOne` functions and write them **in-line** as parameter. <br>

```js
'use strict';

const processArray = function (items, fn) {
  const result = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    result.push(fn(item));
  }

  return result;
};

const numbers = [ 1, 2, 3, 4, 5 ];

const squares = processArray(numbers, n => n ** 2);
console.log('squares:', squares);
// > squares: [ 1, 4, 9, 16, 25 ]

const numsPlusOne = processArray(numbers, n => n + 1);
console.log('numsPlusOne:', numsPlusOne);
// > numsPlusOne: [ 2, 3, 4, 5, 6 ]
```

Those few characters replaced the whole functions. The result is still the same. <br>
<br>
Whit that higher order function in place, we're not even bound to process numbers. <br>
Any array we'll pass over will also be processed by the function we're passing with it. <br>

```js
const words = [ 'the', 'quick', 'brown', 'fox' ];
const wordLengths = processArray(words, w => w.length);
console.log('wordLengths:', wordLengths);
// > wordLengths: [ 3, 5, 5, 3 ]
```

If we want to map those values into an JS object, we have brackets around the object. <br>
JavaScript will otherwise interpret those curly bracket as the start of the function body. <br>

```js
const words = [ 'the', 'quick', 'brown', 'fox' ];
const wordObjects = processArray(words, w => ({ word: w, length: w.length}));
console.log('wordObjects:', wordObjects);
```

![wordObjects-output](/images/wordObjects-output.png)

### array.map()
Our example from above is even easier to process with the array method `map()`. <br>
Map is usable on an array, takes in a function parameter and applies that function to each value of the array. <br>

```js
'use strict';

const numbers = [ 1, 2, 3, 4, 5 ];

const squares = numbers.map(n => n ** 2);
console.log('squares:', squares);

const numsPlusOne = numbers.map(n => n + 1);
console.log('numsPlusOne:', numsPlusOne);

const words = [ 'the', 'quick', 'brown', 'fox' ];
const wordObjects = words.map(w => ({ word: w, length: w.length}));
console.log('wordObjects:', wordObjects);

const wordLengths = words.map(w => w.length);
console.log('wordLengths:', wordLengths);
```

![array-map](/images/array-map.png)

`.map()` is therewith a good example for a build-in higher order function. <br>
`forEach()` is an other example of an higher order function, so is `reduce()` <br>

## [Callbacks](https://youtu.be/PAr063Qzeg8?t=1544)
A call back indicates that a certain process has been completed and gives back a specific result. <br>
We can use **functions** to transform sequential programs and to set up callbacks. <br>
<br>
*sequential version:*

```js
'use strict';

const add = function (left, right) {
  return left + right;
};

const sum = add(23, 42);

console.log(sum);
// > 65
```

*callback version:*

```js
'use strict';

const add = function (left, right, callback) {
  const sum = left + right;

  callback(sum);
};

add(23, 42, sum => {
  console.log(sum);
  // > 65
});
```

This is rather non-practical example for a callback, but it shows one thing clearly: <br>
Even though callbacks are often associated with **asynchronous code** – they are not necessary asynchronous! <br>
When we are dealing with asynchronous code, we are facing callbacks. But that's not necessary true the other way around. <br>

### [Asynchronous code](https://youtu.be/PAr063Qzeg8?t=1934)
**All I/O (input/output) operations in Node.js are asynchronous**. <br> 
(Except the `require()` function and the `fs` **synchronous** functions.) <br>
<br>
Here an example for an asynchronous callback, we read the file *foobar.txt* and log its content in the console: <br>

```js
'use strict';

const fs   = require('fs'),
      path = require('path');

const fileName = path.join(__dirname, 'foobar.txt');

console.log('### 1');
fs.readFile(fileName, 'utf8', (err, content) => {
  console.log(content);
});
console.log('### 2');
```

The additional console logs help us to track the **order of execution**: <br>

![async-callback](/images/async-callback.png)

Our **asynchronous** callback has been executed last. <br>
<br>
Let's those markers to the **synchronous** example from before and compare them: <br>

```js
'use strict';

const add = function (left, right, callback) {
  const sum = left + right;

  callback(sum);
};

console.log('### 1');
add(23, 42, sum => {
  console.log(sum);
  // > 65
});
console.log('### 2');
```

![sync-callback](/images/sync-callback.png)

Here we can see a **sequential** order of execution. <br>

### [asynchronous error handling](https://youtu.be/PAr063Qzeg8?t=2111)
Error handling works different with asynchronous callbacks as we might be used to. <br>
When we take our earlier example, but delete the *foobar.txt* file, we don't receive an exception back, only **undefined**. <br>
Even though when we explicitly try to **catch** the exception … we don't get one – there is none thrown. <br>

```js
'use strict';

const fs   = require('fs'),
      path = require('path');

const fileName = path.join(__dirname, 'foobar.txt');

try {
  fs.readFile(fileName, 'utf8', (err, content) => {
    console.log('content:', content);
    // > content: undefined
  });
} catch (ex) {
  console.log('### ERROR:', ex.message);
}
```

The only thing we see in the console is *content: undefined*. <br>
This happens because the **try / catch** logic is executed **sequential**. <br>
The try block initiates the `readFile()` method, hands it over to the file system – success! <br>
The callback with that possible exception is still in queue when the catch block is in line. <br>
For that reason, we have to work with the **err** parameter in asynchronous callbacks. <br>

#### [err parameter](https://youtu.be/PAr063Qzeg8?t=2310)
Asynchronous callbacks have always the same structure:
* **err** is the first parameter
* all **data** parameters follow **after** err 

**RULE:** Never ignore err – we should **always** check for errors! <br>
As we don't want our program to continue, when we catch an error, we use `return` to interrupt the execution. <br>
This is called the **early return pattern** and usable in JavaScript due to the automatic memory allocation (garbage collector). <br>
<br>
Good practice is to handle a potential error **first** in the callback function: <br>

```js
'use strict';

const fs   = require('fs'),
      path = require('path');

const fileName = path.join(__dirname, 'foobar.txt');


  fs.readFile(fileName, 'utf8', (err, content) => {
    if (err) {
      return console.log(err.message);
    }
    console.log('content:', content);
  });
```

Now we get an appropriate message back if the file can't be found: <br>
*ENOENT: no such file or directory, open '/home/heiko/repos/github/webDev/node-js_sandbox/foobar.txt'*. <br>

#### [null err parameter](https://youtu.be/PAr063Qzeg8?t=2573)
When we write the asynchronous response ourselves we give back `null` as the error parameter. <br>
Here demonstrated with `setTimeout()` – there is no possibility for an error, so we hand over `null`: <br>

```js
'use strict';

const add = function (left, right, callback) {
  const sum = left + right;

  setTimeout(() => {
    callback(null, sum); // <- give back null as error parameter
  }, 1 * 1000);
};


add(23, 42, (err, sum) => {
  if (err) {
    return console.log(err);
  }
  console.log(sum);
  // > 65
});
```

### [synchronous vs asynchronous](https://youtu.be/PAr063Qzeg8?t=2754)
There are scenarios in Node.js, where we can have a synchronous and asynchronous callback simultaneously. <br>
This might for example happen, when we work with a **cached file** – at the first load it's asynchronously loaded .. on the second run it is cached and immediately available (synchronously loaded) – what apparently isn't a good idea. <br>
In that case we have to … kind of **fake delay** the operation to be executed asynchronously. <br>
I have not really understood why at this point, but we can do that with `setTimout()` and that timeout is set to `0`. <br>
<br> 
An alternative way to set this up is with `setImmediate()`. [Example here](https://nodejs.dev/learn/understanding-setimmediate). <br>
<br>
`setTimeout(() => {}, 0)` and `setImmediate()` have come with a very short, but actual delay. <br>
There is a third option to execute code asynchronously, but without any delay: `process.nextTick()`. <br>
This is definitely a topic I have to catch up with when facing that issue in practice. <br>

### [Asynchronous code overview](https://youtu.be/V9Jm4ce_cBg?t=88)
**Callback** are only one vehicle for asynchronous code in JavaScript. <br>
Here an overview above asynchronous methods available in JS: <br>

* classic
  * callbacks
  * events
  * streams
* modern
  * promises
  * yield and function
  * async & await
  * observables

## [Events in Node.js](https://youtu.be/V9Jm4ce_cBg?t=191)
Events are a way to get informed when a certain **event** is happening – without the necessity of repetitive checks. <br>
### [Event principles](https://youtu.be/V9Jm4ce_cBg?t=309)
* objects trigger events
  * for example an interrupted network connection
  * or an not-handled thrown exception
* functions are reacting to events
  * that function is called **event handler**

So we have to look at two aspects of the event: <br>
* what triggers the event
* how are we handling the event

### [EventEmitter](https://youtu.be/V9Jm4ce_cBg?t=428)
To listening for events of an object, we require the `EventEmitter` class. <br>
That class is part of the `events` module, which is an **intergrated** Node.js module. <br>
With the `EventEmitter` class available, we can write our own class, extending EventEmitter. <br>
Here a base-setup template for some code which could be listening and reacting on the network connection: <br>

```js
'use strict';

const events = require('events');
const EventEmitter = events.EventEmitter;

class NetworkConnection extends EventEmitter {
// . . . 
}

module.exports = NetworkConnection;
```

