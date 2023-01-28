import { ELEMENT } from "./element.js";
export function renderMessage(messageText) {
  const time = getTime();
  const messageBlock = tmpl.content.cloneNode(true);
  messageBlock.querySelector(".message").textContent = `Я: ${messageText}`;
  messageBlock.querySelector(".time").textContent = time;
  ELEMENT.MESSAGE_WRAPPER.append(messageBlock);
}
export function renderPopUp(title, formTitle, button) {
  const popUpBlock = popup.content.cloneNode(true);
  popUpBlock.querySelector(".popup-title").textContent = title;
  popUpBlock.querySelector(".form-title").textContent = formTitle;
  popUpBlock.querySelector(".name-send__button").textContent = button;
  ELEMENT.BODY.append(popUpBlock);
}

function getTime() {
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}`;
  return time;
}
