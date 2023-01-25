const POPUP = {
  BG: document.querySelector(".popup__bg"),
  MODAL: document.querySelector(".popup"),
  OPEN_BTN: document.querySelector(".settings__button"),
  CLOSE_BTN: document.querySelector(".close__btn"),
};

POPUP.OPEN_BTN.addEventListener("click", (event) => {
  event.preventDefault();
  POPUP.BG.classList.add("active");
});

POPUP.CLOSE_BTN.addEventListener("click", () => {
  POPUP.BG.classList.remove("active");
});

document.addEventListener("click", (event) => {
  if (event.target === POPUP.BG) {
    POPUP.BG.classList.remove("active");
  }
}); 
