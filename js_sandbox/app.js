// // FOR

// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log("2 is my favorite number");
//     continue;
//   }

//   if (i === 5) {
//     console.log("Stop the loop");
//     break;
//   }

//   console.log("Number " + i);
// }

//  WHILE LOOP

// let i = 0;

// while (i < 10) {
//   console.log("Number " + i);
//   i++;
// }

// let i = 100;

// do {
//   console.log("Number " + i);
//   i++;
// } while (i < 10);

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

const cars = ["Ford", "Opel", "Honda", "Toyota"];

cars.forEach(function (car) {
  console.log(car);
});
