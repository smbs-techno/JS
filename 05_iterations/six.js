const coding = ["js" , "ruby" , "java" , "python" , "cpp"]
const values = coding.forEach((item) => {
    console.log(item);
})
console.log(values);

const nums = [1,2,3,4,5,6,7,8,9,10]
const newnums = nums.filter((num) =>
     num > 4
)
console.log(newnums);

const newnums1 = nums.filter((num) =>{ 
    return num > 4
})
console.log(newnums1);

const nums1 = []
nums.forEach((num)=>{
    if(num>4){
        nums1.push(num)
    }
})
console.log(nums1);

