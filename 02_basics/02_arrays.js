const fruits=["apple" , "mango", "orange"]
const ipl=["rcb" , "csk"," mi"]

fruits.push(ipl)
// console.log(fruits);
// console.log(fruits[3][1]);

// const abc = fruits.concat(ipl)
// console.log(abc);

const abc=[...fruits, ...ipl]
// console.log(abc);

const b=[1,2,3,[4,5,6],7,[6,7, [4,5]]]
const c=b.flat(Infinity)
console.log(c);


console.log(Array.isArray("Sri"))
console.log(Array.from("Sri"))
console.log(Array.from({name : "Sri"})) //o/p:[]

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));



