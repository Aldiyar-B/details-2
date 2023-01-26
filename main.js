const UI = {
    INPUT_FORM: document.querySelector('.input__form'),
    INPUT_FORM_MESSAGE: document.getElementById('message'),
    CHAT: document.querySelector('.chat'),
    TEMPLATE: document.getElementById('template'),
};

function createNewMessage(textInput) {
    if (textInput === '') {
        return;
    }

    const TIME = newDate();
    const CLONE = UI.TEMPLATE.content.cloneNode(true);

    CLONE.querySelector('.time').textContent = TIME;
    CLONE.querySelector('.message__text').textContent = textInput;

    UI.CHAT.prepend(CLONE);
}

function newDate() {
    const DATE = new Date();
    const MESSAGE_TIME = DATE.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });
    return MESSAGE_TIME;
}

UI.INPUT_FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    const TEXT_INPUT = UI.INPUT_FORM_MESSAGE.value;
    UI.INPUT_FORM_MESSAGE.value = '';

    createNewMessage(TEXT_INPUT);
});
