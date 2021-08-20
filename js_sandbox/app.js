const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input
taskInput.value = '';

taskInput.addEventListener('cut', runEvent);
taskInput.addEventListener('copy', runEvent);
taskInput.addEventListener('paste', runEvent);
taskInput.addEventListener('select', runEvent);

// taskInput.addEventListener('input', runEvent);
// taskInput.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
}

