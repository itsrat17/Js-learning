// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// {} // this is scope. works with functions/ control flow/ conditionals.
// var c = 500; //even if i define it 500, var c = 30 will execute

// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a); //follows the function scope and gives error
// console.log(b); //follows the function scope and gives error
// console.log(c); //fucks up and logs 30. major fuck up.
// dont use var.

//interview tip - the global scope in browser's console and the global scope through node are DIFFERENT.

//Closure and scoping

// function one(){
//     const username = "itsrat17 ";
//     function two(){
//         const age = "21years";
//         console.log(username + age)
//     }
//     // console.log(age); // out of scope, error
    
//     two()
// }
// one()

//same can be done for if-else condition.

//************************************* Interesting.************************************//

// function addone(num){
//     return num + 1
// } //simple declaration, even if you write addone(5) in the start of the program, it would not give an error.
// addone(5)

// const addTwo = function(num){
//     return num + 2;
// } //this is an expression, addTwo(5) can ONLY be used after the declaration of the expression. otherwise, it would give an error.
// addTwo(5)

//Learn about hoisting in js



