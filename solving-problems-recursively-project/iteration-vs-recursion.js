
//iteration example
let countdown = (startingNumber) => {
    for(let i = startingNumber; i > 0; i--) {
        console.log(i);
    }

    console.log("Time's up!");
}

countdown(5);

//recursion example
//identify base case, recursive case, and recursive step
let countdown2 = (startingNumber) => {

    if (startingNumber === 0) {//base case - when the recursive function will stop
        console.log("Time's up!");
        return;
    }

    console.log(startingNumber);
    countdown2(startingNumber - 1);//recursive step is startingNumber - 1
    //the recursive case is startingNumber > 0
}

countdown2(7);
