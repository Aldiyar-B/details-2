class Storage {
    static METHOD = {
        LOCAL:'localStorage',
        SESSION:'sessionStorage'
    }
    constructor(key='names',method=Storage.METHOD.LOCAL,defaultName){
        this.store = method === Storage.METHOD.LOCAL ? localStorage : sessionStorage
        this.key = key
        this.name = defaultName ?? this.store.getItem(this.key) ?? null
    }
     get(){
        return this.store.getItem(this.key)
     }
     set(value){
        this.store.setItem(this.key,value)
        this.name = this.store.getItem(this.key)
        return this;
     }
     clear(){
        this.store.removeItem(this.key)
        this.name = this.store.getItem(this.key)
        return this
     }
     isEmpty(){
        return this.store.getItem(this.key) ? false : true
     }

}

const names = new Storage('names',Storage.METHOD.SESSION);