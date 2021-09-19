let re;
re = /hello/i;

// exec() – return result in an array or null
// const result = re.exec('hello hello world');
// console.log(result);
// // > Array [ "hello" ]
// console.log(result.index);
// // > 0
// console.log(result.input);
// // > hello world

// const noResult = re.exec('hi world');
// console.log(noResult);
// // > null

// const result = re.test('Hello world');
// console.log(result);
// // > true

// const noResult = re.test('Hello world');
// console.log(noResult);
// // > false

const str = 'Yoyoyoy Hello There';
const result = str.search(re);
console.log(result);
// > 5