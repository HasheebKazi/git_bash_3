class Pet {
    constructor(species) {
        this.species = species;
    }
}

class Cat extends Pet {
    constructor(species, name, age) {
        super(species);
        this.name = name;
        this.age = age || 0;
    }

    get name() {
        return this.name + "";
    }

    set name(name) {
        this.name = name;
    }

    get age() {
        return this.age + "";
    }

    set age(age) {
        this.age = age;
    }

}