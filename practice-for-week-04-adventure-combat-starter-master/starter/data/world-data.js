module.exports = {
  rooms: [
    {
      id: 1,
      name: "Crossroad",
      description: "You are standing at a crossroad. To the north, east, south and west you see empty space, waiting to be filled.",
      exits: {n: 2, e: 3, w: 4, s: 5}
    },
    {
      id: 2,
      name: "Northern point",
      description: "You are standing at the north point of a crossroad. To the south, you see an empty intersection.",
      exits: {n: 7, s: 1}
    },
    {
      id: 3,
      name: "Eastern point",
      description: "You are standing at the east point of a crossroad. To the west, you see an empty intersection.",
      exits: {w: 1}
    },
    {
      id: 4,
      name: "Western point",
      description: "You are standing at the west point of a crossroad. To the east, you see an empty intersection.",
      exits: {e: 1}
    },
    {
      id: 5,
      name: "Southern point",
      description: "You are standing at the south point of a crossroad. To the north, you see an empty intersection.",
      exits: {n: 1, s: 6}
    },
    {
      id: 6,
      name: "Hell's Door",
      description: "You are standing at the Hell's Door, south from the Southern point. To the north, you see the Southern point.",
      exits: {n: 1}
    },
    {
      id: 7,
      name: "Heaven's Door",
      description: "You are standing at the Heaven's Door, north of north point of a crossroad. To the south, you see the north point of a crossroad.",
      exits: {s: 2}
    }
  ],
  items: [
    {
      name: "rock",
      description: "Just a simple rock",
      room: 1
    },
    {
      name: "sandwich",
      description: "A tasty looking sandwich",
      room: 2,
      isFood: true
    },
    {
      name: "gun",
      description: "A cool bright charged gun",
      room: 6,
    },
    {
      name: "candy",
      description: "A sweet mango ready to supercharge your strength",
      room: 7,
    }
  ],
  enemies: [
    {
      name: "goblin",
      description: "A mean-looking goblin",
      room: 3,
      //create a random number to replace room number so
      //goblin is able to move to a different room on a cooldown timer
    },
    {
      name: "troll",
      description: "A nasty troll",
      room: 6,
    },
  ]
}
