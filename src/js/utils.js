const ACTIVE = 'active';

const addClass = (element, className = ACTIVE) => element.classList.add(className);

const removeClass = (element, className = ACTIVE) => element.classList.remove(className);

const clearElement = (element) => element.replaceChildren();

const changeActiveClass = (element, condition) => (condition
  ? addClass(element)
  : removeClass(element));

const createElement = (options) => {
  const element = document.createElement(options.tag);
  element.className = options.class;
  element.textContent = options.text;
  element.alt = options.alt;
  element.src = options.src;
  return element;
};

export { changeActiveClass, createElement, clearElement };
