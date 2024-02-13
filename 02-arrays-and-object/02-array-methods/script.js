// Array litral
const arr = [1, 43, 56, 4];

console.log(arr, typeof arr);

// array constructor
const colors = new Array('Green','Red', 'Yellow');

console.log(colors, typeof colors); 

const  mixed = ['Hello', 1, true, null];

let x; 

// fill(value,index)-> Changes all array elements from start to end index to a static value and returns the modified array
x = colors.fill('Pink'); // ['Pink', 'Pink', 'Pink']
x = colors.fill("Saffron", 1); // ['Pink', 'Saffron', 'Saffron']

x = colors.push('Yellow'); // 4 --> length of the new array colors

x = colors.reverse();// ['Yellow', 'Saffron', 'Saffron', 'Pink']

x = colors.join('|');// Yellow|Saffron|Saffron|Pink

x = colors.concat(arr,mixed); // ['Yellow', 'Saffron', 'Saffron', 'Pink', 1, 43, 56, 4, 'Hello', 1, true, null]

x = x.slice(0,8); // ['Yellow', 'Saffron', 'Saffron', 'Pink', 1, 43, 56, 4]

x = colors.pop(); // pink
x = colors.toString(); // Yellow,Saffron,Saffron
x = colors.splice(0,2); //  ['Yellow', 'Saffron'] --> Removes elements from an array and, returning the deleted elements.

x = colors.indexOf(15);// -1

x = colors.includes("Pink"); //false


console.log(x);



