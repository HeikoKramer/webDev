# JavaScript
This document is used to document my JS learning progress. <br>

## Resources 
[freeCodeCamp.org JavaScript Beginner course on YouTube](https://youtu.be/PkZNo7MFNFg) <br>
[Eloquent JavaScript book (free under MIT license)](https://eloquentjavascript.net/) <br>

## How to install / run JavaScript
JavaScript is supported by and included in all standard web-browsers (except text-only browsers like lynx) <br>
An easy way to run and test JavaScript code is to include it into an **.html** file and open it in a browser. <br>
<br>
**Example:** <br>
Create the file **index.html** with the following content: <br>

```html
<script>
  console.log("hello world");
</script>
```

This file is a most basic **hello world** script, which will display those word in the debug console of you browser. <br>
Open the **index.html** in your browser, press <kbd>CTRL</kbd> <kbd>SHIFT</kbd> + <kbd>j</kbd> to open the console (Firefox, Linux) and you should see **hello world** written in the console log. <br>
<br>
You can test your code in an interactive sandbox environment like [codepen.io](https://codepen.io/pen?editors=0012). <br>
[scrimba.com](https://scrimba.com/) has an easy to use JavaScript playground too. <br>

## Comments
JavaScript comments are similar to Java comments. <br>
Inline comments start with `//`, multi line comments are in between `/*` and `*/`. <br>

```js
// example inline comment
var a = "hello world" // example inline comment

/* this is an
example for a 
multi line comment */
```

## Data types
* undefined
* null
* boolean
* string
* symbol
* number
* object

## Variables 
There are three ways to declare a variable in JavaScript: <br>

### Declare variable with var:

```js
var myName = "Heiko"; // does the following:
// var        >>  declares variable myName
// = "Heiko"  >>  sets it to data type string with content – Heiko

// This variable can later be set to be an other data type:
myName = 8; 
```

Variables declared with **var** will be usable for the **whole programm**. <br>

### Declare variable with let:

```js
let ourName = "freeCodeCamp";
```

Variables declared with **let** are only usable withing the scope where you declare it. <br>

### Declare variable with const:

```js
const pi 3.14;
```

Variables declared with **const** will **never change** its content. <br>
If you do try to change it, you'll get an error. <br>

## Declaring vs. assigning variables

```js
var a;      // this variable has just been declared
var b = 2;  // this variable has been declared and assigned in one line

a = 7;      // a was already declared, now we've assigned it the value 7

b = a;      // you can assigne ond variable to an other 

console.log(b) 
// the console log method will display the value of variable b in the console
// the displayed value will be 7 – as this is the value of variable a, which is assigned to b
```
