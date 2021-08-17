// document.querySelector('.clear-tasks').addEventListener('click', function(){
//   console.log('Hello World');
// });

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