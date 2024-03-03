function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');
  const li = document.createElement('li');
  li.textContent = 'FirstItem';
  firstItem.replaceWith(li);
}
replaceFirstItem();

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');
  secondItem.outerHTML = '<li>Replaced2ndItem </li>';
}
replaceSecondItem();

function replaceAll() {
  const allLists = document.querySelectorAll('li');
  /*
  allLists.forEach((item, index) => {
    // item.outerHTML = '<li>Replaced All</li>';
    item.innerHTML = 'Replaced All';
    if (index === 1) {
      item.outerHTML = '<li>Replaced Second Item</li>';
    }
  }); */
  // using a ternary operator here
  allLists.forEach(
    (item, index) =>
      (item.outerHTML = index === 2 ? '<li>NEW ITEM</li>' : '<li>OLD ITEM</li>')
  );
}
replaceAll();

function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('h1');

  const h2 = document.createElement('h2');
  h2.id = 'shopping-list';
  h2.textContent = 'My Shopping List';
  header.replaceChild(h2, h1);
}
replaceChildHeading();
