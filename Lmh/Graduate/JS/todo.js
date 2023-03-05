const todoForm=document.querySelector("#todo-form");
const todoInput=todoForm.querySelector("input");
const todoList=document.querySelector("#todo-list");
const TODO_KEY="todos";
let toDos=[];

function deleteToDO(event){
    const li=event.target.parentNode;
    li.remove();
    toDos= toDos.filter((toDo)=> toDo.id !== parseInt(li.id));
    saveTodos();
}

function saveTodos(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDo){
    const li=document.createElement("li");
    li.id=newToDo.id;
    const span=document.createElement("span");
    span.innerText=newToDo.text;
    const button=document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteToDO);
    li.appendChild(span);
    li.appendChild(button);
    todoList.append(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const TODO_INPUT=todoInput.value;
    todoInput.value="";
    const todoObj={text:TODO_INPUT, id:Date.now(),};
    toDos.push(todoObj);
    paintToDo(todoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const loadToDos= localStorage.getItem(TODO_KEY);

if(loadToDos !== null){//localStorage has datas with TODO_LIST
    const parsedTodos=JSON.parse(loadToDos);
    toDos=parsedTodos;
    parsedTodos.forEach(paintToDo);
}
