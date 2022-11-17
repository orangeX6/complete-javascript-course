// importing module
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';

// console.log('importing module');
// addToCart('apples', 10);

// console.log(price, totalQuantity);

import add, * as ShoppingCart from './shoppingCart.js';
add('oranges', 16);
add('pizza', 5);
add('cake', 2);
console.log(ShoppingCart.totalPrice);
console.log(ShoppingCart.cart);

// const x = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// // const x = await fetch(`https://restcountries.com/v3.1/all`);
// const y = await x.json();
// console.log(y);

// console.log('START🌟🌟🌟🌟🌟🌟🌠');
// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   console.log(data);

//   const { title } = data.at(-1);
//   return { title, text: data.at(-1).body };
// };

// const post = await getLastPost();
// console.log(post);
// console.log('END 🌚🌚🌚🌚🌚🌚🌚🌚');

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import _ from 'lodash-es';
// import _ from 'lodash';
// import L from 'leaflet';

// let map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// L.marker([51.5, -0.09])
//   .addTo(map)
//   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//   .openPopup();

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
      types: ['wheat', 'multigrain'],
    },
    {
      product: 'pizza',
      quantity: 6,
    },
  ],
  user: { loggedIn: true },
};

const stateClone = _.cloneDeep(state);

state.name = 'orange';

console.log(stateClone);
console.log(stateClone === state);
console.log(state, stateClone);

if (module.hot) {
  module.hot.accept();
}
