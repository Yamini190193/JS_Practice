// for of

const numbers = [20,45,8,32,10];
for (const number of numbers) {
    console.log(number);
    
}

const greetings = "Hello world!";
for (const greet of greetings) {
    if (greet == " ") {
        break;
    }
    console.log(greet);
}


// maps

const map = new Map();
map.set('IN', "India");
map.set('USA', "United State Of America");
map.set('Fr', "France");
map.set('IN', "India")

console.log(map);

for (const [key, value] of map) {
    console.log(key ,":", value);
}



