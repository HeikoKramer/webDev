let re;


re = /^hello/i;
const str = 'Hellooooooooo World';

reTest(re, str);
// > Hello World does NOT match ^world

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

