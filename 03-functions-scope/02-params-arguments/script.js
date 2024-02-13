//Default Params
// Before ES2015 or ES6
function registerdUser(user){
    if(!user){
        user = 'Bot';
    }  
    return user + ' is registered';
}
console.log(registerdUser()); // Nick is registered
console.log(registerdUser('Vick')); // Vick is registered

//Default value, After ES6 
function registerdUsr(user = 'Bot'){
    return user + ' is registered';
}
console.log(registerdUsr()); // Nick is registered
console.log(registerdUsr('Vick')); // Vick is registered

//Rest params

function sum(...numbers){
    let total =0;
    for(const num of numbers){
        total += num;
    }
    return total;
}
console.log(sum(1,2,3,4,5,6,7)); // 28

// Objects as params

function loginUser(user){
    return  `The user ${user.name} with the id of ${user.id} is logged in `;
}

const usr = {
    id:1,
    name:'Vick'
}
console.log(loginUser(usr)); // The user Vick with the id of 1 is logged in 
console.log(loginUser({
    id:2,
    name:'Saanvi'
})); // The user Saanvi with the id of 2 is logged in 

//Array as params

function getRandomNumber(arr){
let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

console.log(getRandomNumber([1,2,3,4,5,10])); // return number at ramdom index.

