import Cookies from "js-cookie";

const popup = document.querySelector('.popup');
const settingsWindow = document.querySelector('.settings');
const nameForm = document.querySelector('.name-form');
const nameInput = document.querySelector('.name-input');
const settingsButton = document.querySelector('.chat__settings');
const popupTitle = document.querySelector('.popup__title');

settingsButton.addEventListener('click',() => {
    popupTitle.textContent = 'Настройки';
    settingsWindow.classList.add('active');
    popup.classList.add('active');
})

nameForm.addEventListener('submit',(event) => {
    event.preventDefault();

    if(nameInput.value){
        changeName(nameInput.value);
    }
});

async function changeName(newName){
    fetch('https://edu.strada.one/api/user',{
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${Cookies.get('token')}`
        },
        body: JSON.stringify({ name: newName })
    })
    const response = await fetch('https://edu.strada.one/api/user/me',{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
        }
      })
    const res = await response.json();
    console.log(res)
}