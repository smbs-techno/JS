// Immediately Invoked Function Expressions (IIFE)

(function self(){
    //named IIFE
    console.log("DB connected");
})(); //semicolon is compulsory here so that the 2nd IIFE function gets executes

// (){the first paranthesis}-> where we write the function definition
// (){the second paranthesis}-> for execution call

// why we should use IIFE?
// 1. to execute a function immediately after denying it
// 2. to avoid pollution of global scope
// 3. to create a private scope for variables

( (name) => {
    //unnamed IIFE
    console.log(`DB connected 2 ${name}`);
    
}) ('Sri')
