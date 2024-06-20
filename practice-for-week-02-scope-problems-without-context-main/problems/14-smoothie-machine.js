/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of parameters
and returns a function.

The returned function will also accept any number of parameters and will
return a string including all of the parameters of smoothieMachine as well
as the returned function's parameters. Look at the examples for a guide of
how your return should be formatted!

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/
/*
const smoothieMachine = (...ingredients) => {
  let recipe = "";
  let count = 1;

  return returnFunc = (string) => {
    for (let ingredient of ingredients) {

      if (count = 1) {
        count++;
        recipe = "I'm having a smoothie with " + ingredient;

      } else {
          recipe += " and " + ingredient;
          //return recipe;
      }

    }
  return recipe;
  }

};
*/

const smoothieMachine = (...ingredients) => {
  return function(...additionalIngredients) {
      // Combine all ingredients from smoothieMachine and the returned function
      let allIngredients = [...ingredients, ...additionalIngredients];

      // Format the output string
      let smoothie = "I'm having a smoothie with " + allIngredients.join(" and ");

      return smoothie;
  }
}


let smoothie1 = smoothieMachine();
/*
console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach" */
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  return null;
}
