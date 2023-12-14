const user ={
    name : "yamini",
    age: 31,
    displayMessage: function(){
        console.log(`Hi ${this.name} welcome to website`);
    },
    officeNumber : 7, 
    displayofficeNumber: function(){
        console.log(`Hi ${this.name} your office number is: ${this.officeNumber} `);
        console.log(this);
    }
}

// user.displayMessage()

// user.name ="hitesh";
// user.displayMessage()

 user.name = "Aarya"
 user.officeNumber = 9
user.displayofficeNumber()

// function example(){
//     console.log(this); //returns global object
// }

// example()

function example1(){
    let userName = "yamini";
    console.log(this.userName);  //undefined
}

example1()

const arrowFunctionExample = () => {
    userName = "hitesh";
    console.log("Hello World!");
    console.log(this); //  returns empty parenthesis {}
    console.log(this.userName);   //undefined
}

arrowFunctionExample();


const addTwo =(num1, num2) =>{
    return num1 + num2;
}

console.log(addTwo(6,7));

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(4,6));