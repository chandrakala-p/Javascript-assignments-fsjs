const camelCaseEle = document.getElementById("camel-case");
const pascalCaseEle = document.getElementById("pascal-case");
const snakeCaseEle = document.getElementById("snake-case");
const screamingSnakeCaseEle = document.getElementById("screaming-snake-case");
const kebabCaseEle = document.getElementById("kebab-case");
const screamingKebabCaseEle = document.getElementById("screaming-kebab-case");

const inputValue = document.getElementById("text");


// to convert into camel case
function tocamelCase(text) {
    const textArray = text.split(" ");
    const arr = textArray.map((ele, index) => {
        if (index == 0) {
            return ele.toLowerCase()
        }
        else {
            const firstLetter = ele[0].toUpperCase();
            const restOfLetters = ele.slice(1);
            return firstLetter + restOfLetters
        }
    })
    return arr.join("");
}

//to convert into Pascal case
function toPascalCase(text) {
    const textArray = text.split(" ");
    const arr = textArray.map((ele) => {
        const firstLetter = ele[0].toUpperCase();
        const restOfLetters = ele.slice(1);
        return firstLetter + restOfLetters

    })
    return arr.join("");
}

// console.log(toPascalCase("chan kala hello"));


//to convert into snake case
function toSnakecase(text) {
    const textArray = text.split(" ");
    return textArray.join("_");
}

console.log(toSnakecase("chan Kala hello"))

//to Convert into Screamin Snake Case
function toScreamingSnakeCase(text) {
    const textArray = text.toUpperCase().split(" ");
    return textArray.join("_");

}

console.log(toScreamingSnakeCase("chan Kala hi"))


//to convert into a Kebab Case
function toKebabcase(text) {
    const textArray = text.split(" ");
    return textArray.join("-");
}


//to Convert into Screamin Kebab Case
function toScreamingKebabCase(text) {
    const textArray = text.toUpperCase().split(" ");
    return textArray.join("-");
}


inputValue.addEventListener("input", (e) => {
    const text = e.target.value;

    camelCaseEle.innerText = tocamelCase(text);
    pascalCaseEle.innerText = toPascalCase(text);
    snakeCaseEle.innerText = toSnakecase(text);
    screamingSnakeCaseEle.innerText = toScreamingSnakeCase(text);
    kebabCaseEle.innerText = toKebabcase(text)
    screamingKebabCaseEle.innerText = toScreamingKebabCase(text);

})




