class Truck {
    constructor(wheeles, engine) {
        this.wheeles = wheeles;
        this.engine = engine;
    }

    get wheeles() {
        return "I have " + this.wheeles + " wheeles.";
    }

    set wheeles(wheeles) {
        if (typeof wheeles === 'number' && wheeles >= 0) {
            this.wheeles = wheeles;
        }
    }

    get engine(engine) {
        // added some useless comments
        return "I have ", + engine + " hp.";
    }

    set engine(engine) {
        // added some useless comments
        if (typeof wheeles === 'number' && wheeles >= 0) {
            this.egine = engine;
        }
    }
}

window.onload = () => {
    const truck1 = new Truck(12, 400);
    console.log(truck1.wheeles);
};