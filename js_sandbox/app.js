// document.getElementsByClassName()

// const items = document.getElementsByClassName("collection-item");
// // console.log(items);
// console.log(items[0]);

// items[0].style.color = "red";
// items[2].textContent = "Ei Gude";
// items[4].style.background = "#ccc";

// const listItems = document.querySelector("ul").getElementsByClassName("collection-item");
// console.log(listItems);

// document.getElementsByTagName()
// let lis = document.getElementsByTagName("li");

// // Transform collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index) {
//   li.textContent = `Item Number: ${index + 1}`;
//   console.log(li.textContent);
// });


// console.log(lis);
// console.log(items[0]);

// lis[0].style.color = "red";
// lis[2].textContent = "Ei Gude";
// lis[4].style.background = "#ccc";

// document.querySelectorAll()
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index) {
  item.textContent = `Item Number: ${index + 1}`;
});

// get odd and even index number and style them separately
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

// for each – make background purple and font white for odd numbers
liOdd.forEach(function(odd, index) {
  odd.style.background = 'purple';
  odd.style.color = 'white';
});

// foor loop – make background yellow for even numbers
for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = 'yellow';
}