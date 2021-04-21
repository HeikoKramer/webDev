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

## Variables examples

```js
// Initialize these three variable
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1; // add number to number
b = b + 5;
c = c + " String!"; // add string to string

console.log(a);
// > 6
console.log(b);
// > 15
console.log(c);
// > I am a String!
```

## Variable names
JavaScript variables are **case sensitive**! <br>
**Camel case** is the standard. <br>

```js
var properCamelCase;
```

## Variables and math operators

```js
// Addition
var sum = 10 + 10;
console.log(sum);
// > 20
var newSum = sum + 10;
console.log(newSum);
// > 30
var nextSum = sum + newSum;
console.log(nextSum);
// > 50

// Substraction
var difference = 45 - 33;
console.log(difference);
// > 12
var evenLess = difference - 6;
console.log(evenLess);
// > 6
var thatShouldBeIt = difference - evenLess - evenLess;
console.log(thatShouldBeIt);
// > 0

// Multiplication
var product = 8 * 10;
console.log(product);
// > 80
var youGetIt = product * 2;
console.log(youGetIt);
// > 160
 
// Division
var quotient = 66 / 33;
console.log(quotient);
// > 2
var anOtherDemo = 66 / quotient;
console.log(anOtherDemo);
// > 33
```

## Incrementing a number
To increment a number means to add 1 to it. <br>

```js
var myVar = 87;

// the following two methods do exactly the same, both are incementing myVar + 1
myVar = myVar + 1;
console.log(myVar);
// > 88
myVar++;
console.log(myVar);
// > 89
```

## Decrementing a number
To decrement a number means to subtract 1 from it. <br>

```js
var myVar = 87;

myVar = myVar - 1;
console.log(myVar);
// > 86
myVar--;
console.log(myVar);
// > 85
```

## Decimal numbers aka "Floating number", or "Floats"

```js
var ourDecimal  = 5.7;
var myDecimal   = 0.5;
var allDecimals = ourDecimal + myDecimal;
console.log(allDecimals); 
// > 6.2
```

### Multiplying decimals

```js
var product = 2.0 * 2.5;
console.log(product);
// > 5
```

### Dividing decimals

```js
var quotient = 4.4 / 2.0;
console.log(quotient);
// > 2.2
```

## The remainder
**%** – gives the **remainder** of a division of two numbers. <br>

```js
var remainder;
remainder = 11 % 3;
console.log(remainder);
// > 2
```

## Shortcuts
### +=

```js
var a = 3;
var b = 17;
var c = 12;

/* commonly used syntax 
a = a + 12;
b = 9 + b;
c = c + 7;
*/

// shortened syntax
a += 12;
b += 9;
c += 7;

console.log(a);
// > 15
console.log(b);
// > 26
console.log(c);
// > 19
```

### -=

```js
var a = 11;
var b = 9;
var c = 3;

/* commonly used syntax 
a = a - 6;
b = b - 15;
c = c - 1;
*/

// shortened syntax
a -= 6;
b -= 15;
c -= 1;

console.log(a);
// > 5
console.log(b);
// > -6
console.log(c);
// > 2
```

### \*=

```js
var a = 5;
var b = 12;
var c = 4.6;

/* commonly used syntax 
a = a * 5;
b = 3 * b;
c = c * 10;
*/

// shortened syntax
a *= 5;
b *= 3;
c *= 10;

console.log(a);
// > 25
console.log(b);
// > 36
console.log(c);
// > 46
```

### /=

```js
var a = 48;
var b = 108;
var c = 33;

/* commonly used syntax 
a = a / 12;
b = b / 4;
c = c / 11;
*/

// shortened syntax
a /= 12;
b /= 4;
c /= 11;

console.log(a);
// > 4
console.log(b);
// > 27
console.log(c);
// > 3
```

## String declaration
Strings can be declared in double quotes (**"string"**), single quotes(**'string'**) or backticks (**\`string\`**). <br>

```js
var my1stString = "Double quotes are most common.";
var my2ndString = 'Will single wotes do the job?';
var my3rdString = `Seriously backticks?`;

console.log(my1stString);
// > Double quotes are most common.
console.log(my2ndString);
// > Will single wotes do the job?
console.log(my3rdString);
// > Seriously backticks?
```

**Note:** To escape any sort of quotes in the string itself, **escape** them with **backslash**. <br>

```js
var myString = "He said \"Let's go!\" and walked away.";
console.log(myString);
// > He said "Let's go!" and walked away.
```

Another way to produce the same outcome is to use **single quotes** for the string declaration. <br>
Note that this method requires single quotes to be escaped with **backslash**. <br>

```js
var myString = 'He said "Let\'s go!" and walked away.';
console.log(myString);
// > He said "Let's go!" and walked away.
```

If you're using **backticks** you can use singe and double quotes in your sting, **without escaping** them. <br>

```js
var myString = `He said "Let's go!" and walked away.`;
console.log(myString);
// > He said "Let's go!" and walked away.
```

## Escape Sequences in Strings

```js
/*
CODE OUTPUT
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/
```

## String concatenation

```js
// Example
var yourStr = "I come first, " + "I come second, ";
var myString = "and I come third!"
console.log("Now together: " + yourStr + myString);
// > Now together: I come first, I come second, and I come third!


// concatenated with +=
var aString = "1st & ";
aString += "2nd";
console.log(aString);
// > 1st & 2nd

// append variable to string
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr);
// > freeCodeCamp is awesome!
```

## String methods

```js
// length of a string
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;
console.log(firstNameLength);
// > 3


// bracket notation
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName):
// > A
```


