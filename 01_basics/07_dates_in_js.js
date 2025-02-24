// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString("en-IN"))
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())

console.log(typeof myDate)

// let myCreatedDate = new Date(2025, 1, 24, 18, 21)
let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString())
// let myTimeStamps = Date.now()
// console.log(myTimeStamps)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))
 let newDate = new Date()
 console.log(newDate)
 console.log(newDate.getMonth() + 1)
 console.log(newDate.getDay())

 console.log(newDate.toLocaleString('default',{
    weekday: "long",
 }))