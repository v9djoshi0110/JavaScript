const fruits = ['Mango','Apple','Banana'];

const berries = ['Blueberry','Strawberry','Gooseberry'];

fruits.push(berries);

console.log(fruits); //['Mango', 'Apple', 'Banana', Array(3)]

const removeLast = fruits.pop();

console.log(fruits); // ['Mango', 'Apple', 'Banana']

let x;

const allFruits = [fruits,berries];

x = allFruits; // [Array(3), Array(3)]

x = allFruits[1][1]; // Strawberry

x = allFruits[0]; // ['Mango', 'Apple', 'Banana']

x = fruits.concat(berries); // ['Mango', 'Apple', 'Banana', 'Blueberry', 'Strawberry', 'Gooseberry']

// Spread operator --> ...
x = [...fruits, ...berries]; // ['Mango', 'Apple', 'Banana', 'Blueberry', 'Strawberry', 'Gooseberry']

//Flatten the array
const arr = [1,2,3,[4,5],[6,7,8],9,0];

x = arr; // [1, 2, 3, Array(2), Array(3), 9, 0]

x = arr.flat(); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// Static methods of Array

x =  Array.isArray(fruits); // true

x = Array.isArray('Hey'); //false

x = Array.from('1234565'); //['1', '2', '3', '4', '5', '6', '5']

x = Array.from('Hi There'); // ['H', 'i', ' ', 'T', 'h', 'e', 'r', 'e']

x = Array.of('hi','Hello','1','2'); // ['hi', 'Hello', '1', '2']

 
console.log(x)

