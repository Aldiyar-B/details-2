const POP_UP = {

	AUTHORIZATION: document.querySelector('.popup1'),
	CODE: document.getElementById('popup2')
	/* 	SETTINGS_BLOCK: document.querySelector('.settings_wrapper'),
	 */
};

const content = document.querySelector('.content');
const template = document.getElementById('message-template');
const messageElement = template.content.cloneNode(true);
const message = {
	username: 'User1',
	email: 'user1@example.com',
	text: 'Hello, how are you?'
};

const messageForm = document.querySelector('.message-form');
messageForm.addEventListener('submit', function (event) {
	event.preventDefault();

	let newMessage = document.querySelector('.message-text').value;
	message.text = newMessage;
	console.log(message)
	sendMessage(message);
})

function sendMessage(message) {
	console.log(message)
	messageElement.querySelector('.message-username').textContent = message.username;
/* 	messageElement.querySelector('.message-email').textContent = message.email;
 */	messageElement.querySelector('.message-template-text').textContent = message.text;
	/* 	let room = document.createElement('div');
			let shape = `
				<div>${message.username}:</div>
				<div>${message.text}</div>
		`;
			room.innerHTML = shape;  */

	let newEl = messageElement.cloneNode(true);
	content.append(newEl)

}

// POP_UP_1

const exitButton = document.getElementById('exit');
exitButton.addEventListener('click', function () {
	POP_UP.AUTHORIZATION.style.display = 'block';
});

const closePopUp1 = document.getElementById('close-popup1');
closePopUp1.addEventListener('click', function () {
	POP_UP.AUTHORIZATION.style.display = 'none';
})

//fetch запросы
const getCodeButton = document.getElementById('getCode')
const emailForm = document.querySelector('.popup1-text')

getCodeButton.addEventListener('click', async function () {
	const email = emailForm.value;
	let response = await fetch('https://edu.strada.one/api/user', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({ email: email })
	});
	if (response.ok) {
		alert('is good');
	} else {
		alert('Ошибка HTTP: ' + response.status)
	}

})


// POP_UP_2

const openPopupBtn = document.getElementById('enterCode');
openPopupBtn.addEventListener('click', function () {
	POP_UP.CODE.style.display = 'block';
});

const closePopUp2 = document.getElementById('enter');
const closePopUp22 = document.getElementById('close-popup2');
closePopUp2.addEventListener('click', function () {
	POP_UP.CODE.style.display = 'none';
});
closePopUp22.addEventListener('click', function () {
	POP_UP.CODE.style.display = 'none';
});


