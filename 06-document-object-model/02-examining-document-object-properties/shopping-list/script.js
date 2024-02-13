let output;

output = document.all;
output = document.all[10];
output = document.all.length;

output = document.documentElement;
output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method; // get
output = document.forms[0].action;

document.forms[0].id = 'new-id'; // it will change the form id.

output = document.links[0];

document.links[0].href = 'https://www.google.com';

document.links[0].className = 'google-class';

output = document.links[0].classList;

output = document.images[0];
output = document.images[0].src;

output = document.forms; // HTMLCollection [form#new-id, new-id: form#new-id]
// HTMLCollection  is array like, but it is not an Array.

Array.from(document.forms).forEach((form) => {
  console.log(form);
}); // form#new-id

console.log(output);
