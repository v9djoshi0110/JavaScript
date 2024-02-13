let output;
//get child elements from parent
const parent = document.querySelector('.parent');

output = parent.children;

output = parent.children[1].innerText; // Child 2
output = parent.children[1].className; // child
output = parent.children[1].nodeName; // DIV

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

//get parent element from a child
const child = document.querySelector('.child'); // it will give first child element

output = child.parentElement;
child.parentElement.style.border = '2px solid #ccc';
child.parentElement.style.padding = '10px';

// Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)'); //pseudo selector
secondItem.previousElementSibling.style.color = 'Orange';
secondItem.nextElementSibling.style.color = 'green';

console.log(output);
