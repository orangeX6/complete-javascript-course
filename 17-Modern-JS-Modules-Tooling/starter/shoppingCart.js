////Exporting Module

console.log('Exporting module');

//-> 273
//BLOCKING CODE
// console.log('Start Fetching Users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish Fetching');

//-> 272
const shippingCost = 10;
export const cart = [];

////Named Exports
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

////Named Exports
export { totalPrice, totalQuantity as tq };

//// Default exports
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
