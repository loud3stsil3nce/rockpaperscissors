
let round = 0
let computerScore = 0
let playerScore = 0











// getComputerChoice function gets the computer's choice to use later on
 function getComputerChoice() {
    const randomNumber = (Math.floor(Math.random() * 3))
    if (randomNumber === 0) {
    return 'rock';
    } else if (randomNumber === 1) {
    return 'paper';
    } else if (randomNumber === 2) {
    return 'scissor';
    }
  } 



//playRound decides what is said when player makes choice.
function playRound(playerAnswer,computerSelection) {

    if (playerAnswer === 'rock') {
        if (playerAnswer === computerSelection) {
          console.log("Tie. Try me again!"); 
          playerScore = playerScore + 1;
          computerScore = computerScore + 1;

        }
        else if (computerSelection === 'paper') {
          console.log('Player loss. Better luck next time.');
          computerScore = computerScore + 1 
        }
        else if (computerSelection === 'scissor') {
          console.log('Player win. Damn, you got me.');
          playerScore = playerScore + 1;
        } 
      
}

    if (playerAnswer === 'paper') {
      if (playerAnswer === computerSelection) {
        console.log('Tie. Try me again!'); 
        playerScore = playerScore + 1;
        computerScore = computerScore + 1;
      }
      else if (computerSelection === 'scissor') {
        console.log('Player loss. Better luck next time.');
        computerScore = computerScore + 1 
      }
      else if (computerSelection === 'rock') {
        console.log('Player win. Damn, you got me.');
        playerScore = playerScore + 1;
      }
}

  if (playerAnswer === 'scissor') {
    if (playerAnswer === computerSelection) {
      console.log('Tie. Try me again!'); 
      playerScore = playerScore + 1;
      computerScore = computerScore + 1;
    }
    else if (computerSelection === 'rock') {
      console.log('Player loss. Better luck next time.'); 
      computerScore = computerScore + 1;
    }
    else if (computerSelection === 'paper') {
      console.log('Player win. Damn, you got me.');
      playerScore = playerScore + 1;  
    }
}
} 


// game function plays 5 rounds and declares winner.
function game() {
 //for (let i = 0; i < 5; i++) {
  let computerSelection = getComputerChoice();
  let playerAnswer = prompt('Rock, Paper, Scissors?').toLowerCase();
  playRound(playerAnswer,computerSelection);
 //}
 
  if (playerScore > computerScore) {
    prompt(`Player has won! Their score is: ${playerScore}. Computer has ${computerScore} points.`);
    
  }
  else if (playerScore < computerScore) {
    prompt(`Player has lost! Their score is: ${playerScore}. Computer has ${computerScore} points.`);
    
  }
  else {
    prompt(`Tie! You both scored ${playerScore} points.`);
    
  }
}



const rockButton = document.querySelector('#button1');
const paperButton = document.querySelector('#button2');
const scissorsButton = document.querySelector('#button3');



rockButton.addEventListener('click', () => {
  let computerSelection = getComputerChoice();
  let playerAnswer = "rock";
  playRound(playerAnswer, computerSelection);
})

paperButton.addEventListener('click', () => {
  let computerSelection = getComputerChoice();
  let playerAnswer = "paper";
  playRound(playerAnswer, computerSelection);
})

scissorsButton.addEventListener('click', () => {
  let computerSelection = getComputerChoice();
  let playerAnswer = "scissor";
  playRound(playerAnswer, computerSelection);
})






//game();

// git merge develop









  