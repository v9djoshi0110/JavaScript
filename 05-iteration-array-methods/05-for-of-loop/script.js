// for-of arrays
const colors = ['red', 'green', 'yellow', 'saffron'];
for (const color of colors) {
  console.log(color);
}

// for-of string

const str = 'Hello';
for (const s of str) {
  console.log(s);
}

// for-of array of object
const users = [
  {
    name: 'Vick',
  },
  {
    name: 'Nick',
  },
  {
    name: 'John',
  },
];
for (const usr of users) {
  console.log(usr.name);
}

// loop over map
const map = new Map();
map.set('name', 'Vick');
map.set('age', 30);
for (const [k, v] of map) {
  console.log(k, v);
}
