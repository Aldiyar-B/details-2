import { openPopup } from './popup.js'
import { UI } from './ui.js'

UI.FOOTER_FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    getMessage();
    UI.FOOTER_MESSAGE.value = '';
})

function getMessage(){
    const message = UI.FOOTER_MESSAGE.value;
   
    if(message.length !== 0){
        cloneMessage(message);
    }
}
function cloneMessage(value) {

    const template = document.querySelector('.template');

    const myMessages = template.content.querySelector('.message__my_item');
    myMessages.textContent  = value;

    const newMessage = template.content.cloneNode(true);
    UI.PAGE_MESSAGES.append(newMessage);
}