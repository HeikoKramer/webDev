let re;

// Brackets [] - Character Sets
re = /[A-Z]ej/;

const strCap = 'Hej?';
const strLow = 'hej?';

reTest(re, strCap);
// > Hej? matches [A-Z]ej

reTest(re, strLow);
// > Nej? does NOT match [^HN]ej

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

