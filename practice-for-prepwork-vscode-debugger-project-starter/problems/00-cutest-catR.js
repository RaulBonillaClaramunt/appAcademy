/*

Fix the `cutestCat` function.
Should return the cat with the highest `cuteness`
rating.

*/
const cats = [

  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Indie', cuteness: 5 },
]

function cutestCat(cats) {
  let cutest = 0;
  let i = 0;

  while (i < cats.length) {
    const cat = cats[i];

    if (cat.cuteness > cutest) {
      cutest = cat.cuteness;

    }
    i++;
  }

  return cats.find((cutie) => cutie.cuteness === cutest);
}


console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }
