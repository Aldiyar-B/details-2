const BUTTONS = {
    popupName: document.getElementById('popupName'),
    settingsButton: document.querySelector('.settings'),
    popupNameCloseButton: document.querySelector('.popupName__close-btn'),
    wrapper: document.querySelector('.wrapper'),
};

BUTTONS.settingsButton.addEventListener('click', () => {
    BUTTONS.popupName.classList.remove('popup__hidden');
    BUTTONS.wrapper.classList.add('wrapper__dark');
});

BUTTONS.popupNameCloseButton.addEventListener('click', () => {
    BUTTONS.popupName.classList.add('popup__hidden');
    BUTTONS.wrapper.classList.remove('wrapper__dark');
});
