const newUser = {} //does ot create a singleton
// const newUser1 = new Object();  //creates a singleton
// console.log(newUser);
// console.log(newUser1);

newUser.id = "123abc"
newUser.name = "rat"
newUser.isLoggedin = false;

// const regUser ={
//     email : "abc@xyz.com",
//     fullname : {
//         userFullname:{
//             firstName : "Rachit",
//             lastName : "Baliyan"
//         }
//     }
// }

// console.log(regUser.fullname?.userFullname.firstName);

// const obj1 = { 1 : "a", 2 : "b"}
// const obj2 = { 3 : "c", 4 : "d"}

// obj3 = {obj1,obj2}
// console.log(obj3); //same problem like array, nested objects

// const obj3 = Object.assign({}, obj1, obj2) //read its documentation.
// console.log(obj3);

// const obj3 = {...obj1, ...obj2} //easiest to merge 2 objects in a single object
// console.log(obj3);

//when we fetch from a database, we get an array of Objects
let users =[
    {
        id : "123abc" ,
        gmail : "abx@cyz"
    },
    {},
    {}
]

// console.log(users[0])
// console.log(Object.keys(users))

// console.log(Object.keys(newUser))
// console.log(Object.values(newUser))
// console.log(Object.entries(newUser)) //creates an array of each key-value pair

///when we fetch from a database, sometimes the value doesnt exist, to check?
// console.log(newUser.hasOwnProperty('isLoggedin'))

const course = {
    cname : "JavaScript beginner course",
    price : "999" ,
    courseMentor : "SteveJobs"
}

//now to access courseMentor?
course.courseMentor //-> correct syntax

const {courseMentor} = course; //effective if we use course.courseMentor like 5 times, 10 times.

console.log(courseMentor);

const {courseMentor : tutor} = course ; // this is known as de structuring the object

console.log(tutor);










