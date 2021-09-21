let re;



re = /Hell\b/i;

const str = 'Hello, welcome to Hell';
reTest(re, str);
// > Hello, welcome to Hell matches Hell\b

const result = re.exec(str);
console.log(result.index);
//  18







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

