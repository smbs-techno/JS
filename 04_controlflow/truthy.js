// const userEmail = "sri@gmail.com"
const userEmail = ""

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Dont have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Is Empty");
}

const emptyObj={}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

// Nullish Coaleseing Operator (??) : null undefined

let val1
// val1 =  5 ?? 10 -> in this the value of val1 is 5(the first value)
// val1 = null ?? 10 //as the first value is null here, so it will considered the second value as the value of val1
// val1 = undefined ?? 15 -> also same as upper case
val1 = null ?? 10 ?? 20 // here 10 will be the value of val1
console.log(val1);

// Terniary Operator

// condition ? true : false

const price = 100
price <= 80 ? console.log("less than 80") : console.log("more than 80");

