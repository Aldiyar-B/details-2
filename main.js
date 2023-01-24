const UI_ELEMENTS = {
  CONTAINER: document.querySelector('.container'),
  BALL: document.querySelector('.ball'),
  LIST: document.querySelector('.list'),
  LIST_ITEMS: document.querySelectorAll('.list__item')
};

function setRandomCoordinates() {
  let newX = calcRandomNumber(900);
  let newY = calcRandomNumber(600);
  UI_ELEMENTS.BALL.style.left = newX + 'px';
  UI_ELEMENTS.BALL.style.top = newY + 'px';
}

function calcRandomNumber(max) {
  let random = 0 + Math.random() * (max + 1 - 0);
  return Math.floor(random);
}

UI_ELEMENTS.BALL.addEventListener('mousemove', setRandomCoordinates);


UI_ELEMENTS.CONTAINER.addEventListener('click', function (event) {
  console.log(event);
})

// Задание в конце статьи

UI_ELEMENTS.LIST.addEventListener('click', function () {
  console.log(event.target);
  if (event.target.tagName != "LI") {
    return
  }

  if (event.ctrlKey) {
    event.target.classList.toggle('active')
  }

  if (!event.ctrlKey) {
    UI_ELEMENTS.LIST_ITEMS.forEach(element => {
      element.classList.remove('active')
    });
    event.target.classList.add('active')
  }
})
