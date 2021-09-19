let re;


re = /^h.llo$/i;
const strA = 'Hallo';
const strE = 'Hello';

reTest(re, strA);
// > Hallo matches ^h.llo$

reTest(re, strE);
// > Hello matches ^h.llo$

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

