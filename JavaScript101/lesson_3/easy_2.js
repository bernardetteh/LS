
/*
// Question 1: Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
let advice = "Few things in life are as important as house training your pet dinosaur.";
// my answer: using the string replace method
// replace in one instance only:
advice.replace("important", "urgent");
// replace globally in every instance: 
advice.replace(/important/g, "urgent");

---------

// Question 2: The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, 
including descending. Both of these methods mutate the original array as shown below. 
Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.  */

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
// here you would use the slice method. Example: numbers.slice(4, 0); starting at index[4] which would be 5 and finishing at index[0] which would be 1.

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// answer 1:

let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse(); // why would you use slice here? there is no start indicated and reverse is mutating
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

// answer 2:

let numbers = [1, 2, 3, 4, 5];
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1); // what does this num1, num2 mean?
console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]


---------

// Question 3 Given a number and an array, determine whether the number is included in the array:

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

// answer: by using the array.prototype.includes() method, example:

console.log(numbers.includes(8));

---------

// Question 4 Starting with the string:

let famousWords = "seven years ago...";

show two different ways to put the expected "Four score and " in front of it.

// my answer:

let additionalFamousWords = 'Four scour and ';

let completeFamousWords = additionalFamousWords.concat(famousWords);

// answer 1 from LS:

"Four score and " + famousWords;

// answer 2 from LS:

"Four score and ".concat(famousWords); // how do you .concat to a string and not a variable?

---------

/* Question 5 Given an array of numbers [1, 2, 3, 4, 5], mutate the array by 
removing the number at index 2, so that the array becomes [1, 2, 4, 5]. */

//my answer:

numbers.splice(2);

// answer from LS:

let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1); // I don't understand what the 1 is doing here? 
console.log(numbers); // [1, 2, 4, 5]

---------

// Question 6 Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Create a new array that contains all of the above values, but in an un-nested format:
[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

// answer from LS: 

flintstones = [].concat(...flintstones); // here they used concat and spread. Why the brackets? []?

---------

// Question 7 Consider the following object:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Create an array from this object that contains only two elements: Barney's name and Barney's number:

[ 'Barney', 2 ]

// my answer: using the Object.keys method

let flinstones = Object.keys(Barney);

// LS says to look at Object.entries method

// LS answer:

Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();
//wtf


Conversion object --> array 
// Object entries
//  Object keys
// Object values

// entriers ---> [[key, value], [key,value]]

Method chaining

[Object.entries(flintstones)].filter(pair => pair[0] === "Barney")

[[fred,0], [wilma, 1].....].filter(pair => pair[0] === "Barney")

filter(arrow function)


pair => pair[0] === "Barney"

pair ----> parameter 

NO OPEN AND CLOSE BRACKETS ON A SINGLE LINE EXPRESSION 

=> arrow bit NEXT BIT IS THE FUNCTION BODY

pair[0] === "Barney" - Single line expression 

return pair[0] === "Barney" 



function (pair) {
  return pair[0] === "Barney"
}

/*
Array 
iterating over an array elements 
filter ---> selection of an array ALSO CREATES A NEW ARRAY

arr.filter(callback(ARR_ELEMENT))

Callback --> returns truthy --> ADD CURRENT ITERATING ARRAY ELEMENT to new array 

CALLBACK --> RETURN FALSY value --> DO NOT ADD THE CURRENT ITERATING ARRAY ELEMENT to the new array

If the callback return is truthy ---> FILTER AHH ARRAY ELEMENTS ADD TO THE NEW ARRAY 



Falsy values
false
NaN
0
undefined
null 
''

---------

// Question 8 How would you check whether the objects assigned to variables numbers and table below are arrays?

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// my answer: by using Array.isArray() method
Array.isArray(numbers);
Array.isArray(table);

---------

/* Question 9 Back in the stone age (before CSS), we used spaces to align things on the screen. 
If we have a 40-character wide table of Flintstone family members, 
how can we center the following title above the table with spaces? */

let title = "Flintstone Family Members";

//my answer:

let title = 'Flinstone Family Members'.padStart(40,"");


//LS answer: 

let padding = Math.floor((40 - title.length) / 2); // no freaking clue what's going on here??
title.padStart(padding + title.length);

/*LS explaantion:

To center some text, we need to pad it on the left with some spaces. 
The hard part here is determining how many spaces you need. 
You can determine the correct value by subtracting the length of the string from the desired width, 
then dividing that result by 2. That gives you the number of spaces you need on the left, 
and an equivalent number of spaces on the right, after allowance for rounding. 
Once we know how many spaces we need on the left, 
we can use padStart to pad the original string to a length that includes those additional spaces.



// Question 10 Write two one-line expressions to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

//my answer: 

console.log(statement1.length) 
statement1.includes('t')statement1.toLowerCase();

//LS answer:

statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;

/*
 function char()) {
 return char === 't'.length;
}
 

/* Example for me:

const name = 'samantha';

name.split('');
// [ 's', 'a', 'm', 'a', 'n', 't', 'h', 'a' ]

*/



