var myName= "calin";//it can be reassigned, it`s a global variable
const myName2= "calin";//it cannot be changed, will throw an error when we try reassign
console.log(myName);
console.log(myName2);
let myName3="calin"//it can be reassigned, it`s block scopped and won`t work outside the function in which it has been declared

myName3="Calin Iulian"
myName="Iulian";
console.log(myName);
console.log(myName3);