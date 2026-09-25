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

Create a function named 'getHumanChoice'

  Return user's choice/input

  Test output in console

  NOTE: Assumme user will always enter a valid choice

Create a variable named 'humanScore' and 'computerScore' in the global scope

Initialize 'humanScore' and 'computerScore' with the value of 0

Create a new function 'playRound'

  Define 'humanChoice' and 'computerChoice' as the function's parameters

  Make 'humanChoice' case-insensitive

  Output result of round (e.g. "You lose! Paper beats Rock") to the console

  Increment the 'humanScore' or 'computerScore' based on round winner

Create a new function 'playGame'

  Move the 'playRound' function and score variables inside the 'playGame' function

  Play 5 rounds in total by calling 'playRound' 5 times

*/

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3 + 1);

  console.log(randomNum);

  if (randomNum === 1) {
    return 'rock';
  } else if (randomNum === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

console.log(getComputerChoice());

function getHumanChoice() {
  return prompt('Rock, paper or scissors?', '');
}

console.log(getHumanChoice());
