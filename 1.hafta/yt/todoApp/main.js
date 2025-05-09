// Add butonuna tıklanıp tıklanmadığını dinle
// tıklandığında, inputun icerigini al
// git yeni bir tane todo item elementi olustur
// ve git bunu DOM'un icerisine koy

// <!-- <li class="todoItem">
// <button class="completeButton">Complete</button>
// <button class="deleteButton">Delete</button>
// <p class="todoText">Text Something</p>
// </li>
// <li class="todoItem completed">
// <button class="completeButton">Complete</button>
// <button class="deleteButton">Delete</button>
// <p class="todoText">Text Something</p>
// </li> -->

const addTaskButton = document.querySelector('.addTask');
const todoInput = document.querySelector('.todoInput');
const todosContainer = document.querySelector('.todos');

const toggleComplete = (e) =>{
    const {parentElement} = e.currentTarget;

    const isCompleted = [...parentElement.classList].some(className => className === 'completed');

    if(!isCompleted){
        e.currentTarget.innerText = 'Todo';
    }else{
        e.currentTarget.parentElement.classList.toggle('completed');
    }

    
};

const removeItem = (e) =>{
    todosContainer.removeChild(e.currentTarget.parentElement);
}

const renderTodoItem = (todoText) => {
    const todoItemElement = document.createElement('li');
    todoItemElement.classList.add('todoItem');

    const completeButton = document.createElement('button');
    completeButton.classList.add('completeButton');
    completeButton.innerText = 'Complete';
    completeButton.addEventListener('click',toggleComplete)
    todoItemElement.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click',removeItem);
    todoItemElement.appendChild(deleteButton);
    
    const textElement = document.createElement('p');
    textElement.innerText = todoText;
    todoItemElement.appendChild(textElement);
    textElement.classList.add("todoText");

    todosContainer.appendChild(todoItemElement);
    todoInput.value = '';
    todoInput.focus();
};

const addTask = () =>{
    if(todoInput.value === ""){
        alert("input bos olamaz");
    }else{
        renderTodoItem(todoInput.value)
    }
};

addTaskButton.addEventListener('click', addTask);