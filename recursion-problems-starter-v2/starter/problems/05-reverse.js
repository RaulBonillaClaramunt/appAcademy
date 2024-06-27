/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/
//get rid of the first char of string and call reverse back with the new shorter string
//unshift the elimated characters into the newString

function reverse(string) {
  if (string === '') {
    return '';
  }

  let stringArr = string.split('');

  if (stringArr === 0) {
    return stringArr.join('');
  } else {
    let char = stringArr.shift();

    return reverse(stringArr.join('')) + char;
  }


}
  /*

function reverse(string) {//string = 'house'
  //use slice method with the incoming string
  let stringArr = string.split('');
  let newString = [];
    if (newString.length === stringArr.length) {
      return newString.join('');
    }

    for (let i = 0; i < stringArr.length; i++) {
      newString.unshift(stringArr[i]);
    }

    return newString.join('');
  }


function reverse(string) {
  // Base case: if the input string is empty, return an empty string
  if (string === "") {
    return "";
  }

  // Recursive case:
  // Split the string into an array of characters
  let stringArr = string.split('');

  // Base case: if the array has been completely reversed, join and return it
  if (stringArr.length === 0) {
    return stringArr.join('');
  } else {
    // Recursive case: take the first character and concatenate it with the reversed substring
    let firstChar = stringArr.shift(); // Remove the first character
    return reverse(stringArr.join('')) + firstChar;
  }
}
*/


console.log(reverse("house")); // "esuoh"
console.log(reverse("dog"));   // "god"
console.log(reverse("atom"));  // "mota"
console.log(reverse("q"));     // "q"
console.log(reverse("id"));    // "di"
console.log(reverse(""));      // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
