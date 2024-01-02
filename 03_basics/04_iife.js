// Immediately Invoked function Expressions

// What is IIFE..?
// -> Jo function immeduiate execute hoo jaye
// -> global scope k pollution se problem hoti hai kai baar to us global scope k variable hai uske poluution  ko hatane k liye humne IIFE ka use kiya

(function chai(){
    console.log(`DB Connected`);
})();                               // we use ';' to stop function

// (function definition)(execution)

(()=>{
    console.log(`DB Connected TWO`)
})();

((name)=>{
    console.log(`DB Connected TWO ${name}`)
})('Satyam');

