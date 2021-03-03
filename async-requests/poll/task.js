// Загрузите случайный опрос, отправив GET-запрос по адресу: https://netology-slow-rest.herokuapp.com/poll.php
// Отобразите вопрос и список ответов в виде кнопок
// При нажатии на какую-либо кнопку, выведите диалоговое окно с надписью «Спасибо, ваш голос засчитан!»

let request = new XMLHttpRequest(); // создаем экземпляр объекта XMLHttpRequest
let info, question, pollTitle, pollAnswers, button;
pollTitle = document.querySelector('.poll__title');
pollAnswers = document.querySelector('.poll__answers');

request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');// создаем запрос

request.addEventListener('readystatechange', function() { 
    if (request.readyState === request.DONE && request.status === 200) {
        info = JSON.parse(this.responseText);
        question = info.data.title;
        pollTitle.textContent = question;

        for (let i=0; i< info.data.answers.length; i++) {
            button = '<button class="poll__answer">' + info.data.answers[i] + '</button>';
            pollAnswers.innerHTML += button;
        }  
        
        let buttonClick = document.querySelectorAll('.poll__answer');
        for (let but of buttonClick) {
            but.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
        }  
    }
});

request.send(); //этод метод открывает соединение и отправляет запрос на сервер

