// Display on screen
alert("Ei Gude!");

// Log to console
console.log("Ei Gude wie!?"); // <-- log String
console.log(123); // <-- log Number
console.log(true); // <-- log Boolean
var greeting = "Gude!";
console.log(greeting); // <-- log Variable
console.log([1, 2, 3, 4]); // <-- log Array
console.log({ a: 1, b: 2 }); // log Objects

// Print object out as a table
console.table({ a: 1, b: 2 });

// Print out error notifications
console.error("This is an error!");

// Print out a warning
console.warn("This is a warning");

// measure the execution time between two points
console.time("Hello");
console.log("Ei Gude wie!?");
console.log("Ei Gude wie!?");
console.log("Ei Gude wie!?");
console.log("Ei Gude wie!?");
console.log("Ei Gude wie!?");
console.log("Ei Gude wie!?");
console.log("Ei Gude wie!?");
console.timeEnd("Hello");

// Clear the entire console
console.clear();
