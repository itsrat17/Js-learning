// array


// const myArr = [1,3,5,7, "rachit", true]  //js arrays are resizable and can contain mix of datatypes
// console.log(myArr[3]);  //indexing, start from zero.
// Arrays in javascript make Shallow copies
/*
Shallow Copy:
A shallow copy creates a new object or array and copies the values of the original object's top-level properties. However, if any of these properties are references to other objects or arrays (i.e., nested structures), only the reference is copied, not the actual nested object or array itself. This means that both the original and the copied object will share the same reference to the nested structure. 
Effect: Changes made to a nested object or array within the shallow copy will also affect the original object, and vice versa, because they both point to the same underlying data.
Methods for shallow copy:
Object.assign({}, originalObject)
Spread syntax (...) for objects and arrays: let newObj = { ...originalObj }; or let newArr = [ ...originalArr ];
Array.prototype.concat() for arrays
Array.from() for arrays
Example of Shallow Copy:
JavaScript

let originalObj = { a: 1, b: { c: 2 } };
let shallowCopy = { ...originalObj };

shallowCopy.b.c = 3; // Modifying the nested object in the shallow copy

console.log(originalObj.b.c); // Output: 3 (original object is affected)


Deep Copy:
A deep copy creates a completely independent copy of the original object, including all nested objects or arrays. This means that every level of the object structure is duplicated, resulting in a new object where no references are shared with the original. 
Effect: Changes made to the deep copy will not affect the original object, and vice versa, because they are entirely separate entities in memory.
Methods for deep copy:
JSON.parse(JSON.stringify(originalObject)): This is a common and simple way to achieve a deep copy for objects that are JSON-serializable (i.e., do not contain functions, undefined, Date objects, or other non-JSON values).
structuredClone(): Available in modern JavaScript environments (Node.js 17+, browser support), this method provides a robust way to deep clone various data types, including Date objects, RegExp, Map, Set, ArrayBuffer, etc.
Third-party libraries: Libraries like Lodash provide deep cloning utilities (e.g., _.cloneDeep()) that handle complex scenarios and edge cases.
Example of Deep Copy:
JavaScript

let originalObj = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(originalObj)); // Using JSON method

deepCopy.b.c = 3; // Modifying the nested object in the deep copy

console.log(originalObj.b.c); // Output: 2 (original object remains unchanged)
*/

//Array Methods
const myArr = [1, 2, 3, 4, 5, 6];
console.log("og array", myArr)
// myArr.push(6)
// console.log(myArr);
// myArr.push(5)
// myArr.push("Rat")
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(34) //adds 34 as the 0th index in array. not used much because if many elements are there, puts load on the system
// myArr.shift() //removes the first element in the array

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const stringofmyArr = myArr.join(); //same elements but it just converts the type of array to a string
// console.log(stringofmyArr);
// console.log(typeof stringofmyArr);

// console.log(myArr.slice(1,  4)) // doesnt include the last specified index
// console.log("sliced array", myArr);

// console.log(myArr.splice(1 ,4))
// console.log("spliced array", myArr); // it manipulates the original array whereas slice does not. it removes the (1,4) part and only returns 0,5 element of the array








