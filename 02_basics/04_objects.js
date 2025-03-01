const tinderObject = new Object()

// const tinderObject = {}

tinderObject.id = "123abc"
tinderObject.name = "sammy"
tinderObject.isLoggedIn = false

// console.log(tinderObject)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "abc",
            lastname: "xyz"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2) // Object.assign(target, source)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

user = [
    {
        username: "abc"
    },
    {
        username: "xyz"
    },
    {
        username: "qwe"
    },
    {
        username: "123"
    }

]

// console.log(user[1].username)

// console.log(tinderObject)

// console.log(Object.keys(tinderObject))
// console.log(Object.values(tinderObject))
// console.log(Object.entries(tinderObject))

// console.log(tinderObject.hasOwnProperty('id'))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "abc_instructor"
}

// course.courseInstructor

const site = {
    name: "Sagar Enclave",
    address: "Bhopal",
    houseType: "Flats",
    courseInstructor: "xyz"
}

// Destructuring Object
const {courseInstructor: Instructor} = course // this will fetch the detail of the value in the course 

console.log(Instructor)

// API
// {
//     "name": "abc",
//     "coursename": "JavaScript",
//     "price": "free"
// }

[
    {},
    {},
    {}
]