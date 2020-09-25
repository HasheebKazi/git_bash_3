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

    set sunRoof(bool) {
        this.sunRoof = this.sunRoof || false;
    }
}

window.onload = () => {
    const car1 = new Car(12, 400);
    console.log(car1.wheeles);
};