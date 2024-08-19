/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/
/*First idea:
-helper function to find out all different vowels in a string
-declare var cotaining vowels
-declare a var to contain the found vowels
-return found vowels var length
-use filter method to return only strings which are incoming with counter > 2
-Finally converted the string into an array (to be able to use array methods)
and converted the helper function (solved with a for loop) into a forEach method nested into given function
*/
let hasThreeVowels = function(string) {
    let vowels = 'aeiou';
    let vowel = '';
    let letters = string.split('');
    letters.forEach((letter) => {
        if (vowels.includes(letter) && !vowel.includes(letter)) {
            vowel += letter;
        }
        return vowel.length;
    });
    if (vowel.length > 2) {
        return true;
    } else {
        return false;
    }
};


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
