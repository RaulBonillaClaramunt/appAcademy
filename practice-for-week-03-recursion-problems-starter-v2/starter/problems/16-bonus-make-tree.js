/***********************************************************************
Write a recursive function `makeTree(categories, parent)` that takes an array of
categories objects, each of which have an id property, and a parent property and
returns a nested tree of those objects using the parent properties to construct
the tree.

A parent value of null means you are at the bottom of the tree and the category
has no parent, so the default value parent is be null if no parent is
provided.

Example 1:

Given an array of objects with id properties to create our tree:

const categories1 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);

We should return a tree like this:

{
  animals: {
    mammals: {}
  }
}

***********************************************************************/
const makeTree = (categories, parent) => {
//we declare an empty object
  let tree = {};
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].parent === parent) {
//in this case, categories[i].parent = null, which is === declared tree1 parent
//so we pollute the empty object giving it the categories[0] parent value
//as the key name and assigning it a value
//which is the recursive calling of the function
//setting the categories[0] id valur as the "parent" argument
      tree[categories[i].id] = makeTree(categories, categories[i].id);
    }
  }

  return tree;
};

/*
const makeTree = (categories, parent) => {
  let tree = {};
  //this exercise is going to take me a while to solve ;))
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    if (category.parent === parent) {
      tree[category.id] = makeTree(categories, category.id);
    }
  }

  return tree;
};
*/
const categories1 = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);
console.log(tree1);



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeTree;
} catch (e) {
  module.exports = null;
}

// This problem was inspired by a Fun Fun Function video:
// https://www.youtube.com/watch?v=k7-N8R0-KY4
/*
Example 2:
Now imagine we have a database that returns a bunch of rows of data:

const categories2 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
];

Then we call the function with the categories:
const tree2 = makeTree(categories2, null);

The call above should return the tree below:

{
    animals: {
        mammals: {
            dogs: {
                chihuahua: {},
                labrador: {}
            },
            cats: {
                persian: {},
                siamese: {}
            }
        }
    }
}
*/
