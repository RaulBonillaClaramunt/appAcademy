/*
Write a function `snakeToCamel` that takes in a snake_cased string and returns a
PascalCased version of the string. snake_case is where each word is separated
with underscores(`_`). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.

Solve this using `array.map()`.

Examples:

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

*/
//split snake_cased into words array using '_' as a parameter
//declare PascalCase array
//declare newWord
//turn index 0 of each word and toUpperCase and asign it to newWord
//assign also word.toLowerCase().slice(1) to newWord
//add every newWord to PascalCase
//return PascalCase as string - join(' ');
function snakeToCamel(str) {
    let arr = str.split('_');

    let PascalCase = arr.map((word) => {
        let newWord = word[0].toUpperCase() + word.toLowerCase().slice(1);
        return newWord;
    });

    return PascalCase.join('');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = snakeToCamel;
} catch (e) {
    module.exports = null;
}
