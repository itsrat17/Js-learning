//singleton ? when we declare object like constructor, it is always a Singleton.
// syntax = Object.create;

const mysim = Symbol("key1")


const jsUser = {
    name : "Rachit", 
    "full name" : "Rachit Baliyan" ,
    age : 21,
    [mysim] : "mykey1", //but this wont be used as a symbol right now, to use it as a symbol use [mysim] ->syntax h documented.
    location : "Bulandshahr",
    isLoggedIn : true,
    lastLogin : ["Monday"]
}

// console.log(jsUser.age);
// console.log(jsUser["age"]);
// console.log(jsUser["full name"])
// console.log(jsUser[mysim]);

// jsUser.location = "noida"
// console.log(jsUser);
// Object.freeze(jsUser). //no further modification is allowed after this.
// jsUser.location = "haridwar"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
    
}

jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());










