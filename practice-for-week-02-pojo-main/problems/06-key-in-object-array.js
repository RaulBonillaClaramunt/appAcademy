/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of
objects as the first parameter and a string as the second. The `keyInObjectArray`
will return `true` if any of the objects contains the `keyString` as a key within them, and
`false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

Example
const obj = { key1: "a", key2: "b", key3: "c" };
  let example = Object.keys(obj)
  console.log(example); // ["key1", "key2", "key3"]

***********************************************************************/

//iterate through array objArray
//check if indexed el i === keystring
//declare a counter that adds 1 each time el[i] === keystring
//return true if it does

let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

function keyInObjectArray(objArray, keyString) {
  let counter = 0;
  for (let i = 0; i < objArray.length; i++) {
   let properties = Object.keys(objArray[i]);
   if (properties.includes(keyString)) {
   counter++;
   }
  }
  if (counter > 0) {
    return true;
  } else {
    return false;
  }
}
/*
keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false
*/
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
