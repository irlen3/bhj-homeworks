// Загрузите форму через AJAX по адресу https://netology-slow-rest.herokuapp.com/upload.php
// Отслеживайте событие изменения загрузки и в соответствии с ним корректируйте прогресс

let form = document.getElementById('form');
let percentLoad;

form.addEventListener('submit',(e)=>{
    let formData = new FormData(form);
    let request = new XMLHttpRequest();
    request.open('POST','https://netology-slow-rest.herokuapp.com/upload.php');

    const progressStatus = document.getElementById('progress');
   
    request.upload.onprogress = function(event) {
        percentLoad = event.loaded / event.total;
        progressStatus.value = percentLoad;     
        // alert('Загружено на сервер ' + event.loaded + ' байт из ' + event.total);
    };

    // request.upload.onload = function() { alert( 'Данные полностью загружены на сервер!' ); }
    request.send(formData);
    e.preventDefault();
});
