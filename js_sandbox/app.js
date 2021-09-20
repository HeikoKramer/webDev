let re;

// Brackets [] - Character Sets
re = /Hel{2}o/i;

const str = 'Hello';

reTest(re, str);
// > Hej? matches [A-Z]ej




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

