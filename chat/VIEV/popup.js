import UI_ELEMENTS from './ui_elements';
import '../node_modules/popups/css/popupS.min.css';
import popupS from 'popups';

const settingsHandle = () => {
	popupS.modal({
		// eslint-disable-next-line quotes
		content: `<div class = 'options'><div class ='options-title'>Настройки</div>
											<form class = 'options-form'>
											<div class = 'options-form_title'>Имя в чате</div>
											<input type = 'text' class='options-form_input'></input>
											<button type='submit' class='options-form_button'>-></button>
											</form></div>`
	});
};

UI_ELEMENTS.SETTINGS_BUTTON.addEventListener('click',settingsHandle);