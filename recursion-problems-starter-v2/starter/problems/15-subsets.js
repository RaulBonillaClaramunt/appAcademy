/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
[] [3] [1] [1, 3] [2] [2. 3] [1, 2] [1, 2, 3]
***********************************************************************/

let subsets = (arr) => {//we'll create a "helper function" to create the subsets
  //and then the main function will gather them together
  debugger;
  let finalArr = [];

  function subsetGen(index, subset) {
    if (index === arr.length) {//base case
      return finalArr.push([...subset]);
    };

    subset.push(arr[index]);
    subsetGen(index + 1, subset);

    subset.pop();
    subsetGen(index + 1, subset);
  }

  subsetGen(0, []);
  return finalArr;
}

console.log(subsets([1, 2])); // [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3])); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
