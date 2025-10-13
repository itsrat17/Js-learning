// Primitive and Non-Primitive
// data types are categorised on the basis of how they are stored in memory and are accessed] interview.

//Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
//is js dynamically typed or statically typed? 
//it is dynamically typed as type checking happens at runtime

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  //false because Symbol is unique

const bigNum = 89428792837492837492837492874398472987n  // n at last is used to explicitly declare it as bigInt
console.log(typeof bigNum);

//Reference type or Non-Primitive
// Array, Objects, Functions

const heroes = ["IronMan", "Batman"] //Array

let myObj = {
    name : "rat",
    age : 23,
}
// this is an object

const myFunc = function(){
    console.log("Hello World")
}

//********************************************************************* */

//Stack memory (Primitive) -> copy milti hai (change in copy doesnt change in original)
//Heap memory (Non-Primitve) -> reference milta hai (change in reference makes a change in original)







