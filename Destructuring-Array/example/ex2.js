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
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    startIndex: 2
});