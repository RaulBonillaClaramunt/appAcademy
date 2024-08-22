//Say you want to create a method on Dog that has the dog bark its name:

class Dog1 {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(this.name);
  }
}

let dog1 = new Dog1("Fido");
dog1.bark()//prints "Fido"

//code above works fine, but say you want to add a delay to the bark.
//if You would use a "traditional" setTimeout you'd need a bind to make it work:
class Dog2 {
    constructor(name) {
        this.name = name;
      }

      delayedBark() {
        setTimeout(function() {
          console.log(this.name);
        }.bind(this), 1000);
      }
  }

  let dog2 = new Dog2("DelayedFido is 1 second late");
  dog2.delayedBark();

  //This is starting to look pretty cumbersome
  //just to write a properly functioning callback.
  //Time to give the arrow function a shot:
class Dog3 {
    constructor(name) {
        this.name = name;
        }

    delayedBark() {
        setTimeout(() => {
            console.log(this.name);
        }, 2000);
    }
};
let dog3 = new Dog3("ArrowFido is 2 seconds late but cooler ;)");
dog3.delayedBark();
