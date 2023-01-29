import { UI } from './ui.js'

export function openPopup(item) {

    UI.SETTINGS_BUTTON.addEventListener('click', () => {
        item.classList.add('active');
    });

    UI.SETTINGS_CLOSE_BTN.addEventListener('click', () => {
        item.classList.remove('active');
    })

    document.addEventListener('click', (e) => {
        if(e.target === item){
            item.classList.remove('active');
        }
    })
};
openPopup(UI.POPUP_SETTINGS);