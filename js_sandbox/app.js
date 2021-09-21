let re;

// Brackets [] - Character Sets
re = /\s/;

const str = '77';
reTest(re, str);
// > 77 does NOT match \s

const strB = 'Number5 lebt';
reTest(re, strB);
// > Number5 lebt matches \s







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

