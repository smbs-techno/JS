const user={
    name : "Sri",
    logincount : 9,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Details");
        console.log(`Username : ${this.name}`);
        console.log(this);
          
    }
}

// this refers to the current object

console.log(user.name);
console.log(user.getUserDetails());
console.log(this); //{}


// const promise1 = new Promise() // new is the constructor function
// const date = new Date()

function User(username,logincount, isLoggedIn){
    this.username = username
    this.logincount = logincount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    
    return this  // if we dont write it , it will implicitly return this{} object
}
// const userone = User("Sri",10,false)
// const usertwo = User("Srimashis",11,true)
// console.log(userone); //this will overwrite the value of usertwo

//to solve this use new constructor function
const userone = new User("Sri",10,false)
const usertwo = new User("Srimashis",11,true)
console.log(userone);
console.log(usertwo);

// new
// -> first it will a new Object
// -> a constructor function will call due to new keyword
// -> then all the arguments inject inside the this keyword
// -> returns object
