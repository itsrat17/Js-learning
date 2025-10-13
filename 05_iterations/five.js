const coding = ["js", "cpp", "java", "rb", "python"]

// coding.forEach(function (item){
//     console.log(item);
// })

//in for-each loop, there is a callback function in (), therefore, we dont name it. 
// now we can name the individual element as num,i,item,val in function's ()

//for each using arrow function

// coding.forEach( (item) => {
//     console.log(item);
// })

// coding.forEach(printMe) //pass it as a parameter, just use its reference, dont execute it

// function printMe(item){
//     console.log(item);
// }

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// }) // full use case of forEach loop

// const myCoding = [
//     {
//         languageName : "JavaScript",
//         fileName : "js"
//     },
//     {
//         languageName : "Java",
//         fileName : "java"
//     },
//     {
//         languageName : "Python",
//         fileName : "py"
//     }
// ]

// myCoding.forEach(
//     (item) => {
//         console.log(item.languageName);
//     }
// )