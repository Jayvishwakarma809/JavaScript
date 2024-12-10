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




//------------------------ Complex Operations------------------------------->

// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2/2);
// console.log(2**3);   // for power ** is used.
// console.log(2+ "2"); // Here concatenation will perform.
// console.log("2" +2); // Here also concatenation will perform.

// console.log( 2 + 3 + "4");  // but here + perform first addition then concatinate.  54 output
// console.log( "2" + 2 + 3);  // here + perform concatinate.   223 output

// console.log(+true);   // output is 1.

// let num1, num2, num3 ;
// num1 = num2 = num3 =3;
// console.log(num2);


//-----------------------Comparisions ------------------------------->
// ==, >, <, <=, >=, != .
//when same data type is not compared.
// console.log("2">1);
// console.log(2<"03");

//null
// console.log(null>0);        // false
// console.log(null==0);       // false
// console.log(null>=0);       //true
// console.log(null<=0);       // true

// console.log(undefined>0);   // false 
// console.log(undefined<0);   
// console.log(undefined==0);   
// console.log(undefined>=0);
// console.log(undefined<=0);

//=== strict check  -> it checks the data type also



//----------------------------Data types -------------------------------->
//Java script is dynamically typed language .


// --- Primitive Datatypes > call by copy value .
// 7 types : String , Number , Boolean , null , undefined , symbol , BigInt .


// ----  Referrence type(Non-primitive) : Object , Array , function .
// referrence type gives the origional reffernce of a value .

// const marks = [23,33,34];        // array
// console.log(marks);

// let myObj = {                    // object
//     name1 : "Jay",
//     age : 21 ,
//     class: "12th"
// }

// let myFunc = function(){         // function
//     console.log("Hello From  myFunc");
// }

// console.log(myObj);
// myFunc();




//---------------------------Strings---------------------------------------

// let nameOne = "Jay";
// let surname = "Vishwakarma";
// let age = 20 ;
// // console.log(nameOne + " " + surname); This one old syntax to cocatenate strings . 
// // Now we have (backticks `) and this is known is String Interpolation.
// console.log(`My name is ${nameOne} ${surname} and my age is ${age}`)  // We can concatenate any data types with it .

// //How to daclare string in another way .

// let gameName = new String("Itachi");
// console.log(gameName);



// Some methods of strings .


// let nameOne = "Jay";
// let surname = "Vishwakarma";
// let gameName = new String("Itachi");

// console.log(gameName[0]);
// console.log(surname[2]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase);

// console.log(gameName.charAt(2) );
// console.log(gameName.indexOf("a"));

// let newName = gameName.substring(0,2);  // In this method lst index did not includes . 
// console.log(newName);

// let newName2 = gameName.slice(-5 , 2)
// console.log(newName2);

// let spaceStirng = "           Jay      ";
// console.log(spaceStirng);
// console.log(spaceStirng.trim()); // This methods trim the extra spaces .

// let url = "https://hithesh.com/hitesh%20choudhry"

// console.log(url.replace('%20',' '))
// console.log(url.includes('hit'));
// console.log(url.includes('hittt'));




// ------------------Numbers----------------------

// const score = 100 ;
// const balance = new Number(200.88558);
// console.log(score);
// console.log(balance);

// console.log(balance.toFixed(2));

// const otherNum = 2223.8966;
// console.log(otherNum.toPrecision(2));

// const numTwo = 1000000 ;
// console.log(numTwo.toLocaleString('en-IN'))

// const max = Number.MAX_VALUE ;
// const min = Number.MIN_VALUE ;
// const safeMax = Number.MAX_SAFE_INTEGER ;
// const safeMin = Number.MIN_SAFE_INTEGER ;
// console.table([max , min ,safeMax,safeMin])



//---------------------MATHS---------------------------

// console.log(Math.abs(-4));            // It converts negative value into positive values .
// console.log(Math.round(4.6))
// console.log(Math.ceil(3.1));
// console.log(Math.floor(4.9));
// console.log(Math.random().toFixed(2));         // it gives value in range 0 to 1. we have to multiply with 10 or more .


//Dice 
// const min = 1 ;
// const max = 6 ;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);




//-------------------------------------DATES AND TIME--------------------------------------------------------------------.

// let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let createDate = new Date("2023-01-14");
console.log(createDate.getTime());


let myTimeStamps = Date.now();
console.log(myTimeStamps);
console.log(myTimeStamps==createDate);





















