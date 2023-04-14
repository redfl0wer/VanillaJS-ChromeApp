const todoButton = document.querySelector(".todo-pop");
const todoScreen = document.querySelector(".todo-container");
const todoCloseButton = document.querySelector(".todo-close-button");

todoButton.addEventListener("click", openTodo);
todoCloseButton.addEventListener("click", closeTodo);

function openTodo(event){
  event.preventDefault();
  todoScreen.classList.remove('hidden');
}

function closeTodo(event){
  event.preventDefault();
  todoScreen.classList.add('hidden');
}
