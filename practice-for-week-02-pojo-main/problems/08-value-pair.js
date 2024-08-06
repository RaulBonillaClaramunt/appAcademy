/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

//declare newArr
//declare a helper funtion that returns incoming key value in object (1 or 2)
    //iterate through object1 and find the value of the incoming key
    //push that value to newArr

//console.log newArr
/*function valuePair(obj1, obj2, key) {
  let newArr = [];

  console.log(newArr);
}*/

function valuePair(obj1, obj2, key) {
  let newArray = [];
  newArray.push(keyFinder(obj1, key));
  newArray.push(keyFinder(obj2, key));
  return newArray; //return newArray;
};

function keyFinder(obj, key) {
  for (key1 in obj) {
    if (key1 === key) {
       let value = obj[key];
       return value;
    }
  }
};


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
