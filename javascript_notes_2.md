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
