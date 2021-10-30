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

## Running Node.js
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

