//Challenge-1
const people = [
  {
    firstName: 'Vick',
    lastName: 'Sharma',
    email: 'vick@gmail.com',
    age: 23,
  },
  {
    firstName: 'Nick',
    lastName: 'Josh',
    email: 'nick@gmail.com',
    age: 25,
  },
  {
    firstName: 'John',
    lastName: 'Vik',
    email: 'john@gmail.com',
    age: 45,
  },
  {
    firstName: 'Sheela',
    lastName: 'Jat',
    email: 'Sheela@gmail.com',
    age: 52,
  },
  {
    firstName: 'Sonu',
    lastName: 'Aggarwal',
    email: 'sonu@gmail.com',
    age: 20,
  },
];

const youngPeople = people
  .filter((p) => p.age <= 25)
  .map((p) => {
    return { name: p.firstName + ' ' + p.lastName, email: p.email };
  });
console.log(youngPeople);

// chalenge-2
// Add all the positive numbers in the Array
const numbers = [2, -3, 5, 6, -12, -8, 7, 4];

const positiveSum = numbers
  .filter((num) => num > 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(positiveSum); //24

//Challenge-3
// create a new array called 'capitalizedWords' with the words from the 'words' array with the first letter of
// each word capitalized.

const words = ['businessAnalyst', 'developer', 'tester'];

const capitalizedWords = [];

words.forEach((word) => {
  capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
});
console.log(capitalizedWords); // ['BusinessAnalyst', 'Developer', 'Tester']

//OR

const capWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
});

console.log(capWords); // ['BusinessAnalyst', 'Developer', 'Tester']
