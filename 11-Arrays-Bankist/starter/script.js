'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*

*/

//1.  SIMPLE ARRAY METHODS
//2.  THE NEW AT METHOD
//3.  LOOPING ARRAYS: forEach
//4.  forEach with MAPS and SETS
//5.  PROJECT: 'BankList' APP
//6.  CREATING DOM ELEMENTS
//7.  CODING CHALLENGE #1
//8.  DATA TRANSFORMATIONS: MAP, FILTER, REDUCE
//9.  THE MAP METHOD
//10. COMPUTING USERNAMES
//11. THE FILTER METHOD
//12. THE REDUCE METHOD
//13. CODING CHALLENGE #2
//14. THE MAGIC OF CHAINING METHODS
//15. CODING CHALLENGE #3
//16. THE FIND METHOD
//17. IMPLEMENTING LOGIN
//18. IMPLEMENTING TRANSFERS
//19. THE FindIndex METHOD
//20. SOME AND EVERY
//21. FLAT AND FLATMAP
//22. SORTING ARRAYS
//23. MORE WAYS OF CREATING AND FILLING ARRAYS
//24. SUMMARY, WHICH ARRAY METHOD TO USE?
//25. ARRAY METHODS PRACTICE
//26. CODING CHALLENGE #4

//1. SIMPLE ARRAY METHODS
/*


//Arrays are objects and they get access to special built in methods that we can essentially see as tools for arrays.

let arr = ['a', 'b', 'c', 'd', 'e'];

//Slice method
console.log(arr.slice(2)); //['c', 'd', 'e']
console.log(arr.slice(2, 4)); //['c', 'd']
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]); //spread works same as slice without parameter

//Splice method
//Splice works exactly as slice, but it changes the original array i.e it mutates that array.
//The splice part is extracted/deleted from the array
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);

//Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//Concat
const letters = arr.concat(arr2);
console.log(letters);
arr = arr.concat(arr2);
console.log(arr);

//join
console.log(letters.join(' - '));

 */

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//2.  THE NEW AT METHOD
/*
const arr = [23, 11, 64];
console.log(arr[0]);

//at
console.log(arr.at(0));

//Why use at when we can just use bracket notation ?

//Suppose we dont know the length of array
//Getting last element of array
//with bracket notation
console.log(arr[arr.length - 1]);
//with slice
console.log(arr.slice(-1)[0]);
//with at
console.log(arr.at(-1));
console.log(arr.at(-2));
//So, you can use at to get the last element of array or when we are gonna do method chaining i.e. combining multiple methods

//The at method also works on strings
//EXAMPLE
console.log('Pranav'.at(-1));
console.log('Pranav'.at(1));
 */

//3.  LOOPING ARRAYS: ForEach
/*
 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for of loop
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${Math.abs(movement)}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

//forEach loop
//forEach is basically a higher order function which uses callback function which will tell it what to do
// Its easy to get access to index in forEach.
//it is the forEach method that calls the callback function in each iteration.
//And as it calls the function it also passes in the current element, index and the entire array that we are looping
//forEach(function(currentElement, index, array))

//WHEN TO USE FOREACH ?
//For Of loop includes the use of break and continue.
//If you dont need break and continue functionality you can use forEach loop
console.log('----------FOREACH--------');
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${Math.abs(movement)}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

//How forEach will work for above -
//  0: function(200)
//  1: function(450)
//  2: function(-400)
//  ...

//Accessing counter variable
//For of
//for(index,currentElement of array)
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${Math.abs(movement)}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

//ForEach
//forEach(function(currentElement, index, array))
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`mov ${i + 1}: You deposited ${Math.abs(mov)}`);
  } else {
    console.log(`mov ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});


const arrX = ['a', 'b', 'c', 'd', 'e'];
arrX.forEach(element => {
  console.log(element);
});

*/

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//4.  forEach with MAPS and SETS

/*
//MAPS
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

console.log(currencies);
//forEach for map -> forEach(function(value,key,map){})
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//SETS
const currenciesUnique = new Set(['USD', 'INR', 'EUR', 'USD', 'INR', 'INR']);

//forEach for Set -> forEach(function(value,key,map))
currenciesUnique.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); //both value and key will be same as set dont have a key or an index
});


*/

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//5.  PROJECT: 'BankList' APP
/*
 */
//ALL THE PROJECT RELATED STUFF WILL BE AT THE TOP.

//Mutates array
//splice
//reverse

//Does not mutate Array
//slice
//concat
//join
//at
