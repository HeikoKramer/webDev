// let val;

// const today = new Date();

// val = today.toString();
// console.log(val);
// console.log(typeof val);

let birthday = new Date("October 9 1981 14:30:00");
console.log(birthday);
// > Date Fri Oct 9 1981 14:30:00 GMT+0100 (Central European Standard Time)

birthday.setMonth(2);
console.log(birthday);
// > Date Fri Mar 9 1981 14:30:00 GMT+0100 (Central European Standard Time)

birthday.setDate(15);
console.log(birthday);
// > Date Sun Mar 15 1981 14:30:00 GMT+0100 (Central European Standard Time)

birthday.setFullYear(2021);
console.log(birthday);
// > Date Mon Mar 15 2020 14:30:00 GMT+0100 (Central European Standard Time)

// Set Time
birthday.setHours(16);
birthday.setMinutes(45);
birthday.setFullYear(2021);
console.log(birthday);
// > Date Mon Mar 15 2020 14:30:00 GMT+0100 (Central European Standard Time)
