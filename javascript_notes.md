# JavaScript
This document is used to document my JS learning progress. <br>

## Resources and how I progress
[freeCodeCamp.org JavaScript Beginner course on YouTube](https://youtu.be/PkZNo7MFNFg) <br>
[Eloquent JavaScript book (free under MIT license)](https://eloquentjavascript.net/) <br>
[Kirupa JS learning tutorials](https://www.kirupa.com/) <br>

The initial version of these notes will be a transcript of the **freeCodeCamp.org** video. <br>
I'm following this video and writing things down. <br>
I'm using the **scrimba.com** console to play around and verify everything before I'm adding it to the notes. <br> 
<br>
When I'm done with the video, I'll continue with the **Eloquent JavaScript book**. <br>
I won't specifically quote or link those two sources further from here. <br> 
Whenever I find additional interesting content like [Kirupa's tutorial on random items from an arry](https://github.com/HeikoKramer/JavaScript/blob/main/javascript_notes.md#picking-a-random-item-from-an-array), I'll add it to the notes by naming the source. <br>

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
console.log(firstLetterOfFirstName);
// > A

// NOTE: array index starts with 0 in JavaScript
console.log(firstName[0]);
console.log(firstName[1]);
console.log(firstName[2]);
// > A
// > d
// > a

// bracket notation can't just change single letters of a string
var myStr = "Hello World";
myStr[0] = "Y";
// this will result in an error because of the immutability of strings
// > TypeError: 0 is read-only

// how to find a certain charakter of a string
var firstName = "Ada";
var lastName = "Lovelace";

// find last letter with length -1
var lastLetterOfFirstName = firstName[firstName.length -1];
console.log(lastLetterOfFirstName);
// > a

// find 2nd last charakter with -2 and so on … 
var secondToLastLetterOfLastName = lastName[lastName.length -2];
console.log(secondToLastLetterOfLastName);
// > c
```

## Arrays
Arrays allow you to store several pieces of data in one place. <br>
They always start and end with brackets **\[** & **\]**, every element is separated by a comma **,**. <br>

```sh
var ourArray = ["John", 23];
```

Elements can be of any data type. In the example above, it's a string and a number. <br>

### Nested arrays
If one of the elements within the array is an other array, it is called **nested** or **multidimensional array**. <br>

```js
var ourArray = [["the universe",42], ["everything", "is connected"]];
```

The example above shows an array storing two arrays, 1st: string & number, 2nd: string & string. <br> 

### Access array data with indexes

```js
// single dimensional array
var ourArray = [50,60,70];
console.log(ourArray[0]);
// > 50

// multidimensional array
var ourArrays = [[50,60,70],[80,90,100]];
console.log(ourArrays[0][0]);
// > 50
console.log(ourArrays[1][2]);                
// > 100
```

### Update array data with indexes

```js
// single dimensional array
var ourArray = [50,60,70];
ourArray[1] = 80;
console.log(ourArray);
// > [50, 80, 70]

// multi dimensional arry
var myMultiArray = [["Hello", "World"],[22,23,24]];
myMultiArray[0][1] = "Heiko";
console.log(myMultiArray[0][0] + " " + myMultiArray[0][1]);
// > Hello Heiko
myMultiArray[1][0] = 99;
console.log(myMultiArray[1]);
// > [99, 23, 24]
```

### Append data to an array with push

```js
var ourArray = ["some", "array", "of"];
ourArray.push("strings");
console.log(ourArray);
// > ["some", "array", "of", "strings"]

// you can also push arrays into arrays
ourArray.push([33,34,35]);
console.log(ourArray);                      
// > ["some", "array", "of", "strings", [33, 34, 35]]

// or values into arrays in arrays …
ourArray[4].push(36);                 
console.log(ourArray);        
// > ["some", "array", "of", "strings", [33, 34, 35, 36]]
```

### Manipulate arrays with pop

```js
// pop will take the last item out of the array
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray);
// > [1, 2]
console.log(removedFromOurArray);
// > 3

// this works the same way with multidimensional arrays
var ourArrays = [[1,2,3],[4,5,6]];
var secondArray = ourArrays.pop();
console.log(ourArray);
// > [[1, 2, 3]]
// NOTE: the double bracket indicates that the multidimensional structure is maintained 
console.log(secondArray);
// > [4, 5, 6]
// the new variable isn't multidimensional
```

### Manipulate arrays with shift
The **shift** function is similar to the pop function, except that its moving the **first** element out of the array, not the last. <br>

```js
// shift will take the first item out of the array    
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.shift();
console.log(ourArray);
// > [2, 3]
console.log(removedFromOurArray);
// > 1
```

### Manipulate arrays with unshift
The **unshift** function is similar to the push function, but does append elements at **the beginning** of the arrays. <br>

```js
var ourArray = ["some", "array", "of"];
ourArray.unshift("this","is");
console.log(ourArray);
// > ["this", "is", "some", "array", "of"]
ourArray.push("string");
console.log(ourArray);    
// > ["this", "is", "some", "array", "of", "strings"]
```

### Picking a random item from an array
Source: [Kirupa YouTube Session](https://t.co/fQxauzKORu) <br>

```js
let myShows = ["Deadwood", "Game of Thrones", "The Wire", "The Expanse", "Boardwalk Empire", "Mars", "Killing Eve", "Meister Eder und sein Pumuckl"];

let show = myShows[Math.floor(Math.random() * myShows.length)];
console.log(show);
```

The method is quite simple. It uses the array length to define the **high** of a generated random number and then picks a **random index number** from the array. <br>
Random number explained in more depth below. 

## Random number
Source: [Kirupa YouTube Random Number](https://youtu.be/0CkNc86JvB4) <br>
The function `Math.random()` generates a number between 0 and **less than 1**: <br>

```js
console.log(Math.random());
// > 0.8764213916052898

console.log(Math.random());
// > 0.691161663784646

console.log(Math.random());
// > 0.32959270961454
```

Formula for generating a random number, rounded to the lower full number is:

```js
Math.floor(Math.random() * (1 + high - low)) + low
```

If 0 is the lowest number, the definition of low is obsolete. <br>
The highest number + 1 works as standalone to define the range. <br> 
The **+ 1** in combination with **Math.floor** ensures we get the full capability of the range. <br>
**Math.floor** rounds our value down and as **Math.random** gives us only a number close to the highest range … <br>
A high of 40 without **+ 1** and **Math.floor** would be a random max of **39.996** and never show **40**. <br>
So with **+ 1** and **Math-floor** the **high** is **40.996** (close to 41) and this gets rounded down to **40**. <br>
If a **low** is defined in the formula, the random number won't contain numbers below the defined range. <br> 

```js
var high = 100;
var low  = 80;

// full formula with HIGH and LOW defined
var randomNumberWithLow = Math.floor(Math.random() * (1 + high - low)) + low;

// only the number outcome from formula from range defining part of the formula 
var rangeNumber = (1 + high - low) + low;

// formula without defining low – only high +1 specified as range
var randomNumberNoLow = Math.floor(Math.random() * rangeNumber);

console.log("rangeNumber: " + rangeNumber);
// > 101
console.log("randomNumberWithLow: " + randomNumberWithLow);
// > 92
console.log("randomNumberNoLow: " + randomNumberNoLow);
// > 2

console.log("rangeNumber: " + rangeNumber);
// > 101
console.log("randomNumberWithLow: " + randomNumberWithLow);
// > 100
console.log("randomNumberNoLow: " + randomNumberNoLow);
// > 58

console.log("rangeNumber: " + rangeNumber);
// > 101
console.log("randomNumberWithLow: " + randomNumberWithLow);
// > 91
console.log("randomNumberNoLow: " + randomNumberNoLow);
// > 34
```

Put the formula into a function to save you from typing it every time you need a random number. <br>

```js
function getRandomNumber(low, high) {
  let r = Math.floor(Math.random() * (1 + high - low)) + low;
  return r;
}

let zorb = getRandomNumber(3, 9);
console.log(zorb);
// > 9

console.log(zorb);
// > 3

console.log(zorb);
// > 4
```

## Passing parameters over to functions
Parameters are placeholder variables to hand over values to a function, when it is called. <br>

```js
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5);
// > 5

function anOtherFunctionWithArgs(a, b) {
  console.log(a + b);                                               
}
anOtherFunctionWithArgs("Hello ", "World!");
// > Hello World!
```

## Global scope and functions
Variables defined outside a function block have **global scope**. <br>
**Global scope** means, they can be seen everywhere in our JavaScript code. <br>

```js
// global scope
var myGlobal = 10;

// non-global variable declared in function
function fun1() {
  var oopsGlobal = 5;
}

// as myGlobal is defined with global scope, it is visible within the function.
// oopsGlobal has only been defined within fun1 and is not visible in fun2. 
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();

fun2();
// > myGlobal: 10 
```

Same code as above, but both variables declared with global scope now: <br>

```js
// global scope 
var myGlobal = 10;
var oopsGlobal = 5;

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun2();
// > myGlobal: 10 oopsGlobal: 5
```

**NOTE:** If the function variable *oopsGlobal* would be declared without the **var** keyword, it would automatically be of **global scope**. <br> 

## Local scope and functions
Variables which are declared within a function as well as the function parameters have **local scope**. <br>
That means they are only visible from within the function. <br>

```js
// variable declared within a function – lokal scope
// the value is visible in the console when the function is called
function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}
myLocalScope();
// > 5

// a try to display the content of the variable outside of the function will produce an error
console.log(myVar);
// > ReferenceError: myVar is not defined 
```

## Global vs. local scope in functions
It is possible to have both, local and global variables with the same name. <br>
When you do that, the local variable takes precedence over the global variable. <br>
But only within its own scope. Outside of its scope, the global variable rules. <br>

```js
// global variable
var outerWear = "T-Shirt";

// same variable declared in a function
function myOutfit() {
  var outerWear = "Sweater";  
  return outerWear;
}

// the local variable took precedence – in its scope!
console.log(myOutfit());
// > Sweater

// If we show the variable outside of the function, it will be the global scope value.
console.log(outerWear);
// > T-Shirt

// another function, referring the global variable without declaring it
function yourOutfit() {
  return outerWear;
}

console.log(yourOutfit());
// > T-Shirt
```

## Return a value from a function
A function will **return** any value after the appropriate statement. <br>

```js
function minusSeven(num) {
  return num -7;
}

// The executed console log of the function will "return" the result
console.log(minusSeven(10));
// > 3
```

## Undefined value returned from a function
Functions can have return statements, but they don't have to. <br>
A function **without return statement** will return **undefined**. <br>

```js
var sum = 0;

// The function has no return statement
function addThree() {
  sum = sum + 3;
  console.log("sum in function: " + sum);
  // > sum in function: 3
}

console.log("function called global: " + addThree());
// > function called global: undefined

// The global variable has been updated, although the function didn't return anything
console.log("global sum after function: " + sum); 
// > global sum after function: 3
```

## Assignment with a returned value
It's easy to assign a function result to a global scope variable. Two examples below: <br>

```js
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

// assignment of the returned function result
changed = change(10);
console.log(changed);
// > 5


var processed = 0;

function processArg(num) {
  return (num +3) / 5;
}

// assignment of the returned function result
processed = processArg(7);
console.log(processed);
// > 2
```

## Stand in line
**Queue:** Abstract data structure that keeps things in order. <br>
New items can be added to the back of the queue, while old items are taken off from the front of it. <br>
The following function will simulate the functionality of a queue. <br>

```js
function nextInLine(arr, item) {
  
  // push appends the item parameter to the array 
  arr.push(item);

  // shift takes the .[0] index from the array, taken and returned
  return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
// > Before: [1,2,3,4,5]

// call function, hand over test array and the number "6" – returns .[0] index
console.log(nextInLine(testArr, 6));
// > 1

// 6 was appended to the end, while 1 was taken from the front of the array
console.log("After: " + JSON.stringify(testArr));
// > After:  [2,3,4,5,6]
```

## Boolean values
The boolean data type knows only two values **true** and **false**. <br>
Boolean are basically little **on** (true) / **off** (false) switches. <br>
Booleans do not require quotation. <br>

```js
function welcomeToBooleans() {
  return false;
}

console.log(welcomeToBooleans());
// > false
```

## Use conditional logic with if statements
An **if statement** is used to make decisions in code. <br>
The keyword **if** tells JavaScript to execute the code in the curly braces `if (condition) {code block}` – **if** the condition within the parenthesis **equals true**. <br>

```js
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// call function with true
console.log(ourTrueOrFalse(true));
// > Yes, it's true

// call function with false
console.log(ourTrueOrFalse(false));
// > No, it's false
```

## Comparison with the equality operator
There are many comparison operators in JavaScript that will return a boolean true or false. <br>
The most common is the **equality operator**. It is often used in an **if statement**. <br>
The JavaScript **equality operator** is double **==**. We can't just use single **=** as this is the **assignment operator**. <br>

```js
// if statement will execute when the function call parameter equals 12
function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));
// > not equal

console.log(testEqual(12));
// > equal
```

## Comparison with the strict equality operator
The strict operator is the triple **===** sign. <br>
The *double equal* sign attempts to convert compared values to a *common type*. <br>
The **strict equal** doesn't do any type conversion. <br>

```js
// EQUAL
// function with double equal sign
function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

// pass-in 12 as a string
console.log(testEqual("12"));
// > Equal

// pass-in 12 as a number
console.log(testEqual(12));
// > Equal


// STRICT
// same function as above, but this time with triple equal sign
function testStrict(val) {
  if (val === 12) { 
    return "Equal";
  }
  return "Not Equal";
}

// pass-in 12 as a string
console.log(testStrict("12"));
// > not Equal

// pass-in 12 as a number
console.log(testStrict(12));
// > Equal
```

## Comparison with the inequality operator
The **inequality operator !=** is basically the opposite of the equality operator. <br>

```js
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));
// > Not Equal

console.log(testNotEqual(99));
// > Equal
```

## Comparison with the strickt inequality operator

```js
// NOT EQUAL
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

// pass-in 99 as a string
console.log(testNotEqual("99"));
// > Equal

// pass-in 99 as a number
console.log(testNotEqual(99));
// > Equal


// STRICT NOT EQUAL
function testStrictNotEqual(val) {
  if (val !== 99) {
    return "Not Equal";
  }
  return "Equal";
}

// pass-in 99 as a string
console.log(testStrictNotEqual("99"));
// > Not Equal

// pass-in 99 as a number
console.log(testStrictNotEqual(99));
// > Equal
```

## Comparisons with the "greater than" and operator

```js
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(10));
// > 10 or under

console.log(testGreaterThan(11));
// > Over 10

console.log(testGreaterThan(110));
// > Over 100
```

## Comparisons with the "greater than or equal" and operator

```js
function testGreaterThanOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterThanOrEqual(8));
// > Less than 10

console.log(testGreaterThanOrEqual(10));
// > 10 or Over

console.log(testGreaterThanOrEqual(20));
// > 20 or Over
```

## Comparison with the "less than" operator

```js
function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }

  if (val < 55) {
    return "Under 55";
  }

  return "55 or Over";
}

console.log(testLessThan(80));
// > 55 or Over

console.log(testLessThan(50));
// > Under 55

console.log(testLessThan(23));
// > Under 25
```

## Comparison with the "less than or equal" operator

```js
function testLessThanOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

console.log(testLessThanOrEqual(80));
// > More Than 24

console.log(testLessThanOrEqual(24));
// > Smaller Than or Equal to 24

console.log(testLessThanOrEqual(9));
// > Smaller Than or Equal to 12
```

## Comparison with the logical "and" operator
Sometimes you want to check if two or more things are true at the same time. <br>
There are two ways to do that: <br>
* a nested if statement
* the **&&** operator

```js
// NESTED IF
function testNestedIf(val) {

  if (val <= 50) {
    if (val >= 25) {
      return "Yes";
    }
  }
  return "No";
}

console.log(testNestedIf(10));
// No
console.log(testNestedIf(30));
// Yes
console.log(testNestedIf(51));
// No


// AND OPERATOR
function testLogicalAnd(val) {

  if (val <= 50 && val >= 25) {
      return "Yes";
  }
  return "No";
}

console.log(testLogicalAnd(10));
// No
console.log(testLogicalAnd(30));
// Yes
console.log(testLogicalAnd(51));
// No
```

## Comparisons with the logical "or" operator
The or operator equals a logic comparable to two if statements. <br>

```js
// TWO IF STATEMENTS
function testDoubleIf(val) {
  if (val < 10) {
    return "Outside";
  }

  if (val > 20) {
    return "Outside";
  }
  return "Inside";
}
console.log(testDoubleIf(9));
// Outside

console.log(testDoubleIf(22));
// Outside

console.log(testDoubleIf(13));
// Inside


// OR OPERATOR
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}
console.log(testLogicalOr(9));
// Outside

console.log(testLogicalOr(22));
// Outside

console.log(testLogicalOr(13));
// Inside
```

## Else Statement
When an if statement is true, the block of code right after it will be evaluated. <br>
And if it's not true, nothing happens. <br>
With an else statement, an alternate block of code can be executed when it's not true. <br>

```js
function testElse(val) {
  var result = "";

  if (val > 5) {
  return "Bigger than 5";
  }

  if (val <= 5) {
    return "5 or Smaller";
  }
}
console.log(testElse(9));
// Bigger than 5

console.log(testElse(5));
// 5 or Smaller
```


## Code demos
### Word blank game
Demo game which builds sentences from input words. <br>

```sh
var myNoun      = ["Mama", "Papa", "Clara"];
var myVerb      = ["zählt", "knuddelnt", "verspeißt", "kitzelt", "begrüßt", "bastelt", "knuspert", "schlürft", "verkauft", "gießt", "erntet", "sortiert"];
var myAdverb    = ["schmollend", "hungrig", "durstig", "mit verbundenen Augen", "ohne Sinn und Verstand", "zufrieden", "wütend", "glücklich", "völlig durchgedreht"];
var my2ndNoun   = ["ein Eis", "eine Paprika", "den großen Spielplatz", "den Concierge", "die Pizza", "einen Hund", "gelbe Socken", "den Pumuckl", "einen Apfel", "unser Geld", "die Blumen"];
function wordBlanks(myNoun, myVerb, myAdverb, my2ndNoun) {

  var result = "";
  result += myNoun[Math.floor(Math.random()    * myNoun.length)]     + " ";
  result += myVerb[Math.floor(Math.random()    * myVerb.length)]     + " ";
  result += myAdverb[Math.floor(Math.random()  * myAdverb.length)]   + " ";  
  result += my2ndNoun[Math.floor(Math.random() * my2ndNoun.length)]  + ".";    
  return result;
}

console.log(wordBlanks(myNoun, myVerb, myAdverb, my2ndNoun));
```
