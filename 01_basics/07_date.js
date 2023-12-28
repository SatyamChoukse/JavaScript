// january 1, 1970

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)

// let myCreatedDate = new Date(2024,0,1)
// let myCreatedDate = new Date(2024,0,1)
// let myCreatedDate = new Date("2023-01-11")      //yy-dd-mm
let myCreatedDate = new Date("01-14-2023")      //mm-dd-yy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})