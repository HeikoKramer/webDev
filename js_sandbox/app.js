let re;


re = /grey\?/i;
const str = 'grey?';

reTest(re, str);
// > grey? matches grey\?


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

