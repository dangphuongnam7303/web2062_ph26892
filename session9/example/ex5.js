'use strict';
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
         thu: {
                open: 12,
                close: 22
            },
            fri: {
                open: 11,
                close: 23
            },
            sat: {
                open: 0, // Open 24 hours
                close: 24
            }
    },
    order: function (startIndex,mainIndex) {
       return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({startIndex =1,mainIndex=2, time ='21:00', address}) {
         console.log(`Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    }


};
//short-circuiting
console.log(3||'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuest = 23;

const guest1 =  restaurant.numGuest ? restaurant.numGuest:10;
console.log(guest1);
const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log(0 && "jonas");



