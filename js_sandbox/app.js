let re;



re = /Hell(?=o)/;

const str = 'Hello, welcome to Hell';
reTest(re, str);
// > Hello, welcome to Hell matches Hell(?=o)

const result = re.exec(str);
console.log(result.index);
// > 0

const strB = 'Hell yeah!';
reTest(re, strB);
// > Hello, welcome to Hell matches Hell(?=o)






// Log Results
// const result = re.exec(str);
// console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

