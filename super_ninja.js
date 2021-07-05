
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
class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10)
        this.wisdom = 10
    }

    speakWisdom() {
        const message = super.drinkSake();
        console.log('Bananas are delicious, something something programming');
    }
}

const ninja1 = new Ninja("Hyabusa", 40);


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();

superSensei.showStats();