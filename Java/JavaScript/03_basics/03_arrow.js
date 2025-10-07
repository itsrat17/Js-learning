// const user = {
//     username : "Rachit",
//     price : 999,

//     welcomeMessage : function(){
//         console.log(`hello ${this.username}, your total is ${this.price}`);
//         console.log(this) //this will return the current updated context, one before updating and one after updating as function is called 2 times.
        
//     }
// }
// user.welcomeMessage()
// user.username = "Rat"
// user.welcomeMessage()

// console.log(this) //this will return a {} empty object in node, dino(js engines), but in browser's console, it returns a Window object.

// function coffee(){
//     let username = "itsrat17"
//     console.log(this); //only works in objects
//     console.log(this.username); //it gives undefined   
// }
// coffee()

//Arrow Functions

// const one = () =>{
//     let username = "itsrat17"
//     console.log(this); //gives empty {}
//     console.log(this.username); //it gives undefined   
// }
// one()

// const two = (num1, num2) => {
//     return num1 + num2;
// } //basic arrow function

// const three = (num1, num2) =>  (num1 + num2); //upgraded arrow function, known as IMPLICIT RETURN.

//in easier words, when you use {}, return keyword should be used.
// when you use (), no mandatory return keyword should be used


// console.log(two(3, 4))
 
// const four = (num1, num2)=> ({username : "itsrat17"}) //always use paranthesis for object return.
// console.log(four());


// const array = [2,5,6,8,12]
// array.forEach(function () {})
// array.forEach(() => {})
// array.forEach(() => ()) 

