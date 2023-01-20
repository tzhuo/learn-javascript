// Let the user enter their username
let userName = 'Tina';

// This greets anyone, preferably by name
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// The user may ask the Magic Eight Ball a question... 
let userQuestion = '';

// Magic Eight Ball repeats the question
userQuestion ? console.log(`You asked \'${userQuestion}\', is that right?`) : console.log('Please ask a question.');

// Creating a random number between 0 (inclusive) and 8 (exclusive)
let randomNumber = Math.floor(Math.random() * 8);

// This value depends on randomNumber
let eightBall = '';


// Sends a prediction depending on randomNumber
switch (randomNumber) {
  case 0:
    eightBall = 'My sources say no';
    break;
  case 1:
    eightBall = 'Do not count on it';
    break;
  case 2:
    eightBall = 'Outlook not so good';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Reply hazy try again';
    break;
  case 5:
    eightBall = 'Signs point to yes';
    break;
  case 6:
    eightBall = 'It is certain';
    break;
  case 7:
    eightBall = 'It is decidedly so';
    break;
  default:
    eightBall = 'Go on, ask a question!';
    break;
};

// Prints response if a question was asked
userQuestion ? console.log(eightBall) : console.log();


