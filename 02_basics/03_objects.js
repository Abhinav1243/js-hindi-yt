// there are two ways to declare an object one is with literal and another one is using constructor
// singleton - when you create an object using a constructor then singleton is the object created which means this is one of a kind

// Object Literals

const mySym = Symbol("key1")
const jsUser = {
    name: "Abhinav",
    "full name" : "Abhinav Singh",
    [mySym] : "mykey1", // Correct way to access Symbol
    age: 18,
    location: "Bhopal",
    email: "abhinav@abc.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// //another way to acess the object value
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "abhinav@chatgpt.com" // to change the value
// Object.freeze(jsUser) //If you don't want to change any value in the object
jsUser.email = "abhinav@microsoft.com"
// console.log(jsUser)

jsUser.greetings = function(){
    // a = "Hello Js User"
    // return a
    console.log("Hello Js User")
}

jsUser.greetings()
// console.log(jsUser.greetings())
// console.log(jsUser)

jsUser.greetingsTwo = function(){
    a = `Hello Js User ${this.name}`
    return a
}
console.log(jsUser.greetingsTwo())