const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');
//const {Room} = require('./room');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
    //this.items = [];
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    const item = this.currentRoom.items.find((item) => item.name === itemName);
    this.items.push(item);
    this.currentRoom.items = this.currentRoom.items.filter((item) => item.name !== itemName);
  }

  dropItem(itemName) {

    const item = this.getItemByName(itemName);
    this.items = this.items.filter((item) => item.name !== itemName);
    this.currentRoom.items.push(item);
  }

  eatItem(itemName) {

    const item = this.getItemByName(itemName);
    if (item instanceof Food) {
      this.items = this.items.filter((item) => item.name !== itemName);
    } else {
      return ('You can only eat food ;)');
    }

  }

  getItemByName(name) {
//    const item = this.items.find((item) => item.name === name);
//    return item;
    for (const item of this.items) {
      if (item.name === name) {
        return item;
      }
    }
  }

  hit(name) {

    const enemy = this.currentRoom.getEnemyByName(name);
    //enemy.applyDamage(this.strength);
    if(enemy) {
      enemy.attackTarget = this;
      enemy.health -= this.strength;
    }
    //tips form another student's code:
    //enemy.attackTarget = this;
    //enemy.health -= this.strength;

  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
