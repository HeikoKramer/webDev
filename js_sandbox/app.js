async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });

  const error = true;

  if(!error){
    const res = await promise; 
    return res;
  } else {
    await Promise.reject(new Error('Something went wrong'));
  }
}

myFunc()
  .then(res => console.log(res))
  .catch(err => console.log(err));
  // Error: Something went wrong