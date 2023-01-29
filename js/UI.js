export const UI_ELEMENTS = {
  MODALS_CONTENT: document.querySelectorAll('.modals__content'),
  MODALS_SETTINGS_BTN: document.querySelector('.chat__top-btn--setings'),
  MODALS_SETTINGS: document.querySelector('.modals__settings'),
  SETTINGS_FORM: document.querySelector('.modals__settings-form'),
  SETTINGS_INPUT: document.querySelector('.modals__settings-input'),
  MODALS_LOGIN_BTN: document.querySelector('.chat__top-btn--login'),
  MODALS_LOGIN: document.querySelector('.modals__login'),
  MODALS: document.querySelector('.modals'),
  MODALS_OVERLAY: document.querySelector('.modals__overlay'),
  MODALS_CLOSE: document.querySelectorAll('.modals__close-btn'),
  TEMPLATE: document.querySelector('.template'),
  MESSAGE_FORM: document.querySelector('.chat__message-form'),
  MESSAGE_LIST: document.querySelector('.chat__content'),
  MESSAGE_TEXT_VALUE: document.querySelector('.chat__message-input'),
  MESSAGE_WRAPPER: document.querySelector('.chat__content-wrapper'),
  LOGIN_FORM: document.querySelector('.modals__login-form'),
  LOGIN_INPUT: document.querySelector('.modals__login-input'),
  LOGIN_FORM_SUCCESSFUL: document.querySelector('.modals__login-successful'),
  LOGIN_NEXT_BTN: document.querySelector('.modals__login-next-btn'),
  MODALS_CONFIRMATIONS: document.querySelector('.modals__confirmation'),
  CONFIRMATION_FORM: document.querySelector('.modals__confirmation-form'),
  CONFIRMATION_INPUT: document.querySelector('.modals__confirmation-input'),
};

function showSettingsModal() {
  UI_ELEMENTS.MODALS_SETTINGS.classList.add('modals-show');
}

function showLoginModal() {
  UI_ELEMENTS.MODALS_LOGIN.classList.add('modals-show');
}

function showConfirmationModal() {
  UI_ELEMENTS.MODALS_LOGIN.classList.remove('modals-show');
  UI_ELEMENTS.MODALS_CONFIRMATIONS.classList.add('modals-show');
}

export function showModals(e) {
  UI_ELEMENTS.MODALS.classList.add('modals-show');
  switch (e.target) {
    case UI_ELEMENTS.MODALS_SETTINGS_BTN:
      showSettingsModal();
      break;
    case UI_ELEMENTS.MODALS_LOGIN_BTN:
      showLoginModal();
      break;
    case UI_ELEMENTS.LOGIN_NEXT_BTN:
      showConfirmationModal();
      break;
    default:
      break;
  }
}

export function closeModals() {
  UI_ELEMENTS.MODALS_CONTENT.forEach((item) => item.classList.remove('modals-show'));
  UI_ELEMENTS.MODALS_SETTINGS.classList.remove('modals-show');
  UI_ELEMENTS.MODALS.classList.remove('modals-show');
}

function scrollListToBottom() {
  UI_ELEMENTS.MESSAGE_WRAPPER.scrollTop = UI_ELEMENTS.MESSAGE_WRAPPER.scrollHeight;
}

export function showNewMessage(e) {
  e.preventDefault();
  const textValue = UI_ELEMENTS.MESSAGE_TEXT_VALUE.value;
  const itemMessage = UI_ELEMENTS.TEMPLATE.content.cloneNode(true);
  const textMessage = itemMessage.querySelector('.chat__content-item-text');
  const timeMessage = itemMessage.querySelector('.chat__content-item-time');
  if (textValue === '' || textValue.trim() === '') {
    return;
  }
  textMessage.textContent = textValue.trim();
  timeMessage.textContent = '17:33';
  UI_ELEMENTS.MESSAGE_LIST.append(itemMessage);
  e.target.reset();
  scrollListToBottom();
}

export function showSuccessfulSending() {
  UI_ELEMENTS.LOGIN_FORM_SUCCESSFUL.textContent = 'Код отправлен';
  UI_ELEMENTS.LOGIN_FORM_SUCCESSFUL.classList.add('modals__login-successful--green');

  setTimeout(() => {
    UI_ELEMENTS.LOGIN_FORM_SUCCESSFUL.textContent = '';
  }, 7000);
}
