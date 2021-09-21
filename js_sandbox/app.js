let re;

// Brackets [] - Character Sets
re = /H[ae]+llo/;

const str = 'Hallo';
reTest(re, str);
// > Hallo matches H[ae]+llo

const strB = 'Hello';
reTest(re, strB);
// > Hello matches H[ae]+llo

const strC = 'Hullo';
reTest(re, strC);
// > Hullo does NOT match H[ae]+llo

const strD = 'Heeeeello';
reTest(re, strD);
// > Heeeeello matches H[ae]+llo


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

