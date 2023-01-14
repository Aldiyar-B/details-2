const STORAGE = {
  LOCAL: 'localStorage',
  SESSION: 'sessionStorage',
}

class Storage {

  constructor(storage = STORAGE.LOCAL, key, value = 'default') {
    this.key = key;
    this.value = value;
    this.storage = storage;
    this.set(value);
  }

  get() {
    return globalThis[this.storage].getItem(this.key);
  }

  set(value) {
    globalThis[this.storage].setItem(this.key, value);
  }

  clear() {
    globalThis[this.storage].setItem(this.key, '');
  }

  isEmpty() {
    return this.get() ? false : true;
  }
}

// Tests
// let userOne = new Storage(STORAGE.LOCAL, 'OneUser');
// let userTwo = new Storage(STORAGE.SESSION, 'TwoUser', 'test');

// console.log(userOne);
// console.log(userTwo);
// userOne.set('hahaha');
// userTwo.clear();
// console.log(userTwo.isEmpty());
