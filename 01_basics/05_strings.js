const name = "Sri"
const repo=50
// console.log(name + repo + "Value")

// console.log(`Hello my name is ${name} and my repo count is ${repo}`);//modern way of using strings

const game=new String('Sri-pc')
console.log(game);

console.log(game[0])
console.log(game.__proto__)


console.log(game.length);
console.log(game.toUpperCase());
console.log(game.charAt(2));
console.log(game.indexOf('i'));

const newString=game.substring(0,3)
console.log(newString);

const anotherString=game.slice(-2,5)
console.log(anotherString);

const newStringone="    Srimashis     "
console.log(newStringone);
console.log(newStringone.trim()); //remove all unwanted white spaces

const url="https://sri.com/sri%20mishra"
console.log(url.replace('%20','--'))

console.log(url.includes('sri'))

console.log(game.split('-')); //convert the string into an array
