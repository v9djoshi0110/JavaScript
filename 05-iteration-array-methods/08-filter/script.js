//A function that accepts up to three arguments.
//The filter method calls the predicate function one time for each element in the array.
//Returns the elements of an array that meet the condition specified in a callback function.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// using forEach
const oddNumbers = [];
numbers.forEach((number) => {
  if (number % 2 !== 0) {
    oddNumbers.push(number);
  }
});
console.log(oddNumbers);

//
const companies = [
  { name: 'Company one', category: 'Finance', start: 1982, end: 2004 },
  { name: 'Company two', category: 'Retail', start: 1980, end: 2000 },
  { name: 'Company three', category: 'Retail', start: 1982, end: 1985 },
  { name: 'Company four', category: 'Auto', start: 1988, end: 2001 },
  { name: 'Company five', category: 'Finance', start: 1992, end: 2000 },
  { name: 'Company six', category: 'Auto', start: 1990, end: 2025 },
  { name: 'Company seven', category: 'IT Service', start: 1982, end: 2010 },
];

// get only finance companies
const financeCompanies = companies.filter(
  (Company) => Company.category === 'Finance'
);
console.log(financeCompanies);

// get companies that started in or after 1988 and ended in or before 2004

const earlyCompanies = companies.filter(
  (company) => company.start >= 1988 && company.end <= 2004
);
console.log(earlyCompanies);

// get companies that lasted 10 years or more
const longCompanies = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(longCompanies);
