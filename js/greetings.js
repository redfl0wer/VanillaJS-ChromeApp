const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

let greeting_word;

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  loginForm.classList.remove("login-form");
  clock.style.transform = 'translate(18vw, -38.3vh) scale(0.5)';
  clock.style.transition = 'all 1s ease';
  clock.style.fontSize = '110px';
}

if (String(date.getHours()) >= 6 && String(date.getHours()) <= 11){
  greeting_word = "Good Morning";
}
else if (String(date.getHours()) >= 12 && String(date.getHours()) <= 17){
  greeting_word = "Good Afternoon";
}
else if (String(date.getHours()) >= 18 && String(date.getHours()) <= 20){
  greeting_word = "Good Evening";
}
else if (String(date.getHours()) >= 21 && String(date.getHours()) <= 23){
  greeting_word = "Good Night";
}
else{
  greeting_word = "It's Midnight";
}

function paintGreetings(username) {
  greeting.innerText = `${greeting_word}, ${username}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.remove("login-form");
  paintGreetings(savedUsername);
  clock.style.transform = 'translate(18vw, -38.3vh) scale(0.5)';
  clock.style.fontSize = '110px';
}
