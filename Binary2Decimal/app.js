
const btn = document.querySelector(".btn");




btn.addEventListener("click", () => {
    let result = document.querySelector(".result");
    let binaryNumber = document.getElementById("binary");
    let decimalValue = parseInt(binaryNumber.value, 2);
    result.innerHTML = "Decimal Number : " + decimalValue
});