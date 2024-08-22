// DO NOT MODIFY THE say FUNCTION
/*
Without modifying the say function, make the file print out the following:
Hello, John!
Hey there, Michael!
*/
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

//say(helloMessage, "John");
//say(heyThereMessage, "Michael");

let sayHello = say.call(helloMessage, "John");
let sayHey = say.call(heyThereMessage, "Michael");
