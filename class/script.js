
class Storage{
    constructor(name,storage){
        this.name=name

        if(storage==='local'){
            this.storage=localStorage
        }
        if(storage==='session'){
            this.storage=sessionStorage
        }
    }
    get(){
       return  this.storage.getItem(this.name)

    }
    set(value){
        this.storage.setItem(this.name,value)
    }
    clear(){
        this.storage.removeItem(this.name)
    }
    isEmpty(){
        if(this.storage.getItem(this.name)===undefined||this.storage.getItem(this.name)===null){
            return true
        }
        else{
            return false
        }
    }
}

const names=new Storage('names','session')
names.set('oo')
console.log(names.get())

console.log(names.isEmpty())