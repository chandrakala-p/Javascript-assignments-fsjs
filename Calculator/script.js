
const button = document.querySelectorAll('.button');



function insert(num) {
  document.querySelector(".textview").value += num;

}


function equals() {
  let prev_operand = document.querySelector(".textview").value
  let next_operand = eval(prev_operand)
  document.querySelector(".textview").value = next_operand

}

function clean() {
  document.querySelector(".textview").value = '';
}

function back() {
  let expression1 = document.querySelector(".textview").value;
  document.querySelector(".textview").value = expression1.substring(0, expression1.length - 1);

}