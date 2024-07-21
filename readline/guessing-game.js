let secretNumber = 25;

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
