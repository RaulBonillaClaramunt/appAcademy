const {Character} = require('./character');
//const {Player} = require('./player');
//const {Food} = require('./food');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom);
    this.cooldown = 3000;
    this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
  //need to find rooms connected to currentRoom
  //if

    if (this.cooldown > 0) {
      this.rest();
    }
    //get exits from the current room
    const exits = this.currentRoom.getExits();//this returns an array of available exits
    const numOfExits = exits.length;
    //get a random number for room and place Goblin there
    const num = Math.floor(Math.random() * numOfExits);//rndm num between 0 and numOfExits
    //new var
    const dir = exits[num];
    const room = this.currentRoom.getRoomInDirection(dir);
    //need to define variabel room
    this.currentRoom = room;
    this.cooldown = 3000;
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
    if (this.cooldown > 0) {
      this.rest();
    }

    this.attackTarget.health -= this.strength;
    this.cooldown = 3000;
/* original code not passing test:
//if player is in the same room he will attack by default
//so Enemy can attack right afterwards using a Timeset
    if (this.currentRoom.player) {
      setTimeout(() => {
        player.applyDamage(this.strength);
      }, 500);
    }*/

  }

  applyDamage(amount) {
    player.health -= amount;
  }



  act() {
    if (this.health <= 0) {
      this.die();
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 3000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
