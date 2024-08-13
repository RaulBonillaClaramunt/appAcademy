const { Item } = require('./item');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
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
    //gets an item from a room and adds it to player's inventory
    takeItem(itemName) {
        //gets it
        const item = this.currentRoom.getItemByName(itemName);
        this.items.push(item);

        //deletes it from room inventory by creating a new array
        //with the rest of items (using filter method properties)
        this.currentRoom.items = this.currentRoom.items.filter((item) => item.name != itemName);


    }

    dropItem(itemName) {
        //add item to currentRoom item array
        const item = this.getItemByName(itemName);
        this.currentRoom.items.push(item);

        //delete item from player's inventory
        this.items = this.items.filter((item) => item.name !== itemName);
    }

    eatItem(itemName) {
        const item = this.getItemByName(itemName);

        if (item instanceof Food) {
            this.items = this.items.filter((item) => item.name !== itemName);
        }
    }

    getItemByName(name) {
        //get a new array (due to filter's behaviour) with items with certain name
        //return first (and only) item with that name
        const itemArray = this.items.filter((item) => item.name === name);
        return itemArray[0];
    }
}

module.exports = {
  Player,
};
