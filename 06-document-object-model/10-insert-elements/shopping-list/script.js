// insertAdjacentElement Example
function insertElement() {
  const items = document.querySelector('#item-input');
  const elementPara = document.createElement('p');
  elementPara.textContent = 'insertAdjacentElement';
  items.insertAdjacentElement('beforebegin', elementPara);
}

// insertAdjacentText Example
function insertText() {
  const addItemsButton = document.querySelector('.btn');
  addItemsButton.insertAdjacentText('afterend', ' insertAdjacentText');
}

//insertAdjacentHTML Example
function insertHTML() {
  const filter = document.querySelector('#filter');
  filter.insertAdjacentHTML('afterend', '<h5>insertAdjacentHTML</h5>');
}

// insertBefore Example
function insertBefore() {
  const fourthItem = document.querySelector('li:nth-child(4)');
  const li = document.createElement('li');
  li.textContent = 'insertBefore';
  const ul = document.querySelector('ul');
  ul.insertBefore(li, fourthItem);
}
// available positions --
/*
<!-- beforeBegin -->
<p>
  <!-- afterBegin -->
  sth
  <!-- beforeEnd -->
</p>
<!-- afterEnd -->  
*/
insertElement();
insertText();
insertHTML();
insertBefore();
