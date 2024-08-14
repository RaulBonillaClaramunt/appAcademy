const {Character} = require('./character');
//const {Player} = require('./player');
//const {Food} = require('./food');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom);
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    // Fill this in
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = () => {
  //debugged: originally it was a regular function but RFs this context is
  //limited to the function they're declared into (in this case resetCooldown)
  //and not in surrounding scope (in this case rest()), which would make our code useless
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
  }

  applyDamage(amount) {
    // Fill this in
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
