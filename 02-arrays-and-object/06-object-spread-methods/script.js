const obj = {};
obj.id = 5;
obj.name = 'Vick';

console.log(obj); // {id: 5, name: 'Vick'}

const obj1 = new Object();
obj1.test = 'test';
obj1.isValid = true;
console.log(obj1);  // {test: 'test', isValid: true}


let x ;

x = {obj, obj1}; // {obj: {…}, obj1: {…}}

x = Object.assign({},obj,obj1); // {id: 5, name: 'Vick', test: 'test', isValid: true}

console.log(x); // {id: 5, name: 'Vick', test: 'test', isValid: true}

// Spread operator
x = {...obj, ...obj1}; // {id: 5, name: 'Vick', test: 'test', isValid: true}

x = {obj, ...obj1}; // {obj: {…}, test: 'test', isValid: true}

x = Object.keys(obj1);// ['test', 'isValid']

x = Object.keys(obj1).length; // 2 --> total properties in the object, obj1

x =  Object.values(obj1); // ['test', true]

x = Object.entries(obj1); //  [Array(2), Array(2)]

const todos = [
    {id:1, title: 'Open Bank Account'},
    {id:2, title: 'Buy a book'},
    {id:3, title: 'Go to gym'}
]

x = todos[2].title; // Go to gym

x = obj.hasOwnProperty('age'); // false

console.log(x);