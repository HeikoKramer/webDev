// document.querySelector('.clear-tasks').addEventListener('click', function(){
//   console.log('Hello World');
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  
  let val;
  val = e;

 
  // Event target element
  console.log('Target: '    + e.target);
  console.log('Id: '        + e.target.id);
  console.log('className: ' + e.target.className);
  console.log('classList: ' + e.target.classList);
  console.log('innerText: ' + e.target.innerText);

  e.target.innerText = 'Hello';
  e.target.style.color = "red";
};