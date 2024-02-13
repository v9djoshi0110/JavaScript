let x;
let y;

x = Math.floor(Math.random() * 100 + 1);

y = Math.floor(Math.random() * 50 + 1);

const sumOutput = `${x} + ${y} = ${x + y}`;
const differenceOutput = `${x} - ${y} = ${x - y}`;
const multiplyOutput = `${x} * ${y} = ${x * y}`;
const quotientOutput = `${x} / ${y} = ${x / y}`;
const reminderOutput = `${x} % ${y} = ${x % y}`;



console.log(sumOutput);
console.log(differenceOutput);
console.log(multiplyOutput);
console.log(quotientOutput);
console.log(reminderOutput);

