// Selectors..............................................

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Event Listeners........................................

todoButton.addEventListener('click', addTodo);




// Functions..............................................

function addTodo(event) {
    // Prevents form from Submitting......................
    event.preventDefault();
    // Todo div..........................................
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create Li.........................................
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check Mark Button.................................
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<li class="fas fa-check"></li>';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);
    // Check Trash Button.................................
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<li class="fas fa-trash"></li>';
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);
    // Append To List
    todoList.appendChild(todoDiv);
}