# The DOM
**DOM** stands for **DOCUMENT OBJECT MODEL**. What it is: <br>
* Tree of nodes/elements created by the browser
* JavaScript can be used to read/write/manipulate the DOM
* Object oriented representation

![The DOM](/images/the_dom.png)

The browser gives us a **window object** and inside that, we have the **document object**. <br>
The **document object** represents the loaded document or web-page. <br>
The **root element** underneath it represents the **html tag**. <br>
**head** and **body** element represent the appropriate tags within the html file. <br>
All the elements form the html have their representatives in the DOM. <br>
We can manipulate all that stuff pretty easily with JavaScript. <br>

## document
`document` will give you access to the full document – all the elements of the DOM. <br>
`document.all` will do the same, but structure it like an array. <br>
So you can do `document.all[0]` to get the first item of the document or `document.all.length` to get the total amount of items. <br> 
You can access the element directly by name, like `document.head` or `document.body`. <br>
You can get things like the **doctype**: <br>

```js
val = document.doctype;
console.log(val);
// > <!DOCTYPE html>
```

The **domain:**

```js
val = document.domain;
console.log(val);
// > 127.0.0.1
```

Or the whole **URL**: <br>

```js
val = document.URL;
console.log(val);
// > http://127.0.0.1:5500/index.html
```

If you ever need to know the pages **charakter set**, you can get it like this: <br>

```js
val = document.characterSet;
console.log(val);
// > UTF-8
```

Or the **content type**: <br>

```js
val = document.contentType;
console.log(val);
// > text/html
```

We can actually select stuff – **without using selectors** – although this is not recommended. <br>
With the command below we access **all form** elements of the document and have there access to child elements as the **input** for example. <br>
We could specify the form we'd like to access by adding an index number `document.forms[0]` for the first form. <br>

```js
val = document.forms;
console.log(val);
```

![form](/images/form.png)

We could get stuff from the form: <br>
<br>

**html:** <br>

```html
<form id="task-form">
  <div class="input-field col s12">
    <input type="text" name="task" id="task" value="Walk the dog">
    <label for="task">New Task</label>
  </div>
  <input type="submit" value="Add Task" class="btn">
</form>
```

**css:** <br>

```css
val = document.forms[0].id;
console.log(val);
// > task-form
```

We can get all the **links** of the document: <br>

```js
val = document.links;
console.log(val);
```

![links](/images/links.png)

You can get a string of all the **class names**: <br>

```js
val = document.links[0].className;
console.log(val);
// > delete-item secondary-content
```

Or a **collection of classes** which you could also access specifically via their index: <br> 

```js
val = document.links[0].classList;
console.log(val);
```

![classList](/images/classList.png)

The same way that we got all **links**, we could get all **images** with `document.images`. <br>
Also all scripts can be shown: <br>

```js
val = document.scripts;
console.log(val);
```

In this document, we have four **scripts**: <br>

![scripts](/images/scripts.png)

Same behavior everywhere, if you'd like to get an attribute of one of the scrips, do it like this: <br>

```js
val = document.scripts[2].src;
console.log(val);
// > http://127.0.0.1:5500/app.js
```

Or with the **getAttribute** method: <br>

```js
val = document.scripts[2].getAttribute("src");
console.log(val);
// > app.js
```

You can't use a **collection** like `document.scripts` in **for loop** for example. <br>
But you can transform it into an array to have it available for other code operations: <br>

```js
let scripts = document.scripts;
let scriptsArray = Array.from(scripts);
console.log(scriptsArray);
```

![scripts_array](/images/scripts_array.png)
