// Dates

let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate=new Date(2025,0,23) //Month starts from 0 ; January:0
// console.log(myCreatedDate.toDateString());

let myCreatedDate1=new Date(2025,5,9,9,12)
// console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2=new Date("23-05-2025")
// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate2.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})

