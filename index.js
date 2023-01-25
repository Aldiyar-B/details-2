/*
Напишите класс Storage который будет создавать экземпляры для работы с localStorage
Пример:
const names = new Storage(’names’);
names.get() // возвращает значение для ключа names в localStorage;
names.set() // устанавливает значение для ключа names в localStorage;
names.clear() // очищает значение для ключа names в localStorage;
names.isEmpty() // вернет true если ключ names в localStorage имеет пустое значение (null || undefind);
Создайте несколько экземпляров класса Storage и убедитесь что все они работают правильно
Для класса Storage добавьте пару опций в конструктор
чтобы можно было выбирать local или session storage
возможность указать значение по-умолчанию (при создании экземпляра)
 
*/



class Storage {
    constructor(name, value, type = 'local') {
        this.name = name;
        //this.value = value;
        this.type = type;
        
        if (type === 'local') {
            this.storage = localStorage;
        } else if (type === 'session') {
            this.storage = sessionStorage;
        }
        //console.log(this.storage.type);
    }

    get() {
        return JSON.parse(this.storage.getItem(this.name));
    }

    set(value = undefined) {
        this.storage.setItem(this.name, JSON.stringify(value));
    }

    clear() {
        this.storage.removeItem(this.name);
    }

    isEmpty() {
        let result = this.get();
        console.log(`${result} is result`)
        if (result === undefined || result === null) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}


let names = new Storage("names", "local");
names.set("Maria");
names.get();

//names.set("Orlando");
//names.set('Harry');
//names.clear();
console.log(names.storage);

//names.isEmpty();
//names.clear();
names.isEmpty();
//names.get();