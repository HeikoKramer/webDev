// // set local storage item
// localStorage.setItem('name', 'John');

// // set session storage item
// sessionStorage.setItem('name', 'Beth');

// // get from storage
// const nameLocal = localStorage.getItem('name');
// console.log('name in local storage: ' + nameLocal)

// const nameSession = sessionStorage.getItem('name');
// console.log('name in session storage: ' + nameSession)

localStorage.clear();

document.querySelector('form').addEventListener('submit', 
function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task saved');

  e.preventDefault();
});

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function(task){
//   console.log(task);
// })