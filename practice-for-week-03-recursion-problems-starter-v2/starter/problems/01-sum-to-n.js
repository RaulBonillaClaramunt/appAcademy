/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/
/*
- set a count
- base case when count === number stop the function
- set the function adding part
- set a recursive step adding 1 to count
- conditional if number < 0 return null
*/
function sumToN(number) {

  if (number < 0) return null;
  if (number === 0) return 0;

  return number + sumToN(number - 1);
}

console.log(sumToN(5)); // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
console.log(sumToN(-8));  // returns null

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
