// objectss ----->
// We have two ways to declare objects by using Literals and Constructor. 
// If declare an object with constructor it is [singleton object]. 


// Object literals.

const mySym = Symbol(Key1);      // To access symbol in objects.

let student = {
    name1: "jay",
    [key1]: 9171,
    34:    20  ,
    email: "jayvish@123",
    marriege: false
}

//  There are two ways to access an object element .
// using . operator and using [] boxes line array index. { . vs [] }
//[] is more efficient as compare to .

// console.log(student.name1)
// console.log(student["name1"]) // Here both are same. and here if key is string then we have to secure in double quotes.
// // console.log(student.34)           // In using key value which is in number . operator gives an error.
// console.log(student[34])

console.log(student.key1);          // Here type of key1 is converted into string
console.log(student["key1"]);       

console.log(typeof(student.key1))
console.log(typeof(student["key1"]))