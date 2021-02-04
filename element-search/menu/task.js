// Используя цикл зарегистрируйте обработчики события click на элементах с классом menu__link
let menuLinks = document.querySelectorAll('.menu__link');
for (const link of menuLinks){
    link.addEventListener('click', openMenu);
}

// Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс menu_active
function openMenu(event) {  
    let menuClosest = event.target.nextElementSibling;
    if(menuClosest.classList.contains('menu_active')) {
        menuClosest.classList.remove('menu_active');
        event.preventDefault();
    } else {
        let menuSubs = document.querySelectorAll('.menu_sub');
        for (i=0; i < menuSubs.length; i++) {
            if(menuSubs[i].classList.contains('menu_active'))
                menuSubs[i].classList.remove('menu_active');      
        }
        menuClosest.classList.add('menu_active');

// Запрещайте переход по ссылке для тех, что имеют вложенное меню.  
// Остальные пункты меню4должны без помех переводить пользователя на соответствующие страницы.
        if(!menuClosest.nextElementSibling) {
            event.preventDefault();
        }  
    }
}



