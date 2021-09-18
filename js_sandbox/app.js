try {
  // Produce a ReferenceError
  myFunction();
} catch(e) {
  console.log(e.message);
  console.log(e.name);
  console.log(e instanceof ReferenceError);
}

console.log('Program continues');

