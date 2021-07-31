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
