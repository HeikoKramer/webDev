const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

taskInput.addEventListener('focus', runEvent);
taskInput.addEventListener('blur', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
}

