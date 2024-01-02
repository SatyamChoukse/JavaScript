// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Satyam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "saty@gmail.com",
    fullname: {
        userfullname:{
            firstname: "satyam",
            lastname: "chouksey"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 ={
    1: "a", 2: "b"
}
const obj2 ={
    3:"a" , 4:"b"
}

// const obj3  = {obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}

// console.log(obj3);


const user = [
    {
        id: 1,
        email: "satya@gmail.com"
    },
    {
        id: 2,
        email: "saa@gmail.com"
    }
]

user[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
