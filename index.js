const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");

button.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo)
todoList.addEventListener("click", completeTodo)
function addTodo(event) {
    event.preventDefault();
    // console.log(input.value);
    ////
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-container")
    // 
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item")
    todoItem.innerText = input.value;

    todoDiv.appendChild(todoItem)

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button")
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    todoDiv.appendChild(deleteButton)

    const completedButton = document.createElement("button");
    completedButton.classList.add("completed-button")
    completedButton.innerHTML = '<i class="fa-solid fa-check-double"></i>'
    todoDiv.appendChild(completedButton)
    // 
    ////

    todoList.appendChild(todoDiv)
    input.value = "";
    
}
function deleteTodo(event) {
    console.log(event.target);
    const item = event.target;

    if(item.classList[0] === "delete-button") {
        const delItem = item.parentElement;
        // console.log(delItem);
        delItem.remove();
    }
}
function completeTodo(event) {
        console.log(event.target);
        const item = event.target;
    
        if(item.classList[0] === "completed-button") {
            const delItem = item.parentElement;
            // console.log(delItem);
            delItem.classList.toggle("completed");
        }
    
}