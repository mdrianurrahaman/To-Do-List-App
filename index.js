const todoInput =  document.getElementById('todoInput');
const addBtn    =  document.getElementById('addBtn');
const todoList =  document.getElementById('todoList');


addBtn.addEventListener('click',addTodo);


function addTodo(){

const todoText = todoInput.value;

const listItem = document.createElement('li');

listItem.innerHTML = todoText;

todoList.appendChild(listItem);

todoInput.value = '';


}
