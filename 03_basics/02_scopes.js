// var c=300
let a=300
if(true){
    let a=10
    const b=20
    console.log(a);
    
}



console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Sri"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}
// one()

if(true){
    const username = "Sri"
    if(username=="Sri"){
        const website=" youtube"
        console.log(username + website);
    }
}

console.log(addone(4))//it is possible
function addone(num){
    return num+1
}

console.log(addtwo(4)) // it is not possible
const addtwo=function(num){
    return num=2
}