// Реализуйте механизм авторизации. Для этого передайте данные формы с помощью POST-запроса по адресу https://netology-slow-rest.herokuapp.com/auth.php
// После успешного входа, сохраните полученный id-пользователя в локальное хранилище
// При успешной авторизации, задайте id пользователя в блок #welcome и отобразите его
// Если авторизация не удалась, выведите сообщение «Неверный логин/пароль»
// При загрузке страницы, в случае, если в локальном хранилище имеется id пользователя, выведите блок #welcome с заданным id пользователя

let signin = document.querySelector('.signin');
signin.classList.add('signin_active');
let button = document.querySelector('.btn');
let form = document.getElementById('signin__form');
let welcome = document.querySelector('.welcome');
let data;

button.addEventListener('click',(e)=>{
    let request = new XMLHttpRequest();
    let formData = new FormData(form);
    request.open('POST','https://netology-slow-rest.herokuapp.com/auth.php');

    request.addEventListener('readystatechange', function() { 
        if (request.readyState === request.DONE && request.status === 200) {
            data = JSON.parse(this.responseText);
            if(data.success === true) {
                if (localStorage.getItem("user_id")) {
                    document.getElementById('user_id').innerText = localStorage.getItem("user_id");5
                    signin.classList.remove('signin_active');
                    welcome.classList.add('welcome_active');
                } else {
                    localStorage.setItem("user_id", data.user_id);
                    document.getElementById('user_id').innerText = data.user_id;
                    signin.classList.remove('signin_active');
                    welcome.classList.add('welcome_active');
                }
            } else {
                alert('Неверный логин/пароль');
            }      
        }
    });
    request.send(formData);
    e.preventDefault();
});
