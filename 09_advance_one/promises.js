
const promise1 = new Promise(function(resolve, reject){
    //do an async task
    //DB calls, crptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promise1.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Promise consumed");
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Sri18" , email : "sri@gmail.com"})
    },2000)
})
promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username : "Sri" , password : "18"})
        } else{
            reject('ERROR : Something went wrong')
        }
    },1000)
})
promise4
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is rejected or resolved"));


const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username : "Javascript" , password : "18"})
        } else{
            reject('ERROR : JS went wrong')
        }
    },1000)
})
async function consume5(){
    try{
        const response = await promise5
        console.log(response);
    } catch(error){
        console.log(error);
    }
}
consume5()

// async function getAllUSers(){
//    try{
//     const response1 = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =await response1.json()
//     console.log(data);
//    }
//    catch(error){
//     console.log("E: ",error);
//    }
// }

// getAllUSers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response1) =>{
    return response1.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));


//Promise
// -> A Promise is used to handle asynchronous operations
// -> 3 states : pending, resolved, rejected
// -> resolve() : used when task is completed successfully. Control goes to .then()
// -> reject() : used when task fails . Control goes to .catch()
// -> .then() : executes when promise is resolved. Can receive data from resolve()
// -> Promise Chaining : Multiple .then() can be connected. Data returned from one .then() goes to next .then()
// -> .catch() : Handles errors/rejected promises
// -> .finally() : runs always(success or failure)
// -> async function : async always returns a promise
// -> await : waits for promises to complete. await can only be used inside async functions
// -> try-catch : used with async/await for error handling
// -> fetch API : used to get data from server/API. .fetch() returns Promise, so we use .then() or await


