class Storage {
	constructor(name, value = "defaultValue", type = localStorage) {
		this.name = name;
		this.value = value;
		this.storageType = type;
	}
	get() {
		let result = this.storageType.getItem(this.name);
		return JSON.parse(result);
	}
	set(value = this.value) {
		this.storageType.setItem(this.name, JSON.stringify(value));
	}
	clear() {
		this.storageType.removeItem(this.name)
	}
	isEmpty() {
		if (this.get() == null) {
			return true;
		} return false;
	}
}

const names = new Storage("name", "Tatoshka", sessionStorage);
names.isEmpty();
names.set("Antoshka");
console.log(names.get());
names.clear();
names.isEmpty();
names.set("Anatoly")

const myArray = new Storage("myArr", "default", localStorage);
myArray.isEmpty();
myArray.set([1,2,3]);
console.log(myArray.get());
console.log(myArray.isEmpty());
myArray.clear();
console.log(myArray.isEmpty());
myArray.set([2,3,4,4])

const byDefault = new Storage("byDefault");
byDefault.set();
byDefault.clear();
console.log(byDefault.isEmpty());
byDefault.set();
let m = byDefault.get();
console.log(m);