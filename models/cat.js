class Pet {
    constructor(species) {
        this.species = species;
    }
}

class Cat extends Pet {
    constructor(species, name) {
        super(species);
        this.name = name;
    }

    get name() {
        return this.name + "";
    }

    set name(name) {
        this.name = name;
    }
}