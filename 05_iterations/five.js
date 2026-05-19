const coding = ["js" , "ruby" , "java" , "python" , "cpp"]
coding.forEach(function (item) {
    console.log(item);
})

coding.forEach((value) => {
    console.log(value);
})

function print(item){
    console.log(item);
}
coding.forEach(print)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding = [
    {
        languagename : "javascript",
        languagefilename : "js"
    },
    {
        languagename : "java",
        languagefilename : "java"
    },
    {
        languagename : "python",
        languagefilename : "py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languagename);
})