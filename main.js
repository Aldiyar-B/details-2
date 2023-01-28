const UI_CHAT_PAGE = {
    FORM: document.querySelector('.input__form'),
    INPUT_FORM_MESSAGE: document.getElementById('message'),
    HISTORY: document.querySelector('.chat'),
    TEMPLATE: document.getElementById('template'),
};

function createNewMessage(textInput) {
    let message = textInput.trim();
    if (message === '') {
        return;
    }

    const TIME = newDate();
    const CLONE = UI_CHAT_PAGE.TEMPLATE.content.cloneNode(true);

    CLONE.querySelector('.time').textContent = TIME;
    CLONE.querySelector('.message__text').textContent = message;

    UI_CHAT_PAGE.HISTORY.prepend(CLONE);
}

function newDate() {
    const DATE = new Date();
    const MESSAGE_TIME = DATE.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });
    return MESSAGE_TIME;
}

UI_CHAT_PAGE.FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    const TEXT_INPUT = UI_CHAT_PAGE.INPUT_FORM_MESSAGE.value;

    UI_CHAT_PAGE.INPUT_FORM_MESSAGE.value = '';

    createNewMessage(TEXT_INPUT);
});
