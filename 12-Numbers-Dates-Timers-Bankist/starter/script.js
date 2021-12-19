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
    '2020-11-18T21:31:17.178Z',
    '2020-12-23T07:42:02.383Z',
    '2021-01-28T09:15:04.904Z',
    '2021-04-01T10:17:24.185Z',
    '2021-11-28T14:11:59.604Z',
    '2021-12-12T17:01:17.194Z',
    '2021-12-17T23:36:17.929Z',
    '2021-12-18T10:51:36.790Z',
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
    '2020-11-01T13:15:33.035Z',
    '2020-11-30T09:48:16.867Z',
    '2020-12-25T06:04:23.907Z',
    '2021-01-25T14:18:46.235Z',
    '2021-02-05T16:33:06.386Z',
    '2021-04-10T14:43:26.374Z',
    '2021-06-25T18:49:59.371Z',
    '2021-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-GB',
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

//----------------------DATE--------------------//
//Format Movement Date
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed < 10) return `${daysPassed} days ago`;
  // else {
  //   const day = `${date.getDate()}`.padStart(2, 0);
  //   const month = `${date.getMonth() + 1}`.padStart(2, 0);
  //   const year = date.getFullYear();
  //   return `${day}/${month}/${year}`;
  // }
  return new Intl.DateTimeFormat(locale).format(date);
};

//----------------CURRENCIES------------------------//

const formattedCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

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
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formattedCurrency(mov, acc.locale, acc.currency);

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formattedMov}</div>
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

  labelBalance.textContent = formattedCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

//-------------------SUMMARY-----------------------//
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((tot, mov) => tot + mov, 0);

  labelSumIn.textContent = formattedCurrency(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((tot, mov) => mov + tot, 0);

  labelSumOut.textContent = formattedCurrency(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int > 1)
    .reduce((tot, int) => tot + int, 0);

  labelSumInterest.textContent = formattedCurrency(
    interest,
    acc.locale,
    acc.currency
  );
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

const logoutTimer = function () {
  //Set Interval Function
  const tick = function () {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //In each callback, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //When 0 seconds, stop timer and log out
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    //Decrease 1s
    time--;
  };

  //Set Time to 5 mins
  let time = 300;

  //Call timer every second
  tick();
  const timer = setInterval(tick, 1000);

  //Returning the timer so that we can clear it if an existing timer is running
  return timer;
};

////////////////////EVENT HANDLER\\\\\\\\\\\\\\\\\\
let currentAccount, timer;

//FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

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

    //Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'short',
      //numeric,long,short,narrow,2-digit
    };

    //GETS YOUR LANGUAGE CODE
    // const locale = navigator.language;
    // console.log(locale);
    //http://www.lingoes.net/en/translator/langcode.htm
    // labelDate.textContent = Intl.DateTimeFormat('ko-KR', options).format(now);

    labelDate.textContent = Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    //Clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur(); //removing cursor/focus
    inputLoginUsername.blur();

    //LogOut Time
    if (timer) clearInterval(timer);
    timer = logoutTimer();

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

    //Reset Timer
    clearInterval(timer);
    timer = logoutTimer();
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
    setTimeout(() => {
      //Adding movement (loan amount)
      currentAccount.movements.push(amount);

      //Add Loan Date
      currentAccount.movementsDates.push(new Date().toISOString());

      //Update UI
      updateUI(currentAccount);

      //Reset Timer
      clearInterval(timer);
      timer = logoutTimer();
    }, 5000);
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

//RETURNS TIMESTAMP 
console.log(+future);
console.log(Number(future));
console.log(future.getTime()); //2142237180000 returns TimeStamp

//TIMESTAMP RETURNING DATE
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

//8.   OPERATIONS WITH DATES
/*


//FUNCTION THAT CALCULATES THE NUMBER OF DAYS PASSED BETWEEN TWO DATES
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

console.log(calcDaysPassed(future, new Date()));
console.log(calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24)));

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
//TO THE TOP
//JS has a new Internationalization API that allows us to easily format numbers and strings according to diff. languages

//So with this new API we can make our application support different languages for users around the world.
//We will work on currencies and date in this

//Create current date and time
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'short',
  //numeric,long,short,narrow,2-digit
};

//GETS YOUR LANGUAGE CODE
// const locale = navigator.language;
// console.log(locale);
//http://www.lingoes.net/en/translator/langcode.htm
console.log(Intl.DateTimeFormat('ko-KR', options).format(now));

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




//10.  INTERNATIONALIZING NUMBERS (Intl)
//IMPLEMENTING CURRENCY IN BANK LIST APP -
//AT THE TOP

console.log(new Intl.DateTimeFormat('ko-KR').format(new Date()));

const options = {
  //style: 'unit',
  // OR
  style: 'currency',
  // OR
  // style: 'percent',
  //unit: 'mile-per-hour',
  unit: 'celsius',
  currency: 'EUR', //€
  // useGrouping: false,
};

const num = 4655535616.156;
console.log('KR:', new Intl.NumberFormat('ko-KR', options).format(num));
console.log('UK:', new Intl.NumberFormat('en-GB', options).format(num));
console.log('IN:', new Intl.NumberFormat('hi-IN', options).format(num));
console.log('JP:', new Intl.NumberFormat('jp-JP', options).format(num));
console.log('US:', new Intl.NumberFormat('en-US', options).format(num));
console.log('GER:', new Intl.NumberFormat('de-DE', options).format(num));


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

//11.  TIMERS: setTimeout AND setInterval

/////////////////// SET TIMEOUT \\\\\\\\\\\\\\\\\\
//As soon  as js hits the setTimeout method, it keeps counting the time in the background and registers the callback function to be called after that time has elapsed
//This mechanism is called ASYNCHRONOUS JAVASCRIPT

//The set timeout registers the callback function and then calls it after the second argument which is the timer is satisfied
//The execution does not stop at it will execute the lines of code after the set timeout while waiting

//SIMULATING ORDERING A PIZZA
setTimeout(() => console.log(`Here is your pizza 🍕`), 3000);
console.log('Waiting for pizza...');

//Using arguments in setTimeout
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  'olives',
  'onions'
);

//Canceling timeout
const ingredients = ['olives', 'pineapple'];
const pinePizza = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${[...ingredients]}`),
  3000,
  ...ingredients
);

if (ingredients.includes('pineapple')) clearTimeout(pinePizza);

//////////////////[/ SET INTERVAL \]\\\\\\\\\\\\\\\\\\
//Runs the callback function every 'timer' seconds

//setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);

//Clock
setInterval(() => {
  const now = new Date();
  const hours = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  console.log(`${hours}:${minute}:${second}`);
}, 1000);

//CLock using Intl API
//Does not work properly
const options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};
const nowIntl = new Date();
setInterval(() => {
  console.log(Intl.DateTimeFormat('hi-IN', options).format(nowIntl));
}, 1000);


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

 */

//12.  IMPLEMENTING A COUNTDOWN TIMER
//AT THE TOP
