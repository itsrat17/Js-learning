// console.log("R")
// console.log("A")
// console.log("C")
// console.log("H")
// console.log("I")
// console.log("T")  //what if i want to do this 5 times?

// function sayMyName() 
// {
//     console.log("R")
//     console.log("A")
//     console.log("C")
//     console.log("H")
//     console.log("I")
//     console.log("T") 

// }

// sayMyName //this is a reference of the function
// sayMyName() //this is the execution of the function

// function addTwoNumbers(num1, num2) //when we declare the functions, they are known as parameters.
// {
//     console.log(num1 + num2); //console.log se value store nhi hogi kisi variabkle mein
// }

// function addTwoNumbers(num1, num2) //when we declare the functions, they are known as parameters.
// {
//     let result = num1 + num2;
//     return result;
// }

// const x = addTwoNumbers(3, 4) //here 3 and 4 are known as arguments.
// console.log("Result: ", x); //here result is undefined. why? because we didnt return the value, only logged it

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("boss")) //wht if we dont write bosss? it says, undefined just logged in.

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Enter a valid name.");
//         return      
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())

//username === undefined is equal to !username 
//to avoid this, we can set some default values.

//shopping cart situation? we dont know the number of items(arguments), so we have to be ready with out parameters.
//here is the fix -> REST operator (...) 
// ... is the rest operator as well as spread operator. depends on its use case if it is rest or spread operator.

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200,400,500,2000)) //it returns an array with all the values, iterate and calculate the sum.

const user = {
    username : "rachit",
    price : 999
}




