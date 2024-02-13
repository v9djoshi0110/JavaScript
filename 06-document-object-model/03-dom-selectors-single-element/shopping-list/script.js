// document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

//Set attribute
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');
//get/change the content
console.log(title);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

//change styles
title.style.color = 'red';
title.style.backgroundColor = 'Orange';
title.style.padding = '8px';
title.style.borderRadius = '10px';

// document.querySelector() -- this is part of ES6 (ES2015) JS
// querySelector is kind of replacement of jQuery
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title')); // selecting by id
console.log(document.querySelector('.container')); // selecting by class
console.log(document.querySelector('button[id="clear"]')); // selecting specific element, if we have multiple
console.log(document.querySelector('input[type="text"]')); // selecting specific input element
console.log(document.querySelector('li:nth-child(2)').innerText); // pseudo selector for lists o/p--> Orange Juice

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

// use these methods on other elements

const list = document.querySelector('ul');
console.log(list);

const firstItem = list.querySelector('li');
firstItem.style.color = 'Green';

const thirdItem = list.querySelector('li:nth-child(3)');
const thirdItemButton = thirdItem.querySelector('button');
console.log(thirdItemButton);
thirdItemButton.setAttribute('id', 'list-button');
