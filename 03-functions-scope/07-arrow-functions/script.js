// normal function
function sayHello(userName){
    return 'Hello ' + userName;
}

//Arrow function syntax
//1.
const sayHi = (userName) => {
    return 'Hi '+ userName;
}
console.log(sayHello('Vick')); // Hello Vick
console.log(sayHi('Nick')); // Hi Nick

//2.
const add = (a, b) => {
    return a + b;
}
console.log(add(5, 7)); // 12

// implicit return
const subtract =  (a, b) => a - b;
// we can leave off () for a single param function
const double = a => a * 2 ;

console.log(subtract(7, 5)); // 2 
console.log(double(7)); // 14 

// returning an object
const user = {
    id:1,
    name:'Vick'
}

const getUser = () => {
 return user;
}
// OR as below
//const getUser = () =>  user;
console.log('User with id: '+ getUser().id + ' and name: ' + user.name);

const createUser = () => ({name: 'Nick', id: 2});
console.log('Create User with id: '+ createUser().id + ' and name: ' + createUser().name);

//
const arr = [1,2,3,4,5,6,7];

arr.forEach(function (n) {
    console.log(n);
});

// Arrow function in a callback
arr.forEach(n => console.log('using arrow function: ' + n)); // 1,2,3,4,5,6,7