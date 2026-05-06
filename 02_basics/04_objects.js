// const user=new object()
const user={};
user.id="12sri"
user.name="Sri"
user.isLoggedIn=false
// console.log(user);

const user1={
    email : "sri@cgu.com",
    fullname : {
        userfullname : {
            firstname: "Srimashis",
            lastname: "mishra"
        }
    }
}
console.log(user1.fullname.userfullname.firstname);

const obj1={1: "a",2: "b"}
const obj2={3: "a",4: "b"}
const obj4={5: "a",6: "b"}

// const obj3={obj1,obj2};
// const obj3= Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2}
console.log(obj3);

const users=[
    {
        id: 1,
        email:"sri@cgu.com"
    },
    {
        id: 1,
        email:"sri@cgu.com"
    },
    {
        id: 1,
        email:"sri@cgu.com"
    }
]
    
users[1].email
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLoggedIn'));


const course={
    coursename: "js",
    price: "999",
    courseInstructor: "Sri"
}
// course.courseInstructor

const {courseInstructor}= course
// console.log(courseInstructor);

const {courseInstructor:instructor}= course
console.log(instructor);

// {
//     "name": "Sri",
//     "coursename": "js",
//     "price": "free"
// }

[
    {},
    {},
    {}
]