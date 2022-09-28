
const container = document.querySelector(".container");
const addButton = document.querySelector(".addButton");



function addTodo() {


    const div = document.createElement("div")
    div.className = "item";
    div.style.display = "flex";

    const input = document.querySelector(".input").value;
    const todo = document.createElement("h2");
    todo.innerText = input;
    todo.className = "item_input";
    todo.style.color = "#ffffff"
    todo.style.fontSize = "24px"
    div.appendChild(todo);


    const edit = document.createElement("h2");
    edit.textContent = "EDIT";
    edit.className = "editButton"
    div.appendChild(edit)

    const del = document.createElement("h2");
    del.textContent = "DELETE";
    del.className = "deleteButton"
    div.appendChild(del)





    container.appendChild(div)




    console.log(todo)
}


addButton.addEventListener("click", addTodo)




