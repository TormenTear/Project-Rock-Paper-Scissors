let playerScore = 0;
let compScore = 0;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result');
const score = document.getElementById('score');
const reload = document.getElementById('reload');

// Computer random selection from array!

function compChoice () {
  let compRandomChoices = ['rock', 'paper', 'scissors'];
  let getChoice = Math.floor(Math.random() * compRandomChoices.length);
  return compRandomChoices[getChoice];
}

// Function that plays a round!
function playRound(playerSelection, compSelection){
  
  // Tie 
  if(playerSelection === compSelection) {
    result.innerHTML = 'You tied! Both picked same symbol!';
    result.style.color = 'white';
  }

  // Rock beats scissors 
  else if (playerSelection === 'rock' && compSelection ==='scissors'){
    playerScore++;
    result.innerHTML = 'You won, rock smashes scissors!';
    result.style.color = 'green';
  } else if (playerSelection === 'scissors' && compSelection === 'rock'){
    compScore++;
    result.innerHTML = 'You lose, rock smashes scissors!';
    result.style.color = 'red';
  }

  // Paper beats rock!
  else if (playerSelection === 'paper' && compSelection === 'rock'){
    playerScore++;
    result.innerHTML = 'You won, paper covers rock!';
    result.style.color = 'green';
  } else if (playerSelection === 'rock' && compSelection === 'paper'){
    compScore++;
    result.innerHTML = 'You lose, paper covers rock!';
    result.style.color = 'red';
  }

  // Scissors beats paper!
  else if (playerSelection === 'scissors' && compSelection === 'paper'){
    playerScore++;
    result.innerHTML = 'You won, scissors cuts paper!';
    result.style.color = 'green';
  } else if (playerSelection === 'paper' && compSelection === 'scissors'){
    compScore++;
    result.innerHTML = 'You lose, scissors cuts paper!';
    result.style.color = 'red';
  }
    score.innerHTML = `PLAYER:&nbsp; ${playerScore}<span>VS</span>${compScore}&nbsp; :COMPUTER`;

  if(playerScore == 5){
    result.innerHTML = 'Congratulations, you won the duel!';
    result.style.color = 'green';
    reload.innerHTML = 'Reload the page to play again!';
    reload.style.color = 'blue';
  } else if(compScore == 5){
    result.innerHTML = 'Ooof, you lost the duel, try again!';
    result.style.color = 'red';
    reload.innerHTML = 'Reload the page to play again!';
    reload.style.color = 'blue';
  }
}


function game(playerChoice){
  let player = playerChoice;
  let computer = compChoice();
  playRound(player, computer);
}

// On click events!
  rock.addEventListener('click', () => { 
    game('rock');
  });
  paper.addEventListener('click', () => {
    game('paper');
  });
  scissors.addEventListener('click', () => {
    game('scissors');
  });