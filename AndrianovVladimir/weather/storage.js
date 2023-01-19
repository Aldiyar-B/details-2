import Cookies from "js-cookie";

export const storage = {
    currentCity: '',
    favorList: new Set(),

    saveFavoriteCities(favorList) {

        return localStorage.setItem('favoriteCities', JSON.stringify([...favorList]))
    },
    getFavoriteCities() {
        return this.favorList = new Set( JSON.parse(localStorage.getItem('favoriteCities')))
    },

    saveCurrentCity(currentCity) {
        
        return Cookies.set('currentCity', currentCity, { expires: 1/24 });
        // return document.cookie = `currentCity=${currentCity};max-age=3600`;
    },
    getCurrentCity() {
        this.currentCity = Cookies.get('currentCity');
        if (!this.currentCity) {
            this.currentCity = 'Boston'
        }
        // Cookies.get('currentCity');
    },
}
