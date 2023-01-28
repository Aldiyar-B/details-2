import { fetchAuth, fetchNameChange } from "./api.js";
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
  furtherButton,
  furtherInput,
  wrapper,
  nameInput,
  nameInputButton,
} from "./htmlValues.js";
import { handlePopup } from "./popup.js";
import { validateEmail } from "./validation.js";
import cookie from "js-cookie";
let token;
let name;
settingsButton.addEventListener("click", () => handlePopup("Настройки"));
popupCloseButton.addEventListener("click", handlePopup);
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
    .then((resp) => {
      authPopUp.style.visibility = "hidden";
      passwordConformation.style.visibility = "visible";
      authField.value = "";
      name = resp.name;
    })
    .catch((e) => alert(e));
});

closeBtnPassword.addEventListener("click", () => {
  authPopUp.style.visibility = "visible";
  passwordConformation.style.visibility = "hidden";
});

function setInCookie() {
  const tokenValue = furtherInput.value;
  if (!tokenValue) return;
  cookie.set("token", tokenValue, { expires: 1 });
  token = cookie.get("token");
}
furtherButton.addEventListener("click", (e) => {
  e.preventDefault();
  setInCookie();
  furtherInput.value = "";
  passwordConformation.style.visibility = "hidden";
  wrapper.style.display = "block";
  nameInput.value = name;
});
nameInputButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!nameInput.value) return alert("Введите имя!");
  fetchNameChange(nameInput.value, token).then((resp) => {
    nameInput.value = resp.name;
    handlePopup();
  });
});
