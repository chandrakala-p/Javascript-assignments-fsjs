const button = document.getElementById('button');
const canvas = document.getElementById('canvas');

function getColor() {

    let choose = "0123456789ABCDEFGH"
    let color = "#"

    for (let i = 0; i < 6; i++) {
        color = color + choose[Math.floor((Math.random(choose)) * 18)];
    }
    return color;
}

console.log(getColor());


function changeColor() {
    canvas.style.backgroundColor = getColor();
}


button.addEventListener("click", changeColor);

