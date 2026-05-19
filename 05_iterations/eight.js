const nums= [1,2,3]
const total=nums.reduce(function (acc,currval){
    console.log(`acc : ${acc} and currval : ${currval} `);
    return acc+currval
}, 0)
console.log(total);

const total1=nums.reduce ((acc,curr) => acc+curr,0)
console.log(total1);

const shoppingCart = [
    {
        itemname : "py course",
        price : 999
    },
    {
        itemname : "javascript course",
        price : 1999
    },
    {
        itemname : "datascience course",
        price : 1549
    },
    {
        itemname : "dsa course",
        price : 3999
    },
    {
        itemname : "c course",
        price : 2999
    }
]
const pricetoPay = shoppingCart.reduce((acc, item) => acc+item.price, 0)
console.log(pricetoPay);
