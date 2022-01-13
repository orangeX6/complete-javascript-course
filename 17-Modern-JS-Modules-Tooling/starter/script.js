/*
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

//-> 274
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart. (Shipping Cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from the supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('pineapple', 4);
ShoppingCart2.addToCart('pizza', 2);

//? How do we have access to cart variable and are even able to manipulate it ? even though the function has returned long ago?
//-> CLOSURES
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); //returns undefined as we are not returning it. but the addToCart() can still access it due to closure
console.log(ShoppingCart2.cart); // Get cart with mutated values as we have added values to it with addToCart method. This works due to closure
*/
//-> 275 CommonJS
import cloneDeep from '../../node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);
