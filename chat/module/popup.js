export const POPUP_OBJ = {

	openPopupButtons: document.querySelectorAll('.open-popup'),
	closePopupButtons: document.querySelectorAll('.close-popup'),
	popupSettings: document.querySelector('.popup__settings'),
	popupLogging: document.querySelector('.popup__logging'),

	openPopup() {
		this.openPopupButtons.forEach(button => {
			button.addEventListener('click', (event) => {
				event.preventDefault();
				const element = event.target;
				const popupLink = element.getAttribute('href');
				if (popupLink === '#settings') {
					this.popupSettings.classList.add('active');
				}
				else if (popupLink === '#exit') {
					this.popupLogging.classList.add('active');
				}
			});
		})
	},

	closePopupWithButton() {
		this.closePopupButtons.forEach(button => {
			button.addEventListener('click', () => {
				this.popupSettings.classList.remove('active');
				this.popupLogging.classList.remove('active');
			});
		})
	},

	closePopup() {
		document.addEventListener('click', (event) => {
			if (event.target === this.popupSettings || event.target === this.popupLogging) {
				this.popupSettings.classList.remove('active');
				this.popupLogging.classList.remove('active');
			}
		})
	},

	startEventsPopup() {
		this.openPopup();
		this.closePopupWithButton();
		this.closePopup();
	}
}
