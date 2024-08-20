class Dog {
    constructor(name, isSitting) {
      this.name = name;
      this.isSitting = isSitting;
    }

    stand() {
      this.isSitting = false;
      return this.isSitting;
    }
  }

  let dog = new Dog("Bowser", true);

  // Bowser starts out sitting
  console.log(dog.isSitting); // prints `true`

  // Let's make him stand
  console.log(dog.stand()); // prints `false`

  // He's actually standing now!
  console.log(dog.isSitting); // prints `false`
/*
Inside of a method, you can use the keyword this to refer to the object
that is calling that method.
So when calling dog.stand() and you invoke the code of the stand method,
this will refer to the dog object.
*/
console.log('---');

class Doggy {
    test() {
      return this === dog;
    }
  }
let doggy = new Doggy();

console.log(doggy.test()); // prints `true`
/*
Method test(): This method checks if the current instance of the class
(referred to by this) is strictly equal to the variable dog.
*/
console.log('---');

class Cat {
  purr() {
    console.log("meow");
  }

  purrMore() {
    this.purr();
  }
}
let cat = new Cat();

cat.purrMore();
/*
Using this.purr(): This explicitly refers to the purr() method
of the current instance (cat).
It ensures that the method is called in the context of the instance,
allowing it to access instance-specific properties and methods.
Using purr() without this: If you were to call purr() directly
(i.e., just purr()), JavaScript would look for a function named purr
in the current scope. Since purr() is a method of the Cat class
and not a standalone function in the current scope,
this would result in a ReferenceError indicating that purr is not defined.
*/
/*
In the case of context, the value of "this" is determined
by how a function is invoked.
In the above section we used method-style invocation (this.purr()),
where "this" is set to the object the method was called upon.
*/
console.log('---');

/*what is "this" when using normal function style invocation?
*/
function testMe() {
  console.log(this); //
}

testMe(); // Object [global] {global: [Circular], etc.}
/*
When you run the above testMe function
you'll see that this is set to the global object.
So even functions that are not defined on an object
have the global object as their "this" and therefore their context.
*/
class Dog3 {
  constructor(name) {
    this.name = name;
  }

  changeName() {
    this.name = "Layla";
  }
}

let dog3 = new Dog3("Bowser");

// Note this is **not invoked** - you are assigning the function itself
let change = dog3.changeName;
console.log(change()); // TypeError, due to not recognizing a valid context

// Your dog still has the same name!
console.log(dog3); // { name: 'Bowser', changeName: [Function: changeName] }
/*
We've stored the dog.changeName function without invoking it 
to the variable change. 
On the next line when you did invoke the change function 
you can see that you did not actually change the dog object as intended.
*/