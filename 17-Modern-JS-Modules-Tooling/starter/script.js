//-> 272
////Importing Module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('Bread', 5);
// console.log(price, tq);

console.log('Importing module');

////Import all the exports at the same time;
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

//// We can use both default and named exports together.
//! However don't do this
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);
// add('pizza', 2);

//// Importing default export. We can give it any name.
// import add from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);

//// Live connection Example.
import { addToCart, cart } from './shoppingCart.js';
addToCart('pizza', 2);
addToCart('bread', 5);
addToCart('apples', 5);

console.log(cart);

//-> 273
// console.log('Start Fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

//EXAMPLE 1
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

//!We know this won't work as it returns a promise
// const lastPost = getLastPost();
// console.log(lastPost);
//? The workaround we used was
// lastPost.then(last => console.log(last));

//>> Doing the same with top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);

//EXAMPLE 2
