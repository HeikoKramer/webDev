// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// //  gets first list item
// val = listItem;

// // gets the ul
// val = list;

// // get child nodes
// val = list.childNodes;

// console.log(val[0].nodeType);


// // get children
// val = list.children;

const list = document.querySelector('ul.collection');

val = list.firstChild;
console.log(val);
//  > #text

val = list.firstElementChild;
console.log(val);
// > <li class="collection-item">

