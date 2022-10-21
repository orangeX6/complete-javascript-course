'use strict';

const arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['p', 'q', 'r', 's', 't'];
const letters = arr.concat(arr2);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2021-11-18T21:31:17.178Z',
    '2021-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-08-28T14:11:59.604Z',
    '2022-09-09T17:01:17.194Z',
    '2022-10-17T23:36:17.929Z',
    '2022-10-21T00:01:36.790Z',
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
    '2021-11-01T13:15:33.035Z',
    '2021-11-30T09:48:16.867Z',
    '2021-12-25T06:04:23.907Z',
    '2022-01-25T14:18:46.235Z',
    '2022-02-05T16:33:06.386Z',
    '2022-04-10T14:43:26.374Z',
    '2022-09-25T18:49:59.371Z',
    '2022-10-17T12:01:20.894Z',
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
let currentAccount;
let sorted = false;
let timeoutInterval;
// const now = new Date();
// const datey = new Date(Date.UTC(2022, 3, 6));
// console.log(now, 'datey', datey);

// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();
// const hour = `${now.getHours()}`.padStart(2, 0);
// const min = `${now.getMinutes()}`.padStart(2, 0);

// let options = {
//   day: 'numeric',
//   month: 'numeric',
//   year: '2-digit',
//   hour: 'numeric',
//   minute: 'numeric',
//   dayPeriod: 'short',
//   // timeZone: 'Asia/Calcutta',
//   // timeZone: 'Europe/Berlin',
//   // weekday: 'short',
// };

// const locale = navigator.language;
// labelDate.textContent = new Intl.DateTimeFormat(
//   currentAccount.locale,
//   options
// ).format(now);

/////////////////////////////////////////////////

const createUserName = accounts => {
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');

    // console.log(account.username);
  });
};

const formatDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round((date1 - date2) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(+new Date(), +date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();

  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCurrency = (amount, locale, currency) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount.toFixed(2));

const logoutTimer = () => {
  const ticker = () => {
    const min = `${Math.floor(time / 60)}`.padStart(2, 0);
    const sec = `${time % 60}`.padStart(2, 0);
    // console.log(min, seconds);
    labelTimer.textContent = `${min}:${sec}`;
    time--;

    if (time === -1) {
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Log in to get started`;
      clearInterval(timeoutInterval);
    }
  };

  let time = 300;
  ticker();
  timeoutInterval = setInterval(ticker, 1000);
};

const displayMovements = (account, sort = false) => {
  containerMovements.innerHTML = '';
  const { movements, movementsDates } = account;
  // console.log(movements, movementsDates, account);

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const date = new Date(movementsDates[i]);
    const displayDate = formatDate(date, account.locale);
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const movCurr = formatCurrency(mov, account.locale, account.currency);

    const movementRow = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${movCurr}</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', movementRow);
  });
};

const calcDisplayBalance = account => {
  account.balance = account.movements.reduce((sum, mov) => sum + mov, 0);

  labelBalance.textContent = formatCurrency(
    account.balance,
    account.locale,
    account.currency
  );
};

const calcDisplaySummary = account => {
  const { movements, interestRate } = account;

  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((sum, mov) => sum + mov, 0);
  const out = movements
    .filter(mov => mov < 0)
    .reduce((sum, mov) => sum + Math.abs(mov), 0);
  const interest = movements
    .filter(mov => mov > 0)
    .reduce(
      (sum, mov) => (mov * interestRate > 1 ? sum + mov * 0.012 : sum),
      0
    );

  labelSumIn.textContent = formatCurrency(
    incomes,
    account.locale,
    account.currency
  );

  labelSumOut.textContent = formatCurrency(
    out,
    account.locale,
    account.currency
  );
  labelSumInterest.textContent = formatCurrency(
    interest,
    account.locale,
    account.currency
  );
};

function updateUI(account) {
  // Display Movements
  displayMovements(account);
  // Display Balance
  calcDisplayBalance(account);
  // Display Summary
  calcDisplaySummary(account);
}

createUserName(accounts);

// Event Handlers

const login = event => {
  event.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value.trim()
  );
  // currentAccount = accounts.find(function (account, index) {
  //   // console.log(this[index]);
  //   return account.username === inputLoginUsername.value;
  // }, accounts);
  // // console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner
      .split(' ')
      .at(0)}`;

    timeoutInterval && clearInterval(timeoutInterval);
    logoutTimer();

    // Create current Date and time
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);

    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // clear fields (input)
    containerApp.style.opacity = 1;
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  } else {
    containerApp.style.opacity = 0;
    inputLoginPin.blur();
  }
};
btnLogin.addEventListener('click', login);

btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const transferAmount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  // Transferring Amount
  transferAmount > 0 &&
    receiverAcc &&
    currentAccount.balance > transferAmount &&
    receiverAcc?.username !== currentAccount.username &&
    receiverAcc.movements.push(transferAmount) &&
    currentAccount.movements.push(-transferAmount) &&
    currentAccount.movementsDates.push(new Date().toISOString()) &&
    receiverAcc.movementsDates.push(new Date().toISOString());

  // Update UI and Clear Inputs
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  updateUI(currentAccount);

  //update timers
  clearInterval(timeoutInterval);
  logoutTimer();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov > amount / 10)) {
    // Adding loan amount
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      inputLoanAmount.value = '';
      inputLoanAmount.blur();
      updateUI(currentAccount);

      //update timers
      clearInterval(timeoutInterval);
      logoutTimer();
    }, 4500);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Log in to get started`;

    inputCloseUsername.value = inputClosePin.value = '';
    inputClosePin.blur();
  }
});

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;

  //update timers
  clearInterval(timeoutInterval);
  logoutTimer();
});

/**
 *
 *
 *
 *
 *
 */
// displayMovements(currentAccount);
// calcDisplayBalance(currentAccount);
// calcDisplaySummary(currentAccount);

///#######################################//
///#######################################//
///#######################################//
///#######################################//
///#######################################//
///#######################################//
///#######################################//
///#######################################//
///#######################################//
///#######################################//
///#######################################//
///#######################################//
///#######################################//
///#######################################//
///#######################################//
///#######################################//
///#######################################//
///#######################################//
///#######################################//
///#######################################//

/*
console.log(0.1 + 0.2);

const x = Number.parseInt('69x6', 10);
console.log(parseInt(' 90.6767 flow'));
console.log(Number.parseFloat(' 3.56ed'));
console.log(parseFloat(' 90.6767 flow'));

console.log(typeof 30);
console.log(typeof '30');
console.log(typeof 'thirty');

console.log(Number.isNaN('30'));
console.log(Number.isNaN(30));
console.log(Number.isNaN('thirty'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(223 / 0)); // infinity

console.log(Number.isFinite(20));
console.log(Number.isFinite(20 / 0));
console.log(Number.isFinite('20'));

console.log(Number.isInteger(20));
console.log(Number.isInteger(20 / 0));
console.log(Number.isInteger(23.7));
console.log(Number.isInteger(234.0));

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 7, 58, 69));
console.log(Math.min(5, 7, 58, 69));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.trunc(23.9));
console.log(Math.trunc(23.3));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.2334532).toFixed(4));

console.log(5 % 2);
console.log(5 / 2);
console.log(1834 / 53);
console.log(1834 % 43);


//-> Big Int
console.log(2 ** 53);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.MIN_VALUE);
console.log(9523536437573463473446346346343);
console.log(9523536437573463473446346346343n); // bigint;
console.log(BigInt(2 ** 69));
console.log(Number(1000n) + 100000);
console.log(100000n * BigInt(85));
console.log(20n === 20);
console.log(20n >= 20);
console.log(20n == 20);
console.log(100n / 3n);
console.log(100 / 3);

const date = new Date();
console.log(date);
console.log(new Date('Oct 21 2022 20:18:18'));
console.log(new Date('26 October, 2015'));
console.log(new Date('2020-11-18T21:31:17.178Z'));
console.log(new Date(2022, 9, 26, 20, 23, 55));
console.log(Date.now('2020-11-18T21:31:17.178Z'));
console.log(Date.UTC(2022, 10, 26));
console.log(Date.parse(date));

console.log(new Date(1669420800000));

const future = new Date(2023, 2, 6, 6, 9, 55);
console.log(future.getFullYear());
console.log(future.getTime());
console.log(+future);
console.log(new Date(future.getTime()));
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getUTCDay());
console.log(future.getUTCFullYear());
console.log(future.toJSON());
console.log(future.toISOString());
console.log(future.toDateString());
console.log(future.toLocaleString());


const now = new Date();
// const datey = new Date(Date.UTC(2022, 3, 6));
// console.log(now, 'datey', datey);

const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = `${now.getHours()}`.padStart(2, 0);
const min = `${now.getMinutes()}`.padStart(2, 0);

let options = {
  day: 'numeric',
  month: 'numeric',
  year: '2-digit',
  hour: 'numeric',
  minute: 'numeric',
  dayPeriod: 'short',
  // timeZone: 'Asia/Calcutta',
  // timeZone: 'Europe/Berlin',
  // weekday: 'short',
};

const locale = navigator.language;
labelDate.textContent = new Intl.DateTimeFormat(
  currentAccount.locale,
  options
).format(now);



const num = 6568934.575;

const optionsNF = {
  // style: 'unit',
  // unit: 'kilometer-per-hour',
  // unit: 'celsius',
  style: 'currency',
  currency: 'USD',
  //useGrouping: false
};
console.log(`US: `, new Intl.NumberFormat('en-US', optionsNF).format(num));
console.log(`Marathi: `, new Intl.NumberFormat('mr-IN', optionsNF).format(num));
console.log(`Jpn: `, new Intl.NumberFormat('ja-JP', optionsNF).format(num));
console.log(`Hindi: `, new Intl.NumberFormat('hi-IN', optionsNF).format(num));
console.log(
  `India-En: `,
  new Intl.NumberFormat('en-IN', optionsNF).format(num)
);
console.log(`Korea: `, new Intl.NumberFormat('ko-KR', optionsNF).format(num));
console.log(`Germany: `, new Intl.NumberFormat('de-DE', optionsNF).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, optionsNF).format(num)
);



const ingredients = ['mushroom', 'spinach', 'olives'];

const timer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your pizza with ${ing1} and ${ing2}`);
  },
  6000,
  ...ingredients
);

if (ingredients.includes('olives')) clearTimeout(timer);

console.log('Your pizza will be delivered soon');

setInterval(() => {
  console.log(new Date());
}, 1000);

*/
