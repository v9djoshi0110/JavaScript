const age = 12;

//using if statement
if (age >= 18) {
  console.log('You are eligible to vote');
} else {
  console.log("You ain't eligible to vote"); // You ain't eligible to vote
}
//using ternary operator

age >= 18
  ? console.log('You are eligible to vote')
  : console.log('You are not eligible to vote'); // You are not eligible to vote

// assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
console.log(canVote); //false
const canVote2 =
  age >= 18 ? 'You are eligible to vote' : 'You are not eligible to vote';
console.log(canVote2); //You are not eligible to vote

// Multiple statements
const auth = false;
let redirect;

if (auth) {
  alert('Welcome to homepage');
  redirect = '/home';
} else {
  alert('Access is denied');
  redirect = '/login';
}
console.log(redirect); // /login

//above is using ternary operator

auth
  ? (alert('Welcome to homepage'), (redirect = '/home'))
  : (alert('Access is denied'), (redirect = '/login'));
console.log(redirect); // /login

// if we don't have else condition
auth ? console.log('Welcome to dashboard!') : null; //
//OR
auth && console.log('Welcome to dashboard'); //
