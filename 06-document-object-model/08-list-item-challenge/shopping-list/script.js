// Quick and Dirty way

function createListItem(item) {
  const li = document.createElement('li');
  li.innerHTML = `${item}
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`;

  document.querySelector('.items').appendChild(li); // adding child for parent element 'ul' which have class: '.items'
}

// Clean and Performant way

function createNewItem(item) {
  const li = document.createElement('li');
  const button = document.createElement('button');
  const icon = document.createElement('i');

  button.className = 'remove-item btn-link text-red';
  icon.className = 'fa-solid fa-xmark';
  li.appendChild(document.createTextNode(item));
  button.appendChild(icon);
  li.appendChild(button);
  document.querySelector('.items').appendChild(li); // using .items bcz --> <ul id="item-list" class="items">
}

createListItem('Curd');
createNewItem('Almond');
