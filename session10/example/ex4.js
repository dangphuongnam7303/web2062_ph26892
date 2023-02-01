const oneWord = function (str) {
    return str.replace(/ /g, ' ').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//higher order functions
const transformer = function (str, fn) {
    console.log(`Transformer string: ${str}`);
    console.log(`Transformer function: ${fn(str)}`);

    console.log(`Transformer by: ${fn.name}`);
}
transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);
// js uses callback all the time
const high5 = function () {
    console.log('bird');
};
document.body.addEventListener('click', high5);
['jonas', 'martha', 'adam'].forEach(high5);
