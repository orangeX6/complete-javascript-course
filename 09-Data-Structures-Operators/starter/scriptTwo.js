'use strict';
/*
const ordersSet = new Set([
  'Pizza',
  'Pizza',
  'Pizza',
  'Pasta',
  'Risotto',
  'Biryani',
]);
console.log(ordersSet);
console.log(ordersSet.delete('Pizzaa'));
console.log(ordersSet);
console.log(ordersSet.add('Pineapple'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet);
console.log(ordersSet.clear());
console.log(ordersSet);
ordersSet.forEach(order => console.log(order));

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const setOfStaff = new Set([...staff]);
console.log(setOfStaff);

const a = new Set('mississippi');
console.log(a);

const x = new Map();
x.set('name', 'Dumplings ');
x.set(1, 'Mumbai, Indian');
x.set(2, 'Deccan, Indian');
x.set('categories', ['Spicy', 'VVeg', 'Chicken', 'mushrooms'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed')
  .set('songs', {
    Taeyeon: ['Circus', 'INVU', 'Four Seasons'],
    'Ed Sheeran': ['One', 'I see fire', 'Perfect'],
  });

console.log(x.get('name'));

console.log(x.has('categories'));
console.log(x);
console.log(Object.entries(x.get('songs')));

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

console.log(Object.entries(openingHours));
const hours = new Map(Object.entries(openingHours));

console.log(hours);

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct Number!'],
  [false, 'Wrong'],
]);

console.log(question.get('question'));
for (const [key, value] of question.entries()) {
  if (typeof key === 'number') {
    console.log(key, value);
  }
}

// const answer = Number(prompt('Your Answer'));
// console.log(answer, question.get('correct'));
// console.log(question.get(answer === question.get('correct')));
console.log(x);
console.log([...x]);

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

const events = [...new Set(gameEvents.values())];
console.log(events, typeof events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(`An event happened every ${90 / gameEvents.size} minutes`);

for (const [key, value] of gameEvents) {
  const half = key < 45 ? 'First Half' : 'Second Half';
  console.log(`[${half}] ${key}: ${value}`);
}

 */

// Strings

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
const plane = 'pixa     A320neo    pixa';

console.log(plane[0]);
console.log(plane.indexOf('neo'));
console.log(plane.length);
console.log(plane.lastIndexOf('2'));
console.log(plane.trim());
console.log(plane.trimEnd());
console.log(plane.trimStart());
console.log(plane.trimStart().slice(0, 4));
console.log(plane.trimStart().slice(-5, -1));
console.log(plane.includes('a'));
console.log(plane.includes('A'));
console.log(plane.startsWith(' '));
console.log(plane.endsWith(' '));
console.log(plane.search('pixa'));
console.log(plane.replace('pix', 'ionic'));
console.log(plane.replace(/pix/g, 'ionic'));
console.log(plane.replaceAll('pix', 'ionic'));
console.log(plane.split('    '));
console.log(plane.concat('sss'));
console.log(plane.slice(-1));

const checkMiddleSeat = seat => {
  const s = seat.slice(-1).toLowerCase();
  const isMiddle = s === 'b' || s === 'e' ? true : false;
  console.log(isMiddle);
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('2E');

const x = 'a+very+nice+string';
console.log(x.split('+').join(' '));
const [firstName, lastName] = 'Pranav Naringrekar'.split(' ');
console.log(firstName, lastName);

const capitalizeName = name => {
  return name.split(' ').map(name => name[0].toUpperCase() + name.slice(1));
};

console.log(capitalizeName('jessica ann smith davis'));

const message = 'Go to gate 23!';
console.log(message.padStart(26, '👻'));
console.log(message.padEnd(32, '👻'));
console.log(message.padStart(28, '👻').padEnd(42, '👻'));
console.log(message.concat('🎆').repeat(5));

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('textarea').value = `underscore_case
 first_name_s
Some_Variable
  calculate_AGE
delayed_departure`;

document.querySelector('button').addEventListener('click', () => {
  const text = document.querySelector('textarea').value;

  const strArr = text
    .split('\n')
    .map(str => str.trim().toLowerCase().split('_'));

  strArr.forEach((str, i) => {
    let [first, ...others] = str;
    others = others.map(str => str.replace(str[0], str[0].toUpperCase()));
    others = [first, ...others];
    console.log(`${others.join('').padEnd(20, ' ')}${'❄️'.repeat(i + 1)}`);
  });
});
/*
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
*/
