let re;


re = /world$/i;
const str = 'Hello World';

reTest(re, str);
// > Hellooooooooo World matches ^hello

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

