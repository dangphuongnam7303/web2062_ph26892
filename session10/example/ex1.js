'use strict';

const createBooking = function (flightNum,numPassengers, price) {
    //ES5
    numPassengers=numPassengers || 1;
    price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    booking.push(booking);
}
createBooking('LH123');
createBooking('LH123',2,800);
createBooking('LH123',2);
createBooking('LH123',5);
createBooking('LH123',undefined, 1000);

