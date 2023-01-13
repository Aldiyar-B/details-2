const STORAGE = {
  LOCAL: 'localStorage',
  SESSION: 'sessionStorage',
}

class Storage {

  constructor(value, storage = STORAGE.LOCAL) {
    this.key = value;
    this.storage = storage;
    this.isValid = this.storage === STORAGE.LOCAL;
    if (this.isValid) {
      localStorage.setItem(this.key, undefined);
    } else {
      sessionStorage.setItem(this.key, undefined);
    }
  }

  get() {
    if (this.isValid) {
      return localStorage.getItem(this.key);
    } else {
      return sessionStorage.getItem(this.key);
    }
  }

  set(value) {
    if (this.isValid) {
      localStorage.setItem(this.key, value);
    } else {
      sessionStorage.setItem(this.key, value);
    }
  }

  clear() {
    if (this.isValid) {
      localStorage.setItem(this.key, undefined);
    } else {
      sessionStorage.setItem(this.key, undefined);
    }
  }

  isEmpty() {
    const value = this.get();
    if (value === 'undefined') {
      return true;
    }
    return false;
  }
}

let user = new Storage('Vadim', STORAGE.LOCAL);
let user3 = new Storage('Ufsduif', STORAGE.SESSION)
