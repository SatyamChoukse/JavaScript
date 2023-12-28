const name ="Satyam"
const repoCount = 50

// console.log(name + repoCount);      //not good practice

console.log(`Hello my name is ${name} and my repository count ${repoCount}`);        //string manipulation

const gameName = new String('Sa-ty-am')

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-6,4);
console.log(anotherString);

const anotherStringtwo = "      sSAtyasmaj          "
console.log(anotherStringtwo)
console.log(anotherStringtwo.trim());

const url = "https://satyam.com/satyam%20chouksey"

console.log(url.replace('%20','-'))

// console.log(url.includes('satyam'));

// console.log(url.includes('hyy'));

console.log(gameName.split("-"));