const input = document.getElementById("input");
const submit = document.getElementById("submit");
const img = document.getElementById("img");

submit.addEventListener("click", () => {
    const dataValue = input.value;

    fetch(` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${dataValue}`).then(response => {
        img.setAttribute("src", response.url);
        img.style.display = "block";
    }
    )


});