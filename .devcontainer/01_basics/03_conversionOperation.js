let score = 33;

console.log(typeof score); //number
console.log(typeof (score)); //number

let score1 = "33";


console.log(typeof score1); //string

let valueInNumber = Number(score1);
console.log(typeof valueInNumber); //number

let score2 ="33abc";

let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2); //number
console.log(valueInNumber2); //NaN

//when we convert following datatype values to Number
//"33" => 33
//"33abc" =>NaN
//true =>1 ; false =>0

let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //false

//when we convert following datatype values to Boolean

//0 => false , 1=>true
//"" => false, "yamini" =>true

let someNumber = 33;
 let someStringNumber = String(someNumber);
 console.log(someStringNumber); //33
 console.log(typeof someStringNumber); //string