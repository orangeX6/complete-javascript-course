'use strict';

const ordersSet = new Set([
  'Pizza',
  'Pizza',
  'Pizza',
  'Pasta',
  'Risotto',
  'Biryani',
]);
// console.log(ordersSet);
// console.log(ordersSet.delete('Pizzaa'));
// console.log(ordersSet);
// console.log(ordersSet.add('Pineapple'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet);
// console.log(ordersSet.clear());
// console.log(ordersSet);
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

// console.log(x.get('name'));

// console.log(x.has('categories'));
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
