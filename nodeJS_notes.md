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
There are two ways of running Node.js – **interactive in the terminal** or by **loading a Javascript file into node**. <br>
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


