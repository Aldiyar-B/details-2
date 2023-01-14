export const storage = {
  saveCityFavoriteList(set) {
    localStorage.setItem('cityFavoriteList', JSON.stringify(Array.from(set)));
  },
  getCityFavoriteList() {
    return JSON.parse(localStorage.getItem('cityFavoriteList'));
  },
  getCurrentCity() {
    const name = 'currentCity';
    const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([$?*|{}\]\\^])/g, '\\$1')}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  },
  saveCurrentCity(currentCityName) {
    document.cookie = `${encodeURIComponent('currentCity')}=${encodeURIComponent(currentCityName)}`;
  },
};
