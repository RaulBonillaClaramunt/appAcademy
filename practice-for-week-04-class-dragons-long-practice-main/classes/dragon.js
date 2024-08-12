class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    //Dragon.dragon = dragon;
  }

  //static dragons = [];

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...allDragons) {
    const dragons = [];
    for (const dragon of allDragons) {
      if (dragon instanceof Dragon) {
        dragons.push(dragon.name);
      }
    }
    return dragons;
  };
};
/*
const puff = new Dragon("Puff", "green");
console.log(puff);
console.log(puff.breathesFire());
const toothless = new Dragon("Toothless", "black");
console.log(toothless);
console.log(toothless.breathesFire());

console.log(Dragon.getDragons(puff, toothless));
*/
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
