const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors']; // using uppercase for VALID CHOICES

function prompt(message) {
  console.log (` => ${message}`);
}

// prompt('Choose one: rock, paper, scissors');
prompt('Choose one: rock, paper, scissors');
let choice = readline.question(); //how does this link to the one above? 
while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();
  
while (!VALID_CHOICES.includes(choice)) {
  prompt("That's not a valid choice");
  choice = readline.question();
 }

 let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
 let computerChoice = VALID_CHOICES[randomIndex];

 prompt(`You chose ${choice}, computer chose ${computerChoice}`);

 if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')) {
  prompt('You win');
 } else if ((choice === 'scissors' && computerChoice === 'rock') ||
           (choice === 'paper' && computerChoice === 'scissors') ||
           (choice === 'rock' && computerChoice === 'paper')) {
  prompt('Computer wins!');
 } else {
  prompt ("It's a tie");
 }

prompt('Do you want to play again (y/n)?');
let answer = readline.question().toLowerCase();
while (answer[0] !== 'n' && answer[0] !== 'y') {
  prompt("Please enter 'y' or 'n'.");
  answer = readline.question().toLowerCase();
 }
  if (answer[0] !== 'y') break;
}