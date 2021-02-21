// Реализуйте открытие окна чата при нажатии на красный боковой бэйдж
// По нажатию Enter, реализуйте отправку в чат непустого текстового сообщения
// Реализуйте ответ робота (случайное сообщение из списка)
// Проставляйте реальную дату переписки

const chat = document.querySelector('.chat-widget');
chat.addEventListener('click', () => {
    // chat.classList.contains('chat-widget_active') ? chat.classList.remove('chat-widget_active') : chat.classList.add('chat-widget_active');
    chat.classList.add('chat-widget_active');
});

const wingetInput = document.querySelector('.chat-widget__input');
wingetInput.addEventListener('change', () => {
    const messages = document.querySelector('.chat-widget__messages');
    let time = new Date().toLocaleTimeString('RU-RU', { hour: 'numeric', minute: 'numeric' });

    messages.innerHTML += `
    <div class="message message_client">
        <div class="message__time">`+ time + `</div>
        <div class="message__text">` + wingetInput.value +
        `</div>
    </div>
    `;
    
    time = new Date().toLocaleTimeString('RU-RU', { hour: 'numeric', minute: 'numeric' });
    messages.innerHTML += `
    <div class="message">
        <div class="message__time">`+ time + `</div>
        <div class="message__text">` + getWords() +
        `</div>
    </div>
    `;

    wingetInput.value = "";
});

function getWords() {
    const words = [
        'К сожалению все операторы заняты',
        'Добрый день, мы ещё не проснулись. Позвоните через час',
        'До свидания',
        'Приходите еще',
        'Рады были с вами пообщаться',
        'Рады были вам помочь',
        'Добрый день',
        'Чем можем помочь',
        'Мы сегодня не работаем. Позвоните завтра',
      ],
      index = Math.floor(Math.random() * words.length);
    return words[index];
  }
