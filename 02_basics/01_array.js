// array
const myArr = [0, 1, 2, 3, 4, 5]
const heros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[2])

// Array Methods

// myArr.push(6) // Insert value into the array to the last
// myArr.push(7)
// myArr.pop() // Remove the last value from the array

// myArr.unshift(0) // insert the value from the first and will remove the last value
// myArr.shift() // Remove the value from the start
// console.log(myArr.includes(9)) // Questionnaires methods and will result in True or False
// console.log(myArr.indexOf(4))

// const newArr = myArr.join() // Join convert the data type from object to string

// console.log(myArr)
// console.log(typeof newArr)

// Slice and Splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)

const myn2 = myArr.splice(3, 5) // Modify the original array, which means it will remove the value from 3 to 5 index values and will keep the remaining in the array

console.log("  ", myn1)
console.log("B ", myn2)
console.log("C ", myArr)