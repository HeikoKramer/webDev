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
let lis = document.getElementsByTagName("li");

// Transform collection into array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index) {
  li.textContent = `Item Number: ${index + 1}`;
  console.log(li.textContent);
});


// console.log(lis);
// console.log(items[0]);

// lis[0].style.color = "red";
// lis[2].textContent = "Ei Gude";
// lis[4].style.background = "#ccc";