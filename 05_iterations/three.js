// for of

const arr = [1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}

const name = "SRIMASHIS"
for (const i of name) {
    console.log(i);
}

// Maps
const map=new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const obj={
    name : 'Sri',
    class : 'XII'
}
// for (const [key, value] of obj) { //this loop will not work for objects
//     console.log(key, ':-', value);
// }