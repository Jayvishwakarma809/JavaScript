// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output

// function addTwoNum(num1, num2){
//     console.log(num1+num2);
// }
// addTwoNum(3,5);
// addTwoNum(3,"4");
// addTwoNum(3,null);
// const res = addTwoNum(2,8);
// console.log("res",res);  // Here undifined is came in console because addTwonum func doesnt returning anything.

// function addtwonums(num1,num2){
//     return num1 +num2;
// }
// const res = addtwonums(3,6);
// console.log(res);      // here answer is printed in console 

// function loginUser(username){
//     if(!username){       // to overcome below problem we use if else.
//         console.log("please enter valid name")
//     }
//     else{
//     return `${username} just logged in`
//     }
// }
// console.log(loginUser("Jay")); 
// console.log(loginUser()); // if we dont give any argument here then undifined will come 


// calculate the cart prices.

// function CalCartPrice(num1){
//     console.log(num1);
// }
// CalCartPrice(299); 
// CalCartPrice(299,899);// Here it will give 299 only it ignores the remaining values
// So to overcome this issue we use [Rest ... operator which is also known as spread operator in different snerios.]

// function CalCulatePrices(...num1){
//     console.log(num1);
// }
// CalCulatePrices(12,34,56);  // Here we can give any no of arguments it will return an array.

// // Interview question

// function CalculateP( num1 , ...num2){
//     console.log(num1,num2);   // num1 is integer mean while num2 is an array.
// }
// CalculateP(23,4,5,6,44);  // op=> 4,5,6,44 because num1 stored 23 


// Giving object as an argument to funtion

// const info = {
//     userName : "Jay",
//     email : "Jay@888",
//     age : 23
// }

// function handleObj(anyObject){
//     console.log(`Username is ${anyObject.userName} and age is ${anyObject.age}`)
// }
// handleObj(info);  // please make sure that the key name is same in function.


// Giving array in function

const myArr = [3,5,6,7,8,9];

function returnSecondValue(getArray){
    return getArray[2];
}
console.log(returnSecondValue(myArr));