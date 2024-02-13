let output;

// child node from parent
const parent = document.querySelector('.parent');
output = parent.childNodes; // NodeList(9) [text, comment, text, div.child, text, div.child, text, div.child, text]
// space is considered as text node and every new line have space, that's why we see many text nodes in above output

output = parent.childNodes[3].innerText; // Child 1
output = parent.childNodes[3].outerHTML; // <div class="child">Child 1</div>
output = parent.childNodes[3].nodeName; // DIV
output = parent.childNodes[3].textContent; // Child 1

parent.childNodes[3].innerText = 'Child One';
parent.childNodes[5].style.color = 'Orange';

output = parent.firstChild; // #text  --> as text node is the first one.
output = parent.lastChild; // #text  --> as text node is the last one also.

parent.lastChild.textContent = 'Hey there!';

// Parent node from child
const child = document.querySelector('.child');

output = child.parentNode; //div.parent
output = child.parentElement; //div.parent

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

//Siblings
const secondItem = document.querySelector('.child:nth-child(2)');
secondItem.innerText = 'Child Two';

secondItem.nextSibling.textContent = 'fill the space after Child Two';
secondItem.previousSibling.previousSibling.style.color = 'red';

console.log(output);
