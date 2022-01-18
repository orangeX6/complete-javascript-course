'use strict';
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



//RECURSIVE FUNCTIONS
function foo(i) {
  //   debugger;
  if (i < 0) return;
  console.log("begin: " + i);
  foo(i - 1);
  console.log("end: " + i);
}
foo(3);


//ARROW FUNCTIONS
const calcAge3 = (birthyear) => 2021 - birthyear;
console.log(calcAge3(1996));

const calcAge4 = (birthYear, firstName) => {
  const currentAge = 2021 - birthYear;
  const retirement = 65 - currentAge;
  return `${firstName} retires in ${retirement} years`;
};

console.log(calcAge4(1996, "James"));


//FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}
console.log(fruitProcessor(2, 4));



//REVIEWING FUNCTIONS
const calcAgeX = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const curAge = calcAgeX(birthYear);
  const retirementAge = 65 - curAge;
  if (retirementAge > 0) {
    console.log(`${firstName} retires in ${retirementAge} years`);
    return retirementAge;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1969, "Orange"));
console.log(yearsUntilRetirement(1999, "Appie"));



//FUNCTION CODING CHALLENGE

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins win(${avgDolphins} vs ${avgKoalas})`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Koalas win(${avgKoalas} vs ${avgDolphins})`;
  } else {
    return `No team wins`
  }
};

//TEST 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreDolphins2 = calcAverage(85, 54, 41);

//TEST 2
const scoreKoalas = calcAverage(65, 54, 49);
const scoreKoalas2 = calcAverage(23, 34, 27);


console.log(checkWinner(scoreDolphins, scoreKoalas));
console.log(checkWinner(scoreDolphins2, scoreKoalas2));
console.log(checkWinner(scoreDolphins2, 200));



//ARRAYS

//INTRO TO ARRAYS 
//Ways to create arrays 
const friends = ['Sakshi', 'Jacica', 'Ninad'];
const numbers = new Array(119, 120, 6, 96);


console.log(friends[0], numbers[3])
console.log(numbers.length)

//MUTATE ARRAYS 
friends[2] = 'Harshit'
console.log(friends)

const firstName = 'Pranav'
const pranav = [firstName, 'N', 2021 - 1996, 'developer', friends]
console.log(pranav)
console.log(pranav.length)

//Exercise
const calcAgeXY = function (birthYear) {
  return 2021 - birthYear;
}

const years = [2010, 1999, 2005, 1969, 1908];

console.log(calcAgeXY(years[3]));
console.log(calcAgeXY(years[years.length - 1]));

const ages = [calcAgeXY(years[0]), calcAgeXY(years[3]), calcAgeXY(years[years.length - 1])]

console.log(ages);


//BASIC ARRAY OPERATIONS / METHODS
const friends = ['Sakshi', 'Nidhi', 'Jac']

//POP , PUSH , SHIFT, UNSHIFT
friends.push('Rosh'); //adds element to the end of the array
friends.unshift('Akash') // add element to the beginning of the array
friends.shift(); //removes the first element
friends.pop() // removes the last element

//PUSH is a function and it returns a value. It returns the length of an array as the value. So if we store the value in new variable we will get the length of the array 
//Pop returns the last element of the array 

const lengthFriends = friends.push('Shreeya')
const popFr = friends.pop();
console.log(friends)
console.log(lengthFriends)
console.log(popFr);

//INDEXOF
console.log(friends.indexOf('Sakshi'));
console.log(friends.indexOf('Aks'))

//INCLUDES (uses strict equality)
friends.push('23')
console.log(friends.includes('23'));
console.log(friends.includes(23));
console.log(friends.includes('Sakshi'));
console.log(friends.includes('Aks'));



//CODING CHALLENGE ARRAYS 
const calcTip = bill => bill > 49 && bill < 301 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
let tip = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1]));
let total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]]

console.log(tip);
console.log(total);



//INTRODUCTION TO OBJECTS 
const Pranav = {
  firstName: 'Pranav',
  lastName: 'Naringrekar',
  age: 2021 - 1996,
  job: 'dev',
  friends: ['Sakshi', 'Jac', 'Ninad']
}

console.log(Pranav);

//USE Arrays for structured data and objects for unstructured data


//DOT VS. BRACKET NOTATION
const pranav = {
  firstName: 'Pranav',
  lastName: 'Naringrekar',
  age: 2021 - 1996,
  job: 'dev',
  friends: ['Sakshi', 'Jac', 'Ninad']
}

console.log(pranav.lastName)
console.log(pranav['lastName'])
//In dot notation we have to use the real property name and can not use the expression.
// we can also store an expression in bracket notation which can hold the key 
//For eg 
const nameKey = 'Name'
console.log(pranav['first' + nameKey]);
console.log(pranav['last' + nameKey]);

//When we need to compute the property name we have to use the bracket notation.In other cases we use the dot notation mostly

//NEED FOR BRACKET NOTATION - 
// const selectVal = prompt('What do you want to know about Pranav. Choose between - firstName, lastName, age, job and friends');


// if (pranav[selectVal]) {
//   console.log(Pranav[selectVal]);
// } else {
//   console.log('Wrong request')
// }

//ADDING A NEW PROPERTY 
pranav.location = 'Vasai'
pranav['mail'] = `pan@mail.com`
console.log(pranav)

//Challenge 
const aboutPranav = `${pranav.firstName} has ${pranav.friends.length} friends and ${pranav.friends[0]} is his best friend`;
console.log(aboutPranav)



//OBJECT METHODS, Using "this" keyword
const pranav = {
  firstName: 'Pranav',
  lastName: 'Naringrekar',
  birthYear: 1996,
  job: 'dev',
  friends: ['Sakshi', 'Jac', 'Ninad'],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2021 - birthYear;
  // }

  // calcAge: function () {
  //   console.log(this)
  //   return 2021 - this.birthYear
  // }

  //BETTER SOLUTION - 
  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  driving: function () {
    this.calcAge();
    return `${this.firstName} is a ${this.age} year old ${this.job}, and he ${this.hasDriversLicense ? 'have' : 'dont have'} a driver's license`;
  }



}

// console.log(pranav.calcAge(pranav.birthYear));
// console.log(pranav.calcAge(pranav['birthYear']));
console.log(pranav.calcAge());
console.log(pranav.age);
console.log(pranav.age);
console.log(pranav.age);

//Challenge
console.log(pranav.driving());


const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi
  }
}

const john = {
  firstName: 'John',
  lastName: 'Smith',
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi
  }
}



if (john.calcBMI() > mark.calcBMI()) {
  console.log(`${john.firstName} ${john.lastName}'s(${john.bmi})BMI is higher than ${mark.firstName} ${mark.lastName}'s'(${mark.bmi})`);
} else {
  console.log(`${mark.firstName} ${mark.lastName}'s (${mark.bmi})BMI is higher than ${john.firstName} ${john.lastName}'s(${john.bmi}) BMI`);
}

console.log(john)



//LOOPS 
// for (let index = 1; index < 11; index++) {
//   console.log(`Writing this line ${index}`);
// }

const pranavArr = [
  'Pranav',
  'Naringrekar',
  2021 - 1996,
  'teacher',
  ['Sakshi', 'Jacica', 'Ninad'],
  true
];

const types = [];

for (let i = 0; i < pranavArr.length; i++) {
  //Reading from array
  console.log(pranavArr[i] + ' ' + typeof pranavArr[i])

  //Filling types of array
  // types[i] = typeof pranavArr[i]
  types.push(typeof pranavArr[i])
}

console.log(types)

const years = [1991, 2007, 1969, 2020];
const age = []
for (let i = 0; i < years.length; i++) {
  age.push(2021 - years[i]);
}

console.log(age)

console.log(`--- ONLY STRINGS ---`)
for (let i = 0; i < pranavArr.length; i++) {
  if (typeof pranavArr[i] !== 'string') continue
  console.log(pranavArr[i] + ' ' + typeof pranavArr[i])
}


console.log(`--- BREAK WITH NUMBERS --- `)
for (let i = 0; i < pranavArr.length; i++) {
  if (typeof pranavArr[i] === 'number') break

  console.log(pranavArr[i] + ' ' + typeof pranavArr[i])

}


//LOOPING BACKWARDS AND LOOP IN LOOP
const pranavArr = [
  'Pranav',
  'Naringrekar',
  2021 - 1996,
  'teacher',
  ['Sakshi', 'Jacica', 'Ninad'],
  true
];


for (let i = pranavArr.length - 1; i > -1; i--) {
  console.log(i + " " + pranavArr[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------STARTING EXERCISE ${exercise}----------`)
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: lifting weight repetition ${rep} 🏆`)
  }
}

//WHILE LOOP 
let rep = 1;
while (rep <= 10) {

  // console.log(`lifting weight repetition ${rep} 🏆`)
  rep++;
}

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`)
  dice = Math.floor(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Yayy! U got a 6. Now buzz off`)
}

*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

let calcTip = function (bill) {
  return bill > 49 && bill < 301 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

let calcAvg = function (arr) {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(bills);
console.log(tips);
console.log(totals);

console.log(calcAvg(totals));
console.log(calcAvg(tips));

const numberToFraction = function (amount) {
  debugger;
  // This is a whole number and doesn't need modification.
  if (parseFloat(amount) === parseInt(amount)) {
    return amount;
  }
  // Next 12 lines are cribbed from https://stackoverflow.com/a/23575406.
  const gcd = function (a, b) {
    if (b < 0.0000001) {
      return a;
    }
    return gcd(b, Math.floor(a % b));
  };

  const len = amount.toString().length - 2;
  let denominator = Math.pow(10, len);

  let numerator = amount * denominator;
  let divisor = gcd(numerator, denominator);
  numerator /= divisor;
  denominator /= divisor;
  let base = 0;
  // In a scenario like 3/2, convert to 1 1/2
  // by pulling out the base number and reducing the numerator.
  if (numerator > denominator) {
    base = Math.floor(numerator / denominator);
    numerator -= base * denominator;
  }
  amount = Math.floor(numerator) + '/' + Math.floor(denominator);
  if (base) {
    amount = base + ' ' + amount;
  }
  return amount;
};

console.log(numberToFraction(0.67));
