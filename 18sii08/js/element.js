export const ELEMENT = {
  BODY: document.body,
  INPUT_MESSAGE: document.querySelector(".message-input"),
  MESSAGE_WRAPPER: document.querySelector(".message-wrapper"),
  MESSAGE_FORM: document.querySelector(".message-form"),
  TEMPLATE: document.getElementById(".tmpl"),
  POPUP_INPUT: document.querySelector(".name-input"),
  WRAPPER: document.querySelector(".wrapper"),
};

export const POPUP = {
  SETTINGS: {
    TITLE: "Настройки",
    FORM_TITLE: "Имя в чате",
    PLACEHOLDER: "Стив",
    BUTTON: "->",
  },
  AUTORIZATION: {
    TITLE: "Авторизация",
    FORM_TITLE: "Почта:",
    BUTTON: "Получить код",
    TYPE: "email",
  },
  VERIFICATION: {
    TITLE: "Подтверждение",
    FORM_TITLE: "Код:",
    BUTTON: "Войти",
  },
};
