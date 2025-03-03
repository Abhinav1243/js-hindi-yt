

//Definition
function sayMyName(){
    console.log("a")
    console.log("b")
    console.log("c")
}

// sayMyName()

function addTwoNumbers(number1, number2){
    return number1 + number2
}

// console.log(addTwoNumbers(3, 5))

function loginUserMessage(username){
    if(username === undefined){
        console.log("Unknown User")
    }
    else{
        console.log(`${username} just logged in`)
    }
}

// console.log(loginUserMessage("Abhinav"))
loginUserMessage()


// How to pass objects in function
const user = {
    username: "abhinav",
    price: 99 
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200, 400, 100, 1000]))
