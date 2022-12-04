const addForm = document.querySelector(".add");
const todoList = document.querySelector(".todos");
const search = document.querySelector(".search input");

//todo template

const generateTemplate = (newTodo) => {
  const htmlTemplate = `
    <li
    class="list-group-item d-flex justify-content-between align-items-center text-light"
  >
    <span>
      ${newTodo}
    </span>
    <i class="far fa-trash-alt delete"> </i>
  </li>`;

  todoList.innerHTML += htmlTemplate;
};

//add todos

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTodo = addForm.add.value.trim();
  if (newTodo.length) {
    generateTemplate(newTodo);
    addForm.reset();
  }
  console.log(newTodo);
});

//delete todos
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//search totods

const filterTodos = (searchTerm) => {
  Array.from(todoList.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(searchTerm))
    .forEach((todo) => todo.classList.add("filtred"));
  //if they do not match we add filtred class

  Array.from(todoList.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(searchTerm))
    .forEach((todo) => todo.classList.remove("filtred"));
  //if they match and have a filtred class we remove filtred
};

search.addEventListener("keyup", (event) => {
  event.preventDefault();
  const searchTerm = search.value.trim().toLowerCase();
  filterTodos(searchTerm);
});
