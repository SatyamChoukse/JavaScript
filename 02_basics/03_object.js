// Declaration of objects

// 1) Singleton
// Object.create

// 2) object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Satyam",
    "fullname" : "Chouksey",
    age: 21,
    [mySym]: "myKey1",
    location: "Jabalpur",
    email: "satyam@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);

// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// agar object mai kisi value ko change karna ho to wo "over-write" ho jati hai **
JsUser.email = "satychouksey@gmail.com"

console.log(JsUser["email"]);

// Agar hume object mai koi change na kar sake to uske liye hume usse freeze karna padta hai

// Object.freeze(JsUser)

// JsUser.email = "satyhjkshajkhchouksey@gmail.com"

// console.log(JsUser);

// functions

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());