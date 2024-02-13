let x ;

x = 4 + '4'; // 44

x = 4 + Number('4'); // 8

x = 4 * '4'; // 16

x = 4 * 'hi'; // NaN, typeof x is number

x = 4 + undefined; // NaN

x = 5 + null; // 5==> as type coercion for null is 0

x = Number(null); // 0

x= 4 + true ; // 5 => here, type coercion for true is 1

x = 'Hi ' + true; // Hi true

x = '4' + false; // 4false

x = Number(true); //1
x = Number(false); // 0




console.log(x, typeof x);

