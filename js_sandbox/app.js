let re;

// Brackets [] - Character Sets
re = /Num[0-2][0-9]/;

const str = 'Num31';
const strLow = 'hej?';

reTest(re, str);
// > Hej? matches [A-Z]ej

reTest(re, strLow);
// > hej? does NOT match [A-Z]ej

const strSmall = 'nej?';
reTest(re, strSmall);
// > nej? matches [^HN]ej

const strRej = 'Rej?';
reTest(re, strRej);
// > Rej? matches [^HN]ej


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

