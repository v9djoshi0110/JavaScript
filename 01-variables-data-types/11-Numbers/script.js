const num =  new Number(5.43435);

let x;

x = num.toString(); // 5.43435 string

x = num.toString().length; // 7 'number'

x = num.toFixed(2); // 5.43 string

x = num.toPrecision(2); //5.4 string

//x = num.__proto__;

x = num.toExponential(2); // 5.43e+0 string

x = num.valueOf(); // 5.43435 'number'

x = Number.MAX_VALUE; // 1.7976931348623157e+308 'number'
x = Number.MIN_VALUE; // 5e-324 'number'


console.log(x, typeof x);



