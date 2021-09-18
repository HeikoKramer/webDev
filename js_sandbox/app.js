try {
  // Produce a ReferenceError
  myFunction();
} catch(e) {
  console.log(e);
} finally {
  console.log('Finally runs regardless of result');
}

console.log('Program continues');

