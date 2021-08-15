let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

//  gets first list item
val = listItem;

// gets the ul
val = list;

// get child nodes
val = list.childNodes;

console.log(val[0].nodeType);
// get children
// val = list.children;

console.log(val);