const myNums = [1,2,3]
// const mytotal = myNums.reduce(function(acc,currVal) {
//     console.log(`value of accumulator is ${acc}, current value is ${currVal}`);
    
//     return acc + currVal;
// }, 0) //0 is the starting value of accumulator.

const mytotal = myNums.reduce((acc, currVal) => acc+currVal, 0)

console.log(mytotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
