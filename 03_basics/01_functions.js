// console.log("S");
// console.log("r");
// console.log("i");

function myname(){
    // console.log("S");
    // console.log("r");
    // console.log("i");
}
myname()
myname

function addtwonumbers(number1,number2){
    console.log(number1+number2);
}

function addtwonumbers(number1,number2){
    // let result=number1+number2
    // return result
    // console.log("Sri"); //it will never reach this statement as return is in previous statement
    return number1 + number2
}
const res = addtwonumbers(3,4)
// console.log(res);

function loginuser(username="Biswajit"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginuser("sri"))
// console.log(loginuser())
console.log(loginuser());

function calculateCartPrice(...num1){
    return num1

}
console.log(calculateCartPrice(200,400,500)) //it will return the ans in an array as we have used the "..."->rest/spread operator (we can return as many as values in it and it will return all these values in an array)

function calculateCartPrice(val1,val2,...num1){
    return num1

}
console.log(calculateCartPrice(200,400,500,2000)) //it stores val1->200,val2->400 and num1->[500,2000]

const user = {
    username : "Sri",
    price : 299
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username : "Sri",
    price : 399
})

const newArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200,500,600,700]));
