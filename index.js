// const chalk = require("chalk");

/****  Section 1👉 we need to do it in console ****/
// alert("Welcome, to Complete JavaScript course");
// console.log('Welcome, to complete JavaScript Course');



/**** Section 2👉 Code Editor for writing JS ****/



/**** Section 3👉 values and variables in JavaScript ****/


// var myName = 'vinod bahadur thapa';
// var myAge = 26;

// console.log(myage);





// Naming Practice
// var _myName = "vinod";
// var 1myName = "thapa";
// var _1my__Name = "bahadur";
// var $myName = "thapa technical";
// var myNaem% = "thapa technical";

// console.log(myNaem%);



// // **********************************************************************

// // 👉 // 🤩 SUBSCRIBE TO THAPA TECHNICAL YOUTUBE CHANNEL 🤩
//  👉 // 🤩  https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA

// // **********************************************************************



/**** Section 4👉 Data Types in JavaScript ****/


// var myName = "vinod thapa";
// console.log(myName);

// var myAge = 26;
// console.log(myAge);

// var iAmThapas = false;
// console.log(iAmThapas);

// // typeof operator 
// console.log(typeof(iAmThapas));


// DataTypes Practice

// console.log( 10 + "20");
// 9 - "5"
// console.log( 9 - "5"); //bug
// "Java" + "Script"
//  console.log( "Java "+ "Script");
// " " + " "
// console.log( " " + 0);
// " " + 0
// "vinod" - "thapa"
// true + true
// true + false
// false + true
// false - true


// console.log("vinod" - "thapa");





// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// Difference between null vs undefined? 


// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless));
// //2nd javascript bug

var iAmStandBy;
console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));


// 🙋‍👨‍🏫 Interview Question 2 🙋‍👨‍🏫
// What is NaN?

// NaN is a property of the global object. 
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number 


// var myPhoneNumber = 9876543210;
// var myName = "thapa technical";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myName)){
//     console.log("plz enter valid phone no");
// }




// NaN Practice 🤯



// NaN === NaN;        
// Number.NaN === NaN; 
// isNaN(NaN);         
// isNaN(Number.NaN);  
// Number.isNaN(NaN);


// console.log(Number.isNaN(NaN));




// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// var vs let vs const 











/**** Section 5👉 Arithmetic operators in JavaScript ****/



// console.log(5+20);


// 1️⃣Assignment operators
// An assignment operator assigns a value to its left operand 
// based on the value of its right operand. 
// The simple assignment operator is equal (=)

// var x = 5; 
// var y = 5;

// console.log("is both the x and y are equal or not" + x == y );

// I will tell you when we will see es6
// console.log(`Is both the x and y are equal : ${x == y}`);











// 2️⃣Arithmetic operators
// An arithmetic operator takes numerical values 
// (either literals or variables) as their operands and 
// returns a single numerical value.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("Remainder Operator " + 27%4);






// 🙄Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

// var num = 15;
// var newNum = num-- + 5;
// console.log(num);
// console.log(newNum);


// Postfix increment operator means the expression is evaluated 
// first using the original value of the variable and then the 
// variable is incremented(increased).


// If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.

// var num = 15;
// var newNum = --num + 5; 
// console.log(num);
// console.log(newNum);


// Prefix increment operator means the variable is incremented first and then 
// the expression is evaluated using the new value of the variable.










// 3️⃣Comparison operators
// A comparison operator compares its operands and 
// returns a logical value based on whether the comparison is true.

// var a = 30;
// var b = 10;

// Equal (==)
// console.log(a == b);

// Not equal (!=)
// console.log(a != b);

// // Greater than (>)
// console.log(a > b);

// // Greater than or equal (>=)
// console.log(a >= b);

// // Less than (<)
// console.log(a < b);

// // Less than or equal (<=)
// console.log(a <= b);








// 4️⃣ Logical operators
// Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value.

// var a = 30;
// var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.


// console.log(a > b && b > -50 && b < 0);


// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.

// console.log((a < b) || (b > 0) || (b > 0));

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation) 
// takes truth to falsity and vice versa.

// console.log(!((a>0) || (b<0)));
// console.log(!true);


// // **********************************************************************

// // 👉 // 🤩 SUBSCRIBE TO THAPA TECHNICAL YOUTUBE CHANNEL 🤩
//  👉 // 🤩  https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA

// // **********************************************************************



// 5️⃣ String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings.


// console.log("Hello World");

// console.log("hello " +  "world");

// var myName = "vinod";

// console.log(myName + " thapa");
// console.log(myName + " bahadur");
// console.log(myName + " bahadur Thapa");





// 😳 4 Challenge Time 
// What will be the output of 3**3? 
// What will be the output, when we add a number and a string?
// Write a program to swap two numbers?
// Write a program to swap two numbers without using third variable?



// sol 1: ✔
// console.log(9**2); // 9*9
// console.log(10 ** -1); 1/10


// sol 2:  ✔
// console.log(5 + "thapa");

// sol 3: ✔ 

// var a = 5;
// var b = 10;

// output b=5; a=10

// var c = b; //c = 10
// b = a; // b = 5;
// a = c;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);


// sol 4: ✔

// var a = 5;
// var b = 10;

// // output b=5; a=10

// a = a + b; // a = 15
// b = a - b; // b = 5; 
// a = a - b; // a = 10;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);




// 🙋‍👨‍🏫 Interview Question 4 🙋‍👨‍🏫
// What is the Difference between == vs === ?


// sol 
// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2 );

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);

// console.log(num1 === num2 );



// ************************************************************


/**** Section 6👉 Control Statement - 
 * 
 * 1️⃣If...Else */
// The if statement executes a statement if a specified condition is truthy. 
// If the condition is falsy, another statement can be executed.


// if raining = raincoat
// else no raincoat


// var tomr = 'sunny';

// if(tomr == 'rain'){
//   console.log('take a raincoat');
// }else{
//   console.log('No need to take a raincoat');
// }




// 🤩Challenge Time 
// write a program that works out whether if a given year is a leap year or not?
// A normal year has 365 days, leap years have 366, with an extra day in February.


// var year = 2020;
// debugger;
// if(year % 4 === 0){
//   if(year % 100 === 0){
//     if(year % 400 === 0){
//       console.log("The year " + year + " is a leap year");
//     }else{
//       console.log("The year " + year + " is not a leap year");
//     }
//   }else{
//     console.log("The year " + year + " is a leap year");
//   }
// }else{
//   console.log("The year " + year + " is not a leap year");
// }




// What is truthy and falsy values in Javascript?

// we have total 5 falsy values in javascript
// 👉 0,"",undefined,null,NaN,false** is false anyway

// if(score = 5){
//   console.log("OMG, we loss the game 😭");
// }else{
//   console.log("Yay, We won the game 😀");
// }




// 2️⃣Conditional (ternary) operator

// The conditional (ternary) operator is the only JavaScript operator 
// that takes three operands
// var age = 17;
// if(age >= 18){
//   console.log("you are eligible to vote");
// }else{
//   console.log("you are not eligible to vote");
// }

// var age = 18;
// console.log((age >= 18) ? "you can vote" : "you can't vote");




// 3️⃣ switch Statement
// Evaluates an expression, matching the expression's value to a 
// case clause, and executes statements associated with that case.

// 1st without break statment 
// Find the Area of circle, triangle and rectangle?

// var area = "square" ;
// var PI = 3.142, l=5, b=4, r=3;

// if(area == "circle"){
//   console.log("the area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//   console.log("the area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//   console.log("the area of the rectangle is : " + (l*b));
// }else{
//   console.log("please enter valid data");
// }

// var area = "dsfsad" ;
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//   case 'circle': 
//     console.log("the area of the circle is : " + PI*r**2);
//     break;

//   case 'triangle':
//     console.log("the area of the triangle is : " + (l*b)/2);
//     break;

//   case 'rectangle':
//     console.log("the area of the rectangle is : " + (l*b));
//     break;

//   default:
//     console.log("please enter valid data");
// }   



// 🤗break
// Terminates the current loop, switch, or label 
// statement and transfers 
// program control to the statement following the terminated statement.


// 🤗continue
// Terminates execution of the statements in the current iteration of the 
// current or labeled loop, and continues execution of the loop with the 
// next iteration.





// 4️⃣ While Loop Statement
// The while statement creates a loop that executes a specified statement 
// as long as the test condition evaluates to true. 

// var num=20;
// // block scope 
// while(num <= 10){
//   console.log(num); //infinte loop
//   num++;
// }

// 5️⃣ Do-While Loop Statement

// var num = 20;
// do{
//   debugger;
//   console.log(num); //infinte loop
//   num++;
// }while(num <= 10);

// 6️⃣ For Loop 

// for(var num = 0; num <= 10; num++){
//     debugger;
//     console.log(num);
// }


// 😀6: challenge Time 🏁
// JavaScript program to print table for given number (8)?

// output :  8 * 1 = 8 
        //   8 * 2 = 16(8*2)
        //  => 8 * 10 = 80

// for(var num = 1; num<= 10; num++){
//     var tableOf = 12;  
//   console.log(tableOf + " * " + num + " = " + tableOf * num);
// }


// ************************************************************

/**** Section 5 👉 Functions in JavaScript ****/

// A JavaScript function is a block of code designed to perform a particular task.



//  1️⃣Function Definition 

// Before we use a function, we need to define it. 

// A function definition (also called a function declaration, or function statement) 
// consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.


// var a = 10;
// var b = 20;
// var sum = a+b;
// console.log(sum);


// function sum(){
//   var a = 10, b = 40;
//   var total = a+b;
//   console.log(total);
// }
// // 

// 2️⃣Calling functions
// Defining a function does not execute it.
// A JavaScript function is executed when "something" invokes it (calls it).


// function sum(){
//   var a = 10, b = 40;
//   var total = a+b;
//   console.log(total);
// }

// sum();



// 3️⃣ Function Parameter vs Function Arguments 
// Function parameters are the names listed in the function's definition. 
// Function arguments are the real values passed to the function.


// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// sum();
// sum(20,30);
// sum(50,50);
// sum(5,6)


// // **********************************************************************

// // 👉 // 🤩 SUBSCRIBE TO THAPA TECHNICAL YOUTUBE CHANNEL 🤩
//  👉 // 🤩  https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA

// // **********************************************************************




// 🙋‍👨‍🏫 Interview Question 🙋‍👨‍🏫 

// Why Functions? 

// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, 
// to produce different results.

  // OR

  // A function is a group of reusable code which can be called anywhere 
// in your program. This eliminates the need of writing the same code 
// again and again.

// DRY => do not repeat yourself






// 4️⃣ Function expressions
// "Function expressions simply means 
// create a function and put it into the variable "

// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// var funExp = sum(5,15);



// 5️⃣ Return Keyword
// When JavaScript reaches a return statement, 
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller"


// function sum(a,b){
//   return total = a+b;
// }

// var funExp = sum(5,25);

// console.log('the sum of two no is ' + funExp );


// 6️⃣ Anonymous Function

// A function expression is similar to and has the same syntax 
// as a function declaration One can define "named" 
// function expressions (where the name of the expression might 
// be used in the call stack for example) 
// or "anonymous" function expressions.


// var funExp = function(a,b){
//   return total = a+b;
// }

// var sum = funExp(15,15);
// var sum1 = funExp(20,15);

// console.log(sum > sum1 );




// ************************************************************


// 👻 Now It's Time for Modern JavaScript 😍😍 

// 🙏🙏 Features of ECMAScript 2015 also known as ES6 🙏🙏

// 1️⃣ LET VS CONST  vs  VAR

// var myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);

// let myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);


// const myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);



// function biodata() {
//   const myFirstName = "Vinod";
//   console.log(myFirstName);

//   if(true){
//     const myLastName = "thapa";
//   }

//   // console.log('innerOuter ' + myLastName);
// }

// console.log(myFirstName);

// biodata();


// var => Function scope 
// let and const => Block Scope 





// 2️⃣ Template literals (Template strings) 

// JavaScript program to print table for given number (8)?

// output :  8 * 1 = 8 
        //   8 * 2 = 16(8*2)
        //  => 8 * 10 = 80

// for(let num = 1; num<= 10; num++){
//     let tableOf = 12;  
//   // console.log(tableOf + " * " + num + " = " + tableOf * num);
//   console.log( ` ${tableOf} * ${num} = ${tableOf * num}` );
// }








// 3️⃣  Default Parameters
// Default function parameters allow named parameters to be 
// initialized with default values if no value or undefined is passed.

// function mult(a,b=5){
//   return a*b;
// }

// console.log(mult(3));




// 4️⃣ Destructuring in ES6
            // The destructuring assignment syntax is a JavaScript expression 
            // that makes it possible to unpack values from arrays, 
            // or properties from objects, into distinct variables.

  //  ➡ Array Destructuring  🏁

            // const myBioData = ['vinod', 'thapa', 26];

            // let myFName = myBioData[0];
            // let myLName = myBioData[1];
            // let myAge = myBioData[2];

            // let [myFName,myAge, myLName] = myBioData;
            // console.log(myAge);

            // we can add values too 

            // let [myFName,myLName,myAge, myDegree="MCS"] = myBioData;
            // console.log(myDegree);



  // ➡ Object destructuring 🏁
            // const myBioData = {
            //   myFname : 'vinod',
            //   myLname : 'thapa',
            //   myAge : 26
            // }

            // let age = myBioData.age;
            // let myFname = myBioData.myFname;

            // let {myFname,myLname,myAge, myDegree="MCS"} = myBioData;
            // console.log(myLname);





// 5️⃣ Object Properties 

// ➡ we can now use Dynamic Properties 

      // let myName = "vinod";
      // const myBio = {
      //   [myName] : "hello how are you?",
      //   [20 + 6] : "is my age"
      // }

      // console.log(myBio);

  // ➡ no need to write key and value, if both are same 

  // let myName = "vinod thapa";
  // let myAge = 26;

  // const myBio = {myName,myAge}

  // console.log(myBio);





// 6️⃣ Fat Arror Function 

// 👻 Normal Way of writing Function  

// console.log(sum()); 

// function sum() {
//   let a = 5; b = 6;
//   let sum = a+b;
//  return `the sum of the two number is ${sum}`;
// }

// 👻 How to convert in into Fat Arrow Function 

// const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;

// console.log(sum()); 









// 7️⃣Spread Operator

// const colors = ['red', 'green', 'blue', 'white', 'pink'];

// const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];
// // // 2nd time add one more color on top and tell we need to write it again 
// // // on myColor array too 

// const MyFavColors = [ ...colors, 'yellow', 'black'];

// console.log(MyFavColors);


// ES7 features 

// 1: array include 
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes('purple');
// console.log(isPresent);

// 2: **
// console.log(2**3); 



// ES8 Features 

// String padding
// Object.values()
// Object.entries()

// const message = "my name is vinod";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));


// const person = { name: 'Fred', age: 87 };

// // // console.log( Object.values(person) );
// const arrObj =  Object.entries(person);
// console.log(Object.fromEntries(arrObj));



// ES2018

// const person = { name: 'Fred', age: 87, degree : "mcs" };
// const sPerson = { ...person };

// console.log(person);
// console.log(sPerson);


// ES2019
// Array.prototype.{flat,flatMap}
// Object.fromEntries()

// ES2020
// #1: BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// // console.log(oldNum);
// // console.log( 9007199254740991n + 12n );
// const newNum = 9007199254740991n + 12n;

// console.log(newNum);
// console.log(typeof newNum);


// const foo = null ?? 'default string';
// console.log(foo);

// ES2014

// "use strict";

// x = 3.14; 
// console.log(x);





// ************************************************************



/**** Section 7👉 Arrays in JavaScript  ****/

// When we use var, we can stored only one value at a time. 
// var friend1 = 'ramesh';
// var friend2 = 'arjun';
// var friend3 = 'vishal';

// var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];

// When we feel like storing multiple values in one variable then 
// instead of var, we will use an Array.

// In JavaScript, we have an Array class, and 
// arrays are the prototype of this class. 

// example 🏁


// var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];





// 1️⃣ Array Subsection 1 👉 Traversal in array✌ 
// navigate through an array

// if we want to get the single data at a time  and also 
// if we want to change the data 


// var myFriends = ['vinod','ramesh','arjun','vishal'];

// console.log(myFriends[myFriends.length - 1]);

// if we want to check the length of elements of an array 

// console.log(myFriends.length);

// we use for loop to navigate 

// var myFriends = ['vinod','ramesh','arjun','vishal'];
// for(var i=0; i<myFriends.length; i++){
//   console.log(myFriends[i]);
// }

// After ES6 we have for..in and for..of loop too 

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// for(let elements in myFriends){
//   console.log(elements);
// }

// for(let elements of myFriends){
//   console.log(elements);
// }

// Array.prototype.forEach() 🙋‍♂️
// Calls a function for each element in the array.

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// myFriends.forEach(function(element, index, array) {
//       console.log(element + " index : " +
//         index + " " + array);
// });

// myFriends.forEach((element, index, array) => {
//   console.log(element + " index : " +
//     index + " " + array);
// });




// 2️⃣ Array Subsection 2 👉 Searching and Filter in an Array 

// Array.prototype.indexOf() 🙋‍♂️

// Returns the first (least) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element from the 
// 0th index number 

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.indexOf("Thapa", 3));





// Array.prototype.lastIndexOf() 🙋‍♂️
// Returns the last (greatest) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element last to first

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.lastIndexOf("Thapa",3));







// Array.prototype.includes() 🙋‍♂️
// Determines whether the array contains a value, 
// returning true or false as appropriate.

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical"];

// console.log(myFriendNames.includes("thapa"));








// Array.prototype.find() 🙋‍♂️

// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the 
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

// const prices = [200,300,350,400,450,500,600];

// price < 400
// const findElem = prices.find((currVal) =>  currVal < 400 );
// console.log(findElem);

// console.log(  prices.find((currVal) => currVal > 1400 )  );



// // **********************************************************************

// // 👉 // 🤩 SUBSCRIBE TO THAPA TECHNICAL YOUTUBE CHANNEL 🤩
//  👉 // 🤩  https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA

// // **********************************************************************




// Array.prototype.findIndex() 🙋‍♂️

// Returns the found index in the array, if an element in the 
// array satisfies the testing function, or -1 if not found.


// console.log(  prices.findIndex((currVal) => currVal > 1400 )  );




// Array.prototype.filter() 🙋‍♂️

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.

// const prices = [200,300,350,400,450,500,600];

// // price < 400
// const newPriceTag = prices.filter((elem, index) => {
//   return elem > 1400;
// })
// console.log(newPriceTag);




// 3️⃣ Array Subsection 3 👉 How to sort an Array

// Array.prototype.sort() 🙋‍♂️

// The sort() method sorts the elements of an array in place and 
//returns the sorted array. The default sort order is ascending, built 
//upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.

// const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

// console.log(months.sort());

// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.sort());







// However, if numbers are sorted as strings, 
// "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect 
// result when sorting numbers.







// 😀7: challenge Time  🏁

// 1: How to Sort the numbers in the array in ascending (up) and descending (down) order?

// compareFunction	Optional. 
// A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
// function(a, b){return a-b}

// for asecnding order 
// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return 1;
//         // b comes first and then a 
//     }
//     if(a<b){
//         // a comes first and then b 
//         return -1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });

// for desecnding order 
// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return -1;
//         // b comes first and then a 
//     }
//     if(a<b){
//         // a comes first and then b 
//         return 1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });

// console.log(array1);







// 2: sort the array in descending order

// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// let aFruits = fruits.sort();

// //Array.prototype.reverse() 🙋‍♂️
// // The reverse() method reverses an array in place. 
// // The first array element becomes the last, and 
// // the last array element becomes the first.





// 4️⃣ Array Subsection 4 👉 Perform CRUD

// Array.prototype.push() 🙋‍♂️
// The push() method adds one or more elements to the 
// end of an array and returns the new length of the array.

// const animals = ['pigs', 'goats', 'sheep'];

// // const count = animals.push('chicken');
// // console.log(count);

// animals.push('chicken', 'cats','cow');
// console.log(animals);


// Array.prototype.unshift() 🙋‍♂️
// The unshift() method adds one or more elements to the 
// beginning of an array and returns the new length of the array.



// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.unshift('chicken');
// console.log(count);
// console.log(animals);

// animals.unshift('chicken', 'cats','cow');
// console.log(animals);


// 2nd example 

// const myNumbers = [1,2,3,5];

// myNumbers.unshift(4,6);
// console.log(myNumbers);


// Array.prototype.pop() 🙋‍♂️
// The pop() method removes the last element from an array and returns 
// that element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);


// Array.prototype.shift() 🙋‍♂️
// The shift() method removes the first element from an array and returns 
// that removed element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);




// 😀8: challenge Time 🏁

// Array.prototype.splice() 🙋‍♂️
// Adds and/or removes elements from an array.

// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: update march to March (update)?
// 4: Delete June from an array?


// sol1: 
// const newMonth = months.splice(months.length,0,"Dec");
// console.log(months);

// sol2:
// console.log(newMonth);

// sol3: 
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != -1){
//   const updateMonth = months.splice(indexOfMonth,1,'june');
//   console.log(months);
// }else{
//   console.log('No such data found');
// }


// sol3: 
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexOfMonth = months.indexOf('April');

// if(indexOfMonth != -1){
//   const updateMonth = months.splice(indexOfMonth,2);
//   console.log(months);
//   console.log(updateMonth);
// }else{
//   console.log('No such data found');
// }





// 5️⃣ Array Subsection 4 👉 Map and Reduce Method 

// Array.prototype.map() 🙋‍♂️

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//     // return element for newArray, after executing something
//   }[, thisArg]);

// Returns a new array containing the results of calling a 
// function on every element in this array. 

// const array1 = [1, 4, 9, 16, 25];
// num > 9
// let newArr = array1.map((curElem,index,arr) => {
//     return curElem > 9;
// })
// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((curElm, index, arr) => {
//     return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
// }).reduce().
// console.log(newArr);


// let newArrfor = array1.forEach((curElm, index, arr) => {
//   return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
// })
// console.log(newArrfor);

// It return new array without mutating the orignal array 


// // **********************************************************************

// // 👉 // 🤩 SUBSCRIBE TO THAPA TECHNICAL YOUTUBE CHANNEL 🤩
//  👉 // 🤩  https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA

// // **********************************************************************





// 😀9: challenge Time 🏁

//  1: Find the square root of each element in an array?
//  2: Multiply each element by 2 and return only those 
//     elements which are greater than 10?

// sol1: 
// let arr = [25, 36, 49, 64, 81];

// let arrSqr = arr.map((curElem) =>  Math.sqrt(curElem) )
// console.log(arrSqr);

// sol 2: 
//  let arr = [2, 3, 4, 6, 8]; 

//  let arr2 = arr.map((curElm) => curElm * 2).filter((curElem) => curElem > 10 ).reduce((accumulator, curElem) => {
//       return accumulator += curElem;
//     });
//  console.log(arr2);

// we can use the chaining too 





// 👉 Reduce Method 

// flatten an array means to convert the 3d or 2d array into a 
// single dimensional array 

// The reduce() method executes a reducer function (that you provide) 
// on each element of the array, resulting in single output value.

// The reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

// 4 subj = 1sub= 7
// 3dubj = [5,6,2]

// let arr = [5,6,2];

// let sum = arr.reduce((accumulator, curElem) => {
//         debugger;
//       return accumulator += curElem;
// },7)
// console.log(sum);




// How to fatten an array 
// converting 2d and 3d array into one dimensional array 

// const arr = [
//         ['zone_1', 'zone_2'],
//         ['zone_3', 'zone_4'],
//         ['zone_5', 'zone_6'],
//         ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
//     ];

// // let flatArr = arr.reduce((accum, currVal)  => { 
// //           return accum.concat(currVal);
// // })

// console.log(arr.flat(Infinity));







// console.log(flatArr);


// const arr = [ ['zone_1', 'zone_2'], ['zone_3', ['zone_1', 'zone_2', ['zone_1', 'zone_2']]] ];
// console.log(arr.flat(3));
// console.log(arr);





/**** Section 7👉 Strings in JavaScript  ****/

// A JavaScript string is zero or more characters written inside quotes.

// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes

// Strings can be created as primitives, 
// from string literals, or as objects, using the String() constructor

// let myName = "vinod thapa";
// let myChannelName = 'vinod thapa';

// // let ytName = new String("Thapa Technical");
// let ytName = 'thapa technical';

// console.log(myName);
// console.log((ytName));



// 👉 How to find the length of a string
// String.prototype.length 🙋‍♂️
// Reflects the length of the string. 

// let myName = "vinod thapa";
// console.log(myName.length);



// 👉 Escape Character

// let anySentence = "We are the so-called \"Vikings\" from the north.";
// console.log(anySentence);

// // if you dont want to mess, simply use the alternate quotes 

// let anySentence =  " We are the so-called 'Vikings' from the north. ";
// console.log(anySentence);









// 👉 Finding a String in a String

// String.prototype.indexOf(searchValue [, fromIndex]) 🙋‍♂️

// The indexOf() method returns the index of (the position of) the first
//  occurrence of a specified text in a string

// const myBioData =  'I am the thapa Technical';
// console.log(myBioData.indexOf("t", 6));


// // JavaScript counts positions from zero.
// // 0 is the first position in a string, 1 is the second, 2 is the third ...






// // String.prototype.lastIndexOf(searchValue [, fromIndex]) 🙋‍♂️
// // Returns the index within the calling String object of the 
// // last occurrence of searchValue, or -1 if not found.


// const myBioData =  'I am the thapa Technical';
// console.log(myBioData.lastIndexOf("t", 6));













// 👉 Searching for a String in a String

// String.prototype.search(regexp) 🙋‍♂️

// The search() method searches a string for a specified 
// value and returns the position of the match

// const myBioData =  'I am the thapa Technical';
// let sData = myBioData.search("technical");
// console.log(sData);



// The search() method cannot take a second start position argument.




// 👉 Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method 🙋‍♂️
// slice() extracts a part of a string and returns the extracted part 
// in a new string.

// The method takes 2 parameters: the start position, 
// and the end position (end not included).

// var str = "Apple, Bananaa, Kiwi, mango";

// // let res = str.slice(0,4);
// let res = str.slice(7);
// console.log(res);


// The slice() method selects the elements starting at the 
// given start argument, and ends at, but does not include, 
// the given end argument.

// Note: The original array will not be changed.
// Remember: JavaScript counts positions from zero. First position is 0.






// 😀11: challenge Time 🏁

// Display only 280 characters of a string like the 
// one used in Twitter?

// let myTweets  = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? ";

// let myActualTweet = myTweets.slice(0,280);
// console.log(myActualTweet);
// console.log(myActualTweet.length);






// The substring() Method 🙋‍♂️
// substring() is similar to slice().

// The difference is that substring() cannot accept 
// negative indexes.

// var str = "Apple, Bananaa, Kiwi";
// let res = str.substring(8,-2);
// console.log(res);



// // If we give negative value then the characters are
//  counted from the 0th pos 



// The substr() Method 🙋‍♂️
// substr() is similar to slice().

// The difference is that the second parameter specifies the 
// length of the extracted part.


// var str = "Apple, Bananaa, Kiwi";
// // let res = str.substr(7,-2);
// let res = str.substr(-4);
// console.log(res);






// 👉 Replacing String Content() 

// String.prototype.replace(searchFor, replaceWith) 🙋‍♂️

// The replace() method replaces a specified value 
// with another value in a string.

// let myBioData = `I am vinod bahadur thapa vinod`;

// let repalceData = myBioData.replace('Vinod','VINOD');
// console.log(repalceData);
// console.log(myBioData);


// Points to remember 
// 1: The replace() method does not change the string 
// it is called on.  It returns a new string.
// 2: By default, the replace() method replaces only 
// the first match
// 3:By default, the replace() method is case sensitive. 
// Writing VINOD (with upper-case) will not work







//👉 Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]



// The charAt() Method 🙋‍♂️
// The charAt() method returns the character at a 
// specified index (position) in a string

// let str = "HELLO WORLD";

// console.log(str.charAt(9));










// The charCodeAt() Method 🙋‍♂️
// The charCodeAt() method returns the unicode of the 
// character at a specified index in a string:

// The method returns a UTF-16 code
//  (an integer between 0 and 65535).

// The Unicode Standard provides a unique number for every 
// character, no matter the platform, device, application, 
// or language. UTF-8 is a popular Unicode encoding which
//  has 88-bit code units.



// var str = "HELLO WORLD";

// console.log( str.charCodeAt(0) );



// 😀12: challenge Time 🏁

// Return the Unicode of the last character in a string

      // let str = "HELLO WORLD";
      // let lastChar = str.length - 1;

      // console.log(str.charAt(lastChar));
      // console.log(str.charCodeAt(lastChar));




// Property Access
      // ECMAScript 5 (2009) allows property access [ ] on strings

      // var str = "HELLO WORLD";
      // console.log(str[1]);













//👉  Other useful methods 

// let myName = "vinod tHapa";
// console.log(myName.toUpperCase()); 
// console.log(myName.toLowerCase());







// The concat() Method 🙋‍♂️
      // concat() joins two or more strings

      // let fName = "vinod"
      // let lName = "thapa"

      // console.log(fName + " " + lName );
      // console.log(`${fName} ${lName}`);
      // console.log(fName.concat(lName));
      // console.log(fName.concat(" " ,lName));






// String.trim() 🙋‍♂️
      // The trim() method removes whitespace from both 
      // sides of a string

      // var str = "              Hello         World!            ";
      // console.log(str.trim());







// Converting a String to an Array
      // A string can be converted to an array with the 
      // split() method

      // var txt = "a, b,c d,e";   // String
      // console.log(txt.split(","));           // Split on commas
      // console.log( txt.split(" "));          // Split on spaces
      // console.log(txt.split("|"));         // Split on pipe










      // SECTION - 088️⃣ : DATE AND TIME IN JAVASCRIPT

      //  There are 4 ways for Creating Date object




      // console.log(new Date());    //we get 'current' date and time, by creating date object using this method.




      // new Date(year, month, day, hours, minutes, seconds, milliseconds);   //it takes 7 arguments
      // console.log(new Date(2018, 10, 28, 5, 58, 25, 60));   //this method creats new date object with the specified time
      
      //We can also pass 6 or 4 or 3 or 2 parameters
                  // console.log(new Date(2018, 10, 28, 5, 58, 25));  //year, month, day, hours, minutes, seconds
                  // console.log(new Date(2018, 10, 28, 5, 58));        //year, month, day, hours, minutes
                  // console.log(new Date(2018, 10, 28, 5));      //year, month, day, hours
                  // console.log(new Date(2018, 10, 28));   //year, month, day
                  // console.log(new Date(2018, 10));       year, month
      

      

      // JavaScript stores dates as the number of milliseconds since 1 Januarry 1970
                  //new Date(milliseconds)
                  // console.log(new Date(0));    //0 meaning 1 Juary 19780
                  // console.log(new Date(100000000));
                  // console.log(new Date(-100000000));


                  // let d = new Date();

                  // console.log(d);         //simply printing the Date object will return the Greenwich mean time(GMT) format in the browser console.

            // [METHOD - 01]
                  // console.log(d.toLocaleString());          //toLocalString() method returns the date and time as a String in the Local Format (i.e., in IST)
            
            // [METHOD - 02]
                  // console.log(d.toString());          //toString() method returns the date and time as a String in the Local Format (i.e., in IST).
                  
            // [METHOD - 03]
                  // console.log(Date.now());          //now() method returns the number of milliseconds since 1 january 1970.


                  // Note: JavaScript counts months from 0 to 11:
                              // January = 0.                  
                              // December = 11.

                              
                              
            // // You cannot omit month , minimum there should always be two arguments. If you supply only one parameter it will be treated as milliseconds.
            //       let d = new Date(2021, 0, 3)
            //       console.log(d.toString());
            //       console.log(d.toLocaleString());



 
      //Another Method of creating the Date object.
            // //new Date(date String)
            //       let d = new Date("January 9, 1999 08:55:09");
            //       console.log(d.toLocaleString());
            //       console.log(d.toString());



      //Another Method of creating the Date object.
            //new Date(milliSeconds)

                  // let d = new Date(0);
                  // let d = new Date(13827482748247);
                  // let d = new Date(-28738247);

                  // console.log(d.toLocaleString());


// //Some important methods of the Date object.
//             let d = new Date();
//             console.log(d.toLocaleString());



//🎉🎉🎉🎉Date() object methods for : DATE only🎉🎉🎉
            
//       //get() methods :
      
//       // [METHOD - 01]    getFullYear()
//             console.log(d.getFullYear());       //if we donot pass any parameter then it will return the current year

//       // [METHOD - 02]    getMonth()
//             console.log(d.getMonth());          //if we donot pass any parameter then it will return the current month
            
//       // [METHOD - 03]    getDate()
//             console.log(d.getDate());           //if we donot pass any parameter then it will return the current Date

//       // [METHOD - 04]    getDay()
//             console.log(d.getDay());            //if we donot pass any parameter then it will return the current Day
            
      

      //set() methods :

      //[METHOD - 01]   setFullYear()

            // let d = new Date();
            // console.log(d.setFullYear(1999));
            // console.log(d.setFullYear(2022));

            // d.setFullYear(1999);
            // console.log(d.getFullYear());
            


            // console.log(d.setMonth(1));

            // d.setMonth(11);
            // console.log(d.getMonth());


            // console.log(d.setDate(1));

            // d.setDate(11);
            // console.log(d.getDate());
            


//🎉🎉🎉🎉 Date() object methods for : TIME only🎉🎉🎉

                  // let curTime = new Date();

            //get methods:
            
                  // // [METHOD - 01] : getTime()
                  // console.log(curTime.getTime());           //returns the total number of milliseconds since 1 January 1970.


                  //CHALLENGE : Find the total number of years, months, days since 1 January 1970.

                              // let seconds = 1000       //since in 1 second there are 1000  milliseconds
                              // let minutes = 1000 * 60      //total number of milliseconds in a minute
                              // let hours =  minutes * 60      //total number of milliseconds in an hour
                              // let days = hours * 24       //total number of milliseconds in a day
                              // let months =  days * 30      //total number of milliseconds in a month
                              // let years =  months * 12      //total number of milliseconds in a year

                              // //total numbers of minutes since 1 january 1970
                              //       console.log(curTime.getTime() / minutes);       // total number of minutes since 1 Jan 1970 divided by total no of milliseconds in a minute.

                              // //total numbers of hours since 1 january 1970
                              //       console.log(curTime.getTime() / hours);            // total number of hours since 1 Jan 1970 divided by total no of milliseconds in a minute.

                              // //total numbers of days since 1 january 1970
                              //       console.log(curTime.getTime() / days);             // total number of days since 1 Jan 1970 divided by total no of milliseconds in a minute.

                              // //total numbers of months since 1 january 1970
                              //       console.log(curTime.getTime() / months);           // total number of months since 1 Jan 1970 divided by total no of milliseconds in a minute.

                              // //total numbers of years since 1 january 1970
                              //       console.log(curTime.getTime() / years);            // total number of years since 1 Jan 1970 divided by total no of milliseconds in a minute.




                  //             let d = new Date("June 17, 2022 11:56:24:89")                  //Here the Date object is created using the new Date(dateString)
                  // //[METHOD - 02] : getHours()
                  //             console.log(d.getHours());
                  //             console.log(new Date().getHours());
                              
                  // //[METHOD - 03] : getMinutes()
                  //             console.log(d.getMinutes());
                  //             console.log(new Date().getMinutes());

                  // //[METHOD - 04] : getSeconds()
                  //             console.log(d.getSeconds());
                  //             console.log(new Date().getSeconds());

                  // //[METHOD - 05] : getMilliSeconds()
                  //             console.log(d.getMilliseconds());
                  //             console.log(new Date().getMilliseconds());


            //set methods:
                  
                  //[METHOD - 01] : setTime(milliseconds): 
                                    //this method add the passed milliseconds in 1 Janurary 1970
                                    //Return Type : retuns the number of milliseconds from 1 January 1970 to the pass number of milliseconds
                  

                                    //Using setTime() method

                                          //EXAMPLE - 01

                                                // let launchDate = new Date('January 1, 1872 12:54:55');
                                                // let futureDate = new Date();

                                                // futureDate.setTime(launchDate.getTime())
                                                // console.log(futureDate.toLocaleString());
                                                
                                                
                                                
                                                
                                          //EXAMPLE - 02

                                                // let reqDate = new Date("January 9, 1999 01:25:54");
                                                // let futureDate = new Date();
                                                
                                                // futureDate.setTime(reqDate.getTime());
                                                // console.log(futureDate.toLocaleString());

                                          
                                          
                                          
                                    


                 
                                          
                                          
                  //[METHOD - 02] : setHours(hours, minutes, seconds, milliseconds): 
                                    //method returns the number of milliseconds from 1 Jan 1970.
                  
                                    //Using setHours() method:
                                    
                                          // let d = new Date();
                                          
                                          // d.setHours(8);       //hours parameter is passed
                                          // console.log(d.toLocaleString());


                                          
                  // //[METHOD - 03] : setMinutes(minutesValue, secondsValue, msValue): 
                  //                   //Using setHours() method:


                  //                         let d = new Date();

                  //                         console.log(d.toLocaleString());

                  //                         d.setMinutes(10);
                  //                         console.log(d.toLocaleString());


                  // //[METHOD - 04] : setSeconds(secondVal, MilliSecondVal): 
                  //                   //Using setHours(secondVal, MilliSecondVal) method:


                  //                         let d = new Date();

                  //                         console.log(d.toLocaleString());

                  //                         d.setSeconds(50);
                  //                         console.log(d.toLocaleString());



                  //[METHOD - 05] : setMilliSeconds(MillisecondVal): 
                                    //Using setHours(MillisecondVal) method:


                                          // let d = new Date();

                                          // console.log(d.toLocaleString());

                                          // d.setMilliseconds(50);
                                          // console.log(d.toLocaleString());



                  // //[METHOD - 06] : toLocaleDateString()

                  //                         let d = new Date();
                  //                         console.log(d.toLocaleDateString());
                                          
                  // //[METHOD - 07] : toLocaleTimeString()
                  //                         console.log(d.toLocaleDateString());







//************➡️SECTION - 09  MATH OBJECCT IN JAVASCRIPT*********

//JavaScript math Object allows you to perform Mathematical Tasks on number.

// // [Property] : Math.PI
//       console.log(Math.PI);



//There are Four common methods to round a Number to an Integer

            // // 1. Math.round(x) - retuns x rounded to its nearest integer
            //       console.log(Math.round(4.534));


            // // 2. Math.ceil(x) - retuns x rounded 'up' to its nearest integer
            //       console.log(Math.ceil(4.9));
            //       console.log(Math.ceil(4.7));
            //       console.log(Math.ceil(4.4));
            //       console.log(Math.ceil(4.2));
            //       console.log(Math.ceil(-4.2));



            // // 3. Math.floor(x) - retuns x rounded 'down' to its nearest integer
            //       console.log(Math.floor(4.9));
            //       console.log(Math.floor(4.7));
            //       console.log(Math.floor(4.4));
            //       console.log(Math.floor(4.2));
            //       console.log(Math.floor(-4.2));



            // // 4. Math.trunc(x) - retuns integer part of x
            //       console.log(Math.trunc(4.9));
            //       console.log(Math.trunc(5.7));
            //       console.log(Math.trunc(8.4));
            //       console.log(Math.trunc(6.2));
            //       console.log(Math.trunc(-4.2));




// // [METHOD - 01] : Math.pow(x, y) - returns the value of x to the power y, it is similar to x**y
//                   console.log(Math.pow(3, 2));
//                   console.log(3**2);


// // [METHOD - 02] : Math.sqrt(x) - returns the value of x to the power y, it is similar to x**y
//                   console.log(Math.sqrt(9));



// // [METHOD - 03] : Math.abs(x) - returns the absolute(positive) Value of x.
//                   console.log(Math.abs(-49));



// // [METHOD - 04] : Math.min(x, y, z...) - used to find the lowest Value in the list of arguments.
//                   console.log(Math.min(-49, 3, 0, -2, 5));



// // [METHOD - 05] : Math.max(x, y, z...) - used to find the highest value in the list of Arguments
//                   console.log(Math.max(-49, 3, 0, -2, 5));










//SECTION - 10 : 👉 Document Object Model In JavaScript 

//👉 The DOM is a the Document Object Model which deals with the document, the HTML elements themselves,
//    e.g. document and all the traversals you do in it., events etc.

//For Ex:
// Changing the background color
// document.body.style.background = "red"


// 👉 The BOM is the Browser object model, which deals woth the browser components
//     aside from the do ument, like history, navigator and screen
//     (as well as some others that vary by the browser). OR
//     In simple meaning all the Window operations which comes under BOM are performed
//     using BOM.
      



//SUBSECTION - 10.1  : DOM Navigation (Navigate Through the DOM)


            //1. document.documentElement
                  //returns the root Element of the document (i.e., the <html> element)


            //2. document.head
                  //returns the head Element 


            //3. document.body
                  //returns the body Element


            //4. document.body.childNodes
                  //returns all the child nodes of the body-element including the tabs, enter and white spaces.


            //5. document.body.children
                  //returns all the child nodes of the body-element excluding the tabs, enter and white spaces.

                  
            //6. document.body.hasChildNodes()
                  //to find weather an html-element has child-Nodes or not


            //7. document.body.firstChild()     //this includes tabs, enter and white spaces
                  //to find firstChild 


            //8. document.body.firstElementChild()     //this does not includes tabs, enter and white spaces
                  //to find firstElementChild 


            //9. document.getElementById('id');
                  //it returns the reference of the element by its ID.
                  //furthe note that, if the element with the specified ID


// SECTION - 11 EVENTS IN JAVASCRIPT

//          HTML events are things that happens to the HTML elements
//          When JavaScript is used in HTML pages, JavaScript react on these events


            // SUB-SECTION -  11.2  Four ways of writing events in JavaScript       (See file eventTypes.html)

                                    // 1. Using Inline Events - alert();
                                    // 2. By calling a function
                                    // 3. Using Inline events (HTML onclick =" " property and element.onclick)
                                    // 4. Using Event listeners (addeventListener and IE's attachEvent)


// SUB-SECTION -  11.2 EVENT OBJECT
// SUB-SECTION -  11.3 MouseEvents            (See file eventObject_and_other_events.html)
// SUB-SECTION -  11.4 KeyBoard Events        (See file eventObject_and_other_events.html)
// SUB-SECTION -  11.5 InputEvents            (See file eventObject_and_other_events.html)
// SUB-SECTION -  11.6 Time-Based Events.

            //    The window object allows the execution of the code at a specified timeInterval.
            //    These timeIntervals are called the 'timing events'.  

            //    There are two key methods in JavaScript:
            //    1️⃣. setTimeout(function, milliSeconds)   -- it will execute the function after waiting for the specified number of milliSeconds.

            //    2️⃣. setInterval(function, milliSeconds)   -- it will repeat the execution of the function after waiting for specified number of milliSeconds.







//*******************************************************************************************************

//     SECTION - 12 :         ✌️✌️✌️✌️  OOPS IN JAVASCRIPT ✌️✌️✌️✌️

//*******************************************************************************************************


//    SUBSECTION - 12.1 : What is object literals?

//    Object literals are simply a key : value pair data - structure.
//    Storing variables and functions together in one container,
//    we can refer this as an object. 


//Question : Diffrence between Arrays and Objects in JavaScript

// How to create an Object?

// 1st way : 

            // let bioData = {
            //       myName : "Utkarsh Singh Chouhan",
            //       myAge : 23,
            //       getData : function(){
            //             console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}.`);
            //       }
            // }

            // bioData.getData();

//2nd Way : After ES6 there is no need to write the 'function' keyword.

      
            // let bioData1 = {
            //       myName : "Utkarsh Singh Chouhan",
            //       myAge : 23,
            //       getData(){
            //             console.log(`My name is ${bioData1.myName} and my age is ${bioData.myAge}.`);
            //       }
            // }

            // bioData1.getData();  


//What if we want 'object' as a value inside another 'object'?

            // let bioData1 = {
            //       myName : {
            //             firstName : 'Utkarsh',
            //             middleName : 'Singh',
            //             lastName : 'Chouhan',

            //       },
            //       myAge : 23,
            //       getData(){
            //             console.log(`My name is ${bioData1.myName} and my age is ${bioData.myAge}.`);
            //       }
            // }

            // console.log(bioData1.myName);
            // console.log(bioData1.myName.firstName);
            // console.log(bioData1.myName.middleName);
            // console.log(bioData1.myName.lastName);





//What is 'this' object?

//"this" object contains the current context/scope.
// "this" object can have different values depending upon where it is placed.



// //    Example - 01
//             console.log(this);      //here it referes to the current context which is the "window" global object.
//             console.log(this.alert('hello'));      //since 'this' object referes to the 'window' object hence it can access it properties.
                                                   //it is similar to writing   -  window.alert('hello')








// //     Example - 02
//             function myName(){
//                   console.log(this);            //Still the current context of the "this" object is the "window" global object.
//             }     
            
//             myName();

//EXPLANATION - The reason is that, any 'function' or any 'variable' defined outside automatically becomes a part
            //  of "window" global object, hence "this" object refers to the "window" object.






// //    Example - 03 (Similar to example - 02)
//                   let myNames = "Utkarsh singh chouhan";    //varible "myNames" is a part of the "window" global object.
//                   console.log(this);
//                   console.log(this.myNames);    //hennce we can acces "myNames" variable using the "this" object.





// //  Example - 04

//             const obj = {
//                   myage : 23,
//                   myName(){
//                         console.log(this);        //here 'this' object will refer to the object
//                         console.log(this.myage);        //hence we can access the properties of the object "obj"
//                   }                
//             }
            
//             obj.myName();




// //  Example - 05 : "this" object will not work with arrow-function. The reason is that

//             const obj = {
//                   myAge : 23,
//                   myName : () => {
//                         console.log(this);  //here "this" object will refer to the "window" object
//                   }
//             }

//             obj.myName();



//  Example - 06 : What will be tthe output?

            // let bioData = {
            //       myName : {
            //             firstName : "Utkarsh",
            //             lastName : "Chouhan"
            //       },

            //       myAge : 23,

            //       getData(){
            //             console.log(`My name is ${this.myName.firstName} ${this.myName.lastName} and my age is ${this.myAge}.`);
            //       }
            // }

            // bioData.getData();




//*********************************************************************************************

// SECTION - 13  :       ✌️✌️✌️✌️ DESTRUCTURING IN JAVASCRIPT ✌️✌️✌️✌️

//*********************************************************************************************


      //SubSection - 13.1 ➡️ Array Destructuring 🚩
      
                        // const bioData = ['Utkarsh', 'Singh', 'Chouhan', 23];
                        
                        // //Traditional way of Arry Destructuring (this will be exhausting when we have a lot of values in the array)     
                        //       let myFName = BioData[0];
                        //       let myMName = BioData[1];
                        //       let myLName = BioData[2];
                        //       let myAge = BioData[3];
                        
                        //       console.log(myFName);

                        
                        // //More optimized way to Destructure an Array
                        
                        //             let [myFName, myMName, myLName, myAge] = bioData;
                        
                        //             console.log(myFName);
                        //             console.log(myMName);
                        //             console.log(myLName);
                        //             console.log(myAge);
                        
                        //We can add values too,
                        
                        // let [myFName, myMName, myLName, myAge, myDegree = 'MCA'] = bioData;
                        
                        //       console.log(myDegree);



      // //SubSection - 13.2 ➡️ Object Destructuring 🚩

      //                   const myBioData = {
      //                         myFName : 'Utkarsh',
      //                         myLName : 'Chouhan',
      //                         myAge : 23
      //                   }

      //                   let age = myBioData.age;
                        
                        
      //                   let {myFName, myLName, myAge, myDegree = 'MCA'} = myBioData;
      //                   console.log(myAge);





//*********************************************************************************************

// SECTION - 14  :       ✌️✌️✌️✌️ Object properties ✌️✌️✌️✌️

//*********************************************************************************************


// //➡️ We can now use the Dynamic properties

//             let myName = 'Utkarsh';

//             const myBio = {
//                   [myName] : "Hello, How are U?",
//                   [20 + 3] : "is my age"
//             }

//             console.log(myBio);




// //➡️ No need to write the key and value, if both are same

                  // let myName = "Utkarsh Singh Chouhan";
                  // let myAge = 23;

                  // const myBio = {
                  //       myName : myName,
                  //       myAge : myAge
                  // }

                  // console.log(myBio);


            // //We can also write the object as,

            //       const myBio = {myName, myAge};
            //       console.log(myBio);





//*********************************************************************************************

// SECTION - 15  :       ✌️✌️✌️✌️ Spread Operator(...) ✌️✌️✌️✌️

//*********************************************************************************************

// It allows us to quickly copy all or part of an existing array or object onto another array or object.

      // //Spread Operator for an array.
      //       const colors = ['red', 'blue', 'green', 'white'];
      
      //       const newColors = [...colors, 'black', 'purple']
      
      //       console.log(newColors);


//*********************************************************************************************

// SECTION - 16  :       ✌️✌️✌️✌️ ES7(ECMAScript 2016) ✌️✌️✌️✌️

//*********************************************************************************************

//[Part - 01]➡️ Array.prototype.include() function.
//[Part - 02]➡️ Exponentiation Operator.






//*********************************************************************************************

// SECTION - 17  :       ✌️✌️✌️✌️ ES8(ECMAScript 2017) ✌️✌️✌️✌️

//*********************************************************************************************


// SUB-SECTION - 17.1➡️ String Padding 🚩

            // let myName = 'Utkarsh'.padStart(10);            //it will provide the spaces in front of the string or number(as a string).
            // console.log(myName);                            //Here the number of spaces will be equal to absolute value of  [10 - 7(i.e., number of characters in the string)]



            // let myName1 = 'Utkarsh'.padEnd(15);       //it will give the number of spaces in the end of the string             
            // console.log(myName);                      //here the number of spaces provided will be equal to [15 - 7]



// SUB-SECTION - 17.2➡️ Object.values() 🚩

            // const obj = {
            //       name : "Utkarsh",
            //       age : 23
            // }
            
            // console.log(Object.values(obj));    //returns an 'Array-object' containing the value of the 'key'.      
            // console.log(typeof(Object.values(obj)));       
      
      
      
// SUB-SECTION - 17.2➡️ Object.entries() 🚩

            // console.log(Object.entries(obj));         //returns an 'Array-object' containing the arrays of [keys and values].
            // console.log(typeof(Object.entries(obj)));
            
            
            

//*********************************************************************************************

// SECTION - 18  :       ✌️✌️✌️✌️ ES9(ECMAScript 2018) ✌️✌️✌️✌️

//*********************************************************************************************


// Sub-Section 18.1 ➡️ Spread Operator for the Objects 🚩


                  // const person = {
                  //       name : 'Utkarsh',
                  //       age : 23
                  // };

                  // const combinedObj = {...person};

                  // console.log(combinedObj);
                  

//*********************************************************************************************

// SECTION - 18  :       ✌️✌️✌️✌️ ES10(ECMAScript 2019) ✌️✌️✌️✌️

//*********************************************************************************************


// Sub-Section 19.1 ➡️ Flatten an Array 🚩

                  // const arr = [
                  //       ['zone1','zone2'],
                  //       ['zone3','zone4'],
                  //       ['zone5','zone6'],
                  //       ['zone7','zone8'],
                  //       ['zone9',['zone10','zone11']],
                  // ];

                  // console.log(arr.flat());

                  // console.log(arr.flat(2));     //it will flat the array upto level-2

                  // console.log(arr.flat(Infinity));     //it will flat the array upto any level


// Sub-Section 19.2 ➡️ Object.fromEntries() 🚩

                  // const obj = {
                  //       name : "Utkarsh",
                  //       age : 23
                  // }

                  // console.log(Object.entries(obj));   //Object.entries() convert object into the array 
                  
                  
                  // let arr = Object.entries(obj);

                  // console.log(Object.fromEntries(arr));   //Object.entries() convert array into the object 


// Sub-Section 19.3 ➡️ String.trimStart and String.trimEnd 🚩


                  // As padStar() and padEnd() adds white spaces at start and end of the String,
                  // Similary trimStart() and trimEnd() 'removes' white space from the start and end of the String.

            //String.trimStart()

                  // let str = '        Utkarsh';
                  // console.log(str);
            
                  // console.log(str.trimStart());
                  
            //String.trimEnd()

                  // let str = 'Utkarsh           ';
                  // console.log(str);
            
                  // console.log(str.trimEnd());
   
   
   
//*********************************************************************************************

// SECTION - 19  :       ✌️✌️✌️✌️ ES11(ECMAScript 2020) ✌️✌️✌️✌️

//*********************************************************************************************



            // //1. BigInt:
            
            //       let oldNum = Number.MAX_SAFE_INTEGER;              //MAX_SAFE_INTEGER is a property of the 'Number' object.
            //       console.log(oldNum);
            //       console.log(oldNum + 12);

            //       let newNum = 9007199254740991n + 12n
            //       console.log(newNum);
            //       console.log(typeof(newNum));


            //2. Nullish Coalescing:
                  //It is a logical operator that returns its RHS value when its LHS value  is 'null' or 'undefined'
                  //otherwise it returns its LHS value.

                  // falsey values in JavaScript are = " ", NaN, null, 0, undefined and false 
                  
                        // console.log(null ?? 'some truth value');            
                        // console.log(NaN ?? 'some truth value');            
                        // console.log(undefined ?? 'some truth value');            
                        // console.log(" " ?? 'some truth value');            
                        // console.log(false ?? 'some truth value');            
                        // console.log(1 ?? 'some truth value');            
                        // console.log(1 ?? 'some truth value');            

                        
                        

//*********************************************************************************************

// SECTION - 20  :       ✌️✌️✌️✌️ ECMAScript 2014 ✌️✌️✌️✌️

//*********************************************************************************************


            // "use strict";

            // x = 3.14;
            // console.log(x);



//*********************************************************************************************

// SECTION - 21  :       ✌️✌️✌️✌️ Advanced JavaScript ✌️✌️✌️✌️

//*********************************************************************************************


      //SUB-SECTION - 21.1 : EVENT PROPOGATION
      
