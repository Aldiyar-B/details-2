const chatContent = document.querySelector('.chat__content');
const chatMessage = document.querySelector('.chat__message');
const messageReceived = document.querySelector('#message__received').content;
const messageSent = document.querySelector('#message__sent').content;

function messageHandler(event) {
  event.preventDefault();
  let message = chatMessage.value;
  message = checkMessage(message);
  if (message) {
    makeMessageFrom(message);
  }
}

function checkMessage(message) {
  let resalt;
  message = message.trim();
  resalt = message.length === 0 ? false : message;
  return resalt;
}

function makeMessageFrom(message) {
  const templateClone = messageSent.cloneNode(true);
  let email = templateClone.querySelector('.massage__text');
  email.textContent = message;
  console.log(email);
  chatContent.append(templateClone);
}

export { messageHandler };