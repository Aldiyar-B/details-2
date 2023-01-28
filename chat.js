const textmessage = document.querySelector('.input');
const form = document.querySelector('.tools');
const place = document.querySelector('.place');
const nicname = document.querySelector('.name');
const popupform = document.querySelector('.popup-form');
const takecode = document.querySelector('.popup1-form');
const emailInput = document.querySelector('.email');
const tmpl = document.getElementById('tmpl');
function sendMessage(wichsidesend) {
  const elem = document.createElement('div');
  elem.className = wichsidesend;
  elem.append(tmpl.content.cloneNode(true));
  if (nicname.value === '') { elem.textContent = 'Name'`:${textmessage.value}`; } else { elem.textContent = `${nicname.value}:${textmessage.value}`; }
  place.prepend(elem);
}
async function getCodeByEmail(e) {
  e.preventDefault();
  const body = {
    email: emailInput.value,
  };
  const response = await fetch('https://edu.strada.one/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (response.ok) {
    console.log(response.ok);
  }
}

popupform.addEventListener('submit', (event) => {
  event.preventDefault();
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (textmessage.value !== '') {
    sendMessage('my-mes');
  }
});
takecode.addEventListener('submit', getCodeByEmail);
