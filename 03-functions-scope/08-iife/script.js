//IIFE 
// normal IIFE
(
    function hello(){
        console.log('Hello....');
    }
)();

//function with params
(
function sayHi(name){
    console.log('Hi, '+ name);
}
)('Vick');
//Using Arrow function
(
    name => console.log('Hi, '+ name)
)('Vick');

// declaring another function inside IIFE
(
    function sayHello(){
        const name = 'Nick';
        console.log('Hello, ' + name);
        const hello = () => console.log(`Hello ${name} from the IIFE`);
        hello();
    }
)();
