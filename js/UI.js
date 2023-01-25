export const UI_ELEMENTS = {
  MODALS_SETTINGS_BTN: document.querySelector('.chat__top-btn--setings'),
  MODALS_SETTINGS: document.querySelector('.modals__settings'),
  MODALS: document.querySelector('.modals'),
  MODALS_OVERLAY: document.querySelector('.modals__overlay'),
  MODALS_CLOSE: document.querySelector('.modals__close-btn'),
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
