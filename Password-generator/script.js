const display_span = document.getElementById('display');
const passLength_input = document.getElementById('length');
const upperCase_checkbox = document.getElementById('upper');
const lowerCase_checkbox = document.getElementById('lower');
const numbers_checkbox = document.getElementById('numbers');
const symbols_checkbox = document.getElementById('symbols');
const generate_button = document.getElementById('generate');

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getUpperCase() {
    return upperCase[Math.floor(Math.random() *upperCase.length)];
}
function getLowerCase() {
    return lowerCase[Math.floor(Math.random() *lowerCase.length)];
}
function getNumber() {
    return numbers[Math.floor(Math.random() *numbers.length)];
}
function getSymbol() {
    return symbols[Math.floor(Math.random() *symbols.length)];
}

function generatePassword() {
    const len = passLength_input.value; 
    let password = '';

    if(lowerCase_checkbox.checked) {
        password += getLowerCase();
    }
    if(upperCase_checkbox.checked) {
        password += getUpperCase();
    }
    if(numbers_checkbox.checked) {
        password += getNumber();
    }
    if(symbols_checkbox.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    display.innerText = password;
}

function generateX() {
    const xs = [];
    if (upperCase_checkbox.checked) {
        xs.push(getUpperCase());
    }

    if (lowerCase_checkbox.checked) {
        xs.push(getLowerCase());
    }

    if (numbers_checkbox.checked) {
        xs.push(getNumber());
    }

    if (symbols_checkbox.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}


generate_button.addEventListener('click', generatePassword);

