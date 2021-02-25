// Реализуйте добавление задач по нажатию клавиши Enter при наличии текста в поле ввода
// Реализуйте механизм удаления задач
const tasksInput = document.querySelector('.tasks__input');
const button =  document.querySelector('.tasks__add');
const taskList = document.querySelector('.tasks__list');
button.addEventListener('click', changeList);
let taskAdd;

function changeList(event) {
    if(tasksInput.value) {
        taskAdd = document.createElement('div');
        taskAdd.classList.add('task');
        taskAdd.insertAdjacentHTML('beforeEnd', '<div class="task__title">' + tasksInput.value + '</div> <a href="#" class="task__remove">&times;</a>');
        taskAdd.addEventListener('click', (event) => {
            event.target.parentElement.remove();
        });
        taskList.appendChild(taskAdd);
        tasksInput.value = '';
        event.preventDefault();
    }
}
