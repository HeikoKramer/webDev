# JavaScript Notes 2
Additional notes to my initial [note file](https://github.com/HeikoKramer/webDev/blob/main/javascript_notes.md) to document my learning progress on JavaScript. <br>
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


