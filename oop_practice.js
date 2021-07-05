
class Ninja {
    constructor(name, health) {
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3

    }
    sayName() {
        console.log(`my name is ${this.name }`);
    }
    showStats() {
        console.log(`Ninjas name is ${this.name} Health is ${this.health} Strength is ${this.strength} and Speed is  ${this.speed}`)
    }
    drinkSake() {
        this.health += 10;
    }
}


const ninja1 = new Ninja("Hyabusa", 40);
ninja1.sayName();
ninja1.showStats();

ninja1.drinkSake()
ninja1.showStats();