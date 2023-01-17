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
        return localStorage.setItem('currentCity', JSON.stringify(currentCity))
    },
    getCurrentCity() {
        this.currentCity = JSON.parse(localStorage.getItem('currentCity'))
        if (!this.currentCity) {
            this.currentCity = 'Boston'
        }
    }
}