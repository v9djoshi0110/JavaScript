let x;

const name = 'Vinod';
const age = 25;

x = 'Hello, my name is ' + name + ' , and I am ' + age + ' years old.';

//Template literals : Introduced in ES6
x = `Hello, my name is ${name}, and I am ${age} years old!`

// x = 'Hello World!';   // typeof x --> string
const s = new String('Hello World'); //typeof x --> object

// String properties and methods

x = s.length;

//access value by index
x = s[0];

x = s.__proto__; // this will show all the methods present in this string Object.

x = s.toLowerCase(); // hello world
x = s.toUpperCase(); // HELLO WORLD

x = s.charAt(0); //H

x = s.valueOf(); // Hello World 
x = s.toString(); // Hello World

x = s.indexOf('W'); //6
x = s.replace('World', 'Vinod'); // Hello Vinod

x = s.substring(1, 5); // ello
x = s.slice(-11, -6); // Hello

x = '   Hello  World..      ';
x = x.trim();// remove leading and trailing spaces.

x = s.includes('Helli'); // false

x = s.split(' '); //  ['Hello', 'World']

console.log(x);