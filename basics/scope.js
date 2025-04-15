// We have two types of scope here Global Scope and Block Scope
// Global is all code area and Block scope is {} inside these braces block.
// Problem with var keyword because of global scope.

if(true){
    let a = 1;
    const b = 3;
    var c = 4;
}
// console.log(a);   // Here error came a is not define which is good.
// console.log(b);    // Here error came b is not define which is good.
console.log(c);   // But here it will run 4 is the output that is a problem.
 // Thats why we rarely use var keyword.

//  const b = [1,3,4,5];
//  b[1]=2;
//  console.log(b);

