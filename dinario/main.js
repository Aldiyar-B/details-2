class Storage {
    constructor(key, value, storage) {
        this.key = key;
        this.value = value;
        this.storage = storage;
    }
    get() {
        return JSON.parse(this.storage.getItem(this.key))
    }
    set() {
        this.storage.setItem(this.key, JSON.stringify(this.value));
    }
    clear() {
        this.storage.removeItem(this.key)
    }
    isEmpty() {
        const getResult = this.get();
        if (getResult === undefined || getResult === null) {
            return true
        } else {
            return false
        }
    }
}

const names = new Storage("name", "Ivan", localStorage);
names.clear();
names.set();
names.get();
names.isEmpty();

const profession = new Storage("profession", "builder", localStorage);
profession.clear();
profession.set()
console.log(profession.get());

const gender = new Storage("gender", "femail", sessionStorage);
gender.clear();
gender.set()
gender.get();
