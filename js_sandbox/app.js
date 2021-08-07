// let val;

// const today = new Date();

// val = today.toString();
// console.log(val);
// console.log(typeof val);

const birthday = new Date("October 9 1981 14:30:00");
console.log(birthday);
// > Date Fri Oct 9 1981 14:30:00 GMT+0100 (Central European Standard Time)

console.log(birthday.getMonth());
// > 9
console.log(birthday.getFullYear());
// > 1981
console.log(birthday.getDate());
// > 9
console.log(birthday.getHours());
// > 14
console.log(birthday.getMinutes());
// > 30
console.log(birthday.getDay());
// > 30
