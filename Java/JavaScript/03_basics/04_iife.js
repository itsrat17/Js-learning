//immediately invoked function expression (IIFE)

//used when we want to immediately call function while making a new scope that isnt used from global scope

// function coffee(){
//     console.log("DB CONNECTED");
// }
// coffee() 
//also an immediate function

(function coffee(){
    console.log("DB CONNECTED");
})(); //always use semicolon
//this is an IIFE

//we use IIFE to remove global variable pollution

// ( ()=> {
//     console.log("DB 2 CONNECTED")
// }) (); //arrow function in IIFE

//how to pass arguments and parameters?

( (name)=> {
    console.log(`DB 2 CONNECTED MR. ${name}`)
}) ("Rachit"); 