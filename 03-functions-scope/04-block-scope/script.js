const x = 10;


if(true){
    const y = 20; // block scope
    console.log(x + y);
}
//console.log(y); // Uncaught ReferenceError: y is not defined

for(let i = 0; i <=5; i++){
    console.log(i);
}
// console.log(i); Uncaught ReferenceError: i is not defined

if(true){
 const a =10; // block scope
 let b = 20; // block scope
 var c = 30;  // global scope, and also this variable is added in the window object.
}
console.log( c); // 30
console.log('from window object: ' + window.c); // from window object: 30

function run(){
    const a1 = 10; // function scope
    let b1 = 20;  // function scope
    var c1 = 30; // function scope
}
// console.log(c1);// Uncaught ReferenceError: c1 is not defined

// Hence, var defined inside the function will be in local scope of that function
// but var defined inside the block (if, for, etc.) will be available for global scope

const foo = 'foo'; // global scope but not added in window object
let foo1 = 'foo1'; // global scope but not added in window object

var bar = 'bar'; // globa scope and also added in window object.
var fun = function (){
    console.log('Having Fun');
}  
console.log(window.bar, window.fun); 
/* o/p-->  bar ƒ havingFun(){
    console.log('Having Fun');
} */
