// class Human {
//   gender = "male";

//   printGender = () => {
//     console.log(this.gender);
//   }
// }
// class Person extends Human {
//   name = "Calin";
//   gender = "female";

//   printMyName = () => {
//     console.log(this.name);
//   };
// }

// const person = new Person();
// person.printMyName();
// person.printGender();

const numbers=[1,2,3];
const newNumbers=[...numbers,4,5];

console.log(newNumbers);

const person={
    name:'Calin'
};

const newPerson={
    ...person,
    age:25
}
console.log(newPerson);

const filter = (...args) =>{
    return args.filter(el => el === 1);
}
console.log(filter(1,2,3,4))