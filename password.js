const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_-+=<>?/';

function getRandomChar(str) {
    return str.charAt(Math.floor(Math.random() * str.length));
}

function generatePassword() {
    let passwordLength = document.getElementById("length").value;
    let includeUppercase = document.getElementById("uppercase").checked;
    let includeLowercase = document.getElementById("lowercase").checked;
    let includeNumbers = document.getElementById("numbers").checked;
    let includeSymbols = document.getElementById("symbols").checked;

    let allowedChars = '';

    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
        generatedPassword += getRandomChar(allowedChars);
    }

    document.getElementById("passwordOutput").value = generatedPassword;
}


