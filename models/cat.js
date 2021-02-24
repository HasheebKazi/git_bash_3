class Pet {

    constructor(species) {
        this.species = species;
    }
    
}

class Cat extends Pet {
    constructor(species, petName, age, favFood) {
        super(species);
        this.petName = petName;
        this.age = age;
        this.favFood = favFood;
    }

    get petName() {
        return this.petName + "";
    }

    set petName(petName) {
        this.petName = petName;
    }

    get age() {
        return this.age + "";
    }

    set age(age) {
        this.age = age;
    }

}