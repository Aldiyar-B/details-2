import { storage } from './storage';
import { UI_ELEMENTS } from './ui';
import {
  creation,
  creationAddUI,
  renderNow,
  renderDetails,
} from './helpingFunction';

const set = new Set(storage.getCityFavoriteList());
const kelvinToCelsius = 273.13;
const milisecToHoursMinuts = 1000;

async function fetchRequest(cityName) {
  const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const apiKey = '84cf734f7cfaeb12fcf0d22f41dfb0d6';
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
  const response = await fetch(url);
  const commits = await response.json();
  UI_ELEMENTS.newfavoritecity.textContent = commits.name;
  UI_ELEMENTS.temperatureNow.textContent = `${Math.round(commits.main.temp - kelvinToCelsius)}°C`;
  UI_ELEMENTS.iconWeather.src = `http://openweathermap.org/img/wn/${commits.weather[0].icon}@4x.png`;
  UI_ELEMENTS.cityNameDetailsMenu.textContent = commits.name;
  const temperatureDetails = creation('temperatureDetails', `Temperature:${Math.round((commits.main.temp) - kelvinToCelsius)}°C`, UI_ELEMENTS.detailsMenu);
  const feels = creation('feels', `Feels like:${Math.round(commits.main.feels_like - kelvinToCelsius)}°C`, temperatureDetails);
  const weath = creation('weath', `Weather: ${commits.weather[0].main}`, feels);
  const sunrise = creation('sunrise', `Sunrise:${(new Date(commits.sys.sunrise * milisecToHoursMinuts)).getHours()}:${(new Date(commits.sys.sunrise * milisecToHoursMinuts)).getMinutes()}`, weath);
  creation('sunset', `Sunset:${(new Date(commits.sys.sunset * milisecToHoursMinuts)).getHours()}:${(new Date(commits.sys.sunset * milisecToHoursMinuts)).getMinutes()}`, sunrise);
}
function addCityFavorite(newCityFavorite) {
  set.add(newCityFavorite);
}
function addUI() {
  for (let i = 0; i < storage.getCityFavoriteList().length; i++) {
    const blockcity = creationAddUI('blockcity', 'div', 'blockcity', UI_ELEMENTS.addedLocation);
    const newcity = creationAddUI('newcity', 'li', 'newcity', blockcity);
    newcity.textContent = storage.getCityFavoriteList()[i];
    const deleteButton = document.createElement('button');
    deleteButton.className = 'deletetask';
    deleteButton.textContent = '+';
    newcity.after(deleteButton);

    deleteButton.addEventListener('click', () => {
      set.delete(newcity.textContent);
      storage.saveCityFavoriteList(set);
      blockcity.textContent = '';
      blockcity.remove();
    });
    newcity.addEventListener('click', () => {
      renderDetails(UI_ELEMENTS.detailsMenu);
      storage.saveCurrentCity(newcity.textContent);
      fetchRequest(newcity.textContent);
    });
  }
}

storage.saveCityFavoriteList(set);
fetchRequest(storage.getCurrentCity());
addUI();
UI_ELEMENTS.form.addEventListener('submit', (event) => {
  renderDetails(UI_ELEMENTS.detailsMenu);
  fetchRequest(UI_ELEMENTS.input.value);
  event.preventDefault();
});
UI_ELEMENTS.like.addEventListener('click', () => {
  renderNow();
  addCityFavorite(UI_ELEMENTS.newfavoritecity.textContent);
  storage.saveCityFavoriteList(set);
  addUI();
});
