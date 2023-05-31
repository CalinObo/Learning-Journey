const string ="The revolution will not be televised"
console.log(string)
const badString=string;
console.log(badString)

const sgl='single quotes'
const dbl="double quotes"

// const badQuotes ='What on earth?";

const sglDbl='Would you eat a "fish supper"?';
const dblSgl="I`m feeling blue.";
console.log(sglDbl);
console.log(dblSgl);

// const bigmouth = 'I've got no right to take my place…';
const bigmouth = 'I\`ve got no right to take my place...';
console.log(bigmouth);

//Concatenating strings

const greeting1=`Hello`;
const name= "Calin";
greeting=`Hello, ${name}`;
console.log(greeting)

const one="Hello, ";
const two="how are you?";
const joined=`${one}${two}`;
console.log(joined);

const button=document.querySelector("button");

function greet(){
    const name2=prompt("What is your name");
    alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener("click",greet);