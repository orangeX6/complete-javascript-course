// exporting module
console.log('Exporting this ');

const shippingCost = 10;
export const cart = [];

export default (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };

// export const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   console.log(data);

//   const { title } = data.at(-1);
//   return { title, text: data.at(-1).body };
// };
