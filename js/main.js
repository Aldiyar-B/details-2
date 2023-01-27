import { UI_ELEMENTS, showModals, closeModals, showNewMessage } from './UI.js';

UI_ELEMENTS.MODALS_SETTINGS_BTN.addEventListener('click', showModals);
// UI_ELEMENTS.MODALS_CLOSE.addEventListener('click', closeModals);
UI_ELEMENTS.MODALS_CLOSE.forEach((item) => item.addEventListener('click', closeModals));
UI_ELEMENTS.MESSAGE_FORM.addEventListener('submit', showNewMessage);
UI_ELEMENTS.MODALS_LOGIN_BTN.addEventListener('click', showModals);

async function getCodeByEmail() {
  event.preventDefault();
  // const email = UI_ELEMENTS.LOGIN_INPUT.value;
  const userEmail = `email:${email}`
  const response = await fetch('https://edu.strada.one/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: `email: ${email}`,
  });
  console.log(response);
}

UI_ELEMENTS.LOGIN_FORM.addEventListener('submit', getCodeByEmail);
