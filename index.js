const messageForm = document.querySelector('.message-form')
const contentBox = document.querySelector('.content')

const sendMessageHandler = () => {
    const messageInput = document.querySelector('.message-text')
    if (messageInput.value === '') {
        alert('Введите сообщение для отправки')
        return
    }
    const getTemplate = tmpl.content.cloneNode(true)
    const templateContent = getTemplate.querySelector('.message')
    templateContent.textContent = messageInput.value
    contentBox.append(getTemplate)
    messageInput.value = ''
}
messageForm.addEventListener('submit', (event) => {
    event.preventDefault()
    sendMessageHandler()
})