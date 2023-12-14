let a = 300;  //global scope

if(true){
    let a = 10           //block scope
    const b = 20
   console.log("Inner a :", a);
}

console.log("outer a:", a);

console.log( "addOne result:", addOne(7));

function addOne(num){
    return num + 1;
}

console.log("addTwo result:", addTwo(7)); //error :Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}

// console.log("addTwo result:", addTwo(7)); //9