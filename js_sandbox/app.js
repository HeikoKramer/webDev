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

(function (name) {
  console.log("Hello " + name);
})("Brad");
// Hello Brad
