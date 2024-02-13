// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

// using forEach
const doubleNumbers2 = [];
numbers.forEach((number) => {
  doubleNumbers2.push(number * 2);
});
console.log(doubleNumbers2);

// map() chaining

const sqrtAndDouble = numbers
  .map((number) => {
    return Math.sqrt(number);
  })
  .map((sqrt) => sqrt * 2);

console.log(sqrtAndDouble);

//
const companies = [
  { name: 'Infosys', category: 'Finance', start: 1982, end: 2004 },
  { name: 'Deloitte', category: 'IT Service', start: 1980, end: 2000 },
  { name: 'Wipro', category: 'Retail', start: 1982, end: 1985 },
  { name: 'Nagarro', category: 'Auto', start: 1988, end: 2001 },
  { name: 'CGI', category: 'Finance', start: 1992, end: 2000 },
  { name: 'IBM', category: 'Auto', start: 1990, end: 2025 },
  { name: 'Mindtree', category: 'IT Service', start: 1982, end: 2030 },
];

// create an array of company names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// create an array with just company name and category
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
console.log(companyInfo);

//Create an array of objects with the name and the length of each company in years
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + ' years',
  };
});
console.log(companyYears);

//chaining defferent methods
const evenDoubleNumbers = numbers
  .filter((number) => number % 2 === 0)
  .map((evenNum) => evenNum * 2);
console.log(evenDoubleNumbers);
