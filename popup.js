const BUTTONS = {
    SETTINGS: document.querySelector('.settings'),
    CLOSE: document.querySelectorAll('.popupName__close-btn'),
    GET_CODE: document.querySelector('.form__authorization'),
    ENTRY: document.querySelector('.entry'),
};

const UI_POPAP = {
    WRAPPER: document.querySelector('.wrapper'),
    AUTHORIZATION: document.getElementById('popupNameAuthorization'),
    E_MAIL: document.querySelector('.e__mail'),
    SETTINGS: document.getElementById('popupNameSetings'),
};

document.addEventListener('DOMContentLoaded', () => {
    UI_POPAP.AUTHORIZATION.classList.remove('hidden');
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

    let response = await fetch(`https://edu.strada.one/api/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(`{ email: ${eMail} }`),
    });
    console.log(response.ok);
}
