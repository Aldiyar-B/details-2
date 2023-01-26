import { UI_ELEMENTS, showModals, closeModals, showNewMessage } from './UI.js';

UI_ELEMENTS.MODALS_SETTINGS_BTN.addEventListener('click', showModals);
UI_ELEMENTS.MODALS_CLOSE.addEventListener('click', closeModals);
UI_ELEMENTS.MESSAGE_FORM.addEventListener('submit', showNewMessage);
