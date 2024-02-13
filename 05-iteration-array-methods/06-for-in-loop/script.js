// for-in Array
const items = ['table', 'key', 'mouse', 'ssd', 'Marker'];

for (const item in items) {
  console.log(item, items[item]);
}

// for-in string
const str = 'Hello';
for (const s in str) {
  console.log(str[s]);
}

// for-in array of objects
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
for (const usr in users) {
  console.log(users[usr].name);
}

// for-in Object

const color = {
  color1: 'Orange',
  color2: 'Green',
  color3: 'Yellow',
  color4: 'Saffron',
};

for (const key in color) {
  console.log(key, color[key]);
}
