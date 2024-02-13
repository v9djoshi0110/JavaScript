if(true){
    console.log('this is true');
}

if(false){
    console.log('this is false');
}
const x = 20;
const y = 10;
const z = 20;


if(x > y){
    console.log(`${x} is greater than ${y}`);
}
if(x === z){
    console.log(`x is equal to z and that is ${z}`);
}
if(x >= z){
    console.log(`${x} is greater than ${z}`);
}
if(x < z){
    console.log(`${x} is less than ${z}`);
}else {
    console.log(`${x} is greater than or equal to ${z}`);
}
// Shorthand if
if(x > y)
    console.log(`${x} is greater than ${y}`),
    console.log('shorthand if statement...');
else 
    console.log(`${x} is less than ${y}`);
