// objectss ----->
// We have two ways to declare objects by using Literals and Constructor. 
// If declare an object with constructor it is [singleton object]. 


// Object literals.

// const mySym = Symbol(Key1);      // To access symbol in objects.

// let student = {
//     name1: "jay",
//     [key1]: 9171,
//     34:    20  ,
//     email: "jayvish@123",
//     marriege: false
// }

//  There are two ways to access an object element .
// using . operator and using [] boxes line array index. { . vs [] }
//[] is more efficient as compare to .

// console.log(student.name1)
// console.log(student["name1"]) // Here both are same. and here if key is string then we have to secure in double quotes.
// // console.log(student.34)           // In using key value which is in number . operator gives an error.
// console.log(student[34])

// console.log(student.key1);          // Here type of key1 is converted into string
// console.log(student["key1"]);       

// console.log(typeof(student.key1))
// console.log(typeof(student["key1"]))


// Singleton object.
// const user = new Object()
// user.id = 123;
// user.name1 = "jay"
// user.isloggedin = false

// console.log(user)

// Object nesting and accessing values.
// const user2 ={
//     eamil : "sum@gamil.com",
//     fullname : {
//         firstName : {
//             name2 : "Jayesh"
//         }
//     }
// }
// console.log(user2.fullname.firstName.name2);


// Object assign.  Object.assign(source , target)
// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}

// const obj3 = Object.assign({},obj1,obj2);  // we use{} in first because this gives surity that all items are bound up in one element.
// console.log(obj3);


//De structuring an object.
const course = {
    courseName : "JS",
    price : 499 ,
    courseInstructor : "hitesh"
} 
console.log(course.courseInstructor);// This is without destructure

const {courseInstructor : cIns}=course;
console.log(cIns) // de structure.

// we can more decrease the name size {courseInstructor : cIns} karke


