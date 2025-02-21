let score = "33abc"

//console.log(typeof score)

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

// when we convert number for ex "33" to a number it will get easily converted to a number
// when we convert a aphanumeric number to a number it will convert but the type will be NaN for ex "33abc" => NaN
// true will converted to 1 and false will get converted to 0

let bool = true

let valueInNumber1 = Number(bool)
//console.log(typeof valueInNumber1)
//console.log(valueInNumber1)

//Convert 1 or 0 to a boolean
let isLoggedIn = "abc"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(typeof booleanIsLoggedIn)
//console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "abc" => true

let someNumber = 33
let stringNumber = String(someNumber)
//console.log(stringNumber)
//console.log(typeof stringNumber)


/**************** Operations *************/
let value = 3
let negValue = -value

//console.log(negValue)
//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2**3)
//console.log(2/3)
//console.log(2%3)

let str1 = "Hello"
let str2 = " Abhinav"
// console.log(str1 + str2)

// NOT TO PERFORM SUCH CONVERSION 
// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+1)
// console.log(1+2+"1")
// console.log(3 + 4 * 5 % 3)
//console.log(+true)
//console.log(+"")

//Postfix increment
let x = 3
const y = x++
console.log(`x:${x}, y:${y}`);
console.log(`x:${x}, y:${y}`);

//prefix increment
let a = 3
const b = ++a
console.log(`a:${a}, b:${b}`)