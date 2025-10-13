// const marvel = ["IronMan", "CapAmerica", "Thor"]
// const dc = ["Batman", "Superman", "flash"]

// marvel.push(dc)
// console.log(marvel); // array within an array 

// let heroes = marvel.concat(dc) //concat returns a new array
// console.log(heroes);

//easiest operator is spread operator

// const all_heroes = [...marvel, ...dc] //spread operator
// console.log(all_heroes);


// const array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const simpleArray = array.flat()
// console.log(simpleArray.flat()); // in the parameters, use to what extent or depth you need to flat out the array, use Infinity for no brainer

//when we scrape data, it often comes in objects, strings and etc. but we want it in array form
// console.log(Array.isArray("Rachit")) //false

// console.log(Array.from("Rachit"))
//  // makes an array out of it

// console.log(Array.from({
//     name : "rachit"
// }))  //this would give an empty array because we need to specify if we want an array of keys or value


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));








