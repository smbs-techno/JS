const accountId= 1344432
let accountEmail="sri@gmail.com"
var accountPassword="123"
accountcity="Bbsr"
let accountState;
// const variable value cant be changed
/*
Prefer not to use var because of issue in block scope and functional scope
*/
accountEmail="sr@gmail.com"
accountPassword="212121"
accountcity="Pune"
console.table([accountId,accountEmail,accountPassword,accountcity,accountState])
