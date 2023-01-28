const BUTTONS = {
    POPUP_SETTINGS: document.getElementById('popupNameSetings'),
    SETTINGS: document.querySelector('.settings'),
    CLOSE: document.querySelector('.popupName__close-btn'),
    WRAPPER: document.querySelector('.wrapper'),
    GET_CODE: document.querySelector('.get__code'),
    ENTRY: document.querySelector('.entry'),
};

BUTTONS.SETTINGS.addEventListener('click', () => {
    BUTTONS.POPUP_SETTINGS.classList.remove('popup__hidden');
    BUTTONS.WRAPPER.classList.add('wrapper__dark');
});

BUTTONS.CLOSE.addEventListener('click', () => {
    BUTTONS.POPUP_SETTINGS.classList.add('popup__hidden');
    BUTTONS.WRAPPER.classList.remove('wrapper__dark');
});
