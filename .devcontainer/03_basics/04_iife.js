// Immediately Invoked Function Expressions (IIFE)
//The primary purpose of an IIFE is to create a private scope for variables, preventing them from polluting the global scope. 
//This is particularly useful when you want to encapsulate a piece of code and avoid naming conflicts with other variables or functions.

// (function chai(){
//     console.log('DB Connected');
// })();


(function execute(){
    console.log("Db connected...");
})();

( (num1, num2) => {
    console.log(num1 + num2);
} )(10, 20)