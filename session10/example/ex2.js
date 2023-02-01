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

const flight = 'LH1234';
const jonas = {
    name : 'Jonas Schmedtmann',
    passport: 215465456
}
const checkIn = function (flightNum,numPassengers) {
    flightNum = 'LH999';
    passengers.name = 'Mr. ' + passengers.name;
    if(passengers.name===215465456) {
        alert('Checked in');
    }else {
        alert('Wrong passport!');
    }
};
checkIn(flight,jonas);
console.log(flight);
console.log(jonas);
