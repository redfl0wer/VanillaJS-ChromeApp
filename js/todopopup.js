const todoButton = document.querySelector(".todo-pop");
const todoScreen = document.querySelector(".todo-container");

todoButton.addEventListener("click", openTodo);

function openTodo(event){
  event.preventDefault();
  todoScreen.classList.remove('hidden');
}

