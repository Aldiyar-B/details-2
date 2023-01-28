const popup = document.querySelector(".popup");
const popupHeader = document.querySelector(".header__popup__span");
const settingsButton = document.querySelector(".settings");
const popupCloseButton = document.querySelector(".popupName__close-btn");
const chat = document.querySelector(".chat");
const template = document.querySelector("#template_message");
const inputText = document.querySelectorAll(".input__form-message")[1];
const inputSubmit = document.querySelector(".button_form-send");
const authField = document.querySelector(".auth_field");
const authButton = document.querySelector(".auth_button");
const wrapper = document.querySelector(".wrapper");
const authPopUp = document.querySelector(".authorize");
const passwordConformation = document.querySelector(".password");
const closeBtnPassword = document.querySelector(".password_close_btn");
const tokenInput = document.querySelector(".auth_field");
const furtherButton = document.querySelector(".go_further_button");
const furtherInput = document.querySelector(".go_further_input");
const nameInput = document.querySelector(".name_input");
const nameInputButton = document.querySelector(".name_input_button");
export {
  popup,
  popupHeader,
  settingsButton,
  popupCloseButton,
  chat,
  inputSubmit,
  inputText,
  template,
  authField,
  authButton,
  wrapper,
  authPopUp,
  passwordConformation,
  closeBtnPassword,
  tokenInput,
  furtherButton,
  furtherInput,
  nameInput,
  nameInputButton,
};
