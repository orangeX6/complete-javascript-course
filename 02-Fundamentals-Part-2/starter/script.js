"use strict";
/*
//Activating strict mode

"use strict";
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("You can drive");



//Functions

//Writing a function
function logger() {
  console.log("The names Bond. James Bond");
}

//Calling or running or invoking a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);


//Function Declarations and Expressions

//Difference between argument and parameter - parameter is the placeholder in the function where as the argument is the actual value that is passed to the function.

//Function Declaration -
const age13 = calcAge(1999);
console.log(age13);

function calcAge(birthYear) {
  return 2021 - birthYear;
}

const age1 = calcAge(1990);
console.log(age1);

//Function expression -
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

console.log(calcAge2(1996));

//Function Declaration can be called before they are defined in the code. We can call it first and then define. In function expression we cannot call it first and then define.

*/

//ARROW FUNCTIONS

function foo(i) {
  //   debugger;
  if (i < 0) return;
  console.log("begin: " + i);
  foo(i - 1);
  console.log("end: " + i);
}
foo(3);
