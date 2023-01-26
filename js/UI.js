export const UI_ELEMENTS = {
  MODALS_CONTENT: document.querySelector('.modals__content'),
  MODALS_SETTINGS_BTN: document.querySelector('.chat__top-btn--setings'),
  MODALS_SETTINGS: document.querySelector('.modals__settings'),
  MODALS: document.querySelector('.modals'),
  MODALS_OVERLAY: document.querySelector('.modals__overlay'),
  MODALS_CLOSE: document.querySelector('.modals__close-btn'),
  TEMPLATE: document.querySelector('.template'),
  MESSAGE_FORM: document.querySelector('.chat__message-form'),
  MESSAGE_LIST: document.querySelector('.chat__content'),
  MESSAGE_TEXT_VALUE: document.querySelector('.chat__message-input'),
  MESSAGE_WRAPPER: document.querySelector('.chat__content-wrapper'),
};

function showSettingsModal() {
  UI_ELEMENTS.MODALS_SETTINGS.classList.add('modals-show');
}

export function showModals(e) {
  UI_ELEMENTS.MODALS.classList.add('modals-show');
  switch (e.target) {
    case UI_ELEMENTS.MODALS_SETTINGS_BTN:
      showSettingsModal();
      break;
    default:
      break;
  }
}

export function closeModals() {
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
