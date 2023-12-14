const userName = "yamini";  //truthy value

if(userName){
    console.log("Got User Email");
}
else{
    console.log("Don't have User Email");
}

const userName1 = "";   //falsy value

if(userName1){
    console.log("Got User Email");
}
else{
    console.log("Don't have User Email");
}

const userName2 = [];   //truthy value

if(userName2){
    console.log("Got User Email");
}
else{
    console.log("Don't have User Email");
}

// *************** falsy Values ***********************

// false, 0, -0, 0n, "", null, undefined, NaN

// *************** truthy Values ***********************

// "0", 'false', " ", [], {}, function(){}


//how to check array is empty

let user = [];

if(user.length === 0){
    console.log("array is empty");
}

//how to check object is empty

let user1 ={}
if(Object.keys(user1).length === 0){
    console.log("object is empty");
}