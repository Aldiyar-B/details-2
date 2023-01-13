export function addStorageCurrentCity(cityName) {
  document.cookie = `currentCity = ${cityName}; max-age=3600`;
}

export function getStorageCurrentCity() {
  const arrCookie = document.cookie.split('=');
  const isValid = document.cookie !== 'currentCity=';
  if (!isValid) {
    return 'Aktobe';
  }
  return arrCookie[1];
}

export function addStorageFavoriteCities(array) {
  const json = JSON.stringify(array);
  localStorage.setItem('favoriteCities', json);
}

export function getStorageFavoriteCities() {
  const json = localStorage.getItem('favoriteCities');
  let array = JSON.parse(json);
  if (!json) {
    array = [];
  }
  return array;
}

class Storage {
  constructor(cityName) {
    this.city = cityName;
  }

  getCityName() {
    return this.city;
  }

  setCityName(cityName) {
    this.city = cityName;
  }

  clear() {
    delete this.city;
  }

  isEmpty() {
    const cityArr = document.cookie.split('=');
    if (cityArr[1] === this.city) {
      return false;
    }
    return true;
  }
}

const cityOne = new Storage('Moscow');
const cityTwo = new Storage('Minsk');

console.log(cityOne);
console.log(cityTwo);
console.log(cityOne.isEmpty());
console.log(cityTwo.isEmpty());
cityOne.setCityName('Amur');
console.log(cityOne.city);
cityOne.clear();
console.log(cityOne.city);
