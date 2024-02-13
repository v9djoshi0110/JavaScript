// console.log(window);
// console.dir(window.document);
console.log(document);
console.log(document.body.innerHTML);

console.log(document.body.innerText);
console.log(document.links[0]);

// document.body.innerHTML = '<h1>Hey There </h1>';

console.log(document.getElementById('main'));
const main = document.getElementById('main');
// main.innerHTML = '<h1>Hello from main</h1>';

document.querySelector('#main h1').innerText = 'Hey';
