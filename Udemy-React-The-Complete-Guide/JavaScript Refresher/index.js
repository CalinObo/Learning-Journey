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

// const numbers=[1,2,3];
// const newNumbers=[...numbers,4,5];

// console.log(newNumbers);

// const person={
//     name:'Calin'
// };

// const newPerson={
//     ...person,
//     age:25
// }
// console.log(newPerson);

// const filter = (...args) =>{
//     return args.filter(el => el === 1);
// }
// console.log(filter(1,2,3,4))

// const numbers=[1,2,3];
// [num1, ,num3]= numbers;
// console.log(num1, num3)

// [a,b]=['Hello','Max']
// console.log(a)//Hello
// console.log(b)//Max

// const person = {
//     name:'Calin'
// };
// const secondPerson={
//     ...person
// };
// person.name='Iulian';
// console.log(secondPerson);

// const numbers1=[1,2,3];
// const doubleNumArray=numbers1.map((num)=>{
//     return num*2;
// });
// console.log(numbers1);
// console.log(doubleNumArray);

function transformToObjects(numberArray) {
    const newArray=numberArray.map((num)=>{
        return {val:num}
    });
    return newArray;
}
console.log(transformToObjects([1,2,3]));

