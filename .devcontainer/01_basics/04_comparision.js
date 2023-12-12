console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

//always try to avoid following comparison checks

//console.log(null > 0);  => false
//console.log(null == 0);  => false
//console.log(null >= 0);  => true

// equality check == and comparisions > < >= <= work differently.
//comparisons convert null to a number, treating it as 0.
//that's why null>=0 is true

//console.log(undefined == 0);  => false
//console.log(undefined > 0);  => false
//console.log(undefined < 0);  => false