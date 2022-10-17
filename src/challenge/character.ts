export class Character {
    name: string;
    family: string;
    age: number;
    lifeStatus: boolean;
    message: string;
    static serie = 'Game of Thrones';
    //friend: king | null;
    constructor(name: string, family: string, age: number) {
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

//comunicarse es un metodo, es un console log que es un return
