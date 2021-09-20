let re;

// Brackets [] - Character Sets
re = /gr[ea]y/i;


const strGrey = 'grey?';
const strGray = 'gray?';

reTest(re, strGrey);
// > grey? matches gr[ea]y

reTest(re, strGray);
// > gray? matches gr[ea]y



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

