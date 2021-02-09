let activeList = document.querySelectorAll('.dropdown__value');
for (const list of activeList){
    list.addEventListener('click', openList);
}

let itemList = document.querySelectorAll('.dropdown__item');
for (const item of itemList){
    item.addEventListener('click', changeItem);
}

function openList(event) {
    let listClosest = event.target.nextElementSibling;
    if(listClosest.classList.contains('dropdown__list_active')) {
        listClosest.classList.remove('dropdown__list_active');
    } else {
        listClosest.classList.add('dropdown__list_active');
    }
    
}

function changeItem(event) {
    let listParent = this.parentElement;
    listParent.classList.remove('dropdown__list_active'); 
    listParent.previousElementSibling.textContent = this.innerText; // Устанавливать новое значение в элемент с классом dropdown__value
    event.preventDefault();
}