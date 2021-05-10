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

b = a;      // you can assign ond variable to an other 

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
// TW0 IF
function testDoubleIf(val) {

  if (val > 5) {
    return "Bigger than 5";
  }

  if (val <= 5) {
    return "5 or Smaller";
  }
}
console.log(testDoubleIf(9));
// Bigger than 5

console.log(testDoubleIf(5));
// 5 or Smaller


// ELSE STATEMENT
function testElse(val) {

  if (val > 5) {
   return "Bigger than 5";
  } else {
    return "5 or Smaller";
  }
}
console.log(testElse(9));
// Bigger than 5

console.log(testElse(5));
// 5 or Smaller
```

## Else if statement
If you have multiple conditions that need to be addressed, you can use else if statements. <br>

```js
// TW0 IF + ALTERNATIVE
function testDoubleIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  if (val < 5) {
    return "Smaller than 5";
  }
  return "Between 5 and 10";
}

console.log(testDoubleIf(13));
// Greater than 10

console.log(testDoubleIf(4));
// Smaller than 5

console.log(testDoubleIf(6));
// Between 5 and 10


// ELSE IF STATEMENT
function testElseIf(val) {
  if (val > 10) {
   return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log(testElseIf(13));
// Greater than 10

console.log(testElseIf(4));
// Smaller than 5

console.log(testElseIf(6));
// Between 5 and 10
```

## Logical order in if else statements
When you're using else-if statements, the order is very important. <br>

```js
function incorrectOrder(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(incorrectOrder(7));
// > Less than 10
// incorrect order, < 10 gets evaluated true before < 5
console.log(incorrectOrder(3));
// > Less than 10
console.log(incorrectOrder(11));
// > Greater than or equal to 10


function correctOrder(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(correctOrder(7));
// > Less than 10
console.log(correctOrder(3));
// > Less than 5
console.log(correctOrder(11));
// > Greater than or equal to 10
```

## Chaining if else statements

```js
/* Write chained if/else if statements to fulfill the following conditions:
num < 5 – return "Tiny"
num < 10 return "Small"
num < 15 – return "Medium"
num < 20 – return "Large"
num >= 20 – return "Huge"
*/

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
      return "Small";
  } else if (num < 15) {
      return "Medium";
  } else if (num < 20) {
      return "Large";
  } else {
      return "Huge";
  }
}
console.log(testSize(4));
// Tiny
console.log(testSize(8));
// Small
console.log(testSize(14));
// Medium
console.log(testSize(18));
// Large
console.log(testSize(22));
// Huge
```

## Golf code
In the game of golf, each hole has a par – which means the average number of strokes you're supposed to use to get the ball into the hole. So, depending on how far above or below par your strokes are, there's a different nickname. <br>

```js
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par -1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}

console.log(golfScore(5, 1));
// > Hole-in-one!
console.log(golfScore(5, 2));
// > Eagle
console.log(golfScore(5, 4));
// > Birdie
console.log(golfScore(5, 5));
// > Par
console.log(golfScore(5, 6));
// > Bogey
console.log(golfScore(5, 7));
// > Double Bogey
console.log(golfScore(5, 8));
// > Go Home!
```

## Switch Statements
Instead of using chained else if statements, you can use a switch statement. <br>
A switch statement tests a value and can have many case statements which define various possible values. <br>

```js
/*
Write a switch statement which tests val and sets answer for the following conditions:
1 – "alpha"
2 – "beta"
3 – "gamma"
4 – "delta"
*/

function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
      answer ="alpha";
      break;
    case 2:
      answer ="beta";
      break;
    case 3:
      answer ="gamma";
      break;
    case 4:
      answer ="delta";
      break;
  }
  return answer;
}
console.log(caseInSwitch(1));
// > alpha
console.log(caseInSwitch(2));
// > beta
console.log(caseInSwitch(3));
// > gamma
console.log(caseInSwitch(4));
// > delta
```

## Default option in switch statements
The default option is kind of like **else** in an **if else** statement. <br>
In the example below **a**, **b** and **c** are defined with an individual answer. <br>
If you call the function with an other option than a,b,c it would return an empty string. <br>
But with the **default** defined, it will return **stuff** for any option given except those defined values. <br>

```js
function switchOfStuff(val) {
  var answer = "";
  switch(val) {
    case "a":
      answer ="apple";
      break;
    case "b":
      answer ="bird";
      break;
    case "c":
      answer ="cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}
console.log(switchOfStuff("a"));
// > apple
console.log(switchOfStuff("b"));
// > bird
console.log(switchOfStuff("c"));
// > cat
console.log(switchOfStuff("222"));
// > stuff
```

## Multiple identical options in switch statements
Somethimes you want a switch statement where multiple inputs give the same output. <br>

```js
function sequentialSize(val) {
  var answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

console.log(sequentialSize(2));
// > Low
console.log(sequentialSize(5));
// > Mid 
console.log(sequentialSize(8));
// > High
```

## Replacing if else chains with switch
Somethimes a switch statement can be easier to write and easier to understand than a chain of **if else** statements. <br>

```js
function ifElseDemo(val) {
  var answer = "";

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
  return answer
}
console.log(ifElseDemo("bob"));
// > Marley
console.log(ifElseDemo(42));
// > The Answer
console.log(ifElseDemo(7));
// > Ate Nine


function chainToSwitch(val) {
  var answer = "";
  
  switch(val) {
    case "bob":
    answer = "Marley";
    break;
  	case 42:
    answer = "The Answer";
    break;
  	case 1:
    answer = "There is no #1";
    break;
  	case 99:
    answer = "Missed me by this much!";
    break;
  	case 7:
    answer = "Ate Nine";
    break;
  }
  return answer
}
console.log(chainToSwitch("bob"));
// > Marley
console.log(chainToSwitch(42));
// > The Answer
console.log(chainToSwitch(7));
// > Ate Nine
```

## Returning boolean values from functions
Here's a little trick to let a function return **true** or **false**. <br>
All comparison operators return a boolean **true** or **false** value. <br>
So you can save the if logic and directly return their outcome. <br>

```js
function isLessWithIf(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

console.log(isLessWithIf(10, 15));
// > true
console.log(isLessWithIf(15, 10));
// > false


function isLess(a, b) {
  return (a < b); 
}

console.log(isLess(10, 15));
// > true
console.log(isLess(15, 10));
// > false
```

## Returning early pattern from functions

```js
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-1,2));
// > undefined
```

## Counting cards
When you see a low card, the count goes up. When you see a high card, the card goes down. 
If it's a middle value card, the count stays the same. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low. <br>
We're going to use a switch statement to figure out what card has been passed in and what to do about it. <br>

```js
var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  var holdbet = 'Hold';
  if (count > 0) {
    holdbet = 'Bet';
  }
  return count + " " + holdbet; 
}


cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4));
```

## Build JavaScript Objects
Objects are similar to arrays, except that instead of using indexex to access data, you use properties. <br>

```js
// object are defined with curly braces at the beginning and the end
var ourDog = {
  "name": "Camper", // the object "properties" are the values before the colons
  "legs": 4,
  "tails": 1,
  "friends": ["Donald", "Daisy", "Dagobert"]
};

console.log(ourDog.name);
// > Camper
console.log(ourDog.friends[1]);
// > Daisy


var myDog = {
  "name": "Quincy",
  "legs": 3, // my dog had an accident
  "tails": 2, // very special dog
  "friends": []
};

console.log(myDog.name);
// > Quincy
```

## Accessing object properties with dot notation
There are two main ways to access a property on an object. <br>
**Dot notation** is one of them. <br>

```js
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue   = testObj.hat;
console.log(testObj.hat);
// > ballcap

var shirtValue = testObj.shirt;
console.log(testObj.shirt);
// > jersey
```

## Accessing object properties with bracket notation
Besides using dot notation, you can also use **bracket notation** to access a property in an object. <br>
You can use bracket notation anytime, but it is required if the name has a space in it. <br>

```js
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"]; // double quotes will work
console.log(entreeValue);
// > hamburger

var drinkValue = testObj['the drink']; // single quotes will also work
console.log(drinkValue);
// > water
```

## Accessing object properties with variables
**Bracket notation** can also be used to look up object properties using variables. <br>

```js
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber]; // variable name used instead of number 
console.log(player);
// > Montana
```

## Updating object properties
We can use **dot notation** to update object properties. <br>

```js
// object are defined with curly braces at the beginning and the end
var ourDog = {
  "name": "Camper", // the object "properties" are the values before the colons
  "legs": 4,
  "tails": 1,
  "friends": ["Donald", "Daisy", "Dagobert"]
};

// Update the dog's name by using dot notation
ourDog.name = "Happy Camper";

console.log(ourDog.name); // retrieve name with dot notation
// > Happy Camper
console.log(ourDog["name"]); // retrieve name using bracket notation
// > Happy Camper
```

## Add new properties to an object
You can add new properties to an object using dot notation or bracket notation. <br>

```js
var ourDog = {
  "name": "Camper", // the object "properties" are the values before the colons
  "legs": 4,
  "tails": 1,
  "friends": ["Donald", "Daisy", "Dagobert"]
};

// new property "bark" added with dot notation
ourDog.bark = "bow-wow";

console.log(ourDog.name);
// > Camper
console.log(ourDog.bark);
// > bow-wow


var myDog = {
  "name": "Happy Coder",
  "legs": 4, 
  "tails": 1,
  "friends": ["freeCodeCamp.org", "YouTube"]
};

// new property "bark" added with bracket notation
myDog['bark'] = "woof";

console.log(myDog["name"]);
// > Happy Coder
console.log(myDog["bark"]);
// > woof
```

## Delete properties from an object
It's simple to delete a property from an object. <br>

```js
var ourDog = {
  "name": "Camper", // the object "properties" are the values before the colons
  "legs": 4,
  "tails": 1,
  "friends": ["Donald", "Daisy", "Dagobert"],
  "bark": "bow-wow"
};

// delete property with dot notation
delete ourDog.bark;
console.log(ourDog.bark);
// > undefined


var myDog = {
  "name": "Happy Coder",
  "legs": 4, 
  "tails": 1,
  "friends": ["freeCodeCamp.org", "YouTube"],
  "bark": "woof"
};

// delete property with bracket notation
delete myDog["tails"];
console.log(myDog["tails"]);
// > undefined
```

## Using objects for lookups
Objects can be thought of as a key value storage like a dictionary. <br>
You can use a oject too lookup values. <br>

```js
// function with a switch statement
function phoneticLookupSwitch(val) {
  var result ="";

  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
      break;
  }
  return result;
}
console.log(phoneticLookupSwitch("delta"));
// > Denver


// function with object
function phoneticLookupObject(val) {
  var result ="";

  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",  
  };
  result = lookup[val];
  return result;
}
console.log(phoneticLookupObject("delta"));
// > Denver
```

## Testing objects for properties
You can check if an Object has a property with the **hasOwnProperty** method. <br>
The function below uses our declared **checkProp parameter** as a search-term for the **hasOwnProperty method** on the **myObj object**. <br>
**If** it finds a defined **property** matching that value, it **returns that property's value**. <br>

```js
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleight",
};

function checkObj(checkProp) {
  
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj("gift"));
// > pony
console.log(checkObj("ice-cream"));
// > Not Found
```

## Manipulating complex objects
A JavaScript object is a way to store flexible data. <br>
You can store strings, numbers, arrays – and even other objects . <br>
In the example below we store two **objects** in an **array**, each object holds data and a property, which is the **key value format**. <br>
This is very similar to **JSON**. <br>

```js
// array of objects
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },

  {
    "artist": "Beau Carnes",
    "title": "Cereal Man",
    "release_year": 2003,
    "formats": [
      "YouTube video"
    ]
  }
];

console.log(myMusic[0].title);
// > Piano Man
console.log(myMusic[1].title);
// > Cereal Man
```

## Accessing nested objects
Here we have an object withoter objects nested inside that. <br>
In order to access sub-properties of an object, you can chain together the dot or bracket notations. <br>

```js
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);
// > maps
```

## Accessing nested arrays
Array bracket notation can be changed to access nested arrays. <br>

```js
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulpin",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);
// > pine
```

## Record collection

```js
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2648": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};

// keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// function takes a record id as 1st parameter to determin the record to update
// 2nd parameter is the name of the object's property you'd like to updat
// 3rd parameter is the actuall value that should be changed
// if that value comes in empty, the property should be deleted
// if the property is a track, the new track should be added to the track arrey
function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop == "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection[id];
}

console.log(collectionCopy[5439]);
// > {album: "ABBA Gold"}
console.log(updateRecords(5439, "artist", "ABBA"));
// > {album: "ABBA Gold", artist: "ABBA"}

console.log(collectionCopy[1245]);
// > {artist: "Robert Palmer", tracks: []}
console.log(updateRecords(1245, "artist", "Michael Jackson"));
// > {artist: "Michael Jackson", tracks: []}
console.log(updateRecords(1245, "tracks", "Beat it"));
// > {artist: "Michael Jackson", tracks: ["Beat it"]}

console.log(collectionCopy[2648]);
// > {album: "1999", artist: "Prince", tracks: ["1999", "Little Red Corvette"]}
console.log(updateRecords(2648, "tracks", ""));
// > {album: "1999", artist: "Prince"}
```

## Iterate with while loops
Loops allow you to run code multiple times. <br>
A **while loop** runs while a condition is true and stops once it's no longer true. <br>

```js
var myArray = [];

var i = 0;
while(i < 5) {
  myArray.push(i);
  i++;
}

console.log(myArray);
// > [0, 1, 2, 3, 4]
```

## Iterate with for loops
A for loop is the most common type of loop in JavaScript. <br>

```js
var ourArray = [];

// this for loop does the same as our while loop in the example above
// it declares the i variable, specifies condition and the incrementation within the conditions
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
console.log(ourArray);
// > [0, 1, 2, 3, 4]

var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
console.log(myArray);
//> [1, 2, 3, 4, 5]
```

## Iterate odd numbers with a for loop
Loops just dont have to increment one at a time. <br>

```js
var ourArray = [];

// instead of incrementing i by one, we're incrementing i by two in this loop
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

console.log(ourArray);
// > [0, 2, 4, 6, 8]

var myArray = [];

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

console.log(myArray);
// > [1, 3, 5, 7, 9]
```

## Count backwards with a for loop
A for loop can also be used to count backwards. <br>

```js
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

console.log(ourArray);
// > [10, 8, 6, 4, 2]

var myArray = [];

for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

console.log(myArray);
// > [9, 7, 5, 3, 1]
```

## Iterate through an array with a for loop
It is common in JavaScript to iterate through the contents of an array. <br>

```js
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

// we are using the size of the array to determin the quantity of iterations
for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

console.log(ourTotal);
// > 42

var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total);
// > 20
```

## Nesting for loops
If you have a multidimensional or nested array, you can use nested for loops to access all the array elements. <br>

```js
function multiplyAll(arr) {
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);
// > 5040
```

## Iterate with do … while loops
A while loop checks the condition before it runs the code in the loop. <br>
A **do while** loop will always run at least one time and then it will check the condition. <br>

```js
var myArray = [];
var i = 10;

// while loop
while (i < 5) {
  myArray.push(i);
  i++;
}

console.log(i, myArray);
// 10, []


var ourArray = [];
var j = 10;


// do while loop
// this loop will push the value to the array although the condition equals false
// because the condition is eveluated at the end of the loop it will execute at least once
do { 
  ourArray.push(j);
  j++;
} while (j < 5)

console.log(j, ourArray);
// 11, [10]
```

## Generate random fractions
You can use the **math.random** function to create a random **decimal** number. <br>
The function will create a number between **0** and **1** – which can be 0, but not 1, only close to it. <br>

```js
function randomFunction() {

  return Math.random();
}

console.log(randomFunction());
// > 0.6262111698241257
console.log(randomFunction());
// > 0.42430890617123207
console.log(randomFunction());
// > 0.44651038359138484
```

## Generate random whole numbers
To generate a **whole number** instead of a decimal, use **Math.floor**. <br>
This function **rounds down to the nearest whole number**. <br>
When you multiply a random number and use the Math.floor function on it, will always round down. <br>
So if you multiply by 20, the maximum output is 19. If you multiply by 10 the max is 9. <br>

```js
// this variable will contain a number between 0 and 19
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

console.log(randomNumberBetween0and19);
// > 11


// this function will return a number between 0 and 9
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());
// > 4
console.log(randomWholeNum());
// > 1
console.log(randomWholeNum());
// > 7
```

## Generate random whole numbers within a range
You can also generate random whole numbers whitin a range. <br>

```js
function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(5, 15));
// > 8
console.log(ourRandomRange(5, 15));
// > 11
console.log(ourRandomRange(5, 15));
// > 9


console.log(ourRandomRange(20, 120));
// > 47
console.log(ourRandomRange(20, 120));
// > 232
console.log(ourRandomRange(20, 120));
// > 23
```

## Use the parseInt function
The **parseInt** function takes a numeric string and returns an integer. <br>
If you try to parse a non-numeric string, parseInt will return **NaN** – not a number. <br>

```js
function convertToInteger(str) {
  return parseInt(str);
}

console.log(convertToInteger("56"));
// > 56
console.log(convertToInteger("pony"));
// > NaN
```

## Use the parseInt function with a radix
The parseInt function can be used with a radix. The radix specifies the base of the number in the string. <br>

```js
function convertToInteger(str) {
  return parseInt(str, 2);
}

console.log(convertToInteger("10011"));
// > 19
```

## Use the conditional (ternary) operator
The **ternary** operator is like a one-line if-else expression. <br>

```js
// condition ? statement-if-tru : statement-if-false;

// ternary function 
function ternaryCheckEqual(a, b) {
  return a === b ? true : false;
}

console.log(ternaryCheckEqual(1, 2));
// > false
console.log(ternaryCheckEqual(1, 1));
// > true


// Replaces the following if-else statement
function checkEqual(a, b) {
  if(a === b) {
    return true;
  }
  else {
    return false;
  }
}

console.log(checkEqual(1, 2));
// > false
console.log(checkEqual(1, 1));
// > true


// simplest way to write this
function trueOrFale(a, b) {
  return a === b;
}

console.log(trueOrFale(1, 2));
// > false
console.log(trueOrFale(1, 1));
// > true
```

## Use multiple conditional (ternary) operators
You can nest conditional operators within each other. <br>

```js
function checkSign(num) {
  // each "?" is like "if true", each ":" is like "else" 
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(10));
// > positive
console.log(checkSign(-10));
// > negative
console.log(checkSign(0));
// > zero
```

## Differences between the var and let keywords
let does not let you declare a variable twice. <br>
This allows your program to give you an error if you've mistakenly announced the same variable twice within the same context. <br>

```js
// var allows you to declare the same variable twice
// the first "catName" variable will be replaced by the second declaration
var catName = "Quincy";
var quote;

var catName = "Beau";

function catTalk() {
  quote = catName + " says Meow!";
  return quote;
}

console.log(catTalk());
// > Beau says Meow!


// the same script, but letiables declared with let will display an error
let catName = "Quincy";
let quote;

let catName = "Beau";

function catTalk() {
  quote = catName + " says Meow!";
  return quote;
}

console.log(catTalk());
// > Error: SyntaxError: unknown: Identifier 'catName' has already been declared 

// of course you could still set the variable content somewhere in the code
// set doesn't prevent you from that, it just prevents double-declaration
catName = "Marusha";
```

## Prevent coding mistakes with "use strict"
Strict mode catches common coding mistakes and unsafe actions. <br>
You can put "use strict at the top of a file or just in a function. <br>
In the following example, use strict will throw an error as the *quote* variable has not been declared. <br>
More information about strict mode: [w3schools](https://www.w3schools.com/js/js_strict.asp)

```js
let catName = "Quincy";

function catTalk() {
  quote = catName + " says Meow!";
  return quote;
}

console.log(catTalk());
// > ReferenceError: assignment to undeclared variable quote
```

## Compare scopes of the var and let keywords
When you declare a variable with **var**, it is declared globally or locally inside a function. <br>
The scope of **let** is limited to the block statement or expression that it was declared in. <br>

```js
// global scope/changed when declared with var
function checkVarScope() {
  "use strict";
  var i = "function scope";
  if (true) {
    var i = "block scope";
    console.log("Block scope i is: " + i);
    // > Block scope i is: block scope
  }
  console.log("Function scope i is: " + i);
  // > Function scope i is: block scope
  return i;
}
checkVarScope();


// limited scope/changed when declared with let
function checkLetScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: " + i);
    // > Block scope i is: block scope
  }
  console.log("Function scope i is: " + i);
  // > Function scope i is: function scope
  return i;
}
checkLetScope();


// now lets declare that variable only within the block 

// var in block – still global scope
function checkVarBlock() {
  "use strict";
  if (true) {
    var i = "block scope";
    console.log("Block scope i is: " + i);
    // > Block scope i is: block scope
  }
  console.log("Function scope i is: " + i);
  // > Function scope i is: block scope
  return i;
}
checkVarBlock();


// let in block – local scope only, global not defined
function checkLetBlock() {
  "use strict";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: " + i);
    // > Block scope i is: block scope
  }
  console.log("Function scope i is: " + i);
  // > ReferenceError: i is not defined 
  return i;
}
checkLetBlock();
```

## Declare a read-only variable with the const keyword
**const** is an other way to declace a variable. <br>
It has all the features of let, but is also **read only**. <br>
**NOTE**: If you now for sure, that you never want to reassign a variable, use const. <br>

```js
// the var declared variable "sentence" gets reassigned – outcome is changed
function varAssignedExample(str) {
  var sentence = str + " is cool!";
  sentence = str + " is amazing!";
  console.log(sentence);
}
varAssignedExample("freeCodeCamp");
// > freeCodeCamp is amazing!


// the const declared variable "sentence" gets reassigned – error is thrown
function constAssignedExample(str) {
  const sentence = str + " is cool!";
  sentence = str + " is amazing!";
  console.log(sentence);
}
constAssignedExample("freeCodeCamp");
// > TypeError: invalid assignment to const 'sentence' 

// NOTE
// Good practice is to use const variables in capital letters
const SENTENCE = str + " is cool!";
// instead of
const sentence = str + " is cool!";
```

## Mutate an array declared with const
While you can not reassign a variable declared with const, you can mutate an array. <br>

```js
const s = [5, 7, 2];
function assingnWholeArray() {
  "use strict";

  s = [2, 5, 7]; // full assignment not possible 
  // > TypeError: invalid assignment to const 's'

}
assingnWholeArray();


const x = [5, 7, 2];
function assignOnlyNotation() {
  "use strict";

  // assignment via bracket notation work even with a const variable
  x[0] = 2;
  x[1] = 5;
  x[2] = 7; 

}
assignOnlyNotation();
console.log(x);
// > [2, 5, 7]
```

## Prevent object mutation
The example above shows, const declaration alone doesn't protect your data from mutation. <br>
But there is something called object.freeze that will prevent object mutation. <br>

```js
// the const variable gets re-assigned with dot notation
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex); // nothing, no error gets thrown
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);
// > 99


// the frozen variable won't change – an error gets thrown when you try to reassign 
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  // now we are freezing MATH_CONSTANTS
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex); 
    // > TypeError: "PI" is read-only
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);
// > 3.14
```

## Use arrow functions to write concise anonymous functions
The type of function below is called an **anonymous function** – it doesn't have a name <br>
It is assigned to the "magic" variable, but there is no name assigned to it. <br>
Whenever you have an anonymous function, you can convert it into an **arrow function**. <br>
An arrow function can be shortened as shown in the third example below. <br>

```js
// anonymous function
var magic = function() {
  return new Date();
};


// arrow function
var magic = () => {
  return new Date();
};

// shortened arrow function
const magic = () => new Date();
```

## Write arrow functions with paramenters
Just like with normal functions, you can pass arguments to arrow functions. <br>

```js
// normal function with two arguments
var myContact = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myContact([1, 2], [3, 4, 5]));
// > [1, 2, 3, 4, 5]


// arrow function, also with two arguments
const myContact = (arr1, arr2) => arr1.concat(arr2);

console.log(myContact([1, 2], [3, 4, 5]));
// > [1, 2, 3, 4, 5] 
```

## Higher order arrow functions
Arrow functions work really well with higher order functions, such as **map**, **filter** and **reduce**. <br>
They take functions as arguments for processing collections of data. <br>
Whenever one function takes an other function as an argument – that's a good time for an arrow function. <br>

```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// let's filter out everything that's not a positiv integer
const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
// > [16, 1764, 36]
```

## Set default parameters for your function
In order to create more flexible functions you can create **default parameters**. <br>
The default parameter kicks in when the argument is not specified or is undefined. <br>
In the example below `value = 1` sets the default parameter to **1**. <br>
If a parameter for "value" is passed, the function will use that parameter. <br>
If no parameter is passes, the function will increment "number" by the default – **1**. <br>

```js
const increment = (function() {
  return function increment(number, value = 1) { // default for "value" set to "1"
    return number + value;
  };
})();
console.log(increment(5, 2));
// > 7
console.log(increment(5));
// > 6
```

## Use the rest operator with function parameters
The **rest operator** allows you to create a function that takes a variable number of arguments. <br>
The rest operator is three dots. <br>

```js
// classic parameter handling – pass the defined parameter
const sum = (function() {
  return function sum(x, y, z) {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3));
// > 6


// rest operator – parameters are not defined
const restSum = (function() {
  return function restSum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(restSum(1, 2, 3));
// > 6
```

## Use the spread operator to evaluate arrays in-place
The **spread operator** looks just like the rest operator – three dots. <br>
But it expands an already existing array – or it spreads out an array. <br>

```js
// arr1 gets assigned to arr2 – the change to arr1 is reflected in arr2
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = arr1;
  arr1[0] = 'potato'
})();
console.log(arr2);
// > ["potato", "FEB", "MAR", "APR", "MAY"]


// spread operator: this time arr4 does not only equal arr3
// the contents off arr3 get spread out to arr4
// a later change to arr3 has no effect on arr4
const arr3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr4;
(function() {
  arr4 = [...arr3];
  arr3[0] = 'potato'
})();
console.log(arr4);
// > ["JAN", "FEB", "MAR", "APR", "MAY"]
```

## Use destructuring assignment to assign variables from objects
A destructuring assignment is a special syntax for directly assigning values taken from an object to a variable. <br>

```js
// object with three elements (x,y,z)
var voxel = {x: 3.6, y: 7.4, z: 6.54 };

// old way of assigning object elements to individual variables
var x = voxel.x; 
console.log("x = " + x);
// > x = 3.6
var y = voxel.y;
console.log("y = " + y);
// > y = 7.4
var z = voxel.z;
console.log("z = " + z);
// > z = 6.54

// this is the destructuring syntax
// we are creating variables (a,b,c) and assigning them to the values from voxel the object 
const {x:a, y:b, z:c} = voxel;
console.log("a = " + a);
// > a = 3.6
console.log("b = " + b);
// > b = 7.4
console.log("c = " + c);
// > c = 6.54
```

An other example – use destructuring to get the tomorrow variable out of the AVG_TEMPERATURES object. <br>

```js
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";

  // get the tomorrow field from the AVG_TEMPERATURES object
  // and assign it to the tempOfTomorrow variable
  const { tomorrow : tempOfTomorrow } = avgTemperatures;
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));
// > 79
```

## Destructuring assignment with nested objects
We can also use destructuring assignment to assign variables from nested objects. <br>

```js
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";

  // we need doulbe destructuring to access the nested value
  // we set the max that was inside tomorrow to maxOfTomorrow
  const { tomorrow : { max : maxOfTomorrow }} = forecast;

  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));
// > 84.6
```

## Use destructuring assignment to assign variables from arrays
You can use destructuring assignment to assign variables from arrays. <br>

```js
// we are assigning the variables z and x to the first two numbers of the array (1 and 2)
// you can not specify which element from the array to go into a variable
// it just goes in order
const [z, x] = [1, 2, 3, 4, 5, 6];
console.log(z, x);
// > 1, 2

// there is a way assign for example only the number 4 to a variable
// you can use commas to skip the unwanted indexes and reach that number
const [, , , y] = [1, 2, 3, 4, 5, 6];
console.log(y);
// > 4


// you can use destructuring of arrays to switch the places of varaiables
let a = 8, b = 6;
console.log("a before switching = " + a);
// > a before switching = 8
console.log("b before switching = " + b);
// > b before switching = 6

(() => {
  "use strict";
  [a, b] = [b, a]
})();

console.log("a after switching = " + a);
// > a after switching = 6
console.log("b after switching = " + b);
// > b after switching = 8
```

## Use destructuring assignment with the rest operator
We can use destructuring assignment with the rest operator to reassign array elements. <br>

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  
  // do nothing for the first element
  // do nothing for the second element
  // assign the rest to the arr variable
  const [ , , ...arr] = list;
  
  // const [ a, b, ...arr] = list;
  // this would assign the first index to variable "a"
  // the second index to variable "b"
  // and the rest of the array to the arr variable

  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
// > [3,4,5,6,7,8,9,10]
```

## Use destructuring assignment to pass an object as a function's parameters
This technique is commenly used with API calls to take only needed values. <br>

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {

/*
  // could be done like this using dot notation
  return function half(stats) {
    return (stats.max + stats.min) / 2.0;
  };
*/

  // destructuring takes only needed values
  return function half({ max, min }) {
    return (max + min) / 2.0;
  };


})();
console.log(half(stats));
// > 28.015
```

## Code demos
### Profile lookup
**Coding challenge:** write a *lookUpProfile* function that takes a name and an attribute a parameters and return the appropriate values. <br>

```js
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguin Cases", "Violin"]
  },
  {
    "firstName": "Kristin",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    } 
  }
    return "No such contact";
}

console.log(lookUpProfile("Akira", "lastName"));
// > Laine
console.log(lookUpProfile("Kristin", "number"));
// > unknown
console.log(lookUpProfile("Horst", "number"));
// > No such contact
console.log(lookUpProfile("Sherlock", "assistent"));
// > No such property
```

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
