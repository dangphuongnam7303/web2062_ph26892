class CarCl {
    constructor (make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate () {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    brake () {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    get speedUS () {
        return this.speed / 1.6;
    }
    set speedUS (speed) {
        this.speed = speed * 1.6;
    }

}

CarCl.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

CarCl.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new CarCl('BMW', 120);
const mercedes = new CarCl('Mercedes', 95);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
mercedes.accelerate();
mercedes.brake();
