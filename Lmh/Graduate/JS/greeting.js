const loginForm=document.querySelector("#login-form");
const loginInput=loginForm.querySelector("input");
const greeting=document.querySelector("#greeting");
const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
    event.preventDefault();
    const username= loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("username", username);
    paintGreetings(username);
}

const savedUsername=localStorage.getItem(USERNAME_KEY);

function paintGreetings(username){
    greeting.innerText=`Nice to meet you ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUsername=== null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreetings(savedUsername);
}