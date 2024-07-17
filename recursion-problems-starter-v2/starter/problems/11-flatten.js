/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
flatten([1, [2, [4]]]); // [1, 2, 4]
***********************************************************************/
function flatten(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
console.log(flatten([1, [2, [4]]])); // [1, 2, 4]
console.log(flatten([1, [2, [3, [4]]]]));// Output: [1, 2, 3, 4]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
