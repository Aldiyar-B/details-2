class Storage {
  constructor(key, value, storage = localStorage) {
    this.key = key;
    this.value = value;
    this.storage = storage;
  }
  get() {
    return this.storage.getItem(this.key);
  }
  set() {
    this.storage.setItem(this.key, this.value);
  }
  clear() {
    this.storage.clear(this.key);
  }
  isEmpty() {
    if (this.storage[key] === null || this.storage[key] === undefined) {
      return true;
    }
  }
}
const names = new Storage("names", "Test", sessionStorage);
names.get();
names.set();
