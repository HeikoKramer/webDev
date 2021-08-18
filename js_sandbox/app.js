const form = document.querySelector('form');
const taskInput = document.getElementById('task');

taskInput.value = '';

form.addEventListener('submit', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(taskInput.value);
  taskInput.value = '';
  e.preventDefault();
}