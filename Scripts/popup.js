const popup = document.querySelector('.popup');
const popupCloseButtons = document.querySelectorAll('.popup__close');

popupCloseButtons.forEach((Button) => {
    Button.addEventListener('click', () => {
        popup.classList.remove('active');
    });
})