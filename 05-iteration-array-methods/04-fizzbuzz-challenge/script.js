//print the numbers from 1 to 100
/*
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
*/

// for multiple of 3, print 'Fuzz' instead of the number
/*
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
*/
//using while
let j = 1;
while (j <= 100) {
  if (j % 15 === 0) {
    console.log('FizzBuzz');
  } else if (j % 3 === 0) {
    console.log('Fizz');
  } else if (j % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(j);
  }
  j++;
}

//The major difference between for loop and the while loop is that for loop is used when the number of iterations is known,
// whereas execution is done in the while loop until the statement in the program is proved wrong.
