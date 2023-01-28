const BUTTONS = {
    SETTINGS: document.querySelector('.settings'),
    CLOSE: document.querySelectorAll('.popupName__close-btn'),
    GET_CODE: document.querySelector('.form__authorization'),
    ENTRY: document.querySelector('.entry'),
};

const UI_POPAP = {
    WRAPPER: document.querySelector('.wrapper'),
    AUTHORIZATIONS: document.getElementById('popupNameAuthorization'),
    CONFIRMATION: document.getElementById('popupNameConfirmation'),
    E_MAIL: document.querySelector('.e__mail'),
    SETTINGS: document.getElementById('popupNameSetings'),
};

document.addEventListener('DOMContentLoaded', () => {
    UI_POPAP.AUTHORIZATIONS.classList.remove('hidden');
});

if (BUTTONS.CLOSE.length > 0) {
    BUTTONS.CLOSE.forEach((element) => {
        element.addEventListener('click', closePopup);
    });
}

function closePopup() {
    UI_POPAP.SETTINGS.classList.add('hidden');
    UI_POPAP.WRAPPER.classList.remove('wrapper__dark');
}

BUTTONS.SETTINGS.addEventListener('click', () => {
    UI_POPAP.SETTINGS.classList.remove('hidden');
    UI_POPAP.WRAPPER.classList.add('wrapper__dark');
});

BUTTONS.GET_CODE.addEventListener('submit', (event) => {
    event.preventDefault();
    const userMail = UI_POPAP.E_MAIL.value;
    postRequest(userMail);
});

async function postRequest(userMail) {
    const eMail = userMail.trim();
    if (eMail === '') {
        UI_POPAP.E_MAIL.value = '';
        return;
    }

    try {
        let response = await fetch(`https://edu.strada.one/api/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: eMail }),
        });

        if (response.ok) {
            console.log(response.ok);
            UI_POPAP.AUTHORIZATIONS.classList.add('hidden');
            UI_POPAP.CONFIRMATION.classList.remove('hidden');
        }
    } catch (error) {
        alert(`Ошибка:${error}`);
    }
}
