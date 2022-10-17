export class Character {
    //friend: king | null;
    constructor(name, family, age) {
        //no se le pasa el estado porque al principio siempre va a estar vivo
        this.name = name;
        this.family = family;
        this.age = age;
        this.lifeStatus = true;
        this.message = '';
        //this.friend = null
    }
    comunicate() {
        return this.message;
    }
    dead() {
        this.lifeStatus = false;
    }
}
Character.serie = 'Game of Thrones';
//comunicarse es un metodo, es un console log que es un return
