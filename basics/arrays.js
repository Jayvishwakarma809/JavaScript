// const arr = [0,2,3,4,5];
// console.log(arr[0]);

// const arr2 = new Array(1,2,3,4);
// console.log(arr2.length);
// arr2.push(5);
// console.log(arr2)
// arr2.pop()
// console.log(arr2)

//unshift method use to add new value at first and shift the remaining values tp right side.
// arr2.unshift(7)
//Shift is use to pop the first element from the array.
// arr2.shift()

// includes use to give true or false either value included in array or not.

// IndexOf gives the index no. if value is present otherwise it gives -1 .

// console.log(arr2)

// const arr3 = [1,2,3,4,5,6]

// const arr4 = arr3.join()      // join converts the array into strings and bind the array .
// console.log(arr3)
// console.log(arr4)


// SLICE AND SPLICE >

const arrA = [1,2,3,4,5,6,7]
console.log(arrA);

const arrB = arrA.slice(1,3);
console.log("B =" + arrB);
console.log(arrA);

const arrC = arrA.splice(1,3)
console.log("C ="+arrC)
console.log(arrA)

// Slice did not affect the real array and do not consider give range.
// Splice affect the real array and cut all the elements which are in the range .
