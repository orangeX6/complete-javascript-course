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
const labelWelcome2 = document.querySelector('.welcome');

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

containerMovements.innerHTML = '';

//-----------------MOVEMENTS-------------------------//

//display movements
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
    </div>
    `;

    //Insert Adjacent HTML
    containerMovements.insertAdjacentHTML('afterbegin', html);
    //Inner adjacent elements take - afterbegin, beforeend and 2 more
    //after begin means new element will be added at the top.
    //before end means new element will be added the bottom
  });
};

displayMovements(account1.movements);

//display balance
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${balance}€`;
};

calcDisplayBalance(account1.movements);

//-------------------SUMMARY-----------------------//
const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((tot, mov) => tot + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((tot, mov) => mov + tot, 0);

  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * 0.012)
    .filter(int => int > 1)
    .reduce((tot, int) => tot + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1.movements);

//--------------------USER---------------------------//
//CREATE LOGIN IDs
const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);

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

//Mutates array
//splice
//reverse

//Does not mutate Array
//slice
//concat
//join
//at

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

//
//
//
//
//
//
//
//

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

//5.  PROJECT: 'BankList' APP
/*
 */
//ALL THE PROJECT RELATED STUFF WILL BE AT THE TOP.

//
//
//
//
//
//

//6.  CREATING DOM ELEMENTS
//AT THE TOP

//Mutates array
//splice
//reverse

//Does not mutate Array
//slice
//concat
//join
//at

//
//
//
//
//
//
//
//
//

//7.  CODING CHALLENGE #1
/*
§ Data 1: Julia's data [3, 5, 2, 12, 7], 
Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], 
Kate's data [10, 5, 6, 1, 4]
*/
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const correctedDogsJulia = dogsJulia.slice();

  correctedDogsJulia.splice(0, 1);
  correctedDogsJulia.splice(-2);

  // const dogsNotUse = [...correctedDogsJulia, ...dogsKate];
  const dogs = correctedDogsJulia.concat(dogsKate);
  console.log(dogs);

  dogs.forEach((dog, i) => {
    dog >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};

const dogsJuliaT1 = [3, 5, 2, 12, 7];
const dogsKateT1 = [4, 1, 15, 8, 3];

const dogsJuliaT2 = [9, 16, 6, 8, 3];
const dogsKateT2 = [10, 5, 6, 1, 4];

checkDogs(dogsJuliaT1, dogsKateT1);
checkDogs(dogsJuliaT2, dogsKateT2);
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

//8.  DATA TRANSFORMATIONS: MAP, FILTER, REDUCE
//THERE ARE THREE BIG AND IMPORTANT ARRAY METHODS THAT WE USE ALL THE TIME FOR DATA TRANSFORMATIONS
//1. MAP
//2. FILTER
//3. REDUCE

//1. MAP
//Map is similar to the forEach method but the difference is that map creates a brand new array based on the original array
//So the map method takes an array, loops over that array and at each iteration, it applies a callback function that we specify in our code to the current array element
/*
 * Map returns a NEW ARRAY containing the results of applying an operation on all original array elements
 */

//2. FILTER
/*
 * Filter returns a NEW ARRAY containing the array elements that passed a specified test condition
 */

//3. REDUCE
/*
* REDUCE boils('reduces') all array elements down to one single value.
  (eg. adding all elements together)
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

//9.  THE MAP METHOD
/*

// €

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.13;

//USING MAP WITH ARROW
const movementUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementUSD);

//USING for of
const movementUSDfor = [];
for (const mov of movements) movementUSDfor.push(mov * eurToUsd);

console.log(movementUSDfor);

//Though both produce the same result. in map we use a function to solve the problem. while in for of we loop manually and push elements to an array

//MAP ALSO SUPPORT THE THREE PARAMETERS LIKE forEach
//map=function(value,index,array){}

//There is a difference in the forEach and map approach
//In forEach we print each line individually to the console as we were looping over the array
//So in each iteration we performed an action that was then visible in the console and we can call this a SIDE EFFECT
//So the forEach method CREATE side effects.
//But with map method all we did was to return each of the strings from the callback function and they got added into a new array, and we logged the entire array to the console and not the elements
//We did NOT CREATE A side effect in map methods' iteration
const movementsDescription = movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)} `;
});

console.log(movementsDescription);

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

//10. COMPUTING USERNAMES
//AT THE TOP

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

//11. THE FILTER METHOD
/*
 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//USING FILTER
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

//USING FOR OF
const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);
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

//12. THE REDUCE METHOD
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

//Reduce can take one extra parameter. This takes the initial value of accumulator.
//The callback function of reduce method also contains an extra meter i.e. accumulator
//It contains the value we will return at the end.
//accumulator => SNOWBALL

//USING REDUCE
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

//REDUCE WITH ARROW FUNCTIONS
const balanceArrow = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balanceArrow);

//USING FOR OF
let balanceFor = 0;
for (const mov of movements) balanceFor += mov;
console.log(balanceFor);

//MAXIMUM VALUE
const maxMovement = movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  movements[0]
);
console.log(maxMovement);

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

 */

//13. CODING CHALLENGE #2
/* 

const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map(age => (age <= 2 ? age * 2 : 16 + age * 4));

  const filterAdults = humanAges.filter(age => age >= 18);

  //REDUCE SOLUTION 1
  const averageAdultDogsAge =
    filterAdults.reduce((acc, cur, i) => acc + cur, 0) / filterAdults.length;

  //REDUCE SOLUTION 2:
  const average = filterAdults.reduce((acc, cur, i, arr) => {
    return acc + cur / arr.length;
  }, 0);

  console.log(averageAdultDogsAge);
  console.log(average);
};

const T1 = [5, 2, 4, 1, 15, 8, 3];
const T2 = [16, 6, 10, 5, 6, 1, 4];

calcAverageHumanAge(T1);
calcAverageHumanAge(T2);

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

//14. THE MAGIC OF CHAINING METHODS
//Chaining can cause real performance issues if we have really huge arrays
//It is a bad practice to chain methods that mutates the underlying original array. Example - splice,reverse... methods
/*
const eurToUsd = 1.13;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur, 0);

//USING OTHER PARAMETERS, MAINLY ARRAY TO CHECK IF WE MADE A MISTAKE.
const totalDepositsUSDMistake = movements
  .filter(mov => mov < 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, cur) => acc + cur, 0);

console.log(totalDepositsUSD);
console.log(totalDepositsUSDMistake);

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

//15. CODING CHALLENGE #3
/*
const calcAverageHumanAge = dogAges => {
  const average = dogAges
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, cur, i, arr) => {
      return acc + cur / arr.length;
    }, 0);

  console.log(average);
};

const T1 = [5, 2, 4, 1, 15, 8, 3];
const T2 = [16, 6, 10, 5, 6, 1, 4];

calcAverageHumanAge(T1);
calcAverageHumanAge(T2);
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

//16. THE FIND METHOD
//Retrieve one element of the array based on a condition
//Find method returns the FIRST element of the array that SATISFIES the condition
//RETURNS An ELEMENT and NOT an ARRAY
/*

 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithDrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithDrawal);

//Find an object in the array based on the property of the array
console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

//For of loop
const accountJess = [];
for (const acc of accounts) {
  acc.owner === 'Jessica Davis' && accountJess.push(acc);
}

console.log(accountJess);

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

//17. IMPLEMENTING LOGIN
//18. IMPLEMENTING TRANSFERS
//19. THE FindIndex METHOD
