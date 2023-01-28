import { ELEMENT } from './module/value.js';
import { POPUP_OBJ } from './module/popup.js';

POPUP_OBJ.startEventsPopup();

const email = document.querySelector('.email__input');
console.log(email.value);
const url = 'https://edu.strada.one/api/user';
const getCodeButton = document.querySelector('.get__code');


getCodeButton.addEventListener('click', (event) => {
	event.preventDefault();
	console.log(email.value);
	getCode();
});


async function getCode() {
	let body = { email: email.value };
	let response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(body)
	});
};

ELEMENT.FORM_MESSAGE.addEventListener('submit', (event) => {
	event.preventDefault();
	pushMessage();
});

function pushMessage() {
	const ownMessage = createClone(ELEMENT.TEMPLATE_MESS_OWN);
	const textMessage = ownMessage.querySelector('.main__message-own-text');
	if (ELEMENT.INPUT_MESSAGE.value === '') {
		return;
	}
	textMessage.textContent = ELEMENT.INPUT_MESSAGE.value;
	ELEMENT.MAIN.prepend(ownMessage);
};

function createClone(template) {
	return template.content.cloneNode(true);
};


