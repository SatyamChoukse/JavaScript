// console.log("S");
// console.log("A");
// console.log("T");
// console.log("Y");
// console.log("A");
// console.log("M");


function sayMyName (){
    console.log("S");
    console.log("A");
    console.log("T");
    console.log("Y");
    console.log("A");
    console.log("M");
}

// sayMyName       //reference
// sayMyName()     //execution


// Create a functio to add TWO NUMBERS

// function add(num1,num2){        // (n1,n2) ->parameters
    
//     console.log(num1+num2);
// }

// add(3,4)                        // (3,4) -> Arguments

function add(num1,num2){        
    return num1+num2
}

const result = add(3,5)
// console.log(result);



function loginUserMessage(username ="saty"){

    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }

    if(!username){
        console.log("please enter a username")
        return
    }
    return  `${username} just logged in`
}

// console.log(loginUserMessage("Satyam"))
// console.log(loginUserMessage())


//suppose there is a user which add item in cart and we have to add item prices 

//so we use rest operator for laking multiple arguments

function calculateCartPrice(...num1){       //rest operator      
    return num1
}

// console.log(calculateCartPrice(200,400,500));



const user ={
    username:"satyam",
    prices: 99
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

handleObject({
    username:"saty",
    price: 77
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getarray){
    return getarray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,600,100]));
