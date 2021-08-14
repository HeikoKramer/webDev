# The DOM

*This document is an extension to my [JavaScript Notes 2](https://github.com/HeikoKramer/webDev/blob/main/javascript_notes_2.md). <br>
I'm writing these notes while taking Brad Traversy's [Modern JavaScript From The Beginning](https://subscription.packtpub.com/video/web-development/9781789539509/p1) course on packthub.com* 

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

**js:** <br>

```js
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

## DOM selectors for single elements
These selectors allow us to pull things from the DOM and than do stuff with it. <br>
For a long time, JQuery was used for DOM selection and DOM manipulation, but it has become much easier to do that in vanilla JavaScript. <br>
JQuery still has its place, its good if you quickly want to add plugins or scripts. <br>
<br>
In vanilla JavaScript we have a couple of different selectors, which are falling into two main categories: <br>
* single element selectors
* multi element selectors

**Single element selectors** allow you to grab one element by its **id** or **class** – and it only stores one thing. <br>
If you have a class that appears more than once in the DOM, it just gonna grab the first one. <br>
<br>
**Multipli element selectors** will get all of the elements with that class – and than return a **html collection** or a **node list** depending on the selector you're using. <br>
### document.getElementById()
This selector does just was it says – it selects elements by there **id**. <br>
You can't select a **class** or a **tag** there are more flexible selectors for that. <br>

In the example below, we have an H5, with an id of *task-title*, we get it by that id and show it in the console: <br>

**HTML:**

```html
<h5 id="task-title">Tasks</h5>
```

**JavaScript:**

```js
console.log(document.getElementById("task-title"));
```

![getElementById](/images/getElementById.png)

#### get things from the element
We can get further attributes from the selected element. <br>

**HTML:**

```html
<h5 id="task-title" class="test" >Tasks</h5>
```

**JavaScript:**

```js
console.log(document.getElementById("task-title").id);
//  > task-title

console.log(document.getElementById("task-title").className);
//  > test
```

#### change styling
We can manipulate the styling of the selected element by adding `.style` and the property you want to change. <br>
Anything you can do in **CSS** you can do here and assign it to the element's styling. <br>

This is our page as it looks **before** we style it: <br>

![before-style](/images/before-style.png)

Now we **assign styling to the element:** <br>  

```js
document.getElementById("task-title").style.background = "#333";
document.getElementById("task-title").style.color = "#fff";
document.getElementById("task-title").style.padding = "5px";
```
![after-style](/images/after-style.png)

We can even make the element disappear: <br>

```js
document.getElementById("task-title").style.display = "none";
```

![display-style](/images/display-style.png)

You don't want to do this just to style your page – therefor use CSS! <br>
Use this method for dynamic functionality, when you introduce **event-based styling**. <br>

#### change content
There are a few different methods that can be used to **change content**. <br>
<br>
Page **before change:** <br>

![change-before](/images/change-before.png)

Change with `textContent`: <br>

```js
document.getElementById("task-title").textContent = "Task List";
```

The heading has been changed: <br>

![textContent](/images/textContent.png)

The same could be archived with `innerText`: <br>

```js
document.getElementById("task-title").innerText = "My Tasks";
```

![innerText](/images/innerText.png)

You can also **inject HTML** to the element, with `innerHTML`: <br>

```js
document.getElementById("task-title").innerHTML = '<span style="color:red">Task List</span>';
```

![innerHTML](/images/innerHTML.png)

#### use variables
**NOTE:** We have used `document.getElementById("task-title")` a lot in all those examples above. <br>
I we are planning to do multiple **get** or **manipulation** methods on an element, we should setup a **variable** for it, to make our code more readable. <br>

```js
const taskTitle = document.getElementById("task-title");
```

Now we could replace all those `document.getElementById("task-title")` strings with just `taskTitle`, which is much cleaner. <br>

### document.querySelector()
The `document.querySelector()` is newer and much mor powerful as `document.getElementById()`. <br>
With the **query selector** we don't have to select elements by **id** – we can select them by anything. <br>

If we want to get our h5 `<h5 id="task-title" class="test" >Tasks</h5>`, we can use either the **id**, the **class** or the **element** itself. <br>
**NOTE:** If there would be **more than one** h5 on the page, we would **get the first one**! <br>

```js
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".test"));
console.log(document.querySelector("h5"));
```

All queries brought us the same result: <br>

![querySelector-get](/images/querySelector-get.png)

<br>

Let's look at a multi-element scenario in more detail: <br>
We have an unordered list with the class of collection in our page. <br>
That ul contains five identical list items like this: <br>

```html
<li class="collection-item">
  List Item
  <a href="#" class="delete-item secondary-content">
    <i class="fa fa-remove"></i>
  </a>
</li> 
```

This is how it looks on the page: <br>

![list-items](/images/list-items.png)

If we are using `querySelector("li").style` to **assign styling to list items**, we will only reach the **first li** of the page: <br>

```js
document.querySelector("li").style.color = "red";
```

![first-list](/images/first-list.png)

`querySelector` is a **single element selector** – its only gonna get the **first element**. <br>

You can use **sub classes** to better specify which element you're addressing, but this will also affect only the first matching item: <br>

```js
document.querySelector("ul li").style.color = "blue";
```

![first-ul-li](/images/first-ul-li.png)

We can use **CSS3 sudo classes** to specify certain elements to style them – or also to change their content: <br>

```js
document.querySelector("ul li").style.color = "blue";
document.querySelector("ul li:last-child").style.color = "red";
document.querySelector("ul li:nth-child(3)").style.color = "green";
document.querySelector("ul li:nth-child(4)").textContent = "Ai Gude, wie !?";
```

![sudo-class-styling](/images/sudo-class-styling.png)

<br>

As `querySelector` is a **single element selector** not all **sudo classes** will work properly. <br>

```js
document.querySelector("ul li:nth-child(odd)").style.background = "#ccc"; 
```

This won't change the background for **all the odd** elements .. it has affect only on the first item. <br>

![single-odd](/images/single-odd.png)

