// const myName= "calin";
var myName= "calin";
console.log(myName);

myName="Iulian";
console.log(myName);

//Arrow functions

// function myFnc(){
    //...
// } 
// is the same as
// const myFnc=() => {
    //...
// }

function printMyName(name){
    console.log(name);
}

printMyName("Calin")

const printMyName2=(name,age)=>{
    console.log(name,age);
}
printMyName2("Calin2",25)

const multiply=(number) =>{
    return number*2;
}

console.log(multiply(2))

//Exports & Imports

//person.js
const person={
    name:'Max'
}
export default person;

//utility.js
export const clean=() => { a }
export const baseDate=10;

//app.js
import person from './person.js'
import prs from './person.js'

//When we have export default in one file, we can import the export and name it as we wish
//When we have export a function, or a variable, we need to import it using {} and the actual name of the exported thing

import {baseDate} from '/utility.js'
import {clean} from '/utility.js'
import {baseDate,clean} from '/utility.js'

//When we have export a function, or a variable we can rename it using the word as 
import {baseDate as base} from '.utility.js'

//If we want to import everything we can use * and use them as bundled.data bundled.clean
import * as bundled from './utility.js'

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
        this.gender="Feminin"
    }
    printMyName(){
        console.log(this.name);
    }
}

const persona = new Persona();
persona.printMyName();
persona.printGender();

//Properties are like "variables attached to classes/objects"
//ES6
// constructor(){
//     this.myProperty='value';
// }
//ES7
myProperty='value';
//Methods are like functions attached to classes/objects
//ES6
//myMethod(){a}
//ES7
myMethod=()=>{a}

//Spread & Rest Operators
 
//spread is used to split up array elements or object properties
const newArray=[...oldArray,1,2] // takes all of the values from oldArray and putes them in the newArray followed by 1,2
const newObject= {...oldObject,newProp:5}// takes all the properties from the oldObject and their Values and adds them as key value pairs to the new object, as a side note if we have newProp:4, the newProp:5 will take precedence

//rest used to merge a list of function arguments into an array
function sortArgs(...args){
    return args.sort()
}
// ...args it will merge them into an array of arguments and we can use array method on the argument list


