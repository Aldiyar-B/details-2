const BUTTONS = {
    POPUP_NAME: document.getElementById('popupName'),
    SETTINGS_BUTTON: document.querySelector('.settings'),
    POPUP_NAME_CLOSE_BUTTON: document.querySelector('.popupName__close-btn'),
    WRAPPER: document.querySelector('.wrapper'),
};

BUTTONS.SETTINGS_BUTTON.addEventListener('click', () => {
    BUTTONS.POPUP_NAME.classList.remove('popup__hidden');
    BUTTONS.WRAPPER.classList.add('wrapper__dark');
});

BUTTONS.POPUP_NAME_CLOSE_BUTTON.addEventListener('click', () => {
    BUTTONS.POPUP_NAME.classList.add('popup__hidden');
    BUTTONS.WRAPPER.classList.remove('wrapper__dark');
});
