const name = "yamini";
const repoCount = 50;

console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('yaminihp');

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

const gameName2 = new String('yaminihp');

const newString = gameName2.substring(2,6)

console.log(newString);

const anotherString = gameName2.slice(2, 2);

console.log(anotherString);

const newStringOne = "     Yamini   "

console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20patil";

console.log(url.replace('%20','-'));

console.log(url.includes('yamini'));

console.log(url.includes('hitesh'));


const myName = new String('yamini-hitesh-patil');

console.log(myName.split('-'));