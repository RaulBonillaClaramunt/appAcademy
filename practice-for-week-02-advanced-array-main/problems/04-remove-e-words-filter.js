/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.

Examples:

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

*/
//split incoming string into words arr
//filter each word so new arr only contains those with no 'e' in it - use toLowerCase
//turn new arr into a string
let removeEWords = function(sentence) {
    let arr = sentence.split(' ');
    let newArr = arr.filter((word) => {
        return !word.toLowerCase().includes('e');
    });
    return newArr.join(' ');
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
