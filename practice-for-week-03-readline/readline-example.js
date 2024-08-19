/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask the user a question
rl.question("What's up, doc? ", answer => {
  // print their response
  console.log("you responded: " + answer);
  // close the interface
  rl.close();
});


const readline2 = require("readline");

const rl2 = readline2.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl2.question("What's up, doc? ", answer => {
  console.log("you responded: " + answer);
  rl2.close();
  console.log("DONE!");
});

// try to print 'DONE!' after the question
*/

/*
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("What is your name? ", (answer) => {
    console.log("hello " + answer);

    rl.question("Where are you from? ", (answer) => {
        console.log(answer + " is a beautiful place!");

        rl.question("How are you? ", (answer) => {
            console.log("very cool, ", (answer));
            rl.close();
        });
    });
});
*/
//We can refactor the above code to avoid too much nesting:

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



const handleFirstQuestion = (answer) => {
    console.log("hello " + answer);
    rl.question("Where are you from? ", handleSecondQuestion);
}

const handleSecondQuestion = (answer) => {
    console.log(answer + " is a beautiful place!");
    rl.question("How are you? ", handleThirdQuestion);
}

const handleThirdQuestion = (answer) => {
    console.log("very cool, ", (answer));
    rl.close();
};

rl.question("What is your name? ", handleFirstQuestion);
