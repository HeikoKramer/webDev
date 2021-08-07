let id = 100;

// NOT VALIDATED –––––––––––––
// this would work with a string "100" as well

// EQUAL TO
if (id == 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
// > CORRECT

// NOT EQUAL TO
if (id != 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
// > INCORRECT

// VALIDATED –––––––––––––––––

// EQUAL TO VALUE & TYPE
// this works only with a number 100
// a string "100"

id = "100";

if (id === 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
// > CORRECT

// NOT EQUAL TO VALUE & TYPE
if (id !== 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
// > INCORRECT
