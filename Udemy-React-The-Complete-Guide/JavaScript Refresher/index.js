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
export default person

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

//When we have export a function, or a variable we can rename it using the word as 
import {baseDate as base} from '.utility.js'

//If we want to import everything we can use * and use them as bundled.data bundled.clean
import * as bundled from './utility.js'
 asd