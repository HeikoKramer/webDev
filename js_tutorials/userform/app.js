// Iterator Example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length ?
      { value: names[nextIndex++], done: false } :
      { done: true }
    }
  }
}

//  Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];
// Init iterator and pass in the names array
const names = nameIterator(namesArr);

// 1st time, Index 0
console.log(names.next().value);
// > Jack

// 2nd time, Index 1
console.log(names.next().value);
// > Jill

// 3rd time, Index 2
console.log(names.next().value);
// > John

// 4th time, Index = names.length, else, done = true
console.log(names.next());
// > Object { done: true }