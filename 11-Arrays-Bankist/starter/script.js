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

containerMovements.innerHTML = '';

//-----------------MOVEMENTS-------------------------//
//display movements
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
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

//------------------BALANCE-----------------//
//display balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((bal, mov) => bal + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

//-------------------SUMMARY-----------------------//
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((tot, mov) => tot + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((tot, mov) => mov + tot, 0);

  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int > 1)
    .reduce((tot, int) => tot + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

//--------------------USER---------------------------//
//---------------CREATE LOGIN IDs---------------------//
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

//////////////////////////////////////////////
//---------------Updating UI------------------//
const updateUI = function (acc) {
  //Display Movements
  displayMovements(acc.movements);

  //Display Balance
  calcDisplayBalance(acc);

  //Display Summary
  calcDisplaySummary(acc);
};

////////////////////EVENT HANDLER\\\\\\\\\\\\\\\\\\
//-------------LOGIN FUNC------------------//
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
  // console.log('LOGIN');

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  //optional chaining to only check pin if user exists
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Welcome Message
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner
      .split(' ')
      .at(0)}`;
    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur(); //removing cursor/focus
    inputLoginUsername.blur();

    //Display UI
    updateUI(currentAccount);
  }
});

//0----------------TRANSFER MONEY-----------------$//

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  //get amount and receiverAccount
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  //Clear input fields and focus
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferTo.blur();
  inputTransferAmount.blur();

  //transfer the money
  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
  }

  //update UI
  updateUI(currentAccount);
});

//SOME METHOD
//-------------- REQUEST LOAN --------------\\
//RULE - Only grant a loan if there is at least once deposit with at least 10% of the requested loan amount

btnLoan.addEventListener('click', function (e) {
  //prevent page from reloading
  e.preventDefault();

  //Get amount
  const amount = Number(inputLoanAmount.value);

  //RULE CHECK
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Adding movement (loan amount)
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }

  //Clear input field
  inputLoanAmount.value = '';
});

//THE FIND INDEX METHOD
//--------!!!-CLOSING ACCOUNT----------//
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

//SORTING ARRAYS
//-------------SORTING MOVEMENTS --------------\\
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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

//18. IMPLEMENTING TRANSFERS
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

//19. THE FindIndex METHOD
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

//20. SOME AND EVERY
//returns boolean
//CONDITION
/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//INCLUDES checks equality
console.log(movements.includes(-130));

//SOME METHOD
//RETURNS TRUE IF ONE EL PASSES THE TEST(CONDITION)
const anyDeposit = movements.some(mov => mov > 6000);
console.log(anyDeposit);

//IMPLEMENTING REQUEST LOAN FUNCTIONALITY
//AT THE TOP

//EVERY
//RETURNS TRUE IF ALL ELEMENTS PASSES THE TEST(CONDITION)
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//WE CAN WRITE CALLBACK FUNCTIONS SEPARATELY AS WELL INSTEAD OF WRITING THEM DIRECTLY AS AN ARGUMENT INTO ARRAY METHODS

//SEPARATE CALLBACK
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

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

//21. FLAT AND FLATMAP
/*
//FLAT - Flattens the array. Removes nested arrays only till the first level of nesting by default parameter .
const arr = [[1, 2, 3], [4, 5, 6], 7, 9];
console.log(arr.flat());
//outputs -  [1, 2, 3, 4, 5, 6, 7, 9]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
//outputs --[[1,2],3,4,[5,6],7,8]
//Flatting the array till 2 levels
console.log(arrDeep.flat(2));
//outputs - [1, 2, 3, 4, 5, 6, 7, 8]

//calculate the balance of all the movements of all the accounts
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((tot, bal) => tot + bal, 0);
console.log(overallBalance);

//USING CHAINING
const overBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((tot, mov) => tot + mov, 0);

console.log(overBalance2);

//FLAT MAP
//COMBINES MAP AND FLAT METHOD TO IMPROVE PERFORMANCE
//FLAT MAP ONLY GOES ONE LEVEL DEEP. SO IF YOU NEED TO GO DEEPER YOU STILL NEED TO USE THE FLAT METHOD
const flatMapOverAllBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((tot, mov) => tot + mov, 0);

console.log(flatMapOverAllBalance);
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

//22. SORTING ARRAYS - sort()
//sort() MUTATES the original array
/* 
//STRINGS
const owners = ['Pranav', 'Sakshi', 'Jacica', 'Akash'];
console.log(owners); //outputs -  ['Pranav', 'Sakshi', 'Jacica', 'Akash']
console.log(owners.sort()); // outputs - ['Akash', 'Jacica', 'Pranav', 'Sakshi']
console.log(owners); // outputs - ['Akash', 'Jacica', 'Pranav', 'Sakshi']

//NUMBERS
//The method DOES NOT work on numbers. It sorts elements by STRING by default. So below will give INCORRECT output
let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort());

// return true (switch order)
// return false (keep order)
//  Example - A=200 > B=450 //returns 1 (keep order)
//  Example - A=200 < B=-400 //returns -1 (Switch order)
//ASCENDING
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);
//SORTING DESCENDING
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(movements);

//BETTER SOLUTION
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
//ASCENDING
movements.sort((a, b) => a - b);
console.log(movements);
//DESCENDING
movements.sort((a, b) => b - a);
console.log(movements);

//IMPLEMENTING SORT FUNCTIONALITY IN THE BANK APP 
//AT THE TOP
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

//23. MORE WAYS OF CREATING AND FILLING ARRAYS
/*
const arr = [1, 2, 3, 4, 5];
console.log([1, 2, 3, 4, 5]);
console.log(new Array(1, 2, 3, 4, 5));

//If we only pass one argument while creating a new array it will not create an array with that one element in it. instead it will create an empty array with that length

//1.
//EMPTY ARRAY + FILL
const x = new Array(9);
console.log(x);
//Calling methods on this empty array will result to nothing except for one method i.e. ******fill******
//Try calling map
// console.log(x.map(() => 5));
x.fill(1);
console.log(x); //outputs [1, 1, 1, 1, 1, 1, 1, 1, 1]
console.log(x.fill(9, 3, 6)); //outputs  [empty × 3, 9, 9, 9, empty × 3]
arr.fill(23, 3, 5);
console.log(arr);

//2.
//Array.from
// Array.from function was initially introduced into javascript in order to create arrays from array like structures
//Iterables like strings, maps. . . can be converted into real arrays using Array.from
//Thats why the name. Creating array from other things

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

//Use "_" as variable name. Its a convention thats used to let programmers know that we are not using the variable
const z = Array.from({ length: 7 }, (_, i) => i + 1);

console.log(z);

//Array.from to generate 100 random dice rolls
const dice = Array.from(
  { length: 100 },
  (_, i) => Math.floor(Math.random() * 6) + 1
);
console.log(dice);

//QuerySelectorAll is also an array like structure though not an array. It returns a nodeList which is like an array but its not an array and does not have methods like map

//Creating nodeList from querySelectorAll and converting nodeList from array

const movementsUI = Array.from(document.querySelectorAll('.movements__value'));

console.log(movementsUI);

//ARRAY.FROM EXAMPLE
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => el.textContent.replace('€', '')
  );

  console.log(movementsUI);
});

//converting a nodeList from DOM to array using spread
const movementsUI2 = [...document.querySelectorAll('.movements__value')];
console.log(movementsUI2);

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

//24. SUMMARY, WHICH ARRAY METHOD TO USE?
//AT THE END

//25. ARRAY METHODS PRACTICE

/*
//1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(deposits => deposits > 0)
  .reduce((sum, cur) => sum + cur);
console.log(bankDepositSum);

//2. Count deposits in bank with at least 1000 deposited
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(deposit => deposit >= 1000).length;
console.log(numDeposits1000);

//Using Reduce
const numDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  //use prefix ++ in reduce
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposit1000);

//3. Create an obj which contains the sum of deposits and withdrawals.
//REDUCE TO RETURN OBJ
//Sol 1
const sumsDW = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sumsDW);

//Sol 2
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

//Sol 3 WITH ARRAYS

let deposit = 0;
let withdrawal = 1;
[deposit, withdrawal] = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      cur > 0 ? (sum[deposit] += cur) : (sum[withdrawal] += cur);
      return sum;
    },
    [deposit, withdrawal]
  );

console.log(deposit, withdrawal);

//4. String to TITLE Case
const convertTitleCase = function (title) {
  const caps = word => word[0].toUpperCase() + word.slice(1);
  const exception = ['a', 'an', 'and', 'or', 'the', 'with', 'but', 'on', 'in'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exception.includes(word) ? word : caps(word)))
    .join(' ');
  return caps(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

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

//26. CODING CHALLENGE #4
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1.Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Formula:
//recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));

//2.Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose)

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating ${
    sarahDog.curFood < sarahDog.recFood ? 'too little.' : 'too much.'
  }`
);
console.log(dogs);
//3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);

//4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

//5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
console.log(dogs.some(dog => dog.curFood === dog.recFood));

//6. Log to the console whether there is any dog eating an okay amount of food (just true or false)
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

//7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
console.log(dogs.filter(checkEatingOkay));

//8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects �)
const doggo = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(doggo);
*/
/*
curFood: 250
owners: (2) ['Alice', 'Bob']
recFood: 284
weight: 22
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

//24. SUMMARY, WHICH ARRAY METHOD TO USE?

//1.TO MUTATE ORIGINAL ARRAY  ////////////////
//a.  Add to original -
//i.    .push         (end)
//ii.   .unshift      (start)

//b.  Remove from original -
//i.    .pop          (end)
//ii.   .shift        (start)
//iii.  .splice       (any)

//c. Others
//i.    .reverse
//ii.   .sort
//iii.  .fill

/////////////////////////////////

//2.A NEW ARRAY   /////////////////
//a. Computed from original
//i.    .map          (loop)

//b. Filtered using Condition
//i.    .filter

//c. Portion of original
//      .slice

//d. Adding original to other
//      .concat

//e. Flattening the original
//i.    .flat
//ii.   .flatMap

/////////////////////////////////

//3. AN ARRAY INDEX ////////////////

//a. Based on value
//      .indexOf

//b. Based on TEST CONDITION
//      .findIndex

/////////////////////////////////

//4. AN ARRAY ELEMENT  ////////////////
//  Based on TEST Condition
//      .find

/////////////////////////////////

//5. KNOW IF ARRAY INCLUDES   ////////////////
//a. Based on value
//      .includes

//b. Based on Test Condition
//i.     .some
//ii.    .every

/////////////////////////////////

//6. A NEW STRING   ////////////////
//  Based on Separator string -
//       .join

/////////////////////////////////

//7. TO TRANSFORM TO VALUE    ////////////////
//      Based on accumulator
//              .reduce
//(boil down array to single value of
//  any type: number, string, boolean,
//      or even array or object)

/////////////////////////////////

//8. TO JUST LOOP ARRAY   ////////////////
//  Based on callBack
//        .forEach
//(Does not create new array, just loops over it)

/////////////////////////////////

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

///

const convertToTitleCase = function (title) {
  const capitalize = cap => cap[0].toUpperCase() + cap.slice(1);

  const exceptions = ['a', 'an', 'and', 'or', 'the', 'with', 'but', 'on', 'in'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertToTitleCase('this is a nice title'));
console.log(convertToTitleCase('this is a LONG title but not too long'));
console.log(convertToTitleCase('and here is another title with an EXAMPLE'));
