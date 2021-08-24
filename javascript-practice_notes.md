# JavaScript Practice Notes

*This document is an extension to my [JavaScript Notes 2](https://github.com/HeikoKramer/webDev/blob/main/javascript_notes_2.md) and my [DOM Notes](https://github.com/HeikoKramer/webDev/blob/main/dom_notes.md).* <br>

*Here I'm noting down the my insigths while taking Brad Traversy's [Modern JavaScript From The Beginning](https://subscription.packtpub.com/video/web-development/9781789539509/p1) course on packthub.com.* <br>

## UI Variables
It makes sense to **define UI variables** somewhere central in your code, for an easier accessibility an better readability. <br> 

```js
// Define UI Variables
const form      = document.querySelector('#task-form');
const taskList  = document.querySelector('.collection');
const clearBtn  = document.querySelector('.clear-tasks');
const filter    = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
```

## Load event listeners 
To load all event listeners at once, add them to a **function**. Call that function in your JS document. <br>

```js
// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event 
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks)
}
```

## Check for valid input
Include **input validation** in your code. For example, if you have a function to add a task – make sure that the task ain't empty: <br>

```js
function addTask(e){
  if(taskInput.value === ''){
    alert('Add a task');
  }
// [. . .]
```

## Filter for a specific value
The example below demonstrates how to **filter** a list of records (tasks) for a value from an input field. <br>
We place a **keyup** event on the input with the id of *filter*. <br>
That event fires after each keystroke, takes the value (previous and current combined) from the input and stores it *text* variable. <br>
Then it loops through all our tasks (records with the class of *collection-item*) and checks **if our entered string is part of the task**. <br>
More precise, if the entered string **has a place in the index** of the **textContent** of our task. <br>
If the string is not part of the index, it's **index position** is **-1**. <br>
That is how our filter works, we show only tasks, where the **index position** of the filter value **is not -1 (!= -1)**. <br>
**NOTE:** We de-capitalize our filter & task values with the `toLowerCase()` method. So our filter is **not case sensitive**. <br>

```html
<div class="card-action">
  <h5 id="task-title">Tasks</h5>
  <div class="input-field col s12">
    <input type="text" name="filter" id="filter">
    <label for="filter">Filter Tasks</label>
  </div>
  <ul class="collection"></ul>
  <a href="#" class="clear-tasks btn black">Clear Tasks</a>
</div>
```

```js
const filter = document.querySelector('#filter');
filter.addEventListener('keyup', filterTasks)

// Filter tasks
function filterTasks(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
```

The letter **a** appears in all our added tasks, so no task is filtered. <br>
Note the **different index** for the *Mega Task* – the first **a** is already at index **3**. <br>

![filter-demo-1](/images/filter-demo-1.gif)

The letter **m** does not appear in *Super Task* – its **index equals -1** and the task is not displayed any longer. <br>

![filter-demo-2](/images/filter-demo-2.gif)

Now we enter **u**, the combined filter value becomes **mu** – which only appears in the *Multi Task* text content. <br>
There its index position is **0** as it appears at the beginning. <br> 
The **-1** index tasks get filtered out, the *Multi Task* with index 0 is now the only one displayed in th UI. <br> 

![filter-demo-3](/images/filter-demo-3.gif)

## Load something from local storage
You need to trigger an appropriate function in order to load something – in our example tasks – from local storage. <br>
In the example we load our relevant `getTasks()` function with our `loadEventListeners()` function, when entering the page. <br>
We use the **DOMContentLoaded** event type, which fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. [Click for detailed explanation](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event).
The `getTasks()` function gets tasks from local storage (here the [documentation how they got in there](https://github.com/HeikoKramer/webDev/blob/main/dom_notes.md#add-an-array-to-storage)) and injects them into the DOM. <br>

![local-storage-dom-injection](/images/local-storage-dom-injection.png)

There is actually not much of the later task in local storage. <br>
It is basically an **array of strings** what we have available there. <br>
The whole construction of the task (**list element** with the class of *collection-item*, containing a link .. and so on) happens in our code. <br>
The only thing we really take from local storage is the task's name, which we place in form of a **text node** as a child of our list element. <br> 

```js
const taskList  = document.querySelector('.collection');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
}

// Get Tasks from LS
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // Inject the tasks from local storage into the DOM
  tasks.forEach(function(task){
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  })
}
```
