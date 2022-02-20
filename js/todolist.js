const toDoForm = document.querySelector("#todo-form")
const toDoInput = toDoForm.querySelector("input")

const toDoList = document.querySelector("#todo-list")

let toDos = [];
const TODOS_KEY = "todos";



function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    saveToDos();
}

function toDoColorToggle(event) {
    const li = event.target.parentElement;
    li.classList.toggle("blue")
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;

    const span = document.createElement("span");
    span.innerText = newToDo.text;
    span.addEventListener("click", toDoColorToggle)

    const space = document.createElement("span");
    space.innerText = '  ';

    const button = document.createElement("span");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(space)
    li.appendChild(button);


    toDoList.appendChild(li);
}

function toDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDoInput.value = "";
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}


toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}