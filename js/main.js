import { UI_ELEMENTS, showModals, closeModals, showNewMessage, showSuccessfulSending } from './UI';
import { getCookie, setCookie } from './storage';

UI_ELEMENTS.MODALS_SETTINGS_BTN.addEventListener('click', showModals);
UI_ELEMENTS.MODALS_CLOSE.forEach((item) => item.addEventListener('click', closeModals));
UI_ELEMENTS.MESSAGE_FORM.addEventListener('submit', showNewMessage);
UI_ELEMENTS.MODALS_LOGIN_BTN.addEventListener('click', showModals);
UI_ELEMENTS.LOGIN_NEXT_BTN.addEventListener('click', showModals);

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

async function changeName() {
  event.preventDefault();
  const userName = UI_ELEMENTS.SETTINGS_INPUT.value;
  const name = {
    name: `${userName}`,
  };
  const token = getCookie('key');
  const response = await fetch('https://edu.strada.one/api/user', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(name),
  });
}

UI_ELEMENTS.LOGIN_FORM.addEventListener('submit', getCodeByEmail);
UI_ELEMENTS.CONFIRMATION_FORM.addEventListener('submit', () => {
  setCookie(UI_ELEMENTS.CONFIRMATION_INPUT.value);
});
UI_ELEMENTS.SETTINGS_FORM.addEventListener('submit', changeName);
