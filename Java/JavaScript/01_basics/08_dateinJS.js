//dates

// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(typeof (myDate))  //object

// let myCreatedDate = new Date(2025, 10, 21)
// console.log(myCreatedDate.toLocaleDateString())
// // console.log(myCreatedDate.toDateString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// // this gives the exact time in milliseconds from 1 January 1970

// let randomDate = new Date(2025, 10, 21)
// console.log(randomDate.getTime())
// // this gives the time in ms from 1 jan 1970 to the desired date.

// //To use date and time in javascript, we compare the following times in milliseconds.
// // just change them to seconds. (divide by 1000)
// //if decimal values come, math.floor it 

let d = new Date();
console.log((d.getMonth())+1) //+1 because the returned month is from 0th index, 0->january


d.toLocaleString('default', {
    weekday : "short",
    timeZone : ''
}) //it can be used to customise the return value of .toLocaleString

