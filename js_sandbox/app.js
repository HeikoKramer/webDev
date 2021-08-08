// FUNCTION DECLARATIONS

// function greet(firstName = "John", lastName = "Doe") {
//   return "Hello " + firstName + " " + lastName;
// }

// console.log(greet());
// //  > Hello John Doe

// FUNCTION EXPRESSION

// const square = function (x) {
//   return x * x;
// };

// console.log(square(8));
// // > 64

// IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS – IFESs

// (function () {
//   console.log("IFIE Ran..");
// })();
// // IFIE Ran..

// (function (name) {
//   console.log("Hello " + name);
// })("Brad");
// // Hello Brad

// PROPERTY METHODS

const todo = {
  add: function () {
    console.log("Add todo..");
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log("Delete todo..");
};

todo.add();
// > Add todo..
todo.edit(22);
// > Edit todo 22
todo.delete();
