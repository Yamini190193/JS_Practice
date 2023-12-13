// function add (num1, num2){
//     console.log(num1 + num2);
// }

// add(6,8)
// const result =add(20, 45)
// console.log(result); //undefined


function add (num1, num2){
        return(num1 + num2);
    }

    const result = add(20, 45)
  console.log(result);


  function loginUserMessage(userName){
    return `${userName} just logged in`
  }

  
  let user = loginUserMessage("yamini")
  console.log(user);
  console.log(loginUserMessage());  //undefined

  function calculateCartPrice(...num1){
    return num1;
  }

  console.log(calculateCartPrice(200, 400, 600, ));

  function calculateCartPrice1(val1, val2,...num1){
    return num1;
  }

  console.log(calculateCartPrice1(200, 400, 600,900 ));

  const user1 = {
    name: "yamini",
    age: 31
  }

  function display(user){
    console.log(`username is: ${user.name} and age is ${user.age}`);
  }

  display(user1)

  display({
    name: "hitesh",
    age: 36
  })

  const myNewArray = [100, 200, 300]

  function displayArrayValue(arrValue){
    return arrValue[1]
  }

  console.log(displayArrayValue(myNewArray));

  console.log(displayArrayValue([400,600,800]));