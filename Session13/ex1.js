'use strict';

//////////////////////
//Model window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
//Tabbed componet
const tabs = document.querySelectorAll('.peration__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContainer = document.querySelectorAll('.operations__content');

const openModal = function(e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

};
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
////////////////////////
////////////////////////////////




////////////////////////
////////////////////////
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementByClassName('btn'));

// creating and inserting element
// .insertAdjancenHTML
const message = document.createElement('div');
message.classList.add('cookie-mesage');
// message.textContent = 'We use cookie for improved functionality and analytics';
message.innerHTML = 'We use cookie for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!<button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

//Delete element
document.querySelector('btn--close-cookie').addEventListener('click', function() {
    // message.remove();
    message.parentElement.removeChild(message);
});

//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document / documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
logo.alt = 'Beautiful minimalist logo';

//Non-standard
console.log(logo.designer);
console.log(logo.getAttribute(designer));
logo.setAttribute('company', 'Bankist');
console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attribute
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); //not includes


//Don't use
logo.className = 'jonas';

//////////////////////////////
////////////////////////////////////////
const btnScrollTo = document.querySelector('.btn-scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    console.log(e.target.getBoundingClientRect());

    console.log('Currnet scroll (X/Y)', window.pageX0ffset, window.pageY0ffset);

    console.log('height/width viewport',
        document.documentElement.clientHeight,
        document.documentElement.clientWidth);

    //Scrolling
    // window.scrollTo(
    //     s1coords.left + window.pageY0ffset,
    //     s1coords.top + window.pageYOffset
    // );
    window.scrollTo({
        left: s1coords.left + window.pageX0ffset,
        top: s1coords.top + window.pageYOffset,
        behavior: 'smooth',

    });

    section1.scrollIntoView({ behavior: 'smooth' });
});

const alertH1 = function(e) {
    alert('addEventListener: Great!You are reaing the heading:D ');

};
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', alertH1);


setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// h1.onmouseenter = function(e) {
//     alert('addEventListener: Great!You are reaing the heading:D ');
// };

//////////////////////////
//Page navigation

// document.querySelectorAll('.nav__link').forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         console.log(id);
//         document.querySelector(id).scrollIntoView({
//             behavior: 'smooth'
//         });
//     })
// })
//1.add event lister to common pảent element
//2. Dêtrmine what element originated the even
document.querySelector('.nav__link').forEach('click', function(e) {
    console.log(e.target);
});

// Matching strategy
if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}
/////////////////////////

tabsContainer.addEventListener('click', function(e) {
    const clicked = e.target('.operations__tab');
    console.log(clicked);
    //Guard clause
    if (!clicked) return;
    // remove active classes
    tabs.forEach(t => t.classList.remove('operation__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operation__tab--active'));
    //Active tab
    clicked.classList.add('operations__tab--active');

    //active content area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});
////////////////////////////////
//Menu fade animation

const handleHover = function(e) {
    if (e.target.classList.contains('nav__link')) {
        const clicked = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav_link');
        const logo = link.closet('.nav').querySelector('img');
        siblings.forEach(el => {
            if (el !== link) el.style.opacity = opacity;

        });
        logo.style.opacity = opacity;
    };

};
//Pasing "argument" into handle
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseover', handleHover.bind(1));

//Sticky navigation
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('croll', function(e) {
        console.log(window.scrollY);

        if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
        else nav.classList.remove('sticky');
    })
    ////////////////////////////////
    // rbg(255,255,255)

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `egb(${randomInt(0,255)}),${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}`;
document.querySelector('.nav__link').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    console.log("LINK", e.target, e.currentTarget);
    console.log(e.currentTarget === this)

    //Stop propagation
    // e.stopPropafation();
});

document.querySelector('.nav__links').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    console.log("CONTAINER", e.target, e.currentTarget);

});

document.querySelector('.nav').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    console.log("NAV", e.target, e.currentTarget);
}, true);

//////////////////////////
/////////////////////////

const h2 = document.querySelector('h2');

//Going downward :child 

console.log(h2.querySelectorAll('highlight'));
console.log(h2.childNodes);
console.log(h2.children);
h2.firstElementChild.style.color = 'white';
h2.lastElementChild.style.color = 'orangered';

//Going upwwards :parents
console.log(h2.parentNode);
console.log(h2.parentElement);

h2.closest('.header').style.background = 'var (--gradient-secondary)';

h2.closest('.h2').style.background = 'var (--gradient-primary)';

//Going sideways :siblings
console.log(h2.previousElementSibling);
console.log(h2.nextElementSibling);

console.log(h2.previousSibling);
console.log(h2.nextSibling);

console.log(h2.parentElement.children);
[...h2.parentElement.children].forEach(function(el) {
    if (el !== h2) el.style.transform = 'scale(0.5)';
});
////////////////////////////////////////////////////////////////////////
//hàm out GG chỏml có lười nhắc

document.addEventListener('DOMContentLoaded', function(e) {
    console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function(e) {
    console.log('Page fully loaded', e);
});
window.addEventListener('beforeunload', function(e) {
    console.log('e');
    e.returnValue = '';
})