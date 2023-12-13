// const user = new Object(); //singleton object
// console.log(typeof user); 

// const user1 ={} // non-singleton object

// const regularUser ={
//     email: "abc@gmail.com",
//     fullname:{
//         userFullName:{
//             fname: "yamini",
//             lname: "patil"
//         },
//     },
//     dob : "19 january 1993",

// }

// console.log(regularUser.fullname.userFullName);
 
// const obj1 = { 1: "a", 2: "b"};
// const obj2 = {3: "a", 4:"b"};

// // const obj3 = Object.assign({}, obj1, obj2);
// // console.log(obj3);

// const obj3 ={...obj1, ...obj2};
// console.log(obj3);

const users =[
    {
        id: 1,
        name : "abc"
    },
    {
        id: 2,
        name: "pqr"
    },
    {
        id: 3,
        name: "xyz"
    }
]

// console.log(users[0].name);
// console.log(...users);

const obj1 ={
    name : "abc",
    age : 20,
}

console.log(Object.keys(users));


console.log(Object.values(users));

console.log(Object.entries(users));

console.log(obj1.hasOwnProperty('name'));

console.log(obj1.hasOwnProperty('id'));

console.log(users[0].hasOwnProperty('id'));


const course ={
    courseName : "JS in Hindi",
    instructor : "Hitesh",
    price : 999
}

 console.log(course.courseName); 

 const {courseName} = course;

 console.log(courseName);

 const {price: p} =course;

 console.log(p);
