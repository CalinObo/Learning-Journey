//Data types

//There are 8 basic data types in JavaScript. Here we`ll cover them in general.
//We can put any tpe in a variable. For example, a variable can at one moment be a string and then store a number:
let message = "hello";
message = 123456;
console.log(message);
//Programming languages that allow such things, such as JavaScript, are called "dynamically typed", meaning that there
//exist data types, but variables are not bound to any of them.
//Number !!!!!!!!
let n = 123;
n = 12.345;
// the number type represents both integer and floating point numbers.
// Besides regular numbers, there are so-called "special numeric values" which also belong to this data type: Infinity,-infinity and NaN.
// Infinity respresents the mathematical Infinity, We can get it as a result of division by zero or just reference it directly:
console.log(1/0)
console.log(Infinity)


//NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance.
console.log("string"/2);//NaN
//NaN is sticky. Any further mathematical operation on NaN returns NaN:
console.log(NaN + 1);
console.log(3 * NaN);
console.log("not a number"/2-1);//NaN
// So if ther`s a NaN somewhere in a mathematical expression, it propagates to the whole result (there`s only one exception to that: NaN ** 0 is 1).
// Doing maths is "safe" in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.
// The script will never stop with a fatal error ("die"). At worst we`ll get NaN as the result.

//BigInt !!!!!!!
// In JavaScript, the "number" type cannot safely represent integer values large than (2^53 -1) (that`s 9007199254740991), or less than -(2^53 -1) for negatives.
// To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 * 10308), but outside of the safe integer 
//range ±(253-1) there’ll be a precision error, because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored.
// For example, these two numbers (right above the safe range) are the same:
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
//So to say, all od integers greater than(2^53-1) can`t be stored at all in the "number" type.
//For most purposes ±(2^53-1) range is quite enough, but sometimes we need the entire range of really big integers, e.g. for cryptography or microsecond-precision timestamps.
//BigInt type was recently added to the language to represent integers of arbitrary length
//A BigInt value is created by appending n to the end of an integer:
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
//Right now BigInt is supported in Firefox/Chrome/Edge/Safari, but not in IE.

//String !!!!
//A string in javascript must be surrounded by quotes.
let str="hello";
let str2='Single quotes are ok too'
let phrase =`can embed another ${str}`;
console.log(str,str2,phrase)

//In Js, there are 3 types of quotes 
//1.Double quotes: "Hello"
//2.Single Quotes:'Hello'
//3.Backticks:`Hello`
//Double and single quotes are "simple" quotes. There`s practically no difference between them in JavaSCript.
//Backticks are "extended functionality" quotes. They allow us to embed variables and expressions into a string by wrapping them in ${...}, for example:
let name="Calin";
console.log(`Hello, ${name}!`);
console.log(`the result is ${1+2}`);
//The expression inside ${...} is evaluated and the reult becomes a part of the string. We can put anything in there: a variable like name
//or an arithmetical expression like 1+2 or something more complex.
//Please note that this can only be done in backticks. Other quotes don`t have this embedding functionality!

//Boolean (logical type) !!!!!
//The boolean type has only two values: true and false. This type is commonly used to store yes/no values: true means "yes,correct", and false means "no,incorrect".
//For instance:
let nameFieldChecked=true;//yes
let ageFieldChecked=false;//no
//Boolean values also come as a result of comparisons:
let isGreater=4>1;
console.log(isGreater);

//The "null" value !!!!!
// the special null value does not belong to any of the types described above. It forms a separate type of it`s own which contains only the null value;
let age=null;
console.log(age)
//In js, null is not a "reference to a non-existing object" or a "null pointer" like in some other language.
//It`s just a special value which represents "nothing","empty" or "value unkown". The code above states that age is unknown.

//The undefined value !!!!!
//The special value undefined also stands apart. It makes a type of its own, just like null.
//The meaning of undefined is "value not assigned". If a variable is declared, but not assigned, then its value is undefined:
let age2;
console.log(age2)

//The objects and symbols !!!!

//the object type is special. All other types are called "primitive" because their values can contain only a single thing(be it a string or a number
//or whatever). In contrast, objects are used to store collections of data an more complex entities.
//The symbol type is used to create unique identifiers for objects.

let myName="Calin";
console.log(`Hello ${1}`); // 1
console.log(`hello ${"name"}`);//name
console.log(`hello ${myName}`);//Hello Calin
