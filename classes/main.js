"use script"

class Storage {
    constructor(name, value,method){
        this.name = name;
        this.value = value;
        this.method = 
        method === isStorage[0].local ? localStorage : sessionStorage;
        console.log(isStorage[0].local);
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
            return true;
        }
       
        return false;
    
    }
}


isStorage = [
    {local :'good'},
    {session : 'best'},
]
const names = new Storage("names", 29, isStorage[0].local);
names.set();



const surnames = new Storage("surnames", "like");
surnames.set();
surnames.set('gg');


const sports = new Storage("sports", ["sport", "look"])
sports.set();
sports.clear();