let re;


re = /h*llo/i;
const strA = 'H12345llo';
const strE = 'Heeeejjjkjjkkello';

reTest(re, strA);
// > H12345llo matches h*llo

reTest(re, strE);
// > H12345llo matches h*llo

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

