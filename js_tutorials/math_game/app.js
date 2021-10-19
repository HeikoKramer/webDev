const gameArea = document.querySelector('.game');
const btn      = document.createElement('button');
const btn1      = document.createElement('button');
const output   = document.createElement('div');
const answer   = document.createElement('input');
const message  = document.createElement('div');

output.textContent = "Click the button to start the game";
output.classList.add('output');
answer.classList.add('boxAnswer');
answer.setAttribute('type', 'number');
answer.setAttribute('max', 999);
answer.setAttribute('min', 0);
btn.textContent    = "Start Game";
btn1.textContent   = "Next Question";
gameArea.append(message);
gameArea.append(output);
gameArea.append(btn);
gameArea.append(btn1);
btn1.style.display = 'none';

const opts = ['*','/','+','-'];
const game = {correct:'',maxValue:10,questions:10,oVals:[0,1,2,3],curQue:0,hiddenVal:3,inplay:false};
const player = {correct:0,incorrect:0};

btn.addEventListener('click', btnCheck);
btn1.addEventListener('click', buildQuestion);

answer.addEventListener('keyup', (e) => {
  console.log(e.code);
  console.log(answer.value.length);
  if(answer.value.length > 0) {
    btn.style.display = 'block';
    btn.textContent = 'check';
    game.inplay = true;
  };
  if(answer.value.length <= 0 && btn.style.display == 'block') {
    btn.style.display = 'none';
  };
  if(e.code == 'Enter' && answer.value.length > 0) {
    game.inplay = true;
    btnCheck();
  }
});

function btnCheck() {
  btn.style.display = 'none';
  if(game.inplay) {
    if(answer.value == game.correct) {
      message.innerHTML = 'CORRECT ●‿●<br>Answer is ' + game.correct;
      player.correct++;
    } else {
      message.innerHTML = 'FALSE ⋋_⋌<br>Answer is ' + game.correct;
      player.incorrect++;
    }
    answer.disabled = true;
    nextQuestion();
  } else {
    btn.style.display = 'none';
    game.curQue = 0;
    buildQuestion();
  }
}

function nextQuestion() {
  btn1.style.display = 'block';
}

function scoreBoard() {
  message.innerHTML = `${game.curQue} of ${game.questions} <br>`;
  message.innerHTML += `Correct: ${player.correct}, Incorrect: ${player.incorrect}`;
}

function buildQuestion() {
  btn1.style.display = 'none';
  console.log(game.curQue + ' of ' + game.questions);
  if(game.curQue < game.questions) {
    game.curQue++;
    output.innerHTML = '';
    let vals = [];
    vals[0] = Math.ceil(Math.random()*(game.maxValue));
    let tempMax = game.maxValue+1;
    game.oVals.sort(()=>{return 0.5 - Math.random()});
    if(game.oVals[0] == 3) { // this prevents negative valus when substracting
      tempMax = vals[0];
      console.log("Substraction!");
    }
    vals[1] = Math.floor(Math.random()*tempMax);
    
    if(game.oVals[0] == 0) {
      if(vals[1] == 0) { vals[1] = 1;}
      if(vals[0] == 0) { vals[0] = 1;}
    }
    if(game.oVals[0] == 1) {
      if(vals[0] == 0) { vals[0] = 1;}
      let temp = vals[0] * vals[1];
      vals.unshift(temp);
    } else {
      
      vals[2] = eval(vals[0] + opts[game.oVals[0]] + vals[1]);
    }
    vals[3] = opts[game.oVals[0]];
    
    let hiddenVal;
    if(game.hiddenVal != 3) {
      hiddenVal = game.hiddenVal;
    } else {
      hiddenVal = Math.floor(Math.random()*3);
    }
    answer.value = '';
    answer.disabled = false;
    for(let i=0; i<3;i++){
      if(hiddenVal == i) {
        game.correct = vals[i];
        output.append(answer);
      } else {
        maker(vals[i], 'box');
      }
        if(i==0) {
          let tempSign = vals[3] == '*' ? '&times;' : vals[3];
          maker(tempSign, 'boxSign');
        }
        if(i==1) {
          maker('=', 'boxSign');
        }
    }
    answer.focus();
    // vals[hiddenVal] = '––';
    // output.innerHTML = `${vals[0]} ${vals[3]} ${vals[1]} = ${vals[2]}`;
  }
  scoreBoard();
}

function maker(v, cla) {
  const temp = document.createElement('div');
  temp.classList.add(cla);
  temp.innerHTML = v;
  output.append(temp);
}