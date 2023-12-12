// ******************* Datatypes ******************

//1. Primitive
// 7 types 
// String , Number, Boolean , Null, Undefined, Symbol, BigInt

//2. Non-Primitive /Reference Type

//Array, Object, Function

const names =["abc","pqr","xyz"];

console.log(names[0]);
console.log(names.length);

let myObj = {
    name : "Yamini",
    age : 31
};

console.log(myObj.name);

const myFunction = function(){
    console.log("Hello World!");
}

 /* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */


// ************************ Memory *************************

// 1) Stack (Primitive) => gives copy of memory
// 2) Heap(Non-Primitive) => gives refernce of memory


let name = "yamini";

let name2 = name;
 name2 = "hitesh";

 console.log(name);
 console.log(name2);

 let user ={
    email: "user@gmail.com",
    id: 5
 };

 let user2 = user;

 console.log(user2.email);

 user2.email ="xyz@gmail.com";

 console.log(user2.email);
 console.log(user.email);


