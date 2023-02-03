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
restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    startIndex: 1
});

const [first, second, third] = restaurant.categories;
console.log(first, second, third);
console.log(restaurant.order(0,2));
//lấy biến không đặt tên
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);
//dặt tên biến
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);
//default value
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);
//mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a, b} = obj);
console.log(a, b);
//nested object\
const {fri: {open, close}} = openingHours;
console.log(open, close);
//spread variables
const arr = [1, 2, 3];
const newArray = [...arr, 4 ,5 ];
// reset patters and parameters
// SPREAD, because on RIGHT side of: sử dụng khi viết các giá trị phân tách bằng dấu ,
const patters = [1, 2, ...[3, 4]];
//REST, because on LEFT side of
const [c, d, ...others] = [1, 2, 3, 4, 5];
console.log(c,d,others);

