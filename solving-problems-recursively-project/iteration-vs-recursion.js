
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

    if (startingNumber === 0) {//base case
        console.log("Time's up!");
        return;
    }

    console.log(startingNumber);
    countdown2(startingNumber - 1);//recursive step
    //the recursive case is implicit
}

countdown2(7);
