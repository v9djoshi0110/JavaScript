// Array litral
const arr = [1, 43, 56, 4];

console.log(arr, typeof arr);

// array constructor
const colors = new Array('Green','Red', 'Yellow');

console.log(colors, typeof colors); 

let x; 

x = arr[3]; //4
x = arr[1] + arr[3]; // 47

x = `My favorite color is ${colors[2]}`; // My favorite color is Yellow
x = arr.length; // 4

colors[1]= 'Pink';
x = colors; // ['Green', 'Pink', 'Yellow']

colors.length = 4; // ['Green', 'Pink', 'Yellow', empty]

colors.length = 2 // ['Green', 'Pink']

colors[3] = 'Saffron'; // ['Green', 'Pink', empty, 'Saffron']

colors[colors.length] = 'White'; // ['Green', 'Pink', empty, 'Saffron', 'White']



console.log(x);



