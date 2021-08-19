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