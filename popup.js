import { popup, popupHeader } from "./htmlValues.js";

export function handlePopup(title) {
  if (popup.classList.contains("popup__hidden")) {
    popup.classList.remove("popup__hidden");
    popupHeader.textContent = title;
  } else {
    popup.classList.add("popup__hidden");
    popupHeader.textContent = "";
  }
}
