"use script"

class Storage {
    constructor(name, value, isStorage){
        this.name = name;
        this.value = value;
        this.method = 
        method === isStorage[0].surname ? localStorage : sessionStorage;
    };
    set (value){
            let key = this.name;
            let currentValue = value ?? this.value ?? null;
            let data = this.method.setItem(key, JSON.stringify(currentValue));
            return data;
        
    }
    get(){
        let data = JSON.parse(this.method.getItem(this.name));
        if (data === null){
            return false;
        }
    }
    clear(){
        let data = this.method.getItem(this.name);
        if(data === null){
            return;
        }
        this.method.removeItem(this.name);
    }
    isEmpty(){
        let data = this.method.getItem(this.name);
        if(data === null || data === undefined){
            return console.log(true);
        }
       
        return console.log(false);
    
    }
}


isStorage = [
    {local :'good'},
    {session : 'best'},
]
const names = new Storage("names", 29, isStorage[0].surname);
names.set();
names.set('gg')
names.isEmpty();
