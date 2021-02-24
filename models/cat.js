class Pet {
    constructor(species) {
        this.species = species;
    }
}

class Cat extends Pet {
    constructor(species, name, favFood) {
        super(species);
        this.name = name;

        this.favFood = favFood;
    }

    get name() {
        return this.name + "";
    }

    set name(name) {
        this.name = name;
    }
}