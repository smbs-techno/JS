// Primitive Data Types(Call by Value )
// 7 types : String, Number, Boolean, null, undefineed, Symbol,BigInt

const score=100
const scorevalue=100.3

const isLoggedIn=false
const outsidetemp=null

let userEmail=undefined;
// let userEmail;//this variable will also termed as undefined

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)

const bigNumber=348563857238497232932374293435045345n


// Reference (Non Primitive) Data Types
// Array, Objects, Functions

const fruits=["apple","mango","orange"]
let my={
    name : "Sri",
    age: 21,
}

const myfun = function(){
    console.log("Hello Sri")
}
// console.log(typeof myfun); //function(it is object function)
// console.log(typeof fruits); //object


// typeofval : result
// undefined : "undefined"
// null : "object"
// boolean : "boolean"
// number : "number"
// string : "string"

//--------

// Stack(Primitive), Heap(Non-Primitive)
let myname="SrimashisMishra"
let anothername=myname
anothername="Sri"
console.log(myname);
console.log(anothername);

let user={
    email : "sri@gmail.com",
    upi: "Sri@ybl"
}
let usertwo=user
usertwo.email="sri@google.com"
console.log(user.email);
console.log(usertwo.email);

console.log(usertwo.upi);

