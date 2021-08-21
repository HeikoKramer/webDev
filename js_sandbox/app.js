// set local storage item
localStorage.setItem('name', 'John');

// set session storage item
sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
const nameLocal = localStorage.getItem('name');
console.log('name in local storage: ' + nameLocal)

const nameSession = sessionStorage.getItem('name');
console.log('name in session storage: ' + nameSession)
