// String

const firstName = 'Krishna';

//Number
const age = 30;

// Boolean 
const isMarried = true;

// Null
const accountNumber = null;

// Undefined
let price;

// Symbol
const id =  Symbol('id');

//bigint
const n = 9482042849080242n;

// Reference Types
const person = {
    name: 'Vinod',
    email: 'vinod@gmail.com'
}

const fun = function(){
    console.log('I am a function..')
}

const output = fun;

console.log(output, typeof output);


// type of null is 'object' -- reason below
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

// type of function is 'function' -- reason below

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
