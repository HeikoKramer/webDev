// // Replace Element

// //  Create element 
// const newHeading = document.createElement('h2');
// // Add id
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));


// // Get the old heading
// const oldHeading = document.getElementById('task-title');
// // Get parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);


// // Remove Element
// const lis = document.querySelectorAll('li');

// // Remove list item
// lis[0].remove();

// const list = document.querySelector('ul');

// // Remove child element
// list.removeChild(lis[3]);

// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// link.classList.remove('secondary-content', 'delete-item');

// console.log(link.className);
// console.log(link.classList);

// console.log(link.classList[0]);
// > delete-item

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

console.log(link.hasAttribute('href'));
// > true
console.log(link.hasAttribute('title'));
// > true