// let message;
// message='Hello';
// let message="Hello!";
let hello = "Hello world!";
let message;
message = hello;
//alert(hello);
//alert(message);

const myBirthday = "11.12.1997";
//alert(myBirthday)

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "FF7F00";

let color = COLOR_ORANGE;
//alert(color);

let admin, name;
name = "John";
admin = name;
// alert(admin)

let planetEarth;
let currentVisitor;

const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}
// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
let x = 1;
x = -x;
console.log(x);

//An operator is binary if it has two operands. The same minus exists in binary form as well:
x = 1;
let y = 3;
console.log(-(-x - y));

console.log(4 ** (1 / 2));
console.log(8 ** (1 / 3));
// Let`s meet the features of Javascript operators that are beyond scholl arithmetics
// Usually, the plus operator + sums numbers.
// But, if the binary + is applied to strings, it merges(concatenates) them:

let s = "my" + "string";
console.log(s);

//Note that if any of the operands is a string, then the other one is converted to a string too
console.log("1" + 2);
console.log(2 + "1");

//Here`s a more complex example
console.log(2 + 2 + "1"); //41

//Here operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it`s like 4+'1' ='41'

console.log("1" + 2 + 2); //122 and not 14

//Here, the first operand is a string, the compiler treats the other two operand as string too. The 2 gets concatenated to '1', so it`s like '1'+2="12" and "12" +2 ="122"
//The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

console.log(6 - "2");
console.log("6" / "2");
//It actually does the same thing as Number(...), but is shorter.
// The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fiels, they are usually strings. What if we want to sum them?
//The binary plus would add them as strings

let apples = "2";
let oranges = "3";
console.log(apples + oranges); // "23", the binary plus concatenates strings

//If we want to tream them as numbers, we need to convert and then sum them

console.log(+apples + +oranges);

//From a mathematician`s standpoint, the abundance of pluses may seem strange. But from a programmer`s standpoint, there`s nothing special: unary pluses are applied first,
//they convert strings to numbers, and then the binary plus sums them up. Why are unary pluses applied to values before the binary ones? As we`re going to see that`s because of their higher precedence.

//Operator precedence

//If an expression has more than one operator, the execution order is defined by their precedence, or in other words, the default priority order of operators.
//From school, we all know that the multiplication in the expression 1+2*2 should be calculated before the addition. That`s exactly the precedence thing. The multiplication is said to have a higher precedence than the addition.

//Parentheses override any precedence, so if we`re not satisifed with the default order, we can use them to change it. For example, (1+2)*2.

//There are many operators in JavaScript. Every operator has a corresponding precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.

//Assignment

//Let`s note that an assignment - is also an operator. It is listed in the precedence table with the very low priority of 2.
//That`s why, when we assign a variablie like x=2*2+1, the calcultaions are done first and then the = is evaluated, storing the result in x.

let x1 = 2 * 2 + 1;
console.log(x1);

//Assignment = returns a value

// The fact of = being an operator, not a "magical" language construct has an interesting implication.

//All operators in JavaScript return a value. That`s obviours for + and -, but also true for =.

//The call x=value writes the value into x and then returns it.

//Here`s a demo that uses an assignment as part of a more complex expression:

let a1 = 1;
let b1 = 2;

let c1 = 3 - (a1 = b1 + 1);

console.log(a1);
console.log(c1);

//Chaining assignments

//Another interesting feature is the ability to chain assignment:

let a2, b2, c2;
a2 = b2 = c2 = 2 + 2;
console.log(a2, b2, c2);

//Chained assignments evaluate from right to left. First, the rightmost expression 2+2 is evaluated and then assigned to the variables on the left: c,b and a. At the end, all the variables share a single value.
//Once again, for the purposes of readability it`s better to split such code into few lines:
c = 2 + 2;
b = c;
a = c;

//Modify-in-place

//We often need to apply an operator to a variable and store the new result in that same variable.

//For example

let n = 2;
n = n + 5;
console.log(n);
n = n * 2;
console.log(n);

// This notation can be shortened using the operators += and*=:
n = 2;
n += 5;
console.log(n);
n *= 2;
console.log(n);

//Short "modifiy-and-assign" operators exist for all arithmetical and bitwise operators /=, -=,etc.
//Such operators have the same precedence as a normal assignment, so they run after most other calculations:
n = 2;
n *= 3 + 5;

console.log(n);

//Increment/decrement

//Increasing or decreasing a number by one is among the most common numerical operations.
//So, there are special operators for it
//Increment ++ increases a variable by 1:

let counter = 2;
counter++;
console.log(counter);

//Decrement -- decreases a variable by 1:

counter = 2;
counter--;
console.log(counter);

//Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.
//The operators ++ and -- can be placed either before or after a variable.
//When the operator goes after the variable, it is in "postfix form":counter ++.
//The "prefix form" is when the operator goes before the variable: ++counter.
//Let`s clarify. As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value
//while the postfix form returns the old value (prior to increment/decrement).
//To see the difference, here`s an example:

counter = 1;
a = ++counter; //(*)
b=a;

console.log(a,b);

// In the line (*), the prefix form ++ counter increments counter and returns the new value, 2. So, the alert shows 2.
// Now, let`s use the postfix form:

counter = 1;
a = counter++; //(*) changed ++counter to counter++
b=a;
c=b++;
console.log(a,b,c);

// In the line (*), the postfix form counter++ also incrementes counter but returns the old value(prior to increment). So, the alert shows 1.
// To summarize:
// -if the result of increment/decrement is not used, there is no difference in which form to use
// -if we`d like to increase a value and immediately use the result of the operator, we need the prefix form
// -if we`d like to increment a value but use it`s previous value, we need the postfix form.

//The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.

counter=1;
console.log(2*++counter);

counter=1;
console.log(2*counter++);

//Though technically okay, such notation usually makes code less readable. One line does multiple things == not good.
//While reading code, a fast "vertical" eye-scan can easily miss something like counter++ and it won`t be obvious that the variable increased.
//We advise a style of "one line - one action"
counter=1;
console.log(2* counter);
counter ++;

//Comma
// The comma operator, is one of the rarest and most unusal operators. Sometimes, it`s used to write shorter code, so we need to know it in order to understand what`s going on.
// The comma operator allows us to evaluate several expressions, dividing them with a comma,. Each of them is evaluated but only the result of the last one is returned.

//For example:
a=(1+2,3+4);
console.log(a);

//Here, the first expression 1+2 is evaluated and its result is thrown away. Then, 3+4 is evaluated and returned as the result.

//Comma , has a very low precendence. Please note that the comma operator has very low precedence, lower than =, so parantheses are important in the example above.
//Without them: a=1+2, 3+4 evaluates + first, summing the number into a=3,7, then the assignment operator = assigns a=3, and the rest is ignored. It`s like (a=1+2),3+4.

//Why do we need an operator that throws away everything except the last expression?
//Sometimes, people use it in more complex constructs to put several actions in one line.
//For example:

for(a=1,b=3,c=a*b;a<10;a++)
{
    ///
}
//Such tricks are use in many JavaScript frameworks. That`s why we`re mentioning them. But usually they don`t improve code readability so we should think well before using them.
  a=1,b=1;
  c=++a//2
  d=b++//1
  console.log(c);//2
  console.log(d);//1
  console.log(a);//2
  console.log(b);//2

  a=2;
  x=1+(a*=2);

  console.log(x,a)//5,4

console.log(typeof(""+1+0));//string
console.log(typeof(""-1+0),""-1+0);//number -1
console.log(typeof(true+false),true+false);//number 1;
console.log(typeof(6/"3"),6/"3");//number 2;
console.log(typeof("2"*"3"),"2"*"3");//number 6;
console.log(typeof(4+5+"px"),4+5+"px");//string 9px 
console.log(typeof("$"+4+5),"$"+4+5);//string $45
console.log(typeof("4"-2),"4"-2);//number 2
console.log(typeof("4px"-2),"4px"-2);//number NaN
console.log(typeof(" -9 "+5)," -9 " +5)//string -9 5
console.log(typeof(" -9 "-5)," -9 " -5 )//number -14
console.log(typeof(null+1),null+1)// number 1
console.log(typeof(undefined+1),undefined+1)//number NaN
console.log(typeof(" \t \n" -2)," \t \n" -2)//number -2

a = prompt("First number?",1);
b = prompt("Second number?",2);

alert(Number(a)+Number(b));