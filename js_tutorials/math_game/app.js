const gameArea = document.querySelector('.game');
const btn      = document.createElement('button');
const output   = document.createElement('div');
const answer   = document.createElement('input');

output.textContent = "Click the button to start the game";
output.classList.add('output');
answer.classList.add('boxAnswer');
answer.setAttribute('type', 'number');
answer.setAttribute('max', 999);
answer.setAttribute('min', 0);
btn.textContent    = "Start Game";
gameArea.append(output);
gameArea.append(btn);

const opts = ['*','/','+','-'];
const game = {maxValue:10,questions:10,oVals:[0,2,3],curQue:0,hiddenVal:3};

btn.addEventListener('click', startGame);

function startGame() {
  // btn.style.display = 'none';
  game.curQue = 0;
  buildQuestion();
}

function buildQuestion() {
  if(game.curQue < game.questions) {
    game.curQue++;
    output.innerHTML = '';
    let vals = [];
    vals[0] = Math.floor(Math.random()*(game.maxValue+1));
    vals[1] = Math.floor(Math.random()*(game.maxValue+1));
    game.oVals.sort(()=>{return 0.5 - Math.random()});
    if(game.oVals[0] === '1') {
      let temp = vals[0] * vals[1];
      vals.unshift(temp);
      console.log('temp: ' + temp);
    } else {
      
      vals[2] = eval(vals[0] + opts[game.oVals[0]] + vals[1]);
    }
    vals[3] = opts[game.oVals[0]];
    console.log(vals);
    
    // console.log(game.oVals);
    let hiddenVal;
    if(game.hiddenVal != 3) {
      hiddenVal = game.hiddenVal;
    } else {
      hiddenVal = Math.floor(Math.random()*3);
    }
    console.log('hiddenVal: ' + hiddenVal);
    answer.value = '';
    for(let i=0; i<3;i++){
      if(hiddenVal === i) {
        output.append(answer);
      } else {
        maker(vals[i], 'box');
      }
        if(i===0) {
          maker(vals[3], 'boxSign');
        }
        if(i===1) {
          maker('=', 'boxSign');
        }
    }

    vals[hiddenVal] = '––';
    // output.innerHTML = `${vals[0]} ${vals[3]} ${vals[1]} = ${vals[2]}`;
  }
  
}

function maker(v, cla) {
  const temp = document.createElement('div');
  temp.classList.add(cla);
  temp.textContent = v;
  output.append(temp);
}