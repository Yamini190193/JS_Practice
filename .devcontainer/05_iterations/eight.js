const arr1 = [1, 2, 3, 4, 5];

const initialValue = 10;
const sum = arr1.reduce( (accumulator, currentValue) => accumulator + currentValue ,initialValue);

console.log(sum);

const shop = [
    {
       itemName : "T-shirt",
       itemPrice : 599
    },
    {
        itemName: "Jeans",
        itemPrice: 1000
    },
    {
        itemName: "Trousers",
        itemPrice: 1500
    },
    {
        itemName: "Saree",
        itemPrice: 2500
    }
];

const total = shop.reduce( (acc, item) => acc + item.itemPrice , 0 );

console.log("total:", total);