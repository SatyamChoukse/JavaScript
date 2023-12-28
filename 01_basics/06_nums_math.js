const score = 400
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));


const anotherNumber = 123.5455

console.log(anotherNumber.toPrecision(3))



const hun= 1000000;

console.log(hun.toLocaleString('en-IN'));



//++++++++++++++++++++++++++=--MAth---++++++++++++++++++++++++++++++++++

console.log(Math);


console.log(Math.random());    // value lies between 0-1

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10)+1);


//formula for calculating numbers between particular range

const min=10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)