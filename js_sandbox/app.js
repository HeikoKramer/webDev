let re;


re = /^world$/i;
const str = 'WorldOfworld';

reTest(re, str);
// > World matches ^world$

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

