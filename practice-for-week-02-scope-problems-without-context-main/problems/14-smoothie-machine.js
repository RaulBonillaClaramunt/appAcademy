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

function smoothieMachine(...ingredients) {
  let recipe = [...ingredients];
  console.log(recipe);

  let addingIngredients = (...addIngredients) => {
      recipe = [...ingredients, ...addIngredients];
      console.log(recipe);
      let recipeStr = "I'm having a smoothie with " + recipe.join(' and ');

      return recipeStr;
  };

  return addingIngredients;
};

/*
function smoothieMachine(...ingredients) {
  return function(...addIngredients) {
      let recipe = [ ...ingredients, ...addIngredients];
      let recipeStr = recipe.join(' and ');

      //return `I'm having a smoothie with ${recipeStr}`;
      return "I'm having a smoothie with " + recipeStr;
  };
};
*/
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
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  return null;
}
