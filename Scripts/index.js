import { authorization, skipAuth, isAuth} from "./authorization.js";


const templateMessage = document.querySelector('#tmp__message');
const chatWindow = document.querySelector('.chat__window');
const form = document.querySelector('.chat__form')

const MEMBERS = {
    USER: 'user',
    OTHER: 'other',
}

document.addEventListener('DOMContentLoaded', async () => {
    await isAuth() ? skipAuth() : authorization();
});

function addMessage(text, whose) {
    const template = templateMessage.content.cloneNode(true);
    const message = document.createElement('div');
    const textMessage = template.querySelector('p');
    const classMessage = whose === 'user' ? 'my-message' : 'other-message';

    message.classList = `chat__message ${classMessage}`;
    textMessage.textContent = text;

    message.append(template);
    chatWindow.prepend(message);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const textMessage = document.querySelector('.chat__input').value;
    addMessage(textMessage, MEMBERS.USER);
})

