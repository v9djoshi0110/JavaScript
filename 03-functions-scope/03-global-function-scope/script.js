//alert('hello');
console.log(window.innerWidth); // window object in global scope

const x = 5; // global scope variable

console.log(x, 'in global'); // 5 'in global'

function run(){
    console.log(x, 'in function');
   // console.log(y); // runtime error--> Uncaught ReferenceError: y is not defined
}
run(); // 5 'in function'

if(true){
    console.log(x, 'in block');
} // 5 'in block'

function add(){
    const y = 10; // function or local scope variable
    console.log(x + y);
}
add(); //15
function subtract(){
    const x = 2; // global scope variable 'x' is overridden by this, called variable shadowing
    const y = 10; // function or local scope variable
    console.log(y-x);
}
subtract(); //8




