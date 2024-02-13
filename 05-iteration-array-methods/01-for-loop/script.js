/*
  for ([intialExpression]; [conditionalExpression]; [incrementExpression]) {
     statements;
    }
*/

for (let i = 0; i <= 5; i++) {
  if (i === 2) {
    console.log(`${i} is my favourite number!`);
  } else {
    console.log('Number: ' + i);
  }
}

// Nested for loop

for (let i = 1; i <= 5; i++) {
  console.log('Num: ' + i);
  for (let j = 0; j <= 5; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

const names = ['Vick', 'Nick', 'Saanvi', 'John', 'Krish'];

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'John') {
    console.log(`${names[i]} is a good boy.`);
  } else {
    console.log(names[i]);
  }
}
