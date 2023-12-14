// Nullish coalescing operator (??)

//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined,
// and otherwise returns its left-hand side operand.

const print = "abc" ?? null;
console.log(print);

const print1 = "null" ?? 0;
console.log(print1);

const print2 = null ?? 0;
console.log(print2);


const print3 = "undefined" ?? false;
console.log(print3);


const print4 = undefined ?? false;
console.log(print4);