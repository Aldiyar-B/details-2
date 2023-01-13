class Storage {
  constructor(key, storage = Storage.option.local) {
    this.key = key;
    this.storage = storage === Storage.option.local
      ? localStorage
      : sessionStorage;
  }

  get(value = Storage.option.city) {
    return value === Storage.option.city
      ? this.storage.getItem(this.key)
      : new Set(JSON.parse(this.storage.getItem(this.key)));
  }

  set(value = Storage.option.startCity) {
    return typeof value === 'string'
      ? this.storage.setItem(this.key, value)
      : this.storage.setItem(this.key, JSON.stringify(Array.from(value)));
  }

  clear() {
    this.storage.removeItem(this.key);
  }

  isEmpty() {
    return this.get() === null || this.get() === undefined;
  }

  static option = {
    local: 'local',
    session: 'session',
    city: 'city',
    favorites: 'favorites',
    startCity: 'Rome',
  };
}

const favoritesStorage = new Storage(Storage.option.favorites);
const lastCityStorage = new Storage(Storage.option.city);

export { Storage, lastCityStorage, favoritesStorage };
