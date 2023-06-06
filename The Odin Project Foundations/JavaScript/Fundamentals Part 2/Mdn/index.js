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

const greeting2="Hello";
const name2="Calin";
console.log(greeting2+", "+name2);
console.log(`${greeting2}, ${name2}`);

const name3 ="Calin";
const number3=121;
console.log(`${name3}, ${number3}`);

const myString="123";
const myNum=Number(myString);
console.log(typeof myNum);

const myNum2=123;
const myString2=myNum2.toString();
console.log(typeof myString2);

const song ="Knife Party";
const score=10;
const highestScore=10;
const output =`I like the song ${song}. I gave it a score of ${(score/highestScore)*100}%`;
console.log(output);

const output2=`I like the song.
I gave it a score of 90%`;
console.log(output2);

const output3="I like the song.\nI gave it a score of 90%";
console.log(output3);