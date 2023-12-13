const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());

console.log(balance.toFixed(2));

const num2 =23.8966;

console.log(num2.toPrecision(4));

const num3 = 1000000;

console.log(num3.toLocaleString());
console.log(num3.toLocaleString('en-IN'));

//************************************************** Math **************************************************** */

console.log(Math.abs(-23));
console.log(Math.round(5.6));
console.log(Math.ceil(5.6));
console.log(Math.floor(5.6));
console.log(Math.max(4, 6, 8,2));
console.log(Math.min(4, 6, 8,2));

console.log(Math.random());

console.log((Math.random()*10) + 1);

console.log(Math.floor((Math.random()*10) + 1));

const min = 10;
const max = 20;

console.log(Math.floor( Math.random() * (max - min + 1)) + min);