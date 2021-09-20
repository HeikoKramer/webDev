let re;

// Brackets [] - Character Sets
re = /[^HN]ej/;

const strHej = 'Hej?';
const strNej = 'Nej?';

reTest(re, strHej);
// > Hej? does NOT match [^HN]ej

reTest(re, strNej);
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

