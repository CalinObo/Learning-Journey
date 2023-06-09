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
class Human {
  gender = "male";
  printGender = () => {
    console.log(this.gender);
  };
}
class Person extends Human {
  name = "Calin";
  gender = "female";
  printMyName = () => {
    console.log(this.name);
  };
}
const person = new Person();
person.printMyName();
person.printGender();