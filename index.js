const messageForm = document.querySelector('.message-form')
const contentBox = document.querySelector('.content')
const popupBG = document.querySelector('.popup-bg')
const popupSettings = document.querySelector('.popup-settings')
const openSettingsButton = document.querySelector('.open-settings')
const popupAuth = document.querySelector('.popup-auth')
const openAuthButton = document.querySelector('.open-auth')
const popupAccept = document.querySelector('.popup-accept')
const openAcceptButton = document.querySelector('.get-code-button')
const closePopupButton = document.querySelectorAll('.close-popup')

openSettingsButton.addEventListener('click', (event) => {
    event.preventDefault()
    popupBG.classList.add('active')
    popupSettings.classList.add('active')
})

openAuthButton.addEventListener('click', (event) => {
    event.preventDefault()
    popupBG.classList.add('active')
    popupAuth.classList.add('active')
})

openAcceptButton.addEventListener('click', (event) => {
    event.preventDefault()
    popupBG.classList.add('active')
    popupAccept.classList.add('active')
})
const closePopup = () => {
    popupBG.classList.remove('active')
    popupSettings.classList.remove('active')
    popupAuth.classList.remove('active')
    popupAccept.classList.remove('active')
}
closePopupButton.forEach((button) => {
    button.addEventListener('click', closePopup)
})
document.addEventListener('click', (event) => {
    if (event.target === popupBG) {
        closePopup()
    }
})

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