let userScore            = 0;
let computerScore        = 0;
const userScore_span     = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div     = document.querySelector(".score-board");
const result_p           = document.querySelector(".result > p");
const rock_div           = document.getElementById("r");
const paper_div          = document.getElementById("p");
const scissors_div       = document.getElementById("s");
const rockImage          = "images/rock.svg";
const paperImage         = "images/paper.svg";
const scissorsImage      = "images/scissors.svg";

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function convertToImage(letter) {
  if (letter === "r") return rockImage;
  if (letter === "p") return paperImage;
  return scissorsImage;
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
} 

function win(userChoice, computerChoice) {
  console.log("The User wins :)");
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord
  (computerChoice) + ". You win!";
  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add('green-glow');
  setTimeout(function() { userChoice_div.classList.remove('green-glow') }, 500);

  displayComputerChoice(convertToImage(computerChoice));
}

function lose(userChoice, computerChoice) {
  console.log("The Computer wins :(");
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) + " looses to " + convertToWord
  (computerChoice) + ". You loose!";
  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add('red-glow');
  setTimeout(function() { userChoice_div.classList.remove('red-glow') }, 500);
}

function draw(userChoice, computerChoice) {
  console.log("Draw – no one wins!");
  result_p.innerHTML = convertToWord(userChoice) + " equals " + convertToWord
  (computerChoice) + ". It's a draw.";
  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add('grey-glow');
  setTimeout(function() { userChoice_div.classList.remove('grey-glow') }, 500);
}

function displayComputerChoice(src) {
  let img    = document.createElement("img");
  img.src    = src;
  img.width  = 80;
  img.height = 80;
  img.alt    = "";
  img.id     = "compChoice";
  
  // This adds currently to computer label and removes image after 1sec
  // Need to adjust it that it adds to an own element beside computer label

  const computerLabel = document.getElementById("computer-label");
  computerLabel.appendChild(img); 
  setTimeout(function() { document.getElementById("compChoice").remove(img) }, 1000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("User's choice: " + userChoice);
  console.log("Computer's choice: " + computerChoice);
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  scissors_div.addEventListener('click', function() {
    game("s");
  })
}

main();
