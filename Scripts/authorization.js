import { verification } from "./verification.js";
import Cookies from "js-cookie";

const chatWindow = document.querySelector('.chat');
const popupTitle = document.querySelector('.popup__title');
const authorizationForm = document.querySelector('.authorization-form');
const authorizationInput = document.querySelector('.authorization-input');
const authorizationWindow = document.querySelector('.authorization');

export function authorization() {
  popupTitle.textContent = 'Авторизация';

  authorizationForm.addEventListener('submit', (event) => {
    event.preventDefault()

    if (authorizationInput.value) {
      sendMail(authorizationInput.value);

      authorizationWindow.classList.remove('active');
      verification()
    }
  });
}

export async function isAuth(){
  try{
    const response = await fetch('https://edu.strada.one/api/user/me',{
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`
      }
    })
    if(response.status >= 200 && response.status < 300){
      return true
    }
      throw new Error();
  } catch{
    return false
  }
}

export function skipAuth(){
  popup.classList.remove('active');
  chatWindow.classList.add('active');
  authorizationWindow.remove('active');
}

async function sendMail(mail) {
  await fetch('https://edu.strada.one/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ email: mail })
  });
}