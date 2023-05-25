// let message;
// message='Hello';
// let message="Hello!";
let hello = 'Hello world!';
let message;
message=hello;
//alert(hello);
//alert(message);

const myBirthday='11.12.1997';
//alert(myBirthday)

const COLOR_RED = "#F00";
const COLOR_GREEN= "#0F0";
const COLOR_BLUE="#00F";
const COLOR_ORANGE="FF7F00";

let color=COLOR_ORANGE;
//alert(color);

let admin,name;
name="John";
admin=name;
alert(admin)

let planetEarth;
let currentVisitor;

const btn = document.querySelector("button")
const txt = document.querySelector("p")

btn.addEventListener("click",updateBtn);

function updateBtn(){
    if(btn.textContent==="Start machine"){
        btn.textContent="Stop machine";
        txt.textContent="The machine has started!";
    }
    else{
        btn.textContent="Start machine";
        txt.textContent="The machine is stopped.";
    }
}
