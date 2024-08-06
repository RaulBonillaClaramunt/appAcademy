/***********************************************************************
Write a function `breakDownObj(obj)` that takes in an object as a parameter
and returns an array containing:  all the keys from the object **and** all the
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!


Examples:
let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
breakDownObj(object1); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = {location: 'NY', borough: 'Brooklyn'};
breakDownObj(object2); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]
***********************************************************************/

//declare a var that contains all keys of object1 using spread syntax
//declare a var that contains all values of object1
//declare an array that contains both vars and console.log it
function breakDownObj(obj) {
  let keys = Object.keys(obj);
  //console.log(keys);
  let values = Object.values(obj);
  //console.log(values);
  let allTogether = [...keys,...values];
  return allTogether;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = breakDownObj;
