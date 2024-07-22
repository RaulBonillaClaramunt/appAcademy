const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const askGuess = (answer) => {

        let number = Number(answer);
        console.log("Your guess is: ", number);
        //checkGuess(number);
        if (!checkGuess(number)) {
            rl.question("Enter another guess: ", (answer) => {
            askGuess(answer);
            });
        } else {
            rl.close();
        }
}
function randomInRange(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

let secretNumber = randomInRange(100, 0);

function checkGuess(number) {
    if (number > secretNumber){
        console.log("Too high");
        return false;
    }

    if (number < secretNumber){
        console.log("Too low");
        return false;
    }

    if (number === secretNumber){
        console.log("Correct!");
        return true;
    }
}

rl.question("Enter a guess: ", (answer) => {
    askGuess(answer);
    });

console.log(randomInRange(15, 20)); // 16
console.log(randomInRange(15, 20)); // 17
console.log(randomInRange(15, 20)); // 20
