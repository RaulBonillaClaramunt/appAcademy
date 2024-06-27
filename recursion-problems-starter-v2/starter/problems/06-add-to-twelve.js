/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/
//for (let i = 0; i < arr.length; i++) => if (i + (i + 1) = 12) => return true
/*
let addToTwelve = (arr, i = 0) => {

  if (arr[i] + arr[i + 1] === 12) {
    //console.log(true);
    return true;
  }

  if (arr.length < 2) {
    //console.log(false);
    return false;
  } else {
    arr.shift();
    return addToTwelve(arr, i++) ;
  }
}
*/
let addToTwelve = (arr) => {

  if (arr[0] + arr[1] === 12) {
    console.log(true);
    return true;
  }

  if (arr.length < 2) {
    console.log(false);
    return false;
  } else {
    arr.shift();
    return addToTwelve(arr) ;
  }
}

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
