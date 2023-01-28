import Cookies from "js-cookie";

const chat = document.querySelector('.chat');
const popup = document.querySelector('.popup')
const popupTitle = document.querySelector('.popup__title');
const verificationForm = document.querySelector('.verification-form');
const verificationInput = document.querySelector('.verification-input');
const verificationWindow = document.querySelector('.verification');

export function verification (){
    popupTitle.textContent = 'Подтверждение'; 
    verificationWindow.classList.add('active');

    verificationForm.addEventListener('submit',(event) => {
        event.preventDefault();

        saveToken(verificationInput.value);
        verificationWindow.classList.remove('active')
        chat.classList.add('active');
        popup.classList.remove('active');
    });
}

function saveToken (token){
    Cookies.set('token', token, { expires: 1 });
}