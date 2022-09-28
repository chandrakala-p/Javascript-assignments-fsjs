const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase').checked
const lowercaseEl = document.getElementById('lowercase').checked
const numbersEl = document.getElementById('numbers').checked
const symbolsEl = document.getElementById('symbols').checked
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')





const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}
// console.log(randomFunc.lower())

clipboardEl.addEventListener('click', () => {

})

generateEl.addEventListener('click', generatePassword)

function generatePassword(lower, upper, number, symbol, length) {
    if (uppercaseEl + lowercaseEl + numbersEl + symbolsEl === 0) {
        alert("Please check atleast one box!");
        return;
    }

    let password = "";
    while (lengthEl.value > password.length) {
        let keyToAdd = randomFunc[Math.floor(Math.random() * randomFunc.length)];
        let isChecked = document.getElementById(keyToAdd.name).checked;
        if (isChecked) {
            password += keyToAdd();
        }
    }
    resultEl.innerHTML = password;


}

function getRandomLower() {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    return lowercase[Math.floor(Math.random() * lowercase.length)]

}



function getRandomUpper() {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //console.log(uppercase[Math.floor(Math.random() * uppercase.length)])
    return uppercase[Math.floor(Math.random() * uppercase.length)]

}

function getRandomNumber() {

    return Math.floor(Math.random() * 10);
}


function getRandomSymbol() {
    const randomSpecial = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";

    return randomSpecial[Math.floor(Math.random() * randomSpecial.length)]

}