let re;

// Brackets [] - Character Sets
re = /Hel{2,}o/i;

const str = 'Helllllllo';

reTest(re, str);
// > Helllo matches Hel{2,4}o




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

