'use strict';

// Data needed for a later exercise
const flights1 =
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

/*
// 9.1 ARRAY DESTRUCTURING
// 9.2 OBJECT DESTRUCTURING
// 9.3 SPREAD OPERATOR (...)
//9.4 REST PATTERN AND PARAMETERS
//9.5 SHORT CIRCUITING (&&  and ||)
//9.6 THE NULLISH COALESCING OPERATOR (??)
//9.7 LOGICAL ASSIGNMENT OPERATORS (||= , ??= , &&=)
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
//(Keeping this here //£)

//
//
//
//
//
//
//

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




//9.14 SETS
//A set is just a collection of unique values.
//Set can never have duplicate values.

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet); //outputs  {'Pasta', 'Pizza', 'Risotto'}
//All the duplicate values are removed
//Set vs Array
// In set order of element  is irrelevant.
//All elements in set are unique
//There are no indexes in set
//There is no way of getting values out of set. Thats because there is no need to get data out of set as all values are unique and their orders does not matter and there is no point in retrieving values out of set. All we need to know is if a value is present in set or not
//The main use case of set is to remove duplicate values of arrays
//Has method in set is equivalent to include method in arrays

//Set methods -
//has,delete,add,clear

console.log(new Set('Pranav'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);
ordersSet.delete('Pizza');
console.log(ordersSet);
// ordersSet.clear();
// console.log(ordersSet);
for (const items of ordersSet) {
  console.log(items);
}

// EXAMPLE
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//Making array unique and converting set to array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
//Check unique positions in an array
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('pranavnaringrekar').size);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




//9.15 MAPS: FUNDAMENTALS
// A map is a data structure used to map values to keys.
//Just like objects data is stored in key value pair in maps
//The difference between map and objects is that in maps the keys can have any type. Even arrays or objects
//Map Methods -  set,delete,has,size,get,entries,keys,values

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); //returns entire map
//We can chain the set method of the map
//Example
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 2;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
console.log(rest);
// rest.delete(2);
//Object also has the delete method but its not encouraged to use it. Its also slow.
//USING ARRAY AS MAP KEY
rest.set([1, 3], 'Test');
//FETCHING MAP VALUES WITH ARRAY AS ITS KEY
console.log(rest.get([1, 2])); // This wont work and  return undefined. Thats because the array in get and set method are not the same objects
//So we actually need to declare an array and then use the variable to set it as map key
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

//USING DOM ELEMENTS AS KEY 
rest.set(document.querySelector('h1'),'Heading')
console.log(rest);
console.log(rest.size);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




//9.16 MAPS: ITERATION
//THERE is another method to populate maps other than set method, but when we keep adding new elements programmatically the set method is the one that is to be used

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again!'],
]);

console.log(question);

//CONVERT OBJECT TO MAP 
console.log(Object.entries(openingHours));
const hours = new Map(Object.entries(openingHours))
console.log(hours);


//QUIZ APP 
console.log(question.get('question'));
//ITERATIONS 
for(const [key,value] of question){
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt(question.get('question')));
const answer =3
console.log(answer);
console.log(question.get('correct'));
console.log(question.get(  answer === question.get('correct')  ));

//CONVERT MAP TO ARRAY 
const questArr = [...question];
console.log(questArr);
console.log(...question.entries());
console.log(...question.keys());
console.log(...question.values());

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




//9.17 SUMMARY: WHICH DATA STRUCTURE TO USE?

// DATA STRUCTURES OVERVIEW
// 🚅 SOURCES OF DATA
// 1 FROM THE PROGRAM ITSELF
// 2 FROM THE UI
// 3 FROM THE EXTERNAL SOURCES (APIs)

//WHAT IS AN API ?
// API stands for Application Programming Interface and we can use the API to get data from other web applications.
//For eg. we can use the API to get weather info on any city, data about movies, currency conversion rates, etc

//SOURCES OF DATA => COLLECTION OF DATA ==Store in ==>DATA STRUCTURE

//DATA STRUCTURES IN JS
//ARRAYS
//OBJECTS
//MAPS
//SETS
//WEAK MAP
//WEAK SET

//NOT BUILT IN
//STACKS
//QUEUES
//LINKED LIST
//TREES
//HASH TABLES

//WHICH DATA STRUCTURE TO USE ?
//Do we need a simple list of values ?
//We ll useARRAYS or SETS
//Do we need Key/Value Pairs ?
//We ll use OBJECTS or MAPS

//WHEN TO USE ARRAYS ?
//- When you need ORDERED list of values
//- Use when you need to MANIPULATE data

//WHEN TO USE SETS
//-When you need to work with UNIQUE values
//- HIGH PERFORMANCE is important
//- REMOVE DUPLICATES from arrays

//WHEN TO USE OBJECTS
//-  More TRADITIONAL Key/Value store
//- Easier to write and access values with . and []
//- When you need to include FUNCTIONS (METHODS)
//- When working with JSON  (Can convert to MAP)

//WHEN TO USE MAPS
//-  BETTER PERFORMANCE
//- KEYS can have ANY data type
//- EASY TO ITERATE
//- EASY TO COMPUTE SIZE
//- When you simply need to map key to values
//- Use when you need keys that are NOT strings

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//9.18 CODING CHALLENGE #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

//1.
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
//Sol 1
console.log(
  `An even happened, on average, every ${90 / gameEvents.size} minute`
);

//Sol 2
const time = [...gameEvents.keys()].pop();
// console.log(time);
console.log(
  `An even happened, on average, every ${time / gameEvents.size} minute`
);

//4.
for (const [key, event] of gameEvents.entries()) {
  const half = key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${half} ${key}: ${event}`);
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




//9.19 WORKING WITH STRINGS - PART 1
//STRINGS ARE PRIMITIVES
//SO WHY DO THEY HAVE METHODS ?
//SHOULD'NT METHODS BE JUST AVAILABLE ON OBJECTS, SUCH AS ARRAYS ?
//WHENEVER WE CALL A METHOD ON A STRING, JS WILL AUTOMATICALLY BEHIND THE SCENES CONVERT THAT STRING PRIMITIVE TO STRING OBJECT WITH THE SAME CONTENT AND THEN ITS ON THAT OBJECT THAT THE METHODS ARE CALLED.
//THIS PROCESS IS CALLED BOXING BECAUSE IT BASICALLY TAKES OUR STRING AND PUTS IT IN A BOX WHICH IS THE OBJECT AND THEN AGAIN CONVERTS THE RESULT TO PRIMITIVE TYPE

//LIST OF STRING METHODS USED  -
//1 indexOf
//2 lastIndexOf
//3 trim
//4 slice
//5 toUpperCase
//6 toLowerCase
//7 trimStart
//8 trimEnd
//9 replace - only replaces first occurrence
//10 replaceAll
//11 split
//12 join
//13 padStart
//14 padEnd
//15 repeat
//BOOLEAN METHODS -
//1.1 includes
//1.2 startsWith
//1.3 endsWith



const airLine = 'TAP Air Portugal';
const plane = 'A320neo';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(plane.length);
console.log(airLine.length);
console.log('B737'.length);

//STRING METHODS

// indexOf (CASE SENSITIVE )
// lastIndexOf
console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));
console.log(airLine.indexOf('Portugal'));
console.log(airLine.indexOf('portugal'));

//slice
console.log(airLine.slice(4));
console.log(airLine.slice(4, 7));
console.log(airLine.slice(4, -5));
console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));
console.log(airLine.slice(1, -1));

//EXAMPLE
const checkMiddleSeat = function (seat) {
  //B and E are middle Seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log(`You got middle seat`);
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Pranav'));
console.log(typeof new String('Pranav'));
console.log(typeof new String('Pranav').slice());


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



//9.20 WORKING WITH STRINGS - PART 2

//toLowerCase AND toUpperCase
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

//Fix Capitalization in name
const passenger = 'pRanAv'; //Pranav
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing email
const email = 'hello@Pranav.io';
const loginEmail = '  Hello@Pranav.Io \n';

const lowerEmail = email.toLowerCase();
// const lowerLoginEmail = loginEmail.toLowerCase();
// const trimLoginEmail = lowerLoginEmail.trim();
// console.log(trimLoginEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();

const compareEmail = function (email, userEnteredEmail) {
  const correct = email === userEnteredEmail ? true : false;
  return correct;
};

console.log(compareEmail(lowerEmail, normalizedEmail));

let stringX = '   this is a string blah! ! !  ';
// stringX = stringX.trimStart();
stringX = stringX.trimEnd();
console.log(stringX);

//replacing
//£

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
const priceUSFormat =
  priceGB.slice(-1).replace('£', '$') + priceGB.slice(0, -1).replace(',', '.');
console.log(priceUS);
console.log(priceUSFormat);

const announcement = `All passengers come to boarding door 23. Boarding door 23!`;

// replaceAll
console.log(announcement.replaceAll('door', 'gate'));

// replacing all occurrences using Regular Expressions
//In regular expression we need to write a string in / instead of ', " or `
//we add a g flag to the door which means global, and will replace all the occurrences of door
console.log(announcement.replace(/door/g, 'gate'));

console.log(plane, airLine);
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.includes('a320'));
console.log(airLine.startsWith('TAP '));
console.log(plane.endsWith('neo'));

if (plane.startsWith('A') && plane.endsWith('neo')) {
  console.log(`Part of NEW Airbus family`);
}

//EXERCISE
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are NOT allowed on board`);
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




//9.21 WORKING WITH STRINGS - PART 3

//LIST OF STRING METHODS USED  -
//1 indexOf
//2 lastIndexOf
//3 trim
//4 slice
//5 toUpperCase
//6 toLowerCase
//7 trimStart
//8 trimEnd
//9 replace - only replaces first occurrence
//10 replaceAll
//11 split
//12 join
//13 padStart
//14 padEnd
//15 repeat
//BOOLEAN METHODS -
//1.1 includes
//1.2 startsWith
//1.3 endsWith

//Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Pranav Naringrekar'.split(' '));

const [firstName, lastName] = 'Pranav Naringrekar'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  console.log(names);
  let namesUpper = [];
  //Solution 1
  // for (const n of names) {
  //   namesUpper.push(n[0].toUpperCase() + n.slice(1));
  // }
  // console.log(namesUpper.join(' '));

  //Solution 2
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('pranav naringrekar');

//Padding
const message = `Go to gate 23`;
console.log(message.padStart(25, '+'));
console.log('Pranav'.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const str2 = number.toString();
  console.log(typeof str2);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4331732644266666));
console.log(maskCreditCard('250237253029200200'));

//Repeat
const message2 = 'Bad weather... All Departures Delayed';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
};

planesInLine(10);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



//9.22 CODING CHALLENGE #4


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textArea = document.querySelector('textarea');
const btn = document.querySelector('button');
btn.textContent = 'Btn';

//document.querySelector('.again').addEventListener('click', function () {

const toCamelCase = function () {
  const text = textArea.value.split('\n');
  let textCamel = '';

  //looping through textarea text
  for (const [i, item] of text.entries()) {
    const [first, second] = item.trim().toLowerCase().split('_');

    const camelItem = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    textCamel += `${camelItem.padEnd(20, ' ')}${'✔'.repeat(i + 1)} \n`;
  }

  textArea.value = textCamel;
};

btn.addEventListener('click', toCamelCase);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//9,23 STRING METHODS PRACTICE
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🛑' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);
  console.log(output);
}


*/
