// Напишите класс Storage который будет создавать экземпляры для работы с localStorage
//
// Пример:
//     const names = new Storage(’names’);
// names.get() // возвращает значение для ключа names в localStorage;
// names.set() // устанавливает значение для ключа names в localStorage;
// names.clear() // очищает значение для ключа names в localStorage;
// names.isEmpty() // вернет true если ключ names в localStorage имеет пустое значение (null || undefind);
//
// Создайте несколько экземпляров класса Storage и убедитесь что все они работают правильно
// Для класса Storage добавьте пару опций в конструктор
//
// чтобы можно было выбирать local или session storage
//
// возможность указать значение по-умолчанию (при создании экземпляра)

class Storage {
    constructor(value=['Igor','Katya'],method  = 'local',key='names') {
        this.method = method === 'local' ? localStorage : sessionStorage
        this.value = value
        this.key = key
    }
    set(value,key) {
        return this.method.setItem(key ? key:this.key,JSON.stringify(value ? value : this.value))
    }
    get() {
        return this.method.getItem(this.key)
    }
    clear(key) {
        this.method.removeItem(key? key : this.key)
    }
    isEmpty() {
        const isInStore = this.method.getItem(this.key)
        return (isInStore === null || isInStore === undefined)
    }
}
const newClass = new Storage
newClass.set()
console.log(newClass.get())
console.log(newClass.isEmpty())
newClass.clear()
console.log(newClass.isEmpty())
newClass.set('Name',name)
const sessionStorageClass = new Storage(['Porosenok','Vasya'],'notLocal')
sessionStorageClass.set()
console.log(sessionStorageClass.get())
console.log(sessionStorageClass.isEmpty())
sessionStorageClass.clear('names')
sessionStorageClass.set(['Ivan'],'name')
console.log(sessionStorageClass.get())

