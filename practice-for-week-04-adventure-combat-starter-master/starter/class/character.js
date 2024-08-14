class Character {

  constructor(name, description, currentRoom, items = [], strength = 10, health = 100) {
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = items;
    this.strength = strength;
    this.health = health;
  }

  applyDamage(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    for (const item of this.items) {
      this.currentRoom.items.push(item);
      const index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
    this.currentRoom = null;
  }

}

module.exports = {
  Character,
};
