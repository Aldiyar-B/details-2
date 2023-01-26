'use strict';

import {ELEMENT} from './modules/view.js';

ELEMENT.buttonSetting.addEventListener('click', (e) => {
		e.preventDefault();
		ELEMENT.popUpSetting.classList.add('active');
});

ELEMENT.popUpClose.addEventListener('click', (e) => {
		e.preventDefault();
		ELEMENT.popUpSetting.classList.remove('active');
});

ELEMENT.sendMessageForm.addEventListener('submit', (e) => {
		e.preventDefault();
		sendMessage();
});

function sendMessage() {
		if (ELEMENT.myMessageText.value === '') {
				ELEMENT.myMessageText.placeholder = 'поле не может быть пустым';
				return;
		}

		const newMessage = ELEMENT.myMessageTemplate.content.cloneNode(true);
		const newMessageText = newMessage.querySelector('.my-message__text');

		newMessageText.textContent = ELEMENT.myMessageText.value;
		ELEMENT.partnerMessageTemplate.before(newMessage);
		
		ELEMENT.myMessageText.value = '';
		ELEMENT.myMessageText.placeholder = 'сообщение..';
}