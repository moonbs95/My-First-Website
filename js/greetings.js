const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greetings = document.querySelector("#greetings");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    const greetingsArray = [`Hello ${username}`, `How is it going, ${username}?`, `Welcome ${username}`];
    const randomGreetings = greetingsArray[Math.round(Math.random() * (greetingsArray.length-1))];
    greetings.innerText = randomGreetings;
    greetings.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}