//1) singleton
//A Singleton is an object which can only be instantiated one time. 
//Repeated calls to its constructor return the same instance and in this way one can ensure that they don't accidentally create, say, two Users in a single User application.

// Object.create

//2) object literals

const symbol1 = Symbol("key1");

const user = {
    name : "yamini",
    age: 31,
    [symbol1]: "key",
    location: "MD",
    email: "abc@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["MOnday", "Saturday"]
}

console.log(user.name);
console.log(user["name"]);
console.log(user.symbol1);
console.log(typeof [symbol1]);
console.log(typeof symbol1);
console.log(typeof user.age);
console.log(user.email);

 // Object.freeze(user);
user.email ="xyz@gmail.com";
console.log(user.email);

user.greeting = function(){
    console.log("Hello Greeting from me!");
}

console.log(user.greeting());

user.greeting1 = function(){
    console.log(`Hello Greeting1 from me! ${this.name}`);
}

console.log(user.greeting1());
