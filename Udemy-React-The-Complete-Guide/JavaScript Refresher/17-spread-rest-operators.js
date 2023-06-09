//Spread & Rest Operators
 
//spread is used to split up array elements or object properties
const newArray=[...oldArray,1,2] // takes all of the values from oldArray and putes them in the newArray followed by 1,2
const newObject= {...oldObject,newProp:5}// takes all the properties from the oldObject and their Values and adds them as key value pairs to the new object, as a side note if we have newProp:4, the newProp:5 will take precedence

//rest used to merge a list of function arguments into an array
function sortArgs(...args){
    return args.sort()
}
// ...args it will merge them into an array of arguments and we can use array method on the argument list

const numbers=[1,2,3];
const newNumbers=[...numbers,4];
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