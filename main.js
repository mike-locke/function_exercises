// //below are some exercises for things you've learned so far

// // 1. write a function that takes in two parameters (that are integers) and returns the larger integer

// //  example: function largerInteger(5,6) -> would return 6

function largerInteger(x,y) {
  if (x > y) {
    console.log(x + " is larger than " + y);
  } else {
    console.log(x + " is less than " + y);
  }
  return;
}
// // 2. write a function that takes in one argument (an array) and finds the smallest number

// // example: function smallestNum([3,2,6,2,0,7]) -> would return 0

const arr = [12,4,53,43,9,25,96];
const smallest = Math.min(...arr);
console.log(smallest)

// // 3. write a function that starts at 0 and loops through 15. if the current number is odd console.log -> odd if the current number is even log -> even

// //example: function isOddOrEven() -> loops 0-15 logging odd/even

const IsOddOrEven = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  for (let i = 0; i < 15; i++) {
    if (i % 2 === 0) {
      console.log([i] + " is even");
    } else {
      console.log([i] + " is odd");
    }
  }

// // 4. given an array, write a function that adds all the numbers together

// //example: function add([1,2,3,4,5]) -> returns 15

const array = [1,2,3,4,5];
const sum = array.reduce(function(a,b) {
  return a + b;
}),0);
console.log(sum);

// // 5. write a function that removes a specific element from an array

// // example: function removeItem([3,4,5],5) -> returns [3,4]

// function removeItem =[3,4,5]
 
const removeItem = [2, 5, 8, 99, 11];
const index = removeItem.indexOf(99);
if (index > - 1) {
  array.splice(index, 1);
}
console.log(array);

// console.log(removeItem);

// // 6. write a function that removes all false values from an array (youll need to find out what all the false values in javascript are)

// // example: function removeFalsey(['dog', 'cat', 0, false,]) -> returns ['dog','cat']

let removeFalsey = [0, 1, NaN, undefined, "string", '', false];
let filtered = removeFalsey.filter(Boolean);
console.log(filtered);

// // 7. write a javascript function to sort items in an array

// // example: function sortArr([4,5,6,1,0,9,3]) -> [0,1,3,4,5,6,9]

const sortArray = [20,53,6,9,43,53,25];
const sorted = sortArray.sort((a, b) => a-b);

// 8. write a function that checks if the string passed as a parameter is a palindrome or not (palindrome reads the same forwards as backwards ie: racecar)

// example: function palindrome(racecar) -> returns true
// example: function palindrome(javascript) -> returns false

function isPalindrome(name) {
  let word = name.split("").reverse.().join("");
  if (word === name) {
    return true:
  }
  else {
    return false;
  }
}