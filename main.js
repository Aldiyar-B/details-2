const url = 'https://api.sampleapis.com/countries/countries';

const UI = {
  list: document.querySelector('.list')
}
let xhr = new XMLHttpRequest();
xhr.open('GET', url);

xhr.responseType = 'json'
xhr.send();

function renderResult(result) {
  result.forEach(element => {
    let item = document.createElement('li');
    item.textContent = element.abbreviation + ':' + element.name;
    UI.list.append(item)
  });
}

xhr.onload = function () {
  console.log(`Код состояния: ${xhr.status}`);
  console.log(`Сообщение о состоянии: ${xhr.statusText}`);
  console.log(`ОК. Получено ${xhr.response.length} байт`);
  console.log(`Состояние запроса ${xhr.readyState}`);
  const responseResult = xhr.response;
  if (xhr.status !== 200) {
    alert(`Код ошибки ${xhr.status} Текст ошибки ${xhr.statusText}`)
  } else {
    renderResult(responseResult)
  }
}

xhr.onprogress = function (event) {
  if (event.lengthComputable) {
    console.log(`Получено ${event.loaded} из ${event.total}`);
  }
}

xhr.onerror = function () {
  console.log('ERROR');
}
