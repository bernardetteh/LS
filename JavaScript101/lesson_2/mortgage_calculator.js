//let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1+ monthlyInterestRate), (-loanDurationInMonths))));
//you want to able to calculate the monthly payments based upon other variables in the equation.
//what information do you need?
//how are you going to get the user to do that?

/* PEDAC
Problem: 
  Goal: is to find the monthly payments that need to be made
  Input: loanAmount, monthlyInterestRate, and loanDurationInMonths

Examples:

Data Structures:
  How we structure the data: using numbers and currency

Algorithms:
  A logical sequence of steps for accomplishing tasks:
  -Ask user for loan amount, monthly interest rate and loan duration in months using readlineSyunc 
  -convert strings to numbers; 
  -use a function to determine monthly payments with user inputs
  -display results on the terminal
  */
  
 const readline = require (`readline-sync`);

 function prompt(message) {
   console.log(`=> ${message}`);
 }

 function isInvalidNumber(number) {
  return number.trim() === '' || Number.isNaN(Number(number));
}

 prompt('Welcome to The Mortgage Calculator!');

 prompt('What is the loan amount?');
 let loanAmount = (readline.question());

 while (isInvalidNumber(loanAmount)) {
  prompt ('Must enter a valid number');
  loanAmount = readline.question();
 }
 
 prompt('What is the monthly interest rate?');
 let monthlyInterestRate = readline.question();

 while (isInvalidNumber(monthlyInterestRate)) {
  prompt('Must enter a valid number');
  monthlyInterestRate = readline.question();
} /* why did they use while instead of an if statement? a while statement is a loop 
Meaning an if statement gives you once the possibility to do something or not (or something else). 
Whereas a while loop does things as long as the condition is true. */

 prompt("What is the loan duration in months?");
  let loanDurationInMonths = readline.question();

  while (isInvalidNumber(loanDurationInMonths)) {
    prompt('Must enter a valid number');
    loanDurationInMonths = readline.question();
  }

 let monthlyPayment = Number(loanAmount * (monthlyInterestRate /
  (1 - Math.pow((1 + monthlyInterestRate), (- Number(loanDurationInMonths))))));

 console.log(`Your monthly payment for your mortgage is $${monthlyPayment}`);

