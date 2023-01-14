export function creation(naming, text, appendAfter) {
  naming = document.createElement('li');
  naming.textContent = text;
  appendAfter.append(naming);
  return naming;
}
export function renderDetails(element) {
  element.textContent = '';
}
export function renderNow(blockOfCity) {
  let i = 0;
  blockOfCity = document.querySelectorAll('.blockcity');
  if (blockOfCity.length === 0) {
  } else {
    blockOfCity[i].remove();
    i = +i;
    renderNow(blockOfCity);
  }
}
export function creationAddUI(naming, type, classNaming, appendAfter) {
  naming = document.createElement(type);
  naming.className = classNaming;
  appendAfter.append(naming);
  return naming;
}
