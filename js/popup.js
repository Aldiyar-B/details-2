
const popupLink = document.querySelectorAll('.-popup-link');
if (popupLink.length > 0) {
  popupLink.forEach((element) => {
    element.addEventListener('click', popupLinkHandler);
  });
}

function popupLinkHandler(event) {
  event.preventDefault();
  const element = event.target;
  const popupLink = element.getAttribute('href');
  popupOpen(popupLink);
}

function popupOpen(link) {
  const openPopup = document.querySelector('.popup_open');
  if (openPopup) {
    closePopup(openPopup);
  }
  const popup = document.querySelector(link);
  popup.classList.add('popup_open');
  eventPopup(popup);
}

function closePopup(openPopup) {
  openPopup.classList.remove('popup_open');
  openPopup.removeEventListener('click', popuphandler);
  document.removeEventListener('keydown', popuphandler);
}

function eventPopup(popup) {
  popup.addEventListener('click', popuphandler);
  document.addEventListener('keydown', popuphandler);
}

function popuphandler(event) {
  const clickElement = event.target;
  const popup = document.querySelector('.popup_open');
  if (
    clickElement.closest('.-close') ||
    !clickElement.closest('.popup__block') ||
    clickElement === 'Escape'
  ) {
    closePopup(popup);
  }
}