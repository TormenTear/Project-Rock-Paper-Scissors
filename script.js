let playerScore = 0;
let compScore = 0;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// Computer random selection from array!

function compChoice () {
  let compRandomChoices = ['rock', 'paper', 'scissors'];
  let getChoice = Math.floor(Math.random() * compRandomChoices.length);
  return compRandomChoices[getChoice];
}

// Function that plays a round!

function playRound(playerSelection, compSelection){
  
  console.log(`You selected: "${playerSelection}".`);
  console.log(`Computer selected: "${compSelection}".`);

  // Tie 
  if(playerSelection === compSelection) {
    console.log('You tied! Both picked same symbol!');
  }

  // Rock beats scissors 
  else if (playerSelection === 'rock' && compSelection ==='scissors'){
    playerScore++;
    console.log('You won, rock smashes scissors!');
  } else if (playerSelection === 'scissors' && compSelection === 'rock'){
    compScore++;
    console.log('You lose, rock smashes scissors!');
  }

  // Paper beats rock!
  else if (playerSelection === 'paper' && compSelection === 'rock'){
    playerScore++;
    console.log('You won, paper covers rock!');
  } else if (playerSelection === 'rock' && compSelection === 'paper'){
    compScore++;
    console.log('You lose, paper covers rock!');
  }

  // Scissors beats paper!
  else if (playerSelection === 'scissors' && compSelection === 'paper'){
    playerScore++;
    console.log('You won, scissors cuts paper!');
  } else if (playerSelection === 'paper' && compSelection === 'scissors'){
    compScore++;
    console.log('You lose, scissors cuts paper!');
  }
  console.log(playerScore, compScore);
}

function game(playerChoice){
  let player = playerChoice;
  let computer = compChoice();
  playRound(player, computer);

  if (playerScore == 5){
    console.log('You won the duel!');
  } else if(compScore == 5){
    console.log('You lose the duel!');
  }
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
