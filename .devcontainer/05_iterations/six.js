// filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNum = myNums.filter((number) => number > 5 );

console.log(filteredNum);

// --------- using for each --------
const num1 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num2 = [];
 num1.forEach((number) =>{
    if(number > 5){
        num2.push(number)
    }
 })

 console.log(num2);

// --------------------------------------


const myArr = ["yamini", "hitesh", "Aarya"];

const filteredArr = myArr.filter( (name) => {
    return name.includes('a') && name.includes('r');
})

console.log(filteredArr);