class Storage {
    constructor(name, typeStorage, value = 'default') {
        this.name = name;
        typeStorage === 'sessionStorage'
            ? (this.Storage = sessionStorage)
            : (this.Storage = localStorage);
        this.set(value);
    }

    set(value) {
        this.Storage.setItem(this.name, value);
    }

    get() {
        let getItem = this.Storage.getItem(this.name);
        return getItem;
    }

    clear() {
        this.Storage.setItem(this.name, '');
    }

    isEmpty() {
        return this.get() ? false : true;
    }
}

const surnumes = new Storage('surnumes', 'sessionStorage');
const names = new Storage('names');

names.set('Ivan');
names.clear();
names.isEmpty();
names.get();
surnumes.set('Ivanov');
surnumes.clear();
surnumes.isEmpty();
surnumes.get();
