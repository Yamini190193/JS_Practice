const myArr = [1,3,5,6,7];

console.log(myArr[3]);

console.log(myArr.length);

myArr.push(6);
myArr.push(9);
myArr.pop();

myArr.unshift(9)
myArr.shift();
console.log(myArr);

console.log(myArr.includes(2));

console.log(myArr.indexOf(2));

console.log(myArr.indexOf(1));

const newArr = myArr.join();

console.log(myArr);

console.log(newArr);

console.log(typeof myArr);

console.log(typeof newArr);

const my1 = ['a', 'b', 'c', 'd', 'e', 'f']

const my2 = my1.slice(1,3)

console.log("slice array :", my2);
console.log("Original  array :", my1);

const my3 = my1.splice(1,3);

console.log("splice array :", my3);
console.log("Original  array :", my1);


