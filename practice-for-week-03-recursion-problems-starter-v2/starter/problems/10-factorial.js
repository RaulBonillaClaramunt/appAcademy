/***********************************************************************
Write a recursive function called `factorial` that takes an integer, `num`,
and returns the factorial of `num`. Assume the value of `num` is greater
than or equal to 1.

A factorial is the number get when multiplying a number by itself minus one
all the way down to 1 (but not 0)! We represent them with an exclamation
point, also sometimes called a "bang" in programming.

5! = 5 x 4 x 3 x 2 x 1 = 120

Examples:

factorial(1); // 1
factorial(3); // 6
factorial(5); // 120
***********************************************************************/

function factorial(num, total = 1) {
  if (num === 1) return total;

  return factorial(num - 1, total * num);
/*factorial (5, 1)
    factorial (4, 5)
      factorial (3, 20)
        factorial (2, 60)
          factorial (1, 120)
          return 120
        return 120
      return 120
    return 120
  return 120
*/
}

console.log(factorial(1)); // 1
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = factorial;
} catch (e) {
  module.exports = null;
}
