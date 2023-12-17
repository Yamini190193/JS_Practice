const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

const numbers2 = numbers.map( (number) => number + 10);

console.log(numbers2);

const numbers3 = numbers.map( (number) => number * 10)
                         .map( (number) => number + 1)
                         .filter( (number) => number >= 40)

     console.log(numbers3);                    