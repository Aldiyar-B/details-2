const popupLink = document.querySelectorAll('.-popup-link');
if(popupLink.length > 0) {
	popupLink.forEach((element) => {
		element.addEventListener('click', popupLinkHandler);
	});
}

function popupLinkHandler(event) {
	event.preventDefault();
	const element = event.target;
	const popupLink = element.getAttribute('href');
	popupOpen(popupLink);
}

function popupOpen(link) {
	const openPopup = document.querySelector('.popup.open');
	if(openPopup){
		closePopup(openPopup);
	}
	const popup = document.querySelector(link);
	popup.classList.add("open")
	eventPopup(popup);
}

function closePopup(openPopup) {
	openPopup.classList.remove('open');
	openPopup.removeEventListener('click', popuphandler);
}

function eventPopup(popup) {
	popup.addEventListener('click', popuphandler);
}

function popuphandler(event) {
	const clickElement = event.target;
	const popup = clickElement.closest(".popup");
	if(clickElement.closest(".-close")) {
		closePopup(popup);
	}
}