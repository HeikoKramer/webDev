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
The `document.querySelector()` is newer and much more powerful as `document.getElementById()`. <br>
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

## DOM selectors for multiple elements
### document.getElementsByClassName()
You can get **all elements** of a specific **class** with `document.getElementsByClassName()`. <br>
The output will be a **HTML collection** of those items and you can access all their attributes via that collection. <br>

```js
const items = document.getElementsByClassName("collection-item");
console.log(items);
```

![getElementsByClassName](/images/getElementsByClassName.png)

You can treat the collection like an array and access a specific item via its index: <br>
`console.log(items[0]);` will display only the first item of the collection. <br>

![item-1](/images/item-1.png)

Like with the **single element selectors** you can query and manipulate specific elements via index. <br> 

```js
items[0].style.color = "red";
items[2].textContent = "Ei Gude";
items[4].style.background = "#ccc";
```

![index-style](/images/index-style.png)

If you had more than one **element type with the same class name** and would like to select only a **specific type**, you could use the `querySelector()` from our previous examples, to filter the type. <br> 


```js
const listItems = document.querySelector("ul").getElementsByClassName("collection-item");
console.log(listItems);
```

This will bring exactly the same result as before, a collection of 5 list items. <br>
But if we would have elements with that class outside the **ul**, they would be left out now. <br>

### document.getElementsByTagName()
`getElementsByTagName()` will does what you'd expect from it – get elements by their **tag names**. <br>
Everything else works similar like with our examples above. <br>

```js
const lis = document.getElementsByTagName("li");
console.log(lis);
```

We also get our **HTML collection of 5 lists** as a result of the above query. <br>
Everything else, like getting and manipulating specific items via **index** – exactly the same as above. <br>
<br>
**Reminder:** A **HTML collection** is not an **array**. **Array methods** like `reverse` **won't work** with collections. <br>
But you can easily **transform a collection into an array** like this: <br>

```js
let lis = document.getElementsByTagName("li");

// Transform collection into array
lis = Array.from(lis);

console.log(lis);
```

**NOTE:** The transformation won't work if you've declared the variable as **const**. <br>

![transformed-array](/images/transformed-array.png)

The former collection is now an array and you can use array methods and loops: <br>

```js
lis.reverse();

lis.forEach(function(li, index) {
  li.textContent = `Item Number: ${index + 1}`;
  console.log(li.textContent);
});
```

![demo-array](/images/demo-array.png)

We have **reversed** the output, changed the content **for each** element and displayed the content of **each item** in the console. <br> 


### document.querySelectorAll()
`querySelectorAll()` will return a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList), which is different from a collection. <br>
It allows us to do **for each loops**, without to convert it – but it can also be converted. <br>

```js
const items = document.querySelectorAll('ul.collection li.collection-item');

console.log(items);
```

Again we get our **5 list items** with the **class "collection-item** out of the **ul** with the class **collection**. <br>
If we shrink the query down to `document.querySelectorAll('ul.collection')` we get the **ul**. <br>
<br>
Now we can – without converting it to an array – loop through the NodeList and manipulate things. <br>
In the example below we change the textContent of all elements, than we do a separate styling for the odd and for the even items. <br>

```js
// document.querySelectorAll()
const items = document.querySelectorAll('ul.collection li.collection-item');

// loop through the NodeList and change the text content for each item
items.forEach(function(item, index) {
  item.textContent = `Item Number: ${index + 1}`;
});

// get odd and even index number and style them separately
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

// for each – make background purple and font white for odd numbers
liOdd.forEach(function(odd, index) {
  odd.style.background = 'purple';
  odd.style.color = 'white';
});

// foor loop – make background yellow for even numbers
for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = 'yellow';
}
```

![node-list-styling](/images/node-list-styling.png)

## Traversing the DOM
### childNodes
We can get the child elements of an element with `childNodes`. <br>
The output will be a **NodeList** and there will be a bit more to it as you'd maybe expect. <br>
If we're doing this for our **ul**, we get all the **list items** it contains, but also a lot of **text nodes**. <br>
Those **text nodes** are actually the **line breaks** within the HTML document. <br>
So if you don't write all your list items in one line `<li>item1</li><li>item2</li>` you're going to see **text nodes**. <br>


```js
const list = document.querySelector('ul.collection');
val = list.childNodes;
console.log(val);
```

![text-nodes](/images/text-nodes.png)

#### nodeType
You can get the type of your node element with `nodeType`. <br>

```js
const list = document.querySelector('ul.collection');
val = list.childNodes;

console.log(val[0].nodeType);
// > 3
```

The output is going to be a number – 3 in our example, 3 means "text node". <br>
Here a list to decode the output: <br>
* 1  – Element
* 2  – Attribute (deprecated)
* 3  – Text node
* 8  – Comment
* 9  – Document itself
* 10 – Doctype

### children
If you wan to receive only the **children**, without the **text nodes**, you can use `children`. <br>
**NOTE:** This will give you a **HTML collection**, so you need to transform it in order to loop through it. <br>

```js
const list = document.querySelector('ul.collection');
val = list.children;
```

![children](/images/children.png)

You can do all manipulations like in the examples above `list.children[2].textContent = 'Hello';` for example. <br>
You can also get children of children: <br>

```js
const list = document.querySelector('ul.collection');
val = list.children[3].children;

console.log(val);
```

This will give us a **HTML collection** with an **a tag** in it, as that's the only thing what's inside the list item. <br>

![child-of-child](/images/child-of-child.png)

### firstChild & firstElementChild
You can also get only the first child of an element, with `firstChild` or `firstElementChild`. <br>
`firstChild` will give you all the possible node elements, so in out example it will give you a text node again. <br>
Use `firstElementChild` if you want to get the first HTML element. <br>

```js
const list = document.querySelector('ul.collection');

val = list.firstChild;
console.log(val);
//  > #text

val = list.firstElementChild;
console.log(val);
// > <li class="collection-item">
```

### lastChild & lastElementChild
I won't write this down with coding examples … `lastChild` and `lastElementChil` exist and they work exactly as `firstChild` and `firstElementChilde`, just from the other direction. <br>

### childElementCount
`childElementCount` will give you the number of children of the requested element. <br>

```js
const list = document.querySelector('ul.collection');

val = list.childElementCount;
console.log(val);
//  > 5
```

### parentNode & parentElement
You can get the **parent** of something with `parentNode` or `parentElement`. <br>
In most cases both gonna return the exact same thing. <br>
<br>
In our example below, we start at the first of five list items, which sit within an **ul** – which is what we get returned. <br>

```js
const listItem = document.querySelector('li.collection-item:first-child');

// Get parent node
val = listItem.parentNode;
console.log(val);
// > <ul class="collection">

val = listItem.parentElement;
console.log(val);
// > <ul class="collection"> 
```

You can also get the parent of the parent that way, which is the div in which the ul is nested in our case. <br>

```js
val = listItem.parentElement.parentElement;
console.log(val);
```

![parent-parent](/images/parent-parent.png)

### nextSibling & nextElementSibling
To get the next item in the same hierarchy layer, use `nextSibling` or `nextElementSibling`. <br>
`nextSibling` will get you everything what's there, like the **text nodes**. <br>
`nextElementSibling` will get only the **HTML elements**. <br>

```js
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem.nextSibling;
console.log(val);
// > #text

val = listItem.nextElementSibling;
console.log(val);
// > <li class="collection-item">
```

You can get the next … and the next … and the next sibling if you like. <br>

```js
val = listItem.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
console.log(val);
```

![next-next-sibling](/images/next-next-sibling.png)

If you have reached the last element there there are **no more next elements**, `nextElementSibling` will return *null*. <br>

### previousSibling & previousElementSibling
`previousSibling` and `previousElementSibling` work exactly as the previous properties, but from the other side. <br>
Use `previousSibling` to get everything, `previousElementSibling` to get only the **HTML elements**. <br>

```js
const listItem = document.querySelector('li.collection-item:last-child');

val = listItem.previousSibling;
console.log(val);
// #text

val = listItem.previousElementSibling;
console.log(val);
// <li class="collection-item">
```

Also, if there is no previous element, you'll get a *null* value. <br>

## Creating elements
You can create elements in JavaScript and insert them into the DOM. <br>
Use … <br> 
* `document.createElement` to create the element
* `.className` to assign a class to it
* `.id` to assign it an id
* `setAttribute()` to give it specific attributes
* `appendChild()` to …
  * add a child element like a **text node** to our new element 
  * inject our new element into the DOM, by appending it as a child to an other element

In the below example we create a new **list item** step by step and **append it** to the parent **ul**. <br>

```js
// Create the element
const li = document.createElement('li');

//  Add class
li.className = 'collection-item'

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
```

![createElement](/images/createElement.png)

Our list item is missing a link and an icon like all its siblings have. <br>
We could add all that before we append it to the ul, but to keep the example shorter, I've separated those steps. <br>
So let's add it subsequently to the insertion, therefor we grab our list item (last child) and append the link: <br>

```js
// Grab the last list item 
const lastListItem = document.querySelector('li.collection-item:last-child');

// Create new link element
const link = document.createElement('a');

// Add classes
link.className = 'delete-item secondary-content';

// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link to list ite,
lastListItem.appendChild(link);
```

![comple-list-item](/images/comple-list-item.png)

Now our list item is complete. <br>

## Removing & replacing elements
### Replace something
To replace an item, you need to … <br>
* create the item you want to insert
* query the item you want to replace
* query its parent
* use `thereplaceChild()` on the parent to swap the old/new elements

Our H5 with an id of *task-title* is nested within a div with the class of *card-action*. <br> 

**HTML:**

```html
<div class="card-action">
  <h5 id="task-title" class="test" >Tasks</h5>
```

**JavaScript:**

```js
//  Create element 
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));


// Get the old heading
const oldHeading = document.getElementById('task-title');
// Get parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);
```

We have successfully replaced the "Tasks" h2 with an "Task List" h5: <br>

![replaced-header](/images/replaced-header.png)

### Remove something
Its actually pretty easy to remove an element, just select it and use the `remove()` method on it. <br>

This will remove the **1st** list item: <br>

```js
const lis = document.querySelectorAll('li');

// Remove list item
lis[0].remove();
```

You can also remove elements from a parent, with `removeChild()`: <br>

```js
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove child element
list.removeChild(lis[3]);
```

### Classes
#### get classes
You can get **classes** & **attributes** of an element. <br>
Here we get classes of the link of our first list item: <br>

```js
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

console.log(link.className);
console.log(link.classList);
```

The link has two classes. `className` will return one string containing those two classes as they're added in the HTML tag. <br>
`classList` will return a **DOMTokenList** with two separated classes. <br>

![classes](/images/classes.png)

Classes in a **DOMTokenList** can be accessed individually: <br>

```js
console.log(link.classList[0]);
// > delete-item
```

#### add classes
We cann add classes to an element, with `classList.add():` <br>

```js
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

link.classList.add('my-demo-class');

console.log(link.className);
console.log(link.classList);
```

#### remove classes
![add-class](/images/add-class.png)
`classList.remove` removes specified classes: <br>

```js
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

link.classList.remove('secondary-content', 'delete-item');

console.log(link.className);
console.log(link.classList);
```

Both classes removed .. nothing left here: <br>

![removed-classes](/images/removed-classes.png)

### Attributes
#### get attributes
We can get an elements attribute with the `getAttribute()` method. <br>

```js
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

console.log(link.getAttribute('href'));
// > #
```

We got the **href** attribute of our link, which in this case is only a **hash sign**. <br>

#### set attributes
You can set en elements attribute with the `setAttribute` method: <br>

```js
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

link.setAttribute('href', 'http://heikokraemer.de');
console.log(link.getAttribute('href'));
// > http://heikokraemer.de
```

#### check for attributes
We can check if an element has a certain attribute or not with the `hasAttribute` method. <br>

```js
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

console.log(link.hasAttribute('href'));
// > true
console.log(link.hasAttribute('title'));
// > false
```

#### remove attributes
You can also remove attributes from an element, with the `removeAttribute` method. <br>

```js
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

link.removeAttribute('href');
console.log(link.hasAttribute('href'));
// > false
```

## Event listeners and the event object
We can listen on any element within the DOM. <br>
### event listener with anonymous function
In the example below we **add an event listener** to the button with the **class of clear-tasks**. <br>
That listener will fire **on click** and execute the **anonymous function** attached to it. <br>

```js
document.querySelector('.clear-tasks').addEventListener('click', function(){
  console.log('Hello World');
});
```

![on-click](/images/on-click.gif)

### event listener with named function
You can also used a **named function**, which can be located separate from the event listener. <br>

```js
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(){
  console.log('Clicked!');
};
```

![clicked](/images/clicked.gif)

### the event object
You can give your function a parameter – **e** – in this example `function onClick(e)`, which represents the **event object**. <br>

```js
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  
  let val;
  val = e;

  console.log(val);
};
```

![event-object](/images/event-object.png)

That object carries a lot of useful information linked related to its the event. <br>
It stores for example where the event happened on the page, in **clientX** and **clientY**. <br>
Or you can see if the **ctrlKey** was pressed, when the event was initiated. <br>
The most important thing is the **target**. <br>

#### target
The **target** represents the **element** where the event happened on. <br>
You can access and manipulate the attributes of the target: <br>

```js
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  
  // Event target element
  console.log('Target: '    + e.target);
  console.log('Id: '        + e.target.id);
  console.log('className: ' + e.target.className);
  console.log('classList: ' + e.target.classList);
  console.log('innerText: ' + e.target.innerText);

  e.target.innerText = 'Hello';
  e.target.style.color = "red";
};
```

![event-target](/images/event-target.gif)

#### type
You can determine the **type** of an event, here we have two different events: <br>

```js
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  
  // Event type
  console.log('Target: ' + e.type);
};

document.querySelector('.clear-tasks').addEventListener('mouseover', onHover);

function onHover(e){
  
  // Event type
  console.log('Target: ' + e.type);
};
```

![event-type](/images/event-type.gif)

#### coordinations
You can get the coordinations related to the **window**, with `clientX` and `clientY`. <br>
Or as well the coordinations related to the **element**, with `offsetY` and `offsetY`. <br>

```js
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  
  // Coords relative to the window
  console.log('clientY: ' + e.clientY);
  console.log('clientX: ' + e.clientX);

  // Coords relative to the element
  console.log('offsetY: ' + e.offsetY);
  console.log('offsetX: ' + e.offsetX);
};
```

![event-coordinations](/images/event-coordinations.gif)

## Mouse events
### click events
There are several **click events** which fire related to an interaction with the mouse button. <br>
* `click` simple **singe click** 
* `dblclick` **two** quick repeated **clicks**  
* `mousdown` fires when the mouse button **is pressed**
* `mouseup` fires when the mouse button is **released**

```js
const clearBtn = document.querySelector('.clear-tasks');

// Click
clearBtn.addEventListener('click', runEvent);
// Doubleclick – click twice
clearBtn.addEventListener('dblclick', runEvent);
// Mousedown – click and hold
clearBtn.addEventListener('mousedown', runEvent);
// Mouseup – click and release
clearBtn.addEventListener('mouseup', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
}
```

The gif shows all of the above mentioned events fired, the button was **double-clicked**. <br>
Note the order: mousedown, mouseup -> click! After the second click -> dblick! <br>

![click-events](/images/click-events.gif)

### hover events
There are two types of hover event – **hover over** and **hover away** from an element. <br>
`mouseenter` and `mouseover` fire when you **hover over** something … <br>
`mouseleave` and `mouseout` kick in when you **hover away** from something. <br>
<br>
`mouseenter` and `mouseleave` fire only **once**, when you **enter** or **leave** the specified element. <br>
`mouseover` and `mouseout` kick when you enter or leave the specified element + when you hover **over** and **out** its child elements. <br>  

```js
const card = document.querySelector('.card');

// Mouseenter & Mouseover – when you hover over the element
card.addEventListener('mouseenter', runEvent);
card.addEventListener('mouseover', runEvent);
// Mouseleave & Mouseout – when you hover away from the element
card.addEventListener('mouseleave', runEvent);
card.addEventListener('mouseout', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
}
```

Note: `mouseenter` and `mouseleave` fire only when entering / leaving the card. <br>
`mouseleave` and `mouseout` fire as well on all the elements within the cards element. <br>

![hover-events](/images/hover-events.gif)

### mousemove
`mousemove` tracks the position of the cursor continuously. <br>
This can be used for games of other scopes, where the cursor position is of relevance. <br>
<br>
In this example, we don't output the position in the console, but manipulate our task header to display the cursor's coordinates.
Note that the event runs on the whole card, but the coordinates get displayed per child element. <br>

```js
const heading = document.querySelector('h5');
const card = document.querySelector('.card');

// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  heading.innerHTML = `MouseX: ${e.offsetX} MouseY ${e.offsetY}`;
}
```

![mousemove](/images/mousemove.gif)

## Keyboard & input events
### submit
You can interact with forms with the `submit` event. <br>
In the example below, we clear the form input (which has a default set). <br>
Then on **submit** we display the event type and the input value in the console. 
Also we clear the input fiel out again. <br>

```js
const form = document.querySelector('form');
const taskInput = document.getElementById('task');

// Clear input
taskInput.value = '';

form.addEventListener('submit', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  // Get input value
  console.log(taskInput.value);

  // Clear again
  taskInput.value = '';
  e.preventDefault();
}
```

![submit](/images/submit.gif)
