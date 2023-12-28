// Datatype is divided into two categorys 1)primitive 2)Non primitive

//  PRIMITIVE -> 

//  7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt


const value= 100
const val = 100.3

const isLoggedIn= false
const outsideTemp = null
let useremail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
console.log(id);
console.log(anotherId);


// Reference(Nonprimitive)

// Array, Objects, Functions

const Heros = ["Shaktimaan", "Naagraj","Doga"];   //Array

let myObj = {                                     //Object - always in key value pair
    name:"Satyam",
    age:21,
}

const myFun = function(){                           //Functions
    console.log("Hello World");
}


// Type of val	Result

// Undefined	"undefined"
// Null	        "object"
// Boolean	    "boolean"
// Number	    "number"
// String	    "string"
// Function     "function"
// Object (native and does not implement [[Call]])	    "object"
// Object (native or host and does implement [[Call]])	"function"
// Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory types - Heap, stack

// Stack (Primitive) , Heap (Non- Primitive)

// Stack - copy of value

// Heap - Reference of value


let myname = "satyam"               // - stack
let anothername = myname
anothername = "helllooo" 

console.log(myname)
console.log(anothername);



let user1 = {                       // - Heap
    email : "saty@gmail.com",   
    age: 21
}

let user2 = user1

user2.email = "satyamchouksey@gmail.com"

console.log(user1.email)
console.log(user2.email);