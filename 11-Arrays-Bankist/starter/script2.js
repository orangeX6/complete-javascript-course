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

//-> Slice method
//# creates new array
// console.log(arr.slice(2)); //['c', 'd', 'e']
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]); //spread works same as slice without parameter

//-> Splice Method
//>> mutates the original array
// console.log(arr.splice(-1));
// console.log(arr);
// arr.splice(1, 2, 'p', 8, 9, 6);
// console.log(arr);

//-> Reverse
//>> mutates the original array
// arr.reverse();
// console.log(arr);

//-> Concat
// const letters = arr.concat(arr2);
// console.log(arr, arr2, letters);
// console.log([...arr, ...arr2]);

//-> Join
// console.log(letters.join(''));
// console.log(letters);

//-> forEach
//>> forEach with ARRAYS
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0)
//     console.log(`Movement ${i + 1}: You deposited ${movement}
//   `);
//   else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
// }

// movements.forEach((movement, i, arr) => {
//   movement > 0
//     ? console.log(`Movement ${i + 1}: You deposited ${movement}`)
//     : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
// });

//>> forEach with MAPS
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['USD1', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// //>> forEach with SETS
// const currenciesUnique = new Set(['USD', 'INR', 'EUR', 'USD', 'INR', 'INR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

//>> filter n reduce
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// const balance = movements.reduce((sum, mov) => sum + mov, 0);

// console.log(balance);

//>> find
// console.log(movements);

// console.log(movements.find(mov => mov > 20000));

// console.log(accounts);
// console.log(accounts.find(acc => acc.interestRate === 1.2));

//>> includes
// console.log(movements);
// console.log(movements.includes(-130));
// console.log(movements.includes(3000));
// console.log(movements.includes(300));

//>> some
// console.log(movements);
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);
// const anyWithdrawals = movements.some(mov => mov < 0);
// console.log(anyWithdrawals);

//>> every
// console.log(movements);
// console.log(movements.every(mov => mov > 0));
// console.log(accounts[3].movements.every(mov => mov > 0));

//>> callbacks
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//>> flat
//>> flatMap
// const arrToFlat = [1, 2, 3, [3, 4, 5], 6, 9, ['s', 'p']];
// const flatArr = arrToFlat.flat();
// console.log(flatArr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat());
// console.log(arrDeep.flat().flat());
// console.log(arrDeep.flat(2)); // levels of depth

// const accountsMovements = accounts.map(acc => acc.movements);
// const allMovements = accountsMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((sum, mov) => sum + mov, 0);
// console.log(overallBalance);
// const overallBalance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((sum, mov) => sum + mov, 0);

// console.log(overallBalance);

//>> Sorting
//Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha', 'Judy'];
console.log(owners.sort());

//Movements
console.log(movements);
// console.log(movements.sort());
// movements.sort((a, b) => a - b);
// console.log(movements);

// movements.sort((a, b) => {
//   return a > b ? 1 : -1;
// });
// console.log(movements);
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(movements);

// const x = [11, 2, 22, 1];
// x.sort((a, b) => {
//   console.log(`a:${a}, b:${b} , a-b: ${a - b}`);
//   return a - b;
// });

// console.log(x);

//>> More Ways of Creating and Filling Arrays
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//>>Fill
// // Emprty arrays + fill method
// const x = new Array(7);
// console.log(x);
// // console.log(x.map(() => 5));
// x.fill(1, 3, 5);
// x.fill(1);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

//>> From
// // Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

// const movRows = document.querySelectorAll('.movements__row');

// console.log(movRows);

// const movRowsArray = Array.from(movRows, el => {
//   console.log(el);
//   el.zoro = 'roronoa';
//   return el;
// });

// console.log(movRowsArray);

/*

# STRING METHODS USED  -
->1 indexOf
->2 lastIndexOf
->3 trim
->4 slice
->5 toUpperCase
->6 toLowerCase
->7 trimStart
->8 trimEnd
->9 replace - only replaces first occurrence
->10 replaceAll
->11 split
->12 join
->13 padStart
->14 padEnd
->15 repeat
->BOOLEAN METHODS -
->1.1 includes
->1.2 startsWith
->1.3 endsWith


# ARRAY METHODS 
->  splice
->  slice
->  reverse
->  concat
->  join
->  forEach
->  map
->  filter
->  reduce
->  find
->  findIndex
->  includes
->  some
->  every
->  flat
->  flatMap
->  sort
->  fill
->  from
->  at
->  


-> Mutates         
    Splice              
    Reverse             
->  Does NOT Mutates
    Slice
    Concat
 */

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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
let currentAccount = accounts[0];
let sorted = false;
/////////////////////////////////////////////////

const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const movementRow = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', movementRow);
  });
};

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

const calcDisplayBalance = account => {
  account.balance = account.movements.reduce((sum, mov) => sum + mov, 0);

  labelBalance.textContent = `${account.balance}€`;
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

  labelSumIn.textContent = `${incomes.toFixed(2)}€`;
  labelSumOut.textContent = `${out.toFixed(2)}€`;
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

function updateUI(account) {
  // Display Movements
  displayMovements(account.movements);
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
    currentAccount.movements.push(-transferAmount);

  // Update UI and Clear Inputs
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  updateUI(currentAccount);
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov > amount / 10)) {
    currentAccount.movements.push(amount);
    inputLoanAmount.value = '';
    inputLoanAmount.blur();
    updateUI(currentAccount);
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
    inputCloseUsername.value = inputClosePin.value = '';
    inputClosePin.blur();
  }
});

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/**
 *
 *
 *
 *
 *
 */
displayMovements(currentAccount.movements);
calcDisplayBalance(currentAccount);
calcDisplaySummary(currentAccount);
/* 
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
 
 Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
 
 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
 2. Create an array with both Julia's (corrected) and Kate's data
 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
 4. Run the function for both test datasets
 
 
 TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
 TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
 

 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

 */

// const calcAverageHumanAge = doggosAges => {
//   const humanAge = doggosAges.map(doggo => {
//     return doggo < 3 ? doggo * 2 : 16 + doggo * 4;
//   });
//   const adults = humanAge.filter(age => age > 17);
//   const average = adults.reduce((avg, doggo, _, arr) => {
//     return avg + doggo / arr.length;
//   }, 0);
//   const a = adults.reduce((sum, doggo) => (sum += doggo));
//   const avg = a / adults.length;
//   console.log(humanAge);
//   console.log(adults);
//   console.log(average);
//   console.log(avg);
// };

// const t1 = [5, 2, 4, 1, 15, 8, 3];
// const t2 = [16, 6, 10, 5, 6, 1, 4];
// calcAverageHumanAge(t1);

// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];

// const checkDogs = (one, two) => {
//   const shallowOne = one.slice(1).slice(0, -2);
//   console.log(shallowOne);
//   const doggos = shallowOne.concat(two);
//   console.log(doggos);
//   doggos.forEach((doggo, index) => {
//     doggo > 3
//       ? console.log(`Dog number ${index + 1} is an adult`)
//       : console.log(`Dog number ${index + 1} is a pupper`);
//   });
// };

// checkDogs(julia, kate);
