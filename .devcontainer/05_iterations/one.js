// for

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//    if(i === 0){
//     console.log(`${i} is even no`);
//    }
//    else if(i % 2 == 0){
//     console.log(`${i} is even no`);
//    }
//    else{
//    console.log(`${i} is odd no`);
//    }

// }

// const arr1 =[12, 7, 8, 5,20];

// function compareNumbers(a, b) {
//     return a - b;
//   }
// let sortedArr = arr1.sort(compareNumbers);
// console.log(sortedArr);

// for (let i = 1; i < 5; i++) {
   
//    for (let j = 1; j < 5; j++) {
//     console.log(`${i} * ${j} = ${i*j}`);
    
//    }
    
// }

// for (let i = 0; i < 5; i++) {
//    if(i == 3){
//       console.log("3 is best no");
//    }
//    console.log(i);
   
// }

for (let i = 0; i < 5; i++) {
   if(i == 3){
      continue;
   }
   console.log(i);
   
}

for (let i = 0; i < 5; i++) {
   if(i == 3){
      break;
   }
   console.log(i);
   
}