import {messageHandler} from "./message.js"
const chatMessageForm = document.querySelector('.chat__message-form');
document.addEventListener("DOMContentLoaded" , function (e) {
	chatMessageForm.addEventListener('submit', messageHandler);
})


