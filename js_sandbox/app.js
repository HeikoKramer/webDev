let re;

// Brackets [] - Character Sets
re = /\w\D/;

const str = '77';
reTest(re, str);
// > 77 matches \d

const strB = 'Number5';
reTest(re, strB);
// > Number5 matches \d







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

