/* 
Create a function named 'getComputerChoice'

  RETURN 'rock', 'paper' or 'scissors' at random

  IF random number is between 0 and 0.33 
    RETURN 'rock'

  ELSE IF random number is between 0.33 and 0.67 
    RETURN 'paper'

  ELSE 
    RETURN 'scissors'

  Test output in the console

Create a function named 'gethumanInput'

  Return user's choice/input

  Test output in console

  NOTE: Assumme user will always enter a valid choice

Create a variable named 'humanScore' and 'computerScore' in the global scope

Initialize 'humanScore' and 'computerScore' with the value of 0

Create a new function 'playRound'

  Define 'humanInput' and 'computerChoice' as the function's parameters

  Make 'humanInput' case-insensitive
    convert 'humanInput' to lower case always before RETURNING the value

  Output result of round (e.g. "You lose! Paper beats Rock") to the console

  Increment the 'humanScore' or 'computerScore' based on round winner

Create a new function 'playGame'

  Move the 'playRound' function and score variables inside the 'playGame' function

  Play 5 rounds in total by calling 'playRound' 5 times

*/

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3 + 1);

  if (randomNum === 1) {
    return 'rock';
  } else if (randomNum === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  return prompt('Rock, paper or scissors?', '');
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(humanChoice, computerChoice) {
    const humanInput = humanChoice.toLowerCase();

    if (humanInput === computerChoice) {
      console.log('The round is a draw!');
      console.log(
        `Human score: ${humanScore}/5\nComputer score: ${computerScore}`,
      );
    } else if (humanInput === 'rock' && computerChoice === 'paper') {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanInput}`);
      console.log(
        `Human score: ${humanScore}/5\nComputer score: ${computerScore}/5`,
      );
    } else if (humanInput === 'rock' && computerChoice === 'scissors') {
      humanScore++;
      console.log(`You win! ${humanInput} beats ${computerChoice}`);
      console.log(
        `Human score: ${humanScore}/5\nComputer score: ${computerScore}/5`,
      );
    } else if (humanInput === 'paper' && computerChoice === 'rock') {
      humanScore += 1;
      console.log(`You win! ${humanInput} beats ${computerChoice}`);
      console.log(
        `Human score: ${humanScore}/5\nComputer score: ${computerScore}/5`,
      );
    } else if (humanInput === 'paper' && computerChoice === 'scissors') {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanInput}`);
      console.log(
        `Human score: ${humanScore}/5\nComputer score: ${computerScore}/5`,
      );
    } else if (humanInput === 'scissors' && computerChoice === 'paper') {
      humanScore++;
      console.log(`You win! ${humanInput} beats ${computerChoice}`);
      console.log(
        `Human score: ${humanScore}/5\nComputer score: ${computerScore}/5`,
      );
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanInput}`);
      console.log(
        `Human score: ${humanScore}/5\nComputer score: ${computerScore}/5`,
      );
    }
  }

  // const humanSelection = getHumanChoice();
  // const computerSelection = getComputerChoice();

  for (let i = 0; i <= 5; i++) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    if (i === 5) {
      if (humanScore > computerScore) {
        console.log('Woopt-dee-doop-dee-woo, you won the game!');
      } else if (humanScore < computerScore) {
        console.log('Woopt-dee-doop-dee-woo, you lost the game!');
      } else {
        console.log('The game is drawn!');
      }
    }
  }
}

console.log(playGame());
