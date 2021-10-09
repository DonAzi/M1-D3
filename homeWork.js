/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.*/

/* WRITE YOUR ANSWER HERE */

//  1 - numbers = number is JS datatype and are any positive number, primitive datatypes
//  2- strings = are datatypes consist of letters or in other words alphanumeric characters
// 3 - booleans = are True and False
// 4 - Null and Undefined = they stand for empty, meaning that they have no values


/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* WRITE YOUR ANSWER HERE */

//  ===== variable is for holding values almost in any programming language. any datatype can be assigned to a variable like : myVAriable = 901


/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR ANSWER HERE */
let additionExercise = 12 + 20
console.log(additionExercise)

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE */
let x = 12

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* WRITE YOUR ANSWER HERE */
let name = "John Doe"

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE */

 x -= 12
console.log(x)


/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* WRITE YOUR ANSWER HERE */
let name1 = "john"
let name2 = "John"

let ifNamesMatches = (name1 === name2)
console.log(ifNamesMatches)
// let ifNamesLowercase = (name1 == name2)

let ifNamesLowercase = (name1.toLowerCase === name2.toLowerCase) ? true : false;
console.log(ifNamesLowercase)

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */
let isThisNine = 9
// for (i=0; i <= isThisNine; i++);

  if (  isThisNine === true) {

    console.log("Nine")
  }
  
   



/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */



/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>===========================================================<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// Additional assignments for Day 3

/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

// let isMale = false;
// let gender = isMale ? "male" : "female";

/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

// let a = 5;
// let b = 10;
// if (a === 8 || b === 8 || a + b === 8 || a - b === 8) {
//   console.log(true);
// } else {
//   console.log(false);
// }

/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/

// let str = "Strive " + "School";

/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

// let X = 3;
// let y = 6;
// let z = -1;

// if (X > y && X > z) {
//   if (y > z) {
//     console.log(X + ", " + y + ", " + z);
//   } else {
//     console.log(X + ", " + z + ", " + y);
//   }
// } else if (y > X && y > z) {
//   if (X > z) {
//     console.log(y + ", " + X + ", " + z);
//   } else {
//     console.log(y + ", " + z + ", " + X);
//   }
// } else if (z > X && z > y) {
//   if (x > y) {
//     console.log(z + ", " + X + ", " + y);
//   } else {
//     console.log(z + ", " + y + ", " + X);
//   }
// }

/* EXTRA 5
 Write a piece of code for finding the average of two given integers.
*/

// let d = 4;
// let h = 5;
// let average = (d + h) / 2;
// console.log(average);

/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/

// let str1 = "aaaa";
// let str2 = "bb";
// if (str1.length > str2.length) {
//   console.log("str1 is longer");
// } else {
//   console.log("str2 is longer");
// }

/* EXTRA 7
 Write a piece of code for checking if a given value is a integer or not.
*/

// console.log(typeof str1);
// if (typeof d === "number") {
//   console.log(true);
// } else {
//   console.log(false);
// }

/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

// let num = 400;
// let per = 20;
// let percentage = (400 / 100) * 20;
// console.log(percentage);

/* EXTRA 9
 Write a piece of code for checking if a given number is even or odd.
*/

// if (num % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/


//  EXERCISE 7
//    Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).

// const reverseString = (reversed) => {
//  return reversed.split("").reverse("").join("")
// }

// console.log(reverseString("Strive"))