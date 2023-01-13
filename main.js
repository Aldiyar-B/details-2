const STORAGE = {
  LOCAL: localStorage,
  SESSION: sessionStorage,
  DEFAULT: localStorage,
}

class Storage {
  constructor(key, storage = STORAGE.DEFAULT) {
    this.key = key;
    this.storage = storage;
    this.storage.setItem(key, null)
  }

  getKey() {
    return this.storage.getItem(this.key)
  }

  setKey(value) {
    this.storage.setItem(this.key, value);
  }

  clear() {
    this.storage.setItem(this.key, null);
  }

  isEmpty() {
    const value = this.getKey();
    if (value === 'null') {
      return true;
    }
    return false;
  }
}

const moscow = new Storage('moscow', STORAGE.LOCAL);
const bali = new Storage('Bali', STORAGE.SESSION);
const minsk = new Storage('Minsk')


moscow.setKey('blabla');
console.log(moscow.getKey());
bali.setKey('Baaaaaaaaali');
console.log(minsk.isEmpty());
console.log(bali.isEmpty());
console.log(bali.getKey());
moscow.clear();
console.log(moscow.getKey());
