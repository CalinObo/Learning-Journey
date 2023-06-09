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