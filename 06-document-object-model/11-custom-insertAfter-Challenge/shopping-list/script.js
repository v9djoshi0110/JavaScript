// Custom insert After

const newEl = document.createElement('li');
newEl.textContent = 'Insert Me After..';

const existingEl = document.querySelector('li:first-child');

insertAfter(newEl, existingEl);

function insertAfter(newEl, existingEl) {
  const secondItem = existingEl.nextSibling;
  const parent = existingEl.parentElement; // or you can use 'existingEl.parentNode'
  console.log(parent);
  parent.insertBefore(newEl, secondItem);
}
