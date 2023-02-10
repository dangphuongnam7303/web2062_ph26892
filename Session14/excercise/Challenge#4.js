chargeBatery = function (chargeTo) {
    this.charge = chargeTo;
}

accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
}

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

// Linking prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = chargeBatery;
EV.prototype.accelerate = accelerate;

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla.charge);
tesla.accelerate();
tesla.brake();
tesla.accelerate();
