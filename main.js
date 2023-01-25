import { renderPopUp } from "./render.js";
const settingsBtn = document.querySelector("#settings");

settingsBtn.addEventListener("click", () =>
  renderPopUp("Настройки", "Имя в чате")
);
