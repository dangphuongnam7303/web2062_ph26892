'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function(data, className = '') {
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    // countriesContainer.style.opacity = 1;
};

const request = fetch('https://restcountries.com/v2/name/vietnam');
console.log(request);

// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v2/name/${country}`).then(function(response) {
//         console.log(response);
//         return response.json();
//     }).then(function(data) {
//         console.log(data);
//         renderCountry(data[0]);
//     });
// }

const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
}

const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

// const getCountryData = function(country) {
//     // Country 1
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(response => {
//             console.log(response);

//             if (!response.ok) {
//                 throw new Error(`Country not found (${response.status})`);
//             }

//             return response.json()
//         })
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbors = data[0].borders;

//             if (!neighbors) return;

//             // Country 2
//             return fetch(`https://restcountries.com/v2/alpha/${neighbors[0]}`);
//         })
//         .then(response => response.json())
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             console.error(`${err} 💥💥💥`);
//             renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
// }

const getCountryData = function(country) {
    // Country 1
    getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
        .then(data => {
            renderCountry(data[0]);
            const neighbors = data[0].borders;
            // console.log(neighbors);

            if (!neighbors) throw new Error('No neighbor found!');

            // Country 2
            return getJSON(`https://restcountries.com/v2/alpha/${neighbors[0]}`, 'Country not found');
        })
        .then(data => renderCountry(data, 'neighbors'))
        .catch(err => {
            console.error(`${err} 💥💥💥`);
            renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
}

btn.addEventListener('click', function() {
    getCountryData('vietnam');
});

// check lỗi 404
getCountryData('australia');
// getCountryData('dfdsdfdsf');