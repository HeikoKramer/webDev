// Replace Element

//  Create element 
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));


// Get the old heading
const oldHeading = document.getElementById('task-title');
// Get parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);


// Remove Element
const lis = document.querySelectorAll('li');

// Remove list item
lis[0].remove();

const list = document.querySelector('ul');

// Remove child element
list.removeChild(lis[3]);