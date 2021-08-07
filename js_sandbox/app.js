// let id = 100;

// // NOT VALIDATED –––––––––––––
// // this would work with a string "100" as well

// // EQUAL TO
// if (id == 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }
// // > CORRECT

// // NOT EQUAL TO
// if (id != 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }
// // > INCORRECT

// // VALIDATED –––––––––––––––––

// // EQUAL TO VALUE & TYPE
// // this works only with a number 100
// // a string "100" would reverse the results from this example

// if (id === 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }
// // > CORRECT

// // NOT EQUAL TO VALUE & TYPE
// if (id !== 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }
// // > INCORRECT

// if (typeof id !== "undefined") {
//   console.log(`The Id is ${id}`);
// } else {
//   console.log("No Id");
// }

// let id = 100;

const color = "orange";

if (color === "red") {
  console.log("Color is red");
} else if (color === "blue") {
  console.log("Color is blue");
} else if (color === "orange") {
  console.log("Color is orange");
} else {
  console.log("Color unknown, or no color");
}
