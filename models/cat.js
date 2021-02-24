class Pet {
    constructor(species) {
        this.species = species;
    }
}

class Cat extends Pet {
    constructor(species, petName, favFood) {
        super(species);
        this.petName = petName;

        this.favFood = favFood;
    }

    get petName() {
        return this.petName + "";
    }

    set petName(petName) {
        this.petName = petName;
    }
}