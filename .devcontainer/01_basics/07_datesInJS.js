let myDate = new Date();

console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toLocaleString());

console.log(myDate.getUTCDate());

console.log(myDate.toDateString());

console.log(myDate.toJSON());

console.log( typeof myDate);

let myCreatedDate = new Date(2023, 0 , 23)

console.log(myCreatedDate.toDateString());


let myCreatedDate2 = new Date(2023, 0 , 23, 5 ,3)

console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-14")

console.log(myCreatedDate3.toDateString());

console.log(myCreatedDate3.toLocaleString());

let time1 = Date.now();

console.log(time1);

console.log(Math.floor(Date.now()/1000));

let todayDate = new Date();

console.log(todayDate.getDay());


console.log(todayDate.getMonth());

console.log(todayDate.getDate());