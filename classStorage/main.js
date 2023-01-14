class Storage {
    constructor(type = 'local') {
        this.name = 'names';
        this.type = type;

        if(type === 'local') {
            this.storage = localStorage;
        } else if(type === 'session') {
            this.storage = sessionStorage;
        }
    };

    set(value) {
        this.storage.setItem(this.name, JSON.stringify(value));
    }

    get() {
        let getItem = this.storage.getItem(this.name);
        return JSON.parse(getItem);
    }

    clear(value) {
        this.storage.removeItem(this.name);
    }

    isEmpty() {
        return this.storage.get() ? true : false
    }
}

let newEl = new Storage('session');
let j = newEl.set('Sveta');
//let l = newEl.set('');
let b = newEl.get();
let o = newEl.isEmpty()
//let c = newEl.clear('Sveta')
//let c = newEl.clear('Nastya');
console.log(b)