let re;


re = /gre?a?y/i;
const strGry = 'gry';

reTest(re, strGry);
// > grey matches gre?a?y


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

