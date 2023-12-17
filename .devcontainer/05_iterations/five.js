// for each

const coding = ["js", "ruby", "java","python","cpp"];
coding.forEach(element => {
    console.log(element);
});

coding.forEach((item , index, arr) => {
    console.log(item, index, arr);
});

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName:"js"
    },

    {
        languageName: "Object-Oriented Programming Lanuguage",
        languageFileName :"OOPS"
    },

    {
        languageName:"Ruby",
        languageFileName:"rb"
    }
]

myCoding.forEach((element ,index) => {
    console.log( index, element.languageName);
    
});

const product =[
    {
        pid : 1,
        pname : "mobile",
        pprice : 400,

    },
    {
        pid : 2,
        pname : "tv",
        pprice : 1000,

    },
    {
        pid : 3,
        pname : "monitor",
        pprice :  1500,
    }
];

product.forEach((item) =>{
    console.log(item.pid, ":", item.pname);
})