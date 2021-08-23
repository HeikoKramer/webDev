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
