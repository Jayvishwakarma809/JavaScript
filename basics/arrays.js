// const arr = [0,2,3,4,5];
// console.log(arr[0]);

// const arr2 = new Array(1,2,3,4);
// console.log(arr2.length);
// arr2.push(5);
// console.log(arr2)
// arr2.pop()
// console.log(arr2)

//unshift method use to add new value at first and shift the remaining values to right side.
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

// const arrA = [1,2,3,4,5,6,7]
// console.log(arrA);

// const arrB = arrA.slice(1,3);
// console.log("B =" + arrB);
// console.log(arrA);

// const arrC = arrA.splice(1,3)
// console.log("C ="+arrC)
// console.log(arrA)

// Slice did not affect the real array and do not consider given range.
// Splice affect the real array and cut all the elements which are in the range .


// To add two or more arrays.

// let cars = ["maruti","nexon","tata"];
// let bikes = ["honda","hero","bajaj"];

// console.log(cars.push(bikes)); //It pushes the array as a single element into another array.like this->[1,2,3,[1,2,3]]
// console.log(cars[3][1]) // For single element
// console.log(cars.concat(bikes));// Mean while this add both the array as each elements. like this->[1,2,3,1,2,3]

// But by using concate method we can add only two arrays. To surpass this problem we use spread operator -> [...cars , ...bike]
// But spread operator returns a new array so cannot direct console the cars array .

// let vehicals = [...cars,...bikes]  // This one is most efficient and usable technique to add two or more arrays.
// console.log(vehicals);

// let stupid_codder = [1,2,3,[1,4,5,[6,7,8]]]; // like some unproffesional codder puts the element in the multidimensional array but
//                                              //we want each element at single index or 1d array form then we use flat function.
// console.log(stupid_codder.flat(Infinity))            // we have give some deapth range and we can also use Infinity to spread all the inner arrays.                                  