
let round = 0
let computerScore = 0
let playerScore = 0

const resetButton = document.querySelector('.startButton');
resetButton.addEventListener('click', () => {
resetGame();
})

function resetGame() { // function is supposed to reset the game values and display 0-0 as scores.
  playerScore -= playerScore;
  computerScore -= computerScore;
  console.log(playerScore);
  console.log(computerScore);
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
}

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

if (playerScore < 5 && computerScore < 5) {
    if (playerAnswer === 'rock') {
        if (playerAnswer === computerSelection) {
          console.log("Tie. Try me again!"); 
}
        else if (computerSelection === 'paper') {
          console.log('Player loss. Better luck next time.');
          //compScore.textContent = computerScore + 1; 
          computerScore = computerScore + 1;
        }
        else if (computerSelection === 'scissor') {
          console.log('Player win. Damn, you got me.');
          // pScore.textContent = playerScore + 1;
          playerScore = playerScore + 1;
        } 
} //if rock

    if (playerAnswer === 'paper') {
      if (playerAnswer === computerSelection) {
        console.log('Tie. Try me again!'); 
}
      else if (computerSelection === 'scissor') {
        console.log('Player loss. Better luck next time.');
        //compScore.textContent = computerScore + 1;
        computerScore = computerScore + 1;
      }
      else if (computerSelection === 'rock') {
        console.log('Player win. Damn, you got me.');
        //pScore.textContent = playerScore + 1;
        playerScore = playerScore + 1;
      }
} //if paper

  if (playerAnswer === 'scissor') {
    if (playerAnswer === computerSelection) {
      console.log('Tie. Try me again!'); 
    }
    else if (computerSelection === 'rock') {
      console.log('Player loss. Better luck next time.'); 
      //compScore.textContent = computerScore + 1;
      computerScore = computerScore + 1;
    }
    else if (computerSelection === 'paper') {
      console.log('Player win. Damn, you got me.');
     // pScore.textContent = playerScore + 1; 
      playerScore = playerScore + 1;
    }
} //if scissor
  
} else {
  console.log("Game has not started yet, or someone has won!")
}


if (playerScore === 5) {
Winner.textContent = `PLAYER HAS WON! With ${playerScore} points!`;  
} else if (computerScore === 5) {
Winner.textContent = `PLAYER 2 HAS WON with ${computerScore} points! Better Luck Next Time...`;

} else {
Winner.textContent = "Shall the best (luckiest) player win.";

};


playerChose.textContent = `${playerAnswer}`;
compChose.textContent = `${computerSelection}`;


} //end of playRound function


const statusBox = document.querySelector('.statContainer');
const vs = document.querySelector('.vs');
const playerChose = document.querySelector('.playerChose');
const compChose = document.querySelector('.compChose');




const rockButton = document.querySelector('#button1');
const paperButton = document.querySelector('#button2');
const scissorsButton = document.querySelector('#button3');

const pScore = document.querySelector('#playerOneScore');
const cScore = document.querySelector('#playerTwoScore');
const Winner = document.querySelector('#winnerBox');
Winner.textContent = "Please Make a Choice!";



rockButton.addEventListener('click', () => {

  let computerSelection = getComputerChoice();
  let playerAnswer = "rock";
  playRound(playerAnswer, computerSelection);

pScore.textContent = playerScore;
cScore.textContent = computerScore;
})

paperButton.addEventListener('click', () => {
  let computerSelection = getComputerChoice();
  let playerAnswer = "paper";
  playRound(playerAnswer, computerSelection);

pScore.textContent = playerScore;
cScore.textContent = computerScore;
})

scissorsButton.addEventListener('click', () => {
  let computerSelection = getComputerChoice();
  let playerAnswer = "scissor";
  playRound(playerAnswer, computerSelection);

pScore.textContent = playerScore;
cScore.textContent = computerScore;
})

// if (playerScore === 5 | computerScore ===5) { //edit so gamewinner happens in the function above
//  gameWinner(playerScore, computerScore);
// } 

function gameWinner(playerScore , computerScore) {
  if (playerScore === 5 || computerScore === 5) {
    console.log("Someone won!");
  } else {
    console.log("no one won...");
  
  }
}




// git merge develop










 

 