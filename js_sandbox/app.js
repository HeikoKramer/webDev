// document.querySelector('.clear-tasks').addEventListener('click', function(){
//   console.log('Hello World');
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  
  // Coords relative to the window
  console.log('clientY: ' + e.clientY);
  console.log('clientX: ' + e.clientX);

  // Coords relative to the window
  console.log('offsetY: ' + e.offsetY);
  console.log('offsetX: ' + e.offsetX);
};