//----------------------------------variables-------------------------->
//------------- Three types const, let and var.

// //1 const --> cannot be change once declared and initialize.
// const accId = 2343;
// // accId = 232; --> This line gives an error (Assignment to constant variable because we used const keyword)
// console.log(accId);


// //2 let --> can be reinitialized in future but cannot be decalared again .
// let surname ; // if we consolelog this variable an error is shown (surname is undefined).
// let name1 = "Jay"
// name1 = "Jayesh"
// // let name1 = "Akash" --> This line gives an error (name1 is already been declared)
// console.log(name1)


// //3 var --> This one is least usable keyword because it can redeclared and reinitialized in future. Global scope problem.

// var standard = 10 ;
// var standard = 12 ;
// console.log(standard)


// //4-->
// name2 = "prince" // we can also declare like that but this is not a work of coder.

// console.table([name1,accId,standard,name2])  // --> for multiple variable output table is used .




//----------------------------Data types----------------------------------------->

// alert("hello")     //we are using node js thats why this line gives an error.

//number => 2 to power 53 . also we have bigint for bigger values.
//string => ""&'' 
//boolean => True or false.
//null => stand alone value
//undefined => undefined.
//symbol => uniqeness majorly used in react js.

//object = key value pairs.

/* To check type of any datatype we have {console.log(typeof variable_name);}
*/
// let car ;
// console.log(typeof "Jay");   // string
// console.log(typeof 21);      // number
// console.log(typeof true);    // boolean
// console.log(typeof car);     // undefined
// console.log(typeof null);    // object --> type of a null values is object.



//----------------------------Conversions-------------------------------->

// let age = 33;
// console.log(typeof age); // -->number

// let score = "55";
// let valueInNumber = Number(score); // conversion string into number
// console.log(typeof valueInNumber); //--> number

// let car ;
// let thar = Number(car);
// console.log(thar);   //NaN

/* Primitive datatypes convert into Number

"33"=>33             -> number 
"33a"=>33            -> number ,but value is NaN(Not a Number)
true =>1 , False =>0
undefined=>Number    -> NaN
null=>Number         -> 0
*/



// let isloggedin= 33
// let check = Boolean(isloggedin);
// console.log(check);

/* true falsee values
""        -> false
0         -> false
undefined ->false
null      -> false
and everything else is true.
*/


// let age = true;
// let ageinString = String(age);
// console.log(ageinString);
/*
number=>string
undefined=>string ->undifined
null=>string -> null
true =>string ->true
*/



