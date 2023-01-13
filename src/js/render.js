import { createElement, changeActiveClass, clearElement } from './utils';
import { lastCityStorage } from './storage';
import ELEMENT from './ui';

const changeHeartDisplay = (city, favorites) => {
  changeActiveClass(ELEMENT.LIKE, favorites.has(city));
};

const displayFavorites = (city, favorites, getWeather) => {
  const item = createElement({
    tag: 'li',
    text: city,
    class: 'city',
  });
  ELEMENT.FAVORITES_LIST.prepend(item);
  item.addEventListener('click', () => getWeather(city, favorites));
};

const renderFavorites = (city, favorites, getWeather) => {
  clearElement(ELEMENT.FAVORITES_LIST);
  changeHeartDisplay(city, favorites);
  favorites.forEach((favorite) => displayFavorites(favorite, favorites, getWeather));
};

const render = (weather, favorites, getForecast) => {
  weather.updateWeatherData();
  lastCityStorage.set(weather.city);
  clearElement(ELEMENT.TAB_LIST_FORECAST);
  changeHeartDisplay(weather.city, favorites);
  getForecast(weather.city);
};

export { render, renderFavorites };
