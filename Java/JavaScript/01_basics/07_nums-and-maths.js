// const score = 400
// ///auto detected that the datatype is number

// const balance = new Number(314.0129)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))  //to just 2 decimal numbers

// const newNum = 11123.8966
// console.log(newNum.toPrecision(6))

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()) 
//  //in the bracket, if you use 'en-IN', it will show commas acc to indian standard
//  console.log(hundreds.toLocaleString('en-IN')) 

//************************************** Maths************************** 

// console.log(Math)
// console.log(Math.abs(-45))
// console.log(Math.round(4.5))
// console.log(Math.ceil(4.2))
// console.log(Math.min(1,2,3,4,5))
// console.log(Math.max(1,2,3,4,5))

// console.log(Math.random()) //always gives value between 0 and 1
// console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

//now the formula i am writing will be for random values between min and max
console.log(Math.floor((Math.random()*(max-min+1))+min))


