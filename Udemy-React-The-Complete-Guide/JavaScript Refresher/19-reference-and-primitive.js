//Reference and primitive types
const number=1;//primitive type boolean,strings,numbers
const num2=number;
console.log(num2)

//Objects and arrays are reference types
const person={
    name:'Calin'
};

const secondPerson=person; // this copies the path to the memory that stores the objects properties
console.log(secondPerson)
const seconPerson={
    ...person              // this stores the actual object properties from the first object, we have to use the spread operator
};

person.name='Iulian';

console.log(secondPerson)
