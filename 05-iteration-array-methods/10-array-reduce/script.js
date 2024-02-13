//A function that accepts up to four arguments.
//The reduce method calls the callbackfn function one time for each element in the array.
//Calls the specified callback function for all the elements in an array.
//The return value of the callback function is the accumulated result,
//and is provided as an argument in the next call to the callback function.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((accumulated, current) => accumulated + current, 0);
console.log(sum); //55

// using for-of loop
let acc = 0;
for (const curr of numbers) {
  acc += curr;
}
console.log(acc); //55

// with initial value 10

const sum2 = numbers.reduce((acc, curr) => acc + curr, 10);
console.log(sum2); //65

const cart = [
  { id: 1, name: 'Product1', price: 100 },
  { id: 2, name: 'Product2', price: 400 },
  { id: 3, name: 'Product3', price: 500 },
  { id: 4, name: 'Product4', price: 350 },
];

const totalPrice = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);
console.log('total price: ' + totalPrice); // total price: 1350

// short form
const total = cart.reduce((acc, product) => acc + product.price, 0);
console.log('total cart value: ' + total); // total cart value: 1350
