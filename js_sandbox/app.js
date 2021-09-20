let re;

// Brackets [] - Character Sets
re = /^([A-Z][0-9]){2}$/i;

const str = 'R2D2Balblablub';

reTest(re, str);
// > R2D2 matches ([A-Z][0-9]){2}




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

