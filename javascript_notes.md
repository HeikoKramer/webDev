# JavaScript Notes
This notes were taken while following Brad Traversy's [Modern JavaScript From The Beginning](https://subscription.packtpub.com/video/web-development/9781789539509/p1) course on packthub.com. <br>

## Table of contents
* [Add JavaScript to your HTML file](#add-javascript-to-your-html-file)
* [alert()](#alert)
* [console.log()](#consolelog)
* [console.table()](#consoletable)
* [console.error()](#consoleerror)
* [console.warning()](#consolewarning)
* [console.clear()](#consoleclear)
* [console.time()](#consoletime)
* [Variables](#variables)
  + [Variable conventions](#variable-conventions)
  + [Multi word variable conventions](#multi-word-variable-conventions)
  + [let](#let)
  + [const](#const)
* [Data types in JavaScript](#data-types-in-javascript)
  + [Primitive vs reference data types](#primitive-vs-reference-data-types)
  + [Primitive data types](#primitive-data-types)
  + [Reference data types / objects](#reference-data-types--objects)
  + [JavaScript is a dynamically typed language](#javascript-is-a-dynamically-typed-language)
* [typeof](#typeof)
* [Type conversion](#type-conversion)
  + [Number to string](#number-to-string)
  + [Boolean to string](#boolean-to-string)
  + [Date to string](#date-to-string)
  + [Array to string](#array-to-string)
* [toString()](#tostring)
* [Converting to number](#converting-to-number)
  + [parseInt() & parseFloat()](#parseint--parsefloat)
* [Type coercion](#type-coercion)
* [Numbers & the math object](#numbers--the-math-object)
  + [// Simple math with numbers](#-simple-math-with-numbers)
  + [the math object](#the-math-object)
    - [the PI function](#the-pi-function)
    - [Math.round()](#mathround)
    - [Math.ceil() & Math.floor()](#mathceil--mathfloor)
    - [Math.sqrt()](#mathsqrt)
    - [Math.abs()](#mathabs)
    - [Math.pow()](#mathpow)
    - [Math.min() & Math.max()](#mathmin--mathmax)
    - [Math.random()](#mathrandom)
* [String methods & concatenation](#string-methods--concatenation)
  + [Concatenation](#concatenation)
    - [.concat()](#concat)
  + [Append](#append)
  + [Escaping](#escaping)
  + [.length](#length)
  + [toUpperCase() & toLowerCase()](#touppercase--tolowercase)
  + [String Index & charAt()](#string-index--charat)
  + [get last char](#get-last-char)
  + [.indexOf() & lastIndexOf()](#indexof--lastindexof)
  + [substring()](#substring)
  + [slice()](#slice)
  + [split()](#split)
  + [replace()](#replace)
  + [includes()](#includes)
* [Template Literals](#template-literals)
  + [Without template strings (ES5)](#without-template-strings-es5)
  + [With template strings (ES6)](#with-template-strings-es6)
* [Arrays](#arrays)
  + [.length](#length-1)
  + [Array.isArray()](#arrayisarray)
  + [Get single value](#get-single-value)
  + [Insert into array](#insert-into-array)
  + [Find index of value](#find-index-of-value)
* [Mutating Arrays](#mutating-arrays)
  + [add to an array](#add-to-an-array)
  + [take from array](#take-from-array)
    - [splice()](#splice)
  + [reverse()](#reverse)
  + [Concatenate arrays](#concatenate-arrays)
  + [Sorting string arrays](#sorting-string-arrays)
  + [Sorting number arrays](#sorting-number-arrays)
* [Object literals](#object-literals)
  + [.this](#this)
* [Dates & times](#dates--times)
  + [Specify the date](#specify-the-date)
  + [Date functions – get a specific date element](#date-functions--get-a-specific-date-element)
  + [Get a specific time element](#get-a-specific-time-element)
  + [Set values for date elements](#set-values-for-date-elements)
* [If statements & comparison operators](#if-statements--comparison-operators)
  + [Equal / not equal & validated / not validated](#equal--not-equal--validated--not-validated)
  + [!== undefined](#-undefined)
  + [if else](#if-else)
  + [No curly brackets required](#no-curly-brackets-required)
* [Logical operators](#logical-operators)
  + [&& (AND)](-and)
  + [|| (OR)](-or)
  + [Ternary operator](#ternary-operator)
* [Switches](#switches)
* [Functions](#functions)
  + [Function declarations](#function-declarations)
  + [Function expressions](#function-expressions)
  + [Immidiatley invokable function expressions – IIFEs](#immidiatley-invokable-function-expressions--iifes)
  + [Property methods](#property-methods)
* [General loops](#general-loops)
  + [For loops](#for-loops)
  + [While loops](#while-loops)
  + [Do while loops](#do-while-loops)
  + [Loop through arrays](#loop-through-arrays)
    - [Array for loop](#array-for-loop)
    - [Array for each loop](#array-for-each-loop)
  + [Map](#map)
  + [for in loop](#for-in-loop)
* [The window object](#the-window-object)
  + [Console](#console)
  + [Alert](#alert)
  + [Promt](#promt)
  + [Confirm](#confirm)
  + [Get the hight and the width of the window](#get-the-hight-and-the-width-of-the-window)
  + [scrollY & scrollX](#scrolly--scrollx)
  + [Location](#location)
    - [search](#search)
    - [href redirect](#href-redirect)
    - [reload](#reload)
    - [history](#history)
  + [navigator](#navigator)
* [Scope](#scope)
* [The DOM](#the-dom)
* [Object Oriented JavaScript](#object-oriented-javascript)
* [Asynchronous JavaScript](#asynchronous-javascript)
* [Error handling with try … catch](#error-handling-with-try--catch)
  + [finally](#finally)
  + [throw an error](#throw-an-error)
* [Regular Expressions](#regular-expressions)
* [Iterators & Generators](#iterators--generators)
  + [Iterators](#iterators)
  + [Generators](#generators)
* [Symbols](#symbols)
  + [Unique object keys](#unique-object-keys)
* [Destructuring](#destructuring)
  + [Destructuring assignment](#destructuring-assignment)
  + [Rest pattern](#rest-pattern)
  + [Destructuring assignment and rest pattern with objects](#destructuring-assignment-and-rest-pattern-with-objects)
  + [Array Destructuring](#array-destructuring)
  + [Parse array returned from function](#parse-array-returned-from-function)
  + [Object Destructing](#object-destructing)
* [ES6 Maps](#es6-maps)
  + [Iterating map](#iterating-map)
    - [Loop using for...of to get keys and values](#loop-using-forof-to-get-keys-and-values)
  + [Convert maps to arrays](#convert-maps-to-arrays)
* [ES6 Sets](#es6-sets)
  + [Iterating through sets](#iterating-through-sets)
  + [Convert set to array](#convert-set-to-array)
  + [Convert array to set](#convert-array-to-set)
* [JavaScript Patterns](#javascript-patterns)
* [Modules](#modules)
  + [Common JS modules](#common-js-modules)
  + [ES2015 modules](#es2015-modules)

## Add JavaScript to your HTML file
There are two ways to JavaScript to a HTML file: <br>
<br>
**Add it via `<script>` tag** <br>

```html
<script>
  alert('Gude');
</script>
```

**Link to an file where the script is stored**

```html
<script src="app.js"></script>
```

## alert()
An alert will display the content you put in there on the screen. <br>

```js
// Display on screen
alert("Ei Gude!");
```

![alert](/images/alert.png)

## console.log()
With `console.log()` you can show all kind of contents in the browsers console. <br>

```js
// Log to console
console.log("Ei Gude wie!?"); // <-- log String
console.log(123); // <-- log Number
console.log(true); // <-- log Boolean
var greeting = "Gude!";
console.log(greeting); // <-- log Variable
console.log([1, 2, 3, 4]); // <-- log Array
console.log({ a: 1, b: 2 }); // log Objects
```

![console log](/images/console_log.png)

## console.table()
With `console.table()` you can print objects out as a table. <br>

```js
// Print object out as a table
console.table({ a: 1, b: 2 });
```

![console table](/images/console_table.png)

## console.error()
You can set console error notifications with `console.error()`. <br>
The error notification will indicate its position in the code block by providing the line number. <br>

```js
// Print out error notifications
console.error('This is an error!')
```

![console error](/images/console_error.png)

## console.warning()
`console.warning` will basically do the same thing as `console.error()` – but gives you a yellow instead as a red symbol. <br>
The warning also indicates its position in the code block. *(in Chrom, apparently not in Firefox)* <br>

```js
// Print out a warning
console.warn("This is a warning");
```

![console warning](/images/console_warning.png)

## console.clear()
`console.clear()` clears the entire console output above the clear function. <br>

```js
// Clear the entire console
console.clear();
```

![console clear](/images/console_clear.png)

## console.time()
You can measure the execution time of your code by setting a timer. <br>
Place `console.time("Indicator-Name");` at the beginning and `console.timeEnd("Indicator-Name");` at the end of the code block you'd like to measure: <br>

```js
console.time("Hello");
  console.log("Ei Gude wie!?");
  console.log("Ei Gude wie!?");
  console.log("Ei Gude wie!?");
  console.log("Ei Gude wie!?");
  console.log("Ei Gude wie!?");
  console.log("Ei Gude wie!?");
  console.log("Ei Gude wie!?");
console.timeEnd("Hello");
```

![console time](/images/console_time.png)

## Variables
Variables can be declared with a value in it, or as a empty (**undefined**) vessel in which you later put a value. <br> 
An other value can be assigned to that variable, using the `var` statement or only the variable's name. <br>

```js
var name = "John Doe";
console.log(name);
var name = "Steve Smith";
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = "Hello";
console.log(greeting);
```

![Variables](/images/variables01.png)

### Variable conventions 
A variable can only contain **letters**, **numbers**, **_** (underscore) and **$** (the dollar sign). <br>
They can **not** start with a number. If we try that, we will maybe see an error in the editor already, but at the latest in the console.<br>

```js
var 1up = 'Mario';
```

![number variable](/images/number_variable.png)


You can start a variable with an underscore or a dollar sign, but that is not recommended. <br>
Dollar sign variables are common in JQuery, underscore variables are used as private variables in frameworks. <br>

### Multi word variable conventions
Camel case is the is the commonly used convention for multi word variables in JavaScript. <br>

```js
var firstName = 'John'; // Camel Case  <-- use this!

var first_name ='Sara'; // Underscore (common in PHP)
var FirstName = 'Tom'; // Pascal case
// Pascal case is reccomended in some situations, like for classes, but not variables 
var firstname = 'Susan' // all lower case;
```

### let
`let` works exactly like `var`. <br>

```js
let name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name);
```

![let](/images/let.png)

Initializing as undefined will also work with `let`: <br>

```js
let name;
name = "John Doe";
console.log(name);
```

![let2](/images/let2.png)

### const
`const` works differently form `var` and `let`. <br>
Const stand for **constant** and it can't be changed or re-assigned. <br>
If you try to re-assign a constant, you'll run into an error. <br>

```js
// CONST
const name = 'John';
console.log(name);
// Can not Re-assign
name = 'Sarah';
```

![const](/images/const.png)

You also need to assign a value to the constant when you initialize it. <br>
A `const` without an assigned value will throw an error too. <br>

```js
const greeting;
```

![const2](/images/const2.png)

Things are a bit different for `const` **objects**. <br>
You can't change the **person** attributes like **name** or **age**, but you can change the values assigned to them. <br>

```js
const person = {
  name: 'John',
  age: 30
}
console.log(person);

person.name = 'Sara';
person.age = 32;
console.log(person);
```

![const3](/images/const3.png)

Same thing with **arrays**. <br>
You can add and take from an constant array … <br>

```js
const numbers = [1,2,3,4,5];
console.log(numbers);
numbers.push(6);
console.log(numbers);
```

![const4](/images/const4.png)

… but you can not assign a whole new array to it. <br>

```js
const numbers = [1, 2, 3, 4, 5];
numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
```

![const5](/images/const5.png)

## Data types in JavaScript
### Primitive vs reference data types
**Primitive data types** <br>
* stored directly in the location the variable accesses
* stored on the stack

**Referenced data types** <br>
* accessed by reference
* objects that are stored on the heap
* pointer to a location in memory

### Primitive data types
* String
* Number
* Boolean
* Undefined
* Symbols (ES6)

### Reference data types / objects
* Arrays
* Object literals
* Functions
* Dates
* Anything else …

### JavaScript is a dynamically typed language
* types are associated with values not variables
* the same variable can hold multiple types
* we don't need to specify types
* most other languages are statically typed (Java, C#, C++)
* there are supersets of JS and addons to allow static typing (TypeScript, Flow)

## typeof
`typeof` provides a way to verify the data type of a variable. <br>
**NOTE:** A bit weird is the fact that `typeof null === 'object';`. <br>
Null is a primitive data type and it should look like this: `typeof null === 'null'` <br>
That is some historical issue that I don't really care about, but if you're interested, read this [typeof null explanation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null). <br>
**Reference Types** will all come back as **objects**. <br>

```js
// PRIMITIVE
console.log("– P R I M I T I V E –");
// String
const name = "John Doe";
console.log("datatype of name: " + typeof name);
// Number
const age = 45;
const quotedAge = "45"; // <-- quotes around numbers convert them into strings
console.log("datatype of age: " + typeof age);
console.log("datatype of quotedAge: " + typeof quotedAge);
// Boolean
const hasKids = true;
console.log("datatype of hasKids: " + typeof hasKids);
// Null
const car = null;
console.log("datatype of car: " + typeof car);
// Undefined
let test;
console.log("datatype of test: " + typeof test);
// Symbol
const sym = Symbol();
console.log("datatype of sym: " + typeof sym);

// REFERENCE TYPES
console.log("– R E F E R E N C E –");
// Array
const hobbies = ["movies", "music"];
console.log("datatype of hobbies: " + typeof hobbies);
// Object literal
const address = {
  city: "Boston",
  state: "MA",
};
console.log("datatype of address: " + typeof address);
// Date
const today = new Date();
console.log("datatype of today: " + typeof today);
```

![data types](/images/datatypes.png)

## Type conversion
Sometimes you need to convert a variable into an other data type. <br>
JavaScript hat multiple ways to handle that. <br>

### Number to string
Here we have the variable **val** assigned to a number and later converted into a string. <br>

```js
let val;

// Assigned to number
val = 5;

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log("– C O N V E R T E D  –");
// Number to string
val = String(val);

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);
```

Note that the **length** shows *undefined* for the number as this is a string method. <br>

![number to string](/images/number_to_string.png)

An notable thing in the number to string conversion is the following: <br>

```js
console.log("– C O N V E R T E D  –");
// Number to string
val = String(9 * 9 + 9 * 3);

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);
```

The math in the brackets gets calculated and the outcome is converted into an string. <br> 

![number to string](/images/number_to_string2.png)

### Boolean to string
Works in the same way as the example above … <br>

```js
// Bool to string
console.log("– Bool to string  –");
val = String(true);

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);
```

![bool to string](/images/bool_to_string.png)

### Date to string
Same counts for the date to string conversion. The whole date output gets converted to a string. <br>

```js
// Date to string
console.log("– Date to string  –");
val = String(new Date());

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);
```

![date to string](/images/date_to_string.png)

### Array to string
No big news here, works similar to the examples above. <br>

```js
// Array to string
console.log("– Array to string  –");
val = String([1, 2, 3, 4]);

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);
```

![Array to string](/images/array_to_string.png)

## toString()
In addition to the `String()` function, there is the `toString()` method. <br>
The method has an other syntax, but the exact same output as the function. <br>

```js
let num = 123;
let bou = false;
let dat = new Date();
let arr = [1, 2, 3, 4];

console.log("– toString() cenversion –");

// Number to string
console.log("– Number to string –");
num = num.toString();
// Output
console.log("num: " + num);
console.log("num: " + typeof num);
console.log("num: " + num.length);

// Boulean to string
console.log("– Boulean to string –");
bou = bou.toString();
// Output
console.log("bou: " + bou);
console.log("bou: " + typeof bou);
console.log("bou: " + bou.length);

// Date to string
console.log("– Date to string –");
dat = dat.toString();
// Output
console.log("dat: " + dat);
console.log("dat: " + typeof dat);
console.log("dat: " + dat.length);

// Array to string
console.log("– Array to string –");
arr = arr.toString();
// Output
console.log("arr: " + arr);
console.log("arr: " + typeof arr);
console.log("arr: " + arr.length);
```

![toString](/images/toString.png)

## Converting to number
Converting other data types into numbers can be done with the `number()` function. <br>
If a value is not convertible into a number – like *text-strings* or *arrays* – the value **NaN** will be shown. <br>
**NaN** stands for **Not a Number**. <br>
Booleans convert only to the number **0 (false)** or the number **1 (true)**. <br>

```js
// String to number
console.log("– String (number) to number –");
nuStr = Number("5");

// Output
console.log("nuStr: " + nuStr);
console.log("nuStr: " + typeof nuStr);
console.log("nuStr: " + nuStr.toFixed(2));

// String to number
console.log("– String (text) to number –");
texStr = Number("Gude!");

// Output
console.log("texStr: " + texStr);
console.log("texStr: " + typeof texStr);
console.log("texStr: " + texStr.toFixed(2));

// Boolean to number
console.log("– Boolean (true) to number –");
bouTrue = Number(true);

// Output
console.log("bouTrue: " + bouTrue);
console.log("bouTrue: " + typeof bouTrue);
console.log("bouTrue: " + bouTrue.toFixed(2));

// Boolean to number
console.log("– Boolean (false) to number –");
bouFalse = Number(false);

// Output
console.log("bouFalse: " + bouFalse);
console.log("bouFalse: " + typeof bouFalse);
console.log("bouFalse: " + bouFalse.toFixed(2));

// null to number
console.log("– null to number –");
nul = Number(null);

// Output
console.log("nul: " + nul);
console.log("nul: " + typeof nul);
console.log("nul: " + nul.toFixed(2));

// Array to number
console.log("– Array to number –");
arr = Number([1, 2, 3]);

// Output
console.log("arr: " + arr);
console.log("arr: " + typeof arr);
console.log("arr: " + arr.toFixed(2));
```

![to number](/images/to_number.png)

### parseInt() & parseFloat()
`parseInt()` and `parseFloat()` are two further options to convert number strings to a number. <br>
Only `parseFloat()` will handle decimals correctly, `parseInt()` will handle only the number before the decimal point. <br>

```js
// parseInt
console.log("– parseInt –");
int = parseInt("100.3");

// Output
console.log("int: " + int);
console.log("int: " + typeof int);
console.log("int: " + int.toFixed(2));

// parseFloat
console.log("– parseFloat –");
float = parseFloat("100.3");

// Output
console.log("float: " + float);
console.log("float: " + typeof float);
console.log("float: " + float.toFixed(2));
```

![parse int float](/images/parse_int_float.png)

## Type coercion
Type coercion means, that two values of different data types get harmonised in one data type automatically by JavaScript. <br>
In the example below we add a number to a number-string – the number is added at the end, the resulting data type is a string. <br>
It's the same result when if we make `5` the **number** and `'9'` the **string**. <br>

```js
const value1 = '5';
const value2 = 9;
let sum = value1 + value2;

console.log(sum);
console.log(typeof sum);
```

![coercion](/images/coercion.png)

## Numbers & the math object
### // Simple math with numbers

```js
let num1 = 100;
let num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
console.log(val);

val = num1 * num2;
console.log(val);

val = num1 - num2;
console.log(val);

val = num1 / num2;
console.log(val);

num2 = 60
val = num1 % num2;
console.log(val);
```

![simple math](/images/simple_math.png)

### the math object
The math object comes with a lot of useful math functions, like the pi-function and methods like `Math.round()`. <br>

#### the PI function
The `PI` function generates the mathematical constant pi. <br>

```js
val = Math.PI;

console.log(val);
```

![pi](/images/pi.png)

#### Math.round()
The `.round()` method is going to round a given number up and down. <br>
Everything up to .4 gets rounded down, everything from .5 gets rounded up. <br>

```js
downer = Math.round(2.4);
upper = Math.round(2.5);

console.log(downer);
console.log(upper);
```

![math round](/images/math_round.png)

#### Math.ceil() & Math.floor()
`.ceil()` and `.floor()` are also math rounding methods, but with those methods you can specify if the number should be rounded up or down. <br>
**ceil** is going to round the number **up**. <br>

```js
downer = Math.ceil(2.4);
upper = Math.ceil(2.5);

console.log(downer);
console.log(upper);
```

![ceil](/images/ceil.png)

**floor** is going to round the number **down**. <br>

```js
downer = Math.floor(2.4);
upper = Math.floor(2.5);

console.log(downer);
console.log(upper);
```

![floor](/images/floor.png)

#### Math.sqrt()
`Math.sqrt()` is a method to find the **square** number. <br>

```js
val = Math.sqrt(64);

console.log(val);
```

![square](/images/square.png)

#### Math.abs()
Use `Math.abs()` to get the **absolute** number. <br>

```js
val = Math.abs(-4);

console.log(val)
```

![absolute](/images/absolute.png)

#### Math.pow()
`Math.pow()` gives you the **power** of a number. <br>

```js
val = Math.pow(8, 2);

console.log(val);
```

![power](/images/power.png)

#### Math.min() & Math.max()
Use `Math.min()` to find the **minimum** and `Math.max()` to find the **maximum** of a number chain. <br>
**NOTE:** I did expect that this would work with **arrays** out of the box – but it doesn't. <br>
If you pass an array into the `.min()` or `.max()` method it will give you a result of **NaN**. <br>
[This article](https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa) explains why and how to process an array with min/max. <br>
The method shown in the example below is called **destructuring assignment** – you've simply to at three dots `...` in front of the array variable to make this work. <br>

```js
arr = [3, 45, 2, -23, 653, 11];

min = Math.min(3, 45, 2, -23, 653, 11);
max = Math.max(3, 45, 2, -23, 653, 11);
val = Math.min(...arr);

console.log("min: " + min);
console.log("max: " + max);
console.log("array min: " + val);
```

![min max](/images/min_max.png)

#### Math.random()
`Math.random()` gives us a random decimal in the range 0 to less than 1. <br>

```js
val = Math.random();

console.log(val);
```

![random](/images/random.png)

If you want to get full number out of `Math.random()`, you need to round it down and multiply it with the number that marks the desired range. <br>
This example will generate a number between **0 and 20**: <br>

```js
val = Math.floor(Math.random() * 21);

console.log(val);
```

This example will generate a number between **1 and 20**: <br>

```js
val = Math.floor(Math.random() * 20 + 1);

console.log(val);
```

## String methods & concatenation
### Concatenation
String **concatenation** in JavaScript is done with the **+** sign: <br>

```js
const firstName = 'William';
const lastName = 'Johnson';

let val;

// Concatenation
val = firstName + ' ' + lastName;

console.log(val);
```

![concatenation](/images/concatenation.png)

#### .concat()
The exact same result as above can be archived by using the `.concat()` method. <br>

```js
const firstName = "William";
const lastName = "Johnson";

let val;

// Length
val = firstName.concat(" ", lastName);
console.log(val);
// > William Johnson
```

### Append
To **append** a string, you use the **+=** signs: <br>

```js
val = "Heiko";
val += " Krämer";

console.log(val);
```

![append](/images/append.png)

### Escaping
You can **escape** characters with special meaning with the **backslash** character. <br>
If you escape the single quotes like this, the string will print out correctly: <br>

```js
val = 'That\'s awesome, I can\'t wait';
```

### .length
Length is a string property – so it doesn't require brackets at the end. <br>
It will return a number for the amount of character in the passed string. <br>

```js
const firstName = "William";
const lastName = "Johnson";

let val;

// Length
val = firstName.length;
console.log(val);
// > 7
```

### toUpperCase() & toLowerCase()
You can **upper** or **lower** the case of your string with these two methods: <br>

```js
const firstName = "William";
const lastName = "Johnson";

// Change case
upp = firstName.toUpperCase();
low = firstName.toLowerCase();
console.log(upp);
// > WILLIAM
console.log(low);
// > william
```

### String Index & charAt()
You can get a letter of a string, by addressing its index, like you'd do with an array. <br>

```js
const firstName = "William";
const lastName = "Johnson";

// String index
val = firstName[0];
console.log(val);
// > W

val = firstName[4];
console.log(val);
// > i
```

The same result can be archived with the `charAt()` method: <br>

```js
const firstName = "William";
const lastName = "Johnson";

val = firstName.charAt("4");
console.log(val);
// > i
```

### get last char
The `charAt()` method in combination with the `length` property can be used to get the last character of a string: <br>

```js
const firstName = "William";
const lastName = "Johnson";

val = firstName.charAt(firstName.length - 1);
console.log(val);
// > m
```

### .indexOf() & lastIndexOf()
You can kind of do the other way around of what we just did and find the first and the last index of a certain pattern in a string. <br>

```js
const firstName = "William";
const lastName = "Johnson";

// String index
val = firstName.indexOf("l");
console.log(val);
// > 2

val = firstName.indexOf("li");
console.log(val);
// > 3

val = firstName.lastIndexOf("i");
console.log(val);
// > 4
```

### substring()
You can pull out a certain **substring** from the in index with the `substring()` method: <br>

```js
const firstName = "William";
const lastName = "Johnson";

//  substring
val = firstName.substring(0, 4);
console.log(val);
// > Will
```

### slice()
The `slice()` method is very similar to `substring()` in fact `val = firstName.slice(0, 4);` will do the exact same thing as the substring method above. <br>
But slice works also with negative numbers, so you can **slice** an amount of letters from the back of a string: <br>

```js
const firstName = "William";
const lastName = "Johnson";

//  substring
val = firstName.slice(-3);
console.log(val);
// > iam
```

### split()
`split()` is a very cool method to transform a string into an array by **splitting** it at an specified separator. <br>
In the example below we're splitting a sentence by the **space** into an array of strings, where each index represents a word: <br>

```js
const str = "This is a very cool test";

//  split
val = str.split(" ");
console.log(val);
```

![split](/images/split.png)

### replace()
The `replace()` method works exactly like the **search & replace** functionalities in common text editors. <br>

```js
const str = "This is a very cool test";

//  replace
val = str.replace("cool", "lame");
console.log(val);
// >  This is a very lame test
```

### includes()
Includes gives you a boolean **true** or **false** depending on if a string **includes** the given search term or nor: <br>

```js
const str = "This is a very cool test";

//  includes
val = str.includes("cool");
console.log(val);
// >  true
```

## Template Literals
You can output content from JavaScript to a website with html. <br>
### Without template strings (ES5)
Here an example how that looks like without template strings: <br>

```js
const name = "John";
const age = 30;
const job = "Web Developer";
const city = "Miami";
let html;

// Without template strings (es5)
html =
  "<ul><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  " </li><li>Job: " +
  job +
  " </li><li>City: " +
  city +
  " </li></ul>";

document.body.innerHTML = html;
```

![template literals 1](/images/template_literals_01.png)

### With template strings (ES6)
If you're using backtick charakters around your html, you can write it like you would in an usual .html file. <br>
To add content from a variable, use the syntax `${var}`. <br>
You can as well include expressions that way, which will be shown evaluated in the html. <br>
You can even do conditionals, as you can see below in the last list element. <br>

```js
const name = "John";
const age = 30;
const job = "Web Developer";
const city = "Miami";
let html;

function hello() {
  return "hello";
}

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? "Over 30" : "Under 30"}</li>
  </ul>
`;

document.body.innerHTML = html;
```

![template literals 2](/images/template_literals_02.png)

## Arrays
Arrays allow us to store multiple values in one variable, they can be mutated and iterated through. <br>
You can create an array by setting comma separated values in square brackets `[a, b, c]` or by using the array constructor `new Array(a, b, c)`. <br>
An array in JavaScript can store all kind of data types – interesting in JavaScript is, that arrays can also store combinations of mixed data types. <br>

```js
const number = [42, 56, 33, 23, 44, 36, 5];
const number2 = new Array(22, 67, 24, 77, 14);
const fruits = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Heĺlo", true, undefined, null, { a: 1, b: 1 }, new Date()];

console.log(mixed);
```

![arrays](/images/arrays.png)

### .length
You can check the amount of items stored within the array with `.length`. <br>

```js
const numbers = [42, 56, 33, 23, 44, 36, 5];

// Ger array length
val = numbers.length;
console.log(val);
// > 7
```

### Array.isArray()
With the `isArray()` method of the `Array` object, you can determine if a variable is an array or nor. <br>

```js
const numbers = [42, 56, 33, 23, 44, 36, 5];

// Check if ts array
val = Array.isArray(numbers);
console.log(val);
// > true
```

### Get single value
Arrays store there value at a certain index. The index of an JavaScript array starts at 0. <br>
To get a specific value out of an array, you can call it by its index: <br>

```js
const numbers = [42, 56, 33, 23, 44, 36, 5];

//  Get single value
val = numbers[3];
console.log(val);
// > 23
```

### Insert into array
You can insert a value into the array, by setting a certain index to it. <br>

```js
const numbers = [42, 56, 33, 23, 44, 36, 5];

//  Insert into array
numbers[2] = 100;
console.log(numbers);
```

![array insert](/images/array_insert.png)

### Find index of value
To find the index of a certain value within your array, use the `.indexOf()` method. <br>

```js
const numbers = [42, 56, 33, 23, 44, 36, 5];

//  Find index of value
val = numbers.indexOf(36);
console.log(val);
// > 5
```

## Mutating Arrays
### add to an array
You can **add** a value to the **end** of an array with `push()` and to the **front** with `unshift()`. <br>

```js
const numbers = [42, 56, 33, 23, 44, 36, 5];

//  add to end of an array
numbers.push(777);
console.log(numbers);
// > [42, 56, 33, 23, 44, 36, 5, 777]

//  add to front of an array
numbers.unshift(999);
console.log(numbers);
// > [999, 42, 56, 33, 23, 44, 36, 5, 777]
```

### take from array
You can **take** from the **end** of an array with `pop()` and from its **beginning** with `shift()`. <br>

```js
const numbers = [999, 42, 56, 33, 23, 44, 36, 5, 777];

//  take from end of an array
numbers.pop();
console.log(numbers);
// > [999, 42, 56, 33, 23, 44, 36, 5]

//  take from front of an array
numbers.shift();
console.log(numbers);
// > [42, 56, 33, 23, 44, 36, 5]
```

#### splice()
You can also **splice** out certain values or a value chain from an array. <br>
In the `splice()` method, you specify the **index** range you want to take out. <br>
`splice(1,1)` will take out the values from **index 1** to **index 1** – so only that **one** value. <br>
`splice(1,3)` will take the values from **index 1** to **index 3** – so it takes **three** values. <br> 

```js
//  splice out certain valuey
numbers.splice(1, 1);
console.log(numbers);
// > [42, 33, 23, 44, 36, 5]

//  splice out valuey chain
numbers.splice(1, 3);
console.log(numbers);
// > [42, 36, 5]
```

### reverse()
Use `reverse()` to **reverse** the order of an array. <br>

```js
const numbers = [42, 56, 33, 23, 44, 36, 5];

//  reverse
numbers.reverse();

console.log(numbers);
// > [5, 36, 44, 23, 33, 56, 42]
```

### Concatenate arrays
Bring two arrays together with `concat()`. <br>

```js
const numbers = [42, 56, 33, 23, 44, 36, 5];
const numbers2 = [22, 67, 24, 77, 14];

// Concatenate arrays
val = numbers.concat(numbers2);

console.log(val);
// > [42, 56, 33, 23, 44, 36, 5, 22, 67, 24, 77, 14]
```

### Sorting string arrays
An array of **strings** can be sorted in alphabetical order with `sort()`. <br>

```js
const fruits = ["Orange", "Pear", "Banana", "Apple"];

// Sorting arrays
val = fruits.sort();

console.log(val);
// > ["Apple", "Banana", "Orange", "Pear"]
```

### Sorting number arrays
To bring number strings in order, you have to use the **compare function**. <br>

```js
//  Sorting number arrays
const numbers = [42, 56, 33, 23, 44, 36, 5];

val = numbers.sort(function (x, y) {
  return x - y;
});

console.log(val);
// > [5, 23, 33, 36, 42, 44, 56]
```

You can reverse the order by switching **x - y** to **y - x**. <br>

```js
val = numbers.sort(function (x, y) {
  return y - x;
});

console.log(val);
// > [56, 44, 42, 36, 33, 23, 5]
```

## Object literals
Objects are initiated with curly brackets. They can store all kind of values, including arrays, other objects and functions. <br>
<br>
You can access a specific object value with **dot notation:** `object.value` or with this syntax `object['value']`. <br>


```js
const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 30,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL",
  },
  getBirthYear: function () {
    return 1987;
  },
};

let val;
val = person;

// Get specific value
val = person.firstName;
console.log(val);
val = person.age;
console.log(val);
val = person.hobbies[1];
console.log(val);
val = person.address;
console.log(val);
val = person.address.city;
console.log(val);
val = person.getBirthYear();
console.log(val)
```

![object](/images/object.png)

### .this
Whitin objects you can access other properties of that object with the **this** keyword. <br>
In this example, we're using **this** in the `getBirthYear` function to access the age. <br>
Without **this** we would recive an error: *ReferenceError: age is not defined* <br>

```js
const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 30,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL",
  },
  getBirthYear: function () {
    return 2021 - this.age;
  },
};

val = person.getBirthYear();
console.log(val);
// >> 1991
```

## Dates & times
In JavaScript we have the **Date** object to do certain things with dates. <br>
Here we are creating a date object, which will – when ever it's called – contain the date of that moment. <br>
The type of that variable isn't neither date nor string, it is **object**. <br>

```js
const today = new Date();
console.log(today);
console.log(typeof today);
```

![date](/images/date.png)

If you want to transform it into a **string**, use the `toString()` function: <br>

```js
const today = new Date();

val = today.toString();
console.log(val);
console.log(typeof val);
```

![toString](/images/to_string.png)

### Specify the date

If you want to set a specific date, enter that date in the brackets. <br>

```js
const birthday = new Date("10/09/1981");
console.log(birthday);
// > Date Fri Oct 09 1981 00:00:00 GMT+0100 (Central European Standard Time)
```

There are quite a bit of [formatting options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). <br>
The example below will lead to the exact same result as the one above –an there are other ways to archive this. <br>

```js
const birthday = new Date("October 9 1981");
```

You can as well specify the time for that date: <br>

```js
const birthday = new Date("October 9 1981 14:30:00");
console.log(birthday);
// > Date Fri Oct 09 1981 14:30:00 GMT+0100 (Central European Standard Time)
```

### Date functions – get a specific date element
There are several date functions to get a single element out of the date object. <br>
**NOTE:** Like with arrays, the index of a date's month is **0-based**!. <br>
A date object in **October** will give you a month of number **9** – because the index starts at 0 (January). <br> 
So keep in mind that the number of the month will be **-1** while day, year or hour won't. <br>
Another special index is with the `getday()` function. That index is also **0-based** and constructed as following: <br>

* 0 = Sunday
* 1 = Monday
* 2 = Tuesday
* 3 = Wednesday
* 4 = Thursday
* 5 = Friday
* 6 = Saturday

```js
const birthday = new Date("October 9 1981 14:30:00");
console.log(birthday);
// > Date Fri Oct 9 1981 14:30:00 GMT+0100 (Central European Standard Time)

console.log(birthday.getMonth());
// > 9
console.log(birthday.getFullYear());
// > 1981
console.log(birthday.getDate());
// > 9
console.log(birthday.getDay());
// > 5
```

### Get a specific time element
As with the date elements, you can get specific time element values out with date functions. <br>

```js
const birthday = new Date("October 9 1981 14:30:00");
console.log(birthday);
// > Date Fri Oct 9 1981 14:30:00 GMT+0100 (Central European Standard Time)

console.log(birthday.getHours());
// > 14
console.log(birthday.getMinutes());
// > 30
console.log(birthday.getMilliseconds());
// > 0
```

### Set values for date elements
We have seen date functions to get date element values – this works as well the other way around. <br>
You can define specific values of a date element, with its appropriate set function. <br>

```js
let birthday = new Date("October 9 1981 14:30:00");
console.log(birthday);
// > Date Fri Oct 9 1981 14:30:00 GMT+0100 (Central European Standard Time)

birthday.setMonth(2);
console.log(birthday);
// > Date Fri Mar 9 1981 14:30:00 GMT+0100 (Central European Standard Time)

birthday.setDate(15);
console.log(birthday);
// > Date Sun Mar 15 1981 14:30:00 GMT+0100 (Central European Standard Time)

birthday.setFullYear(2021);
console.log(birthday);
// > Date Mon Mar 15 2020 14:30:00 GMT+0100 (Central European Standard Time)

// Set Time
birthday.setHours(16);
birthday.setMinutes(45);
birthday.setFullYear(2021);
console.log(birthday);
// > Date Mon Mar 15 2020 16:45:00 GMT+0100 (Central European Standard Time)
```

## If statements & comparison operators
### Equal / not equal & validated / not validated
JavaScript doesn't by default validate the data type of a data type with an **equal operator** `==` or the **not equal operator** `!=` <br>
The if from the example below `if (id == 100)` would accept either an id of a number value 100 or a string value of "100". <br>
The **equal / not equal** operators with data type validation are extended by one **equal sign** `===` and `!==`  <br>

```js
let id = 100;

// NOT VALIDATED –––––––––––––
// this would work with a string "100" as well

// EQUAL TO
if (id == 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
// > CORRECT

// NOT EQUAL TO
if (id != 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
// > INCORRECT

// VALIDATED –––––––––––––––––

// EQUAL TO VALUE & TYPE
// this works only with a number 100
// a string "100" would reverse the results from this example

if (id === 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
// > CORRECT

// NOT EQUAL TO VALUE & TYPE
if (id !== 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
// > INCORRECT
```

### !== undefined
If you want something to happen if a certain variable exists, you could do something like this: <br>

```js
let id = 100;

if (id) {
  console.log(`The Id is ${id}`);
} else {
  console.log("No Id");
}
```

Testing that code would actually work fine, the console shows **The Id is 100**. <br>
If you comment the id variable out, you'd expect it to show **No Id** in the console, but instead you'll run into an error: <br>
*Uncaught ReferenceError: id is not defined* <br>
The id is not defined, so the first if can not be evaluated. <br>
You can avoid that error, by checking if the variable exists (is not undefined). <br>

```js
if (typeof id !== "undefined") {
  console.log(`The Id is ${id}`);
} else {
  console.log("No Id");
}
```

Now the console will show **No Id**, as we have not defined that variable here. <br>

### if else
With `else if` you can evaluate further conditions after the initial `if`. <br>
The code in an `else if` will only execute if its condition is true, the code in an `else` will execute when all prior evaluations were false. <br>
<br>
In the example below, we have dedicated logic **if** the value of the color variable is red, blue or orange. <br>
Everything **else** will lead to execution of the code in the else statement. <br>

```js
const color = "orange";

if (color === "red") {
  console.log("Color is red");
} else if (color === "blue") {
  console.log("Color is blue");
} else if (color === "orange") {
  console.log("Color is orange");
} else {
  console.log("Color unknown, or no color");
}

// > Color is orange
```

### No curly brackets required
**NOTE:** An interesting fact is that JavaScript actually doesn't require curly to function correctly. <br>
The code below will execute fine without those curly brackets. <br>

```js
const id = 100;

// Whithout Brackets
if (id === 100) console.log("CORRECT");
else console.log("INCORRECT");

// > CORRECT
```

But it is recommended to use them for a better readability and to better optically match that c-style syntax. <br> 

## Logical operators
### && (AND) 
You can concatenate conditions with the **AND** operator, which is written `&&` in JavaScript. <br>
In the example below, we are evaluation an age-range by setting a **greater than** and a **less than** condition and combining them with an `&&`. <br>
Both conditions must evaluate **true** to execute the code block linked to them. <br>

```js
const name = "Steve";
const age = 22;

// && (AND)
if (age > 0 && age <= 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// > Steve is an adult
```

### || (OR)
The **OR** operator, written `||` in JavaScript, is used when there are at least two conditions and either one of them or both should be **true** to execute the related code block. <br>
So in the example below, *Steve can not run in race*, because he is neither younger than 16, the first condition is and the denial gets executed. <br>

```js
const name = "Steve";
const age = 4;

// || (OR)
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// > Steve can not run in race
```

### Ternary operator
The conditional (ternary) operator is the only JavaScript operator that takes three operands: <br>
A **condition** followed by a question mark `?`, then an **expression** to execute if the condition is true, followed by a colon `:`, which is acting like an **else**, whit a final expression that executes if the first condition was false. <br>
This operator is frequently used as a shortcut for the if statement.  <br>

```js
const id = 100;

// TERNARY OPERATOR
console.log(id === 100 ? "CORRECT" : "INCORRECT");

// > CORRECT
```

## Switches
Switches are an other way to validate conditions. <br> It's basically doing what an **else-if** is doing, although it might be more readable for many conditions. <br>
One thing you have to keep in mind is that you have to write a **break** after the expression for each condition. <br>
Without a **break**, the next expression will get executed as well. <br>

```js
const color = "blue";

switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Color is not red or blue");
    break;
}

// > Color is blue
```

Here an other example for a the use of **switch statements** – here we are getting the day of the week, depending on what index the `.getDay()` function of the `Date()` object will give us. <br>

```js
let day;

// Get the Day of the Week
// Index starts with 0 for "Sunday"

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

console.log(day);
```

## Functions
Functions are blocks of code that can be defined and than called at a later time. <br>
In some cases they are defined and called at the same time. <br>
There are different types of functions in JavaScript. <br>

### Function declarations
Functions can take over **parameters** – also called **arguments**, do something with those values and then **return** a result. <br>
Heres a little example for that: <br>

```js
function greet(firstName, lastName) {
  return "Hello " + firstName + " " + lastName;
}

console.log(greet("John", "Doe"));
// > Hello John Doe
```

We are calling those function for the console, providing a first- and a last-name as defined in the function. <br>
If we call the function without passing all specified parameters, their outcome will show as **undefined**. <br>
You can set default values to prevent this, how to set such a default has improved with ES6. <br>
In ES5 the definition of defaults had to happen by evaluating the parameter's type within the function like that: <br>

```js
function greet(firstName, lastName) {
  if (typeof firstName === "undefined") {
    firstName = "John";
  }
  if (typeof lastName === "undefined") {
    lastName = "Doe";
  }
  return "Hello " + firstName + " " + lastName;
}

console.log(greet());
// > Hello John Doe
```

"Hello John Doe" gets returned although the function was called without parameters, as John & Doe have been set as the default values for firstName and lastName. <br>
<br>
In ES6 it is easier to do that – the default can be set directly in the declaration of the parameter: <br>

```js
function greet(firstName = "John", lastName = "Doe") {
  return "Hello " + firstName + " " + lastName;
}

console.log(greet());
//  > Hello John Doe
```

### Function expressions 
A function expression is when you put a function as a variable assignment. <br>
Usually you have a named variable and an anonymous function: <br>

```js
const square = function(){}
```

You could also name the function, but it is not required: <br>

```js
const square = function square(){}
```

Here's an example of a full function expression: <br>

```js
const square = function (x) {
  return x * x;
};

console.log(square(8));
// > 64
```

### Immidiatley invokable function expressions – IIFEs
IIFEs are function that you declare and run at the same time. <br>
To do that, we need it to be an expression and we can make it an expression, by putting it into parenthesis. <br>

```js
(function() {
  console.log("IFIE Ran..");
})();
// IFIE Ran..
```

These functions can also take in parameters: <br>

```js
(function (name) {
  console.log("Hello " + name);
})("Brad");
// Hello Brad
```

We declared it and it just run right away. <br>

### Property methods
When a **function** is put inside an **object** it is called a **method**. <br>
In this example we have defined the **object** todo, which carries two functions that can be called via **dot notation**. <br> 
With dot notation we can also define an object method outside the object – see the delete method in the example. <br>

```js
const todo = {
  add: function () {
    console.log("Add todo..");
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log("Delete todo..");
};

todo.add();
// > Add todo..
todo.edit(22);
// > Edit todo 22
todo.delete();
```

## General loops
### For loops
For loops in JavaScript work as for loops in any other programming language. <br>
`for (let i = 0; i < 10; i++)` you have an **integer** `i`, which you set to a starting point, the **condition** (*as long as i is smaller than 10*) and the `i++` – which will increase `i` after each iteration. <br>
Lets have a look on some characteristics. <br>
<br>
Here we have a loop printing a string and the current value of `i` out to the terminal. <br>
If `i` is **equal** to 2, an other sentence is printed out to the terminal (additionally). <br>
Note that "Number 2" is also printed out to the console. <br>

```js
for (let i = 0; i < 10; i++) {

  if (i === 2) {
    console.log("2 is my favorite number");
  }

  console.log("Number " + i);
}
```

![for loop 1](/images/for-loop_01.png)

If we want to break out of the default behaviour of the loop, when a certain condition is met and only execute our conditional expression we have to use `continue`. <br>
`continue` will stop all further evaluations for that iteration and jump to the next cycle. <br>

```js
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2 is my favorite number");
    continue;
  }

  console.log("Number " + i);
}
```

Now the "Number 2" print out is gone. <br>

![for loop 2](/images/for-loop_02.png)

If you want the loop to **stop** completely when a certain condition is met, you can use `break`. <br>

```js
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2 is my favorite number");
    continue;
  }

  if (i === 5) {
    console.log("Stop the loop");
    break;
  }

  console.log("Number " + i);
}
```

Now the loop breaks at our specified point. <br>

![for loop 3](/images/for-loop_03.png)

### While loops
Which type of loop to use is often just personal preference, but there is some saying: <br>
When you know exactly how often your loop is running, use a for loop, if that's unclear, use a while loop. <br>
<br>
The while loop works nearly the same way as the for loop, but the integer is defined outside of the loop and the increment is set as part of the expression. <br>

```js
let i = 0;

while (i < 10) {
  console.log("Number " + i);
  i++;
}
```

![while loop 1](/images/while_loop_1.png)

### Do while loops
The do while loop has a bit of a weird feature that it runs at least one time – even if its condition isn't met. <br>

```js
let i = 0;

do {
  console.log("Number " + i);
  i++;
} while (i < 10);
```

![do while loop](/images/do_while_loop.png)

So far no difference to the other loop types, but if we change the variable to 100, what is of course higher then 10, the expression is executed anyhow one time. <br>

```js
let i = 100;

do {
  console.log("Number " + i);
  i++;
} while (i < 10);
// > Number 100
```

### Loop through arrays
#### Array for loop
In the **for loop** you're using the incrementing integer `i` as the array's index indicator `[0]`. <br>

```js
const cars = ["Ford", "Opel", "Honda", "Toyota"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
```

#### Array for each loop
In the **for each loop** you're using an anonymous function to execute an expression *for each* index of the array. <br>

```js
const cars = ["Ford", "Opel", "Honda", "Toyota"];

cars.forEach(function(car) {
  console.log(car);
});
```

Both techniques will output the same result. <br>

![array for loop](/images/array_for_loop.png)

### Map
With map you can get through an **array of objects** and assign certain values of that user to an other variable. <br>
In the example below we are extracting the id for each user and putting it in the ids variable. <br>

```js
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Karen" },
];

const ids = users.map(function (user) {
  return user.id;
});

console.log(ids);
```

![map](/images/map.png)

### for in loop
The for in loop can be used to loop through an object. <br>

```js
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 40,
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
```

![for in loop](/images/for_in_loop.png)

## The window object
The window is the global object in client side JavaScript. <br>
Node.js is a JavaScript runtime that runs as a standalone process on your machine or on a server – the system is your environment in node.js. <br>
In client side JavaScript, the window (the browser) is the global environment. <br>
Node.js and chrome both use the same JavaScript engine, called V8, from Google. <br>
Firefox use an engine called SpiderMonkey, developed by Mozilla and also used by the GNOME Shell for extension support. <br>
<br>
The window object has a lot to it what JavaScript developers use all the time, like <br>
* local storage
* the fetch API
* the navigator object
* methods like alert, and promt and confirm

If we enter **window** in the browser's console, we can access all the stuff it has in it. <br>

![window](/images/window.png)

### Console
Browsing through that list you'll see, that you've used stuff from the window object all the time, like for example `console.log()`. <br>

![console](/images/console.png)

Instead of `console.log()` you could also write `window.console.log()` but you don't need to, as you're already **on top of the window object**. <br>

### Alert
The same is true for **alert** which is a **window method** that pops up a little window on the screen. <br>
It can be written without the **window**, but is **a part of the window object** and can therefor as well be addressed like this: <br>

```js
// Alert
window.alert("hello world");
```

![alert](/images/alert1.png)

### Promt
Promt is similar to alert except it takes an input. <br>

```js
// Promt
const input = prompt();
alert(input);
```

![prompt](/images/prompt.gif)

### Confirm
This is used often, when you're deleting something – to avoid the user clicked it by accident. 

```js
// Confirm
if (confirm("Are you sure")) {
  alert("you clicked yes");
}
```

![confirm](/images/confirm.gif)

### Get the hight and the width of the window
You can get the inner & outer hight & width of the window: <br>

```js
hight = window.outerHeight;
console.log("hight: " + hight);

width = window.outerWidth;
console.log("width: " + width);
```

![hight width](/images/hight-width.png)

The inner hight & width doesn't count any scroll bar or console. <br>

```js
hight = window.innerHeight;
console.log("hight: " + hight);

width = window.innerWidth;
console.log("width: " + width);
```
![inner hight width](/images/inner_hight_width.png)

### scrollY & scrollX
You can determin the scroll position of the site with `scrollY` & `scrollX`. <br>

```js
//  Scroll points
scrX = window.scrollY;
scrY = window.scrollX;
```

### Location
The location object provides you access to information like the **host**, **hostname**, the **port** as well as methods like **reload**, **replace** or **search**, there is quite a lot in `window.location`. <br>

```js
// Location Object
val = window.location;
console.log(val);
// > http://127.0.0.1:5500/index.html

val = window.location.hostname;
console.log(val);
// 127.0.0.1

val = window.location.port;
console.log(val);
// 5500

val = window.location.href;
console.log(val);
//  http://127.0.0.1:5500/index.html
```

#### search
`window.location.search` won't give you anything on the index page of your sandbox, but in a more complex setup, it can be used to determine, what the user has searched for or what they have clicked on. <br>

![search](/images/search.png)

#### href redirect
`window.location.href` can be used to **redirect** the user to an other **location**. <br>

```js
window.location.href = "http://heikokraemer.de/";
```

![redirect](/images/redirect.png)

#### reload
You can initiate a **reload** of a page with `window.location.reload()`. <br>

#### history
The window **history** object can be used to brows and navigate through the users history. <br>
<br>
This command will navigate the user back to the last page he visited: <br>

```js
window.history.go(-1);
```

With the following method you can get the number of pages the user visited before he came to the current page: <br>

```js
val = window.history.length;
console.log(val);
```

### navigator
The **navigator object** has to do with the browser itself. It is named after the **netscape navigator**, which was the dominant web browser in the 90s. <br>
We can get all kind of browser information with `window.navigator`. <br>
<br>
To get a full overview, try this: <br>

```js
val = window.navigator;
console.log(val);
```

![navigator](/images/navigator.png)

To determine the users **browser version**, you can use the following: <br>

```js
val = window.navigator.appVersion;
console.log(val);
// >  5.0 (X11)
```

Or `userAgent` to get even more information regarding browser, version and system: <br>

```js
val = window.navigator.userAgent;
console.log(val);
// >  Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:90.0) Gecko/20100101 Firefox/90.0
```

If you ever decide only to show some content of your site to **Linux** users, use `platform` to get that information: <br>

```js
val = window.navigator.platform;
console.log(val);
// > Linux x86_64
```

The set `language` is an other useful information you can get with `navigator`: <br>

```js
val = window.navigator.language;
console.log(val);
// > en-US
```

## Scope
Depending on where in your code a variable is used, it is part of a **scope**. <br>
If it appears in the document (at the beginning for example) without any further brackets around it, it has **global scope**. <br>
If it is part of a function = **function scope**. <br>
When written into the inner of an **if** or a **loop** = **block scope** <br>
<br>
The variables in the **function scope** are totally independent from the **global scope**. <br>
They have no impact on each other, although they are declared with identical names. <br>
<br>
Variables declared with an identical name in **block** and **global** scope will influence each other if declared with **var**. <br>
**let** and **const** variables are stable in their scope context. <br>
<br>
In this example you see that all variables remained stable within their scope – except for the **var a**, which has been *globaly* overwritten in the **block scope**. <br> 

```js
// Global Scope
var a = 1;
let b = 2;
const c = 3;

// Function Scope
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("Function Scope: ", a, b, c);
}

test();

// Block Scope
if (true) {
  var a = 7;
  let b = 8;
  const c = 9;
  console.log("IF Scope: ", a, b, c);
}

console.log("Global Scope: ", a, b, c);
```

![scope](/images/scope.png)


## The DOM
I've excluded [my notes on the **D**ocument **O**bject **M**odel](https://github.com/HeikoKramer/webDev/blob/main/dom_notes.md) into an other file. <br>

## Object Oriented JavaScript
[Click here for my notes on **object oriented JavaScript**](https://github.com/HeikoKramer/webDev/blob/main/object_oriented_javascript.md)  <br>

## Asynchronous JavaScript
[Click here for my notes on **asynchronous JavaScript**](https://github.com/HeikoKramer/webDev/blob/main/asynchronous_js.md) <br>

## Error handling with try … catch
A **try block** lets us execute a bit of code and **test for errors**. <br>
The **catch block** lets us **handle errors** if there are any. <br>
We can also **throw our own errors**. <br>
<br>
The example below shows that we **try** to execute a function – and **catch** an error to show it in the console. <br>
It also shows, that our `console.log('Program continues')` at the end gets executed, although an error occurred. <br>
Without **try** & **catch** the execution would have stopped after the error. <br>

```js
try {
  // Produce a ReferenceError
  myFunction();
} catch(e) {
  console.log(e);
}

console.log('Program continues');
```

![try-catch](/images/try-catch.png)

You can get more specific values from the error: <br>

```js
console.log(e.message);
// >  myFunction is not defined
console.log(e.name);
// > ReferenceError
console.log(e instanceof ReferenceError);
// > true
```

### finally
Beside the **try** and the **catch** block, there is an optional block – **finally**. <br>
The code in the **finally** block will execute no mater what happened before it, error or not. <br> 

```js
try {
  // Produce a ReferenceError
  myFunction();
} catch(e) {
  console.log(e);
} finally {
  console.log('Finally runs regardless of result');
}

console.log('Program continues');
```

![finally](/images/finally.png)

### throw an error
We can **throw** our own errors with `throw`. <br>

```js
const user = {email: 'testing@heikokraemer.de'};

try {
  if(!user.name) {
    throw 'User has no name';
  }
} catch(e) {
  console.log(e);
  // >  User has no name
} 
```

We can also specify the **type** of error **thrown**. <br>

```js
const user = {email: 'testing@heikokraemer.de'};

try {
  if(!user.name) {
    throw new SyntaxError('User has no name');
  }
} catch(e) {
  console.log(e);
  // > SyntaxError: User has no name
} 
```

## Regular Expressions
My notes on **regular expressions** can be found in the [regex_notes.md](https://github.com/HeikoKramer/webDev/blob/main/regex_notes.md) file. <br>

## Iterators & Generators
### Iterators
**Iterators** provide the option not to loop through all items of an array all at once, but to go step by step through them. <br>
In the example below we provide an array of names and return only one index position of that array back. <br>
Every time the function is called, that index increases, so we get an other name (next index) from our array with every call. <br>

```js
// Iterator Example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length ?
      { value: names[nextIndex++], done: false } :
      { done: true }
    }
  }
}

//  Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];
// Init iterator and pass in the names array
const names = nameIterator(namesArr);

// 1st time, Index 0
console.log(names.next().value);
// > Jack

// 2nd time, Index 1
console.log(names.next().value);
// > Jill

// 3rd time, Index 2
console.log(names.next().value);
// > John

// 4th time, Index = names.length, else, done = true
console.log(names.next());
// > Object { done: true }
```

### Generators
**Generators** are basically functions that can return multiple values – **yield values**. <br>
You have to put an **asterisk** after the word *function* `function*` to declare a **generator**. <br>
The generator works like the iterator then and returns **yield values** one by one when it's called. <br>

```js
// Generator Example
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();

console.log(name.next().value);
// > Jack
console.log(name.next().value);
// > Jill
console.log(name.next().value);
// > John
console.log(name.next().value);
// > undefined
```

Here an example for a basic Id **generator** that returns an increased value every time it is called. <br>

```js
// ID Creator
function* createIds() {
  let index = 0;

  while(true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
// > 0
console.log(gen.next().value);
// > 1
console.log(gen.next().value);
// > 2
```

## Symbols
**symbols** are a **primitive datatype** and they are part of the **ES6** standard. <br>
Each symbol is completely **unique** – that makes them very valuable for things like object property identifiers. <br>
The main purpose of symbols is their uniqueness. <br>
To **create a symbol** just set a variable equal to `Symbol()`. <br>
You can give the symbol an **identifier** `Symbol('identifier')`. <br>

```js
// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1);
// > Symbol()

console.log(sym2);
// > Symbol("sym2")
```

The **typof** our variables is now **symbol**. <br>

```js
console.log(typeof sym1);
// > symbol 
```

Symbols are **unique**, no two symbols can be the same, even if you give them the same identifier: <br>

```js
console.log(Symbol() === Symbol());
// > false
console.log(Symbol('42') === Symbol('42'));
// > false
```

### Unique object keys
**Unique object keys** are the main reason for symbols. <br>
Symbols can't be assigned or addressed via dot notation – they have to be assigned with brackets `[]`. <br>
If you try to assigned a symbol to an object with dot notation, it will be added as a regular **property**. <br>

```js
const KEY1 = Symbol();
const KEY2 = Symbol();
const key3 = Symbol();
const key4 = Symbol();

const myObj = {};

myObj[KEY1] = 'Prop1'; // <-- Symbol
myObj[KEY2] = 'Prop2'; // <-- Symbol
myObj.key3  = 'Prop3'; // <-- no symbol, only a simple property
myObj.key4  = 'Prop4'; // <-- no symbol, only a simple property

// Symbols
console.log(myObj[KEY1]);
// > Prop1
console.log(myObj[KEY2]);
// > Prop2

// Cant address a symbol with dot notation
console.log(myObj.KEY1);
// > undefined

// Properties
console.log(myObj.key3);
// > Prop3
console.log(myObj.key4);
// > Prop4
```

**Symbols** are not enumerable in loops. <br>

```js
for(let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// > key3: Prop3
// > key4: Prop4
```

**Symbols** are ignored by JSON.stringify. <br>
The symbol doesn't parse, we end up with an empty object: <br>

```js
console.log(JSON.stringify({key: 'prop'}));              // <-- property
// >  {"key":"prop"}
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'})); // <-- symbol
// > {}
```

## Destructuring
**Destructuring** was introduced with ES6 and it gives us an easy way to **assign and extract variables** from **arrays and objects**. <br>
### Destructuring assignment
Destructuring assignment provides an efficient way to assign values to variables: <br>

```js
// Destructuring assignment

let a, b;
[a, b] = [100, 200];

console.log(a);
// > 100
console.log(b);
// > 200
```

### Rest pattern
The **rest pattern** provides a way to store the remaining values from an array, which where not assigned, to the **rest** variable. <br>
The pattern to assign those remainers to rest is **three dots, followed by the word rest** – `...rest`. <br>

```js
let a, b;

// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

console.log(a);
// > 100
console.log(b);
// > 200
console.log(rest);
// > Array(3) [ 300, 400, 500 ]
```

### Destructuring assignment and rest pattern with objects
The **destructuring assignment** and the **rest pattern** work as well with **objects**: <br>

```js
({ a,b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500});

console.log(a,b);
// > 100 200
console.log(rest);
// > Object { c: 300, d: 400, e: 500 }
```

### Array Destructuring
Here an example for **array destructuring**, we're creating three variables and assign each its index peer from the array. <br> 

```js
// Array Destructuring

const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;

console.log(person1, person2, person3);
// > John Beth Mike 
```

### Parse array returned from function
Same principle here with an array returned by a function. <br> 

```js
// Parse array returned from function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

console.log(person1, person2, person3);
// > John Beth Mike 
```

### Object Destructing
Let's destruct a person object into multiple variables the ES5 and the ES6 way. <br>
<br>
Here our person: <br>

```js
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male'
}
```

The old ES5 way: <br>

```js
// Old ES5 way
const name = person.name,
      age  = person.age,
      city = person.city;

console.log(name);
// >  John Doe
```

The new ES6 way: <br>

```js
// New ES6 Destructuring
const { name, age, city } = person;

console.log(name);
// >  John Doe
```

## ES6 Maps
A **map** is an object that holds **key value pairs**. <br>
Any object or primitive can be used as a key or a value of a map. <br>
To **set** a **key value pair**, you use `set(key, value)`. <br>
You can retrieve the values by using `get()` on the map and passing over the appropriate key. <br>

```js
const map1 = new Map();

// Set Keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key 
console.log(map1.get(key1), map1.get(key2), map1.get(key3));
// > Value of key1 Value of key2 Value of key3

// Count values
console.log(map1.size);
// > 3
```

### Iterating map
#### Loop using for...of to get keys and values
You can loop through a map to retrieve both of its elements, key and values. <br>

```js
const map1 = new Map();

// Set Keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Loop using for...of to get keys and values
for(let [key, value] of map1) {
  console.log(`${key} = ${value}`)
}
```

Same result, but archived with **forEach**: <br>

```js
// Loop with forEach
map1.forEach(function(value, key) {
  console.log(`${key} = ${value}`);
})
```

![map-key-value](/images/map-key-value.png)

If we want to get **keys only**, we can use `keys()`. <br>

```js
// Iterate key only
for(let key of map1.keys()) {
  console.log(`${key}`)
}
```

![keys](/images/keys.png)

It works the same way for **only values** with `values()`. <br>

```js
// Iterate values only
for(let value of map1.values()) {
  console.log(`${value}`)
}
```

![values](/images/values.png)

### Convert maps to arrays
We can use `from()` to convert the **key value pair** into an array of objects with its key and value as properties. <br>

```js
const map1 = new Map();

// Set Keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Create an array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);
```

![map-to-array](/images/map-to-array.png)

If you want to create an array **just from values**, use `from()` and `values()`: <br>

```js
// Create an array just from values
const valArr = Array.from(map1.values());
console.log(valArr);
```

![just-values](/images/just-values.png)

If you want to create an array **just from key**, use `from()` and `keys()`: <br>

```js
// Create an array just from keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);
```

![just-keys](/images/just-keys.png)

## ES6 Sets
A **sets** is a collection of values, **like an array**, but in a set, **each value is unique**, you **can't store a value twice** in a set. <br>
You have to declare your set with `new Set()`. **Add values** to a set with `add()`. <br>
We can add different value types to the same set, in the example below we add a number, a string, an object and a boolean. <br>

```js
// SET - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('a string');
set1.add({name: 'John'});
set1.add(true);

console.log(set1);
```

![set](/images/set.png)

If we try to add 100 again – a value that already exists – it will have no effect, **each value can only exist once** in the set. <br>
New values get added, already existing values are ignored. <br>

```js
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('a string');
set1.add({name: 'John'});
set1.add(true);

console.log(set1);
// > Set(4) [ 100, "a string", {…}, true ]

set1.add(100); // <-- already exists in out set

set1.add(200);
set1.add(300);
set1.add(400);

console.log(set1);
// > [ 100, "a string", {…}, true, 200, 300, 400 ]
```

You can also initiating a **new set** by **passing values in square brackets**: <br>

```js
const set2 = new Set([1, true, 'string']);
console.log(set2);
// > Set(3) [ 1, true, "string" ]
```

You can get the **amount of values** stored in the set with `.size`. <br>

```js
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('a string');
set1.add({name: 'John'});
set1.add(true);

console.log(set1);
// > Set(4) [ 100, "a string", {…}, true ]

// Get count
console.log(set1.size);
// > 4
```

You can check if a set contains a certain value with `.has`. <br>
This query will provide **true** or **false** if the value is stored in the set or nor. <br>
Note that also **expressions that equal a value in the set** will return **true**. <br>

```js
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('a string');
set1.add({name: 'John'});
set1.add(true);

// Check for values
console.log(set1.has(100));
// > true
console.log(set1.has(50 + 50)); // <-- expression that equals 100
// > true
console.log(set1.has(200));
// > false
```

Let's have a look at the **object** in the set: <br>

```js
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('a string');
set1.add({name: 'John'});
set1.add(true);

// Check for values
console.log(set1.has({name: 'John'}));
// > false
```

The `.has` check for the **object** returns **false** although the object with the exact same properties is in our set. <br>
But objects are **reference objects** no **primitive values**, they are not stored in the stack, they live in heap. <br>
Even if we make a check for two identical objects in the same line, it's going to return **false**: <br>

```js
console.log({name: 'John'} === {name: 'John'});
// > false
```

If we compare only the two name strings, we get back **true**, because a string is a **primitive value**: <br>

```js
console.log('John' === 'John');
// > true
```

### Iterating through sets

You can **iterate** through a set as you would through an array. <br>
Both loops shown in the example below produce the same output: <br>

```js
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('a string');
set1.add({name: 'John'});
set1.add(true);

// Iterating through sets

// For..of
for(let item of set1) {
  console.log(item);
}

// ForEach Loop
set1.forEach((value) => {
  console.log(value);
})
```

![set-iteration](/images/set-iteration.png)

### Convert set to array
You can **convert a set to an array** with `Array.from()`: <br>

```js
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('a string');
set1.add({name: 'John'});
set1.add(true);

// Convert set to array
const setArr = Array.from(set1);
console.log(setArr);
// > Array(4) [ 100, "a string", {…}, true ]
```

### Convert array to set
The other way around is even easier, just hand over your array to `new Set()` to convert the array to a set. <br>

```js
const arrSet = new Set(setArr);
console.log(arrSet);
// > Set(4) [ 100, "a string", {…}, true ]
```

## JavaScript Patterns
I have carved out my [notes on JavaScript **patterns**](https://github.com/HeikoKramer/webDev/blob/main/js-pattern_notes.md). <br>

## Modules
There are different types of **modules** in JavaScript. <br>
We have **common JS modules**, which node.js uses by default, what we can use with webpack by default. <br>
And there are **ES2015 modules**, for which to use we have to set up **Babel**. <br>
Both of them are used to bring in **modules**, which can be **other JavaScript files**, or **modules that you install with npm**, but their syntax is different. <br>

### Common JS modules
To bring in some JavaScript code from one JS-file to an other as a **module**, we have to use `module.exports` in the **module file**. <br>
<br>
Here we have created and **exported** an object in our *module1.js* file: <br>

```js
module.exports = {
  name: 'Brad',
  email: 'test@test.test'
}
```

Now we can **import** that object in our *app.js* file like this: <br>

```js
//  CommonJS Module Syntax
const person = require('./mymodule1');

console.log(person);
// > Object { name: "Brad", email: "test@test.test" }
```

We don't have to add the **.js** on the file name, the path **./** is fine when our module is located in the same folder. <br>
This is how you would also bring in modules that you installed with **npm**. <br>
But those would go in the **node_modules** folder. <br>
<br>
**Modules** are nice for our **application structure** as the allow us to to bring in other files without adding them all via **script tags** to our *index.html*. <br>

### ES2015 modules
The syntax for **ES2015 modules** is a little different, let's test it out in a file called *mymodule2.js*. <br>

```js
export const person = {
  name: 'John',
  age: 30
}
```

Now we don't say `module.exports` as before, we simply use `export`. <br>
We can **export** as many things as we want. <br>
<br>
To **import** the **module** into our *app.js* file, we now have to use an other syntax: <br>

```js
// ES2015 Module
import { person } from './mymodule2';

console.log(person.name);
// > John
```

We can even **access non-exported** elements from our **module** as long as they are accessible for the **exported function** for example. <br>

```js
export const person = {
  name: 'John',
  age: 30
}

const fruit = {
  name: 'Banana',
  color: 'yellow'
}

export function eatFresh() {
  console.log(`I love a nice and ${fruit.color} ${fruit.name}!`);
}
```

We have not exported the *fruit* constant, but the *eatFresh()* function. <br>
We are importing multiple things from our **module** using **destructuring**: <br>

```js
// ES2015 Module
import { person, eatFresh } from './mymodule2';

console.log(person.name);
// > John

console.log(eatFresh());
// > I love a nice and yellow Banana!
```

We can also **import everything** what we have **exported in a module**, with the **asterisk**. <br>
But than we have to **group those imports** under a **name**. <br>
Now we are importing **everything (\*)** from *mymodule2.js* under the name *mod* (`as mod`). <br>
To access those things, we have to use the name and dot notation – `mod.person.name` for example. <br>
We still can't access our *fruit* constant directly – as we have not exported it. <br>
But it is accessible via the `eatFresh()` function that has access to it in the **module**. <br>

```js
// ES2015 Module
import * as mod from './mymodule2';

console.log(mod.person.name);
// > John

console.log(mod.eatFresh());
// > I love a nice and yellow Banana!
```

There is an other way to **import** something, without using **curley brackets** `{}`. <br>
If we export that things with the keyword **default**, we can import it without using brackets: <br>

```js
export default function greetings() {
  console.log('Hello my friend!');
}
```

`export default` used in the *mymodule2.js* file, let's us **import** our function a bit easier into *app.js*: <br>

```js
// ES2015 Module
import greetings from './mymodule2';

console.log(greetings());
// > Hello my friend!
```

If you have a class like out [EasyHTTP](https://github.com/HeikoKramer/webDev/blob/main/js_tutorials/easyhttp_es6_async-await/easyhttp.js) class from an earlier tutorial, you can export it by **exporting a new instance of it**. <br>
So if we add that class in a separate file to our project, we simple add the following at the end: <br>

```js
export const http = new EasyHTTP();
```

Now we can **import** it into our *app.js* file with: <br>

```js
import { http } from './http';
```

The problem with the **ES2015** standard is, that it is not supported by all the browsers out there and that we have to [**transpile** it down to the **ES5** standard with **Babel**](https://developers.google.com/web/shows/ttt/series-2/es2015). <br>
