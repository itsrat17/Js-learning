// console.log( 2 > 1)
// console.log( 2 >= 1)
// console.log( 2 < 1)
// console.log( 2 == 1)
// console.log( 2 != 1)

// console.log("2" > 1); //true
// console.log(2 > "1");  //true

// console.log(null > 0)  //falsee
// console.log(null == 0)  //false
// console.log(null >= 0)  //true

// //Why this happens?
// // the reason that an equality check == and comparisons > < >= <= work differently.
// //Comparisons convert null to a number, treating it as a 0
// // thats why >= is true and > is false 

// console.log(undefined > 0);  //false
// console.log(undefined == 0); //false
// console.log(undefined >= 0); //false

// strict check? ===

console.log("2" === 2); //false

//Always avoid null and undefined comparisons


 