class Truck {
    constructor(wheeles, engine) {
        this.wheeles = wheeles;
        this.engine = engine;
    }

    get wheeles() {
        return "I have " + this.wheeles + " wheeles.";
    }

}

window.onload = () => {
    const truck1 = new Truck(12, 400);
    console.log(truck1.wheeles);
};