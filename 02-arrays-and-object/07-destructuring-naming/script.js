const fname = 'Saanvi';
const lname = 'Joshi';
const age = 5;

let x;
const person = {
        fname,
        lastname:lname,
        age
};
x = person; // {fname: 'Saanvi', lastname: 'Joshi', age: 5}
x = person.lastname; // Joshi

// destructuring

const todo = {
    id: 1,
    title: 'Open Demat account',
    user : {
        name:'Vick'
    }
};

const {id:myId, title, user: {name} } = todo;

console.log(`Hey ${name}, today you have to complete task ${myId}, that is '${title}'`);
// Hey Vick, today you have to complete task 1, that is 'Open Demat account'

// destructure array
const numbers = [32,43, 64, 76, 87,40];

const [hi, second, third, ...next] = numbers;

console.log(hi, second, third); // 32 43 64
console.log(next); // [76, 87, 40]

