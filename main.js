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
 */	messageElement.querySelector('.message-text').textContent = message.text;
	let room = document.createElement('div');


	/* 	let shape = `
			<div>${message.username}:</div>
			<div>${message.text}</div>
	`;
	
		room.innerHTML = shape; */

	let newEl = messageElement.cloneNode(true);
	content.append(newEl)

}