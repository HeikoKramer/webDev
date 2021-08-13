let val;

val = document.scripts[2].getAttribute("src");
console.log(val);
// > app.js

let scripts = document.scripts;
let scriptsArray = Array.from(scripts);
console.log(scriptsArray);
