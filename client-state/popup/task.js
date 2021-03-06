// После закрытия окна, установите в cookie-файле информацию о закрытии окна
// Если после перезагрузки в cookie нет информации о закрытии, необходимо окно показать.
// Если страница была перезагружена с показанным окном, в cookie-файл не нужно ничего вносить

window.onload = function(modal) {
    // document.cookie = 'modal=; Expires=Thu, 01 Jan 1970 00:00:00 GMT'; // удаление cookies
    const value = document.cookie;
    let parts = value.split('=');
    let status = parts.pop();
    if(status !== 'closed') {
        document.getElementById('subscribe-modal').classList.add('modal_active');
    }
 }

function closeModal() {
    const modalActive = this.closest('.modal_active');
    modalActive.style.visibility = "hidden";
    document.cookie = "modal=closed";
    // alert(document.cookie);
}

const modalButtons = document.querySelectorAll('.modal__close');
for (const button of modalButtons ){
    button.addEventListener('click', closeModal); 
}