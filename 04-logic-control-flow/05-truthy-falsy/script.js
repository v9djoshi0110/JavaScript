//shortcut for console.log() ==> clg and press enter

// Falsy values
// - false
// - 0
// - "" or '' (Empty String)
// - null
// - undefined
// - NaN

const x = null;

if(x){
    console.log('truthy value');
}else{
    console.log('falsy value');
} // falsy value

console.log(Boolean(x));//false

// Truthy values
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {}  (empty object)
// - function () {} --> empty function

const y = {};
if(y){
    console.log('truthy value');
}else{
    console.log('falsy value');
} // truthy value

console.log(Boolean(y));//true

//Truthy and Falsy caveats
const children = -1;
if(!isNaN(children) && children > 0){
    console.log(`You have ${children} children`);
}else {
    console.log('Enter correct number of children..');
} // Enter correct number of children..

// checking for empty arrays
const posts = [];

if(posts.length > 0){ // if(posts)--> this will return 'true' in case of empty array, which is wrong
            // so we should use length property  
    console.log('List posts..');
}else{
    console.log('No post to show');
}// No post to show

// checking for empty object
const user = {};

if(Object.keys(user).length > 0){ // if(user)--> this will return 'true' in case of empty object, which is wrong
            // so we should use length property on keys of object.
    console.log('Show user..');
}else{
    console.log('No user to show');
} // No user to show

// loose equality (==)
console.log(false === 0); //false
console.log('' == 0); // true, that is not correct
console.log(null === undefined); // false.