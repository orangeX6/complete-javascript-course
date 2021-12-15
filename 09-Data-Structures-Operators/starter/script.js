'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //PRE ES6 IF U wanted to add an object to existing object
  // openingHours:openingHours,

  //ES6 enhanced object literals
  openingHours,
  //Function had to written like below pre ES6
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //Rest of the functions are written with enhanced object literals introduced in ES6 where we can skip the function keyword and semicolon
  orderDelivery({
    starterIndex = 1, //Default parameter
    mainIndex = 0, //default
    time = '21:00', //default
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};


//CHALLENGE EXAMPLE
const game= {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    console.log(`${players.length} goals were scored`);
    console.log(...players);
  },
};

/*
// 9.1 ARRAY DESTRUCTURING
// 9.2 OBJECT DESTRUCTURING
// 9.3 SPREAD OPERATOR (...)
//9.4 REST PATTERN AND PARAMETERS
//9.5 SHORT CIRCUITING (&&  and ||)
//9.6 THE NULLISH COALESCING OPERATOR (??)
//9.7 LOGICAL ASSIGNMENT OPERATORS
//9.8 CODING CHALLENGE #1
//9.9 LOOPING ARRAYS: THE FOR-OF LOOP
//9.10 ENHANCED OBJECT LITERALS
//9.11 OPTIONAL CHAINING (.?)
//9.12 LOOPING OBJECTS: OBJECT KEYS, VALUES, and ENTRIES
//9.13 CODING CHALLENGE #2
//9.14 SETS

//9.15 MAPS: FUNDAMENTALS

//9.16 MAPS: ITERATION

//9.17 SUMMARY: WHICH DATA STRUCTURE TO USE?

//9.18 CODING CHALLENGE #3

//9.19 WORKING WITH STRINGS - PART 1

//9.20 WORKING WITH STRINGS - PART 2

//9,21 WORKING WITH STRINGS - PART 3

//9.22 CODING CHALLENGE #4

//9,23 STRING METHODS PRACTICE

//9.1 DESTRUCTURING ARRAYS 
//We use [] brackets to destructure arrays
const arr = [2, 3, 4];

//destructuring 1 by 1
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring it all at once
const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

//fetching only first 2 elements of array
const [first, second] = restaurant.categories;
console.log(first, second);

//fetching the first and third element
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);


//Switching variables ( Mutating)
//Without destructuring
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//With destructuring (Mutating)
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Destructuring Nested arrays
const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default Values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); //returns 8 9 undefined
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //returns 8 9 1

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

//9.2 DESTRUCTURING OBJECTS
//{} brackets are used to destructure objects
//We need to use the exact property names to destructure objects. Also we can select properties in any order.

//Destructuring Restaurant obj
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//changing the names of variables we created
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//{a,b} = obj; // this doesnt work coz js expects a codeblock. so we need to wrap it in parenthesis
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const { fri } = openingHours;
console.log(fri);
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//Practical Example
restaurant.orderDelivery({
  time: '22:20',
  address: 'Via del sole, 23',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  // starterIndex: 0,
  time: '22:20',
  address: 'Via del sole, 23',
});

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

//9.3 THE SPREAD OPERATOR (...)
//Spread operator expands the array into all its elements, basically unpacking all the array elements at once.

//WITHOUT SPREAD OPERATOR
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //outputs [1, 2, 7, 8, 9]
//WITH SPREAD OPERATOR
const newArr = [1, 2, ...arr];
console.log(newArr); //outputs [1, 2, 7, 8, 9]
console.log(...newArr); //outputs 1 2 7 8 9
//When we need the individual elements of the array we use spread operator, and that is useful when we write an array and we pass multiple elements into a function

//Difference in array destructuring and spread operator is spread operator takes all the elements out from the array and doesnt create new variables and as a consequence we can only use it in places where we write values seperated by commas.

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

//Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 Arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//We can use Spread operator on all Iterables: arrays, strings,maps,sets.
//Since 2018 spread operator also works on objects
const str = 'Pranav';
const letter = [...str, ' ', 's'];
console.log(letter);
console.log(...str);
//Wont work in template literals -
//Ex this wont work  - console.log(`${..str} abc`);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1? "),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1996, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

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

//9.4 REST PATTERN AND PARAMETERS(...)
//SAME SYNTAX AS SPREAD OPERATOR BUT DOES THE OPPOSITE THING.
//Spread and the rest syntax both look exactly the same.
// But they work in opposite ways depending on where they are used.
// The spread operator is used where we would otherwise write values separated by comma
//The rest pattern is used where we would otherwise write variable names separated by comma and not values.

//SPREAD is used on the right side of assignment operator
const arr = [1, 2, ...[3, 4]];

//REST is used on the left side of assignment operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //outputs 1 2 (3) [3, 4, 5]

// 1 - DESTRUCTURING
//Example Arrays
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);
//outputs Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
//It does not include the skipped element, hence the rest pattern must be the last element

//Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2 - FUNCTIONS

//REST OPERATOR
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); //SPREAD OPERATOR

restaurant.orderPizza('mushrooms', 'olives', 'onions', 'spinach');
restaurant.orderPizza('mushrooms');
restaurant.orderPizza('mushrooms', 'garlic');

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

//9.5 SHORT CIRCUITING (&&  and ||)
//Properties of logical operators -
//1 - They can use any data type
//2 - They can return any data type
//3 - They can do short circuiting

console.log(`-----------OR----------`);
//If the first operand is truthy, OR operator wont evaluate the other operand.
//The OR operator short circuits when the first value is truthy

console.log(3 || 'Orange'); //returns 3 (first truthy value)
console.log('' || 'Orange'); //Orange
console.log(true || 0); //true
console.log(undefined || null); //returns null(since its the second falsy value)
console.log(undefined || 0 || '' || 'Hello' || 23 || null); //returns Hello (Since its the first truthy value)

//WITHOUT SHORT CIRCUITING
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//WITH SHORT CIRCUITING
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(`----------AND---------`);
//The AND operator short circuits when the first value is falsy and wont check the second value
//When the first value is truthy then the evaluation continues and simply the last value is returned.
console.log(0 && 'Jonas'); //returns 0
console.log(69 && 'Pranav'); //returns Pranav
console.log('Hello' && 23 && null && 'Orange'); //returns null

//USING IF
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}
//With AND Short Circuit
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

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

//9.6 THE NULLISH COALESCING OPERATOR (??)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); //outputs 10

//As we can see the result is wrong as if there are 0 guests the output should be 0. The solution to this is a new operator in ES 2020 i.e. the NULLISH COALESCING OPERATOR (??)

//The NULLISH COALESCING operator works with the idea of nullish values instead of falsy values.
//NULLISH VALUES are null and undefined. So it does not include (NOT, 0 or ' ' );
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //outputs 0

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

//9.7 LOGICAL ASSIGNMENT OPERATORS (ES 2021)
// Even more modern than the NULLISH COALESCING operator are the 3 new logical assignment operators
//1 -   OR ASSIGNMENT OPERATOR
//2 -  AND ASSIGNMENT OPERATOR
//3 - NULLISH ASSIGNMENT OPERATOR

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Gianna Jun',
};

//Adding default number of guests if an object does not contain the numGuests property

//OR operator
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;
// console.log(rest1, rest2);

//OR ASSIGNMENT operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1, rest2); //outputs 20 10

rest1.numGuests = 0;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1, rest2); //outputs 10 10
//WHich is wrong

//TO tackle this we use the
//NULLISH ASSIGNMENT OPERATOR
rest1.numGuests = 0;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1, rest2); //outputs 0 10

//Anonymize the restaurant owner names
//AND OPERATOR
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// console.log(rest1, rest2);
//AND ASSIGNMENT OPERATOR
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1, rest2);

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

//9.8 CODING CHALLENGE #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    console.log(`${players.length} goals were scored`);
    console.log(...players);
  },
};

//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thaigo', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5.
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.
// const printGoals = function (...players) {};

game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals('Lewandowski', 'Hummels');

game.printGoals(...game.scored);

//7.
team1 < team2 && console.log(`Team 1 is most likely to win`);
team2 < team1 && console.log(`Team 2 is most likely to win`);


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



//9.9 LOOPING ARRAYS: THE FOR-OF LOOP (ES6)

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

for (const item of menu) console.log(item);
//FOR OF allows continue and break;
//Some ways of looping arrays wont allow you to do so

//GET index as well as item in FOR OF Loop
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]);

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


//9.10 ENHANCED OBJECT LITERALS
//1 Adding an existing object can be done with a better syntax
//2 Methods can be written without function keyword
//EXAMPLE 1 - Check Restaurant object
//3 We can compute property names instead of writing them out manually
//EXAMPLE 2 -
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHoursCompute = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

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



//9.11 OPTIONAL CHAINING (.?) (ES 2020)
//With optional chaining if a certain property does not exist then undefined is returned immediately

//console.log(restaurant.openingHours.mon.open);    
//The above will give the following error. 
//Uncaught TypeError: Cannot read properties of undefined (reading 'open')

if(restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);    //No output

//WITH OPTIONAL CHAIN  (?.)
console.log(restaurant.openingHours.mon?.open); //returns undefined
//Only if the property that is before the '?' exists then the property after it will be read. Else it will return undefined 

//We can use it multiple times 
console.log(restaurant.openingHours?.mon?.open);  

//EXAMPLE 
for (const  day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`On ${day} we open at ${open}`);
}

//On Methods
console.log(restaurant.order?.(0,1) ?? `No method available`);
console.log(restaurant.orderRisotto?.(0,1) ?? `No method available`);

//On ARRAYS
const users = 
[{
  name: 'Pranav',
  email:'hi@mail.com',
},
{
 name:'Sakshi',
 email:'hello@mail.com',
}]

console.log(users[1]?.name ?? `Nope not available`);
console.log(users[4] ?.name?? `Nope not available`);
console.log(users[1] ?.sub?? `Nope not available`);

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



//9.12 LOOPING OBJECTS: OBJECT KEYS, VALUES, and ENTRIES

//PROPERTY NAMES  (Object.keys(objName))
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for(const day of  properties){
  openStr+= `${day}, `
}

console.log(openStr);

//PROPERTY VALUES  (Object.values(objName))
const values = Object.values(openingHours);
console.log(values);

//ENTRIES  (FOR ENTIRE OBJECT ) (Object,entries(objName))
const  entries = Object.entries(openingHours);
console.log(entries);

for (const [key, {open,close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


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



//9.13 CODING CHALLENGE #2
//1.
for (const [i,el] of game.scored.entries()) {
  console.log(`Goal ${i+1}:  ${el}`);
}

//2.
const oddsArr = Object.values(game.odds)
console.log(oddsArr);
let avg = 0;
for (const item of oddsArr) 
avg+=item;

avg/=oddsArr.length
console.log(avg);

//3.
const odds = Object.entries(game.odds)
console.log(game.team1);
console.log(odds);
for(const [key,val] of odds){
  const teamStr = key ==='x' ? 'draw' : `victory ${game[key]}`
  console.log(`Odds of ${teamStr}: ${val}`);
  // console.log(key,val);
}

//4.
let scores ={}
for (const player of game.scored){
  console.log(player);
  scores[player] ?scores[player]++ :scores[player]=1;
}
console.log(scores);


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

//9.14 SETS
