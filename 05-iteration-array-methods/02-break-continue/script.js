//break statement ==> Break statement stops the entire process of the loop
// Break also terminates the remaining iterations.
for (let i = 0; i < 10; i++) {
  if (i === 7) {
    console.log('I got 7, it is my favourite number!');
    break;
  }
  console.log('Number: ' + i);
}

//continue statement ==> Continue statement only stops the current iteration of the loop.
//Continue doesn't terminate the next iterations; it resumes with the successive iterations.
for (let i = 0; i <= 10; i++) {
  if (i === 3) {
    console.log(`skipping number: ${i}`);
    continue;
  }
  console.log('Num: ' + i);
}
