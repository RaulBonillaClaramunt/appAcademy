/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/
//if i < (i + 1 ) recursive true
//if arr[array.length - 1] < arr[array.length] return
function isSorted(array, i = 0) {
    if (i === (array.length - 1)) return true;

    if (array[i] > array[i + 1]) return false;

    else {
      (array[i] < array[i + 1])
      return isSorted(array, i++);
    }

    //return true;
  //}

}

console.log(isSorted([1, 2, 3, 4, 5])); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
