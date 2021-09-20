let re;

// Brackets [] - Character Sets
re = /Hel{2,4}o/i;

const str = 'Helllo';

reTest(re, str);
// > Hello matches Hel{2}o




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

