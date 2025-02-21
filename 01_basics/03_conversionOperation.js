let score = "33abc"

console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// when we convert number for ex "33" to a number it will get easily converted to a number
// when we convert a aphanumeric number to a number it will convert but the type will be NaN for ex "33abc" => NaN
// true will converted to 1 and false will get converted to 0

let bool = true

let valueInNumber1 = Number(bool)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)

//Convert 1 or 0 to a boolean
let isLoggedIn = "abc"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "abc" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)