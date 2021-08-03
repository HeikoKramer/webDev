# JavaScript Notes 2
Additional notes to my initial [JavaScript Notes](https://github.com/HeikoKramer/webDev/blob/main/javascript_notes.md) file to document my learning progress on JavaScript. <br>
I'm taking Brad Traversy's [Modern JavaScript From The Beginning](https://subscription.packtpub.com/video/web-development/9781789539509/p1) course on packthub.com while writing these notes. <br>

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

**floor** is going to round the number down. <br>

```js
downer = Math.floor(2.4);
upper = Math.floor(2.5);

console.log(downer);
console.log(upper);
```

![floor](/images/floor.png)
