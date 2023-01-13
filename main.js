const STORAGE = {
  LOCAL: 'localStorage',
  SESSION: 'sessionStorage',
}

class Storage {

  constructor(value, storage = STORAGE.LOCAL) {
    this.key = value;
    this.storage = storage;
    this.isLocal = this.storage === STORAGE.LOCAL;
    if (this.isLocal) {
      localStorage.setItem(this.key, undefined);
    } else {
      sessionStorage.setItem(this.key, undefined);
    }
  }

  get() {
    if (this.isLocal) {
      return localStorage.getItem(this.key);
    } else {
      return sessionStorage.getItem(this.key);
    }
  }

  set(value) {
    if (this.isLocal) {
      localStorage.setItem(this.key, value);
    } else {
      sessionStorage.setItem(this.key, value);
    }
  }

  clear() {
    if (this.isLocal) {
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

let userOne = new Storage('OneUser', STORAGE.LOCAL);
let userTwo = new Storage('TwoUser', STORAGE.SESSION);
