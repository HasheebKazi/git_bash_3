class Car {
    constructor(wheeles, engine, sunRoof) {
        this.wheeles = wheeles;
        this.engine = engine;
        this.sunRoof = sunRoof;
    }

    get wheeles() {
        return this.wheeles + "";
    }

    get engine() {
        return this.engine + " :hb";
    }
    
    get sunRoof() {
        return this.sunRoof ? "Has sun roof." : "Doesn't have sun roof.";
    }

    set engine(engine) {
        if (typeof engine === 'number' && engine >= 0) {
            this.engine = engine;
        }
    }

    set sunRoof(bool) {
        this.sunRoof = this.sunRoof || false;
    }

    set wheeles(wheeles) {
        if (typeof wheeles === 'number' && wheeles >= 0) {
            this.wheeles = wheeles;
        }
    }

    randoFunc22() {
        return 23;
    }



    helloWorld() {
        return "Hello World";
    }

}

window.onload = () => {
    const car1 = new Car(4, 100);
    console.log(car1.wheeles);
};