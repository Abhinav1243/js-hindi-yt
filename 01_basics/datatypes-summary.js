//Video 9 (https://www.youtube.com/watch?v=suMvZWjjKbo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=9)
/*types of datatypes
1) Primitive
2) Non-Primitive

# Primitive Datatype:
7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Reference (Non Primitive)
Array, Objects, Functions
*/

const heros = ["captain","spider","hulk"] //Array
let myObj = {
    name: "abhinav",
    age: 18
}   //Objects

const myFunc = function(){
    console.log("Hello World");
}

// console.log(typeof(myFunc))
// console.log(typeof(myObj))
// console.log(typeof(heros))
// console.log(myFunc)

let myYoutubename = "abc"
let anothername = myYoutubename
anothername = 'xyz'
console.log(myYoutubename)
console.log(anothername)

let userOne = {
    name: "abhinav",
    email: "abhinav@google.com"
}

let userTwo = userOne
userTwo.email = 'abhinav@gmail.com'

console.log(userOne.email)
console.log(userTwo.email)