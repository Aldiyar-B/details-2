const POP_UP = {
    BTN_SETTINGS: document.querySelector('.btn-settings'),
    CLOSE_SETTINGS: document.querySelector('.close-window'),
    SETTINGS_BLOCK: document.querySelector('.settings_wrapper'),
};

const FORM = {
    MAIN: document.querySelector('.main-form'),
    MESSAGE_INPUT: document.querySelector('.bottom-input'),
    BLOCK_FOR_MESSAGES: document.querySelector('.message-block'),
    SEND_BTN: document.querySelector('.bottom-send'),
};

const AUTHORIZATION = {
    POST_INPUT: document.querySelector('.input-post'),
    CODE_BTN: document.querySelector('.get-code'),
    URL: 'https://edu.strada.one/api/user',
};

POP_UP.BTN_SETTINGS.addEventListener('click', showSettings);

POP_UP.CLOSE_SETTINGS.addEventListener('click', hideSettings);

FORM.MAIN.addEventListener('submit', (event)=> {
    event.preventDefault();
    sendMyMessage();
    FORM.MESSAGE_INPUT.value = '';
});

AUTHORIZATION.CODE_BTN.addEventListener('click', (event)=> {
    event.preventDefault();
    getCode();
});

async function getCode() {
    const body = {
        email: AUTHORIZATION.POST_INPUT.value,
    }; 
    try {
        let response = await fetch(AUTHORIZATION.URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        if(!response.ok) {
            throw Error(response.statusText);
        } else {
            console.log(response);
        }
    } catch (err) {
        alert('Ошибка');
    }
}

function showSettings() {
    POP_UP.SETTINGS_BLOCK.classList.add('visible');
}

function hideSettings() {
    POP_UP.SETTINGS_BLOCK.classList.remove('visible');
}

function sendMyMessage() {
    const message = FORM.MESSAGE_INPUT.value;
    if(message.length === 0) {
        return;
    } else {
        createMyMessage('Nastya', message, ShowTime());
    }
}

function createMyMessage(name, message, time) {
    const newMessage = document.querySelector('#my_message');
    const myName = newMessage.content.querySelector('.my-name-message');
    myName.textContent = name;
    const myMessage = newMessage.content.querySelector('.my_message_view');
    myMessage.textContent  = message;
    const date = newMessage.content.querySelector('.time-my-message');
    date.textContent  = time;
    let newEl = newMessage.content.cloneNode(true);
    FORM.BLOCK_FOR_MESSAGES.append(newEl);
}

function ShowTime() {
    let hours = showZero(new Date().getHours());
    let minutes = showZero(new Date().getMinutes());
    return `${hours}:${minutes}`;
}

function showZero(value) {
    return value < 10 ? '0' + value : value;
}





