import { Storage, lastCityStorage, favoritesStorage } from './storage';
import { changeActiveClass } from './utils';
import { renderFavorites } from './render';
import getWeather from './request';
import ELEMENT from './ui';

const favoritesList = favoritesStorage.get(Storage.option.favorites) ?? new Set();

const handleContentLoaded = () => {
  const lastCity = lastCityStorage.get() ?? lastCityStorage.set();
  getWeather(lastCity, favoritesList);
  renderFavorites(lastCity, favoritesList, getWeather);
};

const handleSendingData = (event) => {
  event.preventDefault();
  getWeather(event.target.city.value, favoritesList);
  event.target.reset();
};

const changeFavoritesList = () => {
  const city = ELEMENT.ACTIVE_CITY.textContent;
  // eslint-disable-next-line no-unused-expressions
  favoritesList.delete(city) || favoritesList.add(city);
  favoritesStorage.set(favoritesList);
  renderFavorites(city, favoritesList, getWeather);
};

const changeTabDisplay = (button) => {
  ELEMENT.TABS_WEATHER.forEach((tab) => {
    changeActiveClass(tab, tab.dataset.tab === button.dataset.tab);
  });
};

const changeActiveButton = (event) => {
  const buttonClicked = event.target;
  ELEMENT.BUTTONS.forEach((button) => changeActiveClass(button, button === buttonClicked));
  changeTabDisplay(buttonClicked);
};

ELEMENT.BUTTONS_WRAPPER.addEventListener('click', changeActiveButton);
document.addEventListener('DOMContentLoaded', handleContentLoaded);
ELEMENT.FORM.addEventListener('submit', handleSendingData);
ELEMENT.LIKE.addEventListener('click', changeFavoritesList);
