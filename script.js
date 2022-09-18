let playerScore = 0;
let compScore = 0;

function getComputerChoice(){
  let random = Math.random();
  if (random <= 0.33){
    return "rock";
  }
  else if(random > 0.33 && random <= 0.66){
    return "scissors";
  }
  else {
    return "paper";
  }
}


function playRound(playerSelection, compSelection){
  if (playerSelection === "rock" && compSelection === "rock"){
    return "You tied! Rock is equal rock!";
  }
  else if (playerSelection === "paper" && compSelection === "paper"){
    return "You tied! Paper is equal paper!";
  }
  else if (playerSelection === "scissors" && compSelection === "scissors"){
    return "You tied! Scissors is equal scissors!";
  }
  else if (playerSelection === "rock" && compSelection === "scissors"){
    playerScore++;
    return "You won! Rock smashes scissors!";
  }
  
  else if (playerSelection === "rock" && compSelection === "paper"){
    compScore++;
    return "You lost! Paper covers rock!";
  }
  else if (playerSelection === "paper" && compSelection === "scissors"){
    compScore++;
    return "You lost! Scissors cuts paper";
  }
  else if (playerSelection === "paper" && compSelection === "rock"){
    playerScore++;
    return "You won! Paper covers rock!";
  }
  else if (playerSelection === "scissors" && compSelection === "paper"){
    playerScore++;
    return "You won! Scissors cuts paper!";
  }
  else (playerSelection === "scissors" && compSelection === "rock")
    compScore++;
    return "You lost! Rock smashes scissors!";
  
}

function game(){
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose a weapon: ", "rock, paper, scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();

function checkWinner(){
  if(playerScore < compScore){
  return "You lost! Computer smashed you! Practice more!";
  }
  else if(playerScore > compScore){
  return "Good game! You Won!";
  }
  else {
    return "You tied!";
}
}

console.log(checkWinner());


//let playerSelection = prompt("Choose a weapon: ", "rock, paper, scissors").toLowerCase();

/*const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection)); */ 
