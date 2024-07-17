/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/
function permutations(array) {
  const result = [];

  if (array.length === 1) {
    result.push(array);
    return result;
  }

  for (let i = 0; i < array.length; i++) {
    const current = array[i];//pick up an element of array
    //build an array with the remaining values
    const remaining = [...array.slice(0, i), ...array.slice(i + 1)];
    //pass those values through the function again
    const innerPermutations = permutations(remaining);

    for (let j = 0; j < innerPermutations.length; j++) {
      //push the result of recursion to the result array
      result.push([current, ...innerPermutations[j]]);
    }
  }

  return result;
}

//console.log(permutations([]));
//console.log(permutations([5]));
//console.log(permutations([1, 2]));
console.log(permutations([1, 2, 3]));
//permutations([1, 2, 3]);

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
