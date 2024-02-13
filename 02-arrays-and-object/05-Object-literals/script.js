let x;

const employee = {
    name:'Vick',
    age: 26,
    id: 12345,
    isManager: true,
    address:{
        street: '244 main street',
        city:'Jaipur',
        state:'RJ'
    },
    hobbies:['sports','movies']
}

x = employee.name; //Vick
x = employee['age']; //26
x = employee.id; //12345
x = employee.address.city; // Jaipur
x = employee.hobbies[1]; //movies

console.log(x);

// update object
employee.age = 30; //age updated in object to 30
employee['isManager']=false;

delete employee.id; // id is removed from the object.
employee.isMarried = true; // isMarried property added in the object.

// adding function property into the object
employee.greet = function () {
  console.log(`Hey there, my name is ${this.name}`);
}

employee.greet(); // Hey there, my name is Vick

const employee2 = {
    'first name': 'Nick', // not recommended way, recommended--> firstName
    'last name':'Joshi'
}

let y = employee2['first name'];
console.log(y); // Nick

console.log(typeof employee.greet); // function
