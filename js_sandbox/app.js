// document.getElementsByClassName()

const items = document.getElementsByClassName("collection-item");
// console.log(items);
console.log(items[0]);

items[0].style.color = "red";
items[2].textContent = "Ei Gude";
items[4].style.background = "#ccc";

const listItems = document.querySelector("ul").getElementsByClassName("collection-item");
console.log(listItems);
