// Arithmatic operators

let a;

a = 5 + 5;
a = 5 - 3;
a = 4 * 3;
a = 5 / 2;
a = 5 % 2;

// Concatenation operator
a = 'Hey' + '! ' + 'How are you?';

//Exponent
a = 2 ** 5 ;

//Increament / Decrement
let z = 4;
z++; //a = a + 1;
z--; //a = a - 1;
let x = z++; // assigned first and then increment happen
let y = ++z; // first increment and then assignment

console.log(z, x, y);

// Assignment
a = 5;
a += 5;
a -= 5;
a *= 5;
a /= 5;
a **= 2;

// comparison operators

a = 2 == '2'; // true, value comparison
a = 2 === '2'; // false, value and type comparison

a = 2 != '3'; // true
a = 2 !== 2; // false

a = 2 < 5;
a = 5 > 2;
a = 2 <= 2;
a = 3 >= 10;


console.log(a);
