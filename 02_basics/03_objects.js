// singleton

// object literals
// Object.create

const mySym=Symbol("key1")

const abc={
    name: "Sri",
    "fullname" : "Srimashis Mishra",
    age: 20,
    [mySym] : "mykey1",
    location: "Bhubaneswar",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

console.log(abc.location);
console.log(abc["location"]);
console.log(abc["fullname"]);
console.log(typeof abc.mySym);

abc.location= "Dhenkanal"
// Object.freeze(abc)
abc.location="bbsr"
console.log(abc);

abc.greeting=function(){
    console.log("Hello Sri");
}
abc.greeting2=function(){
    console.log(`Hello Sri, ${this.name}`);
}
console.log(abc.greeting); //undefined
console.log(abc.greeting());
console.log(abc.greeting2());

