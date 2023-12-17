const language ={
    js : "JavaScript",
    OOPS : "Object-oriented Programming language",
    rb: "ruby",
    swift: "swift byb apple"
}

for (const key in language) {
   
     // console.log(key ,":", language[key]);
      console.log(`${key} is shortcut for ${language[key]}`);
        
}


const Programming =["js", "rb","py","java","cpp"];
for (const key in Programming) {
        console.log(key);
        console.log(Programming[key]);
       
}

