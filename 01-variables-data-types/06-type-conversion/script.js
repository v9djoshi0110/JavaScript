// convert String to Number

let price = '200';

console.log("Before String to Number conversion: ", price, typeof price);

// price = +price;
// price = parseInt(price);
price = Number(price);

console.log("After tString to Number conversion: ", price, typeof price);

// convert number to string

let amount = 100;
console.log("Before number to string conversion: ", amount, typeof amount);

// amount= amount.toString();
amount = String(amount);

console.log("After number to string conversion: ", amount, typeof amount);

// convert string to decimal
let newPrice = '99.5';
console.log("Before string to decimal conversion: ", newPrice, typeof newPrice);

newPrice = parseFloat(newPrice);

console.log("After string to decimal conversion: ", newPrice, typeof newPrice);

// convert number to boolean, other than zero all values are considered as true.
let hasPrice = 1;
console.log("Before number to boolean conversion: ", hasPrice, typeof hasPrice);

hasPrice = Boolean(hasPrice);

console.log("After number to boolean conversion: ", hasPrice, typeof hasPrice);

// Miscllenious

console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined)
console.log('hello'/3)

let num = 'hello';
num = parseInt(num);
console.log(num, typeof num);