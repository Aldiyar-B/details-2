class Storage {
  constructor(key, storage = Storage.option.local) {
    this.key = key;
    this.storage = storage === Storage.option.local
      ? localStorage
      : sessionStorage;
  }

  get() {
    const value = this.storage.getItem(this.key);
    return this.key === Storage.option.favorites
      ? Storage.convertJsonIntoSet(value)
      : value;
  }

  set(value = Storage.option.startCity) {
    const data = typeof value !== 'string'
      ? Storage.convertSetIntoJson(value)
      : value;
    return this.storage.setItem(this.key, data);
  }

  clear() {
    this.storage.removeItem(this.key);
  }

  isEmpty() {
    this.value = this.get();
    return this.value === null || this.value === undefined;
  }

  static convertJsonIntoSet(value) {
    return new Set(JSON.parse(value));
  }

  static convertSetIntoJson(value) {
    return JSON.stringify(Array.from(value));
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
