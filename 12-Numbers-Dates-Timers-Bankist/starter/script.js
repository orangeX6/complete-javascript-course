'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
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

/////////////////////////////////////////////////
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
// Functions
//-----------------MOVEMENTS-------------------------//
//display movements
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();

    const displayDate = `${day}/${month}/${year}`;

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${mov.toFixed(2)}€</div>
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
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

//-------------------SUMMARY-----------------------//
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((tot, mov) => tot + mov, 0);

  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((tot, mov) => mov + tot, 0);

  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int > 1)
    .reduce((tot, int) => tot + int, 0);

  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
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
  displayMovements(acc);

  //Display Balance
  calcDisplayBalance(acc);

  //Display Summary
  calcDisplaySummary(acc);
};

////////////////////EVENT HANDLER\\\\\\\\\\\\\\\\\\
let currentAccount;

//FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

//day/month/year

//-------------LOGIN FUNC------------------//

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
  // console.log('LOGIN');

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  //optional chaining to only check pin if user exists
  if (currentAccount?.pin === +inputLoginPin.value) {
    //Display UI and Welcome Message
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner
      .split(' ')
      .at(0)}`;
    containerApp.style.opacity = 100;

    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

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
  const amount = +inputTransferAmount.value;
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
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    //Add transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());

    //update UI
    updateUI(currentAccount);
  }
});

//SOME METHOD
//-------------- REQUEST LOAN --------------\\
//RULE - Only grant a loan if there is at least once deposit with at least 10% of the requested loan amount

btnLoan.addEventListener('click', function (e) {
  //prevent page from reloading
  e.preventDefault();

  //Get amount
  const amount = Math.floor(inputLoanAmount.value);

  //RULE CHECK
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Adding movement (loan amount)
    currentAccount.movements.push(amount);

    //Add Loan Date
    currentAccount.movementsDates.push(new Date().toISOString());

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
    +inputClosePin.value === currentAccount.pin
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
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//1.   CONVERTING AND CHECKING NUMBERS
//2.   MATH AND ROUNDING
//3.   THE REMAINDER OPERATOR
//4.   NUMERIC SEPARATORS
//5.   WORKING WITH BigInt
//6.   CREATING DATES
//7.   ADDING DATES TO 'BankList' APP
//8.   OPERATIONS WITH DATES
//9.   INTERNATIONALIZING DATES (Intl)
//10.  INTERNATIONALIZING NUMBERS (Intl)
//11.  TIMERS: setTimeout AND setInterval
//12.  IMPLEMENTING A COUNTDOWN TIMER

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

//1.   CONVERTING AND CHECKING NUMBERS
/*
//In JavaScript all numbers are represented internally as floating point numbers
//Numbers are represented internally in a 64 to the base 2 format.
//They are binary

console.log(23 === 23.0); //true
console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false

//Converting string to number
console.log(Number('23'));
console.log(+'23'); //+ sign will automatically convert to number
//The above is called Coercion

////////////////////////////////////////////
//Parsing - parseInt, parseFloat, isNaN, isFinite
//////////////////////////////////////
console.log(Number.parseInt('30px')); //returns 30
//This works when the first element of the string is number. Else it will return NaN i.e. Not a number
console.log(Number.parseInt('e45'));
//parseInt also takes a second argument and we can pass radix in it.
//Default is 10 i.e decimal.
console.log(Number.parseInt('30', 8)); //24
console.log(Number.parseFloat('30.6')); //30.6
console.log(Number.parseInt('30.6')); //30

//This are global functions so we can call them directly
//But its a good practice to call it on number as numbers provide a namespace for the function
console.log(parseInt('30.6')); //30

//isNaN
//ONLY USE to check if value is NaN
console.log(Number.isNaN(30));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X')); //true
console.log(Number.isNaN(23 / 0)); //false //ACTUAL VAL - Infinity

console.log('/////////////');
//isFinite
//Always USE isFinite to CHECK if value is a number
console.log(Number.isFinite(30)); //True
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

//isInteger
console.log(Number.isInteger(30));
console.log(Number.isInteger(30.5));
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

//2.   MATH AND ROUNDING
/* 
//SQUARE ROOT
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

//CUBIC ROOT
console.log(8 ** (1 / 3));

//MAXIMUM VALUE
//This method does TYPE COERCION but NOT PARSING
console.log(Math.max(5, 18, 11, 23, 2)); //23
console.log(Math.max(5, 18, 11, '23', 2)); //23
console.log(Math.max(5, 18, 11, '23px', 2)); //NaN

//MINIMUM VALUE
console.log(Math.min(5, 18, 11, 23, 2)); //2

//PI
//Calc area of circle with 10px radius
console.log(Math.PI * Number.parseFloat('10px') ** 2);

//RANDOM
console.log(Math.floor(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

// for (let i = 0; i < 20; i++) {}
console.log(randomInt(20, 40));

///////////////////////////////////
//ROUNDING.////////////////////////
//////////////////////////////////
//TRUNC
console.log(Math.trunc(23.5)); // 23

//ROUND
console.log('---------------ROUND------------');
console.log(Math.round(29.8)); // 30
console.log(Math.round(29.2)); // 29
console.log(Math.round(29.5)); // 30

//CEIL
console.log('---------------CEIL------------');
console.log(Math.ceil(29.85)); // 30
console.log(Math.ceil(29.1)); // 30

//FLOOR
console.log('---------------FLOOR------------');
console.log(Math.floor(21.1)); // 21
console.log(Math.floor(21.5)); // 21
console.log(Math.floor(21.8)); // 21

//----------FLOOR VS TRUNC --------------
//SAME WHEN DEALING WITH POSITIVE NUMBERS

//BUT WHEN DEALING WITH NEGATIVE NUMBERS
console.log(Math.trunc(-23.5)); // 23
console.log(Math.floor(-23.5)); // 24

//ROUNDING DECIMALS
//TO FIXED  //ALWAYS RETURNS A STRING AND NOT A NUMBER
//TO FIXED CONVERTS THE NUMBER TO A STRING AND THEN APPLIES THE METHOD
//SINCE NUMBERS ARE PRIMITIVES WE CANT USE METHODS ON THEM
console.log((2.7).toFixed(0)); //3
console.log((2.7).toFixed(3)); //2.700
console.log((2.345).toFixed(2)); //2.35
console.log(+(2.345).toFixed(2)); //2.35 (NUMBER)
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

//3.   THE REMAINDER OPERATOR
/*
console.log(5 % 2); //1
console.log(8 % 2); //2

//EVEN OR ODD
const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(7));
console.log(isEven(789));
console.log(isEven(69));
console.log(isEven(420));

labelBalance.addEventListener('click', () => {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
     if (i % 3 === 0) row.style.backgroundColor = 'lightblue';
  });
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

/*
//4.   NUMERIC SEPARATORS (_)
//////////////CANT PLACE AT
//a. BEGINNING OF NUMBER
//b. END OF NUMBER
//c. BEGINNING OF DECIMAL
//d. END OF DECIMAL

const diameter = 287_460_000_000;
console.log(diameter); //returns 287460000000

const price = 345_99;
console.log(price); //returns 34599

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;

//WONT WORK
console.log(Number('230_000')); //NaN
console.log(Number.parseInt('2300_00')); //2300 //Wont work as expected
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

//5.   WORKING WITH BigInt (ES 2020)
/*
//Numbers are represented internally in 64bits.
//And that means there 64 1s and 0s to represent any number
//Of this 64 bits only 53 are used to store the digit themselves
//The rest offer storing of the decimal points and the sign

//Since there are only 53 bits to store the number that means there is a limit on how big a number can be

//CALCULATING THE MAX INTEGER
console.log(2 ** 53 - 1); //-1 coz number starts at 0
//THE NUMBER IS EVEN STORED IN THE NUMBER NAMESPACE AS
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

//NUMBERS HIGHER THAN THIS GIVE ERROR
console.log(2 ** 53 + 1); //9007199254740992 should be 3 at end
console.log(2 ** 53 + 2); //9007199254740994
console.log(2 ** 53 + 3); //9007199254740996
console.log(2 ** 53 + 4); //9007199254740996
console.log(2 ** 53 + 5); //9007199254740996

//THATS WHY BIG INT WAS ADDED AS OTHER LANGUAGES CONTAIN NUMBER BIGGER THAN THAT AND WE MIGHT GET IT FROM SOME API

console.log(48564896164864354844563464); //4.856489616486435e+25
console.log(48564896164864354844563464n); //48564896164864354844563464n
//n at the end transforms regular number into big int number
console.log(BigInt(4589416548135648646854864));

//OPERATIONS
console.log(10000n + 10000n);

//WE CANT MIX BIG INT WITH OTHER TYPES OF NUMBER
//MATH OPERATIONS DONT WORK WITH BIGINT
const huge = 256165165841681666581n;
const num = 23;
// console.log(huge+num);//gives error
console.log(huge + BigInt(num));

//EXCEPTIONS
console.log(20n > 10); //true
console.log(20n === 20); //false //DOES NOT DO TYPE COERCION
console.log(20n == 20); // true //DOES TYPE COERCION
console.log(typeof 21n);
console.log(huge + ' is REALLY big!!!');

//DIVISION - CUTS OFF THE DECIMAL PART
console.log(10n / 3n); //returns 3

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

//6.   CREATING DATES
/*

//Create a date
//1. new
const now = new Date();
console.log(now);

//2. parse date from date string
console.log(new Date('Dec 19 2021'));
console.log(new Date('December 25 2015'));

console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2022, 7, 9, 15, 5, 5));
console.log(new Date(2022, 10, 40));

//SECONDS PASSED SINCE UNIX TIME (1970)
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
//3 days * 24 hrs * 60mins * 60secs * 1000ms = 259200000
//259200000 timestamp of 4th day

//WORKING WITH DATES
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); //2142237180000 returns TimeStamp
console.log(new Date(2142237180000)); //Thu Nov 19 2037 15:23:00 GMT+0530 (India Standard Time)

console.log(Date.now()); //Gives current day's timestamp

//There are also set methods similar to the get method.

console.log(future.setFullYear(2040));
console.log(future);

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

//7.   ADDING DATES TO 'BankList' APP
//AT THE TOP
/*
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

//9.   INTERNATIONALIZING DATES (Intl)
//10.  INTERNATIONALIZING NUMBERS (Intl)
//11.  TIMERS: setTimeout AND setInterval
//12.  IMPLEMENTING A COUNTDOWN TIMER

//8.   OPERATIONS WITH DATES
/*
 */
