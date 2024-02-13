// Challenge-1
const arr = [1,2,3,4,5];
//expected: [6,5,4,3,2,1,0]

arr.reverse();
arr.push(0);
arr.unshift(6);

console.log(arr); //[6,5,4,3,2,1,0]

// Challenge-2
const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,0];
// expected result: // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let x;
let result;

//1. 
//x = arr1.splice(4); // [5]

//result = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

//2.
x = arr1.slice(0,4); //  [1, 2, 3, 4]

result = [...x, ...arr2]; // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log(x,result);
