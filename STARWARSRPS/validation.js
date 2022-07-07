// I HOPE U WILL HIRE MediaCapabilities, BECAUSE ONLY I KNOW HOW TO BEAT SITHS IF THEY COME BACK IN THE NEAREST FUTURE!!!!


// -----------QUERYSELECTOR--------------------------
let start = document.querySelector('.btn');
let play = document.querySelector('.play');
let SWB = document.querySelector('.opening');
let won = document.querySelector('.ifwon');
let restartGame = document.querySelector('.rldpage');
let lose = document.querySelector('.iflose');
let gameStart = document.querySelector('.game-start');
let buttons = document.querySelectorAll( '.choicebtn');
let textInfo = document.querySelector('#text-info');
let openingM = document.querySelector('#openingM');
let gameStartM = document.querySelector('#game-start');
let ifLoseM = document.querySelector('#ifloseM');
let ifWonM = document.querySelector('#ifwonM');

// -----------BIGGING SETTLER-----------------------
function biggingSettler() {
  restartGame.style.display = 'none'; 
  start.addEventListener( 'click', () => {
  openingM.pause();
  gameStartM.play();
  start.style.display = 'none';
  SWB.style.display = 'none';
  textInfo.style.display = 'block';
  gameStart.style.display = 'block';
  play.style.display = 'block';
});}

biggingSettler()

// ----------------SCORE--------------------
let playerScore  = 0;
let computerScore  = 0;


// ---------------COMPUTER PLAY-------------------------

function computerPlay() {
  let randomChoice = Math.floor(Math.random() * 3) + 1; 
  return randomChoice === 1 ? "rock" :  randomChoice === 2 ? "paper" : "scissors";
}
// -----------------BUTTON DISAPPEAR-----------------------

function disableButtons() {
  buttons.forEach(elem => {
      elem.style.display = 'none'
  })
}
// ---------------------RESTART THE GAME BUTTON------------------------
function restart() {
  restartGame.style.display = 'block';
  restartGame.addEventListener('click', () => {
    window.location.reload();
  })
}
// -------------------VIDEO CHANGER--------------------------
function ifWon() {
 won.style.display = 'block';
 gameStart.style.display = 'none';
}

function ifLose() {
  lose.style.display = 'block';
  gameStart.style.display = 'none';
 }
// ------------------AUDIO EFFECTS--------------------
function scsrs() {
  var audio = document.getElementById("scsrs");
  audio.play();
}
function ppr() {
  var audio = document.getElementById("ppr");
  audio.play();
}
function rck() {
  var audio = document.getElementById("rck");
  audio.play();
}

// ------------------MAIN GAME SETTLER--------------------
function playRound(playerSelection) {
let computerSelection = computerPlay();
let result = '';
 
if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
(playerSelection === 'scissors' && computerSelection === 'paper') ||
(playerSelection === 'paper' && computerSelection === 'rock')) {
   
playerScore += 1;
result = ('You won! ' + playerSelection + ' beats ' + computerSelection
+ "<br><br>jedis score: " + playerScore + "<br>siths score: " + computerScore)
textInfo.style.display = 'none';

if (playerScore == 5) {
  result += '<br><br>You won the battle, the university is safety now!'
  disableButtons()
  restart()
  ifWon()
  gameStartM.pause();
  ifWonM.play();
}
}
else if (playerSelection == computerSelection) {
  result = ('It\'s a tie. You both chose ' + playerSelection
    + "<br><br>jedis score: " + playerScore + "<br>siths score: " + computerScore)
    textInfo.style.display = 'none';
 } else {
  computerScore  += 1;
  result = ('You Lose! ' + computerSelection + ' beats ' + playerSelection
  + "<br><br>jedis score: " + playerScore + "<br>siths score: " + computerScore)
  textInfo.style.display = 'none';

if (computerScore  == 5) {
  result += '<br><br>You lose the battle, quick restart the game!';
  disableButtons()
  restart()
  ifLose()
  gameStartM.pause();
  ifLoseM.play();
}

}

document.querySelector('.result').innerHTML = result
return
 }
// --------------SETTLING FOR BUTTONS CHOICE ------------
 buttons.forEach(button =>{
  button.addEventListener('click', function(){
    playRound(button.value)
  })
})

/* <!-- ADAMOV TIMUR <INS:justintimurlake> 2022 07 07 --> */






