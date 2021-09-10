async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });

  // Wait until promise is resolved
  const res = await promise; 
  return res;
}

myFunc()
  .then(res => console.log(res));
  //  > Hello