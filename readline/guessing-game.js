const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let min;
let max;
let secretNumber;
let numAttempts;

const askLimit = () => {
    rl.question("How many attempts do you want to have? ", (attempts) => {
        console.log(`You will have ${attempts} attempts`);
        numAttempts = Number(attempts);
        askRange();
    });
}

const askRange = () => {
    rl.question("Enter a min number ", (minNumber) => {
        console.log("*", (minNumber), "*");
        min = Number(minNumber);

        rl.question("Enter a max number ", (maxNumber) => {
            console.log("*", (maxNumber), "*");
            max = Number(maxNumber);
            secretNumber = randomInRange(min, max)
            console.log(`I'm thinking of a number between ${min} and ${max}`);

            askGuess();
        });
    });
};


const askGuess = () => {
    if (numAttempts <= 0) {
        console.log("Too many attempts...You Lose!");
        rl.close();
        return;
    }

    rl.question("Enter a guess: ", (answer) => {
        let number = Number(answer);
        console.log("Your guess is: ", number);
        numAttempts -= 1;

        if (!checkGuess(number)) {
            askGuess();
        } else {
            rl.close();
        }
    });
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

askLimit();
