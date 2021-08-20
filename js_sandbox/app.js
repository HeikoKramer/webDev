// EVENT BUBBLING 

document.querySelector('.card-title').addEventListener('click', 
function(){
  console.log('card title');
});

document.querySelector('.card-content').addEventListener('click', 
function(){
  console.log('card content');
});

document.querySelector('.card').addEventListener('click', 
function(){
  console.log('card');
});

document.querySelector('.col').addEventListener('click', 
function(){
  console.log('col');
});