const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

taskInput.addEventListener('keydown', runDownEvent);

function runDownEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
}

taskInput.addEventListener('keyup', runUpEvent);

function runUpEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  heading.innerText = e.target.value;
  console.log(e.target.value);
}

// 18:39:33.910 sSSSSS app.js:21:11
// 18:39:35.346 EVENT TYPE: keypress app.js:13:11
// 18:39:35.486 EVENT TYPE: keyup app.js:19:11