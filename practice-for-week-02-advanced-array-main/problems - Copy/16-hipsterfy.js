/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/
/* findout last vowel and slice word from 0 to i and from i on
*/
let removeLastVowel = function(word) {
    let vowels ='aeiou';
    let newWord = '';
    for (let i = word.length -1; i >= 0; i--) {
        let char = word[i];
        if (vowels.includes(char)) {
            return word.slice(0, i) + word.slice(i + 1, word.length);
        }
    }
};

let hipsterfy = function(sentence) {
    let words = sentence.split(' ');
    let newSentence = [];
    words.map((word) => {
        newSentence.push(removeLastVowel(word));
    });

    return newSentence.join(' ');
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
