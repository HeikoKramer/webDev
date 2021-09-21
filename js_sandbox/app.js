let re;

// Brackets [] - Character Sets
re = /\W$/;

const str = 'What?';
reTest(re, str);
// > What? matches \W

const strB = 'Hello World';
reTest(re, strB);
// > Hello World matches \W

const strC = 'Hello';
reTest(re, strC);
// >  Hello does NOT match \W




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

