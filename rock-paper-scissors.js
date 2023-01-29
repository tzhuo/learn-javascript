// The user and the computer will play Rock, Paper, Scissors. 

// The user can play 'bomb' to win.
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || 'paper' || 'scissors' || 'bomb') {
    return userInput;
  } else {
    console.log('Please choose rock, paper, or scissors to play.');
  };
};

// Are we supposed to put `break;` after each case?
// The computer's choice is determined randomly.
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return 'rock';
      //break;
    case 1: 
      return 'paper';
      //break;
    case 2:
      return 'scissors';
      //break;
    default:
      return 'error';
      //break;
  };
};

// This will let the user win with 'bomb' but otherwise follow the classic Rock, Paper, Scissors rules.
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'You bombed the computer and won.'
  }
  else if (userChoice === computerChoice) {
    return 'The result is a tie.'
  } 
  else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return ('The computer won.')
    } 
    else {return 'You won.'}
  } 
  else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return ('The computer won.')
    } else {return 'You won.'}
  } 
  else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return ('The computer won.')
    } else {return 'You won.'}
  } else {return 'error'}
}

//console.log(determineWinner('rock', 'scissors'))
//console.log(determineWinner('rock', 'paper'))
//console.log(determineWinner('rock', 'rock'))

// How might I ask the user to enter a value?
const playGame = () => {
  let userChoice = getUserChoice('scissors');
  console.log(`You played ${userChoice}`);
  let computerChoice = getComputerChoice();
  console.log(`The computer played ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();