METHOD_STORAGE = {
  LOCAL: 'local',
  SESSION: 'session',
};

class Storage {
  constructor(key, value, method) {
    this.key = key;
		this.value = value;
    this.method =
      method === METHOD_STORAGE.LOCAL ? localStorage : sessionStorage;
  }
  get() {
		const result = this.method.getItem(this.key) ?? null;
    return JSON.parse(result) ?? this.value;
  }
  set(value) {
		const currentValue = value ?? this.value ?? null;
		if(currentValue === null){
			return;
		}
		const json = JSON.stringify(currentValue);
		this.method.setItem(this.key, json);
  }
  clear() {
		this.method.removeItem(this.key);
	}
  isEmpty() {
		const result = this.method.getItem(this.key);
		if(result === null || result === undefined){
			return true;
		}
		return false;
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
const users = new Storage('users', 'Dmitry', METHOD_STORAGE.LOCAL);
users.get();
users.set('Dima');
users.get();
users.clear();
users.clear();
