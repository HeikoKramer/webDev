let re;

// Brackets [] - Character Sets
re = /^\w/;

const str = '?What';
reTest(re, str);
// > ?What does NOT match ^\w

const strB = 'What?';
reTest(re, strB);
// > ?What does NOT match ^\w



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

