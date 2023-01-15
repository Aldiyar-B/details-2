class Storage {
    constructor (name, type = 'local') {
        this.name = name
        this.type = (type === 'local') ? localStorage : sessionStorage
    }

    get () {
        this.type.getItem(this)
    }

    set (value = undefined) {
        this.type.setItem(this, value)
    }

    clear () {
        this.type.removeItem(this)
    }

    isEmpty () {
        const item = this.type.getItem(this)
        if (item === null || item === undefined) {
            return true
        }
        return false
    }
}

const names = new Storage('session');
console.log(names.set("Anna"))
console.log(names.get())
console.log(names.clear())
console.log(names.get())
console.log(names.isEmpty())