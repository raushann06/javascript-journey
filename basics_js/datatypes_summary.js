//Primitive

//7 types: Stirng, Number, BigInt, Boolean, null, undefined, Symbol

const score = 45;
const scoreValue = 45.45;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail; //undefined
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false because symbol is unique and immutable

//const bigNumber = 34567890123456789012345678901234567890n; // BigInt
//Reference

//Array, Objects, Funcions
const heros = ["Spiderman", "Ironman", "Hulk"];

let myObj = {
    name: "Raushan",
    age: 20
}
const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);

