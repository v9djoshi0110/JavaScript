// Clean and Performant way

function createNewItem(item) {
  const li = document.createElement('li');
  const icon = createIcon('fa-solid fa-xmark');
  const button = createButton(icon, 'remove-item btn-link text-red');

  li.appendChild(document.createTextNode(item));
  li.appendChild(button);
  document.querySelector('.items').appendChild(li); // using .items bcz --> <ul id="item-list" class="items">
}

createNewItem('Walnut');
createNewItem('Almond');

function createButton(icon, clsName) {
  const button = document.createElement('button');
  button.className = clsName;
  button.appendChild(icon);
  return button;
}

function createIcon(clsName) {
  const icon = document.createElement('i');
  icon.className = clsName;
  return icon;
}
