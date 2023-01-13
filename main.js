class Storage {
  static method = {
    local: 'local',
    session: 'session',
  };
  constructor(key, value, method) {
    this.key = key;
    this.value = value;
    this.method =
      method === Storage.method.local 
			? localStorage 
			: sessionStorage;
  }
  get() {
    const value = this.method.getItem(this.key) ?? null;
    return JSON.parse(value) ?? this.value;
  }
  set(value) {
    const currentValue = value ?? this.value ?? null;
    if (currentValue === null) {
      return;
    }
    const json = JSON.stringify(currentValue);
    this.method.setItem(this.key, json);
  }
  clear() {
    this.method.removeItem(this.key);
  }
  isEmpty() {
    const value = this.get();
    return value === null || value === undefined;
  }
}

const names = new Storage('names');
names.get();
names.set();
names.set(['Kristina', 'Dasha']);
names.get();
names.clear();
names.isEmpty();
const cities = new Storage('cities', 'Arkhangelsk');
cities.get();
cities.set('Perm');
cities.get();
cities.clear();
cities.isEmpty();
const users = new Storage('users', 'Dmitry', Storage.method.local);
users.get();
users.set('Dima');
users.clear();
users.clear();
