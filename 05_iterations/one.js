// for loop
for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

//nested for loop
for (let i = 1; i <=10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for(let j=1;j<=10;j++){
        // console.log(`Inner loop value ${j}`);
        // console.log(i + '*' + j + ' = ' + i*j);
        
    }
}

let myarr=["Sri","Biswa","Jaga"]
for (let i = 0; i < myarr.length; i++) {
    const element = myarr[i];
    // console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log('Detected 5');
        continue
    }
    console.log(`Value of i is ${index}`);
}
for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log('Detected 5');
        break
    }
    console.log(`Value of i is ${index}`);
}

//break : terminates the loop completely
//continue : skips the current iteration and moves to the next iteration