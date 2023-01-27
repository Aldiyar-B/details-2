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

ELEMENT.loginButton.addEventListener('click', (e) => {
		e.preventDefault();
		showAuthorizationForm('start');
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

function showAuthorizationForm(status) {
		const popUpLoginTemplate = ELEMENT.popUpLoginTemplate.content.cloneNode(true);
		const UI_ELEMENT = {
				title: popUpLoginTemplate.querySelector('.pop-up__title'),
				login: popUpLoginTemplate.querySelector('div'),
				label: popUpLoginTemplate.querySelector('label'),
				formGetMail: popUpLoginTemplate.querySelector('form'),
				formInput: popUpLoginTemplate.querySelector('input'),
				formButtonSend: popUpLoginTemplate.querySelector('button'),
				close: popUpLoginTemplate.querySelector('.pop-up__close')
		};

		if (status === 200) {
				const previousWindow = document.querySelector('.pop-up');
				previousWindow.style.display = 'none';

				UI_ELEMENT.title.textContent = 'Подтверждение';
				UI_ELEMENT.label.textContent = 'Код\n';
				UI_ELEMENT.formInput.placeholder = 'введите полученный код';
				UI_ELEMENT.label.append(UI_ELEMENT.formInput);
				UI_ELEMENT.formButtonSend.textContent = 'Войти';

		} else if (status === 'start') {
				UI_ELEMENT.formGetMail.addEventListener('submit', (event) => {
						event.preventDefault();
						authRequest(event);
				});
		}
		UI_ELEMENT.login.classList.add('show');
		ELEMENT.handlerFormPushMessage.append(UI_ELEMENT.login);

		UI_ELEMENT.close.addEventListener('click', (e) => {
				e.preventDefault();
				UI_ELEMENT.login.style.display = 'none';
		});
}

async function authRequest(event) {
		let gotMail = event.target[0].value;
		const url = 'https://edu.strada.one/api/user';

		try {
				let response = await fetch(url, {
						method: 'POST',
						headers: {'Content-Type': 'application/json;charset=utf-8'},
						body: JSON.stringify({email: gotMail})
				});
				if (response.status === 200) showAuthorizationForm(response.status);
		} catch (error) {
				console.log(`Возникла ошибка ${error}`);
		}
}