let a= 10;
// const b = 20
var c= 300                  // global scope

if(true){                   // { block scope }
    let a= 100;
    const b = 20
    var c= 30
    // console.log("Inner a ",a)
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "satyam"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


if(true){
    const username = "Satyam"
    if(username === "Satyam"){
        const website = "youtube"
        // console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++ Interesting +++++++++++

console.log(addone(5));
function addone(num){
    return num + 1
}


console.log(addtwo(5))              //concept of hoisting
const addtwo = function(num){           
    return num+2
}
