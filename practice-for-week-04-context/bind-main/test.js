const Employee = require('./employee');

const johnWick = new Employee('John Wick', 'Dog Lover');

/*
setTimeout(johnWick.sayName, 2000);
This code will print "undefined says Hello" because setTimeout
has lost context.
To mend the issue we use the bind method on setTimeout argument:
*/
setTimeout(johnWick.sayName.bind(johnWick), 2000);

/* using setTimeout with an arrow function would not lose the this context
and be a more modern solution:
setTimeout (() => {
    johnWick.sayName();
}, 2000);
*/
setTimeout(johnWick.sayOccupation.bind(johnWick), 3000);

setTimeout(() => {
    johnWick.sayOccupation();
}, 4000);
