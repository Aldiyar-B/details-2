import { renderMessage, renderPopUp } from "./render.js";
import { ELEMENT, POPUP } from "./element.js";
import { authorizationUi } from "./autorization.js";
import { closeButton } from "./button.js";

const settingsButton = document.querySelector(".settings ");
const exitButton = document.querySelector(".exit");

renderPopUp(
  POPUP.AUTORIZATION.TITLE,
  POPUP.AUTORIZATION.FORM_TITLE,
  POPUP.AUTORIZATION.BUTTON
);
document.querySelector(".name-input").type = POPUP.AUTORIZATION.TYPE;
ELEMENT.WRAPPER.classList.add("active");
closeButton();
authorizationUi();
settingsButton.addEventListener("click", (event) => {
  event.preventDefault();
  renderPopUp(
    POPUP.SETTINGS.TITLE,
    POPUP.SETTINGS.FORM_TITLE,
    POPUP.SETTINGS.BUTTON
  );
  document.querySelector(".name-input").placeholder =
    POPUP.SETTINGS.PLACEHOLDER;
  ELEMENT.WRAPPER.classList.add("active");
  closeButton();
});

exitButton.addEventListener("click", (event) => {
  event.preventDefault();
  renderPopUp(
    POPUP.AUTORIZATION.TITLE,
    POPUP.AUTORIZATION.FORM_TITLE,
    POPUP.AUTORIZATION.BUTTON
  );
  document.querySelector(".name-input").type = POPUP.AUTORIZATION.TYPE;
  ELEMENT.WRAPPER.classList.add("active");
  closeButton();
  authorizationUi();
});

ELEMENT.MESSAGE_FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  const messageText = ELEMENT.INPUT_MESSAGE.value;
  if (messageText) {
    renderMessage(messageText);
  }
});
