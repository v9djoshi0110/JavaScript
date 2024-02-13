// three types of variables --> let, var, const.

let a = 20;

console.log(a);


let firstName = 'Vinod';
let lastName = 'Sharma';

//console.log(firstName, lastName, age); // Error--> Cannot access 'age' before initialization
// same will work whenn we use 'var' type
console.log(firstName, lastName);

let age;
console.log(age); 
age = 30; 
console.log(age);

// const type ---------------- Reassignment at base level is not possible.
// and const type should be initialized at the time of declaration.

const price = 100;
// price = 200; // Error --> Uncaught TypeError: Assignment to constant variable.
console.log(price);

if(true){
 //   price = price + 10; // Error --> Uncaught TypeError: Assignment to constant variable.
 console.log(price);
}

const person = {
    name: 'Vinod',
    email: 'vinod@gmail.com'
}

person.name = 'Krishna'; // we can change the values inside the const object.

console.log(person);

const arr = [1,2,3,4,5]

console.log(arr);

arr.push(6); // this is also possible.

console.log(arr);


// Declare multiple values at once

let x=10, y, z ;

console.log(y); // undefined

const p=10, q=30, r=20 ; // not a recommended approach.

console.log(q);

const test1 = 'test1';
const test2 = 'test2';
const test3 = 'test3';   // recommended approach.

console.log(test1, test2, test3);



