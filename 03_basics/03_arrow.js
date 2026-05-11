const user={
    username : "sri",
    price : 999,
    welcomemessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}
// user.welcomemessage()
// user.username="biswa"
// user.welcomemessage()
console.log(this);

// function sri(){
//     let username="sri"
//     console.log(this.username);
    
// }
// sri()

// const sri=function(){
//     let username="sri"
//     console.log(this.username);
    
// }
// sri()
const sri= () => {
    let username="sri"
    console.log(this);
    
}
sri()

// const addtwo = (num1,num2) => {
//     return num1+num2
// }

// const addtwo = (num1,num2) =>  num1+num2

// const addtwo = (num1,num2) =>  (num1+num2)

const addtwo = (num1,num2) => {{username: sri}}
console.log(addtwo(3,4));

const myArray=[2,5,3,7,8]
myArray.forEach()