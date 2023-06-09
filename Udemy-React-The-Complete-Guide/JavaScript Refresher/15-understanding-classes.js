//Understanding classes

// Clases are blueprints for javascript objects

class Person{
    name='Calin'; // properties properties are variable attached to classes
    call = () => {a} // methods methods are function attached to clases
}

// A class is instantiaded with the new keyword
const myPerson = new Person()
myPerson.call();
console.log(myPerson.name);

//A class can also inherit another class taking all of it`s properties and methods

class Human{
    contructor(){
        this.gender="Male";
    }
    printGender(){
        console.log(this.gender);
    }
}
class Persona extends Human{
    constructor(){
        super()
        this.name="Calin";
        this.gender="Feminin";
    }
    printMyName(){
        console.log(this.name);
    }
}

const persona = new Persona();
persona.printMyName();
persona.printGender();
