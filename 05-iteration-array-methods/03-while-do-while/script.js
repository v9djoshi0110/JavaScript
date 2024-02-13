let i = 1;

// while
while (i <= 7) {
  console.log('Number: ' + i);
  i++;
}

// nested while
let k = 1;
while (k <= 7) {
  console.log('Num: ' + k);
  let j = 1;
  while (j <= 5) {
    console.log(`${k}*${j} = ${k * j}`);
    j++;
  }
  k++;
}
// do-while
let h = 1;
do {
  console.log('do-while number:' + h);
  h++;
} while (h <= 4);

// in the 'while' loop the condition is checked prior to executing any statements whereas in the case of 'do-while' loop,
// statements are run at least once, and then the condition is verified.
