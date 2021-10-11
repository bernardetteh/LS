/* 
// Question 1: Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5; // --> no it will not raise an error. it will treat [4] and [5] as empty slots.

let numbers = [1, 2, 3]; 
numbers[6] = 5;
numbers[4];  // what will this line return? --> undefined, but the slot is empty, even if it returns undefined.

// Question 2: How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
// b --> because it'll be inside of quotations "!".
// ls --> by using the method string.prototype.endsWith(); example:
str1.endsWith("!"); // true
str2.endsWith("!"); // false

// Question 3: Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

ages.hasOwnProperty('Spot');


// Question 4: Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

// my answer: 
// first convert --> munstersDescription.charAt(0).toUpperCase();
// then add remainder --> munstersDescription.slice(1);
function capitalizeFirstLetter(munstersDescription) {
  return munstersDescription.charAt(0).toUpperCase() + munstersDescription.slice(1);
}
console.log(capitalizeFirstLetter(munstersDescription));

// the answer from LS:
munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

 
// Question 5: What will the following code output?

console.log(false == '0'); // true
console.log(false === '0'); // false

// Question 6 We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
Add entries for Marilyn and Spot to the object:

// Add entries for Marilyn and Spot to the object: (hint use object.Assign)
let additionalAges = { Marilyn: 22, Spot: 237 };

// my answer:
let returnedAges = Object.assign(additionalAges, ages);

// Question 7: Determine whether the name Dino appears in the strings below -- check each string separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// my answer:

str1.includes('Dino');
str2.includes('Dino');

// Question 8: How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// my answer: using the push method.
flintstones.push('Dino');

// Question 9: In the previous problem, our first answer added 'Dino' to the array like this:
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
// How can we add multiple items to our array? ('Dino' and 'Hoppy')
//my answer:
flintstones.push('Dino', 'Hoppy');

// Question 10 Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

//my answer:
advice.slice(0, 39);
*/