import { UI_ELEMENTS, showModals, closeModals, showNewMessage, showSuccessfulSending } from './UI.js';

UI_ELEMENTS.MODALS_SETTINGS_BTN.addEventListener('click', showModals);
UI_ELEMENTS.MODALS_CLOSE.forEach((item) => item.addEventListener('click', closeModals));
UI_ELEMENTS.MESSAGE_FORM.addEventListener('submit', showNewMessage);
UI_ELEMENTS.MODALS_LOGIN_BTN.addEventListener('click', showModals);

async function getCodeByEmail(e) {
  e.preventDefault();
  const body = {
    email: UI_ELEMENTS.LOGIN_INPUT.value,
  };
  const response = await fetch('https://edu.strada.one/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (response.ok) {
    showSuccessfulSending();
  }
}

UI_ELEMENTS.LOGIN_FORM.addEventListener('submit', getCodeByEmail);
