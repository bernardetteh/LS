/*

Question 1
Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

//my answer:

Run numbers.pop() continously until they are all removed;
numbers.slice[0,1,2,3];
numbers.length = 0;

// LS answer:

numbers.length = 0;
numbers.splice(0, numbers.length);
while (numbers.length) {
  numbers.pop();
} // of course it didn't occur to me to create a loop for what I said above ^

--------- 

Question 2
What will the following code output?

console.log([1, 2, 3] + [4, 5]);

// my answer:

[1,2,3][4,5];

// LS answer:

1,2,34,5

In some languages you can use + to concatenate two arrays, but not in JavaScript. 
In JavaScript, the + operator first converts the arrays to strings, and then concatenates the strings, 
so the output is the string 1,2,34,5.

--------- 

Question 4
What will the following code output?


let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice(); // here it slices the object {first: 'value1'} since slice() without arguments acts as slice(0)
arr2[0].first = 42;
console.log(arr1); 

// my answer:

i'm guessing this is what it will log: [42, {second: "value2"}. 3, 4, 5];

// LS answer:

[ { first: 42 }, { second: "value2" }, 3, 4, 5 ]

Internally, arr1 looks something like this after line 1 runs:

Copy Code
+---------+             +---------------------+
| pointer | ----------> | { first: "value1" } |
+---------+             +---------------------+
| pointer | -----+
+---------+      |
|    3    |      |      +----------------------+
+---------+      +----> | { second: "value2" } |
|    4    |             +----------------------+
+---------+
|    5    |
+---------+
Notice that the first two elements of the array are pointers to objects that appear somewhere in the computer's memory. 
The values of those objects are not stored in the array. (Since arrays are objects, this applies to elements with array values too.) 
However, the primitive values are stored directly in the array.

There are two kinds of copy operations when working with objects and arrays: a deep copy and a shallow copy.

A deep copy makes a duplicate of every item in an existing array or object. 
In particular, it creates completely new instances of any subarrays of subobjects in the source object. 
If we performed a deep copy on arr1, we would have two different arrays as well as four separate objects.

A shallow copy only makes a duplicate of the outermost values in an array or object. 
If we perform a shallow copy on arr1, we end up with two different arrays, but we still only have one occurrence each of { first: 42 } and { second: 'value2' }. 
In this case, both arr1[0] and arr2[0] point to the same object in memory. 
Likewise, arr1[1] and arr2[1] point to the { second: 'value2' } object.

// my notes: slice() does not mutate the array, it just creates a shallow copy. 

--------- 

Question 5
The following function unnecessarily uses two return statements to return boolean values. 
Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?


function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}


// my answer:

a while loop:

function isColorValid(color) {
  while color === "blue" || color === "green" {
    return color;
  }
}

// LS answer: 

function isColorValid(color) {
  return color === "blue" || color === "green";
}






*/