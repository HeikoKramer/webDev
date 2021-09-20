let re;

// Brackets [] - Character Sets
re = /[HN]ej/;

const strHej = 'Hej?';
const strNej = 'Nej?';

reTest(re, strHej);
// > Hej? matches [HN]ej

reTest(re, strNej);
// > Nej? matches [HN]ej

const strSmall = 'nej?';
reTest(re, strSmall);
// > Nej? matches [HN]ej

const strRej = 'Rej?';
reTest(re, strRej);
// > Nej? matches [HN]ej


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

