import Cookies from 'js-cookie'

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
	user: {
		name: 'User1',
		email: 'user1@example.com',
	},
	text: 'Hello'
};

const messageForm = document.querySelector('.message-form');
messageForm.addEventListener('submit', function (event) {
	event.preventDefault();

	let newMessage = document.querySelector('.message-text').value;
	message.text = newMessage;
	socket.send(JSON.stringify({ text: newMessage }));

	sendMessage(message);
})

function sendMessage(message) {
	const email = Cookies.get('email');
	/* 	console.log(message)
	 */


	let newEl = messageElement.cloneNode(true);

	if (message.user.email == email) {
		newEl.querySelector('.message').classList.add('own-message')
/* 		console.log('okok')
 */	} else {
/* 		console.log('no oOKOKOOK')
 */		newEl.querySelector('.message').classList.add('other-message')
	}

	newEl.querySelector('.message-template-text').textContent = message.text;
	newEl.querySelector('.message-username').textContent = message.user.name;


	content.prepend(newEl)

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
		message.user.email = email;
		message.user.name = email;
		console.log(message)
	} else {
		alert('Ошибка HTTP: ' + response.status)
	}

})


// POP_UP_2

const openPopupBtn = document.getElementById('enterCode');
openPopupBtn.addEventListener('click', function () {
	POP_UP.CODE.style.display = 'block';
});

const closePopUp2 = document.getElementById('close-popup2');

closePopUp2.addEventListener('click', function () {
	POP_UP.CODE.style.display = 'none';
});


// code

const enterTheCode = document.getElementById('enter');
enterTheCode.addEventListener('click', function () {
	const code = document.querySelector('.popup2-text').value;
	Cookies.set('token', code);

	POP_UP.CODE.style.display = 'none';
	POP_UP.AUTHORIZATION.style.display = 'none';


	setInCookie();
});


// отправляем PATCH-запрос с токеном в заголовке Authorization

function setInCookie() {
	const token = Cookies.get('token')
	fetch('https://edu.strada.one/api/user', {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({ name: 'new-name' })
	}).then(
		response => {
			if (response.ok) {
				chatHistory()
				console.log(response)
				alert("awesome");
				chatHistory();
			}
		}
	).catch(error => {
		alert('error:' + error)
	})

	fetch('https://edu.strada.one/api/user/me', {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
}



function chatHistory() {
	const token = Cookies.get('token');
	if (!token) {
		alert('Токена нет');
		return;
	}

	url = 'https://edu.strada.one/api/messages/';

	fetch(url, {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`
		}
	}).then(response => {
		return response.json();
	}).then(chatHistory => {
		console.log(chatHistory);
		for (let key in chatHistory) {
			if (Array.isArray(chatHistory[key])) {
				chatHistory[key].forEach(function (item) {
					/* 					console.log(item.user.email)
					 */
					sendMessage(item)
				});
			}
		}
	}).catch(error => {
		alert(error)
	})
}


const token = Cookies.get('token')
const socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);


// отправка сообщения из формы
document.querySelector('.message-text').onsubmit = function () {
	let outgoingMessage = this.message.value;

	socket.send(JSON.stringify({ text: outgoingMessage }));
	return false;
};

// получение сообщения 
socket.onmessage = function (event) {

	console.log('WebSocket message received: ', event.data);
	const message = JSON.parse(event.data);
	// Добавляем полученное сообщение в чат
	sendMessage(message);
}


