const user = {
    username: "satyam",
    price: 999,

    welcomeMessage: function(){                             // this keyword-> current contest ko point karta hai
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "satyam"
//     console.log(this.username)
// }

// chai()


// const chai = function(){
//     let username= "satyam"
//     console.log(this.username);
// }





// ++++++++++ Arrow Function +++++++++++

const chai = () => {
    let username= "satyam"
    console.log(this);
}
// chai()



// const addTwo = (num1,num2) =>{
//     return num1+num2
// }

const addTwo = (num1,num2) => (num1+num2)       // implicit return


console.log(addTwo(4,5));

