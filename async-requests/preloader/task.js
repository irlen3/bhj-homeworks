// Загрузите данные о курсе валют, отправив GET-запрос по адресу https://netology-slow-rest.herokuapp.com
// По факту загрузки скройте анимацию загрузки

let request = new XMLHttpRequest(); // создаем экземпляр объекта XMLHttpRequest
let loader, data;
let items = document.getElementById('items');

request.open('GET', 'https://netology-slow-rest.herokuapp.com');// создаем запрос

request.addEventListener('readystatechange', function() { 
    if (request.readyState === request.DONE && request.status === 200) {
        loader = document.getElementById('loader');
        loader.classList.remove('loader_active');

        data = JSON.parse(this.responseText);
        data = data.response.Valute;
        let outputCode, outputValue, output;
        let outputCurrency = '<div class="item__currency">руб.</div>';4
        
        for (let key in data) {
            outputCode = '<div class="item__code">' + data[key].CharCode + '</div>';
            outputValue = '<div class="item__value">' + data[key].Value + '</div>';
            output = '<div class="item">' + outputCode + outputValue + outputCurrency + '</div>';
            items.innerHTML += output;
        }  
    }
});

request.send(); //этод метод открывает соединение и отправляет запрос на сервер
