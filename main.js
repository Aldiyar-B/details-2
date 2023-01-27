import { fetchAuth } from "./auth.js";
import {
  settingsButton,
  popupCloseButton,
  inputText,
  inputSubmit,
  chat,
  template,
  authButton,
  authField,
  authPopUp,
  passwordConformation,
  closeBtnPassword,
} from "./htmlValues.js";
import { handlePopup } from "./popup.js";
import { validateEmail } from "./validation.js";

settingsButton.addEventListener("click", () => handlePopup("Настройки"));
popupCloseButton.addEventListener("click", () => handlePopup());
inputSubmit.addEventListener("click", addMessage);

function addMessage(e) {
  e.preventDefault();

  if (!inputText.value) return alert("Введите сообщение!");
  let copyTemp = template.content.cloneNode(true);
  copyTemp.querySelector(".message__text").textContent = inputText.value;
  copyTemp.querySelector(".hours").textContent = new Date().getHours();
  copyTemp.querySelector(".minutes").textContent = new Date().getMinutes();
  chat.append(copyTemp);

  inputText.value = "";
}

authButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (authField.value.length === 0) return alert("Please enter email!");
  if (!validateEmail(authField.value))
    return alert("Please enter valid email!");
  fetchAuth(authField.value)
    .then(() => {
      authPopUp.style.visibility = "hidden";
      passwordConformation.style.visibility = "visible";
      authField.value = "";
    })
    .catch((e) => alert(e));
});

closeBtnPassword.addEventListener("click", () => {
  authPopUp.style.visibility = "visible";
  passwordConformation.style.visibility = "hidden";
});
