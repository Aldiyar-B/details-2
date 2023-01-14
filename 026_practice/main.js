class Storage {
	constructor(key, value, typeStorage = localStorage) {
		this.key = key;
		this.value = value;
		this.set(value);
		this.storage = typeStorage;
	}
	get() {
		return JSON.parse(this.storage.getItem(this.key));
	}
	set(value) {
		this.storage.setItem(this.key, JSON.stringify(value));
	}
	clear() {
		this.storage.removeItem(this.key);
	}
	isEmpty() {
		let answer = false;
		const value = this.get();
		if (value === null || value === undefined) {
			answer = true;
		}
		return answer;
	}
}

const tesla = new Storage('color', 'black', sessionStorage);

