import { validation } from "./validation.js";
import { renderPopUp } from "./render.js";
import { POPUP } from "./element.js";
import { storage } from "./storage.js";
import { ELEMENT } from "./element.js";
import { closeButton } from "./button.js";
import { authorization } from "./post.js";

export function authorizationUi() {
  document
    .querySelector(".name-send__button")
    .addEventListener("click", (event) => {
      const input = document.querySelector(".name-input");
      event.preventDefault();
      if (!validation(input)) {
        return;
      }
      document.querySelector(".popup").remove();
      renderPopUp(
        POPUP.VERIFICATION.TITLE,
        POPUP.VERIFICATION.FORM_TITLE,
        POPUP.VERIFICATION.BUTTON
      );
      if (storage.getCode) {
        document.querySelector(".name-input").value = storage.getCode();
      }
      document
        .querySelector(".name-send__button")
        .addEventListener("click", (event) => {
          const input = document.querySelector(".name-input");
          event.preventDefault();
          storage.saveCode(input.value);
          authorization(input.value);
        });
      ELEMENT.WRAPPER.classList.add("active");
      closeButton();
    });
}
