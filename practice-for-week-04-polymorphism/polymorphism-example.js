class Charity {}

class Business {
  toString() { return 'Give us your money.'; }
}

class Restaurant extends Business {
  toString() { return 'Eat at Joe\'s!'; }
}

class AutoRepairShop extends Business {}

class Retail extends Business {
  toString() { return 'Buy some stuff!'; }
}

class ClothingStore extends Retail {}

class PhoneStore extends Retail {
  toString() { return 'Upgrade your perfectly good phone, now!'; }
}

console.log(new PhoneStore().toString());//Upgrade your perfectly good phone, now!
console.log(new ClothingStore().toString());//Buy some stuff!
console.log(new Restaurant().toString());//Eat at Joe\'s!
console.log(new AutoRepairShop().toString());//Give us your money.
console.log(new Charity().toString());//[object Object]
