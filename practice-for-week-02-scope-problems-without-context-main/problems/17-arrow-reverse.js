/***********************************************************************
Write a function reverseStr(str) that accepts a string and returns that string
reversed.

Write this function using a fat arrow function!

Examples:
let result1 = reverseStr("hello"); // returns "olleh"
let result2 = reverseStr("garden"); // returns "nedrag"
let result3 = reverseStr("potato"); // returns "otatop"


***********************************************************************/

let reverseStr = (string) => {

  return (x) => {
    let reversedStr = [];//declare an empty array
    let char = string.split('');//convert string into char array
    console.log(string);
    for (let i = char.lenght - 1; i >= 0; i--) {
      reversedStr.push(char[i]);
    }

    //console.log(reversedStr.join(''));

    return reversedStr.join('');

  }

}

let result1 = reverseStr("hello"); // returns "olleh"
console.log(result1);
let result2 = reverseStr("garden"); // returns "nedrag"
let result3 = reverseStr("potato"); // returns "otatop"
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = reverseStr;
  } catch (e) {
    return null;
  }
