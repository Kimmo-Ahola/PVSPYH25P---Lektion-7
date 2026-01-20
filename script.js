"use strict";
// modules are more modern than normal script files
import {add} from '/module.js'
// kommentar
console.log("Hello, world!");
// Vi ska aldrig använda var
var neverUseThis = 2;

// camelcase
// let is mutable
let myVariable = 1;
console.log(typeof(myVariable))
// const is immutable
const thisIsFrozen = 3;
/*
multi-line comment
// // snake_case
// my_variable
// // kebab case
// my-variable
// // pascal case
// MyVariable
*/

// Datatypes
/*
number = int och float
string
boolean = true, false
null = None
undefined = typ som None
object = klasser, dicts, json-objekt
array = []
*/

const three = "3";
// 3 == "3"

// 111 == "111" detta är true om man kör ==
// console.log(thisIsFrozen === three);

// 3 === "3" är false
// || betyder or
// && betyder and
if(3 > 4 && 4 > 3){
    console.log("test");
} else if (5 > 3){
    console.log("5 is larger than 3");
} else {
    console.log("else");
}

let myCase = "a"

switch(myCase){
    case "a":
        console.log("myCase is a");
        break;
    case "b":
        console.log("myCase is b");
        break;
}

// istället för f"{}" använder vi `${}`
let stringInterpolation = `${myCase} ${thisIsFrozen}`;

console.log(stringInterpolation);

let counter = 0;
while (counter <= 10){
    console.log(counter++);
}

for(let i = 0; i<= 10; i++){
    // We can print multiple statements in a console.log
    console.log(`My counter is ${i}`, "test", "test 2");
}

// ternary
// const ternary = (myStatus > 18) ? "Adult" : "Kid";

function isAdult(age){
    // return as ternary, a shorthand to do an if-else statement
    return (age >= 18) ? "Adult" : "Kid";
    if (age >= 18){
        return "Adult";
    } else {
        return "Kid";
    }
}

let myStatus = isAdult(18);

const myArray = ['1', "2", "3", 1, 2, 3];

myArray.push(17);
myArray.pop();
myArray.shift()
myArray.unshift();

const emptyArray = [];

emptyArray.push(1); // 0
emptyArray.push(2); // 1
emptyArray.push(3); // 2
emptyArray[20] = 1; // vi lägger till på index 20 och det blir ett hål mellan

for (let index = 0; index < emptyArray.length; index++){
    console.log(emptyArray[index]);
}

// mycket bättre sätt att loopa igenom collections
emptyArray.forEach(x => console.log(x));

// alert("This is an alert");

const multiply = (a, b) => a * b;
// function(a,b)..

let result = multiply(2, 3);

function greet(name="Kimmo"){
    console.log(`Hello, ${name}`);
}

greet();
greet(12);

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(this.name, this.age);
    }
}

let jsObject = {name:"name", age:34};

let myPerson = new Person("Kimmo", 34);
console.log(myPerson);

// myPerson.sayHello();

console.log(jsObject.name);

let moduleFunction = add(1, 2);
console.log(moduleFunction);

let mySecretKey = "this is a password"