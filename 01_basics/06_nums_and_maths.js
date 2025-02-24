const score = 400
console.log(score)

//another way to declare a number
const balance = new Number(100.564)
console.log(balance)

//Example for methods
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3))

const hundreds = 1000000

console.log(hundreds.toLocaleString('en-in'))

// +++++++++++++++ Maths ++++++++++++++
console.log(Math)
console.log(Math.abs(-4)) //convert negative to positive using absolute function
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.734))
// console.log(Math.floor(4.6))

console.log(Math.random())
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)